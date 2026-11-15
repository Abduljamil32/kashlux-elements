(function () {
// <kl-section> — Kashlux redesign (kl-page-careers.js) for the Wix editor. GENERATED FILE: don't edit it in Wix.
// Source: design/build/wix/kl-section.template.js + design/build/wix_sections.py (run after build.py).
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-page-careers.js
//   Tag name: kl-section
//   Attributes:
//     name  optional. Empty = the whole page. Or one or more parts (comma-separated): page
//     lang  ru (default) or uz; empty = take the page language
// Guide: docs/WIX-SECTIONS.md
//
// Section "consult" (request form) emits "kl-lead" with { name, phone, topics, message }.
// Page code saves it with backend/leads.web.js and sets the attribute status = "sent" or "error".

// Every Kashlux file (page, home, header/footer) shares one registry and one tag definition: Wix gives all custom
// elements the same tag (wix-default-custom-element), so whichever file loads first defines it and each element
// takes its own content from the registry (header/footer = "shell", anything else = "page").
const REG = (window.KL_REG = window.KL_REG || {});
REG['page'] = {"css":":host{--navy:#211E36;--navy-2:#2B2745;--orange:#E08F45;--orange-deep:#C9752C;--white:#FFFFFF;--grey:#DFDFDE;--grey-2:#ECECEB;--ink:#211E36;--muted:#6E6B7B;--line:rgba(33,30,54,.12);--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--gutter:clamp(16px,4vw,56px);--max:1320px;--r:8px;}*{box-sizing:border-box;margin:0;padding:0}:host{scroll-behavior:smooth}.kl-body{background:var(--grey-2);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}img{display:block;max-width:100%}a{color:inherit;text-decoration:none}button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}svg{display:block;fill:var(--navy)}.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:var(--orange)}.eyebrow::before{content:\"\";width:22px;height:2px;background:currentColor}h1,h2,h3,h4{font-family:var(--head);font-weight:800;letter-spacing:-.01em;line-height:1.08}.h-section{font-size:clamp(30px,4vw,54px)}.h-section em{font-style:normal;color:var(--orange)}.lead{font-size:clamp(16px,1.2vw,18px);color:var(--muted);max-width:52ch}.btn{display:inline-flex;align-items:center;gap:12px;padding:16px 24px;font-size:14px;font-weight:600;border-radius:var(--r);transition:.25s;white-space:nowrap}.btn-orange{background:var(--orange);color:var(--navy)}.btn-orange:hover{background:var(--orange-deep)}.btn-line{border:1.5px solid currentColor}.btn-line:hover{background:var(--white);color:var(--navy);border-color:var(--white)}.arrow{width:18px;height:18px;transition:transform .25s}.btn:hover .arrow{transform:translate(3px,-3px)}.pat-fill{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='80' viewBox='0 0 1 2'%3E%3Cg%3E%3Cpath d='M0 .5L.5 0H1L.5 .5V1H0Z' fill='%23211E36'/%3E%3Cpath d='M1 .5L1.5 0H2L1.5 .5V1H1Z' fill='%23211E36' transform='translate(-1 0)'/%3E%3Cpath d='M0 1.5L.5 1H1L.5 1.5V2H0Z' fill='%23E08F45'/%3E%3C/g%3E%3C/svg%3E\");background-size:40px 80px}.pat-line{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-width='.018'/%3E%3C/svg%3E\");background-size:120px 120px}header{position:fixed;inset:0 0 auto;z-index:50;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);transition:box-shadow .3s}header.solid{box-shadow:0 1px 0 var(--line)}.nav{display:flex;align-items:center;justify-content:space-between;height:80px;gap:24px}.logo svg{height:20px;width:auto}.menu{display:flex;gap:30px;font-size:14px;font-weight:500}.menu a{position:relative;padding:6px 0}.menu a::after{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:0;background:var(--orange);transition:width .25s}.menu a:hover::after{width:100%}.nav-right{display:flex;align-items:center;gap:16px;font-size:13px}.lang{display:flex;background:var(--grey-2);border-radius:var(--r);padding:3px}.lang button{padding:5px 10px;border-radius:6px;font-size:12px;font-weight:600;color:var(--muted)}.lang button.on{background:var(--navy);color:var(--white)}.phone{font-weight:600;white-space:nowrap}.burger{display:none;width:44px;height:44px;border-radius:var(--r);background:var(--navy);color:#fff;place-items:center}.burger i{display:block;width:16px;height:2px;background:currentColor;box-shadow:0 5px 0 currentColor,0 -5px 0 currentColor}.hero{padding:80px 0 0;background:var(--white)}.hero-grid{display:grid;grid-template-columns:1.05fr 1fr;min-height:calc(100svh - 80px)}.hero-panel{position:relative;background:var(--navy);color:var(--white);padding:clamp(40px,6vw,88px) clamp(24px,5vw,72px);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}.hero-panel .pat-line{position:absolute;right:-40px;top:-20px;width:360px;height:260px;opacity:.9;-webkit-mask-image:linear-gradient(225deg,#000 30%,transparent 80%);mask-image:linear-gradient(225deg,#000 30%,transparent 80%)}.hero h1{font-size:clamp(32px,3.9vw,58px);position:relative;margin-top:28px}.hero h1 span{color:var(--orange)}.hero .sub{font-family:var(--body);font-weight:700;font-size:clamp(18px,1.6vw,22px);margin-top:22px;opacity:.9}.hero p.desc{max-width:46ch;opacity:.7;margin-top:14px}.hero-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px;padding-top:26px;border-top:1px solid rgba(255,255,255,.15)}.stats b{display:block;font-family:var(--head);font-weight:800;font-size:clamp(28px,3vw,44px);line-height:1;color:var(--orange)}.stats span{font-size:13px;opacity:.7;display:block;margin-top:8px}.hero-media{position:relative;overflow:hidden;background:var(--grey)}.hero-media img{width:100%;height:100%;object-fit:cover}.hero-media .chip{position:absolute;left:24px;bottom:24px;background:var(--white);border-radius:var(--r);padding:14px 18px;display:flex;gap:14px;align-items:center;font-size:13px;box-shadow:0 10px 30px rgba(33,30,54,.18)}.hero-media .chip b{font-family:var(--head);font-size:15px;display:block}.hero-media .chip svg{width:38px;height:38px}.brands{background:var(--orange);color:var(--navy);overflow:hidden;padding:18px 0}.track{display:flex;gap:56px;width:max-content;animation:marquee 34s linear infinite;align-items:center}.track span{font-family:var(--head);font-weight:800;font-size:22px;white-space:nowrap;text-transform:uppercase}.track svg{width:18px;height:18px}@keyframes marquee{to{transform:translateX(-50%)}}section{padding:clamp(72px,10vw,130px) 0}.sec-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:clamp(36px,5vw,64px);flex-wrap:wrap}.sec-head .eyebrow{margin-bottom:18px}.catalog{background:var(--grey-2)}.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:250px;gap:14px}.cat{position:relative;background:var(--white);border-radius:var(--r);overflow:hidden;padding:26px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .3s,box-shadow .3s}.cat:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(33,30,54,.12)}.cat .ico{width:46px;height:46px;color:var(--orange)}.cat h3{font-size:20px;position:relative;z-index:2}.cat p{font-size:13px;color:var(--muted);margin-top:6px;position:relative;z-index:2;max-width:28ch}.cat .go{position:absolute;top:22px;right:22px;width:38px;height:38px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:.25s;z-index:3}.cat:hover .go{background:var(--orange);color:#fff}.cat .go svg{width:16px;height:16px}.cat img.prod{position:absolute;right:-4%;bottom:-4%;width:48%;max-height:80%;object-fit:contain;transition:transform .5s}.cat:hover img.prod{transform:scale(1.05)}.cat.big{grid-column:span 2;grid-row:span 2;background:var(--navy);color:var(--white)}.cat.big h3{font-size:clamp(28px,3vw,40px)}.cat.big p{color:rgba(255,255,255,.65);font-size:15px;max-width:36ch}.cat.big .go{background:rgba(255,255,255,.1)}.cat.big .bigimg{position:absolute;inset:0;background:url(https://static.wixstatic.com/media/a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg/v1/fill/w_1200,h_1100,al_c,q_80,enc_auto/c.jpg) center/cover;opacity:.35;transition:opacity .4s,transform .8s}.cat.big:hover .bigimg{opacity:.5;transform:scale(1.04)}.cat.big::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(33,30,54,.2),rgba(33,30,54,.9))}.cat.big>*{position:relative;z-index:2}.cat.big .bigimg{z-index:0}.cat.big .tagrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.cat.big .tagrow span{font-size:12px;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.12)}.cat.wide{grid-column:span 2}.finish{background:var(--white)}.finish-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:center}.finish-stage{aspect-ratio:1/1;background:var(--grey-2);border-radius:var(--r);position:relative;display:grid;place-items:center;overflow:hidden}.finish-stage .pat-line{position:absolute;inset:auto -60px -60px auto;width:300px;height:300px;opacity:.5}.finish-stage svg.tap{width:68%;height:auto;position:relative}.finish-stage .tag{position:absolute;left:24px;top:22px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.finish-stage .tag b{display:block;font-family:var(--head);font-size:20px;letter-spacing:0;text-transform:none;color:var(--navy);margin-top:4px}.swatches{display:flex;gap:10px;margin:30px 0 36px;flex-wrap:wrap}.sw{display:flex;align-items:center;gap:10px;padding:8px 16px 8px 8px;border:1.5px solid var(--line);border-radius:var(--r);font-size:14px;font-weight:600;transition:.2s}.sw i{width:28px;height:28px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}.sw.on{border-color:var(--orange);background:#FDF4EC}.specs{display:grid;grid-template-columns:1fr 1fr;gap:12px}.specs div{padding:16px 18px;background:var(--grey-2);border-radius:var(--r)}.specs dt{font-size:12px;color:var(--muted)}.specs dd{font-family:var(--head);font-weight:700;font-size:17px;margin-top:2px}.projects{background:var(--navy);color:var(--white)}.projects .lead{color:rgba(255,255,255,.65)}.proj-ctrl{display:flex;gap:10px}.proj-ctrl button{width:52px;height:52px;border-radius:var(--r);background:rgba(255,255,255,.08);display:grid;place-items:center;transition:.25s;font-size:18px}.proj-ctrl button:hover{background:var(--orange)}.rail{display:grid;grid-auto-flow:column;grid-auto-columns:min(78vw,440px);gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 var(--gutter) 6px;scrollbar-width:none;margin-left:max(0px,calc((100vw - var(--max))/2))}.rail::-webkit-scrollbar{display:none}.proj{scroll-snap-align:start;background:var(--navy-2);border-radius:var(--r);overflow:hidden}.proj figure{aspect-ratio:4/4.4;overflow:hidden;position:relative}.proj img{width:100%;height:100%;object-fit:cover;transition:transform .8s}.proj:hover img{transform:scale(1.05)}.proj .star{position:absolute;top:16px;left:16px;font-size:12px;font-weight:600;background:var(--orange);padding:6px 12px;border-radius:6px}.proj .meta{padding:20px 22px 24px;display:flex;justify-content:space-between;align-items:end;gap:12px}.proj h3{font-size:22px}.proj p{font-size:14px;color:rgba(255,255,255,.55);margin-top:4px}.proj .meta svg{width:22px;height:22px;color:var(--orange);flex:none}.services{background:var(--grey-2)}.svc{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.svc article{background:var(--white);border-radius:var(--r);padding:30px 26px 32px;display:flex;flex-direction:column;transition:.3s}.svc article:hover{background:var(--navy);color:var(--white)}.svc article:hover p{color:rgba(255,255,255,.65)}.svc .ico{width:44px;height:44px;color:var(--orange)}.svc h3{font-size:20px;margin:34px 0 12px}.svc p{font-size:14px;color:var(--muted);flex:1}.svc a{display:inline-flex;gap:8px;align-items:center;margin-top:22px;font-size:14px;font-weight:600;color:var(--orange)}.svc .sub{font-family:var(--head);font-size:10px;letter-spacing:.3em;color:var(--orange);margin-top:6px;font-weight:700}.story{background:var(--orange);color:var(--navy);position:relative;overflow:hidden}.story .pat-line{position:absolute;right:0;top:0;width:52%;height:62%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23211E36' stroke-width='.012'/%3E%3C/svg%3E\");background-size:160px 160px;-webkit-mask-image:linear-gradient(200deg,#000 20%,transparent 75%);mask-image:linear-gradient(200deg,#000 20%,transparent 75%)}.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:end;position:relative}.story h2{font-size:clamp(40px,6vw,88px);line-height:1}.story blockquote{font-family:var(--body);font-weight:700;font-size:clamp(20px,2vw,26px);line-height:1.3;margin:28px 0 18px;max-width:30ch}.story p{max-width:50ch;color:rgba(33,30,54,.8)}.timeline{display:grid;gap:10px}.timeline div{display:grid;grid-template-columns:120px 1fr;gap:18px;align-items:center;background:var(--white);border-radius:var(--r);padding:18px 22px}.timeline b{font-family:var(--head);font-size:20px;color:var(--orange)}.timeline span{font-size:15px}.timeline div:last-child{background:var(--navy);color:var(--white)}.showrooms{background:var(--white)}.sr-grid{display:grid;grid-template-columns:360px 1fr;gap:20px}.sr-list{display:grid;gap:10px;align-content:start}.sr-list button{text-align:left;padding:20px 22px;border-radius:var(--r);background:var(--grey-2);transition:.25s;display:flex;justify-content:space-between;align-items:center;gap:12px}.sr-list button:hover{background:var(--grey)}.sr-list button.on{background:var(--navy);color:var(--white)}.sr-list h4{font-size:18px}.sr-list p{font-size:13px;margin-top:2px;opacity:.65}.sr-list svg{width:20px;height:20px;color:var(--orange);flex:none}.sr-card{position:relative;min-height:500px;border-radius:var(--r);overflow:hidden;background:var(--navy)}.sr-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .4s}.sr-info{position:absolute;left:20px;right:20px;bottom:20px;z-index:2;background:var(--white);border-radius:var(--r);padding:24px;display:grid;grid-template-columns:1fr 1fr auto;gap:24px;align-items:center}.sr-info dt{font-size:12px;color:var(--muted);margin-bottom:4px}.sr-info dd{font-size:15px;font-weight:500;line-height:1.5}.consult{background:var(--navy);color:var(--white);position:relative;overflow:hidden}.consult .pat-fill{position:absolute;left:0;bottom:0;width:100%;height:80px;opacity:1}.consult-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);position:relative;padding-bottom:60px}.consult .lead{color:rgba(255,255,255,.65)}form{display:grid;grid-template-columns:1fr 1fr;gap:16px;background:var(--white);color:var(--navy);border-radius:var(--r);padding:clamp(22px,3vw,36px)}.field{display:flex;flex-direction:column;gap:6px}.field.full{grid-column:1/-1}.field>label{font-size:13px;font-weight:600}.field input,.field textarea{font:inherit;font-size:16px;background:var(--grey-2);border:1.5px solid transparent;padding:13px 14px;color:var(--navy);outline:none;border-radius:var(--r)}.field textarea{resize:none;height:96px}.field input:focus,.field textarea:focus{border-color:var(--orange);background:#fff}.chips{display:flex;gap:8px;flex-wrap:wrap}.chips label{font-size:14px;cursor:pointer}.chips input{display:none}.chips span{display:inline-block;padding:9px 14px;border:1.5px solid var(--line);border-radius:var(--r);transition:.2s}.chips input:checked+span{background:var(--orange);color:#fff;border-color:var(--orange)}.form-note{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;font-size:12px;color:var(--muted)}.sent{grid-column:1/-1;display:none;padding:14px 16px;background:#FDF4EC;color:var(--orange-deep);font-weight:600;border-radius:var(--r)}.contact-mini{margin-top:40px;display:grid;gap:10px}.contact-mini a{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.06);border-radius:var(--r);padding:16px 20px;font-family:var(--head);font-weight:700;font-size:18px;transition:.25s}.contact-mini a:hover{background:var(--orange)}.contact-mini small{font-family:var(--body);font-size:12px;opacity:.6;font-weight:500}.system{background:var(--grey)}.sys-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.sys-card{background:var(--white);border-radius:var(--r);padding:26px}.sys-card h4{font-family:var(--body);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:18px;font-weight:600}.pal{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.pal div{aspect-ratio:1/1.2;border-radius:6px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;font-size:10px;font-weight:600;line-height:1.3;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06)}.logos{display:grid;grid-template-columns:1fr 1fr;gap:8px}.logos div{border-radius:6px;display:grid;place-items:center;height:84px;padding:14px}.logos svg{max-height:100%;width:auto;max-width:100%}.sub-logo{display:flex;flex-direction:column;align-items:center;gap:4px}.sub-logo svg{height:16px}.sub-logo span{font-family:var(--head);font-size:8px;letter-spacing:.42em;font-weight:700;color:var(--orange)}footer{background:var(--navy);color:var(--white);padding:80px 0 30px}.foot-top{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:56px;flex-wrap:wrap}.foot-top .bigword svg{width:min(680px,80vw);height:auto}.foot-top .k svg{width:90px;height:auto}.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:36px;padding-bottom:44px;border-bottom:1px solid rgba(255,255,255,.12)}.foot-grid h5{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);margin-bottom:16px;font-weight:600}.foot-grid a{display:block;font-size:15px;margin-bottom:9px;opacity:.8}.foot-grid a:hover{opacity:1;color:var(--orange)}.foot-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:13px;opacity:.5;gap:20px;flex-wrap:wrap}.ribbon{position:fixed;left:16px;bottom:16px;z-index:60;background:var(--orange);color:var(--navy);font-size:12px;font-weight:600;padding:10px 16px;border-radius:var(--r);display:flex;gap:10px;align-items:center;box-shadow:0 10px 30px rgba(33,30,54,.25)}.ribbon a{font-weight:800}.rv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}.rv.in{opacity:1;transform:none}.drawer{position:fixed;inset:0;z-index:70;background:var(--navy);color:var(--white);padding:18px var(--gutter);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .45s cubic-bezier(.7,0,.2,1)}.drawer.open{transform:none}.drawer .top{display:flex;justify-content:space-between;align-items:center;height:44px}.drawer .top svg{height:18px;width:auto}.drawer nav{display:flex;flex-direction:column;margin-top:48px}.drawer nav a{font-family:var(--head);font-weight:800;font-size:30px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.1)}.drawer .burger{display:grid;background:var(--orange)}@media (max-width:1080px){.menu,.phone{display:none}.burger{display:grid}.hero-grid{grid-template-columns:1fr}.hero-media{min-height:340px}.bento{grid-template-columns:repeat(2,1fr)}.svc{grid-template-columns:1fr 1fr}.sr-grid{grid-template-columns:1fr}.sr-list{grid-template-columns:repeat(4,1fr)}.sr-list p{display:none}.sys-grid{grid-template-columns:1fr 1fr}.foot-grid{grid-template-columns:1fr 1fr}}@media (max-width:760px){.nav{height:68px}.hero{padding-top:68px}.lang,.nav-cta{display:none!important}.stats span{font-size:11px}.finish-grid,.story-grid,.consult-grid{grid-template-columns:1fr}.bento{grid-auto-rows:190px;gap:10px}.cat{padding:18px}.cat h3{font-size:16px}.cat p{display:none}.cat .ico{width:36px;height:36px}.cat.big p{display:block}.cat.big .tagrow{display:none}.cat .go{width:32px;height:32px;top:14px;right:14px}.svc{grid-template-columns:1fr}.svc h3{margin-top:22px}.sr-list{display:flex;overflow-x:auto;scrollbar-width:none;margin:0 calc(-1 * var(--gutter));padding:0 var(--gutter)}.sr-list button{flex:0 0 auto;padding:12px 16px}.sr-list svg{display:none}.sr-card{min-height:540px}.sr-info{grid-template-columns:1fr;gap:14px;left:12px;right:12px;bottom:12px}form{grid-template-columns:1fr}.sys-grid{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr}.proj-ctrl{display:none}.timeline div{grid-template-columns:90px 1fr}.ribbon{left:12px;right:12px;bottom:12px;justify-content:center;font-size:11px}}@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.rv{opacity:1;transform:none}}@media (max-width:1320px){.nav-right .phone{display:none}}@media (max-width:1200px){.menu{gap:20px}.nav-right .lang{display:none}}.cr-hero{padding:calc(80px + clamp(28px,4vw,48px)) 0 clamp(40px,5vw,64px);background:var(--grey-2)}.cr-crumbs{font-size:13px;color:var(--muted);margin-bottom:18px}.cr-crumbs a:hover{color:var(--orange-deep)}.cr-hero-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:clamp(24px,4vw,64px);align-items:center}.cr-hero-grid>*{min-width:0}.cr-hero h1{font-size:clamp(34px,5vw,70px);line-height:1;margin-top:18px;max-width:13ch}.cr-hero h1 em{font-style:normal;color:var(--orange)}.cr-hero .lead{margin-top:20px}.cr-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.cr-ctas .btn-line:hover{background:var(--navy);color:var(--white);border-color:var(--navy)}.cr-kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:40px}.cr-kpis div{background:var(--white);border-radius:var(--r);padding:18px 20px}.cr-kpis b{display:block;font-family:var(--head);font-weight:800;font-size:clamp(26px,2.8vw,38px);line-height:1;color:var(--orange-deep)}.cr-kpis span{display:block;font-size:13px;color:var(--muted);margin-top:6px}.cr-hero-media{position:relative;aspect-ratio:4/4.3;border-radius:var(--r);overflow:hidden;background:var(--navy)}.cr-hero-media img{width:100%;height:100%;object-fit:cover}.cr-hero-media .pat-fill{position:absolute;left:0;right:0;bottom:0;height:60px}.cr-hero-media figcaption{position:absolute;left:20px;top:20px;background:var(--orange);color:var(--navy);font-weight:700;font-size:13px;padding:8px 12px;border-radius:6px;display:flex;gap:8px;align-items:center}.cr-hero-media figcaption i{width:8px;height:8px;border-radius:50%;background:var(--navy);animation:cr-pulse 1.6s infinite}@keyframes cr-pulse{50%{opacity:.25}}.cr-cult{background:var(--white)}.cr-cult-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);gap:clamp(24px,4vw,56px);align-items:stretch}.cr-cult-grid>*{min-width:0}.cr-cult-media{position:relative;border-radius:var(--r);overflow:hidden;min-height:420px;background:var(--grey)}.cr-cult-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .9s var(--ease)}.cr-cult-media:hover img{transform:scale(1.04)}.cr-cult-media blockquote{position:absolute;left:18px;right:18px;bottom:18px;background:var(--navy);color:var(--white);border-radius:var(--r);padding:20px 22px;font-family:var(--head);font-weight:700;font-size:clamp(16px,1.5vw,19px);line-height:1.35}.cr-cult-media blockquote span{color:var(--orange)}.cr-perks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.cr-perk{background:var(--grey-2);border-radius:var(--r);padding:24px 22px;display:flex;flex-direction:column;gap:10px;transition:background .35s var(--ease),color .35s,translate .35s var(--ease)}.cr-perk:hover{background:var(--navy);color:var(--white);translate:0 -4px}.cr-perk svg{width:40px;height:40px;color:var(--orange)}.cr-perk h3{font-size:18px;margin-top:8px}.cr-perk p{font-size:14px;color:var(--muted);transition:color .35s}.cr-perk:hover p{color:rgba(255,255,255,.7)}.cr-jobs{background:var(--grey-2)}.cr-jobs-filter{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}.cr-jobs-filter button{padding:10px 16px;border-radius:var(--r);background:var(--white);font-size:14px;font-weight:600;border:1.5px solid transparent;transition:background .25s,color .25s,border-color .25s}.cr-jobs-filter button:hover{border-color:var(--orange)}.cr-jobs-filter button[aria-pressed=\"true\"]{background:var(--navy);color:var(--white)}.cr-list{display:grid;gap:10px}.cr-job{background:var(--white);border-radius:var(--r);border:1.5px solid transparent;transition:border-color .3s,box-shadow .3s}.cr-job[hidden]{display:none}.cr-job:hover{border-color:rgba(224,143,69,.45)}.cr-job.open{border-color:var(--orange);box-shadow:0 18px 40px -26px rgba(33,30,54,.45)}.cr-job h3{margin:0}.cr-head{width:100%;display:grid;grid-template-columns:56px minmax(0,1fr) auto 48px;gap:18px;align-items:center;padding:20px 22px;text-align:left}.cr-num{width:56px;height:56px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;font-family:var(--head);font-weight:800;font-size:18px;color:var(--orange-deep);transition:background .3s,color .3s}.cr-job.open .cr-num{background:var(--orange);color:var(--navy)}.cr-head b{display:block;font-family:var(--head);font-weight:700;font-size:clamp(16px,1.6vw,20px);line-height:1.25}.cr-head small{display:block;font-family:var(--body);font-weight:400;letter-spacing:0;line-height:1.5;font-size:13px;color:var(--muted);margin-top:4px}.cr-tags{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}.cr-tags span{font-size:12px;font-weight:600;padding:5px 10px;border-radius:6px;background:var(--grey-2);white-space:nowrap}.cr-pm{width:48px;height:48px;border-radius:var(--r);background:var(--grey-2);position:relative;transition:background .3s,transform .4s var(--ease)}.cr-pm::before,.cr-pm::after{content:\"\";position:absolute;left:50%;top:50%;width:16px;height:2px;background:var(--navy);transform:translate(-50%,-50%);transition:transform .4s var(--ease),background .3s}.cr-pm::after{transform:translate(-50%,-50%) rotate(90deg)}.cr-head:hover .cr-pm{background:var(--grey)}.cr-job.open .cr-pm{background:var(--navy);transform:rotate(180deg)}.cr-job.open .cr-pm::before,.cr-job.open .cr-pm::after{background:var(--white)}.cr-job.open .cr-pm::after{transform:translate(-50%,-50%) rotate(0deg)}.cr-body{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s var(--ease)}.cr-job.open .cr-body{grid-template-rows:1fr}.cr-body>div{overflow:hidden;min-height:0}.cr-inner{padding:0 22px 26px calc(22px + 56px + 18px);display:grid;grid-template-columns:repeat(2,minmax(0,1fr)) auto;gap:clamp(18px,3vw,40px);align-items:start;opacity:0;transform:translateY(-8px);transition:opacity .4s,transform .5s var(--ease)}.cr-job.open .cr-inner{opacity:1;transform:none;transition-delay:.1s}.cr-inner>*{min-width:0}.cr-inner h4{font-family:var(--body);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:10px}.cr-inner ul{list-style:none;display:grid;gap:8px;font-size:15px}.cr-inner li{display:flex;gap:10px}.cr-inner li::before{content:\"\";width:6px;height:6px;border-radius:2px;background:var(--orange);flex:none;margin-top:9px}.cr-inner .btn{align-self:end}.cr-acts{display:flex;flex-direction:column;gap:8px;align-self:end}.cr-acts .btn{justify-content:center}.cr-note{font-size:12px;color:var(--muted);margin-top:14px}.cr-steps{background:var(--navy);color:var(--white);position:relative;overflow:hidden}.cr-steps .lead{color:rgba(255,255,255,.65)}.cr-steps .pat-line{position:absolute;right:-60px;top:-40px;width:420px;height:320px;opacity:.6;-webkit-mask-image:linear-gradient(225deg,#000 30%,transparent 80%);mask-image:linear-gradient(225deg,#000 30%,transparent 80%);pointer-events:none}.cr-steps .wrap{position:relative}.cr-step-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;list-style:none}.cr-step{background:var(--navy-2);border-radius:var(--r);padding:26px 24px;position:relative;transition:background .35s,translate .35s var(--ease)}.cr-step:hover{background:#353052;translate:0 -4px}.cr-step .cr-sn{font-family:var(--head);font-weight:800;font-size:40px;line-height:1;color:var(--orange)}.cr-step h3{font-size:18px;margin:22px 0 8px}.cr-step p{font-size:14px;color:rgba(255,255,255,.65)}.cr-step em{display:inline-block;font-style:normal;font-size:12px;font-weight:600;margin-top:14px;padding:5px 10px;border-radius:6px;background:rgba(255,255,255,.08)}.cr-apply{background:var(--white)}.cr-apply-grid{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(30px,5vw,80px);align-items:start}.cr-apply-grid>*{min-width:0}.cr-apply .h-section{margin:16px 0 18px}.cr-contact{display:grid;gap:10px;margin-top:28px}.cr-contact a{display:flex;justify-content:space-between;align-items:center;gap:12px;background:var(--grey-2);border-radius:var(--r);padding:16px 20px;font-family:var(--head);font-weight:700;font-size:17px;transition:background .25s}.cr-contact a:hover{background:var(--orange)}.cr-contact small{display:block;font-family:var(--body);font-weight:500;font-size:12px;color:var(--muted)}.cr-contact a:hover small{color:var(--navy)}.cr-contact svg{width:20px;height:20px;flex:none}form.cr-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;background:var(--grey-2);color:var(--navy);border-radius:var(--r);padding:clamp(20px,3vw,34px);align-content:start;scroll-margin-top:100px}.cr-form h3{grid-column:1/-1;font-size:20px}.cr-f{display:flex;flex-direction:column;gap:6px;min-width:0}.cr-f.full{grid-column:1/-1}.cr-f>label,.cr-f>.lbl{font-size:13px;font-weight:600}.cr-f>label i{font-style:normal;color:var(--orange-deep)}.cr-f input:not([type=file]),.cr-f select,.cr-f textarea{font:inherit;font-size:16px;width:100%;background:var(--white);border:1.5px solid transparent;padding:13px 14px;color:var(--navy);border-radius:var(--r);outline:none;transition:border-color .2s,background .2s,box-shadow .3s}.cr-f select{appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' fill='none' stroke='%23211E36' stroke-width='2'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 12px center;background-size:18px;padding-right:40px}.cr-f textarea{resize:vertical;min-height:100px}.cr-f input:focus,.cr-f select:focus,.cr-f textarea:focus{border-color:var(--orange)}.cr-f select.flash{box-shadow:0 0 0 4px rgba(224,143,69,.35);border-color:var(--orange)}.cr-f .err{display:none;font-size:12px;color:#B3261E;font-weight:600}.cr-f.bad input,.cr-f.bad select,.cr-f.bad .cr-file{border-color:#D14343;background-color:#FDF0F0}.cr-f.bad .err{display:block}.cr-f.bad{animation:cr-shake .35s}@keyframes cr-shake{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}.cr-file{position:relative;display:flex;align-items:center;gap:14px;background:var(--white);border:1.5px dashed rgba(33,30,54,.25);border-radius:var(--r);padding:14px 16px;cursor:pointer;transition:border-color .2s,background .2s}.cr-file:hover,.cr-file.drag{border-color:var(--orange);background:#FDF6EF}.cr-file input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%}.cr-file:focus-within{outline:2px solid var(--navy);outline-offset:2px}.cr-file svg{width:30px;height:30px;color:var(--orange-deep);flex:none}.cr-file b{display:block;font-size:14px;overflow-wrap:anywhere}.cr-file small{font-size:12px;color:var(--muted)}.cr-file .x{position:relative;z-index:2;margin-left:auto;width:32px;height:32px;border-radius:6px;background:var(--grey-2);display:none;place-items:center;font-size:18px;line-height:1}.cr-file.has .x{display:grid}.cr-check{grid-column:1/-1;display:flex;gap:10px;align-items:flex-start;font-size:13px;color:var(--muted);cursor:pointer}.cr-check input{accent-color:var(--orange);width:18px;height:18px;margin-top:1px;flex:none}.cr-check.bad{color:#B3261E}.cr-form .btn{grid-column:1/-1;justify-content:center}.cr-form .note{grid-column:1/-1;font-size:12px;color:var(--muted);text-align:center}.cr-ok{grid-column:1/-1;display:none;text-align:center;padding:30px 10px;animation:cr-in .5s var(--ease) both}.cr-ok .ic{width:72px;height:72px;border-radius:50%;background:var(--orange);display:grid;place-items:center;margin:0 auto 18px}.cr-ok .ic svg{width:38px;height:38px;color:var(--navy)}.cr-ok h3{font-size:24px}.cr-ok p{color:var(--muted);margin:10px auto 20px;max-width:42ch}.cr-form.cr-done>*:not(.cr-ok){display:none}.cr-form.cr-done .cr-ok{display:block}@keyframes cr-in{from{opacity:0;transform:translateY(12px)}}.cr-cta{background:var(--orange);color:var(--navy);position:relative;overflow:hidden}.cr-cta .pat-line{position:absolute;right:0;top:0;width:52%;height:100%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23211E36' stroke-width='.012'/%3E%3C/svg%3E\");background-size:160px 160px;-webkit-mask-image:linear-gradient(200deg,#000 20%,transparent 75%);mask-image:linear-gradient(200deg,#000 20%,transparent 75%);pointer-events:none}.cr-cta-grid{position:relative;display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:clamp(28px,5vw,80px);align-items:end}.cr-cta-grid>*{min-width:0}.cr-cta h2{font-size:clamp(30px,4.4vw,58px);line-height:1.04}.cr-cta p{margin-top:16px;max-width:48ch;color:rgba(33,30,54,.8)}.cr-cta .eyebrow{color:var(--navy)}.cr-cta-acts{display:flex;flex-direction:column;gap:10px}.cr-cta-acts .btn{justify-content:space-between}.cr-cta-acts .btn-line:hover{background:var(--navy);color:var(--white);border-color:var(--navy)}@media (max-width:1080px){.cr-hero-grid,.cr-cult-grid,.cr-apply-grid,.cr-cta-grid{grid-template-columns:minmax(0,1fr)}.cr-hero-media{aspect-ratio:16/10}.cr-step-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cr-inner{grid-template-columns:minmax(0,1fr) minmax(0,1fr);padding-left:22px}.cr-inner .btn{grid-column:1/-1;justify-self:start}.cr-acts{grid-column:1/-1;flex-direction:row;flex-wrap:wrap}.cr-head{grid-template-columns:56px minmax(0,1fr) 48px}.cr-tags{display:none}}@media (max-width:760px){.cr-hero{padding-top:calc(68px + 24px)}.cr-kpis{gap:8px}.cr-kpis div{padding:14px 12px}.cr-kpis span{font-size:12px}.cr-cult-media{min-height:340px}.cr-perks,.cr-step-grid{grid-template-columns:minmax(0,1fr)}.cr-head{grid-template-columns:44px minmax(0,1fr) 40px;gap:12px;padding:16px}.cr-num{width:44px;height:44px;font-size:15px}.cr-pm{width:40px;height:40px}.cr-inner{grid-template-columns:minmax(0,1fr);padding:0 16px 20px}.cr-inner .btn{justify-self:stretch;justify-content:center}form.cr-form{grid-template-columns:minmax(0,1fr)}}@media (prefers-reduced-motion:reduce){.cr-body,.cr-inner,.cr-pm,.cr-pm::before,.cr-pm::after,.cr-perk,.cr-step,.cr-cult-media img{transition:none}.cr-hero-media figcaption i,.cr-f.bad,.cr-ok{animation:none}}:host{--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--sans:\"Manrope\",system-ui,sans-serif;--ease:cubic-bezier(.2,.7,.2,1);--ease-io:cubic-bezier(.7,0,.2,1);--shadow-lg:0 30px 60px -30px rgba(33,30,54,.45);--shadow-md:0 18px 40px -22px rgba(33,30,54,.4);}:host{scroll-padding-top:100px}::selection{background:var(--orange);color:var(--navy)}:focus-visible{outline:2px solid var(--orange);outline-offset:3px;border-radius:4px}.kl-skip{position:fixed;left:12px;top:-60px;z-index:200;background:var(--navy);color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;transition:top .2s}.kl-skip:focus{top:12px}@view-transition{navigation:auto}::view-transition-old(root){animation:kl-vt-out .32s var(--ease-io) both}::view-transition-new(root){animation:kl-vt-in .6s var(--ease) both}#hdr{view-transition-name:kl-header}::view-transition-group(kl-header){animation-duration:0s}@keyframes kl-vt-out{to{opacity:0;transform:translateY(-14px) scale(.995)}}@keyframes kl-vt-in{from{opacity:0;transform:translateY(22px)}}.kl-curtain{position:fixed;inset:0;z-index:150;pointer-events:none;background:var(--navy);transform:scaleY(0);transform-origin:bottom;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='40' height='40'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45' fill-opacity='.12'/%3E%3C/svg%3E\");background-size:40px}.kl-curtain.cover{transform:scaleY(1);transition:transform .42s var(--ease-io)}.kl-curtain.lift{transform:scaleY(0);transform-origin:top;transition:transform .6s var(--ease-io)}.kl-curtain.instant{transform:scaleY(1);transition:none}.kl-intro{position:fixed;inset:0;z-index:160;background:var(--navy);display:grid;place-items:center;transition:transform .8s var(--ease-io) .05s}.kl-intro.done{transform:translateY(-100%)}.kl-intro .mk{width:84px;height:auto;fill:var(--orange);animation:kl-pop .7s var(--ease) both}.kl-intro .wm{width:200px;height:auto;fill:#fff;margin-top:22px;clip-path:inset(0 100% 0 0);animation:kl-wipe .7s var(--ease) .25s forwards}.kl-intro .bar{position:absolute;left:0;bottom:0;height:3px;background:var(--orange);width:0;animation:kl-bar .9s var(--ease) forwards}@keyframes kl-pop{from{opacity:0;transform:scale(.6) rotate(-12deg)}}@keyframes kl-wipe{to{clip-path:inset(0)}}@keyframes kl-bar{to{width:100%}}.kl-promo{position:relative;z-index:51;background:#F6F4F1;color:var(--navy);font-size:13px;height:34px;overflow:hidden;border-bottom:1px solid rgba(33,30,54,.08)}.kl-promo.gone{display:none}.kl-promo-in{height:100%;display:flex;align-items:center;justify-content:center;gap:16px;position:relative}.kl-promo-rot{position:relative;flex:1;height:100%;max-width:640px}.kl-promo-rot a{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;font-weight:500;color:var(--navy);opacity:0;transform:translateY(100%);transition:opacity .5s var(--ease),transform .6s var(--ease);pointer-events:none}.kl-promo-rot a.on{opacity:1;transform:none;pointer-events:auto}.kl-promo-rot a.out{opacity:0;transform:translateY(-100%)}.kl-promo-rot a:hover{color:var(--orange-deep)}.kl-promo-rot svg{width:16px;height:16px;flex:none;color:var(--orange-deep);fill:none;stroke:currentColor;stroke-width:3}.kl-promo-tel{position:absolute;left:var(--gutter);font-weight:700;font-size:12.5px;color:var(--navy);opacity:.75;transition:opacity .2s}.kl-promo-tel:hover{opacity:1}.kl-promo-x{position:absolute;right:var(--gutter);top:50%;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;color:var(--navy);opacity:.45;font-size:11px;transition:opacity .2s,background .2s}.kl-promo-x:hover{opacity:1;background:rgba(33,30,54,.08)}@media (max-width:900px){.kl-promo-tel{display:none}}@media (max-width:480px){.kl-promo{font-size:12px;height:32px}.kl-promo-rot a{justify-content:flex-start;padding-right:30px}}#hdr{top:var(--kl-bar,0px)}.kl-sticker{position:absolute;right:28px;top:28px;z-index:3;width:132px;height:132px;border-radius:50%;background:var(--orange);color:var(--navy);display:grid;place-items:center;box-shadow:0 20px 40px -18px rgba(0,0,0,.55);transition:transform .5s var(--ease);animation:kl-pop .8s var(--ease) .6s both}.kl-sticker:hover{transform:scale(1.07) rotate(-6deg)}.kl-sticker svg{position:absolute;inset:6px;width:calc(100% - 12px);height:calc(100% - 12px);animation:kl-spin 16s linear infinite}.kl-sticker text{font:700 10.5px var(--body);letter-spacing:.18em;fill:var(--navy);text-transform:uppercase}.kl-sticker b{font-family:var(--head);font-weight:800;font-size:28px;line-height:1;text-align:center}.kl-sticker b small{display:block;font-family:var(--body);font-size:10px;font-weight:700;letter-spacing:.12em;margin-top:4px}@keyframes kl-spin{to{transform:rotate(360deg)}}@media (max-width:760px){.kl-sticker{width:100px;height:100px;right:16px;top:16px}.kl-sticker b{font-size:21px}.kl-sticker text{font-size:9.5px}}.kl-cat-badge{position:absolute;left:22px;top:22px;z-index:3;background:var(--orange);color:var(--navy);font-size:12px;font-weight:800;padding:5px 10px;border-radius:999px;box-shadow:0 8px 18px -10px rgba(0,0,0,.5);animation:kl-pop .6s var(--ease) both}.cat .kl-cat-badge+svg.ico{margin-top:30px}.cat.big>.kl-cat-badge{position:absolute;width:auto;align-self:flex-start;font-size:13px;padding:7px 14px}.kl-deals{background:var(--white);position:relative;overflow:hidden}.kl-deals .sec-head{align-items:flex-end}.kl-deals-meta{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.kl-count{display:flex;gap:6px;font-variant-numeric:tabular-nums}.kl-count span{background:var(--navy);color:#fff;border-radius:8px;padding:8px 10px;min-width:56px;text-align:center;font-family:var(--head);font-weight:800;font-size:20px;line-height:1}.kl-count span small{display:block;font-family:var(--body);font-weight:500;font-size:10px;opacity:.6;margin-top:4px;letter-spacing:.06em}.kl-deals-rail{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(240px,1fr);gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:4px 2px 14px}.kl-deals-rail::-webkit-scrollbar{display:none}.kl-deal{scroll-snap-align:start;background:var(--grey-2);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;position:relative;transition:transform .45s var(--ease),box-shadow .45s var(--ease)}.kl-deal:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-deal .im{aspect-ratio:1;background:#fff;display:grid;place-items:center;overflow:hidden}.kl-deal .im img{width:84%;height:84%;object-fit:contain;transition:transform 1s var(--ease)}.kl-deal:hover .im img{transform:scale(1.07)}.kl-deal .off{position:absolute;left:12px;top:12px;background:var(--orange);color:var(--navy);font-weight:800;font-size:13px;padding:5px 10px;border-radius:999px}.kl-deal .bd{padding:14px 16px 16px;display:flex;flex-direction:column;gap:6px;flex:1}.kl-deal .br{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:600}.kl-deal h3{font-family:var(--body);font-weight:600;font-size:14px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.kl-deal .pr{margin-top:auto;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}.kl-deal .pr b{font-family:var(--head);font-size:18px}.kl-deal .pr s{font-size:13px;color:var(--muted)}.kl-deals-nav{display:flex;gap:8px}.kl-deals-nav button{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s}.kl-deals-nav button:hover{background:var(--navy);color:#fff}.kl-deals-note{font-size:12px;color:var(--muted);margin-top:6px}@media (max-width:760px){.kl-deals-rail{grid-auto-columns:72%}.kl-count span{min-width:46px;font-size:17px;padding:7px 8px}.kl-deals-nav{display:none}}.kl-ab{position:relative;overflow:hidden;background:#8E9097;color:#fff;min-height:min(900px,100svh);display:flex;align-items:center;padding:clamp(80px,9vw,120px) 0}.kl-ab-bg{position:absolute;inset:0}.kl-ab-bg img{width:100%;height:100%;object-fit:cover;object-position:70% center;transform:scale(1.06);transition:transform 2.4s var(--ease)}.kl-ab.kl-seen .kl-ab-bg img{transform:none}.kl-ab::before{content:\"\";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(33,30,54,.82) 0%,rgba(33,30,54,.55) 38%,rgba(33,30,54,0) 64%)}.kl-ab-in{position:relative;z-index:2;width:100%}.kl-ab-in>*{max-width:640px}.kl-ab-q{font-family:var(--head);font-weight:700;font-size:clamp(28px,3.3vw,50px);line-height:1.12;margin:22px 0 26px;letter-spacing:-.01em}.kl-ab-t{font-size:clamp(15px,1.15vw,17px);line-height:1.75;color:rgba(255,255,255,.85);max-width:560px;margin-bottom:34px}.kl-ab .btn-line{color:#fff;border-radius:999px;padding:16px 28px}.kl-ab-line{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:48px;max-width:720px!important;padding-top:24px;border-top:1px solid rgba(255,255,255,.22)}.kl-ab-line b{display:block;font-family:var(--head);font-size:22px;color:var(--orange)}.kl-ab-line span{display:block;font-size:12.5px;line-height:1.45;color:rgba(255,255,255,.75);margin-top:4px}.kl-ab-sign{font-size:12px;color:rgba(255,255,255,.6);margin-top:22px}@media (max-width:760px){.kl-ab{align-items:flex-start;min-height:0;padding:72px 0 360px}.kl-ab::before{background:linear-gradient(180deg,rgba(33,30,54,.85) 0%,rgba(33,30,54,.6) 52%,rgba(33,30,54,0) 78%)}.kl-ab-bg img{object-position:center bottom}.kl-ab-line{grid-template-columns:1fr 1fr}}.kl-how{background:#F6EEE4;position:relative;overflow:hidden}.kl-how::before{content:\"\";position:absolute;inset:0;opacity:.55;pointer-events:none;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='220' height='220'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-opacity='.35' stroke-width='.008'/%3E%3C/svg%3E\");background-size:220px}.kl-how .wrap{position:relative}.kl-how-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2vw,28px)}.kl-vid{position:relative;display:block;aspect-ratio:9/14;border-radius:14px;overflow:hidden;background:var(--navy);cursor:pointer;padding:0;text-align:left;box-shadow:0 30px 60px -40px rgba(33,30,54,.6);transition:transform .6s var(--ease),box-shadow .6s var(--ease)}.kl-vid:hover{transform:translateY(-8px);box-shadow:0 40px 70px -36px rgba(33,30,54,.7)}.kl-vid img,.kl-vid video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.2s var(--ease),opacity .5s}.kl-vid:hover img{transform:scale(1.05)}.kl-vid video{opacity:0;pointer-events:none}.kl-vid.previewing video{opacity:1}.kl-vid::after{content:\"\";position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(180deg,transparent,rgba(33,30,54,.85))}.kl-play{position:absolute;left:50%;top:50%;z-index:2;width:76px;height:76px;margin:-38px 0 0 -38px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 12px 30px -10px rgba(0,0,0,.45);transition:transform .45s var(--ease),background .3s}.kl-play::before{content:\"\";margin-left:5px;border-left:18px solid var(--navy);border-top:11px solid transparent;border-bottom:11px solid transparent;transition:border-color .3s}.kl-play::after{content:\"\";position:absolute;inset:-10px;border-radius:50%;border:2px solid rgba(255,255,255,.6);animation:kl-ring 2.4s var(--ease) infinite}@keyframes kl-ring{0%{transform:scale(.85);opacity:1}100%{transform:scale(1.35);opacity:0}}.kl-vid:hover .kl-play{transform:scale(1.1);background:var(--orange)}.kl-vid-cap{position:absolute;left:22px;right:22px;bottom:22px;z-index:2;color:#fff;font-weight:600;font-size:15px;line-height:1.35}.kl-vid-cap small{display:block;font-family:var(--head);font-size:12px;color:var(--orange);letter-spacing:.1em;margin-bottom:6px}@media (max-width:900px){.kl-how-grid{grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:72%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding-bottom:6px}.kl-how-grid::-webkit-scrollbar{display:none}.kl-vid{scroll-snap-align:start}.kl-play{width:62px;height:62px;margin:-31px 0 0 -31px}}.kl-vmodal{position:fixed;inset:0;z-index:130;background:rgba(20,18,34,.82);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px;opacity:0;transition:opacity .3s}.kl-vmodal[hidden]{display:none}.kl-vmodal.show{opacity:1}.kl-vmodal-box{position:relative;height:min(86vh,900px);aspect-ratio:9/16;max-width:100%;border-radius:16px;overflow:hidden;background:#000;transform:scale(.94);transition:transform .45s var(--ease)}.kl-vmodal.show .kl-vmodal-box{transform:none}.kl-vmodal video{width:100%;height:100%;object-fit:cover;display:block}.kl-vmodal-x{position:absolute;right:12px;top:12px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.9);color:var(--navy);font-size:15px;font-weight:700}.kl-chat{position:fixed;right:20px;bottom:20px;z-index:90;font-size:14px;transform:translateY(calc(-1 * var(--kl-lift,0px)));transition:transform .35s var(--ease),opacity .25s,visibility .25s}:host.kl-chat-hide .kl-chat,:host.kl-chat-hide .kl-top{opacity:0!important;visibility:hidden!important;pointer-events:none!important}.kl-chat-btn{display:flex;align-items:center;gap:10px;background:var(--navy);color:#fff;border-radius:999px;padding:8px 18px 8px 8px;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transition:transform .35s var(--ease),background .3s;animation:kl-pop .7s var(--ease) 1.4s both}.kl-chat-btn:hover{transform:translateY(-3px);background:var(--navy-2)}.kl-chat-btn .av{position:relative;width:40px;height:40px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-btn .av svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-btn .av::after{content:\"\";position:absolute;right:0;top:0;width:11px;height:11px;border-radius:50%;background:#2E9E5B;border:2px solid var(--navy)}.kl-chat-btn b{font-weight:600}.kl-chat.open .kl-chat-btn{opacity:0;pointer-events:none;transform:scale(.8)}.kl-chat-panel{position:absolute;right:0;bottom:0;width:min(370px,calc(100vw - 32px));background:#fff;border-radius:18px;overflow:hidden;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);transform-origin:bottom right;transform:scale(.6) translateY(20px);opacity:0;visibility:hidden;transition:transform .45s var(--ease),opacity .25s,visibility 0s .45s;display:flex;flex-direction:column;max-height:min(600px,calc(100svh - 120px))}.kl-chat.open .kl-chat-panel{transform:none;opacity:1;visibility:visible;transition:transform .45s var(--ease),opacity .25s}.kl-chat-head{background:var(--navy);color:#fff;padding:18px 18px 16px;display:flex;gap:12px;align-items:center;position:relative}.kl-chat-head .av{width:42px;height:42px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-head .av svg{width:22px;height:22px;fill:var(--navy)}.kl-chat-head b{display:block;font-size:15px}.kl-chat-head small{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.75}.kl-chat-head small::before{content:\"\";width:7px;height:7px;border-radius:50%;background:#2E9E5B}.kl-chat-x{position:absolute;right:12px;top:12px;width:32px;height:32px;border-radius:50%;color:#fff;opacity:.7}.kl-chat-x:hover{opacity:1;background:rgba(255,255,255,.1)}.kl-chat-body{padding:16px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;background:var(--grey-2);flex:1;min-height:200px}.kl-msg{max-width:86%;padding:10px 14px;border-radius:14px;line-height:1.45;animation:kl-up .35s var(--ease) both}.kl-msg.in{background:#fff;border-bottom-left-radius:4px;align-self:flex-start}.kl-msg.out{background:var(--navy);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}.kl-msg small{display:block;font-size:11px;opacity:.55;margin-top:4px}.kl-typing{align-self:flex-start;background:#fff;border-radius:14px;padding:12px 14px;display:flex;gap:4px}.kl-typing i{width:6px;height:6px;border-radius:50%;background:var(--muted);animation:kl-dot 1s infinite}.kl-typing i:nth-child(2){animation-delay:.15s}.kl-typing i:nth-child(3){animation-delay:.3s}@keyframes kl-dot{0%,100%{opacity:.3;transform:none}50%{opacity:1;transform:translateY(-3px)}}.kl-quick{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}.kl-quick button{font-size:13px;font-weight:600;padding:8px 12px;border-radius:999px;background:#fff;border:1.5px solid var(--line);color:var(--navy);transition:border-color .2s,background .2s}.kl-quick button:hover{border-color:var(--orange);background:#FDF4EC}.kl-chat-ch{display:flex;gap:8px;padding:10px 16px 0;background:#fff}.kl-chat-ch a{flex:1;text-align:center;font-size:12px;font-weight:600;padding:8px 6px;border-radius:9px;background:var(--grey-2);transition:background .2s,color .2s}.kl-chat-ch a:hover{background:var(--navy);color:#fff}.kl-chat-form{display:flex;gap:8px;padding:12px 16px 16px;background:#fff}.kl-chat-form input{flex:1;min-width:0;border:1.5px solid var(--line);border-radius:999px;padding:11px 16px;font:inherit;font-size:14px;outline:none;color:var(--navy)}.kl-chat-form input:focus{border-color:var(--orange)}.kl-chat-form button{width:44px;height:44px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none;transition:transform .25s var(--ease)}.kl-chat-form button:hover{transform:scale(1.08)}.kl-chat-form button svg{width:18px;height:18px;fill:none;stroke:var(--navy);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-note{font-size:11px;color:var(--muted);text-align:center;padding:0 16px 12px;background:#fff}.kl-top{bottom:calc(92px + var(--kl-lift,0px))!important}@media (max-width:760px){.kl-chat{right:14px;bottom:14px}.kl-chat-btn{padding:6px}.kl-chat-btn b{display:none}.kl-chat-btn .av{width:46px;height:46px}.kl-top{right:18px}}.kl-progress{position:fixed;left:0;right:0;top:0;height:3px;z-index:60;pointer-events:none}.kl-progress i{display:block;height:100%;background:var(--orange);transform-origin:left;transform:scaleX(var(--p,0))}#hdr{transition:transform .45s var(--ease),box-shadow .3s,background .3s}#hdr.kl-hide{transform:translateY(-100%)}#hdr .logo svg{transition:transform .4s var(--ease)}#hdr .logo:hover svg{transform:translateX(3px)}.kl-menu{align-items:center}.kl-dd{position:relative;display:flex;align-items:center}.kl-dd>a{display:inline-flex;align-items:center;gap:6px}.kl-caret{width:7px;height:7px;border-right:1.6px solid currentColor;border-bottom:1.6px solid currentColor;transform:rotate(45deg) translateY(-2px);transition:transform .3s var(--ease);opacity:.6}.kl-dd:hover .kl-caret,.kl-dd.open .kl-caret{transform:rotate(225deg) translate(-2px,-1px)}.kl-panel{position:absolute;top:100%;left:-18px;min-width:290px;padding:10px;background:#fff;border-radius:14px;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);opacity:0;visibility:hidden;transform:translateY(10px) scale(.98);transform-origin:top left;transition:opacity .25s,transform .35s var(--ease),visibility 0s .35s;margin-top:14px}.kl-panel::before{content:\"\";position:absolute;left:0;right:0;top:-16px;height:16px}.kl-dd:hover .kl-panel,.kl-dd:focus-within .kl-panel,.kl-dd.open .kl-panel{opacity:1;visibility:visible;transform:none;transition:opacity .25s,transform .35s var(--ease),visibility 0s}.kl-dd.closing .kl-panel{opacity:0!important;visibility:hidden!important}.menu .kl-panel a{display:block;padding:11px 14px;border-radius:9px;transition:background .2s,transform .25s var(--ease)}.menu .kl-panel a::after{display:none}.menu .kl-panel a:hover{background:var(--grey-2);transform:translateX(4px)}.kl-panel b{display:block;font-size:14px;font-weight:600}.kl-panel small{display:block;font-size:12px;color:var(--muted);font-weight:400;margin-top:2px}.kl-panel a:hover b{color:var(--orange-deep)}.kl-panel>a{opacity:0;transform:translateY(6px)}.kl-dd:hover .kl-panel>a,.kl-dd:focus-within .kl-panel>a,.kl-dd.open .kl-panel>a{opacity:1;transform:none;transition:opacity .3s,transform .4s var(--ease),background .2s;transition-delay:calc(var(--i,0)*35ms)}.kl-mega{display:grid;grid-template-columns:repeat(3,minmax(150px,1fr)) 230px;gap:6px 18px;min-width:860px;padding:22px}.kl-mega h6{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange-deep);margin:0 0 8px 12px}.menu .kl-mega-col a{padding:7px 12px;font-size:14px}.menu a.kl-mega-promo{background:var(--navy);color:#fff;border-radius:12px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;gap:14px;min-height:220px;position:relative;overflow:hidden}.menu a.kl-mega-promo:hover{background:var(--navy-2);transform:none}.kl-mega-promo b{font-family:var(--head);font-size:20px;line-height:1.15;color:#fff!important}.kl-mega-promo .kl-more{font-size:13px;font-weight:600;color:var(--orange);display:inline-flex;gap:8px;align-items:center}.kl-mega-promo .arrow{fill:var(--orange)}.kl-mega-promo::after{content:\"\";position:absolute;right:-40px;bottom:-40px;width:160px;height:160px;opacity:.25;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='32' height='32'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45'/%3E%3C/svg%3E\");background-size:32px;transition:transform .8s var(--ease)}.kl-mega-promo:hover::after{transform:translate(-14px,-14px)}.menu a[aria-current=\"page\"],.kl-dd.kl-active>a{color:var(--orange-deep)}.menu>a[aria-current=\"page\"]::after,.kl-dd.kl-active>a::after{width:100%}.kl-icon-btn{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s,transform .25s var(--ease);flex:none}.kl-icon-btn svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:1.8;stroke-linecap:round;transition:stroke .25s}.kl-icon-btn:hover{background:var(--navy);transform:translateY(-2px)}.kl-icon-btn:hover svg{stroke:#fff}.kl-icon-btn[aria-current=\"page\"]{background:var(--orange)}@media (max-width:1460px){.nav-right .lang{display:none}}@media (max-width:1320px){.kl-menu{gap:22px}}@media (max-width:1200px){.kl-menu{gap:16px;font-size:13.5px}.nav-cta{display:none!important}}.drawer{inset:0 0 0 auto!important;width:min(380px,88vw);padding:16px 24px 24px!important;border-radius:18px 0 0 18px;box-shadow:-30px 0 60px -20px rgba(0,0,0,.45);transition:transform .5s var(--ease-io)!important;overflow:hidden}.drawer .top{height:44px}.drawer .top svg{height:16px}.drawer .burger{width:40px;height:40px;font-size:15px}.kl-backdrop{position:fixed;inset:0;z-index:69;background:rgba(33,30,54,.45);backdrop-filter:blur(3px);opacity:0;visibility:hidden;transition:opacity .4s,visibility 0s .4s}:host.kl-drawer-open .kl-backdrop{opacity:1;visibility:visible;transition:opacity .4s}.drawer{overflow-y:auto!important;overscroll-behavior:contain}.kl-drawer-nav{flex:1 0 auto;margin-top:22px!important;padding-bottom:16px}.kl-drawer-foot{flex:none}.drawer .kl-drawer-nav>a,.kl-drawer-nav summary{font-family:var(--body)!important;font-weight:600!important;font-size:17px!important;padding:14px 0!important;border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details{border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details summary{border-bottom:0}.kl-drawer-nav summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center}.kl-drawer-nav summary::-webkit-details-marker{display:none}.kl-drawer-nav summary::after{content:\"\";width:8px;height:8px;border-right:1.8px solid var(--orange);border-bottom:1.8px solid var(--orange);transform:rotate(45deg) translateY(-3px);transition:transform .3s var(--ease)}.kl-drawer-nav details[open] summary::after{transform:rotate(225deg) translate(-2px,-2px)}.kl-drawer-nav details>div{display:grid;padding:0 0 12px 12px;border-left:2px solid rgba(224,143,69,.35);margin:0 0 12px 2px}.drawer .kl-drawer-nav details>div a{font-family:var(--body);font-weight:500;font-size:15px;padding:7px 0;border:0;opacity:.75;transition:opacity .2s,transform .25s var(--ease)}.drawer .kl-drawer-nav details>div a:hover{opacity:1;transform:translateX(4px);color:var(--orange)}.drawer .kl-drawer-nav>a[aria-current=\"page\"],.drawer .kl-drawer-nav a[aria-current=\"page\"]{color:var(--orange);opacity:1}.kl-drawer-nav details[open]>div a{animation:kl-up .4s var(--ease) both}.kl-drawer-nav details[open]>div a:nth-child(2){animation-delay:.03s}.kl-drawer-nav details[open]>div a:nth-child(3){animation-delay:.06s}.kl-drawer-nav details[open]>div a:nth-child(4){animation-delay:.09s}.kl-drawer-nav details[open]>div a:nth-child(5){animation-delay:.12s}.kl-drawer-nav details[open]>div a:nth-child(6){animation-delay:.15s}.drawer.open .kl-drawer-nav>*{animation:kl-side .5s var(--ease) both}.drawer.open .kl-drawer-nav>*:nth-child(2){animation-delay:.04s}.drawer.open .kl-drawer-nav>*:nth-child(3){animation-delay:.08s}.drawer.open .kl-drawer-nav>*:nth-child(4){animation-delay:.12s}.drawer.open .kl-drawer-nav>*:nth-child(5){animation-delay:.16s}.drawer.open .kl-drawer-nav>*:nth-child(6){animation-delay:.2s}.kl-drawer-foot{display:grid;gap:4px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12)}.kl-drawer-foot span{font-size:12px;opacity:.55;margin-bottom:12px}.kl-drawer-foot .btn{justify-content:center}.kl-drawer-phone{font-family:var(--head);font-weight:800;font-size:19px;color:var(--orange)}@keyframes kl-up{from{opacity:0;transform:translateY(12px)}}@keyframes kl-side{from{opacity:0;transform:translateX(24px)}}:host.kl-lock{overflow:hidden}.kl-search{position:fixed;inset:0;z-index:120;background:rgba(33,30,54,.55);backdrop-filter:blur(8px);display:flex;justify-content:center;align-items:flex-start;padding:12vh 16px 16px;opacity:0;transition:opacity .25s}.kl-search[hidden]{display:none}.kl-search.show{opacity:1}.kl-search-box{width:min(680px,100%);background:#fff;border-radius:16px;box-shadow:var(--shadow-lg);overflow:hidden;transform:translateY(-12px) scale(.98);transition:transform .4s var(--ease)}.kl-search.show .kl-search-box{transform:none}.kl-search-in{display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--line)}.kl-search-in svg{width:22px;height:22px;fill:none;stroke:var(--muted);stroke-width:2;stroke-linecap:round;flex:none}.kl-search-in input{flex:1;border:0;outline:0;font:inherit;font-size:18px;color:var(--navy);background:none;min-width:0}.kl-search-in kbd{font:inherit;font-size:11px;color:var(--muted);border:1px solid var(--line);border-radius:5px;padding:2px 6px}.kl-search-res{max-height:min(60vh,520px);overflow-y:auto;padding:8px}.kl-search-res h6{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:10px 12px 6px}.kl-search-res a{display:flex;align-items:center;gap:14px;padding:10px 12px;border-radius:10px}.kl-search-res a[aria-selected=\"true\"],.kl-search-res a:hover{background:var(--grey-2)}.kl-search-res a img,.kl-search-res a .ic{width:44px;height:44px;border-radius:8px;object-fit:cover;background:var(--grey-2);flex:none;display:grid;place-items:center;font-weight:800;color:var(--orange-deep)}.kl-search-res a b{display:block;font-size:14px;font-weight:600;line-height:1.3}.kl-search-res a small{display:block;font-size:12px;color:var(--muted)}.kl-search-res mark{background:rgba(224,143,69,.25);color:inherit;border-radius:3px}.kl-search-res .empty{padding:24px 12px;color:var(--muted);font-size:14px;text-align:center}.kl-top{position:fixed;right:20px;bottom:20px;z-index:55;width:48px;height:48px;border-radius:50%;background:var(--navy);display:grid;place-items:center;box-shadow:var(--shadow-md);opacity:0;transform:translateY(20px) scale(.8);pointer-events:none;transition:opacity .3s,transform .45s var(--ease),background .25s}.kl-top.show{opacity:1;transform:none;pointer-events:auto}.kl-top:hover{background:var(--orange)}.kl-top svg{width:20px;height:20px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-top:hover svg{stroke:var(--navy)}.kl-body.kl-has-sticky .kl-top{bottom:96px}.kl-demo{position:fixed;left:16px;bottom:16px;z-index:54;font-size:11px;font-weight:600;letter-spacing:.02em;padding:7px 12px;border-radius:999px;background:rgba(33,30,54,.82);color:#fff;backdrop-filter:blur(6px);pointer-events:none;box-shadow:var(--shadow-md)}.kl-demo::before{content:\"\";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--orange);margin-right:8px;vertical-align:1px}.kl-body.kl-has-sticky .kl-demo{bottom:92px}@media (max-width:760px){.kl-demo{bottom:12px;left:12px;font-size:10px}}.kl-foot-cta{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap;padding-bottom:56px;margin-bottom:56px;border-bottom:1px solid rgba(255,255,255,.12)}.kl-foot-cta .h-section{color:#fff;margin-top:14px}.kl-foot-grid{grid-template-columns:1.6fr 1fr 1fr 1fr 1fr!important}.kl-foot-grid a{transition:color .2s,transform .3s var(--ease),opacity .2s}.kl-foot-grid a:hover{transform:translateX(4px)}.kl-foot-hours{display:block;font-size:13px;opacity:.55;margin-top:6px}.kl-footer .k svg{transition:transform 1.2s var(--ease)}.kl-footer:hover .k svg{transform:rotate(-8deg) scale(1.05)}@media (max-width:1080px){.kl-foot-grid{grid-template-columns:1fr 1fr 1fr!important}}@media (max-width:760px){.kl-foot-grid{grid-template-columns:1fr 1fr!important}.kl-foot-grid>div:first-child{grid-column:1/-1}}.btn-navy{background:var(--navy);color:var(--white)}.btn{position:relative;overflow:hidden;isolation:isolate;transition:transform .3s var(--ease),background .3s,color .3s,border-color .3s,box-shadow .3s}.btn::after{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:inherit;transform:translateX(-102%) skewX(-12deg);transition:transform .55s var(--ease)}.btn:hover::after{transform:translateX(0) skewX(0)}.btn-orange::after{background:var(--orange-deep)}.btn-navy::after{background:var(--navy-2)}.btn:hover{box-shadow:0 14px 30px -14px rgba(33,30,54,.5)}.btn:active{transform:scale(.97)}.btn:hover .arrow{transform:translateX(5px)}.btn .arrow{transition:transform .35s var(--ease)}.kl-magnet{will-change:transform}main p a:not(.btn):not([class]){background:linear-gradient(currentColor,currentColor) 0 100%/0 1.5px no-repeat;transition:background-size .35s var(--ease)}main p a:not(.btn):not([class]):hover{background-size:100% 1.5px}.kl-lift{transition:transform .5s var(--ease),box-shadow .5s var(--ease)}.kl-lift:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-zoom img{transition:transform 1.1s var(--ease)!important}.kl-zoom:hover img,.kl-lift:hover .kl-zoom img{transform:scale(1.06)}img.kl-fade{opacity:0;transition:opacity .7s var(--ease)}img.kl-fade.kl-loaded{opacity:1}:host.kl-js [data-kl-rv]{opacity:0;transform:translateY(32px);transition:opacity .9s var(--ease),transform 1s var(--ease);transition-delay:calc(var(--i,0)*80ms)}:host.kl-js [data-kl-rv=\"left\"]{transform:translateX(-36px)}:host.kl-js [data-kl-rv=\"right\"]{transform:translateX(36px)}:host.kl-js [data-kl-rv=\"scale\"]{transform:scale(.94)}:host.kl-js [data-kl-rv].kl-in{opacity:1;transform:none}:host.kl-js [data-kl-rv=\"img\"]{opacity:1;transform:none;clip-path:inset(0 0 100% 0);transition:clip-path 1.2s var(--ease-io)}:host.kl-js [data-kl-rv=\"img\"] img{transform:scale(1.15);transition:transform 1.6s var(--ease)}:host.kl-js [data-kl-rv=\"img\"].kl-in{clip-path:inset(0)}:host.kl-js [data-kl-rv=\"img\"].kl-in img{transform:none}:host.kl-js [data-kl-rv].kl-done{transition-delay:0s}.kl-split .kl-w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.1em;margin-bottom:-.1em}.kl-split .kl-w>span{display:inline-block;transform:translateY(110%);transition:transform 1s var(--ease);transition-delay:calc(var(--i,0)*55ms + 80ms)}.kl-split.kl-in .kl-w>span{transform:none}:host:not(.kl-js) .kl-split .kl-w>span{transform:none}@media (prefers-reduced-motion:reduce){::view-transition-old(root),::view-transition-new(root){animation:none}:host.kl-js [data-kl-rv],:host.kl-js [data-kl-rv] img,.kl-split .kl-w>span{opacity:1!important;transform:none!important;clip-path:none!important;transition:none!important}.kl-intro,.kl-curtain{display:none!important}.kl-lift:hover,.btn:hover .arrow{transform:none}.btn::after{display:none}}.kl-opt{display:flex;flex-direction:column;gap:10px;margin:18px 0 6px}.kl-opt>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.kl-opt>div{display:flex;flex-wrap:wrap;gap:8px}.kl-opt button{font:600 14px/1 var(--body);padding:11px 16px;border-radius:999px;border:1.5px solid var(--grey);background:#fff;color:var(--navy);cursor:pointer;transition:border-color .2s,background .2s,color .2s,transform .2s var(--ease)}.kl-opt button:hover{border-color:var(--orange);transform:translateY(-1px)}.kl-opt button.on{background:var(--navy);border-color:var(--navy);color:#fff}.kl-share{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 4px}.kl-share>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-right:4px}.kl-share a,.kl-share button{font:600 13px/1 var(--body);padding:9px 13px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);border:0;cursor:pointer;transition:background .2s,color .2s}.kl-share a:hover,.kl-share button:hover{background:var(--navy);color:#fff}.kl-mail{background:var(--white);padding:clamp(56px,7vw,100px) 0}.kl-mail-head{margin-bottom:28px}.kl-mail-head .h-section{margin-top:14px}.kl-mail-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.kl-mail-grid a{display:flex;flex-direction:column;gap:6px;padding:22px;border-radius:18px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .25s,color .25s,transform .3s var(--ease)}.kl-mail-grid a:hover{background:var(--navy);color:#fff;transform:translateY(-3px)}.kl-mail-grid small{font-size:12px;letter-spacing:.1em;text-transform:uppercase;opacity:.65}.kl-mail-grid b{font-size:17px;font-weight:700;overflow-wrap:anywhere}.kl-mail-soc{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}.kl-mail-soc>div{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:18px 22px;border:1.5px solid var(--grey);border-radius:18px}.kl-mail-soc small{flex-basis:100%;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange-deep)}.kl-mail-soc a{font-weight:600;font-size:14px;padding:8px 14px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .2s,color .2s}.kl-mail-soc a:hover{background:var(--orange);color:var(--navy)}@media (max-width:900px){.kl-mail-grid{grid-template-columns:1fr 1fr}.kl-mail-soc{grid-template-columns:1fr}}@media (max-width:520px){.kl-mail-grid{grid-template-columns:1fr}}a.brands{display:block;text-decoration:none}a.brands:hover .track{animation-play-state:paused}.kl-rev{background:var(--grey-2,#F1F0EE);padding:clamp(64px,8vw,120px) 0}.kl-rev-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:8px}.kl-rev figure{margin:0;background:#fff;border-radius:22px;padding:30px 28px;display:flex;flex-direction:column;justify-content:space-between;gap:26px;position:relative;transition:transform .4s var(--ease),box-shadow .4s}.kl-rev figure::before{content:\"“\";position:absolute;top:6px;right:22px;font:800 90px/1 var(--head);color:var(--orange);opacity:.35}.kl-rev figure:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}.kl-rev blockquote{margin:0;font-size:16px;line-height:1.6;color:var(--navy)}.kl-rev figcaption{display:grid;grid-template-columns:auto 1fr;column-gap:12px;align-items:center}.kl-rev .av{grid-row:span 2;width:46px;height:46px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:800;font-size:14px}.kl-rev figcaption b{font-size:15px}.kl-rev figcaption small{font-size:13px;color:var(--muted)}.kl-blogt{background:var(--white);padding:clamp(64px,8vw,120px) 0}.kl-blogt-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.kl-blogt-grid a{display:flex;flex-direction:column;gap:10px;color:var(--navy)}.kl-blogt-grid img{width:100%;aspect-ratio:16/11;object-fit:cover;border-radius:18px;transition:transform .6s var(--ease),filter .4s}.kl-blogt-grid a:hover img{transform:scale(1.03);filter:saturate(1.1)}.kl-blogt-grid small{font-size:12px;color:var(--muted);letter-spacing:.06em}.kl-blogt-grid b{font-size:17px;line-height:1.35;transition:color .2s}.kl-blogt-grid a:hover b{color:var(--orange-deep)}@media (max-width:1000px){.kl-rev-grid{grid-template-columns:1fr}.kl-blogt-grid{grid-template-columns:1fr 1fr}}@media (max-width:560px){.kl-blogt-grid{grid-template-columns:1fr}}.kl-lang{display:flex;align-items:center;gap:2px;padding:3px;border-radius:999px;background:rgba(33,30,54,.06);margin-right:6px}.kl-lang a{font:700 12px/1 var(--body);letter-spacing:.04em;padding:7px 10px;border-radius:999px;color:var(--navy);opacity:.6;transition:background .25s,opacity .25s,color .25s}.kl-lang a:hover{opacity:1}.kl-lang a.on{background:var(--navy);color:#fff;opacity:1}.kl-lang-m{margin:0 0 14px;margin-right:0;align-self:stretch;background:rgba(255,255,255,.08)}.kl-lang-m a{flex:1;text-align:center;color:#fff;font-size:13px;padding:10px 14px}.kl-lang-m a.on{background:var(--orange);color:var(--navy)}@media (max-width:1100px){.nav .kl-lang:not(.kl-lang-m){display:none}}.kl-icon-btn{position:relative}.kl-cart-n{position:absolute;top:-6px;right:-6px;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:var(--orange);color:var(--navy);font:800 10.5px/19px var(--body);text-align:center;box-shadow:0 0 0 2px #fff;pointer-events:none}.kl-cart-n.bump{animation:kl-bump .45s var(--ease)}@keyframes kl-bump{40%{transform:scale(1.35)}}.kl-added{position:fixed;left:50%;bottom:24px;z-index:95;display:flex;gap:16px;align-items:center;background:var(--navy);color:#fff;padding:12px 14px 12px 18px;border-radius:14px;font-size:14px;font-weight:600;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transform:translate(-50%,160%);opacity:0;transition:transform .4s var(--ease),opacity .3s;max-width:calc(100vw - 32px)}.kl-added.show{transform:translate(-50%,0);opacity:1}.kl-added a{background:var(--orange);color:var(--navy);padding:8px 12px;border-radius:10px;white-space:nowrap}.kl-qdel svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle}.kl-qdel:hover{color:#C0392B}","html":{"ru":{"page":"\n<section class=\"cr-hero\" id=\"top\"><div class=\"wrap\"><nav class=\"cr-crumbs\" aria-label=\"Хлебные крошки\"><a href=\"/\">Главная</a> / Вакансии</nav><div class=\"cr-hero-grid\"><div><span class=\"eyebrow\">Карьера в Kashlux</span><h1>Откройте новые вехи <em>вместе с нами</em></h1><p class=\"lead\">Kashlux улучшает жизнь клиентов с помощью качественной продукции и превосходного сервиса. Наша команда — наша главная сила. Приходите расти вместе с компанией, которая работает на рынке уже 30 лет.</p><div class=\"cr-ctas\"><a class=\"btn btn-orange kl-magnet\" href=\"#jobs\">Смотреть вакансии <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a class=\"btn btn-line\" href=\"#apply\">Отправить резюме</a></div><div class=\"cr-kpis\"><div><b>7</b><span>открытых вакансий</span></div><div><b>4</b><span>шоурума в Ташкенте</span></div><div><b>30</b><span>лет на рынке</span></div></div></div><figure class=\"cr-hero-media\"><img srcset=\"https://static.wixstatic.com/media/a8ce0d_d1051a290c7b43cfbad3ce84c59f20c7~mv2.jpeg/v1/fill/w_550,h_590,al_c,q_80,enc_auto/x.jpg 550w, https://static.wixstatic.com/media/a8ce0d_d1051a290c7b43cfbad3ce84c59f20c7~mv2.jpeg/v1/fill/w_825,h_885,al_c,q_80,enc_auto/x.jpg 825w, https://static.wixstatic.com/media/a8ce0d_d1051a290c7b43cfbad3ce84c59f20c7~mv2.jpeg/v1/fill/w_1100,h_1180,al_c,q_80,enc_auto/x.jpg 1100w\" sizes=\"(max-width: 605px) 100vw, 605px\" fetchpriority=\"high\" src=\"https://static.wixstatic.com/media/a8ce0d_d1051a290c7b43cfbad3ce84c59f20c7~mv2.jpeg/v1/fill/w_1100,h_1180,al_c,q_80,enc_auto/x.jpg\" alt=\"Сотрудники Kashlux за работой в шоуруме hansgrohe\"><figcaption><i aria-hidden=\"true\"></i>Мы нанимаем</figcaption><div class=\"pat-fill\" aria-hidden=\"true\"></div></figure></div></div></section><section class=\"cr-cult\" id=\"culture\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Культура и условия</span><h2 class=\"h-section\">Почему у нас <em>остаются</em> надолго</h2></div><p class=\"lead\">Мы создаём атмосферу дружбы, открытости и взаимного уважения — и ценим ваш труд.</p></div><div class=\"cr-cult-grid\"><figure class=\"cr-cult-media\"><img srcset=\"https://static.wixstatic.com/media/a8ce0d_77c7a9e202324bcfa69e65696383bd69~mv2.jpeg/v1/fill/w_450,h_500,al_c,q_80,enc_auto/x.jpg 450w, https://static.wixstatic.com/media/a8ce0d_77c7a9e202324bcfa69e65696383bd69~mv2.jpeg/v1/fill/w_675,h_750,al_c,q_80,enc_auto/x.jpg 675w, https://static.wixstatic.com/media/a8ce0d_77c7a9e202324bcfa69e65696383bd69~mv2.jpeg/v1/fill/w_900,h_1000,al_c,q_80,enc_auto/x.jpg 900w\" sizes=\"(max-width: 495px) 100vw, 495px\" loading=\"lazy\" decoding=\"async\" src=\"https://static.wixstatic.com/media/a8ce0d_77c7a9e202324bcfa69e65696383bd69~mv2.jpeg/v1/fill/w_900,h_1000,al_c,q_80,enc_auto/x.jpg\" alt=\"Рукопожатие на собеседовании\"><blockquote>«Наша команда — <span>наша главная сила</span>»</blockquote></figure><div class=\"cr-perks\"><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 7l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1z\"/></g></svg><h3>Инновации и развитие</h3><p>Работаем с продукцией мировых брендов и новейшими технологиями — вы растёте вместе с рынком.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"17\" r=\"7\"/><path d=\"M5 40c1-8 7-12 13-12s12 4 13 12M31 11a6 6 0 1 1 3 12M36 28c4 2 7 6 7 12\"/></g></svg><h3>Внутренняя культура</h3><p>Дружба, открытость и взаимное уважение. Семейная компания, где каждого знают по имени.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"29\" r=\"11\"/><path d=\"M17 7l5 12M31 7l-5 12M24 24l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z\"/></g></svg><h3>Карьерный рост</h3><p>Продвигаем своих: от консультанта до руководителя шоурума, от монтажника до ведущего инженера.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"38\" height=\"26\" rx=\"2\"/><path d=\"M5 18h38M11 30h8\"/></g></svg><h3>Достойная оплата</h3><p>Конкурентная зарплата, бонусы за результат и комплексные льготы.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 5l16 6v11c0 10-7 18-16 21C15 40 8 32 8 22V11z\"/><path d=\"M17 24l5 5 9-10\"/></g></svg><h3>Стабильность</h3><p>Официальное трудоустройство в компании, которая работает с 1998 года.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg><h3>Обучение у брендов</h3><p>Тренинги по продукции Geberit, Hansgrohe, Buderus и других партнёров.</p></article></div></div></div></section><section class=\"cr-jobs\" id=\"jobs\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Открытые позиции</span><h2 class=\"h-section\">Наши текущие <em>вакансии</em></h2></div><p class=\"lead\">Нажмите на вакансию, чтобы увидеть обязанности и требования. Все позиции — в Ташкенте, полная занятость.</p></div><div class=\"cr-jobs-filter\" role=\"group\" aria-label=\"Фильтр по направлению\"><button type=\"button\" data-d=\"all\" aria-pressed=\"true\">Все · 7</button><button type=\"button\" data-d=\"eng\" aria-pressed=\"false\">Инженеры</button><button type=\"button\" data-d=\"sales\" aria-pressed=\"false\">Продажи и сервис</button><button type=\"button\" data-d=\"ops\" aria-pressed=\"false\">Склад и логистика</button></div><div class=\"cr-list\" id=\"crList\"></div><p class=\"cr-note\">*Обязанности переведены с текущего сайта; требования к кандидатам — демо-данные для концепции.</p></div></section><section class=\"cr-steps\" id=\"process\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Как проходит отбор</span><h2 class=\"h-section\">От отклика до <em>первого дня</em></h2></div><p class=\"lead\">Короткий и прозрачный процесс: мы ценим и ваше время.</p></div><ol class=\"cr-step-grid\"><li class=\"cr-step\"><span class=\"cr-sn\">01</span><h3>Отклик</h3><p>Заполните форму на сайте или отправьте резюме на info@kashlux.uz.</p><em>Онлайн</em></li><li class=\"cr-step\"><span class=\"cr-sn\">02</span><h3>Звонок</h3><p>Свяжемся с вами, расскажем о вакансии и ответим на вопросы.</p><em>15 минут</em></li><li class=\"cr-step\"><span class=\"cr-sn\">03</span><h3>Собеседование</h3><p>Встреча в главном шоуруме на пр. Шарафа Рашидова, 16 с руководителем направления.</p><em>В шоуруме</em></li><li class=\"cr-step\"><span class=\"cr-sn\">04</span><h3>Оффер и старт</h3><p>Обсуждаем условия, знакомим с командой и продукцией — и вы в деле.</p><em>Адаптация</em></li></ol></div></section><section class=\"cr-apply\" id=\"apply\"><div class=\"wrap\"><div class=\"cr-apply-grid\"><div><span class=\"eyebrow\">Присоединяйтесь</span><h2 class=\"h-section\">Запишитесь <em>на собеседование</em></h2><p class=\"lead\">Если вы видите себя в одной из профессий — оставьте отклик. Мы свяжемся с вами и пригласим на встречу.</p><div class=\"cr-contact\"><a href=\"tel:+998951461616\"><span><small>Телефон</small>+998 95 146 16 16</span><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 7h6l3 9-4 3a24 24 0 0 0 9 9l3-4 9 3v6c0 2-2 4-4 4C22 37 11 26 11 11c0-2 2-4 4-4z\"/></g></svg></a><a href=\"mailto:info@kashlux.uz\"><span><small>Резюме на почту</small>info@kashlux.uz</span><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 10h32v22H20l-8 7v-7H8z\"/><path d=\"M15 19h18M15 25h11\"/></g></svg></a><a href=\"/contact\"><span><small>Собеседования · Пн–Сб 09:00–18:00</small>пр. Шарафа Рашидова, 16</span><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 43s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z\"/><circle cx=\"24\" cy=\"19\" r=\"5\"/></g></svg></a></div></div><form class=\"cr-form\" id=\"crForm\" novalidate><h3>Отклик на вакансию</h3><div class=\"cr-f\"><label for=\"crName\">Имя и фамилия <i>*</i></label><input id=\"crName\" name=\"name\" autocomplete=\"name\" placeholder=\"Ваше имя\" required><span class=\"err\">Укажите имя</span></div><div class=\"cr-f\"><label for=\"crPhone\">Телефон <i>*</i></label><input id=\"crPhone\" name=\"phone\" type=\"tel\" inputmode=\"tel\" autocomplete=\"tel\" placeholder=\"+998 __ ___ __ __\" required><span class=\"err\">Введите номер полностью</span></div><div class=\"cr-f full\"><label for=\"crRole\">Вакансия <i>*</i></label><select id=\"crRole\" name=\"role\" required><option value=\"\">Выберите вакансию</option></select><span class=\"err\">Выберите вакансию</span></div><div class=\"cr-f full\"><span class=\"lbl\" id=\"crCvL\">Резюме <span style=\"font-weight:500;color:var(--muted)\">(необязательно)</span></span><label class=\"cr-file\" id=\"crFileBox\"><input type=\"file\" id=\"crCv\" name=\"cv\" accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" aria-labelledby=\"crCvL\" aria-describedby=\"crCvHint\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l18-8 18 8v18l-18 8-18-8zM6 15l18 8 18-8M24 23v18\"/></g></svg><span><b id=\"crCvName\">Прикрепите файл или перетащите сюда</b><small id=\"crCvHint\">PDF, DOC или DOCX, до 5 МБ</small></span><button type=\"button\" class=\"x\" id=\"crCvX\" aria-label=\"Удалить файл\">×</button></label><span class=\"err\" id=\"crCvErr\">Файл должен быть PDF, DOC или DOCX до 5 МБ</span></div><div class=\"cr-f full\"><label for=\"crMsg\">Сообщение</label><textarea id=\"crMsg\" name=\"msg\" placeholder=\"Коротко об опыте и когда готовы выйти на работу\"></textarea></div><label class=\"cr-check\" id=\"crAgreeL\"><input type=\"checkbox\" id=\"crAgree\"><span>Согласен на обработку персональных данных для рассмотрения кандидатуры</span></label><button class=\"btn btn-orange kl-magnet\" type=\"submit\">Откликнуться <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></button><p class=\"note\"></p><div class=\"cr-ok\" role=\"status\"><div class=\"ic\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 25l8 8 16-17\"/></g></svg></div><h3>Отклик отправлен</h3><p id=\"crOkTxt\">Спасибо! Мы свяжемся с вами в ближайшее время.</p><button type=\"button\" class=\"btn btn-line\" id=\"crAgain\">Откликнуться на другую вакансию</button></div></form></div></div></section><section class=\"cr-cta\" id=\"contact\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"wrap\"><div class=\"cr-cta-grid\"><div><span class=\"eyebrow\">Не нашли свою вакансию?</span><h2>Приходите и станьте частью нашей команды</h2><p>Мы всегда рады сильным специалистам в сантехнике, отоплении и сервисе. Отправьте резюме — мы сохраним его и свяжемся, когда откроется подходящая позиция.</p></div><div class=\"cr-cta-acts\"><a class=\"btn btn-navy kl-magnet\" href=\"mailto:info@kashlux.uz\">Отправить резюме на почту <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a class=\"btn btn-line\" href=\"/about\">Узнать о компании <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a></div></div></div></section>\n"},"uz":{"page":"\n<section class=\"cr-hero\" id=\"top\"><div class=\"wrap\"><nav class=\"cr-crumbs\" aria-label=\"Navigatsiya zanjiri\"><a href=\"/\">Boş sahifa</a> / Vakansiyalar</nav><div class=\"cr-hero-grid\"><div><span class=\"eyebrow\">Kashluxda karyera</span><h1><em>Biz bilan birga</em> yangi marralarni zabt eting</h1><p class=\"lead\">Kashlux sifatli mahsulot va aʼlo darajadagi servis orqali mijozlar hayotini yaxşilaydi. Jamoamiz — asosiy kuçimiz. Bozorda 30 yildan beri faoliyat yuritayotgan kompaniya bilan birga ösing.</p><div class=\"cr-ctas\"><a class=\"btn btn-orange kl-magnet\" href=\"#jobs\">Vakansiyalarni köriş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a class=\"btn btn-line\" href=\"#apply\">Rezyume yuboriş</a></div><div class=\"cr-kpis\"><div><b>7</b><span>ta oçiq vakansiya</span></div><div><b>4</b><span>ta şourum Toşkentda</span></div><div><b>30</b><span>yil bozorda</span></div></div></div><figure class=\"cr-hero-media\"><img srcset=\"https://static.wixstatic.com/media/a8ce0d_d1051a290c7b43cfbad3ce84c59f20c7~mv2.jpeg/v1/fill/w_550,h_590,al_c,q_80,enc_auto/x.jpg 550w, https://static.wixstatic.com/media/a8ce0d_d1051a290c7b43cfbad3ce84c59f20c7~mv2.jpeg/v1/fill/w_825,h_885,al_c,q_80,enc_auto/x.jpg 825w, https://static.wixstatic.com/media/a8ce0d_d1051a290c7b43cfbad3ce84c59f20c7~mv2.jpeg/v1/fill/w_1100,h_1180,al_c,q_80,enc_auto/x.jpg 1100w\" sizes=\"(max-width: 605px) 100vw, 605px\" fetchpriority=\"high\" src=\"https://static.wixstatic.com/media/a8ce0d_d1051a290c7b43cfbad3ce84c59f20c7~mv2.jpeg/v1/fill/w_1100,h_1180,al_c,q_80,enc_auto/x.jpg\" alt=\"Kashlux xodimlari hansgrohe şourumida iş ustida\"><figcaption><i aria-hidden=\"true\"></i>Biz işga olamiz</figcaption><div class=\"pat-fill\" aria-hidden=\"true\"></div></figure></div></div></section><section class=\"cr-cult\" id=\"culture\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Madaniyat va şaroitlar</span><h2 class=\"h-section\">Nega bizda uzoq vaqt <em>qolişadi</em></h2></div><p class=\"lead\">Biz döstlik, oçiqlik va özaro hurmat muhitini yaratamiz — va mehnatingizni qadrlaymiz.</p></div><div class=\"cr-cult-grid\"><figure class=\"cr-cult-media\"><img srcset=\"https://static.wixstatic.com/media/a8ce0d_77c7a9e202324bcfa69e65696383bd69~mv2.jpeg/v1/fill/w_450,h_500,al_c,q_80,enc_auto/x.jpg 450w, https://static.wixstatic.com/media/a8ce0d_77c7a9e202324bcfa69e65696383bd69~mv2.jpeg/v1/fill/w_675,h_750,al_c,q_80,enc_auto/x.jpg 675w, https://static.wixstatic.com/media/a8ce0d_77c7a9e202324bcfa69e65696383bd69~mv2.jpeg/v1/fill/w_900,h_1000,al_c,q_80,enc_auto/x.jpg 900w\" sizes=\"(max-width: 495px) 100vw, 495px\" loading=\"lazy\" decoding=\"async\" src=\"https://static.wixstatic.com/media/a8ce0d_77c7a9e202324bcfa69e65696383bd69~mv2.jpeg/v1/fill/w_900,h_1000,al_c,q_80,enc_auto/x.jpg\" alt=\"Suhbatda qöl siqişiş\"><blockquote>«Jamoamiz — <span>bizning asosiy kuçimiz</span>»</blockquote></figure><div class=\"cr-perks\"><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 7l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1z\"/></g></svg><h3>Innovatsiyalar va rivojlaniş</h3><p>Jahon brendlari mahsulotlari va eng yangi texnologiyalar bilan işlaymiz — siz bozor bilan birga ösasiz.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"17\" r=\"7\"/><path d=\"M5 40c1-8 7-12 13-12s12 4 13 12M31 11a6 6 0 1 1 3 12M36 28c4 2 7 6 7 12\"/></g></svg><h3>Içki madaniyat</h3><p>Döstlik, oçiqlik va özaro hurmat. Har kimni ismi bilan biladigan oilaviy kompaniya.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"29\" r=\"11\"/><path d=\"M17 7l5 12M31 7l-5 12M24 24l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z\"/></g></svg><h3>Karyera ösişi</h3><p>Özimiznikilarni östiramiz: maslahatçidan şourum rahbarigaça, montajçidan yetakçi muhandisgaça.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"38\" height=\"26\" rx=\"2\"/><path d=\"M5 18h38M11 30h8\"/></g></svg><h3>Munosib iş haqi</h3><p>Raqobatbardoş maoş, natija uçun bonuslar va keng imtiyozlar.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 5l16 6v11c0 10-7 18-16 21C15 40 8 32 8 22V11z\"/><path d=\"M17 24l5 5 9-10\"/></g></svg><h3>Barqarorlik</h3><p>1998-yildan beri işlab kelayotgan kompaniyada rasmiy işga joylaşiş.</p></article><article class=\"cr-perk\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg><h3>Brendlar tomonidan öqitiş</h3><p>Geberit, Hansgrohe, Buderus va boşqa hamkorlar mahsulotlari böyiça treninglar.</p></article></div></div></div></section><section class=\"cr-jobs\" id=\"jobs\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Oçiq lavozimlar</span><h2 class=\"h-section\">Bizning joriy <em>vakansiyalarimiz</em></h2></div><p class=\"lead\">Vazifalar va talablarni köriş uçun vakansiyani bosing. Barça lavozimlar — Toşkentda, töliq bandlik.</p></div><div class=\"cr-jobs-filter\" role=\"group\" aria-label=\"Yönaliş böyiça filtr\"><button type=\"button\" data-d=\"all\" aria-pressed=\"true\">Barçasi · 7</button><button type=\"button\" data-d=\"eng\" aria-pressed=\"false\">Muhandislar</button><button type=\"button\" data-d=\"sales\" aria-pressed=\"false\">Savdo va servis</button><button type=\"button\" data-d=\"ops\" aria-pressed=\"false\">Ombor va logistika</button></div><div class=\"cr-list\" id=\"crList\"></div><p class=\"cr-note\">*Majburiyatlar joriy saytdan tarjima qilingan; nomzodlarga talablar — konsepsiya uçun demo-maʼlumotlar.</p></div></section><section class=\"cr-steps\" id=\"process\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Saralaş qanday ötadi</span><h2 class=\"h-section\">Arizadan <em>birinçi iş kunigaça</em></h2></div><p class=\"lead\">Qisqa va şaffof jarayon: biz vaqtingizni qadrlaymiz.</p></div><ol class=\"cr-step-grid\"><li class=\"cr-step\"><span class=\"cr-sn\">01</span><h3>Javob</h3><p>Saytdagi formani töldiring yoki rezyumeni info@kashlux.uz manziliga yuboring.</p><em>Onlayn</em></li><li class=\"cr-step\"><span class=\"cr-sn\">02</span><h3>Qönğiroq</h3><p>Siz bilan boğlanamiz, vakansiya haqida aytib beramiz va savollaringizga javob beramiz.</p><em>15 daqiqa</em></li><li class=\"cr-step\"><span class=\"cr-sn\">03</span><h3>Suhbat</h3><p>Şarof Raşidov şoh köçasi, 16-uydagi boş şourumda yönaliş rahbari bilan uçraşuv.</p><em>Şourumda</em></li><li class=\"cr-step\"><span class=\"cr-sn\">04</span><h3>Taklif va işni boşlaş</h3><p>Şartlarni muhokama qilamiz, jamoa va mahsulotlar bilan taniştiramiz — va siz işga kirişasiz.</p><em>Moslaşuv</em></li></ol></div></section><section class=\"cr-apply\" id=\"apply\"><div class=\"wrap\"><div class=\"cr-apply-grid\"><div><span class=\"eyebrow\">Qöşiling</span><h2 class=\"h-section\"><em>Suhbatga</em> yoziling</h2><p class=\"lead\">Agar özingizni uşbu kasblardan birida körsangiz — javob qoldiring. Biz siz bilan boğlanamiz va uçraşuvga taklif qilamiz.</p><div class=\"cr-contact\"><a href=\"tel:+998951461616\"><span><small>Telefon</small>+998 95 146 16 16</span><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 7h6l3 9-4 3a24 24 0 0 0 9 9l3-4 9 3v6c0 2-2 4-4 4C22 37 11 26 11 11c0-2 2-4 4-4z\"/></g></svg></a><a href=\"mailto:info@kashlux.uz\"><span><small>Rezyumeni poçtaga yuboring</small>info@kashlux.uz</span><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 10h32v22H20l-8 7v-7H8z\"/><path d=\"M15 19h18M15 25h11\"/></g></svg></a><a href=\"/contact\"><span><small>Suhbatlar · Du–Ş 09:00–18:00</small>Şarof Raşidov şoh köçasi, 16</span><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 43s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z\"/><circle cx=\"24\" cy=\"19\" r=\"5\"/></g></svg></a></div></div><form class=\"cr-form\" id=\"crForm\" novalidate><h3>Vakansiyaga javob</h3><div class=\"cr-f\"><label for=\"crName\">Ism va familiya <i>*</i></label><input id=\"crName\" name=\"name\" autocomplete=\"name\" placeholder=\"Ismingiz\" required><span class=\"err\">Ismingizni kiriting</span></div><div class=\"cr-f\"><label for=\"crPhone\">Telefon <i>*</i></label><input id=\"crPhone\" name=\"phone\" type=\"tel\" inputmode=\"tel\" autocomplete=\"tel\" placeholder=\"+998 __ ___ __ __\" required><span class=\"err\">Raqamni töliq kiriting</span></div><div class=\"cr-f full\"><label for=\"crRole\">Vakansiya <i>*</i></label><select id=\"crRole\" name=\"role\" required><option value=\"\">Vakansiyani tanlang</option></select><span class=\"err\">Vakansiyani tanlang</span></div><div class=\"cr-f full\"><span class=\"lbl\" id=\"crCvL\">Rezyume <span style=\"font-weight:500;color:var(--muted)\">(ixtiyoriy)</span></span><label class=\"cr-file\" id=\"crFileBox\"><input type=\"file\" id=\"crCv\" name=\"cv\" accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" aria-labelledby=\"crCvL\" aria-describedby=\"crCvHint\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l18-8 18 8v18l-18 8-18-8zM6 15l18 8 18-8M24 23v18\"/></g></svg><span><b id=\"crCvName\">Faylni biriktiring yoki şu yerga torting</b><small id=\"crCvHint\">PDF, DOC yoki DOCX, 5 MB gaça</small></span><button type=\"button\" class=\"x\" id=\"crCvX\" aria-label=\"Faylni öçiriş\">×</button></label><span class=\"err\" id=\"crCvErr\">Fayl PDF, DOC yoki DOCX formatida, 5 MB gaça bölişi kerak</span></div><div class=\"cr-f full\"><label for=\"crMsg\">Xabar</label><textarea id=\"crMsg\" name=\"msg\" placeholder=\"Tajribangiz va qaçon işga çiqişga tayyor ekaningiz haqida qisqaça\"></textarea></div><label class=\"cr-check\" id=\"crAgreeL\"><input type=\"checkbox\" id=\"crAgree\"><span>Nomzodimni körib çiqiş uçun şaxsiy maʼlumotlarimni qayta işlaşga roziman</span></label><button class=\"btn btn-orange kl-magnet\" type=\"submit\">Javob beriş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></button><p class=\"note\"></p><div class=\"cr-ok\" role=\"status\"><div class=\"ic\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 25l8 8 16-17\"/></g></svg></div><h3>Javob yuborildi</h3><p id=\"crOkTxt\">Rahmat! Tez orada siz bilan boğlanamiz.</p><button type=\"button\" class=\"btn btn-line\" id=\"crAgain\">Boşqa vakansiyaga javob beriş</button></div></form></div></div></section><section class=\"cr-cta\" id=\"contact\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"wrap\"><div class=\"cr-cta-grid\"><div><span class=\"eyebrow\">Özingizga mos vakansiyani topmadingizmi?</span><h2>Keling va jamoamiz aʼzosiga aylaning</h2><p>Biz santexnika, isitiş va servis sohasidagi kuçli mutaxassislarni doim kutamiz. Rezyumeingizni yuboring — biz uni saqlab qöyamiz va mos lavozim oçilganda siz bilan boğlanamiz.</p></div><div class=\"cr-cta-acts\"><a class=\"btn btn-navy kl-magnet\" href=\"mailto:info@kashlux.uz\">Rezyumeni poçtaga yuboriş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a class=\"btn btn-line\" href=\"/about\">Kompaniya haqida biliş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a></div></div></div></section>\n"}},"js":{"ru":{"page":["\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n","\n(function(){\n  const J=[\n    {t:'Инженер по системам водоснабжения и канализации',d:'eng',dep:'Инженерный отдел',s:'Проектирование систем водоснабжения, канализации и сооружений водоочистки, их техническое обслуживание.',\n     r:['Проектирование внутренних сетей водоснабжения и канализации','Подбор оборудования и расчёт спецификаций','Технический надзор за монтажом и сервисом'],q:['Профильное высшее образование','Опыт от 2 лет, знание AutoCAD','Знание СНиП и норм проектирования']},\n    {t:'Инженер ОВиК',d:'eng',dep:'Инженерный отдел',s:'Отопление, вентиляция и кондиционирование: проектирование, монтаж и управление системами, контроль качества воздуха в здании.',\n     r:['Проектирование систем отопления, вентиляции и охлаждения','Подбор котлов, насосов и климатического оборудования','Пусконаладка и сопровождение объектов'],q:['Профильное образование','Опыт работы с котельным оборудованием','Готовность к выездам на объекты']},\n    {t:'Продавец-консультант',d:'sales',dep:'Шоурумы',s:'Помогает клиентам выбрать сантехнику и оборудование, консультирует по характеристикам и возможностям использования.',\n     r:['Консультации в шоуруме и по телефону','Подбор комплектов под интерьер и бюджет','Оформление заказов и сопровождение клиента'],q:['Грамотная речь на русском и узбекском','Опыт продаж приветствуется','Интерес к дизайну и технике']},\n    {t:'Заведующий складом',d:'ops',dep:'Склад и логистика',s:'Хранение и учёт продукции, управление процессами поставки и отгрузки со склада.',\n     r:['Приёмка, хранение и учёт товара','Организация отгрузок и инвентаризаций','Руководство командой склада'],q:['Опыт на аналогичной позиции от 2 лет','Уверенная работа в учётных системах','Ответственность и внимательность']},\n    {t:'Кассир-оператор',d:'sales',dep:'Шоурумы',s:'Приём платежей от клиентов, оформление чеков и ведение финансовой отчётности.',\n     r:['Приём наличной и безналичной оплаты (Payme, Click, Uzum)','Оформление чеков и возвратов','Ведение кассовой отчётности'],q:['Опыт работы с кассой','Аккуратность и внимательность','Дружелюбие к клиентам']},\n    {t:'Водитель-экспедитор',d:'ops',dep:'Склад и логистика',s:'Доставка продукции по адресам клиентов, при необходимости — установка или ремонт.',\n     r:['Доставка заказов по Ташкенту и регионам','Погрузка и сохранность товара','Помощь в установке на объекте'],q:['Права категории B (C — плюс)','Знание города','Пунктуальность']},\n    {t:'Менеджер по работе с клиентами',d:'sales',dep:'Клиентский сервис',s:'Рассмотрение жалоб и предложений клиентов, работа над повышением их удовлетворённости.',\n     r:['Обработка обращений, жалоб и предложений','Контроль сроков доставки и сервиса','Анализ отзывов и улучшение процессов'],q:['Опыт в клиентском сервисе','Стрессоустойчивость и такт','Русский и узбекский языки']}\n  ];\n  const list=document.getElementById('crList'),role=document.getElementById('crRole');\n  list.innerHTML=J.map((j,i)=>`<article class=\"cr-job\" data-d=\"${j.d}\" id=\"job${i+1}\">\n    <h3><button type=\"button\" class=\"cr-head\" aria-expanded=\"false\" aria-controls=\"crB${i}\" id=\"crH${i}\">\n      <span class=\"cr-num\">${String(i+1).padStart(2,'0')}</span>\n      <span><b>${j.t}</b><small>${j.s}</small></span>\n      <span class=\"cr-tags\"><span>${j.dep}</span><span>Ташкент</span></span>\n      <span class=\"cr-pm\" aria-hidden=\"true\"></span>\n    </button></h3>\n    <div class=\"cr-body\" id=\"crB${i}\" role=\"region\" aria-labelledby=\"crH${i}\"><div><div class=\"cr-inner\">\n      <div><h4>Чем предстоит заниматься</h4><ul>${j.r.map(x=>`<li>${x}</li>`).join('')}</ul></div>\n      <div><h4>Что мы ждём</h4><ul>${j.q.map(x=>`<li>${x}</li>`).join('')}</ul></div>\n      <div class=\"cr-acts\"><button type=\"button\" class=\"btn btn-orange\" data-apply=\"${i}\" tabindex=\"-1\">Откликнуться <svg class=\"arrow\"><use href=\"#i-arrow\"/></svg></button>\n      <a class=\"btn btn-line\" data-hh href=\"https://tashkent.hh.uz/vacancy/95947018\" target=\"_blank\" rel=\"noopener\" tabindex=\"-1\">Отклик на hh.uz ↗</a></div>\n    </div></div></div>\n  </article>`).join('');\n  role.insertAdjacentHTML('beforeend',J.map((j,i)=>`<option value=\"${i}\">${j.t}</option>`).join('')+'<option value=\"other\">Другая позиция / резерв</option>');\n\n  const jobs=[...list.querySelectorAll('.cr-job')];\n  function toggle(job,open){\n    job.classList.toggle('open',open);\n    const h=job.querySelector('.cr-head');h.setAttribute('aria-expanded',open);\n    job.querySelectorAll('[data-apply],[data-hh]').forEach(b=>b.tabIndex=open?0:-1);\n  }\n  jobs.forEach(job=>job.querySelector('.cr-head').addEventListener('click',()=>{\n    const open=!job.classList.contains('open');\n    jobs.forEach(o=>{if(o!==job)toggle(o,false)});\n    toggle(job,open);\n  }));\n  /* filter */\n  const fb=[...document.querySelectorAll('.cr-jobs-filter button')];\n  fb.forEach(b=>b.onclick=()=>{fb.forEach(x=>x.setAttribute('aria-pressed',x===b));jobs.forEach(j=>{j.hidden=!(b.dataset.d==='all'||j.dataset.d===b.dataset.d);if(j.hidden)toggle(j,false)})});\n\n  /* apply → preselect role */\n  const form=document.getElementById('crForm');\n  list.addEventListener('click',e=>{\n    const a=e.target.closest('[data-apply]');if(!a)return;\n    role.value=a.dataset.apply;box(role).classList.remove('bad');\n    form.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});\n    role.classList.remove('flash');void role.offsetWidth;role.classList.add('flash');\n    setTimeout(()=>{document.getElementById('crName').focus({preventScroll:true});role.classList.remove('flash')},1400);\n  });\n  /* open from hash, e.g. /vacancy#job3 */\n  const m=location.hash.match(/^#job(\\d)$/);if(m&&jobs[m[1]-1])toggle(jobs[m[1]-1],true);\n  else toggle(jobs[0],true);\n\n  /* phone mask */\n  const ph=document.getElementById('crPhone');\n  const mask=v=>{let d=v.replace(/\\D/g,'');if(d.startsWith('998'))d=d.slice(3);d=d.slice(0,9);let o='+998';if(d.length)o+=' '+d.slice(0,2);if(d.length>2)o+=' '+d.slice(2,5);if(d.length>5)o+=' '+d.slice(5,7);if(d.length>7)o+=' '+d.slice(7,9);return o};\n  ph.addEventListener('focus',()=>{if(!ph.value)ph.value='+998 '});\n  ph.addEventListener('blur',()=>{if(ph.value.replace(/\\D/g,'').length<=3)ph.value=''});\n  ph.addEventListener('input',()=>{ph.value=mask(ph.value)});\n\n  /* file */\n  const cv=document.getElementById('crCv'),cvBox=document.getElementById('crFileBox'),cvName=document.getElementById('crCvName'),cvX=document.getElementById('crCvX');\n  const DEF=cvName.textContent;\n  const fileOk=()=>{const f=cv.files[0];if(!f)return true;return /\\.(pdf|docx?)$/i.test(f.name)&&f.size<=5*1024*1024};\n  function showFile(){const f=cv.files[0];cvBox.classList.toggle('has',!!f);cvName.textContent=f?`${f.name} · ${(f.size/1024/1024).toFixed(1)} МБ`:DEF;box(cv).classList.toggle('bad',!fileOk())}\n  cv.addEventListener('change',showFile);\n  cvX.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();cv.value='';showFile()});\n  ['dragenter','dragover'].forEach(t=>cvBox.addEventListener(t,()=>cvBox.classList.add('drag')));\n  ['dragleave','drop'].forEach(t=>cvBox.addEventListener(t,()=>cvBox.classList.remove('drag')));\n\n  /* validation */\n  const box=el=>el.closest('.cr-f');\n  const rules={crName:v=>v.trim().length>=2,crPhone:v=>v.replace(/\\D/g,'').length===12,crRole:v=>v!==''};\n  function check(id){const el=document.getElementById(id);const ok=rules[id](el.value);box(el).classList.toggle('bad',!ok);el.setAttribute('aria-invalid',!ok);return ok}\n  Object.keys(rules).forEach(id=>{const el=document.getElementById(id);el.addEventListener(el.tagName==='SELECT'?'change':'blur',()=>{if(el.value||box(el).classList.contains('bad'))check(id)});el.addEventListener('input',()=>{if(box(el).classList.contains('bad'))check(id)})});\n  const ag=document.getElementById('crAgree'),agL=document.getElementById('crAgreeL');\n  ag.addEventListener('change',()=>{if(ag.checked)agL.classList.remove('bad')});\n  form.addEventListener('submit',e=>{\n    e.preventDefault();\n    const bad=Object.keys(rules).filter(id=>!check(id));\n    const fOk=fileOk();box(cv).classList.toggle('bad',!fOk);\n    agL.classList.toggle('bad',!ag.checked);\n    if(bad.length||!fOk||!ag.checked){(document.getElementById(bad[0])||(!fOk?cv:ag)).focus();return}\n    const r=role.value==='other'?'кадровый резерв':`вакансию «${J[role.value].t}»`;\n    const n=document.getElementById('crName').value.trim().split(/\\s+/)[0];\n    document.getElementById('crOkTxt').textContent=`Спасибо, ${n}! Ваш отклик на ${r} принят. Мы позвоним на ${ph.value}, чтобы договориться о собеседовании.`;\n    form.classList.add('cr-done');\n  });\n  document.getElementById('crAgain').onclick=()=>{form.reset();showFile();form.classList.remove('cr-done');form.querySelectorAll('.bad').forEach(x=>x.classList.remove('bad'))};\n})();\n"]},"uz":{"page":["\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n","\n(function(){\n  const J=[\n    {t:'Suv taʼminoti va kanalizatsiya tizimlari muhandisi',d:'eng',dep:'Muhandislik bölimi',s:'Suv taʼminoti, kanalizatsiya va suv tozalaş inşootlarini loyihalaş hamda ularga texnik xizmat körsatiş.',\n     r:['Içki suv taʼminoti va kanalizatsiya tarmoqlarini loyihalaş','Uskuna tanlaş va spetsifikatsiyalarni hisoblaş','Örnatiş va servis ustidan texnik nazorat'],q:['Mutaxassislik böyiça oliy maʼlumot','Kamida 2 yillik tajriba, AutoCAD bilimi','QMQ va loyihalaş meʼyorlarini biliş']},\n    {t:'Isitiş, ventilyatsiya va konditsionerlaş muhandisi',d:'eng',dep:'Muhandislik bölimi',s:'Isitiş, ventilyatsiya va konditsionerlaş: tizimlarni loyihalaş, örnatiş va boşqariş, binodagi havo sifatini nazorat qiliş.',\n     r:['Isitiş, ventilyatsiya va sovutiş tizimlarini loyihalaş','Qozonlar, nasoslar va iqlim uskunalarini tanlaş','Obyektlarni işga tuşiriş-sozlaş va kuzatib boriş'],q:['Mutaxassislik böyiça maʼlumot','Qozonxona uskunalari bilan işlaş tajribasi','Obyektlarga borişga tayyorlik']},\n    {t:'Sotuvçi-maslahatçi',d:'sales',dep:'Şourumlar',s:'Mijozlarga santexnika va uskunalarni tanlaşda yordam beradi, xususiyatlari va foydalaniş imkoniyatlari böyiça maslahat beradi.',\n     r:['Şourumda va telefon orqali maslahat','Interyer va byudjetga mos töplamlarni tanlaş','Buyurtmalarni rasmiylaştiriş va mijozni kuzatib boriş'],q:['Rus va özbek tillarida savodli nutq','Savdo tajribasi afzallik hisoblanadi','Dizayn va texnikaga qiziqiş']},\n    {t:'Ombor mudiri',d:'ops',dep:'Ombor va logistika',s:'Mahsulotni saqlaş va hisobga oliş, ombordan yetkazib beriş va jönatiş jarayonlarini boşqariş.',\n     r:['Tovarni qabul qiliş, saqlaş va hisobga oliş','Jönatmalar va inventarizatsiyalarni taşkil etiş','Ombor jamoasiga rahbarlik qiliş'],q:['Şunga öxşaş lavozimda kamida 2 yillik tajriba','Hisob tizimlarida işonçli işlaş','Masʼuliyat va eʼtiborlilik']},\n    {t:'Kassir-operator',d:'sales',dep:'Şourumlar',s:'Mijozlardan tölovlarni qabul qiliş, çeklarni rasmiylaştiriş va moliyaviy hisobotlarni yuritiş.',\n     r:['Naqd va naqdsiz tölovlarni qabul qiliş (Payme, Click, Uzum)','Çeklar va qaytarişlarni rasmiylaştiriş','Kassa hisobotlarini yuritiş'],q:['Kassa bilan işlaş tajribasi','Puxtalik va eʼtiborlilik','Mijozlarga xuşmuomalalik']},\n    {t:'Haydovçi-ekspeditor',d:'ops',dep:'Ombor va logistika',s:'Mahsulotlarni mijozlar manziliga yetkazib beriş, zarurat bölsa — örnatiş yoki taʼmirlaş.',\n     r:['Buyurtmalarni Toşkent va viloyatlarga yetkazib beriş','Yuklaş va tovarning butligi','Obyektda örnatişga yordam'],q:['B toifali haydovçilik guvohnomasi (C — afzallik)','Şaharni biliş','Vaqtga rioya qiliş']},\n    {t:'Mijozlar bilan işlaş böyiça menejer',d:'sales',dep:'Mijozlarga xizmat körsatiş',s:'Mijozlarning şikoyat va takliflarini körib çiqiş, ularning mamnuniyatini oşiriş ustida işlaş.',\n     r:['Murojaatlar, şikoyatlar va takliflarni körib çiqiş','Yetkazib beriş va servis muddatlarini nazorat qiliş','Fikrlarni tahlil qiliş va jarayonlarni yaxşilaş'],q:['Mijozlarga xizmat körsatiş tajribasi','Stressga çidamlilik va xuşmuomalalik','Rus va özbek tillari']}\n  ];\n  const list=document.getElementById('crList'),role=document.getElementById('crRole');\n  list.innerHTML=J.map((j,i)=>`<article class=\"cr-job\" data-d=\"${j.d}\" id=\"job${i+1}\">\n    <h3><button type=\"button\" class=\"cr-head\" aria-expanded=\"false\" aria-controls=\"crB${i}\" id=\"crH${i}\">\n      <span class=\"cr-num\">${String(i+1).padStart(2,'0')}</span>\n      <span><b>${j.t}</b><small>${j.s}</small></span>\n      <span class=\"cr-tags\"><span>${j.dep}</span><span>Toşkent</span></span>\n      <span class=\"cr-pm\" aria-hidden=\"true\"></span>\n    </button></h3>\n    <div class=\"cr-body\" id=\"crB${i}\" role=\"region\" aria-labelledby=\"crH${i}\"><div><div class=\"cr-inner\">\n      <div><h4>Nima bilan şuğullanasiz</h4><ul>${j.r.map(x=>`<li>${x}</li>`).join('')}</ul></div>\n      <div><h4>Biz nimani kutamiz</h4><ul>${j.q.map(x=>`<li>${x}</li>`).join('')}</ul></div>\n      <div class=\"cr-acts\"><button type=\"button\" class=\"btn btn-orange\" data-apply=\"${i}\" tabindex=\"-1\">Javob beriş <svg class=\"arrow\"><use href=\"#i-arrow\"/></svg></button>\n      <a class=\"btn btn-line\" data-hh href=\"https://tashkent.hh.uz/vacancy/95947018\" target=\"_blank\" rel=\"noopener\" tabindex=\"-1\">hh.uz orqali javob beriş ↗</a></div>\n    </div></div></div>\n  </article>`).join('');\n  role.insertAdjacentHTML('beforeend',J.map((j,i)=>`<option value=\"${i}\">${j.t}</option>`).join('')+'<option value=\"other\">Boşqa lavozim / zaxira</option>');\n\n  const jobs=[...list.querySelectorAll('.cr-job')];\n  function toggle(job,open){\n    job.classList.toggle('open',open);\n    const h=job.querySelector('.cr-head');h.setAttribute('aria-expanded',open);\n    job.querySelectorAll('[data-apply],[data-hh]').forEach(b=>b.tabIndex=open?0:-1);\n  }\n  jobs.forEach(job=>job.querySelector('.cr-head').addEventListener('click',()=>{\n    const open=!job.classList.contains('open');\n    jobs.forEach(o=>{if(o!==job)toggle(o,false)});\n    toggle(job,open);\n  }));\n  /* filter */\n  const fb=[...document.querySelectorAll('.cr-jobs-filter button')];\n  fb.forEach(b=>b.onclick=()=>{fb.forEach(x=>x.setAttribute('aria-pressed',x===b));jobs.forEach(j=>{j.hidden=!(b.dataset.d==='all'||j.dataset.d===b.dataset.d);if(j.hidden)toggle(j,false)})});\n\n  /* apply → preselect role */\n  const form=document.getElementById('crForm');\n  list.addEventListener('click',e=>{\n    const a=e.target.closest('[data-apply]');if(!a)return;\n    role.value=a.dataset.apply;box(role).classList.remove('bad');\n    form.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});\n    role.classList.remove('flash');void role.offsetWidth;role.classList.add('flash');\n    setTimeout(()=>{document.getElementById('crName').focus({preventScroll:true});role.classList.remove('flash')},1400);\n  });\n  /* open from hash, e.g. /vacancy#job3 */\n  const m=location.hash.match(/^#job(\\d)$/);if(m&&jobs[m[1]-1])toggle(jobs[m[1]-1],true);\n  else toggle(jobs[0],true);\n\n  /* phone mask */\n  const ph=document.getElementById('crPhone');\n  const mask=v=>{let d=v.replace(/\\D/g,'');if(d.startsWith('998'))d=d.slice(3);d=d.slice(0,9);let o='+998';if(d.length)o+=' '+d.slice(0,2);if(d.length>2)o+=' '+d.slice(2,5);if(d.length>5)o+=' '+d.slice(5,7);if(d.length>7)o+=' '+d.slice(7,9);return o};\n  ph.addEventListener('focus',()=>{if(!ph.value)ph.value='+998 '});\n  ph.addEventListener('blur',()=>{if(ph.value.replace(/\\D/g,'').length<=3)ph.value=''});\n  ph.addEventListener('input',()=>{ph.value=mask(ph.value)});\n\n  /* file */\n  const cv=document.getElementById('crCv'),cvBox=document.getElementById('crFileBox'),cvName=document.getElementById('crCvName'),cvX=document.getElementById('crCvX');\n  const DEF=cvName.textContent;\n  const fileOk=()=>{const f=cv.files[0];if(!f)return true;return /\\.(pdf|docx?)$/i.test(f.name)&&f.size<=5*1024*1024};\n  function showFile(){const f=cv.files[0];cvBox.classList.toggle('has',!!f);cvName.textContent=f?`${f.name} · ${(f.size/1024/1024).toFixed(1)} MB`:DEF;box(cv).classList.toggle('bad',!fileOk())}\n  cv.addEventListener('change',showFile);\n  cvX.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();cv.value='';showFile()});\n  ['dragenter','dragover'].forEach(t=>cvBox.addEventListener(t,()=>cvBox.classList.add('drag')));\n  ['dragleave','drop'].forEach(t=>cvBox.addEventListener(t,()=>cvBox.classList.remove('drag')));\n\n  /* validation */\n  const box=el=>el.closest('.cr-f');\n  const rules={crName:v=>v.trim().length>=2,crPhone:v=>v.replace(/\\D/g,'').length===12,crRole:v=>v!==''};\n  function check(id){const el=document.getElementById(id);const ok=rules[id](el.value);box(el).classList.toggle('bad',!ok);el.setAttribute('aria-invalid',!ok);return ok}\n  Object.keys(rules).forEach(id=>{const el=document.getElementById(id);el.addEventListener(el.tagName==='SELECT'?'change':'blur',()=>{if(el.value||box(el).classList.contains('bad'))check(id)});el.addEventListener('input',()=>{if(box(el).classList.contains('bad'))check(id)})});\n  const ag=document.getElementById('crAgree'),agL=document.getElementById('crAgreeL');\n  ag.addEventListener('change',()=>{if(ag.checked)agL.classList.remove('bad')});\n  form.addEventListener('submit',e=>{\n    e.preventDefault();\n    const bad=Object.keys(rules).filter(id=>!check(id));\n    const fOk=fileOk();box(cv).classList.toggle('bad',!fOk);\n    agL.classList.toggle('bad',!ag.checked);\n    if(bad.length||!fOk||!ag.checked){(document.getElementById(bad[0])||(!fOk?cv:ag)).focus();return}\n    const r=role.value==='other'?'kadrlar zaxirasi':`«${J[role.value].t}»`;\n    const n=document.getElementById('crName').value.trim().split(/\\s+/)[0];\n    document.getElementById('crOkTxt').textContent=`Rahmat, ${n}! Arizangiz ${r} qabul qilindi. Biz quyidagi raqamga qönğiroq qilamiz: ${ph.value}, suhbat vaqtini kelişib olamiz.`;\n    form.classList.add('cr-done');\n  });\n  document.getElementById('crAgain').onclick=()=>{form.reset();showFile();form.classList.remove('cr-done');form.querySelectorAll('.bad').forEach(x=>x.classList.remove('bad'))};\n})();\n"]}}};

// Wix loads only ONE script for a custom-element tag on a page, and every Kashlux element has the same tag.
// So when an element's file is missing (e.g. the page's own file while the header file was loaded), load it here.
const CDN = 'https://cdn.jsdelivr.net/gh/Abduljamil32/kashlux-elements@main/';
const BASE_URL = (() => {
  const src = (document.currentScript && document.currentScript.src) || '';
  return /kashlux-elements|custom-elements|localhost/.test(src) ? src.replace(/[^/]*(\?.*)?$/, '') : CDN;
})();
const PAGE_FILES = {"/redesign-demo":"kl-section.js","/redesign-about":"kl-page-about.js","/about":"kl-page-about.js","/redesign-services":"kl-page-services.js","/help-design":"kl-page-services.js","/redesign-showrooms":"kl-page-showrooms.js","/contact":"kl-page-showrooms.js","/redesign-projects":"kl-page-projects.js","/cases":"kl-page-projects.js","/redesign-blog":"kl-page-blog.js","/blog":"kl-page-blog.js","/redesign-delivery":"kl-page-delivery.js","/delivery":"kl-page-delivery.js","/redesign-warranty":"kl-page-warranty.js","/guarantee":"kl-page-warranty.js","/redesign-b2b":"kl-page-b2b.js","/corporative-partners":"kl-page-b2b.js","/redesign-careers":"kl-page-careers.js","/vacancy":"kl-page-careers.js","/redesign-engineer":"kl-page-engineer.js","/help-engineer":"kl-page-engineer.js","/redesign-cashback":"kl-page-cashback.js","/redesign-gift-card":"kl-page-gift-card.js","/redesign-404":"kl-page-404.js","/":"kl-section.js"};
const loading = {};
function loadFile(file) {
  if (!file || loading[file]) return;
  loading[file] = true;
  const sc = document.createElement('script');
  sc.src = BASE_URL + file + '?v=18ecdf90'; // a new build number per release, so browsers don't reuse an old copy
  sc.async = true;
  document.head.appendChild(sc);
}


const TEXT = {
  ru: {
    sending: 'Отправляем…',
    sent: 'Спасибо! Специалист перезвонит в течение 30 минут в рабочее время.',
    error: 'Не удалось отправить. Позвоните нам: +998 95 146 16 16',
    fields: 'Укажите имя и телефон.',
    route: 'Маршрут',
    video: 'Видео',
    close: 'Закрыть видео',
  },
  uz: {
    sending: 'Yuborilmoqda…',
    sent: 'Rahmat! Mutaxassis iş vaqtida 30 daqiqa içida qönğiroq qiladi.',
    error: 'Yuborib bölmadi. Bizga qönğiroq qiling: +998 95 146 16 16',
    fields: 'Ismingiz va telefon raqamingizni kiriting.',
    route: 'Yönaliş',
    video: 'Video',
    close: 'Videoni yopish',
  },
};

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap';
const IMG = 'https://static.wixstatic.com/media/';
const BASE_CSS = ':host{display:block;width:100%;font-family:"Manrope",system-ui,sans-serif;color:var(--navy);' +
  'background:transparent;-webkit-font-smoothing:antialiased;overflow-x:clip}.kl-body{margin:0;overflow-x:clip}' +
  '.sent.err{background:#FBE9E7;color:#8E2A1B}' +
  // the demo leaves room for its own fixed header; on Wix the header is a separate native element
  '.hero{padding-top:0!important}' +
  '.kl-body>section:first-child:not(.hero){padding-top:40px!important}' +
  // the Wix editor and Preview draw custom elements in a tall iframe, where 100vh is the whole box
  '.hero-grid{min-height:clamp(560px,calc(100svh - 80px),820px)!important}' +
  // closed slide-in panels (project details) must not widen the Wix page
  '.case:not(.open){display:none}' +
  // quicker fade-in for content further down the page
  '.rv{transition-duration:.5s}';

// header and footer: the demo's own header is fixed to the window; on Wix it sits in the Wix header section
const SHELL_CSS = ':host{display:block;position:relative;z-index:60;width:100%;font-family:"Manrope",system-ui,sans-serif;color:var(--navy);' +
  '-webkit-font-smoothing:antialiased}.kl-body{margin:0;background:none!important;overflow:visible!important}' +
  'header{position:relative!important;inset:auto!important;top:auto!important;transform:none!important}' +
  '.kl-backdrop.open{opacity:1;visibility:visible;transition:opacity .4s}' +
  '.kl-footer{margin:0!important}' +
  // menu items stay on one line; the phone number is already in the promo line, so it leaves the header when space is short
  '.menu>a,.kl-dd>a{white-space:nowrap}@media (max-width:1600px){.nav-right .phone{display:none}}';

const sheets = {}; // one parsed stylesheet per kind ("page", "shell"), shared by every element of that kind
const cssFor = (key) => REG[key].css + (key === 'shell' ? SHELL_CSS : BASE_CSS);
function styles(root, key = 'page') {
  if (!(key in sheets)) {
    try {
      sheets[key] = new CSSStyleSheet();
      sheets[key].replaceSync(cssFor(key));
    } catch (e) {
      sheets[key] = false; // older browser: fall back to a <style> per element
    }
  }
  if (sheets[key]) root.adoptedStyleSheets = [sheets[key]];
  else {
    const st = document.createElement('style');
    st.textContent = cssFor(key);
    root.prepend(st);
  }
}

// Uzbek pages live under /uz on kashlux.uz: send internal links there too.
function localize(root, lang) {
  if (lang !== 'uz') return;
  root.querySelectorAll('a[href^="/"]').forEach((a) => {
    const h = a.getAttribute('href');
    if (h.startsWith('//') || h === '/uz' || h.startsWith('/uz/') || h.startsWith('/uz#') || h.startsWith('/uz?')) return;
    a.setAttribute('href', h === '/' ? '/uz' : '/uz' + h);
  });
}
// Wix test site (?rc=test-site): keep the parameter on internal links, so visitors stay on the test version
function keepTestSite(root) {
  const rc = new URLSearchParams(location.search).get('rc');
  if (!rc) return;
  root.querySelectorAll('a[href^="/"]').forEach((a) => {
    const h = a.getAttribute('href');
    if (h.startsWith('//') || /[?&]rc=/.test(h)) return;
    const [path, hash] = h.split('#');
    a.setAttribute('href', path + (path.includes('?') ? '&' : '?') + 'rc=' + encodeURIComponent(rc) + (hash ? '#' + hash : ''));
  });
}
const plainPath = () => location.pathname.replace(/^\/uz(?=\/|$)/, '') || '/';

function loadFont() {
  if (document.querySelector('link[data-kl-font]')) return;
  ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'].forEach((h) => {
    const p = document.createElement('link');
    p.rel = 'preconnect';
    p.href = h;
    if (h.includes('gstatic')) p.crossOrigin = '';
    document.head.appendChild(p);
  });
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = FONT_URL;
  l.dataset.klFont = '';
  document.head.appendChild(l);
}

