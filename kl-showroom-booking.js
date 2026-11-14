// <kl-showroom-booking> — book a showroom visit (Aloqa / showrooms page)
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-showroom-booking.js
//   Tag name: kl-showroom-booking
//   Element ID: #klBooking
//
// Attributes:
//   showrooms  comma-separated names. Default "Минор,Алой,Фидокор,Паркент"
//   days       working days, 0 = Sunday. Default "1,2,3,4,5,6" (Mon–Sat, as on the current site)
//   slots      visit times. Default "10:00,11:00,12:00,14:00,15:00,16:00,17:00"
//   note       optional text added to the request (e.g. a finish picked on the home page)
//   status     set by page code: "sending" | "sent" | "error"
//
// Emits "kl-book" with { showroom, date, dateLabel, time, goal, name, phone, note }.
// Page code saves it (backend/leads.web.js) and then sets status="sent" or "error".

const BOOK_CSS = `
:host{display:block;font-family:"RF Dewi","Onest",system-ui,sans-serif;color:#211E36;
  --orange:#E08F45;--orange-deep:#C9752C;--grey:#ECECEB;--muted:#6E6B7B}
*{box-sizing:border-box;margin:0;padding:0}
form{background:#fff;border-radius:8px;padding:clamp(20px,3vw,32px);display:grid;gap:18px}
form>*{min-width:0}
.lbl{font-size:13px;font-weight:600;display:block;margin-bottom:8px}
.pick{display:flex;gap:8px;flex-wrap:wrap}
.pick label{cursor:pointer}
.pick input,.day input{position:absolute;opacity:0;pointer-events:none}
.pick span{display:inline-block;padding:10px 14px;border-radius:8px;background:var(--grey);font-size:14px;font-weight:600;border:2px solid transparent}
.pick input:checked+span{border-color:var(--orange);background:#FDF4EC}
.pick input:focus-visible+span,.day:focus-within{outline:2px solid var(--orange);outline-offset:2px}
.pick input:disabled+span{opacity:.35;text-decoration:line-through;cursor:not-allowed}
.days{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:2px}
.day{position:relative;flex:0 0 auto;text-align:center;background:var(--grey);border:2px solid transparent;border-radius:8px;padding:9px 12px;cursor:pointer;min-width:70px}
.day b{display:block;font-family:"RF Dewi Expanded","Unbounded",sans-serif;font-size:17px}
.day span{font-size:12px;color:var(--muted)}
.day.on{border-color:var(--orange);background:#FDF4EC}
.day.off{opacity:.35;pointer-events:none}
.none{font-size:14px;color:var(--muted)}
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.field{display:flex;flex-direction:column;gap:6px}
.field label{font-size:13px;font-weight:600}
.field input{font:inherit;font-size:16px;background:var(--grey);border:1.5px solid transparent;padding:13px 14px;color:#211E36;outline:none;border-radius:8px;width:100%}
.field input:focus{border-color:var(--orange);background:#fff}
.field.err input{border-color:#C0392B;background:#FDEDEC}
.field small{display:none;font-size:12px;color:#C0392B}
.field.err small{display:block}
button{font:inherit;font-size:14px;font-weight:600;cursor:pointer;border:0;border-radius:8px;padding:16px 24px;background:var(--orange);color:#211E36;transition:background .25s}
button:hover{background:var(--orange-deep)}
button:disabled{opacity:.6;cursor:default}
.msg{font-size:13px;color:#C0392B}
.msg:empty{display:none}
.done{display:none;text-align:center;padding:24px 8px}
.done .ok{width:64px;height:64px;border-radius:50%;background:var(--orange);display:grid;place-items:center;margin:0 auto 16px;font-size:30px;font-weight:800}
.done>b{display:block;font-family:"RF Dewi Expanded","Unbounded",sans-serif;font-size:22px}
.done p{color:var(--muted);margin-top:6px}
.done .sum{display:grid;gap:6px;background:var(--grey);border-radius:8px;padding:14px;margin-top:18px;font-size:14px;text-align:left}
:host([status=sent]) form{display:none}
:host([status=sent]) .done{display:block}
@media (max-width:520px){.two{grid-template-columns:1fr}}
`;

const GOALS = ['Подбор сантехники', 'Отопление и котлы', 'Дизайн-проект', 'Объект / B2B'];
const DS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const MN = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const DAYS_AHEAD = 10;

function tashkentNow() {
  const d = new Date();
  return new Date(d.getTime() + d.getTimezoneOffset() * 60000 + 5 * 3600000);
}
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

function maskPhone(v) {
  let d = String(v).replace(/\D/g, '');
  if (d.startsWith('998')) d = d.slice(3);
  d = d.slice(0, 9);
  const p = [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean);
  return d ? '+998 ' + p.join(' ') : '';
}

