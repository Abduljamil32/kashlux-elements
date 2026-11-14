// <kl-cost-calculator> — services cost estimate (Kashlux redesign)
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-cost-calculator.js
//   Tag name: kl-cost-calculator
//   Element ID: #klCostCalc
//
// Emits "kl-request" with { summary, total } when the visitor clicks the button.
// Rates are DEMO values from the concept — replace RATES with Kashlux's real prices.

const RATES = {
  design: { name: 'Дизайн-проект', price: 1500000, per: 'bath', days: () => 7 },
  plumb:  { name: 'Монтаж сантехники', price: 1800000, per: 'bath', days: (a, b) => b * 1.5 },
  boiler: { name: 'Котельная под ключ', price: 6500000, per: 'fixed', days: () => 3 },
  rad:    { name: 'Радиаторы и тёплый пол', price: 65000, per: 'm2', days: (a) => Math.ceil(a / 60) },
  water:  { name: 'Водоподготовка', price: 1200000, per: 'fixed', days: () => 1 },
  to:     { name: 'ТО на 1 год', price: 2400000, per: 'sub', days: () => 0 },
};
const OBJECTS = [['Квартира', 1], ['Частный дом', 1.15], ['Коммерция', 1.3]];
const BUNDLE_MIN = 3;
const BUNDLE_DISCOUNT = 0.07;

const sum = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' сум';

const COST_CSS = `
:host{display:block;font-family:"RF Dewi","Onest",system-ui,sans-serif;color:#fff;
  --navy:#211E36;--navy-2:#2B2745;--orange:#E08F45;--orange-deep:#C9752C;--muted:#6E6B7B;--line:rgba(33,30,54,.12)}
*{box-sizing:border-box;margin:0;padding:0}
.grid{display:grid;grid-template-columns:1.3fr 1fr;gap:20px;align-items:start}
.grid>*{min-width:0}
.panel{background:var(--navy-2);border-radius:8px;padding:clamp(20px,3vw,32px);display:grid;gap:22px}
.lbl{font-size:13px;font-weight:600;display:block;margin-bottom:10px;opacity:.85}
.seg{display:flex;flex-wrap:wrap;gap:6px}
.seg label{cursor:pointer}.seg input{display:none}
.seg span{display:inline-block;padding:10px 14px;border-radius:8px;background:rgba(255,255,255,.08);font-size:14px;font-weight:600;border:2px solid transparent}
.seg input:checked+span{border-color:var(--orange);background:rgba(224,143,69,.15)}
.row{display:flex;justify-content:space-between;align-items:baseline}
.row b{font-family:"RF Dewi Expanded","Unbounded",sans-serif;font-size:22px;color:var(--orange)}
input[type=range]{width:100%;accent-color:var(--orange);margin-top:8px}
.checks{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.checks label{display:flex;gap:10px;align-items:center;background:rgba(255,255,255,.06);border:2px solid transparent;border-radius:8px;padding:12px 14px;cursor:pointer;font-size:14px;font-weight:600}
.checks label.on{border-color:var(--orange);background:rgba(224,143,69,.12)}
.checks input{accent-color:var(--orange);width:17px;height:17px}
.checks em{margin-left:auto;font-style:normal;font-size:12px;opacity:.6;font-weight:500}
.est{background:#fff;color:var(--navy);border-radius:8px;padding:26px}
.est h3{font-family:"RF Dewi Expanded","Unbounded",sans-serif;font-size:18px}
.est ul{list-style:none;margin:16px 0;font-size:14px}
.est li{display:flex;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px solid var(--line)}
.est li span:last-child{font-weight:600;white-space:nowrap}
.est li.g{color:#2E7D4F}.est li.empty{color:var(--muted);border:0}
.tot small{display:block;font-size:13px;color:var(--muted)}
.tot b{font-family:"RF Dewi Expanded","Unbounded",sans-serif;font-weight:800;font-size:30px;line-height:1.1}
.days{font-size:13px;background:#ECECEB;border-radius:6px;padding:8px 12px;margin:14px 0 18px}
.days:empty{display:none}
button{width:100%;font:inherit;font-size:14px;font-weight:600;cursor:pointer;border:0;border-radius:8px;padding:16px 24px;background:var(--orange);color:var(--navy);transition:background .25s}
button:hover{background:var(--orange-deep)}
button:disabled{opacity:.5;cursor:default}
.note{font-size:12px;color:var(--muted);margin-top:12px;text-align:center}
@media (max-width:900px){.grid{grid-template-columns:1fr}}
@media (max-width:520px){.checks{grid-template-columns:1fr}}
`;

