// <kl-finish-config> — "one faucet, four finishes" configurator (home page)
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-finish-config.js
//   Tag name: kl-finish-config
//   Element ID: #klFinish
//
// Shows a faucet drawing that changes colour with the chosen finish.
// The heading and text beside it stay normal Wix text elements (good for SEO).
// Emits "kl-request" with { finish } when the visitor clicks "Посмотреть в шоуруме".

const FINISH_CSS = `
:host{display:block;font-family:"RF Dewi","Onest",system-ui,sans-serif;color:#211E36}
*{box-sizing:border-box;margin:0;padding:0}
.stage{aspect-ratio:1/1;background:#ECECEB;border-radius:8px;position:relative;display:grid;place-items:center;overflow:hidden}
.stage svg{width:68%;height:auto}
.stage stop{transition:stop-color .4s}
.tag{position:absolute;left:24px;top:22px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#6E6B7B}
.tag b{display:block;font-family:"RF Dewi Expanded","Unbounded",sans-serif;font-size:20px;letter-spacing:0;text-transform:none;color:#211E36;margin-top:4px}
.sw{display:flex;gap:10px;margin-top:18px;flex-wrap:wrap}
.sw button{display:flex;align-items:center;gap:10px;padding:8px 16px 8px 8px;border:1.5px solid rgba(33,30,54,.12);border-radius:8px;font:inherit;font-size:14px;font-weight:600;background:#fff;color:#211E36;cursor:pointer;transition:.2s}
.sw button[aria-pressed=true]{border-color:#E08F45;background:#FDF4EC}
.sw i{width:28px;height:28px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}
.go{margin-top:14px;width:100%;font:inherit;font-size:14px;font-weight:600;cursor:pointer;border:0;border-radius:8px;padding:15px 22px;background:#E08F45;color:#211E36;transition:background .25s}
.go:hover{background:#C9752C}
`;

const FINISHES = [
  { short: 'Хром', name: 'Полированный хром', c: ['#8d939a', '#f4f6f8', '#b7bdc4', '#6c7178'] },
  { short: 'Золото', name: 'Брашированное золото', c: ['#9b7a3d', '#f3dca0', '#c9a45c', '#7d5f2a'] },
  { short: 'Чёрный', name: 'Матовый чёрный', c: ['#1a1a1a', '#4a4a4a', '#2a2a2a', '#0d0d0d'] },
  { short: 'Медь', name: 'Медь', c: ['#8f4a24', '#f0b48a', '#c0602a', '#6d361a'] },
];

class KlFinishConfig extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>${FINISH_CSS}</style>
      <div class="stage">
        <svg viewBox="0 0 400 400" role="img" aria-label="Смеситель">
          <defs>
            <linearGradient id="m" x1="0" x2="1"><stop offset="0"/><stop offset=".45"/><stop offset=".7"/><stop offset="1"/></linearGradient>
            <linearGradient id="mv" x1="0" x2="0" y1="0" y2="1"><stop offset="0"/><stop offset="1"/></linearGradient>
          </defs>
          <ellipse cx="200" cy="350" rx="130" ry="14" fill="rgba(33,30,54,.12)"/>
          <rect x="150" y="320" width="100" height="26" rx="6" fill="url(#m)"/>
          <rect x="176" y="150" width="48" height="176" rx="10" fill="url(#m)"/>
          <path d="M200 160 C200 90 250 70 300 74 L318 76 L318 104 L300 102 C262 99 228 112 228 160 Z" fill="url(#mv)"/>
          <rect x="300" y="72" width="26" height="36" rx="5" fill="url(#m)"/>
          <rect x="186" y="118" width="28" height="40" rx="4" fill="url(#m)"/>
          <rect x="150" y="104" width="96" height="16" rx="8" fill="url(#m)" transform="rotate(-8 198 112)"/>
          <path d="M313 110 Q314 170 312 236" stroke="rgba(120,170,210,.6)" stroke-width="7" fill="none" stroke-linecap="round"/>
        </svg>
        <div class="tag">Отделка<b></b></div>
      </div>
      <div class="sw">${FINISHES.map((f, i) =>
        `<button type="button" data-i="${i}"><i style="background:linear-gradient(135deg,${f.c[1]},${f.c[0]})"></i>${f.short}</button>`).join('')}</div>
      <button type="button" class="go">Посмотреть в шоуруме</button>`;
    root.querySelectorAll('.sw button').forEach((b) => b.addEventListener('click', () => this.pick(Number(b.dataset.i))));
    root.querySelector('.go').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('kl-request', { detail: { finish: FINISHES[this.cur].name } }));
    });
    this.pick(0);
  }

  pick(i) {
    const root = this.shadowRoot;
    const f = FINISHES[i];
    this.cur = i;
    root.querySelectorAll('#m stop').forEach((s, k) => s.setAttribute('stop-color', f.c[k]));
    const v = root.querySelectorAll('#mv stop');
    v[0].setAttribute('stop-color', f.c[1]);
    v[1].setAttribute('stop-color', f.c[0]);
    root.querySelector('.tag b').textContent = f.name;
    root.querySelectorAll('.sw button').forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)));
  }
}

customElements.define('kl-finish-config', KlFinishConfig);
