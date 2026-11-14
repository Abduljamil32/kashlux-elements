// <kl-power-calc> — "what boiler power do I need" calculator (product page)
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-power-calc.js
//   Tag name: kl-power-calc
//   Element ID: #klPowerCalc
//
// Attribute "variants": comma-separated kW options of the current product, e.g. "18,24,30,40,50".
//   Page code sets it from the Wix Stores product (see Product Page code).
// Emits "kl-recommend" with { area, needKw, recommendedKw } (recommendedKw is null when no variant is powerful enough).
//
// Rule of thumb from the concept: ~1 kW per 10 m² at 3 m ceilings, +20% reserve for hot water.

const POWER_CSS = `
:host{display:block;font-family:"RF Dewi","Onest",system-ui,sans-serif;color:#211E36}
*{box-sizing:border-box;margin:0}
.box{background:#ECECEB;border-radius:8px;padding:18px 20px;display:grid;gap:10px}
.row{display:flex;justify-content:space-between;align-items:baseline;font-size:14px;font-weight:600}
.row b{font-family:"RF Dewi Expanded","Unbounded",sans-serif;font-size:20px}
input{width:100%;accent-color:#E08F45}
small{font-size:12px;color:#6E6B7B}
.res{font-size:14px;background:#fff;border-radius:6px;padding:10px 12px}
.res b{color:#C9752C}
`;

class KlPowerCalc extends HTMLElement {
  static get observedAttributes() {
    return ['variants'];
  }

  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>${POWER_CSS}</style>
      <div class="box">
        <div class="row"><span>Площадь дома</span><b><span id="a">180</span> м²</b></div>
        <input type="range" id="r" min="40" max="500" step="10" value="180" aria-label="Площадь дома">
        <small>Учтены потолки 3 м, средняя теплоизоляция и запас на горячую воду</small>
        <div class="res"></div>
      </div>`;
    root.getElementById('r').addEventListener('input', () => this.calc());
    this.calc();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.calc();
  }

  calc() {
    const root = this.shadowRoot;
    const area = Number(root.getElementById('r').value);
    const needKw = Math.round((area / 10) * 1.2);
    const variants = (this.getAttribute('variants') || '18,24,30,40,50')
      .split(',').map(Number).filter(Boolean).sort((x, y) => x - y);
    const fit = variants.find((v) => v >= needKw);
    const recommendedKw = fit || null;
    root.getElementById('a').textContent = area;
    root.querySelector('.res').innerHTML = fit
      ? `Нужно около <b>${needKw} кВт</b> — рекомендуем модель <b>${fit} кВт</b>`
      : `Нужно около <b>${needKw} кВт</b> — это больше максимальных ${variants[variants.length - 1]} кВт. ` +
        'Инженер подберёт каскад котлов — оставьте заявку.';
    this.dispatchEvent(new CustomEvent('kl-recommend', { detail: { area, needKw, recommendedKw } }));
  }
}

customElements.define('kl-power-calc', KlPowerCalc);