class KlCostCalculator extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: 'open' });
    const per = { bath: 'за санузел', fixed: 'фикс', m2: 'за м²', sub: 'подписка' };
    root.innerHTML = `<style>${COST_CSS}</style>
      <div class="grid">
        <div class="panel">
          <div><span class="lbl">Тип объекта</span><div class="seg">
            ${OBJECTS.map(([n, k], i) => `<label><input type="radio" name="obj" value="${k}" ${i === 0 ? 'checked' : ''}><span>${n}</span></label>`).join('')}
          </div></div>
          <div><div class="row"><span class="lbl" style="margin:0">Площадь</span><b><span id="aV">120</span> м²</b></div>
            <input type="range" id="area" min="30" max="600" step="10" value="120" aria-label="Площадь"></div>
          <div><div class="row"><span class="lbl" style="margin:0">Санузлов</span><b id="bV">2</b></div>
            <input type="range" id="bath" min="1" max="8" value="2" aria-label="Количество санузлов"></div>
          <div><span class="lbl">Что нужно</span><div class="checks">
            ${Object.entries(RATES).map(([k, r]) => `<label><input type="checkbox" value="${k}" ${k === 'design' || k === 'plumb' ? 'checked' : ''}>${r.name}<em>${per[r.per]}</em></label>`).join('')}
          </div></div>
        </div>
        <div class="est">
          <h3>Предварительная смета</h3>
          <ul id="list"></ul>
          <div class="tot"><small>Итого, работы</small><b id="total">—</b></div>
          <div class="days" id="days"></div>
          <button id="go">Заказать точную смету</button>
          <p class="note">Предварительная оценка. Оборудование считается отдельно.</p>
        </div>
      </div>`;
    this.$ = (s) => root.querySelector(s);
    root.querySelector('.panel').addEventListener('input', () => this.calc());
    this.$('#go').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('kl-request', { detail: this.result }));
    });
    this.calc();
  }

  calc() {
    const root = this.shadowRoot;
    const k = Number(root.querySelector('[name=obj]:checked').value);
    const objName = OBJECTS.find(([, v]) => v === k)[0];
    const a = Number(this.$('#area').value);
    const b = Number(this.$('#bath').value);
    this.$('#aV').textContent = a;
    this.$('#bV').textContent = b;
    root.querySelectorAll('.checks label').forEach((l) => l.classList.toggle('on', l.querySelector('input').checked));

    const sel = [...root.querySelectorAll('.checks input:checked')].map((i) => i.value);
    let total = 0;
    let days = 0;
    const lines = sel.map((key) => {
      const r = RATES[key];
      let v = r.per === 'bath' ? r.price * b : r.per === 'm2' ? r.price * a : r.price;
      if (r.per !== 'sub') v *= k;
      total += v;
      days = Math.max(days, r.days(a, b));
      const qty = r.per === 'bath' ? ` × ${b}` : r.per === 'm2' ? ` · ${a} м²` : '';
      return { text: r.name + qty, value: v };
    });
    const disc = sel.length >= BUNDLE_MIN ? total * BUNDLE_DISCOUNT : 0;
    const final = total - disc;
    const d = Math.max(1, Math.ceil(days));

    this.$('#list').innerHTML = sel.length
      ? lines.map((l) => `<li><span>${l.text}</span><span>${sum(l.value)}</span></li>`).join('') +
        (disc ? `<li class="g"><span>Комплекс от ${BUNDLE_MIN} услуг −${Math.round(BUNDLE_DISCOUNT * 100)}%</span><span>−${sum(disc)}</span></li>` : '')
      : '<li class="empty">Выберите хотя бы одну услугу</li>';
    this.$('#total').textContent = sel.length ? sum(final) : '—';
    this.$('#days').textContent = sel.length ? `Срок работ: около ${d} ${d === 1 ? 'дня' : 'дней'}` : '';
    this.$('#go').disabled = !sel.length;

    this.result = {
      total: Math.round(final),
      summary: `Смета по калькулятору: ${sel.length ? sum(final) : '—'}. ${objName}, ${a} м², санузлов ${b}. ` +
        `Услуги: ${lines.map((l) => l.text).join(', ')}.`,
    };
  }
}

customElements.define('kl-cost-calculator', KlCostCalculator);
