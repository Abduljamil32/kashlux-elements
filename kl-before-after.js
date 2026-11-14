// <kl-before-after> — drag slider comparing two images (Services / Projects pages)
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-before-after.js
//   Tag name: kl-before-after
//   Element ID: #klBeforeAfter
//
// Attributes (set in the element's settings or from page code):
//   before        image URL (left side, e.g. the 3D design)
//   after         image URL (right side, e.g. the finished bathroom)
//   before-label  default "Проект"
//   after-label   default "Готово"
// Use https://static.wixstatic.com/media/... URLs from the Media Manager.

const BA_CSS = `
:host{display:block;font-family:"RF Dewi","Onest",system-ui,sans-serif}
.c{position:relative;aspect-ratio:16/10;border-radius:8px;overflow:hidden;background:#DFDFDE;touch-action:none;cursor:ew-resize;user-select:none}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none}
.b{clip-path:inset(0 50% 0 0)}
.h{position:absolute;top:0;bottom:0;left:50%;width:2px;background:#fff;transform:translateX(-1px)}
.h::after{content:"↔";position:absolute;top:50%;left:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;
  background:#E08F45;color:#211E36;display:grid;place-items:center;font-weight:800;box-shadow:0 6px 18px rgba(0,0,0,.25)}
.t{position:absolute;top:14px;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;background:#211E36;color:#fff;padding:6px 10px;border-radius:6px}
.tl{left:14px}.tr{right:14px}
`;

class KlBeforeAfter extends HTMLElement {
  static get observedAttributes() {
    return ['before', 'after', 'before-label', 'after-label'];
  }

  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>${BA_CSS}</style>
      <div class="c" role="slider" aria-label="Сравнение до и после" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">
        <img class="a" alt=""><img class="b" alt="">
        <div class="h"></div><span class="t tl"></span><span class="t tr"></span>
      </div>`;
    const c = root.querySelector('.c');
    let drag = false;
    c.addEventListener('pointerdown', (e) => { drag = true; c.setPointerCapture(e.pointerId); this.move(e.clientX); });
    c.addEventListener('pointermove', (e) => drag && this.move(e.clientX));
    c.addEventListener('pointerup', () => { drag = false; });
    c.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.set(this.pos - 5);
      if (e.key === 'ArrowRight') this.set(this.pos + 5);
    });
    this.render();
    this.set(50);
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  render() {
    const r = this.shadowRoot;
    [['.b', 'before'], ['.a', 'after']].forEach(([sel, attr]) => {
      const img = r.querySelector(sel);
      const url = this.getAttribute(attr);
      img.onerror = () => { img.style.visibility = 'hidden'; };
      img.onload = () => { img.style.visibility = 'visible'; };
      if (url) img.src = url;
      else { img.removeAttribute('src'); img.style.visibility = 'hidden'; }
    });
    r.querySelector('.tl').textContent = this.getAttribute('before-label') || 'Проект';
    r.querySelector('.tr').textContent = this.getAttribute('after-label') || 'Готово';
  }

  move(x) {
    const rect = this.shadowRoot.querySelector('.c').getBoundingClientRect();
    this.set(((x - rect.left) / rect.width) * 100);
  }

  set(p) {
    this.pos = Math.max(0, Math.min(100, p));
    const r = this.shadowRoot;
    r.querySelector('.b').style.clipPath = `inset(0 ${100 - this.pos}% 0 0)`;
    r.querySelector('.h').style.left = this.pos + '%';
    r.querySelector('.c').setAttribute('aria-valuenow', String(Math.round(this.pos)));
  }
}

customElements.define('kl-before-after', KlBeforeAfter);