const reduce = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

// Find an anchor (#consult, #showrooms…) in any kl-section on the page, or in the page itself.
function findTarget(id) {
  const plain = document.getElementById(id);
  if (plain) return plain;
  for (const el of document.querySelectorAll('kl-section, wix-default-custom-element')) {
    const t = el.shadowRoot && el.shadowRoot.getElementById(id);
    if (t) return el;
  }
  return null;
}

let modal = null; // video player, mounted once on <body> so no Wix container can clip it
function videoModal(lang) {
  if (modal) return modal;
  const host = document.createElement('div');
  host.setAttribute('data-kl-video', '');
  const root = host.attachShadow({ mode: 'open' });
  styles(root, 'page');
  const t = TEXT[lang];
  root.innerHTML = `<div class="kl-vmodal" role="dialog" aria-modal="true" aria-label="${t.video}" hidden>
    <div class="kl-vmodal-box"><video controls playsinline preload="none"></video>
    <button class="kl-vmodal-x" aria-label="${t.close}">✕</button></div></div>`;
  document.body.appendChild(host);
  const box = root.querySelector('.kl-vmodal');
  const player = root.querySelector('video');
  let last = null;
  let overflow = '';
  const close = () => {
    if (box.hidden) return;
    player.pause();
    box.classList.remove('show');
    document.documentElement.style.overflow = overflow;
    setTimeout(() => { box.hidden = true; player.removeAttribute('src'); player.load(); }, 300);
    if (last) last.focus();
  };
  root.querySelector('.kl-vmodal-x').addEventListener('click', close);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  modal = {
    open(src, from) {
      last = from;
      player.src = src;
      box.hidden = false;
      overflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      requestAnimationFrame(() => box.classList.add('show'));
      player.play().catch(() => {});
      root.querySelector('.kl-vmodal-x').focus();
    },
  };
  return modal;
}