class KlShowroomBooking extends HTMLElement {
  static get observedAttributes() {
    return ['status', 'showrooms'];
  }

  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: 'open' });
    this.build();
  }

  attributeChangedCallback(name) {
    if (!this.shadowRoot || !this.$) return;
    if (name === 'showrooms') { this.build(); return; }
    const st = this.getAttribute('status');
    const btn = this.$('button');
    btn.disabled = st === 'sending';
    btn.textContent = st === 'sending' ? 'Отправляем…' : 'Записаться';
    this.$('.msg').textContent = st === 'error' ? 'Не удалось отправить. Позвоните нам: +998 95 146 16 16' : '';
  }

  list(attr, def) {
    return (this.getAttribute(attr) || def).split(',').map((s) => s.trim()).filter(Boolean);
  }

  build() {
    const root = this.shadowRoot;
    const shops = this.list('showrooms', 'Минор,Алой,Фидокор,Паркент');
    root.innerHTML = `<style>${BOOK_CSS}</style>
      <form novalidate>
        <div><span class="lbl">Шоурум</span><div class="pick" id="shop">
          ${shops.map((s, i) => `<label><input type="radio" name="shop" value="${esc(s)}"${i ? '' : ' checked'}><span>${esc(s)}</span></label>`).join('')}
        </div></div>
        <div><span class="lbl">Цель визита</span><div class="pick">
          ${GOALS.map((g, i) => `<label><input type="radio" name="goal" value="${g}"${i ? '' : ' checked'}><span>${g}</span></label>`).join('')}
        </div></div>
        <div><span class="lbl">Дата</span><div class="days" id="days"></div></div>
        <div><span class="lbl">Время</span><div class="pick" id="times"></div></div>
        <div class="two">
          <div class="field" id="fN"><label for="nm">Имя *</label><input id="nm" autocomplete="name" placeholder="Как к вам обращаться"><small>Введите имя</small></div>
          <div class="field" id="fP"><label for="ph">Телефон *</label><input id="ph" type="tel" autocomplete="tel" placeholder="+998 __ ___ __ __"><small>Номер в формате +998 XX XXX XX XX</small></div>
        </div>
        <button type="submit">Записаться</button>
        <p class="msg" role="alert"></p>
      </form>
      <div class="done" role="status"><div class="ok">✓</div><b>Вы записаны!</b><p>Мы позвоним, чтобы подтвердить визит.</p><div class="sum"></div></div>`;
    this.$ = (s) => root.querySelector(s);
    this.renderDays();
    this.$('#days').addEventListener('change', () => this.renderTimes());
    this.$('#ph').addEventListener('input', (e) => { e.target.value = maskPhone(e.target.value); this.$('#fP').classList.remove('err'); });
    this.$('#nm').addEventListener('input', () => this.$('#fN').classList.remove('err'));
    this.$('form').addEventListener('submit', (e) => { e.preventDefault(); this.submit(); });
  }

  slotsFor(dateStr) {
    const now = tashkentNow();
    const isToday = dateStr === ymd(now);
    return this.list('slots', '10:00,11:00,12:00,14:00,15:00,16:00,17:00').map((s) => {
      const [h, m] = s.split(':').map(Number);
      // today: a slot is bookable only if it starts at least 1 hour from now
      const past = isToday && h * 60 + (m || 0) < now.getHours() * 60 + now.getMinutes() + 60;
      return { time: s, past };
    });
  }

  renderDays() {
    const now = tashkentNow();
    const work = this.list('days', '1,2,3,4,5,6').map(Number);
    let html = '';
    let first = null;
    for (let i = 0; i < DAYS_AHEAD; i++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
      const value = ymd(d);
      const off = !work.includes(d.getDay()) || this.slotsFor(value).every((s) => s.past);
      if (!off && !first) first = value;
      const label = `${d.getDate()} ${MN[d.getMonth()]}`;
      html += `<label class="day${off ? ' off' : ''}"><input type="radio" name="day" value="${value}" data-label="${label}"${off ? ' disabled' : ''}${value === first ? ' checked' : ''}>` +
        `<span>${i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : DS[d.getDay()]}</span><b>${d.getDate()}</b><span>${MN[d.getMonth()]}</span></label>`;
    }
    this.$('#days').innerHTML = html;
    this.renderTimes();
  }

  renderTimes() {
    const root = this.shadowRoot;
    root.querySelectorAll('.day').forEach((l) => l.classList.toggle('on', l.querySelector('input').checked));
    const day = root.querySelector('[name=day]:checked');
    if (!day) { this.$('#times').innerHTML = '<p class="none">Нет свободных дат — позвоните нам</p>'; return; }
    let firstFree = true;
    this.$('#times').innerHTML = this.slotsFor(day.value).map(({ time, past }) => {
      const chk = !past && firstFree;
      if (chk) firstFree = false;
      return `<label><input type="radio" name="tm" value="${time}"${past ? ' disabled' : ''}${chk ? ' checked' : ''}><span>${time}</span></label>`;
    }).join('');
  }

  submit() {
    const root = this.shadowRoot;
    const name = this.$('#nm').value.trim();
    const phone = this.$('#ph').value;
    const badN = name.length < 2;
    const badP = phone.replace(/\D/g, '').length !== 12;
    this.$('#fN').classList.toggle('err', badN);
    this.$('#fP').classList.toggle('err', badP);
    const v = (n) => root.querySelector(`[name=${n}]:checked`);
    const day = v('day');
    const tm = v('tm');
    if (badN || badP) { (badN ? this.$('#nm') : this.$('#ph')).focus(); return; }
    if (!day || !tm) { this.$('.msg').textContent = 'Выберите дату и время'; return; }
    const detail = {
      showroom: v('shop').value,
      goal: v('goal').value,
      date: day.value,
      dateLabel: day.dataset.label,
      time: tm.value,
      name,
      phone,
      note: this.getAttribute('note') || '',
    };
    this.$('.sum').innerHTML = `<span>Шоурум: <b>${esc(detail.showroom)}</b></span><span>Дата: <b>${detail.dateLabel}, ${detail.time}</b></span><span>Цель: <b>${esc(detail.goal)}</b></span>`;
    this.dispatchEvent(new CustomEvent('kl-book', { detail }));
  }
}

customElements.define('kl-showroom-booking', KlShowroomBooking);
