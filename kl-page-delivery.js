(function () {
// <kl-section> — Kashlux redesign (kl-page-delivery.js) for the Wix editor. GENERATED FILE: don't edit it in Wix.
// Source: design/build/wix/kl-section.template.js + design/build/wix_sections.py (run after build.py).
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-page-delivery.js
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
REG['page'] = {"css":":host{--navy:#211E36;--navy-2:#2B2745;--orange:#E08F45;--orange-deep:#C9752C;--white:#FFFFFF;--grey:#DFDFDE;--grey-2:#ECECEB;--ink:#211E36;--muted:#6E6B7B;--line:rgba(33,30,54,.12);--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--gutter:clamp(16px,4vw,56px);--max:1320px;--r:8px;}*{box-sizing:border-box;margin:0;padding:0}:host{scroll-behavior:smooth}.kl-body{background:var(--grey-2);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}img{display:block;max-width:100%}a{color:inherit;text-decoration:none}button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}svg{display:block;fill:var(--navy)}.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:var(--orange)}.eyebrow::before{content:\"\";width:22px;height:2px;background:currentColor}h1,h2,h3,h4{font-family:var(--head);font-weight:800;letter-spacing:-.01em;line-height:1.08}.h-section{font-size:clamp(30px,4vw,54px)}.h-section em{font-style:normal;color:var(--orange)}.lead{font-size:clamp(16px,1.2vw,18px);color:var(--muted);max-width:52ch}.btn{display:inline-flex;align-items:center;gap:12px;padding:16px 24px;font-size:14px;font-weight:600;border-radius:var(--r);transition:.25s;white-space:nowrap}.btn-orange{background:var(--orange);color:var(--navy)}.btn-orange:hover{background:var(--orange-deep)}.btn-line{border:1.5px solid currentColor}.btn-line:hover{background:var(--white);color:var(--navy);border-color:var(--white)}.arrow{width:18px;height:18px;transition:transform .25s}.btn:hover .arrow{transform:translate(3px,-3px)}.pat-fill{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='80' viewBox='0 0 1 2'%3E%3Cg%3E%3Cpath d='M0 .5L.5 0H1L.5 .5V1H0Z' fill='%23211E36'/%3E%3Cpath d='M1 .5L1.5 0H2L1.5 .5V1H1Z' fill='%23211E36' transform='translate(-1 0)'/%3E%3Cpath d='M0 1.5L.5 1H1L.5 1.5V2H0Z' fill='%23E08F45'/%3E%3C/g%3E%3C/svg%3E\");background-size:40px 80px}.pat-line{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-width='.018'/%3E%3C/svg%3E\");background-size:120px 120px}header{position:fixed;inset:0 0 auto;z-index:50;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);transition:box-shadow .3s}header.solid{box-shadow:0 1px 0 var(--line)}.nav{display:flex;align-items:center;justify-content:space-between;height:80px;gap:24px}.logo svg{height:20px;width:auto}.menu{display:flex;gap:30px;font-size:14px;font-weight:500}.menu a{position:relative;padding:6px 0}.menu a::after{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:0;background:var(--orange);transition:width .25s}.menu a:hover::after{width:100%}.nav-right{display:flex;align-items:center;gap:16px;font-size:13px}.lang{display:flex;background:var(--grey-2);border-radius:var(--r);padding:3px}.lang button{padding:5px 10px;border-radius:6px;font-size:12px;font-weight:600;color:var(--muted)}.lang button.on{background:var(--navy);color:var(--white)}.phone{font-weight:600;white-space:nowrap}.burger{display:none;width:44px;height:44px;border-radius:var(--r);background:var(--navy);color:#fff;place-items:center}.burger i{display:block;width:16px;height:2px;background:currentColor;box-shadow:0 5px 0 currentColor,0 -5px 0 currentColor}.hero{padding:80px 0 0;background:var(--white)}.hero-grid{display:grid;grid-template-columns:1.05fr 1fr;min-height:calc(100svh - 80px)}.hero-panel{position:relative;background:var(--navy);color:var(--white);padding:clamp(40px,6vw,88px) clamp(24px,5vw,72px);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}.hero-panel .pat-line{position:absolute;right:-40px;top:-20px;width:360px;height:260px;opacity:.9;-webkit-mask-image:linear-gradient(225deg,#000 30%,transparent 80%);mask-image:linear-gradient(225deg,#000 30%,transparent 80%)}.hero h1{font-size:clamp(32px,3.9vw,58px);position:relative;margin-top:28px}.hero h1 span{color:var(--orange)}.hero .sub{font-family:var(--body);font-weight:700;font-size:clamp(18px,1.6vw,22px);margin-top:22px;opacity:.9}.hero p.desc{max-width:46ch;opacity:.7;margin-top:14px}.hero-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px;padding-top:26px;border-top:1px solid rgba(255,255,255,.15)}.stats b{display:block;font-family:var(--head);font-weight:800;font-size:clamp(28px,3vw,44px);line-height:1;color:var(--orange)}.stats span{font-size:13px;opacity:.7;display:block;margin-top:8px}.hero-media{position:relative;overflow:hidden;background:var(--grey)}.hero-media img{width:100%;height:100%;object-fit:cover}.hero-media .chip{position:absolute;left:24px;bottom:24px;background:var(--white);border-radius:var(--r);padding:14px 18px;display:flex;gap:14px;align-items:center;font-size:13px;box-shadow:0 10px 30px rgba(33,30,54,.18)}.hero-media .chip b{font-family:var(--head);font-size:15px;display:block}.hero-media .chip svg{width:38px;height:38px}.brands{background:var(--orange);color:var(--navy);overflow:hidden;padding:18px 0}.track{display:flex;gap:56px;width:max-content;animation:marquee 34s linear infinite;align-items:center}.track span{font-family:var(--head);font-weight:800;font-size:22px;white-space:nowrap;text-transform:uppercase}.track svg{width:18px;height:18px}@keyframes marquee{to{transform:translateX(-50%)}}section{padding:clamp(72px,10vw,130px) 0}.sec-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:clamp(36px,5vw,64px);flex-wrap:wrap}.sec-head .eyebrow{margin-bottom:18px}.catalog{background:var(--grey-2)}.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:250px;gap:14px}.cat{position:relative;background:var(--white);border-radius:var(--r);overflow:hidden;padding:26px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .3s,box-shadow .3s}.cat:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(33,30,54,.12)}.cat .ico{width:46px;height:46px;color:var(--orange)}.cat h3{font-size:20px;position:relative;z-index:2}.cat p{font-size:13px;color:var(--muted);margin-top:6px;position:relative;z-index:2;max-width:28ch}.cat .go{position:absolute;top:22px;right:22px;width:38px;height:38px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:.25s;z-index:3}.cat:hover .go{background:var(--orange);color:#fff}.cat .go svg{width:16px;height:16px}.cat img.prod{position:absolute;right:-4%;bottom:-4%;width:48%;max-height:80%;object-fit:contain;transition:transform .5s}.cat:hover img.prod{transform:scale(1.05)}.cat.big{grid-column:span 2;grid-row:span 2;background:var(--navy);color:var(--white)}.cat.big h3{font-size:clamp(28px,3vw,40px)}.cat.big p{color:rgba(255,255,255,.65);font-size:15px;max-width:36ch}.cat.big .go{background:rgba(255,255,255,.1)}.cat.big .bigimg{position:absolute;inset:0;background:url(https://static.wixstatic.com/media/a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg/v1/fill/w_1200,h_1100,al_c,q_80,enc_auto/c.jpg) center/cover;opacity:.35;transition:opacity .4s,transform .8s}.cat.big:hover .bigimg{opacity:.5;transform:scale(1.04)}.cat.big::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(33,30,54,.2),rgba(33,30,54,.9))}.cat.big>*{position:relative;z-index:2}.cat.big .bigimg{z-index:0}.cat.big .tagrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.cat.big .tagrow span{font-size:12px;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.12)}.cat.wide{grid-column:span 2}.finish{background:var(--white)}.finish-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:center}.finish-stage{aspect-ratio:1/1;background:var(--grey-2);border-radius:var(--r);position:relative;display:grid;place-items:center;overflow:hidden}.finish-stage .pat-line{position:absolute;inset:auto -60px -60px auto;width:300px;height:300px;opacity:.5}.finish-stage svg.tap{width:68%;height:auto;position:relative}.finish-stage .tag{position:absolute;left:24px;top:22px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.finish-stage .tag b{display:block;font-family:var(--head);font-size:20px;letter-spacing:0;text-transform:none;color:var(--navy);margin-top:4px}.swatches{display:flex;gap:10px;margin:30px 0 36px;flex-wrap:wrap}.sw{display:flex;align-items:center;gap:10px;padding:8px 16px 8px 8px;border:1.5px solid var(--line);border-radius:var(--r);font-size:14px;font-weight:600;transition:.2s}.sw i{width:28px;height:28px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}.sw.on{border-color:var(--orange);background:#FDF4EC}.specs{display:grid;grid-template-columns:1fr 1fr;gap:12px}.specs div{padding:16px 18px;background:var(--grey-2);border-radius:var(--r)}.specs dt{font-size:12px;color:var(--muted)}.specs dd{font-family:var(--head);font-weight:700;font-size:17px;margin-top:2px}.projects{background:var(--navy);color:var(--white)}.projects .lead{color:rgba(255,255,255,.65)}.proj-ctrl{display:flex;gap:10px}.proj-ctrl button{width:52px;height:52px;border-radius:var(--r);background:rgba(255,255,255,.08);display:grid;place-items:center;transition:.25s;font-size:18px}.proj-ctrl button:hover{background:var(--orange)}.rail{display:grid;grid-auto-flow:column;grid-auto-columns:min(78vw,440px);gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 var(--gutter) 6px;scrollbar-width:none;margin-left:max(0px,calc((100vw - var(--max))/2))}.rail::-webkit-scrollbar{display:none}.proj{scroll-snap-align:start;background:var(--navy-2);border-radius:var(--r);overflow:hidden}.proj figure{aspect-ratio:4/4.4;overflow:hidden;position:relative}.proj img{width:100%;height:100%;object-fit:cover;transition:transform .8s}.proj:hover img{transform:scale(1.05)}.proj .star{position:absolute;top:16px;left:16px;font-size:12px;font-weight:600;background:var(--orange);padding:6px 12px;border-radius:6px}.proj .meta{padding:20px 22px 24px;display:flex;justify-content:space-between;align-items:end;gap:12px}.proj h3{font-size:22px}.proj p{font-size:14px;color:rgba(255,255,255,.55);margin-top:4px}.proj .meta svg{width:22px;height:22px;color:var(--orange);flex:none}.services{background:var(--grey-2)}.svc{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.svc article{background:var(--white);border-radius:var(--r);padding:30px 26px 32px;display:flex;flex-direction:column;transition:.3s}.svc article:hover{background:var(--navy);color:var(--white)}.svc article:hover p{color:rgba(255,255,255,.65)}.svc .ico{width:44px;height:44px;color:var(--orange)}.svc h3{font-size:20px;margin:34px 0 12px}.svc p{font-size:14px;color:var(--muted);flex:1}.svc a{display:inline-flex;gap:8px;align-items:center;margin-top:22px;font-size:14px;font-weight:600;color:var(--orange)}.svc .sub{font-family:var(--head);font-size:10px;letter-spacing:.3em;color:var(--orange);margin-top:6px;font-weight:700}.story{background:var(--orange);color:var(--navy);position:relative;overflow:hidden}.story .pat-line{position:absolute;right:0;top:0;width:52%;height:62%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23211E36' stroke-width='.012'/%3E%3C/svg%3E\");background-size:160px 160px;-webkit-mask-image:linear-gradient(200deg,#000 20%,transparent 75%);mask-image:linear-gradient(200deg,#000 20%,transparent 75%)}.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:end;position:relative}.story h2{font-size:clamp(40px,6vw,88px);line-height:1}.story blockquote{font-family:var(--body);font-weight:700;font-size:clamp(20px,2vw,26px);line-height:1.3;margin:28px 0 18px;max-width:30ch}.story p{max-width:50ch;color:rgba(33,30,54,.8)}.timeline{display:grid;gap:10px}.timeline div{display:grid;grid-template-columns:120px 1fr;gap:18px;align-items:center;background:var(--white);border-radius:var(--r);padding:18px 22px}.timeline b{font-family:var(--head);font-size:20px;color:var(--orange)}.timeline span{font-size:15px}.timeline div:last-child{background:var(--navy);color:var(--white)}.showrooms{background:var(--white)}.sr-grid{display:grid;grid-template-columns:360px 1fr;gap:20px}.sr-list{display:grid;gap:10px;align-content:start}.sr-list button{text-align:left;padding:20px 22px;border-radius:var(--r);background:var(--grey-2);transition:.25s;display:flex;justify-content:space-between;align-items:center;gap:12px}.sr-list button:hover{background:var(--grey)}.sr-list button.on{background:var(--navy);color:var(--white)}.sr-list h4{font-size:18px}.sr-list p{font-size:13px;margin-top:2px;opacity:.65}.sr-list svg{width:20px;height:20px;color:var(--orange);flex:none}.sr-card{position:relative;min-height:500px;border-radius:var(--r);overflow:hidden;background:var(--navy)}.sr-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .4s}.sr-info{position:absolute;left:20px;right:20px;bottom:20px;z-index:2;background:var(--white);border-radius:var(--r);padding:24px;display:grid;grid-template-columns:1fr 1fr auto;gap:24px;align-items:center}.sr-info dt{font-size:12px;color:var(--muted);margin-bottom:4px}.sr-info dd{font-size:15px;font-weight:500;line-height:1.5}.consult{background:var(--navy);color:var(--white);position:relative;overflow:hidden}.consult .pat-fill{position:absolute;left:0;bottom:0;width:100%;height:80px;opacity:1}.consult-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);position:relative;padding-bottom:60px}.consult .lead{color:rgba(255,255,255,.65)}form{display:grid;grid-template-columns:1fr 1fr;gap:16px;background:var(--white);color:var(--navy);border-radius:var(--r);padding:clamp(22px,3vw,36px)}.field{display:flex;flex-direction:column;gap:6px}.field.full{grid-column:1/-1}.field>label{font-size:13px;font-weight:600}.field input,.field textarea{font:inherit;font-size:16px;background:var(--grey-2);border:1.5px solid transparent;padding:13px 14px;color:var(--navy);outline:none;border-radius:var(--r)}.field textarea{resize:none;height:96px}.field input:focus,.field textarea:focus{border-color:var(--orange);background:#fff}.chips{display:flex;gap:8px;flex-wrap:wrap}.chips label{font-size:14px;cursor:pointer}.chips input{display:none}.chips span{display:inline-block;padding:9px 14px;border:1.5px solid var(--line);border-radius:var(--r);transition:.2s}.chips input:checked+span{background:var(--orange);color:#fff;border-color:var(--orange)}.form-note{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;font-size:12px;color:var(--muted)}.sent{grid-column:1/-1;display:none;padding:14px 16px;background:#FDF4EC;color:var(--orange-deep);font-weight:600;border-radius:var(--r)}.contact-mini{margin-top:40px;display:grid;gap:10px}.contact-mini a{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.06);border-radius:var(--r);padding:16px 20px;font-family:var(--head);font-weight:700;font-size:18px;transition:.25s}.contact-mini a:hover{background:var(--orange)}.contact-mini small{font-family:var(--body);font-size:12px;opacity:.6;font-weight:500}.system{background:var(--grey)}.sys-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.sys-card{background:var(--white);border-radius:var(--r);padding:26px}.sys-card h4{font-family:var(--body);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:18px;font-weight:600}.pal{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.pal div{aspect-ratio:1/1.2;border-radius:6px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;font-size:10px;font-weight:600;line-height:1.3;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06)}.logos{display:grid;grid-template-columns:1fr 1fr;gap:8px}.logos div{border-radius:6px;display:grid;place-items:center;height:84px;padding:14px}.logos svg{max-height:100%;width:auto;max-width:100%}.sub-logo{display:flex;flex-direction:column;align-items:center;gap:4px}.sub-logo svg{height:16px}.sub-logo span{font-family:var(--head);font-size:8px;letter-spacing:.42em;font-weight:700;color:var(--orange)}footer{background:var(--navy);color:var(--white);padding:80px 0 30px}.foot-top{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:56px;flex-wrap:wrap}.foot-top .bigword svg{width:min(680px,80vw);height:auto}.foot-top .k svg{width:90px;height:auto}.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:36px;padding-bottom:44px;border-bottom:1px solid rgba(255,255,255,.12)}.foot-grid h5{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);margin-bottom:16px;font-weight:600}.foot-grid a{display:block;font-size:15px;margin-bottom:9px;opacity:.8}.foot-grid a:hover{opacity:1;color:var(--orange)}.foot-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:13px;opacity:.5;gap:20px;flex-wrap:wrap}.ribbon{position:fixed;left:16px;bottom:16px;z-index:60;background:var(--orange);color:var(--navy);font-size:12px;font-weight:600;padding:10px 16px;border-radius:var(--r);display:flex;gap:10px;align-items:center;box-shadow:0 10px 30px rgba(33,30,54,.25)}.ribbon a{font-weight:800}.rv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}.rv.in{opacity:1;transform:none}.drawer{position:fixed;inset:0;z-index:70;background:var(--navy);color:var(--white);padding:18px var(--gutter);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .45s cubic-bezier(.7,0,.2,1)}.drawer.open{transform:none}.drawer .top{display:flex;justify-content:space-between;align-items:center;height:44px}.drawer .top svg{height:18px;width:auto}.drawer nav{display:flex;flex-direction:column;margin-top:48px}.drawer nav a{font-family:var(--head);font-weight:800;font-size:30px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.1)}.drawer .burger{display:grid;background:var(--orange)}@media (max-width:1080px){.menu,.phone{display:none}.burger{display:grid}.hero-grid{grid-template-columns:1fr}.hero-media{min-height:340px}.bento{grid-template-columns:repeat(2,1fr)}.svc{grid-template-columns:1fr 1fr}.sr-grid{grid-template-columns:1fr}.sr-list{grid-template-columns:repeat(4,1fr)}.sr-list p{display:none}.sys-grid{grid-template-columns:1fr 1fr}.foot-grid{grid-template-columns:1fr 1fr}}@media (max-width:760px){.nav{height:68px}.hero{padding-top:68px}.lang,.nav-cta{display:none!important}.stats span{font-size:11px}.finish-grid,.story-grid,.consult-grid{grid-template-columns:1fr}.bento{grid-auto-rows:190px;gap:10px}.cat{padding:18px}.cat h3{font-size:16px}.cat p{display:none}.cat .ico{width:36px;height:36px}.cat.big p{display:block}.cat.big .tagrow{display:none}.cat .go{width:32px;height:32px;top:14px;right:14px}.svc{grid-template-columns:1fr}.svc h3{margin-top:22px}.sr-list{display:flex;overflow-x:auto;scrollbar-width:none;margin:0 calc(-1 * var(--gutter));padding:0 var(--gutter)}.sr-list button{flex:0 0 auto;padding:12px 16px}.sr-list svg{display:none}.sr-card{min-height:540px}.sr-info{grid-template-columns:1fr;gap:14px;left:12px;right:12px;bottom:12px}form{grid-template-columns:1fr}.sys-grid{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr}.proj-ctrl{display:none}.timeline div{grid-template-columns:90px 1fr}.ribbon{left:12px;right:12px;bottom:12px;justify-content:center;font-size:11px}}@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.rv{opacity:1;transform:none}}@media (max-width:1320px){.nav-right .phone{display:none}}@media (max-width:1200px){.menu{gap:20px}.nav-right .lang{display:none}}main .btn-navy{background:var(--navy);color:var(--white)}.dl-hero{padding:calc(80px + clamp(28px,4vw,48px)) 0 clamp(40px,5vw,64px);background:var(--grey-2)}.dl-crumbs{font-size:13px;color:var(--muted);margin-bottom:18px}.dl-crumbs a:hover{color:var(--orange)}.dl-hero-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:14px;align-items:stretch}.dl-hero-panel{position:relative;overflow:hidden;background:var(--navy);color:var(--white);border-radius:var(--r);padding:clamp(28px,5vw,64px);display:flex;flex-direction:column;justify-content:space-between;min-height:520px}.dl-hero-panel .pat-line{position:absolute;right:-40px;top:-30px;width:340px;height:260px;-webkit-mask-image:linear-gradient(225deg,#000 30%,transparent 80%);mask-image:linear-gradient(225deg,#000 30%,transparent 80%);pointer-events:none}.dl-hero h1{font-size:clamp(34px,4.6vw,68px);line-height:1.02;position:relative;max-width:12ch}.dl-hero h1 em{font-style:normal;color:var(--orange)}.dl-hero .dl-sub{font-weight:700;font-size:clamp(18px,1.6vw,22px);margin-top:22px;position:relative}.dl-hero .dl-desc{opacity:.72;max-width:46ch;margin-top:10px;position:relative}.dl-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px;position:relative}.dl-hero .btn-line{color:var(--white)}.dl-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:44px;padding-top:24px;border-top:1px solid rgba(255,255,255,.15);position:relative}.dl-stats b{display:block;font-family:var(--head);font-weight:800;font-size:clamp(26px,3vw,42px);line-height:1;color:var(--orange)}.dl-stats span{display:block;font-size:13px;opacity:.7;margin-top:8px}.dl-hero-media{position:relative;border-radius:var(--r);overflow:hidden;background:var(--grey);min-height:360px}.dl-hero-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.dl-chip{position:absolute;left:20px;bottom:20px;right:20px;max-width:340px;background:var(--white);border-radius:var(--r);padding:14px 18px;display:flex;gap:14px;align-items:center;font-size:13px;box-shadow:0 10px 30px rgba(33,30,54,.18)}.dl-chip svg{width:38px;height:38px;color:var(--orange);flex:none}.dl-chip b{display:block;font-family:var(--head);font-size:15px}.dl-opts{background:var(--white)}.dl-opt-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.dl-opt-card{position:relative;background:var(--grey-2);border-radius:var(--r);padding:30px 26px;display:flex;flex-direction:column;min-height:320px;overflow:hidden;transition:background .35s var(--ease),color .35s var(--ease)}.dl-opt-card:hover{background:var(--navy);color:var(--white)}.dl-opt-card:hover p{color:rgba(255,255,255,.65)}.dl-opt-card .dl-ico{width:48px;height:48px;color:var(--orange);transition:transform .4s var(--ease)}.dl-opt-card:hover .dl-ico{transform:translateX(6px)}.dl-opt-card h3{font-size:20px;margin:30px 0 10px}.dl-opt-card p{font-size:14px;color:var(--muted);flex:1;transition:color .35s}.dl-opt-card .dl-tag{align-self:flex-start;margin-top:22px;font-size:12px;font-weight:700;padding:7px 12px;border-radius:6px;background:var(--orange);color:var(--navy)}.dl-opt-card.dl-feat{background:var(--orange);color:var(--navy)}.dl-opt-card.dl-feat p{color:rgba(33,30,54,.78)}.dl-opt-card.dl-feat .dl-ico{color:var(--navy)}.dl-opt-card.dl-feat .dl-tag{background:var(--navy);color:var(--white)}.dl-opt-card.dl-feat:hover{background:var(--navy);color:var(--white)}.dl-opt-card.dl-feat:hover .dl-ico{color:var(--orange)}.dl-opt-card.dl-feat:hover .dl-tag{background:var(--orange);color:var(--navy)}.dl-calc{background:var(--navy);color:var(--white);position:relative;overflow:hidden}.dl-calc .lead{color:rgba(255,255,255,.65)}.dl-calc .pat-line{position:absolute;left:-60px;bottom:-60px;width:320px;height:320px;opacity:.35;pointer-events:none}.dl-calc-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:20px;align-items:start;position:relative}.dl-panel{background:var(--navy-2);border-radius:var(--r);padding:clamp(20px,3vw,34px);display:grid;gap:26px}.dl-lbl{display:block;font-size:13px;font-weight:600;opacity:.85;margin-bottom:10px}.dl-select{position:relative}.dl-select select{width:100%;appearance:none;-webkit-appearance:none;font:inherit;font-size:16px;font-weight:600;color:var(--white);background:rgba(255,255,255,.08);border:2px solid transparent;border-radius:var(--r);padding:15px 48px 15px 16px;cursor:pointer;transition:border-color .2s}.dl-select select:focus{border-color:var(--orange);outline:none}.dl-select select option{color:var(--navy);background:var(--white)}.dl-select::after{content:\"\";position:absolute;right:20px;top:50%;width:9px;height:9px;border-right:2px solid var(--orange);border-bottom:2px solid var(--orange);transform:translateY(-70%) rotate(45deg);pointer-events:none}.dl-seg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.dl-seg label{position:relative;cursor:pointer}.dl-seg input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;pointer-events:none}.dl-seg span{display:flex;flex-direction:column;gap:4px;height:100%;padding:14px;border-radius:var(--r);background:rgba(255,255,255,.06);border:2px solid transparent;font-weight:600;font-size:14px;transition:border-color .2s,background .2s,transform .25s var(--ease)}.dl-seg small{font-weight:500;font-size:12px;opacity:.6}.dl-seg label:hover span{transform:translateY(-2px)}.dl-seg input:checked+span{border-color:var(--orange);background:rgba(224,143,69,.15)}.dl-seg input:focus-visible+span{outline:2px solid var(--orange);outline-offset:2px}.dl-toggle{display:flex;align-items:center;gap:14px;cursor:pointer;background:rgba(255,255,255,.06);border-radius:var(--r);padding:14px 16px;font-weight:600;font-size:14px}.dl-toggle input{position:absolute;opacity:0;pointer-events:none}.dl-toggle i{position:relative;flex:none;width:44px;height:24px;border-radius:999px;background:rgba(255,255,255,.2);transition:background .25s}.dl-toggle i::after{content:\"\";position:absolute;left:3px;top:3px;width:18px;height:18px;border-radius:50%;background:var(--white);transition:transform .3s var(--ease)}.dl-toggle input:checked+i{background:var(--orange)}.dl-toggle input:checked+i::after{transform:translateX(20px)}.dl-toggle input:focus-visible+i{outline:2px solid var(--orange);outline-offset:2px}.dl-toggle small{display:block;font-weight:500;font-size:12px;opacity:.6}.dl-res{background:var(--white);color:var(--navy);border-radius:var(--r);padding:clamp(22px,3vw,32px);position:sticky;top:100px}.dl-res-top{display:flex;justify-content:space-between;align-items:center;gap:12px}.dl-res h3{font-size:18px}.dl-badge{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:5px 9px;border-radius:6px;background:var(--grey-2);color:var(--muted)}.dl-badge.dl-real{background:#FDF4EC;color:var(--orange-deep)}.dl-days{display:flex;align-items:baseline;gap:10px;margin:22px 0 4px}.dl-days output{font-family:var(--head);font-weight:800;font-size:clamp(40px,5vw,60px);line-height:1;display:inline-block}.dl-days output.dl-flip{animation:dl-flip .45s var(--ease)}@keyframes dl-flip{from{opacity:0;transform:translateY(14px)}}.dl-days span{font-size:15px;color:var(--muted);font-weight:600}.dl-bar{height:8px;border-radius:999px;background:var(--grey-2);overflow:hidden;margin:18px 0 8px}.dl-bar i{display:block;height:100%;background:var(--orange);border-radius:inherit;width:20%;transition:width .6s var(--ease)}.dl-bar-l{display:flex;justify-content:space-between;font-size:11px;color:var(--muted)}.dl-res ul{list-style:none;margin:20px 0;font-size:14px}.dl-res li{display:flex;justify-content:space-between;gap:14px;padding:9px 0;border-bottom:1px solid var(--line)}.dl-res li span:last-child{font-weight:600;text-align:right}.dl-res .btn{width:100%;justify-content:center}.dl-res .dl-note{font-size:12px;color:var(--muted);margin-top:12px}.dl-pay{background:var(--grey-2)}.dl-pay-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.dl-pay-card{background:var(--white);border-radius:var(--r);padding:clamp(24px,3vw,36px);display:flex;flex-direction:column;position:relative;overflow:hidden}.dl-pay-card .dl-num{position:absolute;right:22px;top:18px;font-family:var(--head);font-weight:800;font-size:64px;line-height:1;color:var(--grey-2);transition:color .35s}.dl-pay-card:hover .dl-num{color:#FBE6D3}.dl-pay-card .dl-ico{width:50px;height:50px;color:var(--orange);position:relative}.dl-pay-card h3{font-size:22px;margin:28px 0 10px}.dl-pay-card p{color:var(--muted);font-size:15px;flex:1}.dl-apps{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px}.dl-apps span{font-family:var(--head);font-weight:700;font-size:13px;padding:8px 12px;border-radius:6px;background:var(--grey-2);transition:background .25s,transform .25s var(--ease)}.dl-apps span:hover{background:var(--orange);transform:translateY(-2px)}.dl-steps{background:var(--white)}.dl-track{position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px;list-style:none;counter-reset:dl}.dl-track::before,.dl-track::after{content:\"\";position:absolute;left:28px;right:28px;top:27px;height:2px;background:var(--grey)}.dl-track::after{background:var(--orange);transform-origin:left;transform:scaleX(var(--dl-p,0));transition:transform 1.6s var(--ease)}.dl-track li{position:relative;z-index:1;min-width:0}.dl-dot{width:56px;height:56px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .4s,color .4s,transform .4s var(--ease)}.dl-dot svg{width:28px;height:28px;color:var(--navy)}.dl-track li.dl-on .dl-dot{background:var(--orange);transform:rotate(-4deg)}.dl-track small{display:block;margin-top:22px;font-family:var(--head);font-size:11px;letter-spacing:.24em;font-weight:700;color:var(--orange-deep)}.dl-track h3{font-size:17px;margin:8px 0}.dl-track p{font-size:14px;color:var(--muted)}.dl-check{background:var(--grey-2)}.dl-check-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(30px,5vw,80px);align-items:center}.dl-check-media{position:relative;border-radius:var(--r);overflow:hidden;aspect-ratio:4/3.4;background:var(--grey)}.dl-check-media img{width:100%;height:100%;object-fit:cover}.dl-check-media .dl-chip{max-width:300px}.dl-list{display:grid;gap:10px;margin-top:28px}.dl-item{display:flex;gap:16px;align-items:flex-start;background:var(--white);border-radius:var(--r);padding:18px 20px;cursor:pointer;border:2px solid transparent;transition:border-color .25s,transform .3s var(--ease)}.dl-item:hover{transform:translateX(4px)}.dl-item input{position:absolute;opacity:0;pointer-events:none}.dl-box{flex:none;width:26px;height:26px;border-radius:6px;border:2px solid var(--grey);display:grid;place-items:center;transition:background .25s,border-color .25s;margin-top:1px}.dl-box svg{width:18px;height:18px;color:var(--navy);stroke-dasharray:40;stroke-dashoffset:40;transition:stroke-dashoffset .35s var(--ease)}.dl-item input:checked~.dl-box{background:var(--orange);border-color:var(--orange)}.dl-item input:checked~.dl-box svg{stroke-dashoffset:0}.dl-item input:focus-visible~.dl-box{outline:2px solid var(--orange);outline-offset:2px}.dl-item:has(input:checked){border-color:var(--orange)}.dl-item b{display:block;font-size:15px}.dl-item span{font-size:14px;color:var(--muted)}.dl-prog{display:flex;align-items:center;gap:14px;margin-top:18px;font-size:14px;font-weight:600}.dl-prog .dl-bar{flex:1;margin:0;background:var(--white)}.dl-done{display:none;margin-top:14px;padding:14px 16px;border-radius:var(--r);background:var(--navy);color:var(--white);font-weight:600;font-size:14px}.dl-done.dl-show{display:block;animation:dl-flip .45s var(--ease)}.dl-faq{background:var(--white)}.dl-faq-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(30px,5vw,80px)}.dl-acc details{border-bottom:1px solid var(--line)}.dl-acc summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:18px;padding:22px 0;font-family:var(--head);font-weight:700;font-size:clamp(16px,1.5vw,19px);transition:color .2s}.dl-acc summary::-webkit-details-marker{display:none}.dl-acc summary:hover{color:var(--orange-deep)}.dl-acc summary i{flex:none;position:relative;width:34px;height:34px;border-radius:var(--r);background:var(--grey-2);transition:background .25s,transform .35s var(--ease)}.dl-acc summary i::before,.dl-acc summary i::after{content:\"\";position:absolute;left:50%;top:50%;width:12px;height:2px;background:var(--navy);transform:translate(-50%,-50%)}.dl-acc summary i::after{transform:translate(-50%,-50%) rotate(90deg);transition:transform .3s var(--ease)}.dl-acc details[open] summary i{background:var(--orange);transform:rotate(180deg)}.dl-acc details[open] summary i::after{transform:translate(-50%,-50%) rotate(0)}.dl-acc details p{color:var(--muted);padding:0 50px 22px 0;max-width:62ch}.dl-acc details[open] p{animation:dl-flip .4s var(--ease)}.dl-help{margin-top:28px;background:var(--grey-2);border-radius:var(--r);padding:22px}.dl-help a{display:block;font-family:var(--head);font-weight:800;font-size:22px;margin-top:6px}.dl-help a:hover{color:var(--orange-deep)}.dl-help small{font-size:13px;color:var(--muted)}.dl-cta{background:var(--orange);color:var(--navy);position:relative;overflow:hidden}.dl-cta .pat-line{position:absolute;right:0;top:0;width:55%;height:100%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23211E36' stroke-width='.012'/%3E%3C/svg%3E\");background-size:160px 160px;-webkit-mask-image:linear-gradient(240deg,#000 20%,transparent 75%);mask-image:linear-gradient(240deg,#000 20%,transparent 75%);pointer-events:none}.dl-cta-in{position:relative;display:flex;justify-content:space-between;align-items:end;gap:30px;flex-wrap:wrap}.dl-cta h2{font-size:clamp(32px,5vw,72px);line-height:1;max-width:14ch}.dl-cta p{max-width:44ch;margin-top:18px;color:rgba(33,30,54,.8)}.dl-cta .btn-line:hover{background:var(--navy);color:var(--white);border-color:var(--navy)}.dl-cta-btns{display:flex;gap:12px;flex-wrap:wrap}@media (max-width:1080px){.dl-hero-grid{grid-template-columns:minmax(0,1fr)}.dl-hero-panel{min-height:0}.dl-opt-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.dl-calc-grid,.dl-check-grid,.dl-faq-grid{grid-template-columns:minmax(0,1fr)}.dl-res{position:static}.dl-track{grid-template-columns:minmax(0,1fr);gap:0}.dl-track::before,.dl-track::after{left:27px;right:auto;top:28px;bottom:28px;width:2px;height:auto;transform-origin:top;transform:scaleY(var(--dl-p,0))}.dl-track::before{transform:none}.dl-track li{display:grid;grid-template-columns:56px minmax(0,1fr);column-gap:20px;padding-bottom:28px}.dl-track li:last-child{padding-bottom:0}.dl-track li>.dl-dot{grid-row:span 3}.dl-track small{margin-top:4px}}@media (max-width:760px){.dl-opt-grid,.dl-pay-grid{grid-template-columns:minmax(0,1fr)}.dl-opt-card{min-height:0}.dl-stats{gap:12px}.dl-stats span{font-size:11px}.dl-seg{grid-template-columns:minmax(0,1fr)}.dl-seg span{flex-direction:row;justify-content:space-between;align-items:center}.dl-acc details p{padding-right:0}.dl-hero-media{min-height:300px}.dl-ctas .btn{flex:1 1 auto;justify-content:center}}@media (prefers-reduced-motion:reduce){.dl-track::after,.dl-bar i{transition:none}}:host{--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--sans:\"Manrope\",system-ui,sans-serif;--ease:cubic-bezier(.2,.7,.2,1);--ease-io:cubic-bezier(.7,0,.2,1);--shadow-lg:0 30px 60px -30px rgba(33,30,54,.45);--shadow-md:0 18px 40px -22px rgba(33,30,54,.4);}:host{scroll-padding-top:100px}::selection{background:var(--orange);color:var(--navy)}:focus-visible{outline:2px solid var(--orange);outline-offset:3px;border-radius:4px}.kl-skip{position:fixed;left:12px;top:-60px;z-index:200;background:var(--navy);color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;transition:top .2s}.kl-skip:focus{top:12px}@view-transition{navigation:auto}::view-transition-old(root){animation:kl-vt-out .32s var(--ease-io) both}::view-transition-new(root){animation:kl-vt-in .6s var(--ease) both}#hdr{view-transition-name:kl-header}::view-transition-group(kl-header){animation-duration:0s}@keyframes kl-vt-out{to{opacity:0;transform:translateY(-14px) scale(.995)}}@keyframes kl-vt-in{from{opacity:0;transform:translateY(22px)}}.kl-curtain{position:fixed;inset:0;z-index:150;pointer-events:none;background:var(--navy);transform:scaleY(0);transform-origin:bottom;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='40' height='40'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45' fill-opacity='.12'/%3E%3C/svg%3E\");background-size:40px}.kl-curtain.cover{transform:scaleY(1);transition:transform .42s var(--ease-io)}.kl-curtain.lift{transform:scaleY(0);transform-origin:top;transition:transform .6s var(--ease-io)}.kl-curtain.instant{transform:scaleY(1);transition:none}.kl-intro{position:fixed;inset:0;z-index:160;background:var(--navy);display:grid;place-items:center;transition:transform .8s var(--ease-io) .05s}.kl-intro.done{transform:translateY(-100%)}.kl-intro .mk{width:84px;height:auto;fill:var(--orange);animation:kl-pop .7s var(--ease) both}.kl-intro .wm{width:200px;height:auto;fill:#fff;margin-top:22px;clip-path:inset(0 100% 0 0);animation:kl-wipe .7s var(--ease) .25s forwards}.kl-intro .bar{position:absolute;left:0;bottom:0;height:3px;background:var(--orange);width:0;animation:kl-bar .9s var(--ease) forwards}@keyframes kl-pop{from{opacity:0;transform:scale(.6) rotate(-12deg)}}@keyframes kl-wipe{to{clip-path:inset(0)}}@keyframes kl-bar{to{width:100%}}.kl-promo{position:relative;z-index:51;background:#F6F4F1;color:var(--navy);font-size:13px;height:34px;overflow:hidden;border-bottom:1px solid rgba(33,30,54,.08)}.kl-promo.gone{display:none}.kl-promo-in{height:100%;display:flex;align-items:center;justify-content:center;gap:16px;position:relative}.kl-promo-rot{position:relative;flex:1;height:100%;max-width:640px}.kl-promo-rot a{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;font-weight:500;color:var(--navy);opacity:0;transform:translateY(100%);transition:opacity .5s var(--ease),transform .6s var(--ease);pointer-events:none}.kl-promo-rot a.on{opacity:1;transform:none;pointer-events:auto}.kl-promo-rot a.out{opacity:0;transform:translateY(-100%)}.kl-promo-rot a:hover{color:var(--orange-deep)}.kl-promo-rot svg{width:16px;height:16px;flex:none;color:var(--orange-deep);fill:none;stroke:currentColor;stroke-width:3}.kl-promo-tel{position:absolute;left:var(--gutter);font-weight:700;font-size:12.5px;color:var(--navy);opacity:.75;transition:opacity .2s}.kl-promo-tel:hover{opacity:1}.kl-promo-x{position:absolute;right:var(--gutter);top:50%;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;color:var(--navy);opacity:.45;font-size:11px;transition:opacity .2s,background .2s}.kl-promo-x:hover{opacity:1;background:rgba(33,30,54,.08)}@media (max-width:900px){.kl-promo-tel{display:none}}@media (max-width:480px){.kl-promo{font-size:12px;height:32px}.kl-promo-rot a{justify-content:flex-start;padding-right:30px}}#hdr{top:var(--kl-bar,0px)}.kl-sticker{position:absolute;right:28px;top:28px;z-index:3;width:132px;height:132px;border-radius:50%;background:var(--orange);color:var(--navy);display:grid;place-items:center;box-shadow:0 20px 40px -18px rgba(0,0,0,.55);transition:transform .5s var(--ease);animation:kl-pop .8s var(--ease) .6s both}.kl-sticker:hover{transform:scale(1.07) rotate(-6deg)}.kl-sticker svg{position:absolute;inset:6px;width:calc(100% - 12px);height:calc(100% - 12px);animation:kl-spin 16s linear infinite}.kl-sticker text{font:700 10.5px var(--body);letter-spacing:.18em;fill:var(--navy);text-transform:uppercase}.kl-sticker b{font-family:var(--head);font-weight:800;font-size:28px;line-height:1;text-align:center}.kl-sticker b small{display:block;font-family:var(--body);font-size:10px;font-weight:700;letter-spacing:.12em;margin-top:4px}@keyframes kl-spin{to{transform:rotate(360deg)}}@media (max-width:760px){.kl-sticker{width:100px;height:100px;right:16px;top:16px}.kl-sticker b{font-size:21px}.kl-sticker text{font-size:9.5px}}.kl-cat-badge{position:absolute;left:22px;top:22px;z-index:3;background:var(--orange);color:var(--navy);font-size:12px;font-weight:800;padding:5px 10px;border-radius:999px;box-shadow:0 8px 18px -10px rgba(0,0,0,.5);animation:kl-pop .6s var(--ease) both}.cat .kl-cat-badge+svg.ico{margin-top:30px}.cat.big>.kl-cat-badge{position:absolute;width:auto;align-self:flex-start;font-size:13px;padding:7px 14px}.kl-deals{background:var(--white);position:relative;overflow:hidden}.kl-deals .sec-head{align-items:flex-end}.kl-deals-meta{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.kl-count{display:flex;gap:6px;font-variant-numeric:tabular-nums}.kl-count span{background:var(--navy);color:#fff;border-radius:8px;padding:8px 10px;min-width:56px;text-align:center;font-family:var(--head);font-weight:800;font-size:20px;line-height:1}.kl-count span small{display:block;font-family:var(--body);font-weight:500;font-size:10px;opacity:.6;margin-top:4px;letter-spacing:.06em}.kl-deals-rail{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(240px,1fr);gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:4px 2px 14px}.kl-deals-rail::-webkit-scrollbar{display:none}.kl-deal{scroll-snap-align:start;background:var(--grey-2);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;position:relative;transition:transform .45s var(--ease),box-shadow .45s var(--ease)}.kl-deal:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-deal .im{aspect-ratio:1;background:#fff;display:grid;place-items:center;overflow:hidden}.kl-deal .im img{width:84%;height:84%;object-fit:contain;transition:transform 1s var(--ease)}.kl-deal:hover .im img{transform:scale(1.07)}.kl-deal .off{position:absolute;left:12px;top:12px;background:var(--orange);color:var(--navy);font-weight:800;font-size:13px;padding:5px 10px;border-radius:999px}.kl-deal .bd{padding:14px 16px 16px;display:flex;flex-direction:column;gap:6px;flex:1}.kl-deal .br{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:600}.kl-deal h3{font-family:var(--body);font-weight:600;font-size:14px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.kl-deal .pr{margin-top:auto;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}.kl-deal .pr b{font-family:var(--head);font-size:18px}.kl-deal .pr s{font-size:13px;color:var(--muted)}.kl-deals-nav{display:flex;gap:8px}.kl-deals-nav button{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s}.kl-deals-nav button:hover{background:var(--navy);color:#fff}.kl-deals-note{font-size:12px;color:var(--muted);margin-top:6px}@media (max-width:760px){.kl-deals-rail{grid-auto-columns:72%}.kl-count span{min-width:46px;font-size:17px;padding:7px 8px}.kl-deals-nav{display:none}}.kl-ab{position:relative;overflow:hidden;background:#8E9097;color:#fff;min-height:min(900px,100svh);display:flex;align-items:center;padding:clamp(80px,9vw,120px) 0}.kl-ab-bg{position:absolute;inset:0}.kl-ab-bg img{width:100%;height:100%;object-fit:cover;object-position:70% center;transform:scale(1.06);transition:transform 2.4s var(--ease)}.kl-ab.kl-seen .kl-ab-bg img{transform:none}.kl-ab::before{content:\"\";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(33,30,54,.82) 0%,rgba(33,30,54,.55) 38%,rgba(33,30,54,0) 64%)}.kl-ab-in{position:relative;z-index:2;width:100%}.kl-ab-in>*{max-width:640px}.kl-ab-q{font-family:var(--head);font-weight:700;font-size:clamp(28px,3.3vw,50px);line-height:1.12;margin:22px 0 26px;letter-spacing:-.01em}.kl-ab-t{font-size:clamp(15px,1.15vw,17px);line-height:1.75;color:rgba(255,255,255,.85);max-width:560px;margin-bottom:34px}.kl-ab .btn-line{color:#fff;border-radius:999px;padding:16px 28px}.kl-ab-line{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:48px;max-width:720px!important;padding-top:24px;border-top:1px solid rgba(255,255,255,.22)}.kl-ab-line b{display:block;font-family:var(--head);font-size:22px;color:var(--orange)}.kl-ab-line span{display:block;font-size:12.5px;line-height:1.45;color:rgba(255,255,255,.75);margin-top:4px}.kl-ab-sign{font-size:12px;color:rgba(255,255,255,.6);margin-top:22px}@media (max-width:760px){.kl-ab{align-items:flex-start;min-height:0;padding:72px 0 360px}.kl-ab::before{background:linear-gradient(180deg,rgba(33,30,54,.85) 0%,rgba(33,30,54,.6) 52%,rgba(33,30,54,0) 78%)}.kl-ab-bg img{object-position:center bottom}.kl-ab-line{grid-template-columns:1fr 1fr}}.kl-how{background:#F6EEE4;position:relative;overflow:hidden}.kl-how::before{content:\"\";position:absolute;inset:0;opacity:.55;pointer-events:none;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='220' height='220'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-opacity='.35' stroke-width='.008'/%3E%3C/svg%3E\");background-size:220px}.kl-how .wrap{position:relative}.kl-how-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2vw,28px)}.kl-vid{position:relative;display:block;aspect-ratio:9/14;border-radius:14px;overflow:hidden;background:var(--navy);cursor:pointer;padding:0;text-align:left;box-shadow:0 30px 60px -40px rgba(33,30,54,.6);transition:transform .6s var(--ease),box-shadow .6s var(--ease)}.kl-vid:hover{transform:translateY(-8px);box-shadow:0 40px 70px -36px rgba(33,30,54,.7)}.kl-vid img,.kl-vid video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.2s var(--ease),opacity .5s}.kl-vid:hover img{transform:scale(1.05)}.kl-vid video{opacity:0;pointer-events:none}.kl-vid.previewing video{opacity:1}.kl-vid::after{content:\"\";position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(180deg,transparent,rgba(33,30,54,.85))}.kl-play{position:absolute;left:50%;top:50%;z-index:2;width:76px;height:76px;margin:-38px 0 0 -38px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 12px 30px -10px rgba(0,0,0,.45);transition:transform .45s var(--ease),background .3s}.kl-play::before{content:\"\";margin-left:5px;border-left:18px solid var(--navy);border-top:11px solid transparent;border-bottom:11px solid transparent;transition:border-color .3s}.kl-play::after{content:\"\";position:absolute;inset:-10px;border-radius:50%;border:2px solid rgba(255,255,255,.6);animation:kl-ring 2.4s var(--ease) infinite}@keyframes kl-ring{0%{transform:scale(.85);opacity:1}100%{transform:scale(1.35);opacity:0}}.kl-vid:hover .kl-play{transform:scale(1.1);background:var(--orange)}.kl-vid-cap{position:absolute;left:22px;right:22px;bottom:22px;z-index:2;color:#fff;font-weight:600;font-size:15px;line-height:1.35}.kl-vid-cap small{display:block;font-family:var(--head);font-size:12px;color:var(--orange);letter-spacing:.1em;margin-bottom:6px}@media (max-width:900px){.kl-how-grid{grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:72%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding-bottom:6px}.kl-how-grid::-webkit-scrollbar{display:none}.kl-vid{scroll-snap-align:start}.kl-play{width:62px;height:62px;margin:-31px 0 0 -31px}}.kl-vmodal{position:fixed;inset:0;z-index:130;background:rgba(20,18,34,.82);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px;opacity:0;transition:opacity .3s}.kl-vmodal[hidden]{display:none}.kl-vmodal.show{opacity:1}.kl-vmodal-box{position:relative;height:min(86vh,900px);aspect-ratio:9/16;max-width:100%;border-radius:16px;overflow:hidden;background:#000;transform:scale(.94);transition:transform .45s var(--ease)}.kl-vmodal.show .kl-vmodal-box{transform:none}.kl-vmodal video{width:100%;height:100%;object-fit:cover;display:block}.kl-vmodal-x{position:absolute;right:12px;top:12px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.9);color:var(--navy);font-size:15px;font-weight:700}.kl-chat{position:fixed;right:20px;bottom:20px;z-index:90;font-size:14px;transform:translateY(calc(-1 * var(--kl-lift,0px)));transition:transform .35s var(--ease),opacity .25s,visibility .25s}:host.kl-chat-hide .kl-chat,:host.kl-chat-hide .kl-top{opacity:0!important;visibility:hidden!important;pointer-events:none!important}.kl-chat-btn{display:flex;align-items:center;gap:10px;background:var(--navy);color:#fff;border-radius:999px;padding:8px 18px 8px 8px;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transition:transform .35s var(--ease),background .3s;animation:kl-pop .7s var(--ease) 1.4s both}.kl-chat-btn:hover{transform:translateY(-3px);background:var(--navy-2)}.kl-chat-btn .av{position:relative;width:40px;height:40px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-btn .av svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-btn .av::after{content:\"\";position:absolute;right:0;top:0;width:11px;height:11px;border-radius:50%;background:#2E9E5B;border:2px solid var(--navy)}.kl-chat-btn b{font-weight:600}.kl-chat.open .kl-chat-btn{opacity:0;pointer-events:none;transform:scale(.8)}.kl-chat-panel{position:absolute;right:0;bottom:0;width:min(370px,calc(100vw - 32px));background:#fff;border-radius:18px;overflow:hidden;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);transform-origin:bottom right;transform:scale(.6) translateY(20px);opacity:0;visibility:hidden;transition:transform .45s var(--ease),opacity .25s,visibility 0s .45s;display:flex;flex-direction:column;max-height:min(600px,calc(100svh - 120px))}.kl-chat.open .kl-chat-panel{transform:none;opacity:1;visibility:visible;transition:transform .45s var(--ease),opacity .25s}.kl-chat-head{background:var(--navy);color:#fff;padding:18px 18px 16px;display:flex;gap:12px;align-items:center;position:relative}.kl-chat-head .av{width:42px;height:42px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-head .av svg{width:22px;height:22px;fill:var(--navy)}.kl-chat-head b{display:block;font-size:15px}.kl-chat-head small{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.75}.kl-chat-head small::before{content:\"\";width:7px;height:7px;border-radius:50%;background:#2E9E5B}.kl-chat-x{position:absolute;right:12px;top:12px;width:32px;height:32px;border-radius:50%;color:#fff;opacity:.7}.kl-chat-x:hover{opacity:1;background:rgba(255,255,255,.1)}.kl-chat-body{padding:16px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;background:var(--grey-2);flex:1;min-height:200px}.kl-msg{max-width:86%;padding:10px 14px;border-radius:14px;line-height:1.45;animation:kl-up .35s var(--ease) both}.kl-msg.in{background:#fff;border-bottom-left-radius:4px;align-self:flex-start}.kl-msg.out{background:var(--navy);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}.kl-msg small{display:block;font-size:11px;opacity:.55;margin-top:4px}.kl-typing{align-self:flex-start;background:#fff;border-radius:14px;padding:12px 14px;display:flex;gap:4px}.kl-typing i{width:6px;height:6px;border-radius:50%;background:var(--muted);animation:kl-dot 1s infinite}.kl-typing i:nth-child(2){animation-delay:.15s}.kl-typing i:nth-child(3){animation-delay:.3s}@keyframes kl-dot{0%,100%{opacity:.3;transform:none}50%{opacity:1;transform:translateY(-3px)}}.kl-quick{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}.kl-quick button{font-size:13px;font-weight:600;padding:8px 12px;border-radius:999px;background:#fff;border:1.5px solid var(--line);color:var(--navy);transition:border-color .2s,background .2s}.kl-quick button:hover{border-color:var(--orange);background:#FDF4EC}.kl-chat-ch{display:flex;gap:8px;padding:10px 16px 0;background:#fff}.kl-chat-ch a{flex:1;text-align:center;font-size:12px;font-weight:600;padding:8px 6px;border-radius:9px;background:var(--grey-2);transition:background .2s,color .2s}.kl-chat-ch a:hover{background:var(--navy);color:#fff}.kl-chat-form{display:flex;gap:8px;padding:12px 16px 16px;background:#fff}.kl-chat-form input{flex:1;min-width:0;border:1.5px solid var(--line);border-radius:999px;padding:11px 16px;font:inherit;font-size:14px;outline:none;color:var(--navy)}.kl-chat-form input:focus{border-color:var(--orange)}.kl-chat-form button{width:44px;height:44px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none;transition:transform .25s var(--ease)}.kl-chat-form button:hover{transform:scale(1.08)}.kl-chat-form button svg{width:18px;height:18px;fill:none;stroke:var(--navy);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-note{font-size:11px;color:var(--muted);text-align:center;padding:0 16px 12px;background:#fff}.kl-top{bottom:calc(92px + var(--kl-lift,0px))!important}@media (max-width:760px){.kl-chat{right:14px;bottom:14px}.kl-chat-btn{padding:6px}.kl-chat-btn b{display:none}.kl-chat-btn .av{width:46px;height:46px}.kl-top{right:18px}}.kl-progress{position:fixed;left:0;right:0;top:0;height:3px;z-index:60;pointer-events:none}.kl-progress i{display:block;height:100%;background:var(--orange);transform-origin:left;transform:scaleX(var(--p,0))}#hdr{transition:transform .45s var(--ease),box-shadow .3s,background .3s}#hdr.kl-hide{transform:translateY(-100%)}#hdr .logo svg{transition:transform .4s var(--ease)}#hdr .logo:hover svg{transform:translateX(3px)}.kl-menu{align-items:center}.kl-dd{position:relative;display:flex;align-items:center}.kl-dd>a{display:inline-flex;align-items:center;gap:6px}.kl-caret{width:7px;height:7px;border-right:1.6px solid currentColor;border-bottom:1.6px solid currentColor;transform:rotate(45deg) translateY(-2px);transition:transform .3s var(--ease);opacity:.6}.kl-dd:hover .kl-caret,.kl-dd.open .kl-caret{transform:rotate(225deg) translate(-2px,-1px)}.kl-panel{position:absolute;top:100%;left:-18px;min-width:290px;padding:10px;background:#fff;border-radius:14px;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);opacity:0;visibility:hidden;transform:translateY(10px) scale(.98);transform-origin:top left;transition:opacity .25s,transform .35s var(--ease),visibility 0s .35s;margin-top:14px}.kl-panel::before{content:\"\";position:absolute;left:0;right:0;top:-16px;height:16px}.kl-dd:hover .kl-panel,.kl-dd:focus-within .kl-panel,.kl-dd.open .kl-panel{opacity:1;visibility:visible;transform:none;transition:opacity .25s,transform .35s var(--ease),visibility 0s}.kl-dd.closing .kl-panel{opacity:0!important;visibility:hidden!important}.menu .kl-panel a{display:block;padding:11px 14px;border-radius:9px;transition:background .2s,transform .25s var(--ease)}.menu .kl-panel a::after{display:none}.menu .kl-panel a:hover{background:var(--grey-2);transform:translateX(4px)}.kl-panel b{display:block;font-size:14px;font-weight:600}.kl-panel small{display:block;font-size:12px;color:var(--muted);font-weight:400;margin-top:2px}.kl-panel a:hover b{color:var(--orange-deep)}.kl-panel>a{opacity:0;transform:translateY(6px)}.kl-dd:hover .kl-panel>a,.kl-dd:focus-within .kl-panel>a,.kl-dd.open .kl-panel>a{opacity:1;transform:none;transition:opacity .3s,transform .4s var(--ease),background .2s;transition-delay:calc(var(--i,0)*35ms)}.kl-mega{display:grid;grid-template-columns:repeat(3,minmax(150px,1fr)) 230px;gap:6px 18px;min-width:860px;padding:22px}.kl-mega h6{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange-deep);margin:0 0 8px 12px}.menu .kl-mega-col a{padding:7px 12px;font-size:14px}.menu a.kl-mega-promo{background:var(--navy);color:#fff;border-radius:12px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;gap:14px;min-height:220px;position:relative;overflow:hidden}.menu a.kl-mega-promo:hover{background:var(--navy-2);transform:none}.kl-mega-promo b{font-family:var(--head);font-size:20px;line-height:1.15;color:#fff!important}.kl-mega-promo .kl-more{font-size:13px;font-weight:600;color:var(--orange);display:inline-flex;gap:8px;align-items:center}.kl-mega-promo .arrow{fill:var(--orange)}.kl-mega-promo::after{content:\"\";position:absolute;right:-40px;bottom:-40px;width:160px;height:160px;opacity:.25;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='32' height='32'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45'/%3E%3C/svg%3E\");background-size:32px;transition:transform .8s var(--ease)}.kl-mega-promo:hover::after{transform:translate(-14px,-14px)}.menu a[aria-current=\"page\"],.kl-dd.kl-active>a{color:var(--orange-deep)}.menu>a[aria-current=\"page\"]::after,.kl-dd.kl-active>a::after{width:100%}.kl-icon-btn{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s,transform .25s var(--ease);flex:none}.kl-icon-btn svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:1.8;stroke-linecap:round;transition:stroke .25s}.kl-icon-btn:hover{background:var(--navy);transform:translateY(-2px)}.kl-icon-btn:hover svg{stroke:#fff}.kl-icon-btn[aria-current=\"page\"]{background:var(--orange)}@media (max-width:1460px){.nav-right .lang{display:none}}@media (max-width:1320px){.kl-menu{gap:22px}}@media (max-width:1200px){.kl-menu{gap:16px;font-size:13.5px}.nav-cta{display:none!important}}.drawer{inset:0 0 0 auto!important;width:min(380px,88vw);padding:16px 24px 24px!important;border-radius:18px 0 0 18px;box-shadow:-30px 0 60px -20px rgba(0,0,0,.45);transition:transform .5s var(--ease-io)!important;overflow:hidden}.drawer .top{height:44px}.drawer .top svg{height:16px}.drawer .burger{width:40px;height:40px;font-size:15px}.kl-backdrop{position:fixed;inset:0;z-index:69;background:rgba(33,30,54,.45);backdrop-filter:blur(3px);opacity:0;visibility:hidden;transition:opacity .4s,visibility 0s .4s}:host.kl-drawer-open .kl-backdrop{opacity:1;visibility:visible;transition:opacity .4s}.drawer{overflow-y:auto!important;overscroll-behavior:contain}.kl-drawer-nav{flex:1 0 auto;margin-top:22px!important;padding-bottom:16px}.kl-drawer-foot{flex:none}.drawer .kl-drawer-nav>a,.kl-drawer-nav summary{font-family:var(--body)!important;font-weight:600!important;font-size:17px!important;padding:14px 0!important;border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details{border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details summary{border-bottom:0}.kl-drawer-nav summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center}.kl-drawer-nav summary::-webkit-details-marker{display:none}.kl-drawer-nav summary::after{content:\"\";width:8px;height:8px;border-right:1.8px solid var(--orange);border-bottom:1.8px solid var(--orange);transform:rotate(45deg) translateY(-3px);transition:transform .3s var(--ease)}.kl-drawer-nav details[open] summary::after{transform:rotate(225deg) translate(-2px,-2px)}.kl-drawer-nav details>div{display:grid;padding:0 0 12px 12px;border-left:2px solid rgba(224,143,69,.35);margin:0 0 12px 2px}.drawer .kl-drawer-nav details>div a{font-family:var(--body);font-weight:500;font-size:15px;padding:7px 0;border:0;opacity:.75;transition:opacity .2s,transform .25s var(--ease)}.drawer .kl-drawer-nav details>div a:hover{opacity:1;transform:translateX(4px);color:var(--orange)}.drawer .kl-drawer-nav>a[aria-current=\"page\"],.drawer .kl-drawer-nav a[aria-current=\"page\"]{color:var(--orange);opacity:1}.kl-drawer-nav details[open]>div a{animation:kl-up .4s var(--ease) both}.kl-drawer-nav details[open]>div a:nth-child(2){animation-delay:.03s}.kl-drawer-nav details[open]>div a:nth-child(3){animation-delay:.06s}.kl-drawer-nav details[open]>div a:nth-child(4){animation-delay:.09s}.kl-drawer-nav details[open]>div a:nth-child(5){animation-delay:.12s}.kl-drawer-nav details[open]>div a:nth-child(6){animation-delay:.15s}.drawer.open .kl-drawer-nav>*{animation:kl-side .5s var(--ease) both}.drawer.open .kl-drawer-nav>*:nth-child(2){animation-delay:.04s}.drawer.open .kl-drawer-nav>*:nth-child(3){animation-delay:.08s}.drawer.open .kl-drawer-nav>*:nth-child(4){animation-delay:.12s}.drawer.open .kl-drawer-nav>*:nth-child(5){animation-delay:.16s}.drawer.open .kl-drawer-nav>*:nth-child(6){animation-delay:.2s}.kl-drawer-foot{display:grid;gap:4px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12)}.kl-drawer-foot span{font-size:12px;opacity:.55;margin-bottom:12px}.kl-drawer-foot .btn{justify-content:center}.kl-drawer-phone{font-family:var(--head);font-weight:800;font-size:19px;color:var(--orange)}@keyframes kl-up{from{opacity:0;transform:translateY(12px)}}@keyframes kl-side{from{opacity:0;transform:translateX(24px)}}:host.kl-lock{overflow:hidden}.kl-search{position:fixed;inset:0;z-index:120;background:rgba(33,30,54,.55);backdrop-filter:blur(8px);display:flex;justify-content:center;align-items:flex-start;padding:12vh 16px 16px;opacity:0;transition:opacity .25s}.kl-search[hidden]{display:none}.kl-search.show{opacity:1}.kl-search-box{width:min(680px,100%);background:#fff;border-radius:16px;box-shadow:var(--shadow-lg);overflow:hidden;transform:translateY(-12px) scale(.98);transition:transform .4s var(--ease)}.kl-search.show .kl-search-box{transform:none}.kl-search-in{display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--line)}.kl-search-in svg{width:22px;height:22px;fill:none;stroke:var(--muted);stroke-width:2;stroke-linecap:round;flex:none}.kl-search-in input{flex:1;border:0;outline:0;font:inherit;font-size:18px;color:var(--navy);background:none;min-width:0}.kl-search-in kbd{font:inherit;font-size:11px;color:var(--muted);border:1px solid var(--line);border-radius:5px;padding:2px 6px}.kl-search-res{max-height:min(60vh,520px);overflow-y:auto;padding:8px}.kl-search-res h6{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:10px 12px 6px}.kl-search-res a{display:flex;align-items:center;gap:14px;padding:10px 12px;border-radius:10px}.kl-search-res a[aria-selected=\"true\"],.kl-search-res a:hover{background:var(--grey-2)}.kl-search-res a img,.kl-search-res a .ic{width:44px;height:44px;border-radius:8px;object-fit:cover;background:var(--grey-2);flex:none;display:grid;place-items:center;font-weight:800;color:var(--orange-deep)}.kl-search-res a b{display:block;font-size:14px;font-weight:600;line-height:1.3}.kl-search-res a small{display:block;font-size:12px;color:var(--muted)}.kl-search-res mark{background:rgba(224,143,69,.25);color:inherit;border-radius:3px}.kl-search-res .empty{padding:24px 12px;color:var(--muted);font-size:14px;text-align:center}.kl-top{position:fixed;right:20px;bottom:20px;z-index:55;width:48px;height:48px;border-radius:50%;background:var(--navy);display:grid;place-items:center;box-shadow:var(--shadow-md);opacity:0;transform:translateY(20px) scale(.8);pointer-events:none;transition:opacity .3s,transform .45s var(--ease),background .25s}.kl-top.show{opacity:1;transform:none;pointer-events:auto}.kl-top:hover{background:var(--orange)}.kl-top svg{width:20px;height:20px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-top:hover svg{stroke:var(--navy)}.kl-body.kl-has-sticky .kl-top{bottom:96px}.kl-demo{position:fixed;left:16px;bottom:16px;z-index:54;font-size:11px;font-weight:600;letter-spacing:.02em;padding:7px 12px;border-radius:999px;background:rgba(33,30,54,.82);color:#fff;backdrop-filter:blur(6px);pointer-events:none;box-shadow:var(--shadow-md)}.kl-demo::before{content:\"\";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--orange);margin-right:8px;vertical-align:1px}.kl-body.kl-has-sticky .kl-demo{bottom:92px}@media (max-width:760px){.kl-demo{bottom:12px;left:12px;font-size:10px}}.kl-foot-cta{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap;padding-bottom:56px;margin-bottom:56px;border-bottom:1px solid rgba(255,255,255,.12)}.kl-foot-cta .h-section{color:#fff;margin-top:14px}.kl-foot-grid{grid-template-columns:1.6fr 1fr 1fr 1fr 1fr!important}.kl-foot-grid a{transition:color .2s,transform .3s var(--ease),opacity .2s}.kl-foot-grid a:hover{transform:translateX(4px)}.kl-foot-hours{display:block;font-size:13px;opacity:.55;margin-top:6px}.kl-footer .k svg{transition:transform 1.2s var(--ease)}.kl-footer:hover .k svg{transform:rotate(-8deg) scale(1.05)}@media (max-width:1080px){.kl-foot-grid{grid-template-columns:1fr 1fr 1fr!important}}@media (max-width:760px){.kl-foot-grid{grid-template-columns:1fr 1fr!important}.kl-foot-grid>div:first-child{grid-column:1/-1}}.btn-navy{background:var(--navy);color:var(--white)}.btn{position:relative;overflow:hidden;isolation:isolate;transition:transform .3s var(--ease),background .3s,color .3s,border-color .3s,box-shadow .3s}.btn::after{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:inherit;transform:translateX(-102%) skewX(-12deg);transition:transform .55s var(--ease)}.btn:hover::after{transform:translateX(0) skewX(0)}.btn-orange::after{background:var(--orange-deep)}.btn-navy::after{background:var(--navy-2)}.btn:hover{box-shadow:0 14px 30px -14px rgba(33,30,54,.5)}.btn:active{transform:scale(.97)}.btn:hover .arrow{transform:translateX(5px)}.btn .arrow{transition:transform .35s var(--ease)}.kl-magnet{will-change:transform}main p a:not(.btn):not([class]){background:linear-gradient(currentColor,currentColor) 0 100%/0 1.5px no-repeat;transition:background-size .35s var(--ease)}main p a:not(.btn):not([class]):hover{background-size:100% 1.5px}.kl-lift{transition:transform .5s var(--ease),box-shadow .5s var(--ease)}.kl-lift:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-zoom img{transition:transform 1.1s var(--ease)!important}.kl-zoom:hover img,.kl-lift:hover .kl-zoom img{transform:scale(1.06)}img.kl-fade{opacity:0;transition:opacity .7s var(--ease)}img.kl-fade.kl-loaded{opacity:1}:host.kl-js [data-kl-rv]{opacity:0;transform:translateY(32px);transition:opacity .9s var(--ease),transform 1s var(--ease);transition-delay:calc(var(--i,0)*80ms)}:host.kl-js [data-kl-rv=\"left\"]{transform:translateX(-36px)}:host.kl-js [data-kl-rv=\"right\"]{transform:translateX(36px)}:host.kl-js [data-kl-rv=\"scale\"]{transform:scale(.94)}:host.kl-js [data-kl-rv].kl-in{opacity:1;transform:none}:host.kl-js [data-kl-rv=\"img\"]{opacity:1;transform:none;clip-path:inset(0 0 100% 0);transition:clip-path 1.2s var(--ease-io)}:host.kl-js [data-kl-rv=\"img\"] img{transform:scale(1.15);transition:transform 1.6s var(--ease)}:host.kl-js [data-kl-rv=\"img\"].kl-in{clip-path:inset(0)}:host.kl-js [data-kl-rv=\"img\"].kl-in img{transform:none}:host.kl-js [data-kl-rv].kl-done{transition-delay:0s}.kl-split .kl-w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.1em;margin-bottom:-.1em}.kl-split .kl-w>span{display:inline-block;transform:translateY(110%);transition:transform 1s var(--ease);transition-delay:calc(var(--i,0)*55ms + 80ms)}.kl-split.kl-in .kl-w>span{transform:none}:host:not(.kl-js) .kl-split .kl-w>span{transform:none}@media (prefers-reduced-motion:reduce){::view-transition-old(root),::view-transition-new(root){animation:none}:host.kl-js [data-kl-rv],:host.kl-js [data-kl-rv] img,.kl-split .kl-w>span{opacity:1!important;transform:none!important;clip-path:none!important;transition:none!important}.kl-intro,.kl-curtain{display:none!important}.kl-lift:hover,.btn:hover .arrow{transform:none}.btn::after{display:none}}.kl-opt{display:flex;flex-direction:column;gap:10px;margin:18px 0 6px}.kl-opt>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.kl-opt>div{display:flex;flex-wrap:wrap;gap:8px}.kl-opt button{font:600 14px/1 var(--body);padding:11px 16px;border-radius:999px;border:1.5px solid var(--grey);background:#fff;color:var(--navy);cursor:pointer;transition:border-color .2s,background .2s,color .2s,transform .2s var(--ease)}.kl-opt button:hover{border-color:var(--orange);transform:translateY(-1px)}.kl-opt button.on{background:var(--navy);border-color:var(--navy);color:#fff}.kl-share{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 4px}.kl-share>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-right:4px}.kl-share a,.kl-share button{font:600 13px/1 var(--body);padding:9px 13px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);border:0;cursor:pointer;transition:background .2s,color .2s}.kl-share a:hover,.kl-share button:hover{background:var(--navy);color:#fff}.kl-mail{background:var(--white);padding:clamp(56px,7vw,100px) 0}.kl-mail-head{margin-bottom:28px}.kl-mail-head .h-section{margin-top:14px}.kl-mail-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.kl-mail-grid a{display:flex;flex-direction:column;gap:6px;padding:22px;border-radius:18px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .25s,color .25s,transform .3s var(--ease)}.kl-mail-grid a:hover{background:var(--navy);color:#fff;transform:translateY(-3px)}.kl-mail-grid small{font-size:12px;letter-spacing:.1em;text-transform:uppercase;opacity:.65}.kl-mail-grid b{font-size:17px;font-weight:700;overflow-wrap:anywhere}.kl-mail-soc{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}.kl-mail-soc>div{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:18px 22px;border:1.5px solid var(--grey);border-radius:18px}.kl-mail-soc small{flex-basis:100%;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange-deep)}.kl-mail-soc a{font-weight:600;font-size:14px;padding:8px 14px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .2s,color .2s}.kl-mail-soc a:hover{background:var(--orange);color:var(--navy)}@media (max-width:900px){.kl-mail-grid{grid-template-columns:1fr 1fr}.kl-mail-soc{grid-template-columns:1fr}}@media (max-width:520px){.kl-mail-grid{grid-template-columns:1fr}}a.brands{display:block;text-decoration:none}a.brands:hover .track{animation-play-state:paused}.kl-rev{background:var(--grey-2,#F1F0EE);padding:clamp(64px,8vw,120px) 0}.kl-rev-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:8px}.kl-rev figure{margin:0;background:#fff;border-radius:22px;padding:30px 28px;display:flex;flex-direction:column;justify-content:space-between;gap:26px;position:relative;transition:transform .4s var(--ease),box-shadow .4s}.kl-rev figure::before{content:\"“\";position:absolute;top:6px;right:22px;font:800 90px/1 var(--head);color:var(--orange);opacity:.35}.kl-rev figure:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}.kl-rev blockquote{margin:0;font-size:16px;line-height:1.6;color:var(--navy)}.kl-rev figcaption{display:grid;grid-template-columns:auto 1fr;column-gap:12px;align-items:center}.kl-rev .av{grid-row:span 2;width:46px;height:46px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:800;font-size:14px}.kl-rev figcaption b{font-size:15px}.kl-rev figcaption small{font-size:13px;color:var(--muted)}.kl-blogt{background:var(--white);padding:clamp(64px,8vw,120px) 0}.kl-blogt-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.kl-blogt-grid a{display:flex;flex-direction:column;gap:10px;color:var(--navy)}.kl-blogt-grid img{width:100%;aspect-ratio:16/11;object-fit:cover;border-radius:18px;transition:transform .6s var(--ease),filter .4s}.kl-blogt-grid a:hover img{transform:scale(1.03);filter:saturate(1.1)}.kl-blogt-grid small{font-size:12px;color:var(--muted);letter-spacing:.06em}.kl-blogt-grid b{font-size:17px;line-height:1.35;transition:color .2s}.kl-blogt-grid a:hover b{color:var(--orange-deep)}@media (max-width:1000px){.kl-rev-grid{grid-template-columns:1fr}.kl-blogt-grid{grid-template-columns:1fr 1fr}}@media (max-width:560px){.kl-blogt-grid{grid-template-columns:1fr}}.kl-lang{display:flex;align-items:center;gap:2px;padding:3px;border-radius:999px;background:rgba(33,30,54,.06);margin-right:6px}.kl-lang a{font:700 12px/1 var(--body);letter-spacing:.04em;padding:7px 10px;border-radius:999px;color:var(--navy);opacity:.6;transition:background .25s,opacity .25s,color .25s}.kl-lang a:hover{opacity:1}.kl-lang a.on{background:var(--navy);color:#fff;opacity:1}.kl-lang-m{margin:0 0 14px;margin-right:0;align-self:stretch;background:rgba(255,255,255,.08)}.kl-lang-m a{flex:1;text-align:center;color:#fff;font-size:13px;padding:10px 14px}.kl-lang-m a.on{background:var(--orange);color:var(--navy)}@media (max-width:1100px){.nav .kl-lang:not(.kl-lang-m){display:none}}.kl-icon-btn{position:relative}.kl-cart-n{position:absolute;top:-6px;right:-6px;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:var(--orange);color:var(--navy);font:800 10.5px/19px var(--body);text-align:center;box-shadow:0 0 0 2px #fff;pointer-events:none}.kl-cart-n.bump{animation:kl-bump .45s var(--ease)}@keyframes kl-bump{40%{transform:scale(1.35)}}.kl-added{position:fixed;left:50%;bottom:24px;z-index:95;display:flex;gap:16px;align-items:center;background:var(--navy);color:#fff;padding:12px 14px 12px 18px;border-radius:14px;font-size:14px;font-weight:600;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transform:translate(-50%,160%);opacity:0;transition:transform .4s var(--ease),opacity .3s;max-width:calc(100vw - 32px)}.kl-added.show{transform:translate(-50%,0);opacity:1}.kl-added a{background:var(--orange);color:var(--navy);padding:8px 12px;border-radius:10px;white-space:nowrap}.kl-qdel svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle}.kl-qdel:hover{color:#C0392B}","html":{"ru":{"page":"\n<section class=\"dl-hero\"><div class=\"wrap\"><div class=\"dl-crumbs\"><a href=\"/\">Главная</a> / Покупателям / Доставка и оплата</div><div class=\"dl-hero-grid\"><div class=\"dl-hero-panel\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div><span class=\"eyebrow\">Покупателям</span><h1 style=\"margin-top:22px\">Доставка <em>и оплата</em></h1><p class=\"dl-sub\">Покупайте у нас — привезём и установим мы.</p><p class=\"dl-desc\">Бесплатно доставляем покупки из магазинов Kashlux к вам домой по Ташкенту в течение 3 дней, а также в любой регион Узбекистана. Заказы привозят и устанавливают наши сотрудники.</p><div class=\"dl-ctas\"><a href=\"#dl-calc\" class=\"btn btn-orange kl-magnet\">Рассчитать срок <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"/category/all-products\" class=\"btn btn-line\">Перейти в каталог</a></div></div><div class=\"dl-stats\"><div><b class=\"num\">3</b><span>дня — доставка по Ташкенту</span></div><div><b>0</b><span>сум за доставку по городу</span></div><div><b class=\"num\">14</b><span>регионов Узбекистана</span></div></div></div><div class=\"dl-hero-media\"><img srcset=\"https://static.wixstatic.com/media/a8ce0d_0b07ccbdf7bb439791a62334ee1b8aa2~mv2.jpeg/v1/fill/w_550,h_550,al_c,q_80,enc_auto/x.jpg 550w, https://static.wixstatic.com/media/a8ce0d_0b07ccbdf7bb439791a62334ee1b8aa2~mv2.jpeg/v1/fill/w_825,h_825,al_c,q_80,enc_auto/x.jpg 825w, https://static.wixstatic.com/media/a8ce0d_0b07ccbdf7bb439791a62334ee1b8aa2~mv2.jpeg/v1/fill/w_1100,h_1100,al_c,q_80,enc_auto/x.jpg 1100w\" sizes=\"(max-width: 605px) 100vw, 605px\" fetchpriority=\"high\" src=\"https://static.wixstatic.com/media/a8ce0d_0b07ccbdf7bb439791a62334ee1b8aa2~mv2.jpeg/v1/fill/w_1100,h_1100,al_c,q_80,enc_auto/x.jpg\" alt=\"Сотрудник шоурума Kashlux передаёт покупку клиенту\"><div class=\"dl-chip\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12h24v20H4zM28 18h9l7 7v7H28z\"/><circle cx=\"12\" cy=\"35\" r=\"4\"/><circle cx=\"36\" cy=\"35\" r=\"4\"/></g></svg><div><b>Доставим и установим</b>Работают сотрудники Kashlux</div></div></div></div></div></section><section class=\"dl-opts\" id=\"dl-opts\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Способы получения</span><h2 class=\"h-section\" style=\"margin-top:18px\">Как получить <em>заказ</em></h2></div><p class=\"lead\">Выберите удобный вариант — менеджер подтвердит дату и время после оформления заказа.</p></div><div class=\"dl-opt-grid\"><article class=\"dl-opt-card dl-feat\"><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12h24v20H4zM28 18h9l7 7v7H28z\"/><circle cx=\"12\" cy=\"35\" r=\"4\"/><circle cx=\"36\" cy=\"35\" r=\"4\"/></g></svg><h3>По Ташкенту</h3><p>Бесплатно привезём покупку из магазинов Kashlux к вам домой в течение 3 дней.</p><span class=\"dl-tag\">Бесплатно · до 3 дней</span></article><article class=\"dl-opt-card\"><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 43s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z\"/><circle cx=\"24\" cy=\"19\" r=\"5\"/></g></svg><h3>По Узбекистану</h3><p>Доставляем в любой регион страны. Срок и условия менеджер рассчитает под ваш заказ.</p><span class=\"dl-tag\">Все регионы</span></article><article class=\"dl-opt-card\"><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg><h3>Доставка с установкой</h3><p>Наши сотрудники не только привезут, но и установят купленное оборудование.</p><span class=\"dl-tag\">Сотрудники Kashlux</span></article><article class=\"dl-opt-card\"><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 41V9h20v32M28 19h12v22M4 41h40M14 15h2M20 15h2M14 22h2M20 22h2M14 29h2M20 29h2M33 26h2M33 33h2\"/></g></svg><h3>Самовывоз</h3><p>Ташкент, пр. Ш. Рашидова, 16. Пн–Сб с 09:00 до 18:00.</p><span class=\"dl-tag\">Главный шоурум</span></article></div></div></section><section class=\"dl-calc\" id=\"dl-calc\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Калькулятор</span><h2 class=\"h-section\" style=\"margin-top:18px\">Когда приедет <em>заказ?</em></h2></div><p class=\"lead\">Выберите регион и размер заказа — покажем ориентировочный срок. Точную дату подтвердит менеджер.</p></div><div class=\"dl-calc-grid\"><div class=\"dl-panel\"><div><label class=\"dl-lbl\" for=\"dlRegion\">Куда доставить</label><div class=\"dl-select\"><select id=\"dlRegion\"><option value=\"tash\" selected>г. Ташкент</option><option value=\"tobl\">Ташкентская область</option><option value=\"sir\">Сырдарьинская область</option><option value=\"jiz\">Джизакская область</option><option value=\"and\">Андижанская область</option><option value=\"nam\">Наманганская область</option><option value=\"fer\">Ферганская область</option><option value=\"sam\">Самаркандская область</option><option value=\"kash\">Кашкадарьинская область</option><option value=\"nav\">Навоийская область</option><option value=\"bux\">Бухарская область</option><option value=\"sur\">Сурхандарьинская область</option><option value=\"xor\">Хорезмская область</option><option value=\"kk\">Республика Каракалпакстан</option></select></div></div><fieldset style=\"border:0\"><legend class=\"dl-lbl\">Размер заказа</legend><div class=\"dl-seg\"><label><input type=\"radio\" name=\"dlSize\" value=\"s\" checked><span>Небольшой<small>смесители, аксессуары</small></span></label><label><input type=\"radio\" name=\"dlSize\" value=\"m\"><span>Средний<small>унитаз, раковина, котёл</small></span></label><label><input type=\"radio\" name=\"dlSize\" value=\"l\"><span>Крупный<small>ванна, мебель, комплект</small></span></label></div></fieldset><label class=\"dl-toggle\"><input type=\"checkbox\" id=\"dlInstall\"><i></i><span>Нужна установка<small>Монтаж выполняют сотрудники Kashlux</small></span></label></div><div class=\"dl-res\" aria-live=\"polite\"><div class=\"dl-res-top\"><h3>Ориентировочный срок</h3><span class=\"dl-badge dl-real\" id=\"dlBadge\">Ташкент</span></div><div class=\"dl-days\"><output id=\"dlDays\">1–3</output><span id=\"dlUnit\">дня</span></div><div class=\"dl-bar\" aria-hidden=\"true\"><i id=\"dlBar\"></i></div><div class=\"dl-bar-l\"><span>1 день</span><span>14 дней</span></div><ul><li><span>Доставка</span><span id=\"dlCost\">Бесплатно</span></li><li><span>Установка</span><span id=\"dlInst\">Не требуется</span></li><li><span>Оплата</span><span>Наличными, картой или по счёту</span></li></ul><a href=\"/category/all-products\" class=\"btn btn-navy\">Выбрать товары <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><p class=\"dl-note\" id=\"dlNote\">По Ташкенту доставка покупок бесплатна и занимает до 3 дней.</p></div></div></div></section><section class=\"dl-pay\" id=\"dl-pay\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Оплата</span><h2 class=\"h-section\" style=\"margin-top:18px\">Принимаем <em>все способы</em> оплаты</h2></div><p class=\"lead\">Платите так, как удобно вам: при получении, с телефона или по безналичному расчёту для компаний.</p></div><div class=\"dl-pay-grid\"><article class=\"dl-pay-card\"><span class=\"dl-num\" aria-hidden=\"true\">01</span><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l18-8 18 8v18l-18 8-18-8zM6 15l18 8 18-8M24 23v18\"/></g></svg><h3>Наличными</h3><p>Оплата наличными при получении заказа — после оформления документов.</p></article><article class=\"dl-pay-card\"><span class=\"dl-num\" aria-hidden=\"true\">02</span><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"38\" height=\"26\" rx=\"2\"/><path d=\"M5 18h38M11 30h8\"/></g></svg><h3>Картой</h3><p>Оплачивайте через Payme, Click, Uzum и другие приложения для оплаты картой.</p><div class=\"dl-apps\"><span>Payme</span><span>Click</span><span>Uzum</span></div></article><article class=\"dl-pay-card\"><span class=\"dl-num\" aria-hidden=\"true\">03</span><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 41V9h20v32M28 19h12v22M4 41h40M14 15h2M20 15h2M14 22h2M20 22h2M14 29h2M20 29h2M33 26h2M33 33h2\"/></g></svg><h3>Перечислением</h3><p>Для компаний и деловых партнёров — оплата на основании счёта-фактуры.</p><div class=\"dl-apps\"><span>Счёт-фактура</span><a href=\"/corporative-partners\" style=\"font-size:13px;font-weight:600;color:var(--orange-deep);align-self:center\">B2B →</a></div></article></div></div></section><section class=\"dl-steps\" id=\"dl-steps\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Как это работает</span><h2 class=\"h-section\" style=\"margin-top:18px\">От заказа <em>до установки</em></h2></div><p class=\"lead\">Пять шагов — и новое оборудование уже на своём месте.</p></div><ol class=\"dl-track\" id=\"dlTrack\"><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l18-8 18 8v18l-18 8-18-8zM6 15l18 8 18-8M24 23v18\"/></g></svg></div><small>ШАГ 01</small><h3>Заказ</h3><p>В шоуруме, на сайте или по телефону +998 95 146 16 16.</p></li><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 7h6l3 9-4 3a24 24 0 0 0 9 9l3-4 9 3v6c0 2-2 4-4 4C22 37 11 26 11 11c0-2 2-4 4-4z\"/></g></svg></div><small>ШАГ 02</small><h3>Подтверждение</h3><p>Менеджер уточнит адрес, дату и удобное время доставки.</p></li><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 25l8 8 16-17\"/></g></svg></div><small>ШАГ 03</small><h3>Комплектация</h3><p>Проверяем товар, упаковку и сопроводительные документы.</p></li><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12h24v20H4zM28 18h9l7 7v7H28z\"/><circle cx=\"12\" cy=\"35\" r=\"4\"/><circle cx=\"36\" cy=\"35\" r=\"4\"/></g></svg></div><small>ШАГ 04</small><h3>Доставка</h3><p>По Ташкенту — бесплатно, в течение 3 дней.</p></li><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg></div><small>ШАГ 05</small><h3>Установка</h3><p>Наши сотрудники смонтируют оборудование, если вы его заказали.</p></li></ol></div></section><section class=\"dl-check\" id=\"dl-check\"><div class=\"wrap\"><div class=\"dl-check-grid\"><div class=\"dl-check-media\"><img srcset=\"https://static.wixstatic.com/media/a8ce0d_5343b8841662479f9245dbb57bc742b0~mv2.jpeg/v1/fill/w_550,h_470,al_c,q_80,enc_auto/x.jpg 550w, https://static.wixstatic.com/media/a8ce0d_5343b8841662479f9245dbb57bc742b0~mv2.jpeg/v1/fill/w_825,h_705,al_c,q_80,enc_auto/x.jpg 825w, https://static.wixstatic.com/media/a8ce0d_5343b8841662479f9245dbb57bc742b0~mv2.jpeg/v1/fill/w_1100,h_940,al_c,q_80,enc_auto/x.jpg 1100w\" sizes=\"(max-width: 605px) 100vw, 605px\" loading=\"lazy\" decoding=\"async\" src=\"https://static.wixstatic.com/media/a8ce0d_5343b8841662479f9245dbb57bc742b0~mv2.jpeg/v1/fill/w_1100,h_940,al_c,q_80,enc_auto/x.jpg\" alt=\"Экспозиция унитазов в шоуруме Kashlux\"><div class=\"dl-chip\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 5l16 6v11c0 10-7 18-16 21C15 40 8 32 8 22V11z\"/><path d=\"M17 24l5 5 9-10\"/></g></svg><div><b>Проверьте до подписи</b>Менеджер ответит на вопросы</div></div></div><div><span class=\"eyebrow\">При получении</span><h2 class=\"h-section\" style=\"margin-top:18px\">Чек-лист <em>получателя</em></h2><p class=\"lead\" style=\"margin-top:16px\">Прежде чем принять товар, внимательно прочитайте его описание и спросите у менеджера всё, что непонятно. Отметьте пункты по ходу проверки.</p><div class=\"dl-list\" id=\"dlList\"><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Целостность упаковки</b>Нет вмятин, следов влаги и вскрытия.</span></label><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Отсутствие дефектов</b>Осмотрите поверхность, покрытие и углы изделия.</span></label><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Технические характеристики</b>Модель, цвет и размеры совпадают с заказом.</span></label><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Комплектность</b>Все детали, крепёж и аксессуары на месте.</span></label><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Документы</b>Чек, гарантийный талон и инструкция приложены.</span></label></div><div class=\"dl-prog\"><span id=\"dlCount\">0 из 5</span><div class=\"dl-bar\" aria-hidden=\"true\"><i id=\"dlCheckBar\" style=\"width:0\"></i></div></div><div class=\"dl-done\" id=\"dlDone\" role=\"status\">Всё проверено — можно принимать заказ. Если что-то не так, вы вправе отказаться от товара при получении.</div></div></div></div></section><section class=\"dl-faq\" id=\"dl-faq\"><div class=\"wrap\"><div class=\"dl-faq-grid\"><div><span class=\"eyebrow\">Вопросы</span><h2 class=\"h-section\" style=\"margin-top:18px\">Частые <em>вопросы</em></h2><p class=\"lead\" style=\"margin-top:16px\">Не нашли ответ? Позвоните — менеджер подскажет по доставке, оплате и установке.</p><div class=\"dl-help\"><small>Горячая линия · Пн–Сб 09:00–18:00</small><a href=\"tel:+998951461616\">+998 95 146 16 16</a><small>info@kashlux.uz</small></div></div><div class=\"dl-acc\"><details open><summary>Сколько стоит доставка по Ташкенту?<i></i></summary><p>Нисколько. Товары, купленные в магазинах Kashlux, мы бесплатно доставляем к вам домой по Ташкенту в течение 3 дней.</p></details><details><summary>Доставляете ли вы в регионы?<i></i></summary><p>Да, доставляем в любой регион Узбекистана. Срок и условия зависят от региона и объёма заказа — менеджер рассчитает их при оформлении.</p></details><details><summary>Кто устанавливает оборудование?<i></i></summary><p>Купленные заказы доставляют и устанавливают сотрудники Kashlux. Для ремонта и монтажа можно также вызвать мастера через <a href=\"/help-engineer\" style=\"color:var(--orange-deep);font-weight:600\">сантехническую помощь</a>.</p></details><details><summary>Можно ли забрать заказ самостоятельно?<i></i></summary><p>Да. Самовывоз — Ташкент, пр. Ш. Рашидова, 16 (индекс 100000). Офис работает с понедельника по субботу с 09:00 до 18:00.</p></details><details><summary>Какие способы оплаты доступны?<i></i></summary><p>Наличные при получении, оплата картой через Payme, Click, Uzum и другие приложения, а для компаний — безналичный расчёт по счёту-фактуре.</p></details><details><summary>Что делать, если товар повреждён?<i></i></summary><p>Проверьте товар до того, как примете его. Вы вправе отказаться от повреждённого, некомплектного или не соответствующего описанию товара. Подробнее — на странице <a href=\"/guarantee\" style=\"color:var(--orange-deep);font-weight:600\">гарантии и возврата</a>.</p></details></div></div></div></section><section class=\"dl-cta\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"wrap\"><div class=\"dl-cta-in\"><div><h2>Выберите — привезём <br>за 3 дня</h2><p>Более 30 лет создаём ванные комнаты мечты. Оформите заказ онлайн или приходите в шоурум на пр. Ш. Рашидова, 16.</p></div><div class=\"dl-cta-btns\"><a href=\"/category/all-products\" class=\"btn btn-navy kl-magnet\">Разместить заказ <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"/contact\" class=\"btn btn-line\">Шоурумы</a></div></div></div></section>\n"},"uz":{"page":"\n<section class=\"dl-hero\"><div class=\"wrap\"><div class=\"dl-crumbs\"><a href=\"/\">Boş sahifa</a> / Xaridorlarga / Yetkazib beriş va tölov</div><div class=\"dl-hero-grid\"><div class=\"dl-hero-panel\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div><span class=\"eyebrow\">Xaridorlarga</span><h1 style=\"margin-top:22px\">Yetkazib beriş <em>va tölov</em></h1><p class=\"dl-sub\">Bizdan xarid qiling — olib kelamiz va örnatamiz.</p><p class=\"dl-desc\">Kashlux dökonlaridan xaridlaringizni Toşkent böylab 3 kun içida uyingizgaça bepul yetkazib beramiz, şuningdek Özbekistonning istalgan viloyatiga ham. Buyurtmalarni xodimlarimiz olib keladi va örnatadi.</p><div class=\"dl-ctas\"><a href=\"#dl-calc\" class=\"btn btn-orange kl-magnet\">Muddatni hisoblaş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"/category/all-products\" class=\"btn btn-line\">Katalogga ötiş</a></div></div><div class=\"dl-stats\"><div><b class=\"num\">3</b><span>kun — Toşkent böylab yetkazib beriş</span></div><div><b>0</b><span>söm — şahar böylab yetkazib beriş</span></div><div><b class=\"num\">14</b><span>ta Özbekiston viloyati</span></div></div></div><div class=\"dl-hero-media\"><img srcset=\"https://static.wixstatic.com/media/a8ce0d_0b07ccbdf7bb439791a62334ee1b8aa2~mv2.jpeg/v1/fill/w_550,h_550,al_c,q_80,enc_auto/x.jpg 550w, https://static.wixstatic.com/media/a8ce0d_0b07ccbdf7bb439791a62334ee1b8aa2~mv2.jpeg/v1/fill/w_825,h_825,al_c,q_80,enc_auto/x.jpg 825w, https://static.wixstatic.com/media/a8ce0d_0b07ccbdf7bb439791a62334ee1b8aa2~mv2.jpeg/v1/fill/w_1100,h_1100,al_c,q_80,enc_auto/x.jpg 1100w\" sizes=\"(max-width: 605px) 100vw, 605px\" fetchpriority=\"high\" src=\"https://static.wixstatic.com/media/a8ce0d_0b07ccbdf7bb439791a62334ee1b8aa2~mv2.jpeg/v1/fill/w_1100,h_1100,al_c,q_80,enc_auto/x.jpg\" alt=\"Kashlux şourumi xodimi xaridni mijozga topşirmoqda\"><div class=\"dl-chip\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12h24v20H4zM28 18h9l7 7v7H28z\"/><circle cx=\"12\" cy=\"35\" r=\"4\"/><circle cx=\"36\" cy=\"35\" r=\"4\"/></g></svg><div><b>Yetkazamiz va örnatamiz</b>Kashlux xodimlari işlaydi</div></div></div></div></div></section><section class=\"dl-opts\" id=\"dl-opts\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Qabul qiliş usullari</span><h2 class=\"h-section\" style=\"margin-top:18px\"><em>Buyurtmani</em> qanday oliş mumkin</h2></div><p class=\"lead\">Qulay variantni tanlang — menejer buyurtma rasmiylaştirilgandan söng sana va vaqtni tasdiqlaydi.</p></div><div class=\"dl-opt-grid\"><article class=\"dl-opt-card dl-feat\"><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12h24v20H4zM28 18h9l7 7v7H28z\"/><circle cx=\"12\" cy=\"35\" r=\"4\"/><circle cx=\"36\" cy=\"35\" r=\"4\"/></g></svg><h3>Toşkent böylab</h3><p>Kashlux dökonlaridan xaridingizni 3 kun içida uyingizgaça bepul olib boramiz.</p><span class=\"dl-tag\">Bepul · 3 kungaça</span></article><article class=\"dl-opt-card\"><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 43s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z\"/><circle cx=\"24\" cy=\"19\" r=\"5\"/></g></svg><h3>Özbekiston böylab</h3><p>Mamlakatning istalgan viloyatiga yetkazib beramiz. Muddat va şartlarni menejer buyurtmangizga qarab hisoblaydi.</p><span class=\"dl-tag\">Barça viloyatlar</span></article><article class=\"dl-opt-card\"><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg><h3>Örnatiş bilan yetkazib beriş</h3><p>Xodimlarimiz xarid qilingan uskunani nafaqat olib keladi, balki örnatib ham beradi.</p><span class=\"dl-tag\">Kashlux xodimlari</span></article><article class=\"dl-opt-card\"><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 41V9h20v32M28 19h12v22M4 41h40M14 15h2M20 15h2M14 22h2M20 22h2M14 29h2M20 29h2M33 26h2M33 33h2\"/></g></svg><h3>Olib ketiş</h3><p>Toşkent, Ş. Raşidov şoh köçasi, 16. Du–Ş 09:00 dan 18:00 gaça.</p><span class=\"dl-tag\">Boş şourum</span></article></div></div></section><section class=\"dl-calc\" id=\"dl-calc\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Kalkulyator</span><h2 class=\"h-section\" style=\"margin-top:18px\">Buyurtma <em>qaçon keladi?</em></h2></div><p class=\"lead\">Viloyat va buyurtma hajmini tanlang — taxminiy muddatni körsatamiz. Aniq sanani menejer tasdiqlaydi.</p></div><div class=\"dl-calc-grid\"><div class=\"dl-panel\"><div><label class=\"dl-lbl\" for=\"dlRegion\">Qayerga yetkaziş kerak</label><div class=\"dl-select\"><select id=\"dlRegion\"><option value=\"tash\" selected>Toşkent ş.</option><option value=\"tobl\">Toşkent viloyati</option><option value=\"sir\">Sirdaryo viloyati</option><option value=\"jiz\">Jizzax viloyati</option><option value=\"and\">Andijon viloyati</option><option value=\"nam\">Namangan viloyati</option><option value=\"fer\">Farğona viloyati</option><option value=\"sam\">Samarqand viloyati</option><option value=\"kash\">Qaşqadaryo viloyati</option><option value=\"nav\">Navoiy viloyati</option><option value=\"bux\">Buxoro viloyati</option><option value=\"sur\">Surxondaryo viloyati</option><option value=\"xor\">Xorazm viloyati</option><option value=\"kk\">Qoraqalpoğiston Respublikasi</option></select></div></div><fieldset style=\"border:0\"><legend class=\"dl-lbl\">Buyurtma hajmi</legend><div class=\"dl-seg\"><label><input type=\"radio\" name=\"dlSize\" value=\"s\" checked><span>Kiçik<small>aralaştirgiçlar, aksessuarlar</small></span></label><label><input type=\"radio\" name=\"dlSize\" value=\"m\"><span>Örtaça<small>unitaz, rakovina, qozon</small></span></label><label><input type=\"radio\" name=\"dlSize\" value=\"l\"><span>Yirik<small>vanna, mebel, töplam</small></span></label></div></fieldset><label class=\"dl-toggle\"><input type=\"checkbox\" id=\"dlInstall\"><i></i><span>Örnatiş kerak<small>Örnatişni Kashlux xodimlari bajaradi</small></span></label></div><div class=\"dl-res\" aria-live=\"polite\"><div class=\"dl-res-top\"><h3>Taxminiy muddat</h3><span class=\"dl-badge dl-real\" id=\"dlBadge\">Toşkent</span></div><div class=\"dl-days\"><output id=\"dlDays\">1–3</output><span id=\"dlUnit\">kun</span></div><div class=\"dl-bar\" aria-hidden=\"true\"><i id=\"dlBar\"></i></div><div class=\"dl-bar-l\"><span>1 kun</span><span>14 kun</span></div><ul><li><span>Yetkazib beriş</span><span id=\"dlCost\">Bepul</span></li><li><span>Örnatiş</span><span id=\"dlInst\">Talab qilinmaydi</span></li><li><span>Tölov</span><span>Naqd, karta yoki hisob böyiça</span></li></ul><a href=\"/category/all-products\" class=\"btn btn-navy\">Mahsulotlarni tanlaş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><p class=\"dl-note\" id=\"dlNote\">Toşkent böylab xaridlarni yetkazib beriş bepul va 3 kungaça davom etadi.</p></div></div></div></section><section class=\"dl-pay\" id=\"dl-pay\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Tölov</span><h2 class=\"h-section\" style=\"margin-top:18px\">Tölovning <em>barça usullarini</em> qabul qilamiz</h2></div><p class=\"lead\">Özingizga qulay usulda tölang: qabul qilişda, telefondan yoki kompaniyalar uçun naqd pulsiz hisob-kitob orqali.</p></div><div class=\"dl-pay-grid\"><article class=\"dl-pay-card\"><span class=\"dl-num\" aria-hidden=\"true\">01</span><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l18-8 18 8v18l-18 8-18-8zM6 15l18 8 18-8M24 23v18\"/></g></svg><h3>Naqd pulda</h3><p>Buyurtmani qabul qilişda naqd pul bilan tölov — hujjatlar rasmiylaştirilgandan söng.</p></article><article class=\"dl-pay-card\"><span class=\"dl-num\" aria-hidden=\"true\">02</span><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"38\" height=\"26\" rx=\"2\"/><path d=\"M5 18h38M11 30h8\"/></g></svg><h3>Karta orqali</h3><p>Payme, Click, Uzum va karta bilan tölaş uçun boşqa ilovalar orqali tölang.</p><div class=\"dl-apps\"><span>Payme</span><span>Click</span><span>Uzum</span></div></article><article class=\"dl-pay-card\"><span class=\"dl-num\" aria-hidden=\"true\">03</span><svg class=\"dl-ico\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 41V9h20v32M28 19h12v22M4 41h40M14 15h2M20 15h2M14 22h2M20 22h2M14 29h2M20 29h2M33 26h2M33 33h2\"/></g></svg><h3>Ötkazma orqali</h3><p>Kompaniyalar va işbilarmon hamkorlar uçun — hisob-faktura asosida tölov.</p><div class=\"dl-apps\"><span>Hisob-faktura</span><a href=\"/corporative-partners\" style=\"font-size:13px;font-weight:600;color:var(--orange-deep);align-self:center\">B2B →</a></div></article></div></div></section><section class=\"dl-steps\" id=\"dl-steps\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Bu qanday işlaydi</span><h2 class=\"h-section\" style=\"margin-top:18px\">Buyurtmadan <em>örnatişgaça</em></h2></div><p class=\"lead\">Beş qadam — va yangi uskuna allaqaçon öz joyida.</p></div><ol class=\"dl-track\" id=\"dlTrack\"><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 15l18-8 18 8v18l-18 8-18-8zM6 15l18 8 18-8M24 23v18\"/></g></svg></div><small>01-QADAM</small><h3>Buyurtma</h3><p>Şourumda, saytda yoki +998 95 146 16 16 raqami orqali.</p></li><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 7h6l3 9-4 3a24 24 0 0 0 9 9l3-4 9 3v6c0 2-2 4-4 4C22 37 11 26 11 11c0-2 2-4 4-4z\"/></g></svg></div><small>02-QADAM</small><h3>Tasdiqlaş</h3><p>Menejer manzil, sana va yetkazib beriş uçun qulay vaqtni aniqlaydi.</p></li><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 25l8 8 16-17\"/></g></svg></div><small>03-QADAM</small><h3>Jihozlaş</h3><p>Tovar, qadoq va ilova hujjatlarini tekşiramiz.</p></li><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12h24v20H4zM28 18h9l7 7v7H28z\"/><circle cx=\"12\" cy=\"35\" r=\"4\"/><circle cx=\"36\" cy=\"35\" r=\"4\"/></g></svg></div><small>04-QADAM</small><h3>Yetkazib beriş</h3><p>Toşkent böylab — bepul, 3 kun içida.</p></li><li><div class=\"dl-dot\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 6a10 10 0 0 0-9 14L7 34a4 4 0 0 0 6 6l14-14a10 10 0 0 0 13-12l-6 6-6-2-2-6z\"/></g></svg></div><small>05-QADAM</small><h3>Örnatiş</h3><p>Agar örnatiş xizmatini buyurtma qilgan bölsangiz, xodimlarimiz uskunani örnatib beradi.</p></li></ol></div></section><section class=\"dl-check\" id=\"dl-check\"><div class=\"wrap\"><div class=\"dl-check-grid\"><div class=\"dl-check-media\"><img srcset=\"https://static.wixstatic.com/media/a8ce0d_5343b8841662479f9245dbb57bc742b0~mv2.jpeg/v1/fill/w_550,h_470,al_c,q_80,enc_auto/x.jpg 550w, https://static.wixstatic.com/media/a8ce0d_5343b8841662479f9245dbb57bc742b0~mv2.jpeg/v1/fill/w_825,h_705,al_c,q_80,enc_auto/x.jpg 825w, https://static.wixstatic.com/media/a8ce0d_5343b8841662479f9245dbb57bc742b0~mv2.jpeg/v1/fill/w_1100,h_940,al_c,q_80,enc_auto/x.jpg 1100w\" sizes=\"(max-width: 605px) 100vw, 605px\" loading=\"lazy\" decoding=\"async\" src=\"https://static.wixstatic.com/media/a8ce0d_5343b8841662479f9245dbb57bc742b0~mv2.jpeg/v1/fill/w_1100,h_940,al_c,q_80,enc_auto/x.jpg\" alt=\"Kashlux şourumidagi unitazlar ekspozitsiyasi\"><div class=\"dl-chip\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 5l16 6v11c0 10-7 18-16 21C15 40 8 32 8 22V11z\"/><path d=\"M17 24l5 5 9-10\"/></g></svg><div><b>Imzolaşdan oldin tekşiring</b>Menejer savollarga javob beradi</div></div></div><div><span class=\"eyebrow\">Qabul qilişda</span><h2 class=\"h-section\" style=\"margin-top:18px\"><em>Qabul qiluvçi</em> uçun çek-list</h2><p class=\"lead\" style=\"margin-top:16px\">Tovarni qabul qilişdan oldin uning tavsifini diqqat bilan öqing va tuşunarsiz narsalarni menejerdan sörang. Tekşiriş davomida bandlarni belgilab boring.</p><div class=\"dl-list\" id=\"dlList\"><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Qadoq butunligi</b>Ezilgan joylar, namlik va oçilganlik izlari yöq.</span></label><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Nuqsonlar yöqligi</b>Buyumning yuzasi, qoplamasi va burçaklarini közdan keçiring.</span></label><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Texnik xususiyatlar</b>Model, rang va ölçamlar buyurtmaga mos keladi.</span></label><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Töliq komplekt</b>Barça qismlar, mahkamlagiçlar va aksessuarlar joyida.</span></label><label class=\"dl-item\"><input type=\"checkbox\"><span class=\"dl-box\"><svg viewBox=\"0 0 48 48\"><path d=\"M12 25l8 8 16-17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\"/></svg></span><span><b>Hujjatlar</b>Çek, kafolat taloni va yöriqnoma ilova qilingan.</span></label></div><div class=\"dl-prog\"><span id=\"dlCount\">5 dan 0</span><div class=\"dl-bar\" aria-hidden=\"true\"><i id=\"dlCheckBar\" style=\"width:0\"></i></div></div><div class=\"dl-done\" id=\"dlDone\" role=\"status\">Hammasi tekşirildi — buyurtmani qabul qilişingiz mumkin. Agar biror narsa notöğri bölsa, qabul qilişda mahsulotdan voz keçişga haqlisiz.</div></div></div></div></section><section class=\"dl-faq\" id=\"dl-faq\"><div class=\"wrap\"><div class=\"dl-faq-grid\"><div><span class=\"eyebrow\">Savollar</span><h2 class=\"h-section\" style=\"margin-top:18px\">Köp beriladigan <em>savollar</em></h2><p class=\"lead\" style=\"margin-top:16px\">Javob topmadingizmi? Qönğiroq qiling — menejer yetkazib beriş, tölov va örnatiş böyiça maslahat beradi.</p><div class=\"dl-help\"><small>Işonç telefoni · Du–Ş 09:00–18:00</small><a href=\"tel:+998951461616\">+998 95 146 16 16</a><small>info@kashlux.uz</small></div></div><div class=\"dl-acc\"><details open><summary>Toşkent böylab yetkazib beriş qança turadi?<i></i></summary><p>Heç narsa tölamaysiz. Kashlux dökonlarida xarid qilingan tovarlarni Toşkent böylab 3 kun içida uyingizgaça bepul yetkazib beramiz.</p></details><details><summary>Viloyatlarga yetkazib berasizmi?<i></i></summary><p>Ha, Özbekistonning istalgan viloyatiga yetkazib beramiz. Muddat va şartlar viloyat va buyurtma hajmiga boğliq — menejer ularni rasmiylaştirişda hisoblab beradi.</p></details><details><summary>Uskunani kim örnatadi?<i></i></summary><p>Xarid qilingan buyurtmalarni Kashlux xodimlari yetkazib beradi va örnatadi. Taʼmirlaş va örnatiş uçun ustani quyidagi xizmat orqali ham çaqirişingiz mumkin: <a href=\"/help-engineer\" style=\"color:var(--orange-deep);font-weight:600\">santexnika yordami</a>.</p></details><details><summary>Buyurtmani özim olib ketsam böladimi?<i></i></summary><p>Ha. Olib ketiş — Toşkent, Ş. Raşidov şoh köçasi, 16 (indeks 100000). Ofis duşanbadan şanbagaça 09:00 dan 18:00 gaça işlaydi.</p></details><details><summary>Qanday tölov usullari mavjud?<i></i></summary><p>Qabul qilişda naqd pul, Payme, Click, Uzum va boşqa ilovalar orqali karta bilan tölov, kompaniyalar uçun esa hisob-faktura böyiça naqd pulsiz hisob-kitob.</p></details><details><summary>Tovar şikastlangan bölsa, nima qiliş kerak?<i></i></summary><p>Tovarni qabul qilişdan oldin tekşiring. Siz şikastlangan, töliq bölmagan yoki tavsifga mos kelmaydigan tovardan voz keçişga haqlisiz. Batafsil — sahifada <a href=\"/guarantee\" style=\"color:var(--orange-deep);font-weight:600\">kafolat va qaytariş</a>.</p></details></div></div></div></section><section class=\"dl-cta\"><div class=\"pat-line\" aria-hidden=\"true\"></div><div class=\"wrap\"><div class=\"dl-cta-in\"><div><h2>Tanlang — 3 kunda <br>yetkazib beramiz</h2><p>30 yildan ortiq vaqtdan beri orzuingizdagi vannaxonalarni yaratamiz. Buyurtmani onlayn rasmiylaştiring yoki Ş. Raşidov şoh köçasi, 16-uydagi şourumga keling.</p></div><div class=\"dl-cta-btns\"><a href=\"/category/all-products\" class=\"btn btn-navy kl-magnet\">Buyurtma beriş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"/contact\" class=\"btn btn-line\">Şourumlar</a></div></div></div></section>\n"}},"js":{"ru":{"page":["\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n","\n(function(){\n  /* --- delivery estimator (regional timings are examples) --- */\n  const R={tash:[1,3],tobl:[2,4],sir:[2,5],jiz:[3,5],and:[3,6],nam:[3,6],fer:[3,6],sam:[3,5],kash:[4,7],nav:[4,7],bux:[4,7],sur:[5,8],xor:[5,9],kk:[6,10]};\n  const reg=document.getElementById('dlRegion'), inst=document.getElementById('dlInstall');\n  const out=document.getElementById('dlDays'), unit=document.getElementById('dlUnit'), bar=document.getElementById('dlBar');\n  const badge=document.getElementById('dlBadge'), cost=document.getElementById('dlCost'), instEl=document.getElementById('dlInst'), note=document.getElementById('dlNote');\n  const plural=n=>{const a=n%10,b=n%100;return a===1&&b!==11?'день':a>=2&&a<=4&&(b<10||b>=20)?'дня':'дней'};\n  function calc(){\n    const k=reg.value, size=document.querySelector('input[name=dlSize]:checked').value;\n    let [a,b]=R[k];\n    if(k!=='tash'){ if(size==='m') b+=1; if(size==='l'){a+=1;b+=2;} }\n    if(inst.checked && k!=='tash'){ b+=1; }\n    const txt=a===b?String(a):a+'–'+b;\n    if(out.textContent!==txt){out.textContent=txt;out.classList.remove('dl-flip');void out.offsetWidth;out.classList.add('dl-flip');}\n    unit.textContent=plural(b);\n    bar.style.width=Math.min(100,b/14*100)+'%';\n    const city=k==='tash';\n    badge.textContent=city?'Ташкент':'Пример';\n    badge.classList.toggle('dl-real',city);\n    cost.textContent=city?'Бесплатно':'Рассчитает менеджер';\n    instEl.textContent=inst.checked?(city?'В день доставки или по договорённости':'По согласованию с менеджером'):'Не требуется';\n    note.textContent=city?'По Ташкенту доставка покупок бесплатна и занимает до 3 дней.':'«Пример»: срок для регионов указан ориентировочно. Точные сроки и стоимость подтвердит менеджер.';\n  }\n  reg.addEventListener('change',calc); inst.addEventListener('change',calc);\n  document.querySelectorAll('input[name=dlSize]').forEach(r=>r.addEventListener('change',calc));\n  calc();\n\n  /* --- steps timeline fill on scroll --- */\n  const track=document.getElementById('dlTrack'), items=[...track.children];\n  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;\n  function lightAll(){track.style.setProperty('--dl-p',1);items.forEach(li=>li.classList.add('dl-on'));}\n  if(reduce||!('IntersectionObserver' in window)){lightAll();}\n  else{\n    const io=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;io.disconnect();\n      track.style.setProperty('--dl-p',1);\n      items.forEach((li,i)=>setTimeout(()=>li.classList.add('dl-on'),250+i*300));});},{threshold:.35});\n    io.observe(track);\n  }\n\n  /* --- receiving checklist --- */\n  const boxes=[...document.querySelectorAll('#dlList input')], cnt=document.getElementById('dlCount'), cb=document.getElementById('dlCheckBar'), done=document.getElementById('dlDone');\n  function upd(){const n=boxes.filter(b=>b.checked).length;cnt.textContent=n+' из '+boxes.length;cb.style.width=(n/boxes.length*100)+'%';done.classList.toggle('dl-show',n===boxes.length);}\n  boxes.forEach(b=>b.addEventListener('change',upd));\n})();\n"]},"uz":{"page":["\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n","\n(function(){\n  /* --- delivery estimator (regional timings are examples) --- */\n  const R={tash:[1,3],tobl:[2,4],sir:[2,5],jiz:[3,5],and:[3,6],nam:[3,6],fer:[3,6],sam:[3,5],kash:[4,7],nav:[4,7],bux:[4,7],sur:[5,8],xor:[5,9],kk:[6,10]};\n  const reg=document.getElementById('dlRegion'), inst=document.getElementById('dlInstall');\n  const out=document.getElementById('dlDays'), unit=document.getElementById('dlUnit'), bar=document.getElementById('dlBar');\n  const badge=document.getElementById('dlBadge'), cost=document.getElementById('dlCost'), instEl=document.getElementById('dlInst'), note=document.getElementById('dlNote');\n  const plural=n=>{const a=n%10,b=n%100;return a===1&&b!==11?'kun':a>=2&&a<=4&&(b<10||b>=20)?'kun':'kun'};\n  function calc(){\n    const k=reg.value, size=document.querySelector('input[name=dlSize]:checked').value;\n    let [a,b]=R[k];\n    if(k!=='tash'){ if(size==='m') b+=1; if(size==='l'){a+=1;b+=2;} }\n    if(inst.checked && k!=='tash'){ b+=1; }\n    const txt=a===b?String(a):a+'–'+b;\n    if(out.textContent!==txt){out.textContent=txt;out.classList.remove('dl-flip');void out.offsetWidth;out.classList.add('dl-flip');}\n    unit.textContent=plural(b);\n    bar.style.width=Math.min(100,b/14*100)+'%';\n    const city=k==='tash';\n    badge.textContent=city?'Toşkent':'Namuna';\n    badge.classList.toggle('dl-real',city);\n    cost.textContent=city?'Bepul':'Menejer hisoblab beradi';\n    instEl.textContent=inst.checked?(city?'Yetkazib beriş kuni yoki kelişuvga köra':'Menejer bilan kelişilgan holda'):'Talab qilinmaydi';\n    note.textContent=city?'Toşkent böylab xaridlarni yetkazib beriş bepul va 3 kungaça davom etadi.':'«Namuna»: viloyatlar uçun muddat taxminiy körsatilgan. Aniq muddat va narxni menejer tasdiqlaydi.';\n  }\n  reg.addEventListener('change',calc); inst.addEventListener('change',calc);\n  document.querySelectorAll('input[name=dlSize]').forEach(r=>r.addEventListener('change',calc));\n  calc();\n\n  /* --- steps timeline fill on scroll --- */\n  const track=document.getElementById('dlTrack'), items=[...track.children];\n  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;\n  function lightAll(){track.style.setProperty('--dl-p',1);items.forEach(li=>li.classList.add('dl-on'));}\n  if(reduce||!('IntersectionObserver' in window)){lightAll();}\n  else{\n    const io=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;io.disconnect();\n      track.style.setProperty('--dl-p',1);\n      items.forEach((li,i)=>setTimeout(()=>li.classList.add('dl-on'),250+i*300));});},{threshold:.35});\n    io.observe(track);\n  }\n\n  /* --- receiving checklist --- */\n  const boxes=[...document.querySelectorAll('#dlList input')], cnt=document.getElementById('dlCount'), cb=document.getElementById('dlCheckBar'), done=document.getElementById('dlDone');\n  function upd(){const n=boxes.filter(b=>b.checked).length;cnt.textContent=n+' dan '+boxes.length;cb.style.width=(n/boxes.length*100)+'%';done.classList.toggle('dl-show',n===boxes.length);}\n  boxes.forEach(b=>b.addEventListener('change',upd));\n})();\n"]}}};

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
  sc.src = BASE_URL + file + '?v=109fe948'; // a new build number per release, so browsers don't reuse an old copy
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

const SHELL_IDS = ['hdr', 'drawer', 'burger', 'close', 'progress', 'klSearch', 'klSearchInput', 'klSearchRes'];
function runPageScript(code, root, body, name) {
  const find = {
    // elements of the demo's own header/drawer/progress bar don't exist on Wix: hand the script a stand-in
    getElementById: (id) => root.getElementById(id) || (SHELL_IDS.includes(id) ? document.createElement('div') : null),
    querySelector: (q) => root.querySelector(q),
    querySelectorAll: (q) => root.querySelectorAll(q),
    getElementsByClassName: (c) => root.querySelectorAll('.' + c.trim().split(/\s+/).join('.')),
    getElementsByTagName: (t) => root.querySelectorAll(t),
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