// The demo pages' own scripts use document.getElementById / querySelector(All). Run them against this
// section's shadow DOM instead of the Wix page, so they find their elements and touch nothing else.
// Forms of the content pages (contact, services, plumber, B2B, careers…): once the page's own script has accepted
// the form (no field marked as an error), send "kl-lead" with every filled field, so the Wix page code can save it
// with backend/leads.web.js. The page's own "thank you" message stays as it is.
function fieldLabel(form, el) {
  const id = el.id && form.querySelector('label[for="' + el.id + '"]');
  const wrap = el.closest('label, .field, [class*="-f"], div');
  const text = (id && id.textContent) || (wrap && wrap.querySelector('label, b, span') && wrap.querySelector('label, b, span').textContent) ||
    el.getAttribute('aria-label') || el.placeholder || el.name || el.id || '';
  return text.replace(/\s+/g, ' ').replace(/[*:]/g, '').trim().slice(0, 60);
}
function wireForms(host, root, lang) {
  root.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', () => {
      setTimeout(() => {
        // the page script rejected it: a visible field or message marked as an error
        const shown = (el) => el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';
        if ([...form.querySelectorAll('.err, .bad, [aria-invalid="true"]')].some(shown)) return;
        const fields = [];
        let name = '';
        let phone = '';
        form.querySelectorAll('input, select, textarea').forEach((el) => {
          if (el.type === 'hidden' || el.type === 'submit' || el.type === 'button' || el.type === 'file') return;
          if ((el.type === 'radio' || el.type === 'checkbox') && !el.checked) return;
          const v = String(el.value || '').trim();
          if (!v || v === 'on') return;
          if (!phone && (el.type === 'tel' || /phone|tel|\bph\b/i.test(el.id + ' ' + el.name))) { phone = v; return; }
          if (!name && /name|nm|\bism/i.test(el.id + ' ' + el.name)) { name = v; return; }
          fields.push(el.type === 'radio' || el.type === 'checkbox' ? v : fieldLabel(form, el) + ': ' + v);
        });
        if (!phone) return;
        host.dispatchEvent(new CustomEvent('kl-lead', {
          detail: { name: name || '—', phone, message: fields.join('. ').slice(0, 1400), lang, form: form.id || '' },
          bubbles: true,
          composed: true,
        }));
      }, 0);
    });
  });
}

