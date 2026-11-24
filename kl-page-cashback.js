(function () {
// <kl-section> — Kashlux redesign (kl-page-cashback.js) for the Wix editor. GENERATED FILE: don't edit it in Wix.
// Source: design/build/wix/kl-section.template.js + design/build/wix_sections.py (run after build.py).
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-page-cashback.js
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
REG['page'] = {"css":":host{--navy:#211E36;--navy-2:#2B2745;--orange:#E08F45;--orange-deep:#C9752C;--white:#FFFFFF;--grey:#DFDFDE;--grey-2:#ECECEB;--ink:#211E36;--muted:#6E6B7B;--line:rgba(33,30,54,.12);--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--gutter:clamp(16px,4vw,56px);--max:1320px;--r:8px;}*{box-sizing:border-box;margin:0;padding:0}:host{scroll-behavior:smooth}.kl-body{background:var(--grey-2);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}img{display:block;max-width:100%}a{color:inherit;text-decoration:none}button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}svg{display:block;fill:var(--navy)}.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:var(--orange)}.eyebrow::before{content:\"\";width:22px;height:2px;background:currentColor}h1,h2,h3,h4{font-family:var(--head);font-weight:800;letter-spacing:-.01em;line-height:1.08}.h-section{font-size:clamp(30px,4vw,54px)}.h-section em{font-style:normal;color:var(--orange)}.lead{font-size:clamp(16px,1.2vw,18px);color:var(--muted);max-width:52ch}.btn{display:inline-flex;align-items:center;gap:12px;padding:16px 24px;font-size:14px;font-weight:600;border-radius:var(--r);transition:.25s;white-space:nowrap}.btn-orange{background:var(--orange);color:var(--navy)}.btn-orange:hover{background:var(--orange-deep)}.btn-line{border:1.5px solid currentColor}.btn-line:hover{background:var(--white);color:var(--navy);border-color:var(--white)}.arrow{width:18px;height:18px;transition:transform .25s}.btn:hover .arrow{transform:translate(3px,-3px)}.pat-fill{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='80' viewBox='0 0 1 2'%3E%3Cg%3E%3Cpath d='M0 .5L.5 0H1L.5 .5V1H0Z' fill='%23211E36'/%3E%3Cpath d='M1 .5L1.5 0H2L1.5 .5V1H1Z' fill='%23211E36' transform='translate(-1 0)'/%3E%3Cpath d='M0 1.5L.5 1H1L.5 1.5V2H0Z' fill='%23E08F45'/%3E%3C/g%3E%3C/svg%3E\");background-size:40px 80px}.pat-line{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-width='.018'/%3E%3C/svg%3E\");background-size:120px 120px}header{position:fixed;inset:0 0 auto;z-index:50;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);transition:box-shadow .3s}header.solid{box-shadow:0 1px 0 var(--line)}.nav{display:flex;align-items:center;justify-content:space-between;height:80px;gap:24px}.logo svg{height:20px;width:auto}.menu{display:flex;gap:30px;font-size:14px;font-weight:500}.menu a{position:relative;padding:6px 0}.menu a::after{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:0;background:var(--orange);transition:width .25s}.menu a:hover::after{width:100%}.nav-right{display:flex;align-items:center;gap:16px;font-size:13px}.lang{display:flex;background:var(--grey-2);border-radius:var(--r);padding:3px}.lang button{padding:5px 10px;border-radius:6px;font-size:12px;font-weight:600;color:var(--muted)}.lang button.on{background:var(--navy);color:var(--white)}.phone{font-weight:600;white-space:nowrap}.burger{display:none;width:44px;height:44px;border-radius:var(--r);background:var(--navy);color:#fff;place-items:center}.burger i{display:block;width:16px;height:2px;background:currentColor;box-shadow:0 5px 0 currentColor,0 -5px 0 currentColor}.hero{padding:80px 0 0;background:var(--white)}.hero-grid{display:grid;grid-template-columns:1.05fr 1fr;min-height:calc(100svh - 80px)}.hero-panel{position:relative;background:var(--navy);color:var(--white);padding:clamp(40px,6vw,88px) clamp(24px,5vw,72px);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}.hero-panel .pat-line{position:absolute;right:-40px;top:-20px;width:360px;height:260px;opacity:.9;-webkit-mask-image:linear-gradient(225deg,#000 30%,transparent 80%);mask-image:linear-gradient(225deg,#000 30%,transparent 80%)}.hero h1{font-size:clamp(32px,3.9vw,58px);position:relative;margin-top:28px}.hero h1 span{color:var(--orange)}.hero .sub{font-family:var(--body);font-weight:700;font-size:clamp(18px,1.6vw,22px);margin-top:22px;opacity:.9}.hero p.desc{max-width:46ch;opacity:.7;margin-top:14px}.hero-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px;padding-top:26px;border-top:1px solid rgba(255,255,255,.15)}.stats b{display:block;font-family:var(--head);font-weight:800;font-size:clamp(28px,3vw,44px);line-height:1;color:var(--orange)}.stats span{font-size:13px;opacity:.7;display:block;margin-top:8px}.hero-media{position:relative;overflow:hidden;background:var(--grey)}.hero-media img{width:100%;height:100%;object-fit:cover}.hero-media .chip{position:absolute;left:24px;bottom:24px;background:var(--white);border-radius:var(--r);padding:14px 18px;display:flex;gap:14px;align-items:center;font-size:13px;box-shadow:0 10px 30px rgba(33,30,54,.18)}.hero-media .chip b{font-family:var(--head);font-size:15px;display:block}.hero-media .chip svg{width:38px;height:38px}.brands{background:var(--orange);color:var(--navy);overflow:hidden;padding:18px 0}.track{display:flex;gap:56px;width:max-content;animation:marquee 34s linear infinite;align-items:center}.track span{font-family:var(--head);font-weight:800;font-size:22px;white-space:nowrap;text-transform:uppercase}.track svg{width:18px;height:18px}@keyframes marquee{to{transform:translateX(-50%)}}section{padding:clamp(72px,10vw,130px) 0}.sec-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:clamp(36px,5vw,64px);flex-wrap:wrap}.sec-head .eyebrow{margin-bottom:18px}.catalog{background:var(--grey-2)}.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:250px;gap:14px}.cat{position:relative;background:var(--white);border-radius:var(--r);overflow:hidden;padding:26px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .3s,box-shadow .3s}.cat:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(33,30,54,.12)}.cat .ico{width:46px;height:46px;color:var(--orange)}.cat h3{font-size:20px;position:relative;z-index:2}.cat p{font-size:13px;color:var(--muted);margin-top:6px;position:relative;z-index:2;max-width:28ch}.cat .go{position:absolute;top:22px;right:22px;width:38px;height:38px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:.25s;z-index:3}.cat:hover .go{background:var(--orange);color:#fff}.cat .go svg{width:16px;height:16px}.cat img.prod{position:absolute;right:-4%;bottom:-4%;width:48%;max-height:80%;object-fit:contain;transition:transform .5s}.cat:hover img.prod{transform:scale(1.05)}.cat.big{grid-column:span 2;grid-row:span 2;background:var(--navy);color:var(--white)}.cat.big h3{font-size:clamp(28px,3vw,40px)}.cat.big p{color:rgba(255,255,255,.65);font-size:15px;max-width:36ch}.cat.big .go{background:rgba(255,255,255,.1)}.cat.big .bigimg{position:absolute;inset:0;background:url(https://static.wixstatic.com/media/a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg/v1/fill/w_1200,h_1100,al_c,q_80,enc_auto/c.jpg) center/cover;opacity:.35;transition:opacity .4s,transform .8s}.cat.big:hover .bigimg{opacity:.5;transform:scale(1.04)}.cat.big::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(33,30,54,.2),rgba(33,30,54,.9))}.cat.big>*{position:relative;z-index:2}.cat.big .bigimg{z-index:0}.cat.big .tagrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.cat.big .tagrow span{font-size:12px;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.12)}.cat.wide{grid-column:span 2}.finish{background:var(--white)}.finish-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:center}.finish-stage{aspect-ratio:1/1;background:var(--grey-2);border-radius:var(--r);position:relative;display:grid;place-items:center;overflow:hidden}.finish-stage .pat-line{position:absolute;inset:auto -60px -60px auto;width:300px;height:300px;opacity:.5}.finish-stage svg.tap{width:68%;height:auto;position:relative}.finish-stage .tag{position:absolute;left:24px;top:22px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.finish-stage .tag b{display:block;font-family:var(--head);font-size:20px;letter-spacing:0;text-transform:none;color:var(--navy);margin-top:4px}.swatches{display:flex;gap:10px;margin:30px 0 36px;flex-wrap:wrap}.sw{display:flex;align-items:center;gap:10px;padding:8px 16px 8px 8px;border:1.5px solid var(--line);border-radius:var(--r);font-size:14px;font-weight:600;transition:.2s}.sw i{width:28px;height:28px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}.sw.on{border-color:var(--orange);background:#FDF4EC}.specs{display:grid;grid-template-columns:1fr 1fr;gap:12px}.specs div{padding:16px 18px;background:var(--grey-2);border-radius:var(--r)}.specs dt{font-size:12px;color:var(--muted)}.specs dd{font-family:var(--head);font-weight:700;font-size:17px;margin-top:2px}.projects{background:var(--navy);color:var(--white)}.projects .lead{color:rgba(255,255,255,.65)}.proj-ctrl{display:flex;gap:10px}.proj-ctrl button{width:52px;height:52px;border-radius:var(--r);background:rgba(255,255,255,.08);display:grid;place-items:center;transition:.25s;font-size:18px}.proj-ctrl button:hover{background:var(--orange)}.rail{display:grid;grid-auto-flow:column;grid-auto-columns:min(78vw,440px);gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 var(--gutter) 6px;scrollbar-width:none;margin-left:max(0px,calc((100vw - var(--max))/2))}.rail::-webkit-scrollbar{display:none}.proj{scroll-snap-align:start;background:var(--navy-2);border-radius:var(--r);overflow:hidden}.proj figure{aspect-ratio:4/4.4;overflow:hidden;position:relative}.proj img{width:100%;height:100%;object-fit:cover;transition:transform .8s}.proj:hover img{transform:scale(1.05)}.proj .star{position:absolute;top:16px;left:16px;font-size:12px;font-weight:600;background:var(--orange);padding:6px 12px;border-radius:6px}.proj .meta{padding:20px 22px 24px;display:flex;justify-content:space-between;align-items:end;gap:12px}.proj h3{font-size:22px}.proj p{font-size:14px;color:rgba(255,255,255,.55);margin-top:4px}.proj .meta svg{width:22px;height:22px;color:var(--orange);flex:none}.services{background:var(--grey-2)}.svc{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.svc article{background:var(--white);border-radius:var(--r);padding:30px 26px 32px;display:flex;flex-direction:column;transition:.3s}.svc article:hover{background:var(--navy);color:var(--white)}.svc article:hover p{color:rgba(255,255,255,.65)}.svc .ico{width:44px;height:44px;color:var(--orange)}.svc h3{font-size:20px;margin:34px 0 12px}.svc p{font-size:14px;color:var(--muted);flex:1}.svc a{display:inline-flex;gap:8px;align-items:center;margin-top:22px;font-size:14px;font-weight:600;color:var(--orange)}.svc .sub{font-family:var(--head);font-size:10px;letter-spacing:.3em;color:var(--orange);margin-top:6px;font-weight:700}.story{background:var(--orange);color:var(--navy);position:relative;overflow:hidden}.story .pat-line{position:absolute;right:0;top:0;width:52%;height:62%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23211E36' stroke-width='.012'/%3E%3C/svg%3E\");background-size:160px 160px;-webkit-mask-image:linear-gradient(200deg,#000 20%,transparent 75%);mask-image:linear-gradient(200deg,#000 20%,transparent 75%)}.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:end;position:relative}.story h2{font-size:clamp(40px,6vw,88px);line-height:1}.story blockquote{font-family:var(--body);font-weight:700;font-size:clamp(20px,2vw,26px);line-height:1.3;margin:28px 0 18px;max-width:30ch}.story p{max-width:50ch;color:rgba(33,30,54,.8)}.timeline{display:grid;gap:10px}.timeline div{display:grid;grid-template-columns:120px 1fr;gap:18px;align-items:center;background:var(--white);border-radius:var(--r);padding:18px 22px}.timeline b{font-family:var(--head);font-size:20px;color:var(--orange)}.timeline span{font-size:15px}.timeline div:last-child{background:var(--navy);color:var(--white)}.showrooms{background:var(--white)}.sr-grid{display:grid;grid-template-columns:360px 1fr;gap:20px}.sr-list{display:grid;gap:10px;align-content:start}.sr-list button{text-align:left;padding:20px 22px;border-radius:var(--r);background:var(--grey-2);transition:.25s;display:flex;justify-content:space-between;align-items:center;gap:12px}.sr-list button:hover{background:var(--grey)}.sr-list button.on{background:var(--navy);color:var(--white)}.sr-list h4{font-size:18px}.sr-list p{font-size:13px;margin-top:2px;opacity:.65}.sr-list svg{width:20px;height:20px;color:var(--orange);flex:none}.sr-card{position:relative;min-height:500px;border-radius:var(--r);overflow:hidden;background:var(--navy)}.sr-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .4s}.sr-info{position:absolute;left:20px;right:20px;bottom:20px;z-index:2;background:var(--white);border-radius:var(--r);padding:24px;display:grid;grid-template-columns:1fr 1fr auto;gap:24px;align-items:center}.sr-info dt{font-size:12px;color:var(--muted);margin-bottom:4px}.sr-info dd{font-size:15px;font-weight:500;line-height:1.5}.consult{background:var(--navy);color:var(--white);position:relative;overflow:hidden}.consult .pat-fill{position:absolute;left:0;bottom:0;width:100%;height:80px;opacity:1}.consult-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);position:relative;padding-bottom:60px}.consult .lead{color:rgba(255,255,255,.65)}form{display:grid;grid-template-columns:1fr 1fr;gap:16px;background:var(--white);color:var(--navy);border-radius:var(--r);padding:clamp(22px,3vw,36px)}.field{display:flex;flex-direction:column;gap:6px}.field.full{grid-column:1/-1}.field>label{font-size:13px;font-weight:600}.field input,.field textarea{font:inherit;font-size:16px;background:var(--grey-2);border:1.5px solid transparent;padding:13px 14px;color:var(--navy);outline:none;border-radius:var(--r)}.field textarea{resize:none;height:96px}.field input:focus,.field textarea:focus{border-color:var(--orange);background:#fff}.chips{display:flex;gap:8px;flex-wrap:wrap}.chips label{font-size:14px;cursor:pointer}.chips input{display:none}.chips span{display:inline-block;padding:9px 14px;border:1.5px solid var(--line);border-radius:var(--r);transition:.2s}.chips input:checked+span{background:var(--orange);color:#fff;border-color:var(--orange)}.form-note{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;font-size:12px;color:var(--muted)}.sent{grid-column:1/-1;display:none;padding:14px 16px;background:#FDF4EC;color:var(--orange-deep);font-weight:600;border-radius:var(--r)}.contact-mini{margin-top:40px;display:grid;gap:10px}.contact-mini a{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.06);border-radius:var(--r);padding:16px 20px;font-family:var(--head);font-weight:700;font-size:18px;transition:.25s}.contact-mini a:hover{background:var(--orange)}.contact-mini small{font-family:var(--body);font-size:12px;opacity:.6;font-weight:500}.system{background:var(--grey)}.sys-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.sys-card{background:var(--white);border-radius:var(--r);padding:26px}.sys-card h4{font-family:var(--body);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:18px;font-weight:600}.pal{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.pal div{aspect-ratio:1/1.2;border-radius:6px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;font-size:10px;font-weight:600;line-height:1.3;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06)}.logos{display:grid;grid-template-columns:1fr 1fr;gap:8px}.logos div{border-radius:6px;display:grid;place-items:center;height:84px;padding:14px}.logos svg{max-height:100%;width:auto;max-width:100%}.sub-logo{display:flex;flex-direction:column;align-items:center;gap:4px}.sub-logo svg{height:16px}.sub-logo span{font-family:var(--head);font-size:8px;letter-spacing:.42em;font-weight:700;color:var(--orange)}footer{background:var(--navy);color:var(--white);padding:80px 0 30px}.foot-top{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:56px;flex-wrap:wrap}.foot-top .bigword svg{width:min(680px,80vw);height:auto}.foot-top .k svg{width:90px;height:auto}.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:36px;padding-bottom:44px;border-bottom:1px solid rgba(255,255,255,.12)}.foot-grid h5{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);margin-bottom:16px;font-weight:600}.foot-grid a{display:block;font-size:15px;margin-bottom:9px;opacity:.8}.foot-grid a:hover{opacity:1;color:var(--orange)}.foot-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:13px;opacity:.5;gap:20px;flex-wrap:wrap}.ribbon{position:fixed;left:16px;bottom:16px;z-index:60;background:var(--orange);color:var(--navy);font-size:12px;font-weight:600;padding:10px 16px;border-radius:var(--r);display:flex;gap:10px;align-items:center;box-shadow:0 10px 30px rgba(33,30,54,.25)}.ribbon a{font-weight:800}.rv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}.rv.in{opacity:1;transform:none}.drawer{position:fixed;inset:0;z-index:70;background:var(--navy);color:var(--white);padding:18px var(--gutter);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .45s cubic-bezier(.7,0,.2,1)}.drawer.open{transform:none}.drawer .top{display:flex;justify-content:space-between;align-items:center;height:44px}.drawer .top svg{height:18px;width:auto}.drawer nav{display:flex;flex-direction:column;margin-top:48px}.drawer nav a{font-family:var(--head);font-weight:800;font-size:30px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.1)}.drawer .burger{display:grid;background:var(--orange)}@media (max-width:1080px){.menu,.phone{display:none}.burger{display:grid}.hero-grid{grid-template-columns:1fr}.hero-media{min-height:340px}.bento{grid-template-columns:repeat(2,1fr)}.svc{grid-template-columns:1fr 1fr}.sr-grid{grid-template-columns:1fr}.sr-list{grid-template-columns:repeat(4,1fr)}.sr-list p{display:none}.sys-grid{grid-template-columns:1fr 1fr}.foot-grid{grid-template-columns:1fr 1fr}}@media (max-width:760px){.nav{height:68px}.hero{padding-top:68px}.lang,.nav-cta{display:none!important}.stats span{font-size:11px}.finish-grid,.story-grid,.consult-grid{grid-template-columns:1fr}.bento{grid-auto-rows:190px;gap:10px}.cat{padding:18px}.cat h3{font-size:16px}.cat p{display:none}.cat .ico{width:36px;height:36px}.cat.big p{display:block}.cat.big .tagrow{display:none}.cat .go{width:32px;height:32px;top:14px;right:14px}.svc{grid-template-columns:1fr}.svc h3{margin-top:22px}.sr-list{display:flex;overflow-x:auto;scrollbar-width:none;margin:0 calc(-1 * var(--gutter));padding:0 var(--gutter)}.sr-list button{flex:0 0 auto;padding:12px 16px}.sr-list svg{display:none}.sr-card{min-height:540px}.sr-info{grid-template-columns:1fr;gap:14px;left:12px;right:12px;bottom:12px}form{grid-template-columns:1fr}.sys-grid{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr}.proj-ctrl{display:none}.timeline div{grid-template-columns:90px 1fr}.ribbon{left:12px;right:12px;bottom:12px;justify-content:center;font-size:11px}}@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.rv{opacity:1;transform:none}}@media (max-width:1320px){.nav-right .phone{display:none}}@media (max-width:1200px){.menu{gap:20px}.nav-right .lang{display:none}}.cb-hero{padding:calc(80px + clamp(28px,4vw,48px)) 0 clamp(40px,5vw,64px);background:var(--grey-2);position:relative;overflow:hidden}.cb-crumbs{font-size:13px;color:var(--muted);margin-bottom:18px}.cb-crumbs a:hover{color:var(--orange)}.cb-hgrid{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:clamp(28px,5vw,80px);align-items:center}.cb-hero h1{font-size:clamp(34px,5vw,72px);line-height:1;margin-top:16px}.cb-hero h1 span{color:var(--orange)}.cb-hero .lead{margin-top:20px}.cb-acts{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.cb-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:26px}.cb-tags span{display:inline-flex;align-items:center;gap:8px;background:var(--white);border-radius:999px;padding:8px 14px;font-size:13px;font-weight:600}.cb-tags svg{width:18px;height:18px;color:var(--orange-deep)}.cb-badge{display:inline-flex;align-items:center;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:var(--orange);color:var(--navy);padding:5px 9px;border-radius:6px}.cb-badge.grey{background:var(--grey);color:var(--navy)}.cb-badge.ghost{background:rgba(255,255,255,.12);color:var(--white)}.cb-stage{position:relative;padding:20px 0 30px;perspective:1200px}.cb-cert{position:relative;background:var(--navy);color:var(--white);border-radius:14px;padding:clamp(22px,3vw,32px);box-shadow:var(--shadow-lg);transform:rotate(-3deg);transition:transform .7s var(--ease);overflow:hidden;max-width:460px;margin-left:auto}.cb-cert:hover{transform:rotate(0) translateY(-6px)}.cb-cert .pat-line{position:absolute;right:-30px;top:-30px;width:70%;height:90%;opacity:.5;pointer-events:none;-webkit-mask-image:linear-gradient(220deg,#000 20%,transparent 75%);mask-image:linear-gradient(220deg,#000 20%,transparent 75%)}.cb-cert .top{display:flex;justify-content:space-between;align-items:center;gap:12px;position:relative}.cb-cert .wm{width:120px;height:20px;fill:var(--white)}.cb-cert .mid{display:grid;grid-template-columns:minmax(0,1fr) 120px;gap:18px;align-items:end;margin-top:34px;position:relative}.cb-cert h3{font-size:clamp(18px,1.8vw,22px)}.cb-cert p{font-size:13px;color:rgba(255,255,255,.65);margin-top:8px}.cb-cert code{display:inline-block;margin-top:14px;font-family:var(--head);font-weight:700;letter-spacing:.12em;font-size:14px;color:var(--orange)}.cb-qr{background:var(--white);border-radius:10px;padding:10px;width:120px;height:120px}.cb-qr svg{width:100%;height:100%;display:block}.cb-scan{position:absolute;left:10px;right:10px;height:2px;background:var(--orange);box-shadow:0 0 12px var(--orange);top:10px;animation:cb-scan 2.4s var(--ease-io) infinite alternate}@keyframes cb-scan{to{top:108px}}.cb-qrwrap{position:relative}.cb-chip{position:absolute;left:0;bottom:0;background:var(--orange);color:var(--navy);border-radius:12px;padding:14px 18px;box-shadow:var(--shadow-md);font-size:13px;font-weight:600;display:flex;gap:12px;align-items:center;animation:cb-float 4s ease-in-out infinite}.cb-chip svg{width:30px;height:30px}.cb-chip span{display:block;font-family:var(--head);font-weight:800;font-size:18px;line-height:1.1}@keyframes cb-float{50%{transform:translateY(-8px)}}.cb-how{background:var(--white)}.cb-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;list-style:none;counter-reset:s;position:relative}.cb-step{background:var(--grey-2);border-radius:var(--r);padding:clamp(22px,2.6vw,32px);position:relative;display:flex;flex-direction:column;gap:14px;min-height:280px;transition:background .35s var(--ease),color .35s}.cb-step .no{font-family:var(--head);font-weight:800;font-size:56px;line-height:1;color:var(--grey);transition:color .35s}.cb-step .ic{width:60px;height:60px;border-radius:var(--r);background:var(--white);display:grid;place-items:center;position:absolute;top:clamp(22px,2.6vw,32px);right:clamp(22px,2.6vw,32px);transition:background .35s}.cb-step .ic svg{width:34px;height:34px;color:var(--orange-deep)}.cb-step h3{font-size:20px;margin-top:auto}.cb-step p{font-size:15px;color:var(--muted)}.cb-step:hover{background:var(--navy);color:var(--white)}.cb-step:hover p{color:rgba(255,255,255,.65)}.cb-step:hover .no{color:var(--orange)}.cb-step:hover .ic{background:var(--orange)}.cb-step:hover .ic svg{color:var(--navy)}.cb-who{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:14px}.cb-who div{border:1.5px solid var(--line);border-radius:var(--r);padding:20px 22px;display:flex;gap:16px;align-items:flex-start}.cb-who svg{width:40px;height:40px;color:var(--orange-deep);flex:none}.cb-who b{display:block;font-size:16px}.cb-who span{font-size:14px;color:var(--muted)}.cb-calc{background:var(--navy);color:var(--white);position:relative;overflow:hidden}.cb-calc .lead{color:rgba(255,255,255,.65)}.cb-calc .pat-fill{position:absolute;right:0;top:0;bottom:0;width:40px;opacity:.9}.cb-cgrid{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:20px;align-items:stretch}.cb-panel{background:var(--navy-2);border-radius:var(--r);padding:clamp(22px,3vw,34px)}.cb-panel .row{display:flex;justify-content:space-between;align-items:baseline;gap:12px;flex-wrap:wrap}.cb-panel label{font-size:13px;font-weight:600;opacity:.85}.cb-panel output{font-family:var(--head);font-weight:800;font-size:clamp(22px,2.4vw,32px);color:var(--orange)}.cb-range{width:100%;accent-color:var(--orange);margin:16px 0 6px}.cb-scale{display:flex;justify-content:space-between;font-size:12px;opacity:.5}.cb-tiers{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:26px}.cb-tier{border:2px solid rgba(255,255,255,.1);border-radius:var(--r);padding:14px 12px;transition:border-color .3s,background .3s,transform .4s var(--ease)}.cb-tier span{display:block;font-family:var(--head);font-weight:800;font-size:24px}.cb-tier small{display:block;font-size:12px;opacity:.65;margin-top:4px}.cb-tier.on{border-color:var(--orange);background:rgba(224,143,69,.14);transform:translateY(-4px)}.cb-tier.on span{color:var(--orange)}.cb-result{background:var(--white);color:var(--navy);border-radius:var(--r);padding:clamp(22px,3vw,34px);display:flex;flex-direction:column;gap:10px}.cb-result small{font-size:13px;color:var(--muted)}.cb-sum{font-family:var(--head);font-weight:800;font-size:clamp(30px,3.6vw,48px);line-height:1.05;overflow-wrap:anywhere}.cb-sum.bump{animation:cb-bump .35s var(--ease)}@keyframes cb-bump{40%{transform:scale(1.04);color:var(--orange-deep)}}.cb-bar{height:8px;border-radius:99px;background:var(--grey-2);overflow:hidden;margin-top:8px}.cb-bar i{display:block;height:100%;background:var(--orange);width:0;transition:width .5s var(--ease)}.cb-next{font-size:13px;color:var(--muted)}.cb-result .btn-navy,.cb-ctabox .btn-navy{background:var(--navy);color:var(--white)}.cb-result .btn{justify-content:center;margin-top:auto}.cb-fine{font-size:12px;opacity:.55;margin-top:16px}.cb-claim{background:var(--grey-2)}.cb-fgrid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(30px,5vw,80px);align-items:start}.cb-list{list-style:none;display:grid;gap:12px;margin-top:26px}.cb-list li{display:flex;gap:12px;font-size:15px}.cb-list li::before{content:\"\";width:22px;height:22px;border-radius:6px;flex:none;margin-top:1px;background:var(--orange) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 12.5l4 4L18 8' fill='none' stroke='%23211E36' stroke-width='3'/%3E%3C/svg%3E\") center/14px no-repeat}.cb-demo{margin-top:26px;background:var(--white);border-radius:var(--r);padding:18px 20px;font-size:14px;border-left:4px solid var(--orange)}.cb-demo code{font-family:var(--head);font-size:12px;background:var(--grey-2);padding:2px 6px;border-radius:4px;cursor:pointer}.cb-demo code:hover{background:var(--orange)}form.cb-form{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;position:relative}.cb-form h3{grid-column:1/-1;font-size:22px}.cb-form .field>label .req{color:var(--orange-deep)}.cb-form .field input{width:100%;min-width:0}.cb-form .field.err input{border-color:#D14343;background:#FDF0F0}.cb-form .field.ok input{border-color:#2E7D4F}.cb-form .field .hint{font-size:12px;color:var(--muted)}.cb-form .field.err .hint{color:#B23434}.cb-form input[readonly]{background:var(--grey);cursor:not-allowed}.cb-code{position:relative}.cb-code .lock{position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:11px;font-weight:700;background:var(--navy);color:var(--white);padding:4px 7px;border-radius:5px;display:none}.cb-code.locked .lock{display:block}.cb-code.locked input{padding-right:110px}.cb-file{grid-column:1/-1}.cb-drop{position:relative;display:flex;align-items:center;gap:14px;border:1.5px dashed rgba(33,30,54,.25);border-radius:var(--r);padding:16px;cursor:pointer;transition:border-color .25s,background .25s;background:var(--grey-2)}.cb-drop:hover,.cb-drop.drag{border-color:var(--orange);background:#FDF4EC}.cb-drop svg{width:32px;height:32px;color:var(--orange-deep);flex:none}.cb-drop b{display:block;font-size:14px}.cb-drop span{font-size:12px;color:var(--muted);overflow-wrap:anywhere}.cb-form .cb-drop input{position:absolute;left:0;top:0;width:1px;height:1px;padding:0;border:0;opacity:0}.cb-drop:focus-within{outline:2px solid var(--orange);outline-offset:2px}.cb-alert{grid-column:1/-1;display:none;align-items:flex-start;gap:10px;padding:14px 16px;border-radius:var(--r);font-size:14px;font-weight:600}.cb-alert.show{display:flex;animation:cb-in .35s var(--ease)}.cb-alert.bad{background:#FDF0F0;color:#9E2B2B}.cb-alert.warn{background:#FDF4EC;color:#7A4613}@keyframes cb-in{from{opacity:0;transform:translateY(-6px)}}.cb-form .btn{grid-column:1/-1;justify-content:center}.cb-form .btn[disabled]{opacity:.7;cursor:progress}.cb-done{position:absolute;inset:0;background:var(--navy);color:var(--white);border-radius:var(--r);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px;gap:12px;opacity:0;visibility:hidden;transform:scale(.97);transition:opacity .4s,transform .5s var(--ease),visibility 0s .5s}.cb-form.sent .cb-done{opacity:1;visibility:visible;transform:none;transition:opacity .4s,transform .5s var(--ease)}.cb-done .ring{width:76px;height:76px;border-radius:50%;background:var(--orange);color:var(--navy);display:grid;place-items:center}.cb-done .ring svg{width:44px;height:44px;stroke-dasharray:60;stroke-dashoffset:60}.cb-form.sent .cb-done .ring svg{animation:cb-draw .6s .25s var(--ease) forwards}@keyframes cb-draw{to{stroke-dashoffset:0}}.cb-done h3{font-size:24px}.cb-done p{color:rgba(255,255,255,.7);font-size:15px;max-width:36ch}.cb-done button{color:var(--orange);font-weight:600;text-decoration:underline;margin-top:6px}.cb-faq{background:var(--white)}.cb-qgrid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(30px,5vw,80px)}.cb-acc details{border-bottom:1px solid var(--line)}.cb-acc details:first-child{border-top:1px solid var(--line)}.cb-acc summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 0;font-weight:600;font-size:17px}.cb-acc summary::-webkit-details-marker{display:none}.cb-acc summary i{flex:none;width:32px;height:32px;border-radius:50%;background:var(--grey-2);position:relative;transition:background .3s,transform .4s var(--ease)}.cb-acc summary i::before,.cb-acc summary i::after{content:\"\";position:absolute;left:50%;top:50%;width:12px;height:2px;background:var(--navy);transform:translate(-50%,-50%)}.cb-acc summary i::after{transform:translate(-50%,-50%) rotate(90deg);transition:transform .4s var(--ease)}.cb-acc details[open] summary i{background:var(--orange);transform:rotate(180deg)}.cb-acc details[open] summary i::after{transform:translate(-50%,-50%) rotate(0)}.cb-acc .ans{color:var(--muted);font-size:15px;padding:0 48px 22px 0}.cb-acc details[open] .ans{animation:cb-in .4s var(--ease)}.cb-cta{background:var(--grey-2)}.cb-ctabox{background:var(--orange);color:var(--navy);border-radius:var(--r);padding:clamp(28px,4.5vw,64px);display:flex;justify-content:space-between;align-items:center;gap:30px;flex-wrap:wrap;position:relative;overflow:hidden}.cb-ctabox .kmk{position:absolute;right:30%;top:-80px;width:280px;height:284px;fill:rgba(33,30,54,.07);pointer-events:none}.cb-ctabox h2{font-size:clamp(26px,3.4vw,46px);max-width:18ch;position:relative}.cb-ctabox p{margin-top:12px;color:rgba(33,30,54,.75);max-width:48ch;position:relative}.cb-ctabox .acts{display:flex;flex-wrap:wrap;gap:10px;position:relative}.cb-ctabox .btn-line:hover{background:var(--navy);color:var(--white);border-color:var(--navy)}@media (max-width:1080px){.cb-hgrid,.cb-cgrid,.cb-fgrid,.cb-qgrid{grid-template-columns:minmax(0,1fr)}.cb-steps{grid-template-columns:minmax(0,1fr)}.cb-step{min-height:0}.cb-cert{margin:0 auto}}@media (max-width:760px){.cb-hero{padding-top:calc(68px + 24px)}.cb-cert .mid{grid-template-columns:minmax(0,1fr) 96px}.cb-qr{width:96px;height:96px;padding:8px}@keyframes cb-scan{to{top:86px}}.cb-tiers{grid-template-columns:repeat(2,minmax(0,1fr))}.cb-who{grid-template-columns:minmax(0,1fr)}form.cb-form{grid-template-columns:minmax(0,1fr)}.cb-acc .ans{padding-right:0}.cb-calc .pat-fill{width:20px}.cb-chip{position:relative;margin-top:-10px;display:inline-flex}}@media (prefers-reduced-motion:reduce){.cb-scan,.cb-chip,.cb-sum.bump{animation:none!important}.cb-cert{transform:none}}:host{--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--sans:\"Manrope\",system-ui,sans-serif;--ease:cubic-bezier(.2,.7,.2,1);--ease-io:cubic-bezier(.7,0,.2,1);--shadow-lg:0 30px 60px -30px rgba(33,30,54,.45);--shadow-md:0 18px 40px -22px rgba(33,30,54,.4);}:host{scroll-padding-top:100px}::selection{background:var(--orange);color:var(--navy)}:focus-visible{outline:2px solid var(--orange);outline-offset:3px;border-radius:4px}.kl-skip{position:fixed;left:12px;top:-60px;z-index:200;background:var(--navy);color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;transition:top .2s}.kl-skip:focus{top:12px}@view-transition{navigation:auto}::view-transition-old(root){animation:kl-vt-out .32s var(--ease-io) both}::view-transition-new(root){animation:kl-vt-in .6s var(--ease) both}#hdr{view-transition-name:kl-header}::view-transition-group(kl-header){animation-duration:0s}@keyframes kl-vt-out{to{opacity:0;transform:translateY(-14px) scale(.995)}}@keyframes kl-vt-in{from{opacity:0;transform:translateY(22px)}}.kl-curtain{position:fixed;inset:0;z-index:150;pointer-events:none;background:var(--navy);transform:scaleY(0);transform-origin:bottom;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='40' height='40'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45' fill-opacity='.12'/%3E%3C/svg%3E\");background-size:40px}.kl-curtain.cover{transform:scaleY(1);transition:transform .42s var(--ease-io)}.kl-curtain.lift{transform:scaleY(0);transform-origin:top;transition:transform .6s var(--ease-io)}.kl-curtain.instant{transform:scaleY(1);transition:none}.kl-intro{position:fixed;inset:0;z-index:160;background:var(--navy);display:grid;place-items:center;transition:transform .8s var(--ease-io) .05s}.kl-intro.done{transform:translateY(-100%)}.kl-intro .mk{width:84px;height:auto;fill:var(--orange);animation:kl-pop .7s var(--ease) both}.kl-intro .wm{width:200px;height:auto;fill:#fff;margin-top:22px;clip-path:inset(0 100% 0 0);animation:kl-wipe .7s var(--ease) .25s forwards}.kl-intro .bar{position:absolute;left:0;bottom:0;height:3px;background:var(--orange);width:0;animation:kl-bar .9s var(--ease) forwards}@keyframes kl-pop{from{opacity:0;transform:scale(.6) rotate(-12deg)}}@keyframes kl-wipe{to{clip-path:inset(0)}}@keyframes kl-bar{to{width:100%}}.kl-promo{position:relative;z-index:51;background:#F6F4F1;color:var(--navy);font-size:13px;height:34px;overflow:hidden;border-bottom:1px solid rgba(33,30,54,.08)}.kl-promo.gone{display:none}.kl-promo-in{height:100%;display:flex;align-items:center;justify-content:center;gap:16px;position:relative}.kl-promo-rot{position:relative;flex:1;height:100%;max-width:640px}.kl-promo-rot a{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;font-weight:500;color:var(--navy);opacity:0;transform:translateY(100%);transition:opacity .5s var(--ease),transform .6s var(--ease);pointer-events:none}.kl-promo-rot a.on{opacity:1;transform:none;pointer-events:auto}.kl-promo-rot a.out{opacity:0;transform:translateY(-100%)}.kl-promo-rot a:hover{color:var(--orange-deep)}.kl-promo-rot svg{width:16px;height:16px;flex:none;color:var(--orange-deep);fill:none;stroke:currentColor;stroke-width:3}.kl-promo-tel{position:absolute;left:var(--gutter);font-weight:700;font-size:12.5px;color:var(--navy);opacity:.75;transition:opacity .2s}.kl-promo-tel:hover{opacity:1}.kl-promo-x{position:absolute;right:var(--gutter);top:50%;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;color:var(--navy);opacity:.45;font-size:11px;transition:opacity .2s,background .2s}.kl-promo-x:hover{opacity:1;background:rgba(33,30,54,.08)}@media (max-width:900px){.kl-promo-tel{display:none}}@media (max-width:480px){.kl-promo{font-size:12px;height:32px}.kl-promo-rot a{justify-content:flex-start;padding-right:30px}}#hdr{top:var(--kl-bar,0px)}.kl-sticker{position:absolute;right:28px;top:28px;z-index:3;width:132px;height:132px;border-radius:50%;background:var(--orange);color:var(--navy);display:grid;place-items:center;box-shadow:0 20px 40px -18px rgba(0,0,0,.55);transition:transform .5s var(--ease);animation:kl-pop .8s var(--ease) .6s both}.kl-sticker:hover{transform:scale(1.07) rotate(-6deg)}.kl-sticker svg{position:absolute;inset:6px;width:calc(100% - 12px);height:calc(100% - 12px);animation:kl-spin 16s linear infinite}.kl-sticker text{font:700 10.5px var(--body);letter-spacing:.18em;fill:var(--navy);text-transform:uppercase}.kl-sticker b{font-family:var(--head);font-weight:800;font-size:28px;line-height:1;text-align:center}.kl-sticker b small{display:block;font-family:var(--body);font-size:10px;font-weight:700;letter-spacing:.12em;margin-top:4px}@keyframes kl-spin{to{transform:rotate(360deg)}}@media (max-width:760px){.kl-sticker{width:100px;height:100px;right:16px;top:16px}.kl-sticker b{font-size:21px}.kl-sticker text{font-size:9.5px}}.kl-cat-badge{position:absolute;left:22px;top:22px;z-index:3;background:var(--orange);color:var(--navy);font-size:12px;font-weight:800;padding:5px 10px;border-radius:999px;box-shadow:0 8px 18px -10px rgba(0,0,0,.5);animation:kl-pop .6s var(--ease) both}.cat .kl-cat-badge+svg.ico{margin-top:30px}.cat.big>.kl-cat-badge{position:absolute;width:auto;align-self:flex-start;font-size:13px;padding:7px 14px}.kl-deals{background:var(--white);position:relative;overflow:hidden}.kl-deals .sec-head{align-items:flex-end}.kl-deals-meta{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.kl-count{display:flex;gap:6px;font-variant-numeric:tabular-nums}.kl-count span{background:var(--navy);color:#fff;border-radius:8px;padding:8px 10px;min-width:56px;text-align:center;font-family:var(--head);font-weight:800;font-size:20px;line-height:1}.kl-count span small{display:block;font-family:var(--body);font-weight:500;font-size:10px;opacity:.6;margin-top:4px;letter-spacing:.06em}.kl-deals-rail{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(240px,1fr);gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:4px 2px 14px}.kl-deals-rail::-webkit-scrollbar{display:none}.kl-deal{scroll-snap-align:start;background:var(--grey-2);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;position:relative;transition:transform .45s var(--ease),box-shadow .45s var(--ease)}.kl-deal:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-deal .im{aspect-ratio:1;background:#fff;display:grid;place-items:center;overflow:hidden}.kl-deal .im img{width:84%;height:84%;object-fit:contain;transition:transform 1s var(--ease)}.kl-deal:hover .im img{transform:scale(1.07)}.kl-deal .off{position:absolute;left:12px;top:12px;background:var(--orange);color:var(--navy);font-weight:800;font-size:13px;padding:5px 10px;border-radius:999px}.kl-deal .bd{padding:14px 16px 16px;display:flex;flex-direction:column;gap:6px;flex:1}.kl-deal .br{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:600}.kl-deal h3{font-family:var(--body);font-weight:600;font-size:14px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.kl-deal .pr{margin-top:auto;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}.kl-deal .pr b{font-family:var(--head);font-size:18px}.kl-deal .pr s{font-size:13px;color:var(--muted)}.kl-deals-nav{display:flex;gap:8px}.kl-deals-nav button{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s}.kl-deals-nav button:hover{background:var(--navy);color:#fff}.kl-deals-note{font-size:12px;color:var(--muted);margin-top:6px}@media (max-width:760px){.kl-deals-rail{grid-auto-columns:72%}.kl-count span{min-width:46px;font-size:17px;padding:7px 8px}.kl-deals-nav{display:none}}.kl-ab{position:relative;overflow:hidden;background:#8E9097;color:#fff;min-height:min(900px,100svh);display:flex;align-items:center;padding:clamp(80px,9vw,120px) 0}.kl-ab-bg{position:absolute;inset:0}.kl-ab-bg img{width:100%;height:100%;object-fit:cover;object-position:70% center;transform:scale(1.06);transition:transform 2.4s var(--ease)}.kl-ab.kl-seen .kl-ab-bg img{transform:none}.kl-ab::before{content:\"\";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(33,30,54,.82) 0%,rgba(33,30,54,.55) 38%,rgba(33,30,54,0) 64%)}.kl-ab-in{position:relative;z-index:2;width:100%}.kl-ab-in>*{max-width:640px}.kl-ab-q{font-family:var(--head);font-weight:700;font-size:clamp(28px,3.3vw,50px);line-height:1.12;margin:22px 0 26px;letter-spacing:-.01em}.kl-ab-t{font-size:clamp(15px,1.15vw,17px);line-height:1.75;color:rgba(255,255,255,.85);max-width:560px;margin-bottom:34px}.kl-ab .btn-line{color:#fff;border-radius:999px;padding:16px 28px}.kl-ab-line{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:48px;max-width:720px!important;padding-top:24px;border-top:1px solid rgba(255,255,255,.22)}.kl-ab-line b{display:block;font-family:var(--head);font-size:22px;color:var(--orange)}.kl-ab-line span{display:block;font-size:12.5px;line-height:1.45;color:rgba(255,255,255,.75);margin-top:4px}.kl-ab-sign{font-size:12px;color:rgba(255,255,255,.6);margin-top:22px}@media (max-width:760px){.kl-ab{align-items:flex-start;min-height:0;padding:72px 0 360px}.kl-ab::before{background:linear-gradient(180deg,rgba(33,30,54,.85) 0%,rgba(33,30,54,.6) 52%,rgba(33,30,54,0) 78%)}.kl-ab-bg img{object-position:center bottom}.kl-ab-line{grid-template-columns:1fr 1fr}}.kl-how{background:#F6EEE4;position:relative;overflow:hidden}.kl-how::before{content:\"\";position:absolute;inset:0;opacity:.55;pointer-events:none;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='220' height='220'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-opacity='.35' stroke-width='.008'/%3E%3C/svg%3E\");background-size:220px}.kl-how .wrap{position:relative}.kl-how-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2vw,28px)}.kl-vid{position:relative;display:block;aspect-ratio:9/14;border-radius:14px;overflow:hidden;background:var(--navy);cursor:pointer;padding:0;text-align:left;box-shadow:0 30px 60px -40px rgba(33,30,54,.6);transition:transform .6s var(--ease),box-shadow .6s var(--ease)}.kl-vid:hover{transform:translateY(-8px);box-shadow:0 40px 70px -36px rgba(33,30,54,.7)}.kl-vid img,.kl-vid video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.2s var(--ease),opacity .5s}.kl-vid:hover img{transform:scale(1.05)}.kl-vid video{opacity:0;pointer-events:none}.kl-vid.previewing video{opacity:1}.kl-vid::after{content:\"\";position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(180deg,transparent,rgba(33,30,54,.85))}.kl-play{position:absolute;left:50%;top:50%;z-index:2;width:76px;height:76px;margin:-38px 0 0 -38px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 12px 30px -10px rgba(0,0,0,.45);transition:transform .45s var(--ease),background .3s}.kl-play::before{content:\"\";margin-left:5px;border-left:18px solid var(--navy);border-top:11px solid transparent;border-bottom:11px solid transparent;transition:border-color .3s}.kl-play::after{content:\"\";position:absolute;inset:-10px;border-radius:50%;border:2px solid rgba(255,255,255,.6);animation:kl-ring 2.4s var(--ease) infinite}@keyframes kl-ring{0%{transform:scale(.85);opacity:1}100%{transform:scale(1.35);opacity:0}}.kl-vid:hover .kl-play{transform:scale(1.1);background:var(--orange)}.kl-vid-cap{position:absolute;left:22px;right:22px;bottom:22px;z-index:2;color:#fff;font-weight:600;font-size:15px;line-height:1.35}.kl-vid-cap small{display:block;font-family:var(--head);font-size:12px;color:var(--orange);letter-spacing:.1em;margin-bottom:6px}@media (max-width:900px){.kl-how-grid{grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:72%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding-bottom:6px}.kl-how-grid::-webkit-scrollbar{display:none}.kl-vid{scroll-snap-align:start}.kl-play{width:62px;height:62px;margin:-31px 0 0 -31px}}.kl-vmodal{position:fixed;inset:0;z-index:130;background:rgba(20,18,34,.82);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px;opacity:0;transition:opacity .3s}.kl-vmodal[hidden]{display:none}.kl-vmodal.show{opacity:1}.kl-vmodal-box{position:relative;height:min(86vh,900px);aspect-ratio:9/16;max-width:100%;border-radius:16px;overflow:hidden;background:#000;transform:scale(.94);transition:transform .45s var(--ease)}.kl-vmodal.show .kl-vmodal-box{transform:none}.kl-vmodal video{width:100%;height:100%;object-fit:cover;display:block}.kl-vmodal-x{position:absolute;right:12px;top:12px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.9);color:var(--navy);font-size:15px;font-weight:700}.kl-chat{position:fixed;right:20px;bottom:20px;z-index:90;font-size:14px;transform:translateY(calc(-1 * var(--kl-lift,0px)));transition:transform .35s var(--ease),opacity .25s,visibility .25s}:host.kl-chat-hide .kl-chat,:host.kl-chat-hide .kl-top{opacity:0!important;visibility:hidden!important;pointer-events:none!important}.kl-chat-btn{display:flex;align-items:center;gap:10px;background:var(--navy);color:#fff;border-radius:999px;padding:8px 18px 8px 8px;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transition:transform .35s var(--ease),background .3s;animation:kl-pop .7s var(--ease) 1.4s both}.kl-chat-btn:hover{transform:translateY(-3px);background:var(--navy-2)}.kl-chat-btn .av{position:relative;width:40px;height:40px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-btn .av svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-btn .av::after{content:\"\";position:absolute;right:0;top:0;width:11px;height:11px;border-radius:50%;background:#2E9E5B;border:2px solid var(--navy)}.kl-chat-btn b{font-weight:600}.kl-chat.open .kl-chat-btn{opacity:0;pointer-events:none;transform:scale(.8)}.kl-chat-panel{position:absolute;right:0;bottom:0;width:min(370px,calc(100vw - 32px));background:#fff;border-radius:18px;overflow:hidden;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);transform-origin:bottom right;transform:scale(.6) translateY(20px);opacity:0;visibility:hidden;transition:transform .45s var(--ease),opacity .25s,visibility 0s .45s;display:flex;flex-direction:column;max-height:min(600px,calc(100svh - 120px))}.kl-chat.open .kl-chat-panel{transform:none;opacity:1;visibility:visible;transition:transform .45s var(--ease),opacity .25s}.kl-chat-head{background:var(--navy);color:#fff;padding:18px 18px 16px;display:flex;gap:12px;align-items:center;position:relative}.kl-chat-head .av{width:42px;height:42px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-head .av svg{width:22px;height:22px;fill:var(--navy)}.kl-chat-head b{display:block;font-size:15px}.kl-chat-head small{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.75}.kl-chat-head small::before{content:\"\";width:7px;height:7px;border-radius:50%;background:#2E9E5B}.kl-chat-x{position:absolute;right:12px;top:12px;width:32px;height:32px;border-radius:50%;color:#fff;opacity:.7}.kl-chat-x:hover{opacity:1;background:rgba(255,255,255,.1)}.kl-chat-body{padding:16px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;background:var(--grey-2);flex:1;min-height:200px}.kl-msg{max-width:86%;padding:10px 14px;border-radius:14px;line-height:1.45;animation:kl-up .35s var(--ease) both}.kl-msg.in{background:#fff;border-bottom-left-radius:4px;align-self:flex-start}.kl-msg.out{background:var(--navy);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}.kl-msg small{display:block;font-size:11px;opacity:.55;margin-top:4px}.kl-typing{align-self:flex-start;background:#fff;border-radius:14px;padding:12px 14px;display:flex;gap:4px}.kl-typing i{width:6px;height:6px;border-radius:50%;background:var(--muted);animation:kl-dot 1s infinite}.kl-typing i:nth-child(2){animation-delay:.15s}.kl-typing i:nth-child(3){animation-delay:.3s}@keyframes kl-dot{0%,100%{opacity:.3;transform:none}50%{opacity:1;transform:translateY(-3px)}}.kl-quick{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}.kl-quick button{font-size:13px;font-weight:600;padding:8px 12px;border-radius:999px;background:#fff;border:1.5px solid var(--line);color:var(--navy);transition:border-color .2s,background .2s}.kl-quick button:hover{border-color:var(--orange);background:#FDF4EC}.kl-chat-ch{display:flex;gap:8px;padding:10px 16px 0;background:#fff}.kl-chat-ch a{flex:1;text-align:center;font-size:12px;font-weight:600;padding:8px 6px;border-radius:9px;background:var(--grey-2);transition:background .2s,color .2s}.kl-chat-ch a:hover{background:var(--navy);color:#fff}.kl-chat-form{display:flex;gap:8px;padding:12px 16px 16px;background:#fff}.kl-chat-form input{flex:1;min-width:0;border:1.5px solid var(--line);border-radius:999px;padding:11px 16px;font:inherit;font-size:14px;outline:none;color:var(--navy)}.kl-chat-form input:focus{border-color:var(--orange)}.kl-chat-form button{width:44px;height:44px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none;transition:transform .25s var(--ease)}.kl-chat-form button:hover{transform:scale(1.08)}.kl-chat-form button svg{width:18px;height:18px;fill:none;stroke:var(--navy);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-note{font-size:11px;color:var(--muted);text-align:center;padding:0 16px 12px;background:#fff}.kl-top{bottom:calc(92px + var(--kl-lift,0px))!important}@media (max-width:760px){.kl-chat{right:14px;bottom:14px}.kl-chat-btn{padding:6px}.kl-chat-btn b{display:none}.kl-chat-btn .av{width:46px;height:46px}.kl-top{right:18px}}.kl-progress{position:fixed;left:0;right:0;top:0;height:3px;z-index:60;pointer-events:none}.kl-progress i{display:block;height:100%;background:var(--orange);transform-origin:left;transform:scaleX(var(--p,0))}#hdr{transition:transform .45s var(--ease),box-shadow .3s,background .3s}#hdr.kl-hide{transform:translateY(-100%)}#hdr .logo svg{transition:transform .4s var(--ease)}#hdr .logo:hover svg{transform:translateX(3px)}.kl-menu{align-items:center}.kl-dd{position:relative;display:flex;align-items:center}.kl-dd>a{display:inline-flex;align-items:center;gap:6px}.kl-caret{width:7px;height:7px;border-right:1.6px solid currentColor;border-bottom:1.6px solid currentColor;transform:rotate(45deg) translateY(-2px);transition:transform .3s var(--ease);opacity:.6}.kl-dd:hover .kl-caret,.kl-dd.open .kl-caret{transform:rotate(225deg) translate(-2px,-1px)}.kl-panel{position:absolute;top:100%;left:-18px;min-width:290px;padding:10px;background:#fff;border-radius:14px;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);opacity:0;visibility:hidden;transform:translateY(10px) scale(.98);transform-origin:top left;transition:opacity .25s,transform .35s var(--ease),visibility 0s .35s;margin-top:14px}.kl-panel::before{content:\"\";position:absolute;left:0;right:0;top:-16px;height:16px}.kl-dd:hover .kl-panel,.kl-dd:focus-within .kl-panel,.kl-dd.open .kl-panel{opacity:1;visibility:visible;transform:none;transition:opacity .25s,transform .35s var(--ease),visibility 0s}.kl-dd.closing .kl-panel{opacity:0!important;visibility:hidden!important}.menu .kl-panel a{display:block;padding:11px 14px;border-radius:9px;transition:background .2s,transform .25s var(--ease)}.menu .kl-panel a::after{display:none}.menu .kl-panel a:hover{background:var(--grey-2);transform:translateX(4px)}.kl-panel b{display:block;font-size:14px;font-weight:600}.kl-panel small{display:block;font-size:12px;color:var(--muted);font-weight:400;margin-top:2px}.kl-panel a:hover b{color:var(--orange-deep)}.kl-panel>a{opacity:0;transform:translateY(6px)}.kl-dd:hover .kl-panel>a,.kl-dd:focus-within .kl-panel>a,.kl-dd.open .kl-panel>a{opacity:1;transform:none;transition:opacity .3s,transform .4s var(--ease),background .2s;transition-delay:calc(var(--i,0)*35ms)}.kl-mega{display:grid;grid-template-columns:repeat(3,minmax(150px,1fr)) 230px;gap:6px 18px;min-width:860px;padding:22px}.kl-mega h6{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange-deep);margin:0 0 8px 12px}.menu .kl-mega-col a{padding:7px 12px;font-size:14px}.menu a.kl-mega-promo{background:var(--navy);color:#fff;border-radius:12px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;gap:14px;min-height:220px;position:relative;overflow:hidden}.menu a.kl-mega-promo:hover{background:var(--navy-2);transform:none}.kl-mega-promo b{font-family:var(--head);font-size:20px;line-height:1.15;color:#fff!important}.kl-mega-promo .kl-more{font-size:13px;font-weight:600;color:var(--orange);display:inline-flex;gap:8px;align-items:center}.kl-mega-promo .arrow{fill:var(--orange)}.kl-mega-promo::after{content:\"\";position:absolute;right:-40px;bottom:-40px;width:160px;height:160px;opacity:.25;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='32' height='32'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45'/%3E%3C/svg%3E\");background-size:32px;transition:transform .8s var(--ease)}.kl-mega-promo:hover::after{transform:translate(-14px,-14px)}.menu a[aria-current=\"page\"],.kl-dd.kl-active>a{color:var(--orange-deep)}.menu>a[aria-current=\"page\"]::after,.kl-dd.kl-active>a::after{width:100%}.kl-icon-btn{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s,transform .25s var(--ease);flex:none}.kl-icon-btn svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:1.8;stroke-linecap:round;transition:stroke .25s}.kl-icon-btn:hover{background:var(--navy);transform:translateY(-2px)}.kl-icon-btn:hover svg{stroke:#fff}.kl-icon-btn[aria-current=\"page\"]{background:var(--orange)}@media (max-width:1460px){.nav-right .lang{display:none}}@media (max-width:1320px){.kl-menu{gap:22px}}@media (max-width:1200px){.kl-menu{gap:16px;font-size:13.5px}.nav-cta{display:none!important}}.drawer{inset:0 0 0 auto!important;width:min(380px,88vw);padding:16px 24px 24px!important;border-radius:18px 0 0 18px;box-shadow:-30px 0 60px -20px rgba(0,0,0,.45);transition:transform .5s var(--ease-io)!important;overflow:hidden}.drawer .top{height:44px}.drawer .top svg{height:16px}.drawer .burger{width:40px;height:40px;font-size:15px}.kl-backdrop{position:fixed;inset:0;z-index:69;background:rgba(33,30,54,.45);backdrop-filter:blur(3px);opacity:0;visibility:hidden;transition:opacity .4s,visibility 0s .4s}:host.kl-drawer-open .kl-backdrop{opacity:1;visibility:visible;transition:opacity .4s}.drawer{overflow-y:auto!important;overscroll-behavior:contain}.kl-drawer-nav{flex:1 0 auto;margin-top:22px!important;padding-bottom:16px}.kl-drawer-foot{flex:none}.drawer .kl-drawer-nav>a,.kl-drawer-nav summary{font-family:var(--body)!important;font-weight:600!important;font-size:17px!important;padding:14px 0!important;border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details{border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details summary{border-bottom:0}.kl-drawer-nav summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center}.kl-drawer-nav summary::-webkit-details-marker{display:none}.kl-drawer-nav summary::after{content:\"\";width:8px;height:8px;border-right:1.8px solid var(--orange);border-bottom:1.8px solid var(--orange);transform:rotate(45deg) translateY(-3px);transition:transform .3s var(--ease)}.kl-drawer-nav details[open] summary::after{transform:rotate(225deg) translate(-2px,-2px)}.kl-drawer-nav details>div{display:grid;padding:0 0 12px 12px;border-left:2px solid rgba(224,143,69,.35);margin:0 0 12px 2px}.drawer .kl-drawer-nav details>div a{font-family:var(--body);font-weight:500;font-size:15px;padding:7px 0;border:0;opacity:.75;transition:opacity .2s,transform .25s var(--ease)}.drawer .kl-drawer-nav details>div a:hover{opacity:1;transform:translateX(4px);color:var(--orange)}.drawer .kl-drawer-nav>a[aria-current=\"page\"],.drawer .kl-drawer-nav a[aria-current=\"page\"]{color:var(--orange);opacity:1}.kl-drawer-nav details[open]>div a{animation:kl-up .4s var(--ease) both}.kl-drawer-nav details[open]>div a:nth-child(2){animation-delay:.03s}.kl-drawer-nav details[open]>div a:nth-child(3){animation-delay:.06s}.kl-drawer-nav details[open]>div a:nth-child(4){animation-delay:.09s}.kl-drawer-nav details[open]>div a:nth-child(5){animation-delay:.12s}.kl-drawer-nav details[open]>div a:nth-child(6){animation-delay:.15s}.drawer.open .kl-drawer-nav>*{animation:kl-side .5s var(--ease) both}.drawer.open .kl-drawer-nav>*:nth-child(2){animation-delay:.04s}.drawer.open .kl-drawer-nav>*:nth-child(3){animation-delay:.08s}.drawer.open .kl-drawer-nav>*:nth-child(4){animation-delay:.12s}.drawer.open .kl-drawer-nav>*:nth-child(5){animation-delay:.16s}.drawer.open .kl-drawer-nav>*:nth-child(6){animation-delay:.2s}.kl-drawer-foot{display:grid;gap:4px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12)}.kl-drawer-foot span{font-size:12px;opacity:.55;margin-bottom:12px}.kl-drawer-foot .btn{justify-content:center}.kl-drawer-phone{font-family:var(--head);font-weight:800;font-size:19px;color:var(--orange)}@keyframes kl-up{from{opacity:0;transform:translateY(12px)}}@keyframes kl-side{from{opacity:0;transform:translateX(24px)}}:host.kl-lock{overflow:hidden}.kl-search{position:fixed;inset:0;z-index:120;background:rgba(33,30,54,.55);backdrop-filter:blur(8px);display:flex;justify-content:center;align-items:flex-start;padding:12vh 16px 16px;opacity:0;transition:opacity .25s}.kl-search[hidden]{display:none}.kl-search.show{opacity:1}.kl-search-box{width:min(680px,100%);background:#fff;border-radius:16px;box-shadow:var(--shadow-lg);overflow:hidden;transform:translateY(-12px) scale(.98);transition:transform .4s var(--ease)}.kl-search.show .kl-search-box{transform:none}.kl-search-in{display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--line)}.kl-search-in svg{width:22px;height:22px;fill:none;stroke:var(--muted);stroke-width:2;stroke-linecap:round;flex:none}.kl-search-in input{flex:1;border:0;outline:0;font:inherit;font-size:18px;color:var(--navy);background:none;min-width:0}.kl-search-in kbd{font:inherit;font-size:11px;color:var(--muted);border:1px solid var(--line);border-radius:5px;padding:2px 6px}.kl-search-res{max-height:min(60vh,520px);overflow-y:auto;padding:8px}.kl-search-res h6{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:10px 12px 6px}.kl-search-res a{display:flex;align-items:center;gap:14px;padding:10px 12px;border-radius:10px}.kl-search-res a[aria-selected=\"true\"],.kl-search-res a:hover{background:var(--grey-2)}.kl-search-res a img,.kl-search-res a .ic{width:44px;height:44px;border-radius:8px;object-fit:cover;background:var(--grey-2);flex:none;display:grid;place-items:center;font-weight:800;color:var(--orange-deep)}.kl-search-res a b{display:block;font-size:14px;font-weight:600;line-height:1.3}.kl-search-res a small{display:block;font-size:12px;color:var(--muted)}.kl-search-res mark{background:rgba(224,143,69,.25);color:inherit;border-radius:3px}.kl-search-res .empty{padding:24px 12px;color:var(--muted);font-size:14px;text-align:center}.kl-top{position:fixed;right:20px;bottom:20px;z-index:55;width:48px;height:48px;border-radius:50%;background:var(--navy);display:grid;place-items:center;box-shadow:var(--shadow-md);opacity:0;transform:translateY(20px) scale(.8);pointer-events:none;transition:opacity .3s,transform .45s var(--ease),background .25s}.kl-top.show{opacity:1;transform:none;pointer-events:auto}.kl-top:hover{background:var(--orange)}.kl-top svg{width:20px;height:20px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-top:hover svg{stroke:var(--navy)}.kl-body.kl-has-sticky .kl-top{bottom:96px}.kl-demo{position:fixed;left:16px;bottom:16px;z-index:54;font-size:11px;font-weight:600;letter-spacing:.02em;padding:7px 12px;border-radius:999px;background:rgba(33,30,54,.82);color:#fff;backdrop-filter:blur(6px);pointer-events:none;box-shadow:var(--shadow-md)}.kl-demo::before{content:\"\";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--orange);margin-right:8px;vertical-align:1px}.kl-body.kl-has-sticky .kl-demo{bottom:92px}@media (max-width:760px){.kl-demo{bottom:12px;left:12px;font-size:10px}}.kl-foot-cta{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap;padding-bottom:56px;margin-bottom:56px;border-bottom:1px solid rgba(255,255,255,.12)}.kl-foot-cta .h-section{color:#fff;margin-top:14px}.kl-foot-grid{grid-template-columns:1.6fr 1fr 1fr 1fr 1fr!important}.kl-foot-grid a{transition:color .2s,transform .3s var(--ease),opacity .2s}.kl-foot-grid a:hover{transform:translateX(4px)}.kl-foot-hours{display:block;font-size:13px;opacity:.55;margin-top:6px}.kl-footer .k svg{transition:transform 1.2s var(--ease)}.kl-footer:hover .k svg{transform:rotate(-8deg) scale(1.05)}@media (max-width:1080px){.kl-foot-grid{grid-template-columns:1fr 1fr 1fr!important}}@media (max-width:760px){.kl-foot-grid{grid-template-columns:1fr 1fr!important}.kl-foot-grid>div:first-child{grid-column:1/-1}}.btn-navy{background:var(--navy);color:var(--white)}.btn{position:relative;overflow:hidden;isolation:isolate;transition:transform .3s var(--ease),background .3s,color .3s,border-color .3s,box-shadow .3s}.btn::after{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:inherit;transform:translateX(-102%) skewX(-12deg);transition:transform .55s var(--ease)}.btn:hover::after{transform:translateX(0) skewX(0)}.btn-orange::after{background:var(--orange-deep)}.btn-navy::after{background:var(--navy-2)}.btn:hover{box-shadow:0 14px 30px -14px rgba(33,30,54,.5)}.btn:active{transform:scale(.97)}.btn:hover .arrow{transform:translateX(5px)}.btn .arrow{transition:transform .35s var(--ease)}.kl-magnet{will-change:transform}main p a:not(.btn):not([class]){background:linear-gradient(currentColor,currentColor) 0 100%/0 1.5px no-repeat;transition:background-size .35s var(--ease)}main p a:not(.btn):not([class]):hover{background-size:100% 1.5px}.kl-lift{transition:transform .5s var(--ease),box-shadow .5s var(--ease)}.kl-lift:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-zoom img{transition:transform 1.1s var(--ease)!important}.kl-zoom:hover img,.kl-lift:hover .kl-zoom img{transform:scale(1.06)}img.kl-fade{opacity:0;transition:opacity .7s var(--ease)}img.kl-fade.kl-loaded{opacity:1}:host.kl-js [data-kl-rv]{opacity:0;transform:translateY(32px);transition:opacity .9s var(--ease),transform 1s var(--ease);transition-delay:calc(var(--i,0)*80ms)}:host.kl-js [data-kl-rv=\"left\"]{transform:translateX(-36px)}:host.kl-js [data-kl-rv=\"right\"]{transform:translateX(36px)}:host.kl-js [data-kl-rv=\"scale\"]{transform:scale(.94)}:host.kl-js [data-kl-rv].kl-in{opacity:1;transform:none}:host.kl-js [data-kl-rv=\"img\"]{opacity:1;transform:none;clip-path:inset(0 0 100% 0);transition:clip-path 1.2s var(--ease-io)}:host.kl-js [data-kl-rv=\"img\"] img{transform:scale(1.15);transition:transform 1.6s var(--ease)}:host.kl-js [data-kl-rv=\"img\"].kl-in{clip-path:inset(0)}:host.kl-js [data-kl-rv=\"img\"].kl-in img{transform:none}:host.kl-js [data-kl-rv].kl-done{transition-delay:0s}.kl-split .kl-w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.1em;margin-bottom:-.1em}.kl-split .kl-w>span{display:inline-block;transform:translateY(110%);transition:transform 1s var(--ease);transition-delay:calc(var(--i,0)*55ms + 80ms)}.kl-split.kl-in .kl-w>span{transform:none}:host:not(.kl-js) .kl-split .kl-w>span{transform:none}@media (prefers-reduced-motion:reduce){::view-transition-old(root),::view-transition-new(root){animation:none}:host.kl-js [data-kl-rv],:host.kl-js [data-kl-rv] img,.kl-split .kl-w>span{opacity:1!important;transform:none!important;clip-path:none!important;transition:none!important}.kl-intro,.kl-curtain{display:none!important}.kl-lift:hover,.btn:hover .arrow{transform:none}.btn::after{display:none}}.kl-opt{display:flex;flex-direction:column;gap:10px;margin:18px 0 6px}.kl-opt>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.kl-opt>div{display:flex;flex-wrap:wrap;gap:8px}.kl-opt button{font:600 14px/1 var(--body);padding:11px 16px;border-radius:999px;border:1.5px solid var(--grey);background:#fff;color:var(--navy);cursor:pointer;transition:border-color .2s,background .2s,color .2s,transform .2s var(--ease)}.kl-opt button:hover{border-color:var(--orange);transform:translateY(-1px)}.kl-opt button.on{background:var(--navy);border-color:var(--navy);color:#fff}.kl-share{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 4px}.kl-share>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-right:4px}.kl-share a,.kl-share button{font:600 13px/1 var(--body);padding:9px 13px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);border:0;cursor:pointer;transition:background .2s,color .2s}.kl-share a:hover,.kl-share button:hover{background:var(--navy);color:#fff}.kl-mail{background:var(--white);padding:clamp(56px,7vw,100px) 0}.kl-mail-head{margin-bottom:28px}.kl-mail-head .h-section{margin-top:14px}.kl-mail-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.kl-mail-grid a{display:flex;flex-direction:column;gap:6px;padding:22px;border-radius:18px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .25s,color .25s,transform .3s var(--ease)}.kl-mail-grid a:hover{background:var(--navy);color:#fff;transform:translateY(-3px)}.kl-mail-grid small{font-size:12px;letter-spacing:.1em;text-transform:uppercase;opacity:.65}.kl-mail-grid b{font-size:17px;font-weight:700;overflow-wrap:anywhere}.kl-mail-soc{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}.kl-mail-soc>div{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:18px 22px;border:1.5px solid var(--grey);border-radius:18px}.kl-mail-soc small{flex-basis:100%;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange-deep)}.kl-mail-soc a{font-weight:600;font-size:14px;padding:8px 14px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .2s,color .2s}.kl-mail-soc a:hover{background:var(--orange);color:var(--navy)}@media (max-width:900px){.kl-mail-grid{grid-template-columns:1fr 1fr}.kl-mail-soc{grid-template-columns:1fr}}@media (max-width:520px){.kl-mail-grid{grid-template-columns:1fr}}a.brands{display:block;text-decoration:none}a.brands:hover .track{animation-play-state:paused}.kl-rev{background:var(--grey-2,#F1F0EE);padding:clamp(64px,8vw,120px) 0}.kl-rev-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:8px}.kl-rev figure{margin:0;background:#fff;border-radius:22px;padding:30px 28px;display:flex;flex-direction:column;justify-content:space-between;gap:26px;position:relative;transition:transform .4s var(--ease),box-shadow .4s}.kl-rev figure::before{content:\"“\";position:absolute;top:6px;right:22px;font:800 90px/1 var(--head);color:var(--orange);opacity:.35}.kl-rev figure:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}.kl-rev blockquote{margin:0;font-size:16px;line-height:1.6;color:var(--navy)}.kl-rev figcaption{display:grid;grid-template-columns:auto 1fr;column-gap:12px;align-items:center}.kl-rev .av{grid-row:span 2;width:46px;height:46px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:800;font-size:14px}.kl-rev figcaption b{font-size:15px}.kl-rev figcaption small{font-size:13px;color:var(--muted)}.kl-blogt{background:var(--white);padding:clamp(64px,8vw,120px) 0}.kl-blogt-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.kl-blogt-grid a{display:flex;flex-direction:column;gap:10px;color:var(--navy)}.kl-blogt-grid img{width:100%;aspect-ratio:16/11;object-fit:cover;border-radius:18px;transition:transform .6s var(--ease),filter .4s}.kl-blogt-grid a:hover img{transform:scale(1.03);filter:saturate(1.1)}.kl-blogt-grid small{font-size:12px;color:var(--muted);letter-spacing:.06em}.kl-blogt-grid b{font-size:17px;line-height:1.35;transition:color .2s}.kl-blogt-grid a:hover b{color:var(--orange-deep)}@media (max-width:1000px){.kl-rev-grid{grid-template-columns:1fr}.kl-blogt-grid{grid-template-columns:1fr 1fr}}@media (max-width:560px){.kl-blogt-grid{grid-template-columns:1fr}}.kl-lang{display:flex;align-items:center;gap:2px;padding:3px;border-radius:999px;background:rgba(33,30,54,.06);margin-right:6px}.kl-lang a{font:700 12px/1 var(--body);letter-spacing:.04em;padding:7px 10px;border-radius:999px;color:var(--navy);opacity:.6;transition:background .25s,opacity .25s,color .25s}.kl-lang a:hover{opacity:1}.kl-lang a.on{background:var(--navy);color:#fff;opacity:1}.kl-lang-m{margin:0 0 14px;margin-right:0;align-self:stretch;background:rgba(255,255,255,.08)}.kl-lang-m a{flex:1;text-align:center;color:#fff;font-size:13px;padding:10px 14px}.kl-lang-m a.on{background:var(--orange);color:var(--navy)}@media (max-width:1100px){.nav .kl-lang:not(.kl-lang-m){display:none}}.kl-icon-btn{position:relative}@media (max-width:480px){.nav-right{gap:8px!important}.nav-right .kl-icon-btn,.nav-right .burger{width:38px;height:38px}}.kl-acct-i{position:absolute;inset:6px;border-radius:50%;background:var(--navy);color:#fff;font:800 14px/1 var(--body);display:grid;place-items:center;pointer-events:none}.kl-acct-i[hidden]{display:none}.kl-cart-n{position:absolute;top:-6px;right:-6px;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:var(--orange);color:var(--navy);font:800 10.5px/19px var(--body);text-align:center;box-shadow:0 0 0 2px #fff;pointer-events:none}.kl-cart-n.bump{animation:kl-bump .45s var(--ease)}@keyframes kl-bump{40%{transform:scale(1.35)}}.kl-added{position:fixed;left:50%;bottom:24px;z-index:95;display:flex;gap:16px;align-items:center;background:var(--navy);color:#fff;padding:12px 14px 12px 18px;border-radius:14px;font-size:14px;font-weight:600;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transform:translate(-50%,160%);opacity:0;transition:transform .4s var(--ease),opacity .3s;max-width:calc(100vw - 32px)}.kl-added.show{transform:translate(-50%,0);opacity:1}.kl-added a{background:var(--orange);color:var(--navy);padding:8px 12px;border-radius:10px;white-space:nowrap}.kl-qdel svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle}.kl-qdel:hover{color:#C0392B}","html":{"ru":{"page":"\n<section class=\"cb-hero\" id=\"top\"><div class=\"wrap\"><div class=\"cb-hgrid\"><div><nav class=\"cb-crumbs\" aria-label=\"Навигация\"><a href=\"/\">Главная</a> / Кэшбэк для партнёров</nav><span class=\"eyebrow\">Партнёрская программа</span><h1>Кэшбэк для <span>мастеров и дизайнеров</span></h1><p class=\"lead\">Рекомендуете Kashlux своим клиентам? Мы выдадим вам личный QR-сертификат. Клиент покупает по нему в шоуруме или онлайн, а вы получаете часть суммы покупки.</p><div class=\"cb-acts\"><a href=\"#cb-claim\" class=\"btn btn-orange kl-magnet\">Получить кэшбэк <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"#cb-calc\" class=\"btn btn-line\">Рассчитать</a></div><div class=\"cb-tags\"><span><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg>Сантехники и монтажники</span><span><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg>Дизайнеры интерьера</span><span><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 41V9h20v32M28 19h12v22M4 41h40M14 15h2M20 15h2M14 22h2M20 22h2M14 29h2M20 29h2M33 26h2M33 33h2\"/></g></svg>Прорабы и бригады</span></div></div><div class=\"cb-stage\"><div class=\"cb-cert\" aria-label=\"Пример QR-сертификата\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"top\"><svg class=\"wm\" viewBox=\"0 0 495 80\" aria-hidden=\"true\"><path d=\"M115.45 47.89L94.51 47.89L105.07 22.27L115.45 47.89M113.38 10.04L97.11 10.04L68.70 73.82L68.50 74.28L83.64 74.28L90.23 58.52L119.73 58.52L126.32 74.08L126.41 74.28L141.99 74.28L113.47 10.23L113.38 10.04Z\"/><path d=\"M176.21 35.61C166.45 34.41 158.02 33.37 158.02 27.29C158.02 19.98 167.08 18.88 172.48 18.88C183.40 18.88 187.75 24.02 188.19 28.83L188.22 29.13L203.30 29.13L203.27 28.77C202.03 15.35 191.17 8.26 171.86 8.26C153.82 8.26 143.48 15.55 143.48 28.27C143.48 43.23 158.40 45.32 171.56 47.17C181.63 48.58 190.33 49.80 190.33 56.41C190.33 64.56 179.59 65.44 174.98 65.44C163.74 65.44 157.38 61.15 157.04 53.37L157.03 53.06L141.96 53.06L141.97 53.39C142.22 72.13 159.81 76.06 174.53 76.06C181.77 76.06 205.40 74.55 205.40 55.07C205.40 39.19 189.22 37.21 176.21 35.61Z\"/><path d=\"M265.67 34.80L226.86 34.80L226.86 10.04L212.86 10.04L212.86 74.28L226.86 74.28L226.86 45.42L265.67 45.42L265.67 74.28L279.68 74.28L279.68 10.04L265.67 10.04L265.67 34.80Z\"/><path d=\"M306.03 10.04L292.03 10.04L292.03 74.28L344.69 74.28L344.69 63.12L306.03 63.12L306.03 10.04Z\"/><path d=\"M399.79 46.26C399.79 54.35 399.79 65.44 382.30 65.44C364.90 65.44 364.90 54.35 364.90 46.26L364.90 10.04L350.89 10.04L350.89 46.61C350.89 56.90 350.89 76.06 382.30 76.06C413.80 76.06 413.80 56.90 413.80 46.61L413.80 10.04L399.79 10.04L399.79 46.26Z\"/><path d=\"M460.91 41.18L485.83 10.04L468.88 10.04L452.57 31.90L436.88 10.04L419.39 10.04L443.87 41.18L417.69 74.28L435.00 74.28L452.30 51.08L469.41 74.28L487.17 74.28L460.91 41.18Z\"/><path d=\"M69.03 74.30L43.87 74.30L24.70 50.61L5.70 73.26L5.70 10.08L20.53 10.08L20.53 38.04L47.51 10.08L65.03 10.06L29.35 47.08L46.73 47.08L69.03 74.30Z\"/></svg><span class=\"cb-badge ghost\">Пример</span></div><div class=\"mid\"><div><h3>Сертификат партнёра</h3><p>Покажите QR-код на кассе — покупка закрепится за вами.</p><code id=\"cb-hero-code\">KL-7Q4M-2026</code></div><div class=\"cb-qrwrap\"><div class=\"cb-qr\" id=\"cb-qr\" aria-hidden=\"true\"></div><i class=\"cb-scan\" aria-hidden=\"true\"></i></div></div></div><div class=\"cb-chip\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M36 12L12 36\"/><circle cx=\"15\" cy=\"15\" r=\"5\"/><circle cx=\"33\" cy=\"33\" r=\"5\"/></g></svg><div>Кэшбэк начислен<span>+ 750 000 сум</span><small style=\"font-size:11px;opacity:.7\">пример</small></div></div></div></div></div></section><section class=\"cb-how\" aria-labelledby=\"cb-how-h\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Как это работает</span><h2 class=\"h-section\" id=\"cb-how-h\">Три шага <em>до кэшбэка</em></h2></div><p class=\"lead\">Без договоров и отчётов: сертификат привязан к вам, покупка — к сертификату.</p></div><ol class=\"cb-steps\"><li class=\"cb-step\"><span class=\"no\">01</span><span class=\"ic\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"17\" r=\"7\"/><path d=\"M5 40c1-8 7-12 13-12s12 4 13 12M31 11a6 6 0 1 1 3 12M36 28c4 2 7 6 7 12\"/></g></svg></span><h3>Приведите клиента</h3><p>Порекомендуйте Kashlux заказчику и получите у консультанта личный QR-сертификат.</p></li><li class=\"cb-step\"><span class=\"no\">02</span><span class=\"ic\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"38\" height=\"26\" rx=\"2\"/><path d=\"M5 18h38M11 30h8\"/></g></svg></span><h3>Клиент покупает</h3><p>Клиент показывает QR-код на кассе в любом из 4 шоурумов или вводит код при заказе онлайн.</p></li><li class=\"cb-step\"><span class=\"no\">03</span><span class=\"ic\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M36 12L12 36\"/><circle cx=\"15\" cy=\"15\" r=\"5\"/><circle cx=\"33\" cy=\"33\" r=\"5\"/></g></svg></span><h3>Вы получаете кэшбэк</h3><p>Заполните заявку ниже: имя, телефон, сумма покупки и код сертификата. Чек прикладывать не обязательно.</p></li></ol><div class=\"cb-who\"><div><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg><p><b>Мастерам</b><span>Вы подбираете оборудование для объекта. Клиент получает сантехнику от официального дилера, а вы — вознаграждение.</span></p></div><div><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg><p><b>Дизайнерам</b><span>Вы комплектуете проект брендами Geberit, Roca, Duravit, Hansgrohe и получаете кэшбэк с каждой покупки по проекту.</span></p></div></div></div></section><section class=\"cb-calc\" id=\"cb-calc\" aria-labelledby=\"cb-calc-h\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Калькулятор</span><h2 class=\"h-section\" id=\"cb-calc-h\">Сколько <em>вы получите</em></h2></div><p class=\"lead\">Передвиньте ползунок: чем больше сумма покупки клиента, тем выше процент. <span class=\"cb-badge\">Пример</span></p></div><div class=\"cb-cgrid\"><div class=\"cb-panel\"><div class=\"row\"><label for=\"cb-range\">Сумма покупки клиента</label><output id=\"cb-out\" for=\"cb-range\">15 000 000 сум</output></div><input class=\"cb-range\" type=\"range\" id=\"cb-range\" min=\"1000000\" max=\"100000000\" step=\"500000\" value=\"15000000\"><div class=\"cb-scale\"><span>1 млн</span><span>100 млн сум</span></div><div class=\"cb-tiers\" id=\"cb-tiers\"><div class=\"cb-tier\" data-min=\"0\"><span>3%</span><small>до 10 млн</small></div><div class=\"cb-tier\" data-min=\"10000000\"><span>5%</span><small>10–30 млн</small></div><div class=\"cb-tier\" data-min=\"30000000\"><span>7%</span><small>30–60 млн</small></div><div class=\"cb-tier\" data-min=\"60000000\"><span>10%</span><small>от 60 млн</small></div></div><p class=\"cb-fine\">*Проценты и пороги — демо-данные. Действующие условия программы уточняйте у консультанта.</p></div><div class=\"cb-result\" aria-live=\"polite\"><span class=\"cb-badge grey\" style=\"align-self:flex-start\">Пример</span><small>Ваш кэшбэк</small><div class=\"cb-sum\" id=\"cb-sum\">750 000 сум</div><small id=\"cb-rate\">Ставка 5% от суммы покупки</small><div class=\"cb-bar\"><i id=\"cb-bar\"></i></div><p class=\"cb-next\" id=\"cb-next\"></p><a href=\"#cb-claim\" class=\"btn btn-navy\">Подать заявку на кэшбэк <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a></div></div></div></section><section class=\"cb-claim\" id=\"cb-claim\" aria-labelledby=\"cb-claim-h\"><div class=\"wrap\"><div class=\"cb-fgrid\"><div><span class=\"eyebrow\">Заявка</span><h2 class=\"h-section\" id=\"cb-claim-h\" style=\"margin-top:18px\">Получить <em>кэшбэк</em></h2><p class=\"lead\" style=\"margin-top:18px\">Заявку можно отправить сразу после покупки клиента. Если вы открыли ссылку из QR-кода, код сертификата уже введён.</p><ul class=\"cb-list\"><li>Все поля, кроме чека, обязательны</li><li>Один сертификат — одна заявка на кэшбэк</li><li>Консультант свяжется с вами по указанному номеру</li></ul><div class=\"cb-demo\"><b>Демо-режим.</b> Форма не отправляет данные. Попробуйте коды: <code tabindex=\"0\" role=\"button\" data-code=\"KL-2026-0417\">KL-2026-0417</code> — действительный, <code tabindex=\"0\" role=\"button\" data-code=\"KL-USED\">KL-USED</code> — уже использован, любой другой — не существует.</div></div><form class=\"cb-form\" id=\"cb-form\" novalidate><h3>Заявка на кэшбэк</h3><div class=\"field\"><label for=\"cb-name\">Имя <span class=\"req\">*</span></label><input id=\"cb-name\" name=\"name\" autocomplete=\"name\" placeholder=\"Как к вам обращаться\"></div><div class=\"field\"><label for=\"cb-phone\">Номер телефона <span class=\"req\">*</span></label><input id=\"cb-phone\" name=\"phone\" type=\"tel\" inputmode=\"tel\" autocomplete=\"tel\" placeholder=\"+998 __ ___ __ __\"></div><div class=\"field\"><label for=\"cb-amount\">Сумма покупки, сум <span class=\"req\">*</span></label><input id=\"cb-amount\" name=\"amount\" inputmode=\"numeric\" placeholder=\"например, 12 500 000\"></div><div class=\"field\"><label for=\"cb-token\">Код сертификата <span class=\"req\">*</span></label><div class=\"cb-code\" id=\"cb-codebox\"><input id=\"cb-token\" name=\"token\" placeholder=\"KL-XXXX-XXXX\" autocapitalize=\"characters\" spellcheck=\"false\"><span class=\"lock\">из QR-кода</span></div></div><div class=\"field cb-file\"><span style=\"font-size:13px;font-weight:600\">Чек о покупке <span style=\"color:var(--muted);font-weight:500\">(необязательно)</span></span><label class=\"cb-drop\" id=\"cb-drop\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l18-8 18 8v18l-18 8-18-8zM6 15l18 8 18-8M24 23v18\"/></g></svg><span><b id=\"cb-fname\">Прикрепите фото или PDF чека</b><span id=\"cb-fhint\">Перетащите файл сюда или нажмите, чтобы выбрать (до 10 МБ)</span></span><input type=\"file\" id=\"cb-file\" accept=\"image/*,.pdf\"></label></div><div class=\"cb-alert bad\" id=\"cb-alert\" role=\"alert\"></div><button class=\"btn btn-orange\" type=\"submit\" id=\"cb-submit\">Отправить заявку <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></button><div class=\"cb-done\" role=\"status\" aria-live=\"polite\"><span class=\"ring\"><svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><h3>Заявка на кэшбэк принята</h3><p id=\"cb-done-t\">Консультант проверит покупку и свяжется с вами в течение рабочего дня.</p><button type=\"button\" id=\"cb-again\">Отправить ещё одну заявку</button></div></form></div></div></section><section class=\"cb-faq\" aria-labelledby=\"cb-faq-h\"><div class=\"wrap\"><div class=\"cb-qgrid\"><div><span class=\"eyebrow\">Вопросы</span><h2 class=\"h-section\" id=\"cb-faq-h\" style=\"margin-top:18px\">Частые <em>вопросы</em></h2><p class=\"lead\" style=\"margin-top:18px\">Не нашли ответ — позвоните: <a href=\"tel:+998951461616\" style=\"color:var(--orange-deep);font-weight:600;white-space:nowrap\">+998 95 146 16 16</a>, Пн–Сб 09:00–18:00.</p></div><div class=\"cb-acc\"><details open><summary>Как получить QR-сертификат?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Приходите в любой шоурум Kashlux или позвоните консультанту. Сертификат оформляют на ваше имя и номер телефона. Его можно передать клиенту как QR-код или ссылку.</div></details><details><summary>Код вставился сам, и его нельзя изменить. Что делать?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Так и должно быть. Если вы открыли ссылку из QR-кода, код сертификата вводится автоматически и блокируется, чтобы не было ошибок. Заполните остальные поля и отправьте заявку.</div></details><details><summary>Почему появляется ошибка «Сертификат не существует»?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Проверьте код: он указан под QR-кодом и начинается с KL-. Если код верный, а ошибка не исчезает, свяжитесь с консультантом.</div></details><details><summary>Можно ли использовать сертификат повторно?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Нет. На один сертификат принимается одна заявка. При повторной попытке форма сообщит, что сертификат уже использован. Для нового клиента получите новый сертификат.</div></details><details><summary>Обязательно ли прикладывать чек?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Нет. Но с чеком проверка идёт быстрее: консультанту не нужно искать покупку по сумме и дате.</div></details></div></div></div></section><section class=\"cb-cta\" aria-labelledby=\"cb-cta-h\"><div class=\"wrap\"><div class=\"cb-ctabox\"><svg class=\"kmk\" viewBox=\"0 0 460 466\" aria-hidden=\"true\"><path d=\"M456.36 462.43L277.61 462.43L141.41 294.13L6.37 455.03L6.37 6.20L111.72 6.20L111.72 204.87L303.46 6.20L427.92 6.08L174.44 269.10L297.91 269.10L456.36 462.43Z\"/></svg><div><h2 id=\"cb-cta-h\">Станьте партнёром Kashlux</h2><p>Приходите в шоурум на пр. Шарафа Рашидова, 16. Мы расскажем об условиях и сразу оформим первый сертификат.</p></div><div class=\"acts\"><a href=\"/contact#book\" class=\"btn btn-navy kl-magnet\">Записаться в шоурум <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"tel:+998951461616\" class=\"btn btn-line\">Позвонить</a></div></div></div></section>\n"},"uz":{"page":"\n<section class=\"cb-hero\" id=\"top\"><div class=\"wrap\"><div class=\"cb-hgrid\"><div><nav class=\"cb-crumbs\" aria-label=\"Navigatsiya\"><a href=\"/\">Boş sahifa</a> / Hamkorlar uçun keşbek</nav><span class=\"eyebrow\">Hamkorlik dasturi</span><h1><span>Ustalar va dizaynerlar</span> uçun keşbek</h1><p class=\"lead\">Kashluxni mijozlaringizga tavsiya qilasizmi? Sizga şaxsiy QR-sertifikat beramiz. Mijoz u orqali şourumda yoki onlayn xarid qiladi, Siz esa xarid summasining bir qismini olasiz.</p><div class=\"cb-acts\"><a href=\"#cb-claim\" class=\"btn btn-orange kl-magnet\">Keşbek oliş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"#cb-calc\" class=\"btn btn-line\">Hisoblaş</a></div><div class=\"cb-tags\"><span><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg>Santexniklar va örnatuvçi ustalar</span><span><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg>Interyer dizaynerlari</span><span><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 41V9h20v32M28 19h12v22M4 41h40M14 15h2M20 15h2M14 22h2M20 22h2M14 29h2M20 29h2M33 26h2M33 33h2\"/></g></svg>Prorablar va brigadalar</span></div></div><div class=\"cb-stage\"><div class=\"cb-cert\" aria-label=\"QR-sertifikat namunasi\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"top\"><svg class=\"wm\" viewBox=\"0 0 495 80\" aria-hidden=\"true\"><path d=\"M115.45 47.89L94.51 47.89L105.07 22.27L115.45 47.89M113.38 10.04L97.11 10.04L68.70 73.82L68.50 74.28L83.64 74.28L90.23 58.52L119.73 58.52L126.32 74.08L126.41 74.28L141.99 74.28L113.47 10.23L113.38 10.04Z\"/><path d=\"M176.21 35.61C166.45 34.41 158.02 33.37 158.02 27.29C158.02 19.98 167.08 18.88 172.48 18.88C183.40 18.88 187.75 24.02 188.19 28.83L188.22 29.13L203.30 29.13L203.27 28.77C202.03 15.35 191.17 8.26 171.86 8.26C153.82 8.26 143.48 15.55 143.48 28.27C143.48 43.23 158.40 45.32 171.56 47.17C181.63 48.58 190.33 49.80 190.33 56.41C190.33 64.56 179.59 65.44 174.98 65.44C163.74 65.44 157.38 61.15 157.04 53.37L157.03 53.06L141.96 53.06L141.97 53.39C142.22 72.13 159.81 76.06 174.53 76.06C181.77 76.06 205.40 74.55 205.40 55.07C205.40 39.19 189.22 37.21 176.21 35.61Z\"/><path d=\"M265.67 34.80L226.86 34.80L226.86 10.04L212.86 10.04L212.86 74.28L226.86 74.28L226.86 45.42L265.67 45.42L265.67 74.28L279.68 74.28L279.68 10.04L265.67 10.04L265.67 34.80Z\"/><path d=\"M306.03 10.04L292.03 10.04L292.03 74.28L344.69 74.28L344.69 63.12L306.03 63.12L306.03 10.04Z\"/><path d=\"M399.79 46.26C399.79 54.35 399.79 65.44 382.30 65.44C364.90 65.44 364.90 54.35 364.90 46.26L364.90 10.04L350.89 10.04L350.89 46.61C350.89 56.90 350.89 76.06 382.30 76.06C413.80 76.06 413.80 56.90 413.80 46.61L413.80 10.04L399.79 10.04L399.79 46.26Z\"/><path d=\"M460.91 41.18L485.83 10.04L468.88 10.04L452.57 31.90L436.88 10.04L419.39 10.04L443.87 41.18L417.69 74.28L435.00 74.28L452.30 51.08L469.41 74.28L487.17 74.28L460.91 41.18Z\"/><path d=\"M69.03 74.30L43.87 74.30L24.70 50.61L5.70 73.26L5.70 10.08L20.53 10.08L20.53 38.04L47.51 10.08L65.03 10.06L29.35 47.08L46.73 47.08L69.03 74.30Z\"/></svg><span class=\"cb-badge ghost\">Namuna</span></div><div class=\"mid\"><div><h3>Hamkor sertifikati</h3><p>QR-kodni kassada körsating — xarid Sizga biriktiriladi.</p><code id=\"cb-hero-code\">KL-7Q4M-2026</code></div><div class=\"cb-qrwrap\"><div class=\"cb-qr\" id=\"cb-qr\" aria-hidden=\"true\"></div><i class=\"cb-scan\" aria-hidden=\"true\"></i></div></div></div><div class=\"cb-chip\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M36 12L12 36\"/><circle cx=\"15\" cy=\"15\" r=\"5\"/><circle cx=\"33\" cy=\"33\" r=\"5\"/></g></svg><div>Keşbek hisoblandi<span>+ 750 000 söm</span><small style=\"font-size:11px;opacity:.7\">namuna</small></div></div></div></div></div></section><section class=\"cb-how\" aria-labelledby=\"cb-how-h\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Bu qanday işlaydi</span><h2 class=\"h-section\" id=\"cb-how-h\"><em>Keşbekkaça</em> uç qadam</h2></div><p class=\"lead\">Şartnoma va hisobotlarsiz: sertifikat Sizga, xarid esa sertifikatga boğlangan.</p></div><ol class=\"cb-steps\"><li class=\"cb-step\"><span class=\"no\">01</span><span class=\"ic\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"17\" r=\"7\"/><path d=\"M5 40c1-8 7-12 13-12s12 4 13 12M31 11a6 6 0 1 1 3 12M36 28c4 2 7 6 7 12\"/></g></svg></span><h3>Mijozni olib keling</h3><p>Kashluxni buyurtmaçingizga tavsiya qiling va maslahatçidan şaxsiy QR-sertifikat oling.</p></li><li class=\"cb-step\"><span class=\"no\">02</span><span class=\"ic\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"38\" height=\"26\" rx=\"2\"/><path d=\"M5 18h38M11 30h8\"/></g></svg></span><h3>Mijoz xarid qiladi</h3><p>Mijoz 4 ta şourumdan istalganining kassasida QR-kodni körsatadi yoki onlayn buyurtmada kodni kiritadi.</p></li><li class=\"cb-step\"><span class=\"no\">03</span><span class=\"ic\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M36 12L12 36\"/><circle cx=\"15\" cy=\"15\" r=\"5\"/><circle cx=\"33\" cy=\"33\" r=\"5\"/></g></svg></span><h3>Siz keşbek olasiz</h3><p>Quyidagi arizani töldiring: ism, telefon, xarid summasi va sertifikat kodi. Çekni ilova qiliş şart emas.</p></li></ol><div class=\"cb-who\"><div><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg><p><b>Ustalarga</b><span>Siz obyekt uçun uskuna tanlaysiz. Mijoz santexnikani rasmiy dilerdan oladi, Siz esa mukofot olasiz.</span></p></div><div><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg><p><b>Dizaynerlarga</b><span>Siz loyihani Geberit, Roca, Duravit, Hansgrohe brendlari bilan jihozlaysiz va loyiha böyiça har bir xariddan keşbek olasiz.</span></p></div></div></div></section><section class=\"cb-calc\" id=\"cb-calc\" aria-labelledby=\"cb-calc-h\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Kalkulyator</span><h2 class=\"h-section\" id=\"cb-calc-h\"><em>Qança olasiz</em></h2></div><p class=\"lead\">Slayderni suring: mijoz xaridi summasi qança katta bölsa, foiz şunça yuqori. <span class=\"cb-badge\">Namuna</span></p></div><div class=\"cb-cgrid\"><div class=\"cb-panel\"><div class=\"row\"><label for=\"cb-range\">Mijozning xarid summasi</label><output id=\"cb-out\" for=\"cb-range\">15 000 000 söm</output></div><input class=\"cb-range\" type=\"range\" id=\"cb-range\" min=\"1000000\" max=\"100000000\" step=\"500000\" value=\"15000000\"><div class=\"cb-scale\"><span>1 mln</span><span>100 mln söm</span></div><div class=\"cb-tiers\" id=\"cb-tiers\"><div class=\"cb-tier\" data-min=\"0\"><span>3%</span><small>10 mln gaça</small></div><div class=\"cb-tier\" data-min=\"10000000\"><span>5%</span><small>10–30 mln</small></div><div class=\"cb-tier\" data-min=\"30000000\"><span>7%</span><small>30–60 mln</small></div><div class=\"cb-tier\" data-min=\"60000000\"><span>10%</span><small>60 mln dan</small></div></div><p class=\"cb-fine\">*Foizlar va çegaralar — demo-maʼlumotlar. Dasturning amaldagi şartlarini maslahatçidan sörang.</p></div><div class=\"cb-result\" aria-live=\"polite\"><span class=\"cb-badge grey\" style=\"align-self:flex-start\">Namuna</span><small>Sizning keşbekingiz</small><div class=\"cb-sum\" id=\"cb-sum\">750 000 söm</div><small id=\"cb-rate\">Stavka: xarid summasining 5%</small><div class=\"cb-bar\"><i id=\"cb-bar\"></i></div><p class=\"cb-next\" id=\"cb-next\"></p><a href=\"#cb-claim\" class=\"btn btn-navy\">Keşbek uçun ariza beriş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a></div></div></div></section><section class=\"cb-claim\" id=\"cb-claim\" aria-labelledby=\"cb-claim-h\"><div class=\"wrap\"><div class=\"cb-fgrid\"><div><span class=\"eyebrow\">Ariza</span><h2 class=\"h-section\" id=\"cb-claim-h\" style=\"margin-top:18px\"><em>Keşbek</em> oliş</h2><p class=\"lead\" style=\"margin-top:18px\">Arizani mijoz xarid qilgandan keyin darhol yuboriş mumkin. Agar havolani QR-koddan oçgan bölsangiz, sertifikat kodi allaqaçon kiritilgan.</p><ul class=\"cb-list\"><li>Çekdan taşqari barça maydonlar majburiy</li><li>Bitta sertifikat — keşbek uçun bitta ariza</li><li>Maslahatçi körsatilgan raqam orqali Siz bilan boğlanadi</li></ul><div class=\"cb-demo\"><b>Demo-rejim.</b> Forma maʼlumotlarni yubormaydi. Quyidagi kodlarni sinab köring: <code tabindex=\"0\" role=\"button\" data-code=\"KL-2026-0417\">KL-2026-0417</code> — amal qiladi, <code tabindex=\"0\" role=\"button\" data-code=\"KL-USED\">KL-USED</code> — allaqaçon işlatilgan, boşqa har qanday kod — mavjud emas.</div></div><form class=\"cb-form\" id=\"cb-form\" novalidate><h3>Keşbek uçun ariza</h3><div class=\"field\"><label for=\"cb-name\">Ism <span class=\"req\">*</span></label><input id=\"cb-name\" name=\"name\" autocomplete=\"name\" placeholder=\"Sizga qanday murojaat qilaylik\"></div><div class=\"field\"><label for=\"cb-phone\">Telefon raqami <span class=\"req\">*</span></label><input id=\"cb-phone\" name=\"phone\" type=\"tel\" inputmode=\"tel\" autocomplete=\"tel\" placeholder=\"+998 __ ___ __ __\"></div><div class=\"field\"><label for=\"cb-amount\">Xarid summasi, söm <span class=\"req\">*</span></label><input id=\"cb-amount\" name=\"amount\" inputmode=\"numeric\" placeholder=\"masalan, 12 500 000\"></div><div class=\"field\"><label for=\"cb-token\">Sertifikat kodi <span class=\"req\">*</span></label><div class=\"cb-code\" id=\"cb-codebox\"><input id=\"cb-token\" name=\"token\" placeholder=\"KL-XXXX-XXXX\" autocapitalize=\"characters\" spellcheck=\"false\"><span class=\"lock\">QR-koddan</span></div></div><div class=\"field cb-file\"><span style=\"font-size:13px;font-weight:600\">Xarid çeki <span style=\"color:var(--muted);font-weight:500\">(ixtiyoriy)</span></span><label class=\"cb-drop\" id=\"cb-drop\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l18-8 18 8v18l-18 8-18-8zM6 15l18 8 18-8M24 23v18\"/></g></svg><span><b id=\"cb-fname\">Çek rasmini yoki PDF faylini biriktiring</b><span id=\"cb-fhint\">Faylni şu yerga torting yoki tanlaş uçun bosing (10 MB gaça)</span></span><input type=\"file\" id=\"cb-file\" accept=\"image/*,.pdf\"></label></div><div class=\"cb-alert bad\" id=\"cb-alert\" role=\"alert\"></div><button class=\"btn btn-orange\" type=\"submit\" id=\"cb-submit\">Arizani yuboriş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></button><div class=\"cb-done\" role=\"status\" aria-live=\"polite\"><span class=\"ring\"><svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><h3>Keşbek uçun ariza qabul qilindi</h3><p id=\"cb-done-t\">Maslahatçi xaridni tekşiradi va iş kuni davomida Siz bilan boğlanadi.</p><button type=\"button\" id=\"cb-again\">Yana bitta ariza yuboriş</button></div></form></div></div></section><section class=\"cb-faq\" aria-labelledby=\"cb-faq-h\"><div class=\"wrap\"><div class=\"cb-qgrid\"><div><span class=\"eyebrow\">Savollar</span><h2 class=\"h-section\" id=\"cb-faq-h\" style=\"margin-top:18px\">Köp beriladigan <em>savollar</em></h2><p class=\"lead\" style=\"margin-top:18px\">Javob topilmasa, qönğiroq qiling: <a href=\"tel:+998951461616\" style=\"color:var(--orange-deep);font-weight:600;white-space:nowrap\">+998 95 146 16 16</a>, Du–Ş 09:00–18:00.</p></div><div class=\"cb-acc\"><details open><summary>QR-sertifikatni qanday oliş mumkin?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Istalgan Kashlux şourumiga keling yoki maslahatçiga qönğiroq qiling. Sertifikat Sizning ismingiz va telefon raqamingizga rasmiylaştiriladi. Uni mijozga QR-kod yoki havola sifatida beriş mumkin.</div></details><details><summary>Kod özi kiritildi va uni özgartirib bölmaydi. Nima qiliş kerak?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Bu şunday möljallangan. Havolani QR-koddan oçsangiz, sertifikat kodi avtomatik kiritiladi va xato bölmasligi uçun bloklanadi. Qolgan maydonlarni töldiring va arizani yuboring.</div></details><details><summary>Nega «Sertifikat mavjud emas» xatosi çiqadi?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Kodni tekşiring: u QR-kod ostida yozilgan va KL- bilan boşlanadi. Kod töğri bölsa-yu, xato yöqolmasa, maslahatçi bilan boğlaning.</div></details><details><summary>Sertifikatdan qayta foydalaniş mumkinmi?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Yöq. Bitta sertifikatga bitta ariza qabul qilinadi. Qayta urinişda forma sertifikat allaqaçon işlatilganini körsatadi. Yangi mijoz uçun yangi sertifikat oling.</div></details><details><summary>Çekni ilova qiliş şartmi?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Yöq. Lekin çek bilan tekşiruv tezroq ötadi: maslahatçi xaridni summa va sana böyiça qidirmaydi.</div></details></div></div></div></section><section class=\"cb-cta\" aria-labelledby=\"cb-cta-h\"><div class=\"wrap\"><div class=\"cb-ctabox\"><svg class=\"kmk\" viewBox=\"0 0 460 466\" aria-hidden=\"true\"><path d=\"M456.36 462.43L277.61 462.43L141.41 294.13L6.37 455.03L6.37 6.20L111.72 6.20L111.72 204.87L303.46 6.20L427.92 6.08L174.44 269.10L297.91 269.10L456.36 462.43Z\"/></svg><div><h2 id=\"cb-cta-h\">Kashlux hamkori böling</h2><p>Şarof Raşidov şoh köçasi, 16-uydagi şourumga keling. Şartlar haqida aytib beramiz va birinçi sertifikatni darhol rasmiylaştiramiz.</p></div><div class=\"acts\"><a href=\"/contact#book\" class=\"btn btn-navy kl-magnet\">Şourumga yoziliş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"tel:+998951461616\" class=\"btn btn-line\">Qönğiroq qiliş</a></div></div></div></section>\n"},"en":{"page":"\n<section class=\"cb-hero\" id=\"top\"><div class=\"wrap\"><div class=\"cb-hgrid\"><div><nav class=\"cb-crumbs\" aria-label=\"Navigation\"><a href=\"/\">Home</a> / Partner cashback</nav><span class=\"eyebrow\">Partner program</span><h1>Cashback for <span>installers and designers</span></h1><p class=\"lead\">Do you recommend Kashlux to your clients? We will give you a personal QR certificate. The client uses it to buy in a showroom or online, and you get a share of the purchase amount.</p><div class=\"cb-acts\"><a href=\"#cb-claim\" class=\"btn btn-orange kl-magnet\">Get cashback <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"#cb-calc\" class=\"btn btn-line\">Calculate</a></div><div class=\"cb-tags\"><span><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg>Plumbers and installers</span><span><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg>Interior designers</span><span><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 41V9h20v32M28 19h12v22M4 41h40M14 15h2M20 15h2M14 22h2M20 22h2M14 29h2M20 29h2M33 26h2M33 33h2\"/></g></svg>Site managers and crews</span></div></div><div class=\"cb-stage\"><div class=\"cb-cert\" aria-label=\"Sample QR certificate\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"top\"><svg class=\"wm\" viewBox=\"0 0 495 80\" aria-hidden=\"true\"><path d=\"M115.45 47.89L94.51 47.89L105.07 22.27L115.45 47.89M113.38 10.04L97.11 10.04L68.70 73.82L68.50 74.28L83.64 74.28L90.23 58.52L119.73 58.52L126.32 74.08L126.41 74.28L141.99 74.28L113.47 10.23L113.38 10.04Z\"/><path d=\"M176.21 35.61C166.45 34.41 158.02 33.37 158.02 27.29C158.02 19.98 167.08 18.88 172.48 18.88C183.40 18.88 187.75 24.02 188.19 28.83L188.22 29.13L203.30 29.13L203.27 28.77C202.03 15.35 191.17 8.26 171.86 8.26C153.82 8.26 143.48 15.55 143.48 28.27C143.48 43.23 158.40 45.32 171.56 47.17C181.63 48.58 190.33 49.80 190.33 56.41C190.33 64.56 179.59 65.44 174.98 65.44C163.74 65.44 157.38 61.15 157.04 53.37L157.03 53.06L141.96 53.06L141.97 53.39C142.22 72.13 159.81 76.06 174.53 76.06C181.77 76.06 205.40 74.55 205.40 55.07C205.40 39.19 189.22 37.21 176.21 35.61Z\"/><path d=\"M265.67 34.80L226.86 34.80L226.86 10.04L212.86 10.04L212.86 74.28L226.86 74.28L226.86 45.42L265.67 45.42L265.67 74.28L279.68 74.28L279.68 10.04L265.67 10.04L265.67 34.80Z\"/><path d=\"M306.03 10.04L292.03 10.04L292.03 74.28L344.69 74.28L344.69 63.12L306.03 63.12L306.03 10.04Z\"/><path d=\"M399.79 46.26C399.79 54.35 399.79 65.44 382.30 65.44C364.90 65.44 364.90 54.35 364.90 46.26L364.90 10.04L350.89 10.04L350.89 46.61C350.89 56.90 350.89 76.06 382.30 76.06C413.80 76.06 413.80 56.90 413.80 46.61L413.80 10.04L399.79 10.04L399.79 46.26Z\"/><path d=\"M460.91 41.18L485.83 10.04L468.88 10.04L452.57 31.90L436.88 10.04L419.39 10.04L443.87 41.18L417.69 74.28L435.00 74.28L452.30 51.08L469.41 74.28L487.17 74.28L460.91 41.18Z\"/><path d=\"M69.03 74.30L43.87 74.30L24.70 50.61L5.70 73.26L5.70 10.08L20.53 10.08L20.53 38.04L47.51 10.08L65.03 10.06L29.35 47.08L46.73 47.08L69.03 74.30Z\"/></svg><span class=\"cb-badge ghost\">Example</span></div><div class=\"mid\"><div><h3>Partner certificate</h3><p>Show the QR code at the checkout, and the purchase will be linked to you.</p><code id=\"cb-hero-code\">KL-7Q4M-2026</code></div><div class=\"cb-qrwrap\"><div class=\"cb-qr\" id=\"cb-qr\" aria-hidden=\"true\"></div><i class=\"cb-scan\" aria-hidden=\"true\"></i></div></div></div><div class=\"cb-chip\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M36 12L12 36\"/><circle cx=\"15\" cy=\"15\" r=\"5\"/><circle cx=\"33\" cy=\"33\" r=\"5\"/></g></svg><div>Cashback credited<span>+ 750,000 UZS</span><small style=\"font-size:11px;opacity:.7\">example</small></div></div></div></div></div></section><section class=\"cb-how\" aria-labelledby=\"cb-how-h\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">How it works</span><h2 class=\"h-section\" id=\"cb-how-h\">Three steps <em>to cashback</em></h2></div><p class=\"lead\">No contracts or reports: the certificate is linked to you, and the purchase is linked to the certificate.</p></div><ol class=\"cb-steps\"><li class=\"cb-step\"><span class=\"no\">01</span><span class=\"ic\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"17\" r=\"7\"/><path d=\"M5 40c1-8 7-12 13-12s12 4 13 12M31 11a6 6 0 1 1 3 12M36 28c4 2 7 6 7 12\"/></g></svg></span><h3>Refer a client</h3><p>Recommend Kashlux to your customer and get a personal QR certificate from a consultant.</p></li><li class=\"cb-step\"><span class=\"no\">02</span><span class=\"ic\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"38\" height=\"26\" rx=\"2\"/><path d=\"M5 18h38M11 30h8\"/></g></svg></span><h3>The client buys</h3><p>The client shows the QR code at the checkout in any of our 4 showrooms or enters the code when ordering online.</p></li><li class=\"cb-step\"><span class=\"no\">03</span><span class=\"ic\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M36 12L12 36\"/><circle cx=\"15\" cy=\"15\" r=\"5\"/><circle cx=\"33\" cy=\"33\" r=\"5\"/></g></svg></span><h3>You get cashback</h3><p>Fill in the request below: name, phone number, purchase amount and certificate code. A receipt is not required.</p></li></ol><div class=\"cb-who\"><div><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg><p><b>For installers</b><span>You select the equipment for the site. The client gets plumbing fixtures from an official dealer, and you get a reward.</span></p></div><div><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg><p><b>For designers</b><span>You fit out the project with Geberit, Roca, Duravit and Hansgrohe and get cashback on every purchase for the project.</span></p></div></div></div></section><section class=\"cb-calc\" id=\"cb-calc\" aria-labelledby=\"cb-calc-h\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Calculator</span><h2 class=\"h-section\" id=\"cb-calc-h\">How much <em>you will get</em></h2></div><p class=\"lead\">Move the slider: the larger the client’s purchase, the higher the percentage. <span class=\"cb-badge\">Example</span></p></div><div class=\"cb-cgrid\"><div class=\"cb-panel\"><div class=\"row\"><label for=\"cb-range\">Client’s purchase amount</label><output id=\"cb-out\" for=\"cb-range\">15,000,000 UZS</output></div><input class=\"cb-range\" type=\"range\" id=\"cb-range\" min=\"1000000\" max=\"100000000\" step=\"500000\" value=\"15000000\"><div class=\"cb-scale\"><span>1 million</span><span>100 million UZS</span></div><div class=\"cb-tiers\" id=\"cb-tiers\"><div class=\"cb-tier\" data-min=\"0\"><span>3%</span><small>up to 10 million</small></div><div class=\"cb-tier\" data-min=\"10000000\"><span>5%</span><small>10–30 million</small></div><div class=\"cb-tier\" data-min=\"30000000\"><span>7%</span><small>30–60 million</small></div><div class=\"cb-tier\" data-min=\"60000000\"><span>10%</span><small>from 60 million</small></div></div><p class=\"cb-fine\">*Percentages and thresholds are demo data. Ask a consultant about the current program terms.</p></div><div class=\"cb-result\" aria-live=\"polite\"><span class=\"cb-badge grey\" style=\"align-self:flex-start\">Example</span><small>Your cashback</small><div class=\"cb-sum\" id=\"cb-sum\">750,000 UZS</div><small id=\"cb-rate\">Rate: 5% of the purchase amount</small><div class=\"cb-bar\"><i id=\"cb-bar\"></i></div><p class=\"cb-next\" id=\"cb-next\"></p><a href=\"#cb-claim\" class=\"btn btn-navy\">Submit a cashback request <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a></div></div></div></section><section class=\"cb-claim\" id=\"cb-claim\" aria-labelledby=\"cb-claim-h\"><div class=\"wrap\"><div class=\"cb-fgrid\"><div><span class=\"eyebrow\">Request</span><h2 class=\"h-section\" id=\"cb-claim-h\" style=\"margin-top:18px\">Get <em>cashback</em></h2><p class=\"lead\" style=\"margin-top:18px\">You can send the request right after the client’s purchase. If you opened the link from the QR code, the certificate code is already filled in.</p><ul class=\"cb-list\"><li>All fields except the receipt are required</li><li>One certificate, one cashback request</li><li>A consultant will contact you at the number you provide</li></ul><div class=\"cb-demo\"><b>Demo mode.</b> The form does not send any data. Try the codes: <code tabindex=\"0\" role=\"button\" data-code=\"KL-2026-0417\">KL-2026-0417</code> — valid, <code tabindex=\"0\" role=\"button\" data-code=\"KL-USED\">KL-USED</code> — already used; any other code does not exist.</div></div><form class=\"cb-form\" id=\"cb-form\" novalidate><h3>Cashback request</h3><div class=\"field\"><label for=\"cb-name\">Name <span class=\"req\">*</span></label><input id=\"cb-name\" name=\"name\" autocomplete=\"name\" placeholder=\"How should we address you\"></div><div class=\"field\"><label for=\"cb-phone\">Phone number <span class=\"req\">*</span></label><input id=\"cb-phone\" name=\"phone\" type=\"tel\" inputmode=\"tel\" autocomplete=\"tel\" placeholder=\"+998 __ ___ __ __\"></div><div class=\"field\"><label for=\"cb-amount\">Purchase amount, UZS <span class=\"req\">*</span></label><input id=\"cb-amount\" name=\"amount\" inputmode=\"numeric\" placeholder=\"for example, 12,500,000\"></div><div class=\"field\"><label for=\"cb-token\">Certificate code <span class=\"req\">*</span></label><div class=\"cb-code\" id=\"cb-codebox\"><input id=\"cb-token\" name=\"token\" placeholder=\"KL-XXXX-XXXX\" autocapitalize=\"characters\" spellcheck=\"false\"><span class=\"lock\">from the QR code</span></div></div><div class=\"field cb-file\"><span style=\"font-size:13px;font-weight:600\">Purchase receipt <span style=\"color:var(--muted);font-weight:500\">(optional)</span></span><label class=\"cb-drop\" id=\"cb-drop\"><svg aria-hidden=\"true\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l18-8 18 8v18l-18 8-18-8zM6 15l18 8 18-8M24 23v18\"/></g></svg><span><b id=\"cb-fname\">Attach a photo or PDF of the receipt</b><span id=\"cb-fhint\">Drag the file here or click to select it (up to 10 MB)</span></span><input type=\"file\" id=\"cb-file\" accept=\"image/*,.pdf\"></label></div><div class=\"cb-alert bad\" id=\"cb-alert\" role=\"alert\"></div><button class=\"btn btn-orange\" type=\"submit\" id=\"cb-submit\">Send request <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></button><div class=\"cb-done\" role=\"status\" aria-live=\"polite\"><span class=\"ring\"><svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><h3>Cashback request received</h3><p id=\"cb-done-t\">A consultant will check the purchase and contact you within one working day.</p><button type=\"button\" id=\"cb-again\">Send another request</button></div></form></div></div></section><section class=\"cb-faq\" aria-labelledby=\"cb-faq-h\"><div class=\"wrap\"><div class=\"cb-qgrid\"><div><span class=\"eyebrow\">Questions</span><h2 class=\"h-section\" id=\"cb-faq-h\" style=\"margin-top:18px\">Frequently asked <em>questions</em></h2><p class=\"lead\" style=\"margin-top:18px\">Didn’t find an answer? Call: <a href=\"tel:+998951461616\" style=\"color:var(--orange-deep);font-weight:600;white-space:nowrap\">+998 95 146 16 16</a>, Mon–Sat, 09:00–18:00.</p></div><div class=\"cb-acc\"><details open><summary>How do I get a QR certificate?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Visit any Kashlux showroom or call a consultant. The certificate is issued in your name and phone number. You can give it to the client as a QR code or a link.</div></details><details><summary>The code was filled in automatically and cannot be changed. What should I do?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">This is correct. If you opened the link from the QR code, the certificate code is filled in automatically and locked to prevent mistakes. Fill in the other fields and send the request.</div></details><details><summary>Why do I see the error “Certificate does not exist”?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">Check the code: it is printed under the QR code and starts with KL-. If the code is correct and the error remains, contact a consultant.</div></details><details><summary>Can a certificate be used again?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">No. One certificate allows one request. If you try again, the form will tell you that the certificate has already been used. Get a new certificate for a new client.</div></details><details><summary>Is a receipt required?<i aria-hidden=\"true\"></i></summary><div class=\"ans\">No. But with a receipt the check is faster: the consultant does not need to look up the purchase by amount and date.</div></details></div></div></div></section><section class=\"cb-cta\" aria-labelledby=\"cb-cta-h\"><div class=\"wrap\"><div class=\"cb-ctabox\"><svg class=\"kmk\" viewBox=\"0 0 460 466\" aria-hidden=\"true\"><path d=\"M456.36 462.43L277.61 462.43L141.41 294.13L6.37 455.03L6.37 6.20L111.72 6.20L111.72 204.87L303.46 6.20L427.92 6.08L174.44 269.10L297.91 269.10L456.36 462.43Z\"/></svg><div><h2 id=\"cb-cta-h\">Become a Kashlux partner</h2><p>Visit our showroom at 16 Sharaf Rashidov Avenue. We will explain the terms and issue your first certificate right away.</p></div><div class=\"acts\"><a href=\"/contact#book\" class=\"btn btn-navy kl-magnet\">Book a showroom visit <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"tel:+998951461616\" class=\"btn btn-line\">Call</a></div></div></div></section>\n"}},"js":{"ru":{"page":["\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n","\n(() => {\n  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;\n  const fmt = (n) => String(Math.round(n)).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');\n  const $ = (id) => document.getElementById(id);\n\n  /* ---- decorative QR (pseudo-random, not a real code) ---- */\n  (() => {\n    const N = 21; let seed = 7;\n    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);\n    let r = '';\n    const finder = (x, y) => '<rect x=\"' + x + '\" y=\"' + y + '\" width=\"7\" height=\"7\" fill=\"#211E36\"/><rect x=\"' + (x + 1) + '\" y=\"' + (y + 1) + '\" width=\"5\" height=\"5\" fill=\"#fff\"/><rect x=\"' + (x + 2) + '\" y=\"' + (y + 2) + '\" width=\"3\" height=\"3\" fill=\"#211E36\"/>';\n    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {\n      const inF = (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);\n      if (!inF && rnd() > .52) r += '<rect x=\"' + x + '\" y=\"' + y + '\" width=\"1\" height=\"1\"/>';\n    }\n    $('cb-qr').innerHTML = '<svg viewBox=\"0 0 ' + N + ' ' + N + '\" shape-rendering=\"crispEdges\"><g fill=\"#211E36\">' + r + '</g>' + finder(0, 0) + finder(N - 7, 0) + finder(0, N - 7) + '<rect x=\"8.5\" y=\"8.5\" width=\"4\" height=\"4\" fill=\"#E08F45\"/></svg>';\n  })();\n\n  /* ---- calculator ---- */\n  const TIERS = [[0, 3], [10e6, 5], [30e6, 7], [60e6, 10]];\n  const range = $('cb-range'), out = $('cb-out'), sum = $('cb-sum'), rate = $('cb-rate'), bar = $('cb-bar'), next = $('cb-next');\n  const tierEls = [...document.querySelectorAll('.cb-tier')];\n  let lastTier = -1;\n  const calc = () => {\n    const v = +range.value;\n    let ti = 0;\n    TIERS.forEach((t, i) => { if (v >= t[0]) ti = i; });\n    const pct = TIERS[ti][1];\n    out.textContent = fmt(v) + ' сум';\n    sum.textContent = fmt(v * pct / 100) + ' сум';\n    rate.textContent = 'Ставка ' + pct + '% от суммы покупки';\n    tierEls.forEach((el, i) => el.classList.toggle('on', i === ti));\n    bar.style.width = ((v - 1e6) / (99e6) * 100).toFixed(1) + '%';\n    if (ti < TIERS.length - 1) {\n      const need = TIERS[ti + 1][0] - v;\n      next.textContent = 'Ещё ' + fmt(need) + ' сум — и ставка вырастет до ' + TIERS[ti + 1][1] + '%.';\n    } else next.textContent = 'Максимальная ставка программы.';\n    if (ti !== lastTier && lastTier !== -1 && !reduce) { sum.classList.remove('bump'); void sum.offsetWidth; sum.classList.add('bump'); }\n    lastTier = ti;\n  };\n  range.addEventListener('input', calc); calc();\n\n  /* ---- claim form ---- */\n  const form = $('cb-form'), name = $('cb-name'), phone = $('cb-phone'), amount = $('cb-amount'), token = $('cb-token');\n  const alertBox = $('cb-alert');\n  const mask = (v) => {\n    let d = v.replace(/\\D/g, '');\n    if (d.startsWith('998')) d = d.slice(3);\n    d = d.slice(0, 9);\n    let o = '+998';\n    if (d.length) o += ' ' + d.slice(0, 2);\n    if (d.length > 2) o += ' ' + d.slice(2, 5);\n    if (d.length > 5) o += ' ' + d.slice(5, 7);\n    if (d.length > 7) o += ' ' + d.slice(7, 9);\n    return o;\n  };\n  phone.addEventListener('focus', () => { if (!phone.value) phone.value = '+998 '; });\n  phone.addEventListener('input', () => (phone.value = mask(phone.value)));\n  amount.addEventListener('input', () => {\n    const d = amount.value.replace(/\\D/g, '').replace(/^0+/, '').slice(0, 12);\n    amount.value = d ? fmt(+d) : '';\n  });\n  token.addEventListener('input', () => {\n    const p = token.selectionStart, before = token.value;\n    token.value = token.value.toUpperCase().replace(/[^A-Z0-9-]/g, '');\n    if (before.length === token.value.length) token.setSelectionRange(p, p);\n  });\n  [name, phone, amount, token].forEach((el) => el.addEventListener('input', () => { el.closest('.field').classList.remove('err'); alertBox.classList.remove('show'); }));\n\n  // prefill from ?token=\n  const qTok = new URLSearchParams(location.search).get('token');\n  const lockToken = (v) => {\n    token.value = v.toUpperCase().slice(0, 40);\n    token.readOnly = true;\n    token.setAttribute('aria-describedby', 'cb-lock-note');\n    $('cb-codebox').classList.add('locked');\n    const s = $('cb-codebox').querySelector('.lock'); s.id = 'cb-lock-note';\n  };\n  if (qTok) lockToken(qTok);\n\n  document.querySelectorAll('.cb-demo code').forEach((c) => {\n    const use = () => {\n      if (token.readOnly) return;\n      token.value = c.dataset.code;\n      token.closest('.field').classList.remove('err');\n      alertBox.classList.remove('show');\n      token.focus();\n    };\n    c.addEventListener('click', use);\n    c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); use(); } });\n  });\n\n  // file input\n  const file = $('cb-file'), drop = $('cb-drop');\n  const showFile = () => {\n    const f = file.files[0];\n    if (!f) return;\n    if (f.size > 10 * 1024 * 1024) { $('cb-fname').textContent = 'Файл больше 10 МБ'; $('cb-fhint').textContent = 'Выберите файл меньшего размера'; file.value = ''; return; }\n    $('cb-fname').textContent = f.name;\n    $('cb-fhint').textContent = (f.size / 1024 / 1024).toFixed(2) + ' МБ · нажмите, чтобы заменить';\n  };\n  file.addEventListener('change', showFile);\n  ['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('drag'); }));\n  ['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('drag'); }));\n  drop.addEventListener('drop', (e) => { if (e.dataTransfer.files.length) { file.files = e.dataTransfer.files; showFile(); } });\n\n  const fail = (msg, cls, el) => {\n    alertBox.className = 'cb-alert show ' + cls;\n    alertBox.textContent = msg;\n    if (el) { el.closest('.field').classList.add('err'); el.focus(); }\n  };\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const empty = [];\n    if (!name.value.trim()) empty.push(name);\n    if (phone.value.replace(/\\D/g, '').length !== 12) empty.push(phone);\n    if (!amount.value.replace(/\\D/g, '')) empty.push(amount);\n    if (!token.value.trim()) empty.push(token);\n    form.querySelectorAll('.field').forEach((f) => f.classList.remove('err'));\n    if (empty.length) {\n      empty.forEach((el) => el.closest('.field').classList.add('err'));\n      fail('Заполните все обязательные поля.' + (empty.includes(phone) && phone.value.length > 5 ? ' Номер телефона: +998 XX XXX XX XX.' : ''), 'bad');\n      empty[0].focus();\n      return;\n    }\n    const code = token.value.trim().toUpperCase();\n    const btn = $('cb-submit');\n    btn.disabled = true;\n    btn.firstChild.textContent = 'Проверяем сертификат… ';\n    setTimeout(() => {\n      btn.disabled = false;\n      btn.firstChild.textContent = 'Отправить заявку ';\n      if (code === 'KL-USED') return fail('Этот сертификат уже использован. На один сертификат принимается одна заявка.', 'warn', token.readOnly ? null : token);\n      if (!code.startsWith('KL-')) return fail('Сертификат не существует. Проверьте код под QR-кодом.', 'bad', token.readOnly ? null : token);\n      alertBox.classList.remove('show');\n      $('cb-done-t').textContent = name.value.trim() + ', заявка по сертификату ' + code + ' на сумму ' + amount.value + ' сум передана консультанту. Мы позвоним на ' + phone.value + ' в течение рабочего дня.';\n      form.classList.add('sent');\n      $('cb-again').focus();\n    }, reduce ? 0 : 700);\n  });\n  $('cb-again').addEventListener('click', () => {\n    form.classList.remove('sent');\n    [name, phone, amount].forEach((el) => (el.value = ''));\n    if (!token.readOnly) token.value = '';\n    file.value = ''; $('cb-fname').textContent = 'Прикрепите фото или PDF чека'; $('cb-fhint').textContent = 'Перетащите файл сюда или нажмите, чтобы выбрать (до 10 МБ)';\n    name.focus();\n  });\n})();\n"]},"uz":{"page":["\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n","\n(() => {\n  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;\n  const fmt = (n) => String(Math.round(n)).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');\n  const $ = (id) => document.getElementById(id);\n\n  /* ---- decorative QR (pseudo-random, not a real code) ---- */\n  (() => {\n    const N = 21; let seed = 7;\n    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);\n    let r = '';\n    const finder = (x, y) => '<rect x=\"' + x + '\" y=\"' + y + '\" width=\"7\" height=\"7\" fill=\"#211E36\"/><rect x=\"' + (x + 1) + '\" y=\"' + (y + 1) + '\" width=\"5\" height=\"5\" fill=\"#fff\"/><rect x=\"' + (x + 2) + '\" y=\"' + (y + 2) + '\" width=\"3\" height=\"3\" fill=\"#211E36\"/>';\n    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {\n      const inF = (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);\n      if (!inF && rnd() > .52) r += '<rect x=\"' + x + '\" y=\"' + y + '\" width=\"1\" height=\"1\"/>';\n    }\n    $('cb-qr').innerHTML = '<svg viewBox=\"0 0 ' + N + ' ' + N + '\" shape-rendering=\"crispEdges\"><g fill=\"#211E36\">' + r + '</g>' + finder(0, 0) + finder(N - 7, 0) + finder(0, N - 7) + '<rect x=\"8.5\" y=\"8.5\" width=\"4\" height=\"4\" fill=\"#E08F45\"/></svg>';\n  })();\n\n  /* ---- calculator ---- */\n  const TIERS = [[0, 3], [10e6, 5], [30e6, 7], [60e6, 10]];\n  const range = $('cb-range'), out = $('cb-out'), sum = $('cb-sum'), rate = $('cb-rate'), bar = $('cb-bar'), next = $('cb-next');\n  const tierEls = [...document.querySelectorAll('.cb-tier')];\n  let lastTier = -1;\n  const calc = () => {\n    const v = +range.value;\n    let ti = 0;\n    TIERS.forEach((t, i) => { if (v >= t[0]) ti = i; });\n    const pct = TIERS[ti][1];\n    out.textContent = fmt(v) + ' söm';\n    sum.textContent = fmt(v * pct / 100) + ' söm';\n    rate.textContent = 'Stavka ' + pct + '% xarid summasidan';\n    tierEls.forEach((el, i) => el.classList.toggle('on', i === ti));\n    bar.style.width = ((v - 1e6) / (99e6) * 100).toFixed(1) + '%';\n    if (ti < TIERS.length - 1) {\n      const need = TIERS[ti + 1][0] - v;\n      next.textContent = 'Yana ' + fmt(need) + ' söm — va stavka oşadi: ' + TIERS[ti + 1][1] + '%.';\n    } else next.textContent = 'Dasturdagi eng yuqori stavka.';\n    if (ti !== lastTier && lastTier !== -1 && !reduce) { sum.classList.remove('bump'); void sum.offsetWidth; sum.classList.add('bump'); }\n    lastTier = ti;\n  };\n  range.addEventListener('input', calc); calc();\n\n  /* ---- claim form ---- */\n  const form = $('cb-form'), name = $('cb-name'), phone = $('cb-phone'), amount = $('cb-amount'), token = $('cb-token');\n  const alertBox = $('cb-alert');\n  const mask = (v) => {\n    let d = v.replace(/\\D/g, '');\n    if (d.startsWith('998')) d = d.slice(3);\n    d = d.slice(0, 9);\n    let o = '+998';\n    if (d.length) o += ' ' + d.slice(0, 2);\n    if (d.length > 2) o += ' ' + d.slice(2, 5);\n    if (d.length > 5) o += ' ' + d.slice(5, 7);\n    if (d.length > 7) o += ' ' + d.slice(7, 9);\n    return o;\n  };\n  phone.addEventListener('focus', () => { if (!phone.value) phone.value = '+998 '; });\n  phone.addEventListener('input', () => (phone.value = mask(phone.value)));\n  amount.addEventListener('input', () => {\n    const d = amount.value.replace(/\\D/g, '').replace(/^0+/, '').slice(0, 12);\n    amount.value = d ? fmt(+d) : '';\n  });\n  token.addEventListener('input', () => {\n    const p = token.selectionStart, before = token.value;\n    token.value = token.value.toUpperCase().replace(/[^A-Z0-9-]/g, '');\n    if (before.length === token.value.length) token.setSelectionRange(p, p);\n  });\n  [name, phone, amount, token].forEach((el) => el.addEventListener('input', () => { el.closest('.field').classList.remove('err'); alertBox.classList.remove('show'); }));\n\n  // prefill from ?token=\n  const qTok = new URLSearchParams(location.search).get('token');\n  const lockToken = (v) => {\n    token.value = v.toUpperCase().slice(0, 40);\n    token.readOnly = true;\n    token.setAttribute('aria-describedby', 'cb-lock-note');\n    $('cb-codebox').classList.add('locked');\n    const s = $('cb-codebox').querySelector('.lock'); s.id = 'cb-lock-note';\n  };\n  if (qTok) lockToken(qTok);\n\n  document.querySelectorAll('.cb-demo code').forEach((c) => {\n    const use = () => {\n      if (token.readOnly) return;\n      token.value = c.dataset.code;\n      token.closest('.field').classList.remove('err');\n      alertBox.classList.remove('show');\n      token.focus();\n    };\n    c.addEventListener('click', use);\n    c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); use(); } });\n  });\n\n  // file input\n  const file = $('cb-file'), drop = $('cb-drop');\n  const showFile = () => {\n    const f = file.files[0];\n    if (!f) return;\n    if (f.size > 10 * 1024 * 1024) { $('cb-fname').textContent = 'Fayl 10 MB dan katta'; $('cb-fhint').textContent = 'Kiçikroq hajmdagi faylni tanlang'; file.value = ''; return; }\n    $('cb-fname').textContent = f.name;\n    $('cb-fhint').textContent = (f.size / 1024 / 1024).toFixed(2) + ' MB · almaştiriş uçun bosing';\n  };\n  file.addEventListener('change', showFile);\n  ['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('drag'); }));\n  ['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('drag'); }));\n  drop.addEventListener('drop', (e) => { if (e.dataTransfer.files.length) { file.files = e.dataTransfer.files; showFile(); } });\n\n  const fail = (msg, cls, el) => {\n    alertBox.className = 'cb-alert show ' + cls;\n    alertBox.textContent = msg;\n    if (el) { el.closest('.field').classList.add('err'); el.focus(); }\n  };\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const empty = [];\n    if (!name.value.trim()) empty.push(name);\n    if (phone.value.replace(/\\D/g, '').length !== 12) empty.push(phone);\n    if (!amount.value.replace(/\\D/g, '')) empty.push(amount);\n    if (!token.value.trim()) empty.push(token);\n    form.querySelectorAll('.field').forEach((f) => f.classList.remove('err'));\n    if (empty.length) {\n      empty.forEach((el) => el.closest('.field').classList.add('err'));\n      fail('Barça majburiy maydonlarni töldiring.' + (empty.includes(phone) && phone.value.length > 5 ? ' Telefon raqami: +998 XX XXX XX XX.' : ''), 'bad');\n      empty[0].focus();\n      return;\n    }\n    const code = token.value.trim().toUpperCase();\n    const btn = $('cb-submit');\n    btn.disabled = true;\n    btn.firstChild.textContent = 'Sertifikat tekşirilmoqda… ';\n    setTimeout(() => {\n      btn.disabled = false;\n      btn.firstChild.textContent = 'Arizani yuboriş ';\n      if (code === 'KL-USED') return fail('Bu sertifikat allaqaçon işlatilgan. Bitta sertifikatga bitta ariza qabul qilinadi.', 'warn', token.readOnly ? null : token);\n      if (!code.startsWith('KL-')) return fail('Sertifikat mavjud emas. QR-kod ostidagi kodni tekşiring.', 'bad', token.readOnly ? null : token);\n      alertBox.classList.remove('show');\n      $('cb-done-t').textContent = name.value.trim() + ', arizangiz maslahatçiga yuborildi. Sertifikat: ' + code + ' — summa: ' + amount.value + ' söm. Sizga qönğiroq qilamiz: ' + phone.value + ' (iş kuni davomida).';\n      form.classList.add('sent');\n      $('cb-again').focus();\n    }, reduce ? 0 : 700);\n  });\n  $('cb-again').addEventListener('click', () => {\n    form.classList.remove('sent');\n    [name, phone, amount].forEach((el) => (el.value = ''));\n    if (!token.readOnly) token.value = '';\n    file.value = ''; $('cb-fname').textContent = 'Çek rasmini yoki PDF faylini biriktiring'; $('cb-fhint').textContent = 'Faylni şu yerga torting yoki tanlaş uçun bosing (10 MB gaça)';\n    name.focus();\n  });\n})();\n"]},"en":{"page":["\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n","\n(() => {\n  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;\n  const fmt = (n) => String(Math.round(n)).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n  const $ = (id) => document.getElementById(id);\n\n  /* ---- decorative QR (pseudo-random, not a real code) ---- */\n  (() => {\n    const N = 21; let seed = 7;\n    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);\n    let r = '';\n    const finder = (x, y) => '<rect x=\"' + x + '\" y=\"' + y + '\" width=\"7\" height=\"7\" fill=\"#211E36\"/><rect x=\"' + (x + 1) + '\" y=\"' + (y + 1) + '\" width=\"5\" height=\"5\" fill=\"#fff\"/><rect x=\"' + (x + 2) + '\" y=\"' + (y + 2) + '\" width=\"3\" height=\"3\" fill=\"#211E36\"/>';\n    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {\n      const inF = (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);\n      if (!inF && rnd() > .52) r += '<rect x=\"' + x + '\" y=\"' + y + '\" width=\"1\" height=\"1\"/>';\n    }\n    $('cb-qr').innerHTML = '<svg viewBox=\"0 0 ' + N + ' ' + N + '\" shape-rendering=\"crispEdges\"><g fill=\"#211E36\">' + r + '</g>' + finder(0, 0) + finder(N - 7, 0) + finder(0, N - 7) + '<rect x=\"8.5\" y=\"8.5\" width=\"4\" height=\"4\" fill=\"#E08F45\"/></svg>';\n  })();\n\n  /* ---- calculator ---- */\n  const TIERS = [[0, 3], [10e6, 5], [30e6, 7], [60e6, 10]];\n  const range = $('cb-range'), out = $('cb-out'), sum = $('cb-sum'), rate = $('cb-rate'), bar = $('cb-bar'), next = $('cb-next');\n  const tierEls = [...document.querySelectorAll('.cb-tier')];\n  let lastTier = -1;\n  const calc = () => {\n    const v = +range.value;\n    let ti = 0;\n    TIERS.forEach((t, i) => { if (v >= t[0]) ti = i; });\n    const pct = TIERS[ti][1];\n    out.textContent = fmt(v) + ' UZS';\n    sum.textContent = fmt(v * pct / 100) + ' UZS';\n    rate.textContent = 'Rate ' + pct + '% of the purchase amount';\n    tierEls.forEach((el, i) => el.classList.toggle('on', i === ti));\n    bar.style.width = ((v - 1e6) / (99e6) * 100).toFixed(1) + '%';\n    if (ti < TIERS.length - 1) {\n      const need = TIERS[ti + 1][0] - v;\n      next.textContent = 'Add another ' + fmt(need) + ' UZS, and the rate will rise to ' + TIERS[ti + 1][1] + '%.';\n    } else next.textContent = 'This is the maximum rate of the program.';\n    if (ti !== lastTier && lastTier !== -1 && !reduce) { sum.classList.remove('bump'); void sum.offsetWidth; sum.classList.add('bump'); }\n    lastTier = ti;\n  };\n  range.addEventListener('input', calc); calc();\n\n  /* ---- claim form ---- */\n  const form = $('cb-form'), name = $('cb-name'), phone = $('cb-phone'), amount = $('cb-amount'), token = $('cb-token');\n  const alertBox = $('cb-alert');\n  const mask = (v) => {\n    let d = v.replace(/\\D/g, '');\n    if (d.startsWith('998')) d = d.slice(3);\n    d = d.slice(0, 9);\n    let o = '+998';\n    if (d.length) o += ' ' + d.slice(0, 2);\n    if (d.length > 2) o += ' ' + d.slice(2, 5);\n    if (d.length > 5) o += ' ' + d.slice(5, 7);\n    if (d.length > 7) o += ' ' + d.slice(7, 9);\n    return o;\n  };\n  phone.addEventListener('focus', () => { if (!phone.value) phone.value = '+998 '; });\n  phone.addEventListener('input', () => (phone.value = mask(phone.value)));\n  amount.addEventListener('input', () => {\n    const d = amount.value.replace(/\\D/g, '').replace(/^0+/, '').slice(0, 12);\n    amount.value = d ? fmt(+d) : '';\n  });\n  token.addEventListener('input', () => {\n    const p = token.selectionStart, before = token.value;\n    token.value = token.value.toUpperCase().replace(/[^A-Z0-9-]/g, '');\n    if (before.length === token.value.length) token.setSelectionRange(p, p);\n  });\n  [name, phone, amount, token].forEach((el) => el.addEventListener('input', () => { el.closest('.field').classList.remove('err'); alertBox.classList.remove('show'); }));\n\n  // prefill from ?token=\n  const qTok = new URLSearchParams(location.search).get('token');\n  const lockToken = (v) => {\n    token.value = v.toUpperCase().slice(0, 40);\n    token.readOnly = true;\n    token.setAttribute('aria-describedby', 'cb-lock-note');\n    $('cb-codebox').classList.add('locked');\n    const s = $('cb-codebox').querySelector('.lock'); s.id = 'cb-lock-note';\n  };\n  if (qTok) lockToken(qTok);\n\n  document.querySelectorAll('.cb-demo code').forEach((c) => {\n    const use = () => {\n      if (token.readOnly) return;\n      token.value = c.dataset.code;\n      token.closest('.field').classList.remove('err');\n      alertBox.classList.remove('show');\n      token.focus();\n    };\n    c.addEventListener('click', use);\n    c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); use(); } });\n  });\n\n  // file input\n  const file = $('cb-file'), drop = $('cb-drop');\n  const showFile = () => {\n    const f = file.files[0];\n    if (!f) return;\n    if (f.size > 10 * 1024 * 1024) { $('cb-fname').textContent = 'The file is larger than 10 MB'; $('cb-fhint').textContent = 'Choose a smaller file'; file.value = ''; return; }\n    $('cb-fname').textContent = f.name;\n    $('cb-fhint').textContent = (f.size / 1024 / 1024).toFixed(2) + ' MB · click to replace';\n  };\n  file.addEventListener('change', showFile);\n  ['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('drag'); }));\n  ['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('drag'); }));\n  drop.addEventListener('drop', (e) => { if (e.dataTransfer.files.length) { file.files = e.dataTransfer.files; showFile(); } });\n\n  const fail = (msg, cls, el) => {\n    alertBox.className = 'cb-alert show ' + cls;\n    alertBox.textContent = msg;\n    if (el) { el.closest('.field').classList.add('err'); el.focus(); }\n  };\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const empty = [];\n    if (!name.value.trim()) empty.push(name);\n    if (phone.value.replace(/\\D/g, '').length !== 12) empty.push(phone);\n    if (!amount.value.replace(/\\D/g, '')) empty.push(amount);\n    if (!token.value.trim()) empty.push(token);\n    form.querySelectorAll('.field').forEach((f) => f.classList.remove('err'));\n    if (empty.length) {\n      empty.forEach((el) => el.closest('.field').classList.add('err'));\n      fail('Fill in all required fields.' + (empty.includes(phone) && phone.value.length > 5 ? ' Phone number format: +998 XX XXX XX XX.' : ''), 'bad');\n      empty[0].focus();\n      return;\n    }\n    const code = token.value.trim().toUpperCase();\n    const btn = $('cb-submit');\n    btn.disabled = true;\n    btn.firstChild.textContent = 'Checking the certificate… ';\n    setTimeout(() => {\n      btn.disabled = false;\n      btn.firstChild.textContent = 'Send request ';\n      if (code === 'KL-USED') return fail('This certificate has already been used. One certificate allows one request.', 'warn', token.readOnly ? null : token);\n      if (!code.startsWith('KL-')) return fail('The certificate does not exist. Check the code under the QR code.', 'bad', token.readOnly ? null : token);\n      alertBox.classList.remove('show');\n      $('cb-done-t').textContent = name.value.trim() + ', your request for certificate ' + code + ' for a purchase of ' + amount.value + ' UZS has been passed to a consultant. We will call you at ' + phone.value + ' within one business day.';\n      form.classList.add('sent');\n      $('cb-again').focus();\n    }, reduce ? 0 : 700);\n  });\n  $('cb-again').addEventListener('click', () => {\n    form.classList.remove('sent');\n    [name, phone, amount].forEach((el) => (el.value = ''));\n    if (!token.readOnly) token.value = '';\n    file.value = ''; $('cb-fname').textContent = 'Attach a photo or PDF of the receipt'; $('cb-fhint').textContent = 'Drag a file here or click to choose one (up to 10 MB)';\n    name.focus();\n  });\n})();\n"]}}};

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
  sc.src = BASE_URL + file + '?v=23d58853'; // a new build number per release, so browsers don't reuse an old copy
  sc.async = true;
  document.head.appendChild(sc);
}


const TEXT = {
  ru: {
    sending: 'Отправляем…',
    sent: 'Спасибо, заявка принята. Консультант позвонит вам в течение 30 минут в рабочее время.',
    error: 'Заявка не отправлена. Позвоните нам: +998 95 146 16 16',
    fields: 'Укажите имя и телефон.',
    route: 'Маршрут',
    video: 'Видео',
    close: 'Закрыть видео',
  },
  uz: {
    sending: 'Yuborilmoqda…',
    sent: 'Rahmat, ariza qabul qilindi. Maslahatçi iş vaqtida 30 daqiqa içida Sizga qönğiroq qiladi.',
    error: 'Ariza yuborilmadi. Bizga qönğiroq qiling: +998 95 146 16 16',
    fields: 'Ismingiz va telefon raqamingizni kiriting.',
    route: 'Yönaliş',
    video: 'Video',
    close: 'Videoni yopish',
  },
  en: {
    sending: 'Sending…',
    sent: 'Thank you, your request has been received. A consultant will call you within 30 minutes during business hours.',
    error: 'The request was not sent. Please call us: +998 95 146 16 16',
    fields: 'Please enter your name and phone number.',
    route: 'Directions',
    video: 'Video',
    close: 'Close video',
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
  // the footer elements keep the old Wix footer's height (they cover its hidden content): fill the rest in navy
  ':host([name="footer"]){background:#211E36}' +
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

// Uzbek pages live under /uz and English pages under /en on kashlux.uz: send internal links there too.
// English is a hidden Wix language for now (no /en pages yet): it is reached with ?lang=en, kept on every link
const PREFIX = { ru: '', uz: '/uz', en: '' };
const QUERY_LANG = { en: 'en' };
const withParam = (h, k, v) => {
  if (!h || h.startsWith('//') || new RegExp('[?&]' + k + '=').test(h)) return h;
  const [path, hash] = h.split('#');
  return path + (path.includes('?') ? '&' : '?') + k + '=' + encodeURIComponent(v) + (hash ? '#' + hash : '');
};
const LANG_RE = /^\/(uz|en)(?=\/|$|[?#])/;
function localize(root, lang) {
  const pre = PREFIX[lang];
  const q = QUERY_LANG[lang];
  if (!pre && !q) return;
  root.querySelectorAll('a[href^="/"]').forEach((a) => {
    const h = a.getAttribute('href');
    if (h.startsWith('//') || LANG_RE.test(h)) return;
    if (pre) a.setAttribute('href', h === '/' ? pre : pre + h);
    else a.setAttribute('href', withParam(h, 'lang', q));
  });
}
// the Wix editor (its canvas or a custom element's preview frame), not the live or test site
const inEditorPreview = () => /parastorage\.com$|editor\.wix|wixstudio|editorx/.test(location.hostname) || /CustomElementPreview/.test(location.pathname);
const pageLang = () => {
  // the Wix editor marks its canvas with the editor's own language: there only the address counts
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en') return 'en';
  // in the editor each custom element is drawn in its own preview frame (static.parastorage.com/…/
  // CustomElementPreviewIframe…), which carries no site language at all: show the main language, Uzbek
  const preview = /parastorage\.com$/.test(location.hostname) || /CustomElementPreview/.test(location.pathname);
  if (preview) return 'uz';
  const editor = /editor\.wix|wixstudio|editorx/.test(location.hostname);
  const l = editor ? '' : (document.documentElement.lang || '').toLowerCase();
  const m = location.pathname.match(LANG_RE);
  return l.startsWith('uz') || (m && m[1] === 'uz') ? 'uz' : l.startsWith('en') || (m && m[1] === 'en') ? 'en' : 'ru';
};
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
const plainPath = () => location.pathname.replace(LANG_RE, '') || '/';

// Wix Stores (catalog, product page, cart) has no Uzbek: on Uzbek pages it shows English texts, and the store's
// category names are Russian/English in both languages. Swap whole texts (exact match only) in the page itself;
// the header file runs this once per page.
const STORE_TEXTS = {
  uz: {
    'Home': 'Boş sahifa', 'Bosh sahifa': 'Boş sahifa', 'Узбекистан': 'Özbekiston', 'Uzbekistan': 'Özbekiston', 'All Products': 'Barça mahsulotlar', 'Installations': 'Installyatsiyalar',
    'Price (low to high)': 'Avval arzonlari', 'Price (high to low)': 'Avval qimmatlari', 'Newest': 'Avval yangilari',
    'Name A-Z': 'Nomi A–Z', 'Name Z-A': 'Nomi Z–A', 'Sort by': 'Saralaş', 'Filter by': 'Filtrlaş',
    'Order summary': 'Buyurtma', 'Subtotal': 'Oraliq jami', 'Delivery': 'Yetkazib beriş', 'Shipping': 'Yetkazib beriş',
    'FREE': 'Bepul', 'Free': 'Bepul', 'Total': 'Jami', 'Estimated Total': 'Taxminiy jami', 'Secure Checkout': 'Xavfsiz tölov',
    'Quantity': 'Miqdori', 'Out of stock': 'Sotuvda yöq', 'In stock': 'Sotuvda bor', 'Add to Cart': 'Savatga',
    'View Cart': 'Savatni oçiş', 'Continue Browsing': 'Xaridni davom ettiriş', 'Clear Filters': 'Filtrlarni tozalaş',
    'Read More': 'Batafsil', 'Read Less': 'Qisqaroq',
    'Аксессуары': 'Aksessuarlar', 'Биде': 'Bide', 'Ванны': 'Vannalar', 'Врезные раковины': 'Örnatma rakovinalar',
    'Душевые системы': 'Duş tizimlari', 'Зеркало': 'Oynalar', 'Инсталяция': 'Installyatsiya',
    'Накладные раковины': 'Ustki rakovinalar', 'Напольные биде': 'Polga örnatiladigan bide',
    'Напольные раковины': 'Polga örnatiladigan rakovinalar', 'Панель Смыва': 'Suv tuşiriş paneli',
    'Подвесные биде': 'Osma bide', 'Полотенцесушитель': 'Soçiq quritgiç', 'Раковина подвесная': 'Osma rakovina',
    'Раковина со шкафом': 'Tumbali rakovina', 'Раковины': 'Rakovinalar', 'Раковины под столешницу': 'Stol osti rakovinalari',
    'Ручные лейки': 'Qöl duşlari', 'Сифоны для ванны': 'Vanna sifonlari', 'Смесители': 'Aralaştirgiçlar',
    'Смесители для биде': 'Bide uçun aralaştirgiçlar', 'Смесители для ванны и душа': 'Vanna va duş uçun aralaştirgiçlar',
    'Смесители для кухни': 'Oşxona uçun aralaştirgiçlar', 'Смесители для раковины': 'Rakovina uçun aralaştirgiçlar',
    'Унитаз наполный': 'Polga örnatiladigan unitaz', 'Унитаз подвесной': 'Osma unitaz', 'Унитазы': 'Unitazlar',
  },
  ru: { 'All Products': 'Все товары', 'Installations': 'Инсталляции', 'Унитаз наполный': 'Унитаз напольный', 'Инсталяция': 'Инсталляция' },
  en: {
    'Аксессуары': 'Accessories', 'Биде': 'Bidets', 'Ванны': 'Bathtubs', 'Врезные раковины': 'Drop-in sinks',
    'Душевые системы': 'Shower systems', 'Зеркало': 'Mirrors', 'Инсталяция': 'Concealed frames',
    'Накладные раковины': 'Countertop sinks', 'Напольные биде': 'Floor-standing bidets',
    'Напольные раковины': 'Freestanding sinks', 'Панель Смыва': 'Flush plates', 'Подвесные биде': 'Wall-hung bidets',
    'Полотенцесушитель': 'Towel warmers', 'Раковина подвесная': 'Wall-hung sinks', 'Раковина со шкафом': 'Sinks with vanity units',
    'Раковины': 'Sinks', 'Раковины под столешницу': 'Undermount sinks', 'Ручные лейки': 'Hand showers',
    'Сифоны для ванны': 'Bath drains', 'Смесители': 'Faucets', 'Смесители для биде': 'Bidet faucets',
    'Смесители для ванны и душа': 'Bath and shower mixers', 'Смесители для кухни': 'Kitchen faucets',
    'Смесители для раковины': 'Basin faucets', 'Унитаз наполный': 'Floor-standing toilets', 'Унитаз подвесной': 'Wall-hung toilets',
    'Унитазы': 'Toilets', 'Узбекистан': 'Uzbekistan', 'Главная': 'Home', 'Все товары': 'All Products',
  },
};
// English is a hidden Wix language: Wix serves the main language (Uzbek) there, so the shop widgets show the
// Uzbek labels set in the editor. Turn them back into English: the reverse of the Uzbek map for Wix's own English
// labels, plus the labels that were typed in Uzbek directly in the widget settings.
Object.entries(STORE_TEXTS.uz).forEach(([en, uz]) => {
  if (/^[\x20-\x7e]+$/.test(en) && !(uz in STORE_TEXTS.en)) STORE_TEXTS.en[uz] = en;
});
Object.assign(STORE_TEXTS.en, {
  'Böyiça qidiriş': 'Browse by', 'Saralaş': 'Sort by', 'Köproq yuklaş': 'Load more', 'Boş sahifa': 'Home',
  'Barça mahsulotlar': 'All Products',
});
const STORE_RE = { uz: [[/^(\d[\d\s,.]*) products?$/, '$1 ta mahsulot'], [/^(\d[\d\s,.]*) items?$/, '$1 ta mahsulot']], ru: [], en: [] };
function storeTexts() {
  if (window.KL_STORE_TEXTS) return;
  window.KL_STORE_TEXTS = true;
  const lang = pageLang();
  const map = STORE_TEXTS[lang];
  const res = STORE_RE[lang];
  const swap = (node) => {
    const t = node.nodeValue.trim();
    if (!t || t.length > 60) return;
    let v = map[t];
    if (!v) for (const [re, to] of res) if (re.test(t)) { v = t.replace(re, to); break; }
    if (v && v !== t) node.nodeValue = node.nodeValue.replace(t, v);
  };
  const walk = (root) => {
    const it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentNode && /^(SCRIPT|STYLE|NOSCRIPT)$/.test(n.parentNode.nodeName) ? 2 : 1),
    });
    for (let n = it.nextNode(); n; n = it.nextNode()) swap(n);
  };
  // long product descriptions: show the first part with a "more" button, so the order button stays in view
  const MORE = { uz: ['Batafsil', 'Qisqaroq'], en: ['Read more', 'Show less'], ru: ['Подробнее', 'Свернуть'] }[lang];
  const clamp = () => {
    document.querySelectorAll('.wixui-collapsible-text:not([data-kl-clamp])').forEach((box) => {
      const el = box.querySelector('.wixui-collapsible-text__text');
      if (!el || el.scrollHeight < 420) return;
      box.setAttribute('data-kl-clamp', '');
      el.setAttribute('data-kl-clamp', 'closed');
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'wixui-kl-more'; // global.css writes .kl-more; Wix prefixes it
      b.textContent = MORE[0];
      b.onclick = () => {
        const open = el.getAttribute('data-kl-clamp') === 'open';
        el.setAttribute('data-kl-clamp', open ? 'closed' : 'open');
        b.textContent = MORE[open ? 0 : 1];
      };
      box.appendChild(b);
    });
  };
  let queued = false;
  const run = () => { queued = false; walk(document.body); clamp(); };
  const start = () => {
    run();
    new MutationObserver(() => { if (!queued) { queued = true; setTimeout(run, 120); } })
      .observe(document.body, { childList: true, subtree: true, characterData: true });
  };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
}

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

// Wix's login / sign-up window uses the 48px theme heading, so «Зарегистрироваться» is wider than the
// 400px window and gets cut off at both edges. Shrink only that window's titles.
function fitLoginTitles() {
  if (document.querySelector('style[data-kl-login]')) return;
  const st = document.createElement('style');
  st.dataset.klLogin = '';
  st.textContent = '[id^="SM_ROOT_COMP"] h2{font-size:28px!important;line-height:1.2!important;white-space:normal!important}';
  document.head.appendChild(st);
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
  // the proxy's target is a plain object: Wix makes some document methods read-only and non-configurable,
  // and a proxy of `document` itself may not hand out a different (bound) function for those
  const doc = new Proxy({}, {
    get(_, prop) {
      if (prop in find) return find[prop];
      if (prop === 'body') return body;
      const v = Reflect.get(document, prop);
      return typeof v === 'function' ? v.bind(document) : v;
    },
    set(_, prop, value) {
      if (prop === 'title') return true; // the Wix page keeps its own title
      return Reflect.set(document, prop, value);
    },
    has(_, prop) { return prop in find || prop in document; },
  });
  try {
    // eslint-disable-next-line no-new-func
    new Function('document', code)(doc);
  } catch (e) {
    console.warn('kl-section: script of "' + name + '" failed', e); // eslint-disable-line no-console
  }
}

class KlSection extends HTMLElement {
  static get observedAttributes() { return ['name', 'lang', 'status', 'cart', 'member']; }

  connectedCallback() { this.render(); }

  attributeChangedCallback(attr, before, now) {
    if (!this.shadowRoot || before === now) return;
    if (attr === 'status') this.showStatus(now);
    else if (attr === 'cart') this.showCart(now);
    else if (attr === 'member') this.showMember(now);
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
    const a = (this.getAttribute('lang') || '').toLowerCase();
    if (a) return a.startsWith('uz') ? 'uz' : a.startsWith('en') ? 'en' : 'ru';
    return pageLang();
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
    this.fitHost();
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
      try { return (new URL(a.href).pathname.replace(LANG_RE, '') || '/') === here; } catch (e) { return false; }
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

    // language switch: kashlux.uz/page (Russian) ⇄ /uz/page (Uzbek) ⇄ /en/page (English)
    const tail = location.search + location.hash;
    const path = plainPath();
    [root, proot].forEach((r) => $$('.kl-lang a[data-lang]', r).forEach((a) => {
      const to = a.dataset.lang;
      const on = to === lang;
      a.classList.toggle('on', on);
      if (on) a.setAttribute('aria-current', 'true');
      const pre = PREFIX[to] || '';
      const params = new URLSearchParams(location.search);
      params.delete('lang');
      if (QUERY_LANG[to]) params.set('lang', QUERY_LANG[to]);
      const qs = params.toString();
      a.href = (pre ? (path === '/' ? pre : pre + path) : path) + (qs ? '?' + qs : '') + location.hash;
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
    const t = {
      uz: { pages: 'Sahifalar', find: (q) => `«${q}» böyiça qidiriş`, all: 'Butun sayt böyiça qidiruv' },
      en: { pages: 'Pages', find: (q) => `Search for “${q}”`, all: 'Search the whole site and catalog' },
      ru: { pages: 'Страницы', find: (q) => `Искать «${q}»`, all: 'Поиск по всему сайту и каталогу' },
    }[lang];
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
    const searchUrl = (q) => (PREFIX[lang] || '') + '/search?q=' + encodeURIComponent(q) + (rcParam ? '&rc=' + encodeURIComponent(rcParam) : '') + (QUERY_LANG[lang] ? '&lang=' + QUERY_LANG[lang] : '');
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
    // account button: masterPage.js opens the Wix login / sign-up window or the member's account
    const ab = $('#klAcctBtn');
    if (ab) ab.addEventListener('click', () => this.dispatchEvent(new CustomEvent('kl-login', { bubbles: true, composed: true })));
    this.showMember(this.getAttribute('member'));
    fitLoginTitles();
  }

  // logged-in member's initial on the account button (set by masterPage.js; empty = logged out)
  showMember(v) {
    const i = this.shadowRoot && this.shadowRoot.querySelector('.kl-acct-i');
    if (!i) return;
    const t = (v || '').trim();
    i.textContent = t.slice(0, 1).toUpperCase();
    i.hidden = !t;
  }

  // Page elements: the editor's minimum height was set for longer content (and differs per language and
  // screen width), which left an empty gap above the footer. Let the element take its content's height,
  // unless other visible Wix elements share its section (they would show through, as in the footer).
  fitHost() {
    if (inEditorPreview()) return;
    const box = this.parentElement;
    const sec = this.closest('section');
    if (!box || !sec) return;
    const others = [...sec.querySelectorAll('[id^="comp-"]')]
      .filter((n) => !n.contains(this) && !this.contains(n) && n.offsetHeight > 0);
    if (others.length) return;
    box.style.setProperty('min-height', '0', 'important');
    this.style.setProperty('min-height', '0', 'important');
    this.style.setProperty('height', 'auto', 'important');
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
storeTexts();
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
