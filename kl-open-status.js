// <kl-open-status> — live "Открыто / Закрыто" badge for a showroom (Tashkent time, UTC+5)
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-open-status.js
//   Tag name: kl-open-status
//   Element ID: e.g. #klStatus1, #klStatus2 (one per showroom)
//
// Attributes:
//   days  working days, 0 = Sunday … 6 = Saturday. Default "1,2,3,4,5,6" (Mon–Sat, as on the current site)
//   from  opening hour. Default 9
//   to    closing hour. Default 18
//   theme "light" (default, for white cards) or "dark" (for navy sections)

const STATUS_CSS = `
:host{display:inline-block;font-family:"RF Dewi","Onest",system-ui,sans-serif}
span{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;padding:6px 12px;border-radius:999px;background:#ECECEB;color:#211E36}
:host([theme=dark]) span{background:rgba(255,255,255,.08);color:#fff}
i{width:8px;height:8px;border-radius:50%;background:#B0ADB9}
.open i{background:#2E9E5B;box-shadow:0 0 0 4px rgba(46,158,91,.18)}
`;

function tashkentNow() {
  const d = new Date();
  return new Date(d.getTime() + d.getTimezoneOffset() * 60000 + 5 * 3600000);
}
const pad = (n) => String(n).padStart(2, '0');
const DAY = ['в вс', 'в пн', 'во вт', 'в ср', 'в чт', 'в пт', 'в сб'];

class KlOpenStatus extends HTMLElement {
  static get observedAttributes() {
    return ['days', 'from', 'to'];
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' }).innerHTML = `<style>${STATUS_CSS}</style><span><i></i><b></b></span>`;
    }
    this.update();
    this.timer = setInterval(() => this.update(), 60000);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.update();
  }

  update() {
    const days = (this.getAttribute('days') || '1,2,3,4,5,6').split(',').map(Number);
    const from = Number(this.getAttribute('from') || 9);
    const to = Number(this.getAttribute('to') || 18);
    const t = tashkentNow();
    const h = t.getHours() + t.getMinutes() / 60;
    const workday = days.includes(t.getDay());
    let open = false;
    let label;
    if (workday && h >= from && h < to) {
      open = true;
      label = `Открыто до ${pad(to)}:00`;
    } else if (workday && h < from) {
      label = `Откроется сегодня в ${pad(from)}:00`;
    } else {
      let d = t.getDay();
      let add = 0;
      do { d = (d + 1) % 7; add++; } while (!days.includes(d) && add < 8);
      label = `Закрыто · откроется ${add === 1 ? 'завтра' : DAY[d]} в ${pad(from)}:00`;
    }
    const span = this.shadowRoot.querySelector('span');
    span.classList.toggle('open', open);
    span.querySelector('b').textContent = label;
  }
}

customElements.define('kl-open-status', KlOpenStatus);