const LOCAL_EVENTS = ['click', 'input', 'change', 'submit', 'focusin', 'focusout', 'pointerdown', 'pointerup', 'mouseover', 'mouseout'];
const SHELL_IDS = ['hdr','drawer', 'burger', 'close', 'progress', 'klSearch', 'klSearchInput', 'klSearchRes'];
function runPageScript(code, root, body, name) {
  const find = {
    // elements of the demo's own header/drawer/progress bar don't exist on Wix: hand the script a stand-in
    getElementById: (id) => root.getElementById(id) || (SHELL_IDS.includes(id) ? document.createElement('div') : null),
    querySelector: (q) => root.querySelector(q),
    querySelectorAll: (q) => root.querySelectorAll(q),
    getElementsByClassName: (c) => root.querySelectorAll('.' + c.trim().split(/\s+/).join('.')),
    getElementsByTagName: (t) => root.querySelectorAll(t),
    // clicks etc. inside the shadow DOM reach `document` with the host as target, so listen on the shadow root
    addEventListener: (t, fn, o) => (LOCAL_EVENTS.includes(t) ? root : document).addEventListener(t, fn, o),
    removeEventListener: (t, fn, o) => (LOCAL_EVENTS.includes(t) ? root : document).removeEventListener(t, fn, o),
  };
  const doc = new Proxy(document, {
    get(target, prop) {
      if (prop in find) return find[prop];
      if (prop === 'body') return body;
      const v = Reflect.get(target, prop);
      return typeof v === 'function' ? v.bind(target) : v;
    },
    set(target, prop, value) {
      if (prop === 'title') return true; // the Wix page keeps its own title
      return Reflect.set(target, prop, value);
    },
  });
  try {
    // eslint-disable-next-line no-new-func
    new Function('document', code)(doc);
  } catch (e) {
    console.warn('kl-section: script of "' + name + '" failed', e); // eslint-disable-line no-console
  }
}

class KlSection extends HTMLElement {
  static get observedAttributes() { return ['name', 'lang', 'status', 'cart']; }

  connectedCallback() { this.render(); }

  attributeChangedCallback(attr, before, now) {
    if (!this.shadowRoot || before === now) return;
    if (attr === 'status') this.showStatus(now);
    else if (attr === 'cart') this.showCart(now);
    else this.render();
  }

  // header / footer (the "shell"), or null for a page element
  get part() {
    const n = (this.getAttribute('name') || '').trim();
    if (n === 'header' || n === 'footer') return n;
    if (this.closest('#SITE_HEADER, header')) return 'header';
    if (this.closest('#SITE_FOOTER, footer')) return 'footer';
    return null;
  }

  get key() { return this.part ? 'shell' : 'page'; }

  get data() { return REG[this.key]; }

  get language() {
    const a = (this.getAttribute('lang') || document.documentElement.lang || 'ru').toLowerCase();
    return a.startsWith('uz') ? 'uz' : 'ru';
  }

  // name: one part ("hero"), several ("hero,brands"); empty or unknown = the whole page
  get names() {
    const all = Object.keys(this.data.html.ru);
    const asked = (this.getAttribute('name') || '').split(',').map((n) => n.trim()).filter((n) => all.includes(n));
    return asked.length ? asked : all;
  }

  render() {
    const data = this.data;
    this.klPending = !data; // its file hasn't loaded yet: rendered when it does
    if (!data) {
      loadFile(this.key === 'shell' ? 'kl-shell.js' : PAGE_FILES[window.KL_TEST_PATH || plainPath()]); // KL_TEST_PATH: test.html only
      return;
    }
    const lang = this.language;
    const root = this.shadowRoot || this.attachShadow({ mode: 'open' });
    if (this.styled !== this.key) { styles(root, this.key); this.styled = this.key; }
    loadFont();
    if (this.part) { this.renderShell(root, lang, this.part); return; }
    const names = this.names;
    const known = names.filter((n) => data.html[lang][n]);
    root.querySelectorAll(':scope > :not(style)').forEach((n) => n.remove());
    const wrap = document.createElement('div');
    wrap.className = 'kl-body';
    wrap.lang = lang;
    wrap.innerHTML = known.map((n) => data.html[lang][n]).join('');
    root.appendChild(wrap);
    if (!known.length) return;
    localize(root, lang);
    keepTestSite(root);
    this.links(root);
    this.reveal(root);
    const setup = { finish: this.finish, projects: this.projects, how: this.videos, showrooms: this.showrooms, consult: this.form, story: this.story };
    known.forEach((n) => { if (setup[n]) setup[n].call(this, root, lang); });
    known.forEach((n) => (data.js[lang][n] || []).forEach((code) => runPageScript(code, root, wrap, n)));
    if (known.includes('page')) wireForms(this, root, lang);
    // arriving with #anchor (e.g. /contact#book): scroll to it once the page has settled
    const id = decodeURIComponent(location.hash.slice(1));
    if (id && /^[\w-]+$/.test(id) && root.getElementById(id)) {
      setTimeout(() => { const t = root.getElementById(id); if (t) t.scrollIntoView({ block: 'start' }); }, 400);
    }
  }

  renderShell(root, lang, part) {
    const html = this.data.html[lang] || this.data.html.ru;
    root.querySelectorAll(':scope > :not(style)').forEach((n) => n.remove());
    const wrap = document.createElement('div');
    wrap.className = 'kl-body';
    wrap.lang = lang;
    wrap.innerHTML = html[part];
    root.appendChild(wrap);
    localize(root, lang);
    keepTestSite(root);
    this.links(root);
    if (part === 'header') this.header(root, lang, html);
    this.markCurrent(root);
  }

  // the link to the page being viewed (and its dropdown) is highlighted
  markCurrent(root) {
    const here = plainPath();
    const same = (a) => {
      try { return (new URL(a.href).pathname.replace(/^\/uz(?=\/|$)/, '') || '/') === here; } catch (e) { return false; }
    };
    root.querySelectorAll('a[href^="/"]').forEach((a) => {
      if (!same(a) || a.closest('.kl-promo') || a.classList.contains('logo') || a.classList.contains('btn')) return;
      a.setAttribute('aria-current', 'page');
      const dd = a.closest('.kl-dd');
      if (dd) dd.classList.add('kl-active');
    });
  }

  header(root, lang, html) {
    const $ = (s) => root.querySelector(s);
    const $$ = (s, r = root) => [...r.querySelectorAll(s)];
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

    // side menu, its backdrop and the search box: mounted on <body> so no Wix container can clip or shift them
    if (this.portal) this.portal.remove();
    const host = document.createElement('div');
    host.setAttribute('data-kl-shell', '');
    const proot = host.attachShadow({ mode: 'open' });
    styles(proot, 'shell');
    const pwrap = document.createElement('div');
    pwrap.className = 'kl-body';
    pwrap.lang = lang;
    pwrap.innerHTML = html.portal || '';
    proot.appendChild(pwrap);
    localize(proot, lang);
    keepTestSite(proot);
    this.markCurrent(proot);
    document.body.appendChild(host);
    this.portal = host;
    const P = (s) => proot.querySelector(s);

    // promo line: rotating messages, can be closed
    const promo = $('#klPromo');
    if (promo) {
      try { if (localStorage.getItem('kl-promo-x') === '1') promo.classList.add('gone'); } catch (e) { /* private mode */ }
      const msgs = $$('#klPromoRot a');
      let i = 0;
      clearInterval(this.rot);
      if (msgs.length > 1 && !reduce()) {
        this.rot = setInterval(() => {
          if (document.hidden || promo.matches(':hover')) return;
          const prev = msgs[i];
          prev.classList.remove('on');
          prev.classList.add('out');
          setTimeout(() => prev.classList.remove('out'), 600);
          i = (i + 1) % msgs.length;
          msgs[i].classList.add('on');
        }, 4200);
      }
      const x = $('#klPromoX');
      if (x) {
        x.addEventListener('click', () => {
          promo.classList.add('gone');
          try { localStorage.setItem('kl-promo-x', '1'); } catch (e) { /* private mode */ }
        });
      }
    }

    // dropdown menus: hover, keyboard, touch (first tap opens, second follows the link)
    $$('.kl-dd').forEach((dd) => {
      const trigger = dd.firstElementChild;
      const panel = dd.querySelector('.kl-panel');
      $$(':scope > a', panel).forEach((a, k) => a.style.setProperty('--i', k));
      trigger.setAttribute('aria-haspopup', 'true');
      trigger.setAttribute('aria-expanded', 'false');
      const set = (open) => { dd.classList.toggle('open', open); trigger.setAttribute('aria-expanded', String(open)); };
      dd.addEventListener('mouseenter', () => set(true));
      dd.addEventListener('mouseleave', () => set(false));
      dd.addEventListener('focusout', (e) => { if (!dd.contains(e.relatedTarget)) set(false); });
      trigger.addEventListener('click', (e) => {
        if (fine || dd.classList.contains('open')) return;
        e.preventDefault();
        $$('.kl-dd.open').forEach((o) => o !== dd && o.classList.remove('open'));
        set(true);
      });
      dd.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { set(false); trigger.focus(); }
        if (e.key === 'ArrowDown' && root.activeElement === trigger) {
          e.preventDefault();
          set(true);
          const f = panel.querySelector('a');
          if (f) f.focus();
        }
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.composedPath().includes(this)) $$('.kl-dd.open').forEach((d) => d.classList.remove('open'));
    });

    // language switch: kashlux.uz/page (Russian) ⇄ kashlux.uz/uz/page (Uzbek)
    const tail = location.search + location.hash;
    const path = plainPath();
    [root, proot].forEach((r) => $$('.kl-lang a[data-lang]', r).forEach((a) => {
      const to = a.dataset.lang;
      const on = to === lang;
      a.classList.toggle('on', on);
      if (on) a.setAttribute('aria-current', 'true');
      a.href = (to === 'uz' ? (path === '/' ? '/uz' : '/uz' + path) : path) + tail;
    }));

    // side menu (phones, tablets)
    const drawer = P('#drawer');
    const backdrop = P('#klBackdrop');
    const burger = $('#burger');
    let overflow = '';
    const openDrawer = (open) => {
      if (!drawer || drawer.classList.contains('open') === open) return;
      drawer.classList.toggle('open', open);
      if (backdrop) backdrop.classList.toggle('open', open);
      if (burger) burger.setAttribute('aria-expanded', String(open));
      if (open) {
        overflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        setTimeout(() => { const c = P('#close'); if (c) c.focus(); }, 300);
      } else {
        document.documentElement.style.overflow = overflow;
      }
    };
    if (burger) burger.addEventListener('click', () => openDrawer(true));
    const close = P('#close');
    if (close) close.addEventListener('click', () => openDrawer(false));
    if (backdrop) backdrop.addEventListener('click', () => openDrawer(false));
    if (drawer) $$('a', drawer).forEach((a) => a.addEventListener('click', () => openDrawer(false)));

    // search: quick links to the site's pages, or the Wix site search for anything else
    const search = P('#klSearch');
    const input = P('#klSearchInput');
    const res = P('#klSearchRes');
    const t = lang === 'uz'
      ? { pages: 'Sahifalar', find: (q) => `«${q}» böyiça qidiriş`, all: 'Butun sayt böyiça qidiruv' }
      : { pages: 'Страницы', find: (q) => `Искать «${q}»`, all: 'Поиск по всему сайту и каталогу' };
    const seen = new Set();
    const pages = [];
    $$('nav a[href^="/"]').forEach((a) => {
      const href = a.getAttribute('href');
      const name = ((a.querySelector('b') || a).textContent || '').replace(/\s+/g, ' ').trim();
      const sub = a.querySelector('small') ? a.querySelector('small').textContent.trim() : '';
      if (!name || seen.has(href + '|' + name)) return;
      seen.add(href + '|' + name);
      pages.push({ href, name, sub });
    });
    const rcParam = new URLSearchParams(location.search).get('rc');
    const searchUrl = (q) => (lang === 'uz' ? '/uz' : '') + '/search?q=' + encodeURIComponent(q) + (rcParam ? '&rc=' + encodeURIComponent(rcParam) : '');
    const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    let sel = 0;
    const mark = () => $$('a', res).forEach((a, k) => a.setAttribute('aria-selected', String(k === sel)));
    const paint = () => {
      const q = input.value.trim();
      const low = q.toLowerCase();
      const hits = (q ? pages.filter((p) => (p.name + ' ' + p.sub).toLowerCase().includes(low)) : pages).slice(0, 8);
      res.innerHTML = (q ? `<a href="${esc(searchUrl(q))}"><span class="ic">⌕</span><span><b>${esc(t.find(q))}</b><small>${esc(t.all)}</small></span></a>` : '') +
        (hits.length ? `<h6>${t.pages}</h6>` + hits.map((p) =>
          `<a href="${esc(p.href)}"><span class="ic">K</span><span><b>${esc(p.name)}</b>${p.sub ? `<small>${esc(p.sub)}</small>` : ''}</span></a>`).join('') : '');
      sel = 0;
      mark();
    };
    let sOverflow = '';
    const openSearch = () => {
      if (!search || !search.hidden) return;
      search.hidden = false;
      sOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      requestAnimationFrame(() => search.classList.add('show'));
      input.value = '';
      paint();
      setTimeout(() => input.focus(), 50);
    };
    const closeSearch = () => {
      if (!search || search.hidden) return;
      search.classList.remove('show');
      document.documentElement.style.overflow = sOverflow;
      setTimeout(() => { search.hidden = true; }, 250);
    };
    const sb = $('#klSearchBtn');
    if (sb) sb.addEventListener('click', openSearch);
    if (search) {
      search.addEventListener('click', (e) => { if (e.target === search) closeSearch(); });
      input.addEventListener('input', paint);
      input.addEventListener('keydown', (e) => {
        const items = $$('a', res);
        if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && items.length) {
          e.preventDefault();
          sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
          mark();
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          const q = input.value.trim();
          const a = items[sel];
          if (a) location.href = a.href;
          else if (q) location.href = searchUrl(q);
        }
      });
    }
    if (!this.keys) {
      this.keys = true;
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeSearch(); openDrawer(false); }
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
      });
    }
    if (this.hasAttribute('cart')) this.showCart(this.getAttribute('cart'));
  }

  // cart count from the Wix store (set by masterPage.js)
  showCart(n) {
    const b = this.shadowRoot && this.shadowRoot.querySelector('.kl-cart-n');
    if (!b) return;
    const v = parseInt(n, 10) || 0;
    b.textContent = v > 99 ? '99+' : String(v);
    b.hidden = v <= 0;
  }


  // In-page anchors (#consult…) jump to the matching section, wherever it is on the page.
  links(root) {
    root.addEventListener('click', (e) => {
      const a = e.target.closest && e.target.closest('a[href*="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href.startsWith('#') && (a.pathname !== location.pathname || !a.hash)) return;
      const id = decodeURIComponent(a.hash ? a.hash.slice(1) : href.slice(1));
      if (!id) return;
      const t = findTarget(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: reduce() ? 'auto' : 'smooth', block: 'start' });
    });
  }

  // Fade-in on scroll, without hiding content: whatever is on (or above) the screen when the page draws shows
  // at once, and the rest starts fading in a little before it scrolls into view.
  reveal(root) {
    const els = [...root.querySelectorAll('.rv')];
    if (!('IntersectionObserver' in window) || reduce()) { els.forEach((el) => el.classList.add('in')); return; }
    const fold = window.innerHeight * 1.1;
    const later = els.filter((el) => {
      if (el.getBoundingClientRect().top < fold) { el.style.transition = 'none'; el.classList.add('in'); return false; }
      return true;
    });
    if (!later.length) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0, rootMargin: '0px 0px 20% 0px' });
    later.forEach((el, i) => { el.style.transitionDelay = (i % 3) * 50 + 'ms'; io.observe(el); });
  }

  story(root) {
    const ab = root.querySelector('.kl-ab');
    if (!ab || !('IntersectionObserver' in window)) { if (ab) ab.classList.add('kl-seen'); return; }
    new IntersectionObserver((es, o) => es.forEach((e) => {
      if (e.isIntersecting) { ab.classList.add('kl-seen'); o.disconnect(); }
    }), { threshold: 0.2 }).observe(ab);
  }

  finish(root) {
    const stops = ['s1', 's2', 's3', 's4'].map((id) => root.getElementById(id));
    const v1 = root.getElementById('v1');
    const v2 = root.getElementById('v2');
    root.querySelectorAll('.sw').forEach((b) => b.addEventListener('click', () => {
      root.querySelectorAll('.sw').forEach((x) => x.classList.remove('on'));
      b.classList.add('on');
      const c = b.dataset.c.split(',');
      stops.forEach((s, i) => s && s.setAttribute('stop-color', c[i]));
      if (v1) v1.setAttribute('stop-color', c[1]);
      if (v2) v2.setAttribute('stop-color', c[0]);
      const n = root.getElementById('finishName');
      if (n) n.textContent = b.dataset.name;
    }));
  }

  projects(root) {
    const rail = root.getElementById('rail');
    if (!rail) return;
    const step = () => (rail.querySelector('.proj') ? rail.querySelector('.proj').offsetWidth + 18 : 300);
    const go = (d) => rail.scrollBy({ left: d * step(), behavior: 'smooth' });
    const next = root.getElementById('next');
    const prev = root.getElementById('prev');
    if (next) next.addEventListener('click', () => go(1));
    if (prev) prev.addEventListener('click', () => go(-1));
  }

  videos(root, lang) {
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce();
    root.querySelectorAll('.kl-vid').forEach((card) => {
      if (fine) {
        card.addEventListener('mouseenter', () => {
          let v = card.querySelector('video');
          if (!v) {
            v = document.createElement('video');
            v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'auto';
            v.src = card.dataset.preview;
            card.querySelector('img').after(v);
            v.addEventListener('playing', () => card.classList.add('previewing'));
          }
          v.play().catch(() => {});
        });
        card.addEventListener('mouseleave', () => {
          const v = card.querySelector('video');
          if (v) v.pause();
          card.classList.remove('previewing');
        });
      }
      card.addEventListener('click', () => {
        const v = card.querySelector('video');
        if (v) v.pause();
        videoModal(lang).open(card.dataset.src, card);
      });
    });
  }

  showrooms(root, lang) {
    const list = (this.data.sr || {})[lang];
    if (!list) return;
    const img = root.getElementById('srImg');
    const addr = root.getElementById('srAddr');
    const tel = root.getElementById('srTel');
    const route = root.querySelector('.sr-info .btn, .showrooms a.btn');
    const map = (s) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Kashlux ' + s.a.replace(/<[^>]+>/g, ' '));
    if (route) { route.href = map(list[0]); route.target = '_blank'; route.rel = 'noopener'; }
    root.querySelectorAll('#srList button').forEach((b) => b.addEventListener('click', () => {
      root.querySelectorAll('#srList button').forEach((x) => x.classList.remove('on'));
      b.classList.add('on');
      const s = list[+b.dataset.i];
      if (!s) return;
      addr.textContent = s.a;
      tel.innerHTML = s.t.split('<br>').map((n) => `<a href="tel:${n.replace(/[^\d+]/g, '')}">${n}</a>`).join('<br>');
      if (route) route.href = map(s);
      img.style.opacity = 0;
      setTimeout(() => {
        img.onload = () => { img.style.opacity = 1; };
        img.src = IMG + s.i + '/v1/fill/w_1400,h_1000,al_c,q_80,enc_auto/s.jpg';
      }, 200);
    }));
  }

  form(root, lang) {
    const t = TEXT[lang];
    const form = root.getElementById('form');
    const sent = root.getElementById('sent');
    const tg = root.querySelector('.contact-mini a[href="#"]');
    if (tg) { tg.href = 'https://t.me/kashlux_uz'; tg.target = '_blank'; tg.rel = 'noopener'; }
    if (!form) return;
    sent.setAttribute('role', 'status');
    sent.textContent = ''; // the demo's placeholder note
    this.sentBox = sent;
    this.sendBtn = form.querySelector('button[type=submit]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = root.getElementById('n').value.trim();
      const phone = root.getElementById('p').value.trim();
      if (!name || phone.replace(/\D/g, '').length < 9) { this.say(t.fields, true); return; }
      const topics = [...form.querySelectorAll('.chips input:checked')].map((i) => i.nextElementSibling.textContent.trim());
      const message = root.getElementById('m').value.trim();
      this.setAttribute('status', 'sending');
      this.dispatchEvent(new CustomEvent('kl-lead', {
        detail: { name, phone, topics, message, lang },
        bubbles: true,
        composed: true,
      }));
      // no page code answered (not connected yet): don't leave the visitor waiting
      clearTimeout(this.wait);
      this.wait = setTimeout(() => { if (this.getAttribute('status') === 'sending') this.setAttribute('status', 'error'); }, 12000);
    });
  }

  say(text, bad) {
    if (!this.sentBox) return;
    this.sentBox.textContent = text;
    this.sentBox.classList.toggle('err', !!bad);
    this.sentBox.style.display = 'block';
  }

  showStatus(status) {
    const t = TEXT[this.language];
    if (!this.sendBtn) return;
    this.sendBtn.disabled = status === 'sending';
    if (status === 'sending') this.say(t.sending);
    else if (status === 'sent') {
      clearTimeout(this.wait);
      this.say(t.sent);
      this.shadowRoot.getElementById('form').reset();
    } else if (status === 'error') {
      clearTimeout(this.wait);
      this.say(t.error, true);
    }
  }
}

loadFont(); // start the font download while the page is still drawing
if (!customElements.get('kl-section')) customElements.define('kl-section', KlSection);
// The Wix editor and Preview sometimes keep the default tag name of a new custom element; answer to it too,
// so the section also shows there. (Only on pages that load this file.)
if (!customElements.get('wix-default-custom-element')) {
  customElements.define('wix-default-custom-element', class extends KlSection {});
}

// elements whose file loaded after the tag was defined (by another Kashlux file): draw them now
document.querySelectorAll('kl-section, wix-default-custom-element').forEach((el) => {
  if (el.klPending && typeof el.render === 'function') el.render();
});
})();
