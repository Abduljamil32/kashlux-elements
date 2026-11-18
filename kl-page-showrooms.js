(function () {
// <kl-section> — Kashlux redesign (kl-page-showrooms.js) for the Wix editor. GENERATED FILE: don't edit it in Wix.
// Source: design/build/wix/kl-section.template.js + design/build/wix_sections.py (run after build.py).
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-page-showrooms.js
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
REG['page'] = {"css":":host{--navy:#211E36;--navy-2:#2B2745;--orange:#E08F45;--orange-deep:#C9752C;--white:#FFFFFF;--grey:#DFDFDE;--grey-2:#ECECEB;--ink:#211E36;--muted:#6E6B7B;--line:rgba(33,30,54,.12);--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--gutter:clamp(16px,4vw,56px);--max:1320px;--r:8px;}*{box-sizing:border-box;margin:0;padding:0}:host{scroll-behavior:smooth}.kl-body{background:var(--grey-2);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}img{display:block;max-width:100%}a{color:inherit;text-decoration:none}button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}svg{display:block;fill:var(--navy)}.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:var(--orange)}.eyebrow::before{content:\"\";width:22px;height:2px;background:currentColor}h1,h2,h3,h4{font-family:var(--head);font-weight:800;letter-spacing:-.01em;line-height:1.08}.h-section{font-size:clamp(30px,4vw,54px)}.h-section em{font-style:normal;color:var(--orange)}.lead{font-size:clamp(16px,1.2vw,18px);color:var(--muted);max-width:52ch}.btn{display:inline-flex;align-items:center;gap:12px;padding:16px 24px;font-size:14px;font-weight:600;border-radius:var(--r);transition:.25s;white-space:nowrap}.btn-orange{background:var(--orange);color:var(--navy)}.btn-orange:hover{background:var(--orange-deep)}.btn-line{border:1.5px solid currentColor}.btn-line:hover{background:var(--white);color:var(--navy);border-color:var(--white)}.arrow{width:18px;height:18px;transition:transform .25s}.btn:hover .arrow{transform:translate(3px,-3px)}.pat-fill{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='80' viewBox='0 0 1 2'%3E%3Cg%3E%3Cpath d='M0 .5L.5 0H1L.5 .5V1H0Z' fill='%23211E36'/%3E%3Cpath d='M1 .5L1.5 0H2L1.5 .5V1H1Z' fill='%23211E36' transform='translate(-1 0)'/%3E%3Cpath d='M0 1.5L.5 1H1L.5 1.5V2H0Z' fill='%23E08F45'/%3E%3C/g%3E%3C/svg%3E\");background-size:40px 80px}.pat-line{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-width='.018'/%3E%3C/svg%3E\");background-size:120px 120px}header{position:fixed;inset:0 0 auto;z-index:50;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);transition:box-shadow .3s}header.solid{box-shadow:0 1px 0 var(--line)}.nav{display:flex;align-items:center;justify-content:space-between;height:80px;gap:24px}.logo svg{height:20px;width:auto}.menu{display:flex;gap:30px;font-size:14px;font-weight:500}.menu a{position:relative;padding:6px 0}.menu a::after{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:0;background:var(--orange);transition:width .25s}.menu a:hover::after{width:100%}.nav-right{display:flex;align-items:center;gap:16px;font-size:13px}.lang{display:flex;background:var(--grey-2);border-radius:var(--r);padding:3px}.lang button{padding:5px 10px;border-radius:6px;font-size:12px;font-weight:600;color:var(--muted)}.lang button.on{background:var(--navy);color:var(--white)}.phone{font-weight:600;white-space:nowrap}.burger{display:none;width:44px;height:44px;border-radius:var(--r);background:var(--navy);color:#fff;place-items:center}.burger i{display:block;width:16px;height:2px;background:currentColor;box-shadow:0 5px 0 currentColor,0 -5px 0 currentColor}.hero{padding:80px 0 0;background:var(--white)}.hero-grid{display:grid;grid-template-columns:1.05fr 1fr;min-height:calc(100svh - 80px)}.hero-panel{position:relative;background:var(--navy);color:var(--white);padding:clamp(40px,6vw,88px) clamp(24px,5vw,72px);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}.hero-panel .pat-line{position:absolute;right:-40px;top:-20px;width:360px;height:260px;opacity:.9;-webkit-mask-image:linear-gradient(225deg,#000 30%,transparent 80%);mask-image:linear-gradient(225deg,#000 30%,transparent 80%)}.hero h1{font-size:clamp(32px,3.9vw,58px);position:relative;margin-top:28px}.hero h1 span{color:var(--orange)}.hero .sub{font-family:var(--body);font-weight:700;font-size:clamp(18px,1.6vw,22px);margin-top:22px;opacity:.9}.hero p.desc{max-width:46ch;opacity:.7;margin-top:14px}.hero-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px;padding-top:26px;border-top:1px solid rgba(255,255,255,.15)}.stats b{display:block;font-family:var(--head);font-weight:800;font-size:clamp(28px,3vw,44px);line-height:1;color:var(--orange)}.stats span{font-size:13px;opacity:.7;display:block;margin-top:8px}.hero-media{position:relative;overflow:hidden;background:var(--grey)}.hero-media img{width:100%;height:100%;object-fit:cover}.hero-media .chip{position:absolute;left:24px;bottom:24px;background:var(--white);border-radius:var(--r);padding:14px 18px;display:flex;gap:14px;align-items:center;font-size:13px;box-shadow:0 10px 30px rgba(33,30,54,.18)}.hero-media .chip b{font-family:var(--head);font-size:15px;display:block}.hero-media .chip svg{width:38px;height:38px}.brands{background:var(--orange);color:var(--navy);overflow:hidden;padding:18px 0}.track{display:flex;gap:56px;width:max-content;animation:marquee 34s linear infinite;align-items:center}.track span{font-family:var(--head);font-weight:800;font-size:22px;white-space:nowrap;text-transform:uppercase}.track svg{width:18px;height:18px}@keyframes marquee{to{transform:translateX(-50%)}}section{padding:clamp(72px,10vw,130px) 0}.sec-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:clamp(36px,5vw,64px);flex-wrap:wrap}.sec-head .eyebrow{margin-bottom:18px}.catalog{background:var(--grey-2)}.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:250px;gap:14px}.cat{position:relative;background:var(--white);border-radius:var(--r);overflow:hidden;padding:26px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .3s,box-shadow .3s}.cat:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(33,30,54,.12)}.cat .ico{width:46px;height:46px;color:var(--orange)}.cat h3{font-size:20px;position:relative;z-index:2}.cat p{font-size:13px;color:var(--muted);margin-top:6px;position:relative;z-index:2;max-width:28ch}.cat .go{position:absolute;top:22px;right:22px;width:38px;height:38px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:.25s;z-index:3}.cat:hover .go{background:var(--orange);color:#fff}.cat .go svg{width:16px;height:16px}.cat img.prod{position:absolute;right:-4%;bottom:-4%;width:48%;max-height:80%;object-fit:contain;transition:transform .5s}.cat:hover img.prod{transform:scale(1.05)}.cat.big{grid-column:span 2;grid-row:span 2;background:var(--navy);color:var(--white)}.cat.big h3{font-size:clamp(28px,3vw,40px)}.cat.big p{color:rgba(255,255,255,.65);font-size:15px;max-width:36ch}.cat.big .go{background:rgba(255,255,255,.1)}.cat.big .bigimg{position:absolute;inset:0;background:url(https://static.wixstatic.com/media/a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg/v1/fill/w_1200,h_1100,al_c,q_80,enc_auto/c.jpg) center/cover;opacity:.35;transition:opacity .4s,transform .8s}.cat.big:hover .bigimg{opacity:.5;transform:scale(1.04)}.cat.big::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(33,30,54,.2),rgba(33,30,54,.9))}.cat.big>*{position:relative;z-index:2}.cat.big .bigimg{z-index:0}.cat.big .tagrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.cat.big .tagrow span{font-size:12px;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.12)}.cat.wide{grid-column:span 2}.finish{background:var(--white)}.finish-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:center}.finish-stage{aspect-ratio:1/1;background:var(--grey-2);border-radius:var(--r);position:relative;display:grid;place-items:center;overflow:hidden}.finish-stage .pat-line{position:absolute;inset:auto -60px -60px auto;width:300px;height:300px;opacity:.5}.finish-stage svg.tap{width:68%;height:auto;position:relative}.finish-stage .tag{position:absolute;left:24px;top:22px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.finish-stage .tag b{display:block;font-family:var(--head);font-size:20px;letter-spacing:0;text-transform:none;color:var(--navy);margin-top:4px}.swatches{display:flex;gap:10px;margin:30px 0 36px;flex-wrap:wrap}.sw{display:flex;align-items:center;gap:10px;padding:8px 16px 8px 8px;border:1.5px solid var(--line);border-radius:var(--r);font-size:14px;font-weight:600;transition:.2s}.sw i{width:28px;height:28px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}.sw.on{border-color:var(--orange);background:#FDF4EC}.specs{display:grid;grid-template-columns:1fr 1fr;gap:12px}.specs div{padding:16px 18px;background:var(--grey-2);border-radius:var(--r)}.specs dt{font-size:12px;color:var(--muted)}.specs dd{font-family:var(--head);font-weight:700;font-size:17px;margin-top:2px}.projects{background:var(--navy);color:var(--white)}.projects .lead{color:rgba(255,255,255,.65)}.proj-ctrl{display:flex;gap:10px}.proj-ctrl button{width:52px;height:52px;border-radius:var(--r);background:rgba(255,255,255,.08);display:grid;place-items:center;transition:.25s;font-size:18px}.proj-ctrl button:hover{background:var(--orange)}.rail{display:grid;grid-auto-flow:column;grid-auto-columns:min(78vw,440px);gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 var(--gutter) 6px;scrollbar-width:none;margin-left:max(0px,calc((100vw - var(--max))/2))}.rail::-webkit-scrollbar{display:none}.proj{scroll-snap-align:start;background:var(--navy-2);border-radius:var(--r);overflow:hidden}.proj figure{aspect-ratio:4/4.4;overflow:hidden;position:relative}.proj img{width:100%;height:100%;object-fit:cover;transition:transform .8s}.proj:hover img{transform:scale(1.05)}.proj .star{position:absolute;top:16px;left:16px;font-size:12px;font-weight:600;background:var(--orange);padding:6px 12px;border-radius:6px}.proj .meta{padding:20px 22px 24px;display:flex;justify-content:space-between;align-items:end;gap:12px}.proj h3{font-size:22px}.proj p{font-size:14px;color:rgba(255,255,255,.55);margin-top:4px}.proj .meta svg{width:22px;height:22px;color:var(--orange);flex:none}.services{background:var(--grey-2)}.svc{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.svc article{background:var(--white);border-radius:var(--r);padding:30px 26px 32px;display:flex;flex-direction:column;transition:.3s}.svc article:hover{background:var(--navy);color:var(--white)}.svc article:hover p{color:rgba(255,255,255,.65)}.svc .ico{width:44px;height:44px;color:var(--orange)}.svc h3{font-size:20px;margin:34px 0 12px}.svc p{font-size:14px;color:var(--muted);flex:1}.svc a{display:inline-flex;gap:8px;align-items:center;margin-top:22px;font-size:14px;font-weight:600;color:var(--orange)}.svc .sub{font-family:var(--head);font-size:10px;letter-spacing:.3em;color:var(--orange);margin-top:6px;font-weight:700}.story{background:var(--orange);color:var(--navy);position:relative;overflow:hidden}.story .pat-line{position:absolute;right:0;top:0;width:52%;height:62%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23211E36' stroke-width='.012'/%3E%3C/svg%3E\");background-size:160px 160px;-webkit-mask-image:linear-gradient(200deg,#000 20%,transparent 75%);mask-image:linear-gradient(200deg,#000 20%,transparent 75%)}.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:end;position:relative}.story h2{font-size:clamp(40px,6vw,88px);line-height:1}.story blockquote{font-family:var(--body);font-weight:700;font-size:clamp(20px,2vw,26px);line-height:1.3;margin:28px 0 18px;max-width:30ch}.story p{max-width:50ch;color:rgba(33,30,54,.8)}.timeline{display:grid;gap:10px}.timeline div{display:grid;grid-template-columns:120px 1fr;gap:18px;align-items:center;background:var(--white);border-radius:var(--r);padding:18px 22px}.timeline b{font-family:var(--head);font-size:20px;color:var(--orange)}.timeline span{font-size:15px}.timeline div:last-child{background:var(--navy);color:var(--white)}.showrooms{background:var(--white)}.sr-grid{display:grid;grid-template-columns:360px 1fr;gap:20px}.sr-list{display:grid;gap:10px;align-content:start}.sr-list button{text-align:left;padding:20px 22px;border-radius:var(--r);background:var(--grey-2);transition:.25s;display:flex;justify-content:space-between;align-items:center;gap:12px}.sr-list button:hover{background:var(--grey)}.sr-list button.on{background:var(--navy);color:var(--white)}.sr-list h4{font-size:18px}.sr-list p{font-size:13px;margin-top:2px;opacity:.65}.sr-list svg{width:20px;height:20px;color:var(--orange);flex:none}.sr-card{position:relative;min-height:500px;border-radius:var(--r);overflow:hidden;background:var(--navy)}.sr-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .4s}.sr-info{position:absolute;left:20px;right:20px;bottom:20px;z-index:2;background:var(--white);border-radius:var(--r);padding:24px;display:grid;grid-template-columns:1fr 1fr auto;gap:24px;align-items:center}.sr-info dt{font-size:12px;color:var(--muted);margin-bottom:4px}.sr-info dd{font-size:15px;font-weight:500;line-height:1.5}.consult{background:var(--navy);color:var(--white);position:relative;overflow:hidden}.consult .pat-fill{position:absolute;left:0;bottom:0;width:100%;height:80px;opacity:1}.consult-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);position:relative;padding-bottom:60px}.consult .lead{color:rgba(255,255,255,.65)}form{display:grid;grid-template-columns:1fr 1fr;gap:16px;background:var(--white);color:var(--navy);border-radius:var(--r);padding:clamp(22px,3vw,36px)}.field{display:flex;flex-direction:column;gap:6px}.field.full{grid-column:1/-1}.field>label{font-size:13px;font-weight:600}.field input,.field textarea{font:inherit;font-size:16px;background:var(--grey-2);border:1.5px solid transparent;padding:13px 14px;color:var(--navy);outline:none;border-radius:var(--r)}.field textarea{resize:none;height:96px}.field input:focus,.field textarea:focus{border-color:var(--orange);background:#fff}.chips{display:flex;gap:8px;flex-wrap:wrap}.chips label{font-size:14px;cursor:pointer}.chips input{display:none}.chips span{display:inline-block;padding:9px 14px;border:1.5px solid var(--line);border-radius:var(--r);transition:.2s}.chips input:checked+span{background:var(--orange);color:#fff;border-color:var(--orange)}.form-note{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;font-size:12px;color:var(--muted)}.sent{grid-column:1/-1;display:none;padding:14px 16px;background:#FDF4EC;color:var(--orange-deep);font-weight:600;border-radius:var(--r)}.contact-mini{margin-top:40px;display:grid;gap:10px}.contact-mini a{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.06);border-radius:var(--r);padding:16px 20px;font-family:var(--head);font-weight:700;font-size:18px;transition:.25s}.contact-mini a:hover{background:var(--orange)}.contact-mini small{font-family:var(--body);font-size:12px;opacity:.6;font-weight:500}.system{background:var(--grey)}.sys-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.sys-card{background:var(--white);border-radius:var(--r);padding:26px}.sys-card h4{font-family:var(--body);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:18px;font-weight:600}.pal{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.pal div{aspect-ratio:1/1.2;border-radius:6px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;font-size:10px;font-weight:600;line-height:1.3;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06)}.logos{display:grid;grid-template-columns:1fr 1fr;gap:8px}.logos div{border-radius:6px;display:grid;place-items:center;height:84px;padding:14px}.logos svg{max-height:100%;width:auto;max-width:100%}.sub-logo{display:flex;flex-direction:column;align-items:center;gap:4px}.sub-logo svg{height:16px}.sub-logo span{font-family:var(--head);font-size:8px;letter-spacing:.42em;font-weight:700;color:var(--orange)}footer{background:var(--navy);color:var(--white);padding:80px 0 30px}.foot-top{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:56px;flex-wrap:wrap}.foot-top .bigword svg{width:min(680px,80vw);height:auto}.foot-top .k svg{width:90px;height:auto}.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:36px;padding-bottom:44px;border-bottom:1px solid rgba(255,255,255,.12)}.foot-grid h5{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);margin-bottom:16px;font-weight:600}.foot-grid a{display:block;font-size:15px;margin-bottom:9px;opacity:.8}.foot-grid a:hover{opacity:1;color:var(--orange)}.foot-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:13px;opacity:.5;gap:20px;flex-wrap:wrap}.ribbon{position:fixed;left:16px;bottom:16px;z-index:60;background:var(--orange);color:var(--navy);font-size:12px;font-weight:600;padding:10px 16px;border-radius:var(--r);display:flex;gap:10px;align-items:center;box-shadow:0 10px 30px rgba(33,30,54,.25)}.ribbon a{font-weight:800}.rv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}.rv.in{opacity:1;transform:none}.drawer{position:fixed;inset:0;z-index:70;background:var(--navy);color:var(--white);padding:18px var(--gutter);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .45s cubic-bezier(.7,0,.2,1)}.drawer.open{transform:none}.drawer .top{display:flex;justify-content:space-between;align-items:center;height:44px}.drawer .top svg{height:18px;width:auto}.drawer nav{display:flex;flex-direction:column;margin-top:48px}.drawer nav a{font-family:var(--head);font-weight:800;font-size:30px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.1)}.drawer .burger{display:grid;background:var(--orange)}@media (max-width:1080px){.menu,.phone{display:none}.burger{display:grid}.hero-grid{grid-template-columns:1fr}.hero-media{min-height:340px}.bento{grid-template-columns:repeat(2,1fr)}.svc{grid-template-columns:1fr 1fr}.sr-grid{grid-template-columns:1fr}.sr-list{grid-template-columns:repeat(4,1fr)}.sr-list p{display:none}.sys-grid{grid-template-columns:1fr 1fr}.foot-grid{grid-template-columns:1fr 1fr}}@media (max-width:760px){.nav{height:68px}.hero{padding-top:68px}.lang,.nav-cta{display:none!important}.stats span{font-size:11px}.finish-grid,.story-grid,.consult-grid{grid-template-columns:1fr}.bento{grid-auto-rows:190px;gap:10px}.cat{padding:18px}.cat h3{font-size:16px}.cat p{display:none}.cat .ico{width:36px;height:36px}.cat.big p{display:block}.cat.big .tagrow{display:none}.cat .go{width:32px;height:32px;top:14px;right:14px}.svc{grid-template-columns:1fr}.svc h3{margin-top:22px}.sr-list{display:flex;overflow-x:auto;scrollbar-width:none;margin:0 calc(-1 * var(--gutter));padding:0 var(--gutter)}.sr-list button{flex:0 0 auto;padding:12px 16px}.sr-list svg{display:none}.sr-card{min-height:540px}.sr-info{grid-template-columns:1fr;gap:14px;left:12px;right:12px;bottom:12px}form{grid-template-columns:1fr}.sys-grid{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr}.proj-ctrl{display:none}.timeline div{grid-template-columns:90px 1fr}.ribbon{left:12px;right:12px;bottom:12px;justify-content:center;font-size:11px}}@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.rv{opacity:1;transform:none}}.btn-navy{background:var(--navy);color:var(--white)}.btn-navy:hover{background:var(--navy-2)}.s-hero{padding:calc(80px + clamp(28px,4vw,48px)) 0 clamp(28px,4vw,44px);background:var(--grey-2)}.crumbs{font-size:13px;color:var(--muted);margin-bottom:18px}.crumbs a:hover{color:var(--orange)}.s-head{display:flex;justify-content:space-between;align-items:end;gap:24px;flex-wrap:wrap}.s-head h1{font-size:clamp(34px,5vw,72px);line-height:1}.s-head h1 span{color:var(--orange)}.s-head p{color:var(--muted);max-width:46ch;margin-top:16px}.status{display:inline-flex;align-items:center;gap:10px;background:var(--white);border-radius:var(--r);padding:12px 16px;font-weight:600;font-size:14px}.status i{width:10px;height:10px;border-radius:50%;background:#2E9E5B;box-shadow:0 0 0 4px rgba(46,158,91,.18)}.status.closed i{background:#C9752C;box-shadow:0 0 0 4px rgba(201,117,44,.18)}.status small{color:var(--muted);font-weight:500}.finder{display:grid;grid-template-columns:420px 1fr;gap:14px;margin-top:clamp(24px,3vw,36px);align-items:stretch}.finder>*{min-width:0}.list{display:grid;gap:10px;align-content:start}.sr{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;background:var(--white);border-radius:var(--r);padding:16px 18px;text-align:left;border:2px solid transparent;transition:.2s;width:100%}.sr:hover{border-color:var(--line)}.sr.on{border-color:var(--orange)}.sr .num{width:38px;height:38px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;font-family:var(--head);font-weight:800;font-size:15px}.sr.on .num{background:var(--orange);color:var(--navy)}.sr h3{font-size:18px}.sr p{font-size:13px;color:var(--muted);margin-top:2px}.sr .open{font-size:12px;font-weight:600;color:#2E7D4F;margin-top:6px;display:block}.sr .open.c{color:var(--orange-deep)}.sr svg.arr{width:18px;height:18px;color:var(--orange)}.near{display:flex;align-items:center;justify-content:center;gap:10px;background:var(--navy);color:var(--white);border-radius:var(--r);padding:14px;font-weight:600;font-size:14px}.near svg{width:18px;height:18px;fill:none;stroke:var(--orange);stroke-width:2}.map{position:relative;background:var(--navy);border-radius:var(--r);overflow:hidden;min-height:440px}.map svg.city{position:absolute;inset:0;width:100%;height:100%}.pin{position:absolute;transform:translate(-50%,-100%);display:flex;flex-direction:column;align-items:center;gap:4px;transition:transform .25s;z-index:2}.pin b{background:var(--white);color:var(--navy);font-family:var(--head);font-size:13px;padding:7px 11px;border-radius:6px;white-space:nowrap;box-shadow:0 6px 18px rgba(0,0,0,.25)}.pin i{width:34px;height:34px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--white);display:grid;place-items:center;box-shadow:0 6px 18px rgba(0,0,0,.25)}.pin i span{transform:rotate(45deg);font-style:normal;font-family:var(--head);font-weight:800;font-size:13px;color:var(--navy)}.pin.on{transform:translate(-50%,-100%) scale(1.12);z-index:3}.pin.on b,.pin.on i{background:var(--orange)}#lmap{position:absolute;inset:0;z-index:1;background:var(--navy);font:inherit}#lmap .leaflet-tile-pane{filter:invert(1) hue-rotate(200deg) brightness(.92) contrast(.88) saturate(.5)}#lmap .kl-mk{background:none;border:0}#lmap .kl-mk .pin{cursor:pointer;padding:0;border:0;background:none}#lmap .me{width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;background:#3B82F6;border:3px solid #fff;box-shadow:0 0 0 8px rgba(59,130,246,.25)}#lmap .leaflet-control-attribution{background:rgba(31,30,52,.75);color:rgba(255,255,255,.6);font-size:10px}#lmap .leaflet-control-attribution a{color:rgba(255,255,255,.8)}#lmap .leaflet-bar a{color:var(--navy)}#lmap.fail::after{content:attr(data-msg);position:absolute;inset:0;display:grid;place-items:center;color:rgba(255,255,255,.6);font-size:13px;text-align:center;padding:20px}.near.busy{opacity:.75;pointer-events:none}.map .zoom{position:absolute;right:14px;top:14px;display:grid;gap:6px;z-index:500}.map .zoom a{background:var(--white);color:var(--navy);border-radius:6px;font-size:12px;font-weight:600;padding:8px 10px}.detail{background:var(--white)}.det-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:clamp(24px,4vw,56px)}.det-grid>*{min-width:0}.gal{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:340px 170px;gap:10px}.gal>div{border-radius:var(--r);overflow:hidden;position:relative;background:var(--grey-2)}.gal>div:first-child{grid-column:1/-1}.gal img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .8s,opacity .3s}.gal div:hover img{transform:scale(1.04)}.gal>.tour{background:var(--navy);color:var(--white);display:flex;flex-direction:column;justify-content:center;align-items:center;gap:8px;text-align:center;cursor:pointer;overflow:hidden}.gal .tour .pat-line{position:absolute;inset:0;opacity:.5}.gal .tour b{font-family:var(--head);font-size:30px;color:var(--orange);position:relative}.gal .tour span{font-size:13px;opacity:.75;position:relative}.det-info .eyebrow{margin-bottom:14px}.det-info h2{font-size:clamp(28px,3vw,42px)}.det-info .addr{color:var(--muted);margin-top:8px;font-size:16px}.det-actions{display:flex;gap:8px;flex-wrap:wrap;margin:22px 0}.det-actions .btn{padding:13px 18px}.btn-grey{background:var(--grey-2);color:var(--navy)}.btn-grey:hover{background:var(--grey)}.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.box{background:var(--grey-2);border-radius:var(--r);padding:18px}.box h4{font-family:var(--body);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:12px;font-weight:600}.box a{display:block;font-family:var(--head);font-weight:700;font-size:16px;margin-bottom:6px}.box a:hover{color:var(--orange-deep)}.hours{list-style:none;font-size:14px}.hours li{display:flex;justify-content:space-between;padding:3px 0}.hours li.today{font-weight:700;color:var(--navy)}.hours li.today span:first-child::after{content:\" · сегодня\";color:var(--orange-deep);font-weight:600}.hours li.off{color:var(--muted)}.display{display:flex;flex-wrap:wrap;gap:6px}.display span{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;background:var(--white);padding:7px 10px;border-radius:6px}.display svg{width:18px;height:18px;color:var(--orange)}.expect{background:var(--grey-2)}.exp{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.exp div{background:var(--white);border-radius:var(--r);padding:24px}.exp svg{width:42px;height:42px;color:var(--orange)}.exp b{font-family:var(--head);font-size:18px;display:block;margin:18px 0 8px;line-height:1.2}.exp span{font-size:14px;color:var(--muted)}.exp div.tea{background:var(--orange)}.exp div.tea span{color:rgba(33,30,54,.75)}.exp div.tea svg{color:var(--navy)}.book{background:var(--navy);color:var(--white);position:relative;overflow:hidden}.book .pat-fill{position:absolute;left:0;right:0;bottom:0;height:60px}.book-grid{display:grid;grid-template-columns:1fr 1.15fr;gap:clamp(30px,5vw,80px);padding-bottom:50px;position:relative}.book-grid>*,form,#formBody>*{min-width:0}.book .lead{color:rgba(255,255,255,.65)}.book ul{list-style:none;margin-top:26px;display:grid;gap:12px}.book li{display:flex;gap:12px;align-items:center}.book li svg{width:26px;height:26px;color:var(--orange);flex:none}form{background:var(--white);color:var(--navy);border-radius:var(--r);padding:clamp(20px,3vw,32px);display:grid;gap:18px}.lbl{font-size:13px;font-weight:600;display:block;margin-bottom:8px}.pick{display:flex;gap:8px;flex-wrap:wrap}.pick label{cursor:pointer}.pick input{display:none}.pick span{display:inline-block;padding:10px 14px;border-radius:var(--r);background:var(--grey-2);font-size:14px;font-weight:600;border:2px solid transparent}.pick input:checked+span{border-color:var(--orange);background:#FDF4EC}.pick input:disabled+span{opacity:.35;text-decoration:line-through;cursor:not-allowed}.days{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}.day{flex:0 0 auto;text-align:center;background:var(--grey-2);border:2px solid transparent;border-radius:var(--r);padding:9px 12px;cursor:pointer;min-width:70px}.day input{display:none}.day b{display:block;font-family:var(--head);font-size:17px}.day span{font-size:12px;color:var(--muted)}.day:has(input:checked){border-color:var(--orange);background:#FDF4EC}.day.off{opacity:.35;pointer-events:none}.two{display:grid;grid-template-columns:1fr 1fr;gap:12px}.field{display:flex;flex-direction:column;gap:6px}.field>label{font-size:13px;font-weight:600}.field input{font:inherit;font-size:16px;background:var(--grey-2);border:1.5px solid transparent;padding:13px 14px;color:var(--navy);outline:none;border-radius:var(--r);width:100%}.field input:focus{border-color:var(--orange);background:#fff}.field.err input{border-color:#D14343;background:#FDF0F0}form .btn{justify-content:center}.done{display:none;text-align:center;padding:20px 0}.done .ok{width:64px;height:64px;border-radius:50%;background:var(--orange);display:grid;place-items:center;margin:0 auto 16px}.done .ok svg{width:30px;height:30px;fill:none;stroke:var(--navy);stroke-width:3}.done>b{font-family:var(--head);font-size:22px;display:block}.done p{color:var(--muted);margin:8px 0 16px}.done .sum{display:inline-grid;gap:4px;background:var(--grey-2);border-radius:var(--r);padding:14px 18px;text-align:left;font-size:14px}.faq-sec{background:var(--white)}.faq-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:clamp(30px,5vw,80px)}.faq details{border-bottom:1px solid var(--line);padding:18px 0}.faq summary{font-weight:600;cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:12px;font-size:16px}.faq summary::-webkit-details-marker{display:none}.faq summary::after{content:\"+\";color:var(--orange);font-size:22px;line-height:1}.faq details[open] summary::after{content:\"−\"}.faq details p{margin-top:10px;color:var(--muted);font-size:15px}.note{font-size:12px;color:var(--muted);margin-top:14px}@media (max-width:1080px){.finder{grid-template-columns:1fr}.list{grid-template-columns:1fr 1fr}.near{grid-column:1/-1}.det-grid,.book-grid,.faq-grid{grid-template-columns:1fr}.exp{grid-template-columns:1fr 1fr}}@media (max-width:760px){.nav-right .cart-btn{display:none!important}.s-hero{padding-top:calc(68px + 24px)}.list{grid-template-columns:1fr}.map{min-height:340px}.pin b{font-size:11px;padding:5px 8px}.map .zoom{top:auto;bottom:36px;grid-auto-flow:column}.map .legend{font-size:10px;right:16px}.gal{grid-template-rows:240px 130px}.info-grid,.two{grid-template-columns:1fr}.exp{grid-template-columns:1fr}}@media (max-width:1320px){.nav-right .phone{display:none}}@media (max-width:1200px){.menu{gap:20px}.nav-right .lang{display:none}}:host{--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--sans:\"Manrope\",system-ui,sans-serif;--ease:cubic-bezier(.2,.7,.2,1);--ease-io:cubic-bezier(.7,0,.2,1);--shadow-lg:0 30px 60px -30px rgba(33,30,54,.45);--shadow-md:0 18px 40px -22px rgba(33,30,54,.4);}:host{scroll-padding-top:100px}::selection{background:var(--orange);color:var(--navy)}:focus-visible{outline:2px solid var(--orange);outline-offset:3px;border-radius:4px}.kl-skip{position:fixed;left:12px;top:-60px;z-index:200;background:var(--navy);color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;transition:top .2s}.kl-skip:focus{top:12px}@view-transition{navigation:auto}::view-transition-old(root){animation:kl-vt-out .32s var(--ease-io) both}::view-transition-new(root){animation:kl-vt-in .6s var(--ease) both}#hdr{view-transition-name:kl-header}::view-transition-group(kl-header){animation-duration:0s}@keyframes kl-vt-out{to{opacity:0;transform:translateY(-14px) scale(.995)}}@keyframes kl-vt-in{from{opacity:0;transform:translateY(22px)}}.kl-curtain{position:fixed;inset:0;z-index:150;pointer-events:none;background:var(--navy);transform:scaleY(0);transform-origin:bottom;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='40' height='40'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45' fill-opacity='.12'/%3E%3C/svg%3E\");background-size:40px}.kl-curtain.cover{transform:scaleY(1);transition:transform .42s var(--ease-io)}.kl-curtain.lift{transform:scaleY(0);transform-origin:top;transition:transform .6s var(--ease-io)}.kl-curtain.instant{transform:scaleY(1);transition:none}.kl-intro{position:fixed;inset:0;z-index:160;background:var(--navy);display:grid;place-items:center;transition:transform .8s var(--ease-io) .05s}.kl-intro.done{transform:translateY(-100%)}.kl-intro .mk{width:84px;height:auto;fill:var(--orange);animation:kl-pop .7s var(--ease) both}.kl-intro .wm{width:200px;height:auto;fill:#fff;margin-top:22px;clip-path:inset(0 100% 0 0);animation:kl-wipe .7s var(--ease) .25s forwards}.kl-intro .bar{position:absolute;left:0;bottom:0;height:3px;background:var(--orange);width:0;animation:kl-bar .9s var(--ease) forwards}@keyframes kl-pop{from{opacity:0;transform:scale(.6) rotate(-12deg)}}@keyframes kl-wipe{to{clip-path:inset(0)}}@keyframes kl-bar{to{width:100%}}.kl-promo{position:relative;z-index:51;background:#F6F4F1;color:var(--navy);font-size:13px;height:34px;overflow:hidden;border-bottom:1px solid rgba(33,30,54,.08)}.kl-promo.gone{display:none}.kl-promo-in{height:100%;display:flex;align-items:center;justify-content:center;gap:16px;position:relative}.kl-promo-rot{position:relative;flex:1;height:100%;max-width:640px}.kl-promo-rot a{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;font-weight:500;color:var(--navy);opacity:0;transform:translateY(100%);transition:opacity .5s var(--ease),transform .6s var(--ease);pointer-events:none}.kl-promo-rot a.on{opacity:1;transform:none;pointer-events:auto}.kl-promo-rot a.out{opacity:0;transform:translateY(-100%)}.kl-promo-rot a:hover{color:var(--orange-deep)}.kl-promo-rot svg{width:16px;height:16px;flex:none;color:var(--orange-deep);fill:none;stroke:currentColor;stroke-width:3}.kl-promo-tel{position:absolute;left:var(--gutter);font-weight:700;font-size:12.5px;color:var(--navy);opacity:.75;transition:opacity .2s}.kl-promo-tel:hover{opacity:1}.kl-promo-x{position:absolute;right:var(--gutter);top:50%;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;color:var(--navy);opacity:.45;font-size:11px;transition:opacity .2s,background .2s}.kl-promo-x:hover{opacity:1;background:rgba(33,30,54,.08)}@media (max-width:900px){.kl-promo-tel{display:none}}@media (max-width:480px){.kl-promo{font-size:12px;height:32px}.kl-promo-rot a{justify-content:flex-start;padding-right:30px}}#hdr{top:var(--kl-bar,0px)}.kl-sticker{position:absolute;right:28px;top:28px;z-index:3;width:132px;height:132px;border-radius:50%;background:var(--orange);color:var(--navy);display:grid;place-items:center;box-shadow:0 20px 40px -18px rgba(0,0,0,.55);transition:transform .5s var(--ease);animation:kl-pop .8s var(--ease) .6s both}.kl-sticker:hover{transform:scale(1.07) rotate(-6deg)}.kl-sticker svg{position:absolute;inset:6px;width:calc(100% - 12px);height:calc(100% - 12px);animation:kl-spin 16s linear infinite}.kl-sticker text{font:700 10.5px var(--body);letter-spacing:.18em;fill:var(--navy);text-transform:uppercase}.kl-sticker b{font-family:var(--head);font-weight:800;font-size:28px;line-height:1;text-align:center}.kl-sticker b small{display:block;font-family:var(--body);font-size:10px;font-weight:700;letter-spacing:.12em;margin-top:4px}@keyframes kl-spin{to{transform:rotate(360deg)}}@media (max-width:760px){.kl-sticker{width:100px;height:100px;right:16px;top:16px}.kl-sticker b{font-size:21px}.kl-sticker text{font-size:9.5px}}.kl-cat-badge{position:absolute;left:22px;top:22px;z-index:3;background:var(--orange);color:var(--navy);font-size:12px;font-weight:800;padding:5px 10px;border-radius:999px;box-shadow:0 8px 18px -10px rgba(0,0,0,.5);animation:kl-pop .6s var(--ease) both}.cat .kl-cat-badge+svg.ico{margin-top:30px}.cat.big>.kl-cat-badge{position:absolute;width:auto;align-self:flex-start;font-size:13px;padding:7px 14px}.kl-deals{background:var(--white);position:relative;overflow:hidden}.kl-deals .sec-head{align-items:flex-end}.kl-deals-meta{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.kl-count{display:flex;gap:6px;font-variant-numeric:tabular-nums}.kl-count span{background:var(--navy);color:#fff;border-radius:8px;padding:8px 10px;min-width:56px;text-align:center;font-family:var(--head);font-weight:800;font-size:20px;line-height:1}.kl-count span small{display:block;font-family:var(--body);font-weight:500;font-size:10px;opacity:.6;margin-top:4px;letter-spacing:.06em}.kl-deals-rail{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(240px,1fr);gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:4px 2px 14px}.kl-deals-rail::-webkit-scrollbar{display:none}.kl-deal{scroll-snap-align:start;background:var(--grey-2);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;position:relative;transition:transform .45s var(--ease),box-shadow .45s var(--ease)}.kl-deal:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-deal .im{aspect-ratio:1;background:#fff;display:grid;place-items:center;overflow:hidden}.kl-deal .im img{width:84%;height:84%;object-fit:contain;transition:transform 1s var(--ease)}.kl-deal:hover .im img{transform:scale(1.07)}.kl-deal .off{position:absolute;left:12px;top:12px;background:var(--orange);color:var(--navy);font-weight:800;font-size:13px;padding:5px 10px;border-radius:999px}.kl-deal .bd{padding:14px 16px 16px;display:flex;flex-direction:column;gap:6px;flex:1}.kl-deal .br{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:600}.kl-deal h3{font-family:var(--body);font-weight:600;font-size:14px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.kl-deal .pr{margin-top:auto;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}.kl-deal .pr b{font-family:var(--head);font-size:18px}.kl-deal .pr s{font-size:13px;color:var(--muted)}.kl-deals-nav{display:flex;gap:8px}.kl-deals-nav button{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s}.kl-deals-nav button:hover{background:var(--navy);color:#fff}.kl-deals-note{font-size:12px;color:var(--muted);margin-top:6px}@media (max-width:760px){.kl-deals-rail{grid-auto-columns:72%}.kl-count span{min-width:46px;font-size:17px;padding:7px 8px}.kl-deals-nav{display:none}}.kl-ab{position:relative;overflow:hidden;background:#8E9097;color:#fff;min-height:min(900px,100svh);display:flex;align-items:center;padding:clamp(80px,9vw,120px) 0}.kl-ab-bg{position:absolute;inset:0}.kl-ab-bg img{width:100%;height:100%;object-fit:cover;object-position:70% center;transform:scale(1.06);transition:transform 2.4s var(--ease)}.kl-ab.kl-seen .kl-ab-bg img{transform:none}.kl-ab::before{content:\"\";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(33,30,54,.82) 0%,rgba(33,30,54,.55) 38%,rgba(33,30,54,0) 64%)}.kl-ab-in{position:relative;z-index:2;width:100%}.kl-ab-in>*{max-width:640px}.kl-ab-q{font-family:var(--head);font-weight:700;font-size:clamp(28px,3.3vw,50px);line-height:1.12;margin:22px 0 26px;letter-spacing:-.01em}.kl-ab-t{font-size:clamp(15px,1.15vw,17px);line-height:1.75;color:rgba(255,255,255,.85);max-width:560px;margin-bottom:34px}.kl-ab .btn-line{color:#fff;border-radius:999px;padding:16px 28px}.kl-ab-line{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:48px;max-width:720px!important;padding-top:24px;border-top:1px solid rgba(255,255,255,.22)}.kl-ab-line b{display:block;font-family:var(--head);font-size:22px;color:var(--orange)}.kl-ab-line span{display:block;font-size:12.5px;line-height:1.45;color:rgba(255,255,255,.75);margin-top:4px}.kl-ab-sign{font-size:12px;color:rgba(255,255,255,.6);margin-top:22px}@media (max-width:760px){.kl-ab{align-items:flex-start;min-height:0;padding:72px 0 360px}.kl-ab::before{background:linear-gradient(180deg,rgba(33,30,54,.85) 0%,rgba(33,30,54,.6) 52%,rgba(33,30,54,0) 78%)}.kl-ab-bg img{object-position:center bottom}.kl-ab-line{grid-template-columns:1fr 1fr}}.kl-how{background:#F6EEE4;position:relative;overflow:hidden}.kl-how::before{content:\"\";position:absolute;inset:0;opacity:.55;pointer-events:none;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='220' height='220'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-opacity='.35' stroke-width='.008'/%3E%3C/svg%3E\");background-size:220px}.kl-how .wrap{position:relative}.kl-how-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2vw,28px)}.kl-vid{position:relative;display:block;aspect-ratio:9/14;border-radius:14px;overflow:hidden;background:var(--navy);cursor:pointer;padding:0;text-align:left;box-shadow:0 30px 60px -40px rgba(33,30,54,.6);transition:transform .6s var(--ease),box-shadow .6s var(--ease)}.kl-vid:hover{transform:translateY(-8px);box-shadow:0 40px 70px -36px rgba(33,30,54,.7)}.kl-vid img,.kl-vid video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.2s var(--ease),opacity .5s}.kl-vid:hover img{transform:scale(1.05)}.kl-vid video{opacity:0;pointer-events:none}.kl-vid.previewing video{opacity:1}.kl-vid::after{content:\"\";position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(180deg,transparent,rgba(33,30,54,.85))}.kl-play{position:absolute;left:50%;top:50%;z-index:2;width:76px;height:76px;margin:-38px 0 0 -38px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 12px 30px -10px rgba(0,0,0,.45);transition:transform .45s var(--ease),background .3s}.kl-play::before{content:\"\";margin-left:5px;border-left:18px solid var(--navy);border-top:11px solid transparent;border-bottom:11px solid transparent;transition:border-color .3s}.kl-play::after{content:\"\";position:absolute;inset:-10px;border-radius:50%;border:2px solid rgba(255,255,255,.6);animation:kl-ring 2.4s var(--ease) infinite}@keyframes kl-ring{0%{transform:scale(.85);opacity:1}100%{transform:scale(1.35);opacity:0}}.kl-vid:hover .kl-play{transform:scale(1.1);background:var(--orange)}.kl-vid-cap{position:absolute;left:22px;right:22px;bottom:22px;z-index:2;color:#fff;font-weight:600;font-size:15px;line-height:1.35}.kl-vid-cap small{display:block;font-family:var(--head);font-size:12px;color:var(--orange);letter-spacing:.1em;margin-bottom:6px}@media (max-width:900px){.kl-how-grid{grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:72%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding-bottom:6px}.kl-how-grid::-webkit-scrollbar{display:none}.kl-vid{scroll-snap-align:start}.kl-play{width:62px;height:62px;margin:-31px 0 0 -31px}}.kl-vmodal{position:fixed;inset:0;z-index:130;background:rgba(20,18,34,.82);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px;opacity:0;transition:opacity .3s}.kl-vmodal[hidden]{display:none}.kl-vmodal.show{opacity:1}.kl-vmodal-box{position:relative;height:min(86vh,900px);aspect-ratio:9/16;max-width:100%;border-radius:16px;overflow:hidden;background:#000;transform:scale(.94);transition:transform .45s var(--ease)}.kl-vmodal.show .kl-vmodal-box{transform:none}.kl-vmodal video{width:100%;height:100%;object-fit:cover;display:block}.kl-vmodal-x{position:absolute;right:12px;top:12px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.9);color:var(--navy);font-size:15px;font-weight:700}.kl-chat{position:fixed;right:20px;bottom:20px;z-index:90;font-size:14px;transform:translateY(calc(-1 * var(--kl-lift,0px)));transition:transform .35s var(--ease),opacity .25s,visibility .25s}:host.kl-chat-hide .kl-chat,:host.kl-chat-hide .kl-top{opacity:0!important;visibility:hidden!important;pointer-events:none!important}.kl-chat-btn{display:flex;align-items:center;gap:10px;background:var(--navy);color:#fff;border-radius:999px;padding:8px 18px 8px 8px;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transition:transform .35s var(--ease),background .3s;animation:kl-pop .7s var(--ease) 1.4s both}.kl-chat-btn:hover{transform:translateY(-3px);background:var(--navy-2)}.kl-chat-btn .av{position:relative;width:40px;height:40px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-btn .av svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-btn .av::after{content:\"\";position:absolute;right:0;top:0;width:11px;height:11px;border-radius:50%;background:#2E9E5B;border:2px solid var(--navy)}.kl-chat-btn b{font-weight:600}.kl-chat.open .kl-chat-btn{opacity:0;pointer-events:none;transform:scale(.8)}.kl-chat-panel{position:absolute;right:0;bottom:0;width:min(370px,calc(100vw - 32px));background:#fff;border-radius:18px;overflow:hidden;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);transform-origin:bottom right;transform:scale(.6) translateY(20px);opacity:0;visibility:hidden;transition:transform .45s var(--ease),opacity .25s,visibility 0s .45s;display:flex;flex-direction:column;max-height:min(600px,calc(100svh - 120px))}.kl-chat.open .kl-chat-panel{transform:none;opacity:1;visibility:visible;transition:transform .45s var(--ease),opacity .25s}.kl-chat-head{background:var(--navy);color:#fff;padding:18px 18px 16px;display:flex;gap:12px;align-items:center;position:relative}.kl-chat-head .av{width:42px;height:42px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-head .av svg{width:22px;height:22px;fill:var(--navy)}.kl-chat-head b{display:block;font-size:15px}.kl-chat-head small{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.75}.kl-chat-head small::before{content:\"\";width:7px;height:7px;border-radius:50%;background:#2E9E5B}.kl-chat-x{position:absolute;right:12px;top:12px;width:32px;height:32px;border-radius:50%;color:#fff;opacity:.7}.kl-chat-x:hover{opacity:1;background:rgba(255,255,255,.1)}.kl-chat-body{padding:16px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;background:var(--grey-2);flex:1;min-height:200px}.kl-msg{max-width:86%;padding:10px 14px;border-radius:14px;line-height:1.45;animation:kl-up .35s var(--ease) both}.kl-msg.in{background:#fff;border-bottom-left-radius:4px;align-self:flex-start}.kl-msg.out{background:var(--navy);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}.kl-msg small{display:block;font-size:11px;opacity:.55;margin-top:4px}.kl-typing{align-self:flex-start;background:#fff;border-radius:14px;padding:12px 14px;display:flex;gap:4px}.kl-typing i{width:6px;height:6px;border-radius:50%;background:var(--muted);animation:kl-dot 1s infinite}.kl-typing i:nth-child(2){animation-delay:.15s}.kl-typing i:nth-child(3){animation-delay:.3s}@keyframes kl-dot{0%,100%{opacity:.3;transform:none}50%{opacity:1;transform:translateY(-3px)}}.kl-quick{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}.kl-quick button{font-size:13px;font-weight:600;padding:8px 12px;border-radius:999px;background:#fff;border:1.5px solid var(--line);color:var(--navy);transition:border-color .2s,background .2s}.kl-quick button:hover{border-color:var(--orange);background:#FDF4EC}.kl-chat-ch{display:flex;gap:8px;padding:10px 16px 0;background:#fff}.kl-chat-ch a{flex:1;text-align:center;font-size:12px;font-weight:600;padding:8px 6px;border-radius:9px;background:var(--grey-2);transition:background .2s,color .2s}.kl-chat-ch a:hover{background:var(--navy);color:#fff}.kl-chat-form{display:flex;gap:8px;padding:12px 16px 16px;background:#fff}.kl-chat-form input{flex:1;min-width:0;border:1.5px solid var(--line);border-radius:999px;padding:11px 16px;font:inherit;font-size:14px;outline:none;color:var(--navy)}.kl-chat-form input:focus{border-color:var(--orange)}.kl-chat-form button{width:44px;height:44px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none;transition:transform .25s var(--ease)}.kl-chat-form button:hover{transform:scale(1.08)}.kl-chat-form button svg{width:18px;height:18px;fill:none;stroke:var(--navy);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-note{font-size:11px;color:var(--muted);text-align:center;padding:0 16px 12px;background:#fff}.kl-top{bottom:calc(92px + var(--kl-lift,0px))!important}@media (max-width:760px){.kl-chat{right:14px;bottom:14px}.kl-chat-btn{padding:6px}.kl-chat-btn b{display:none}.kl-chat-btn .av{width:46px;height:46px}.kl-top{right:18px}}.kl-progress{position:fixed;left:0;right:0;top:0;height:3px;z-index:60;pointer-events:none}.kl-progress i{display:block;height:100%;background:var(--orange);transform-origin:left;transform:scaleX(var(--p,0))}#hdr{transition:transform .45s var(--ease),box-shadow .3s,background .3s}#hdr.kl-hide{transform:translateY(-100%)}#hdr .logo svg{transition:transform .4s var(--ease)}#hdr .logo:hover svg{transform:translateX(3px)}.kl-menu{align-items:center}.kl-dd{position:relative;display:flex;align-items:center}.kl-dd>a{display:inline-flex;align-items:center;gap:6px}.kl-caret{width:7px;height:7px;border-right:1.6px solid currentColor;border-bottom:1.6px solid currentColor;transform:rotate(45deg) translateY(-2px);transition:transform .3s var(--ease);opacity:.6}.kl-dd:hover .kl-caret,.kl-dd.open .kl-caret{transform:rotate(225deg) translate(-2px,-1px)}.kl-panel{position:absolute;top:100%;left:-18px;min-width:290px;padding:10px;background:#fff;border-radius:14px;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);opacity:0;visibility:hidden;transform:translateY(10px) scale(.98);transform-origin:top left;transition:opacity .25s,transform .35s var(--ease),visibility 0s .35s;margin-top:14px}.kl-panel::before{content:\"\";position:absolute;left:0;right:0;top:-16px;height:16px}.kl-dd:hover .kl-panel,.kl-dd:focus-within .kl-panel,.kl-dd.open .kl-panel{opacity:1;visibility:visible;transform:none;transition:opacity .25s,transform .35s var(--ease),visibility 0s}.kl-dd.closing .kl-panel{opacity:0!important;visibility:hidden!important}.menu .kl-panel a{display:block;padding:11px 14px;border-radius:9px;transition:background .2s,transform .25s var(--ease)}.menu .kl-panel a::after{display:none}.menu .kl-panel a:hover{background:var(--grey-2);transform:translateX(4px)}.kl-panel b{display:block;font-size:14px;font-weight:600}.kl-panel small{display:block;font-size:12px;color:var(--muted);font-weight:400;margin-top:2px}.kl-panel a:hover b{color:var(--orange-deep)}.kl-panel>a{opacity:0;transform:translateY(6px)}.kl-dd:hover .kl-panel>a,.kl-dd:focus-within .kl-panel>a,.kl-dd.open .kl-panel>a{opacity:1;transform:none;transition:opacity .3s,transform .4s var(--ease),background .2s;transition-delay:calc(var(--i,0)*35ms)}.kl-mega{display:grid;grid-template-columns:repeat(3,minmax(150px,1fr)) 230px;gap:6px 18px;min-width:860px;padding:22px}.kl-mega h6{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange-deep);margin:0 0 8px 12px}.menu .kl-mega-col a{padding:7px 12px;font-size:14px}.menu a.kl-mega-promo{background:var(--navy);color:#fff;border-radius:12px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;gap:14px;min-height:220px;position:relative;overflow:hidden}.menu a.kl-mega-promo:hover{background:var(--navy-2);transform:none}.kl-mega-promo b{font-family:var(--head);font-size:20px;line-height:1.15;color:#fff!important}.kl-mega-promo .kl-more{font-size:13px;font-weight:600;color:var(--orange);display:inline-flex;gap:8px;align-items:center}.kl-mega-promo .arrow{fill:var(--orange)}.kl-mega-promo::after{content:\"\";position:absolute;right:-40px;bottom:-40px;width:160px;height:160px;opacity:.25;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='32' height='32'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45'/%3E%3C/svg%3E\");background-size:32px;transition:transform .8s var(--ease)}.kl-mega-promo:hover::after{transform:translate(-14px,-14px)}.menu a[aria-current=\"page\"],.kl-dd.kl-active>a{color:var(--orange-deep)}.menu>a[aria-current=\"page\"]::after,.kl-dd.kl-active>a::after{width:100%}.kl-icon-btn{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s,transform .25s var(--ease);flex:none}.kl-icon-btn svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:1.8;stroke-linecap:round;transition:stroke .25s}.kl-icon-btn:hover{background:var(--navy);transform:translateY(-2px)}.kl-icon-btn:hover svg{stroke:#fff}.kl-icon-btn[aria-current=\"page\"]{background:var(--orange)}@media (max-width:1460px){.nav-right .lang{display:none}}@media (max-width:1320px){.kl-menu{gap:22px}}@media (max-width:1200px){.kl-menu{gap:16px;font-size:13.5px}.nav-cta{display:none!important}}.drawer{inset:0 0 0 auto!important;width:min(380px,88vw);padding:16px 24px 24px!important;border-radius:18px 0 0 18px;box-shadow:-30px 0 60px -20px rgba(0,0,0,.45);transition:transform .5s var(--ease-io)!important;overflow:hidden}.drawer .top{height:44px}.drawer .top svg{height:16px}.drawer .burger{width:40px;height:40px;font-size:15px}.kl-backdrop{position:fixed;inset:0;z-index:69;background:rgba(33,30,54,.45);backdrop-filter:blur(3px);opacity:0;visibility:hidden;transition:opacity .4s,visibility 0s .4s}:host.kl-drawer-open .kl-backdrop{opacity:1;visibility:visible;transition:opacity .4s}.drawer{overflow-y:auto!important;overscroll-behavior:contain}.kl-drawer-nav{flex:1 0 auto;margin-top:22px!important;padding-bottom:16px}.kl-drawer-foot{flex:none}.drawer .kl-drawer-nav>a,.kl-drawer-nav summary{font-family:var(--body)!important;font-weight:600!important;font-size:17px!important;padding:14px 0!important;border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details{border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details summary{border-bottom:0}.kl-drawer-nav summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center}.kl-drawer-nav summary::-webkit-details-marker{display:none}.kl-drawer-nav summary::after{content:\"\";width:8px;height:8px;border-right:1.8px solid var(--orange);border-bottom:1.8px solid var(--orange);transform:rotate(45deg) translateY(-3px);transition:transform .3s var(--ease)}.kl-drawer-nav details[open] summary::after{transform:rotate(225deg) translate(-2px,-2px)}.kl-drawer-nav details>div{display:grid;padding:0 0 12px 12px;border-left:2px solid rgba(224,143,69,.35);margin:0 0 12px 2px}.drawer .kl-drawer-nav details>div a{font-family:var(--body);font-weight:500;font-size:15px;padding:7px 0;border:0;opacity:.75;transition:opacity .2s,transform .25s var(--ease)}.drawer .kl-drawer-nav details>div a:hover{opacity:1;transform:translateX(4px);color:var(--orange)}.drawer .kl-drawer-nav>a[aria-current=\"page\"],.drawer .kl-drawer-nav a[aria-current=\"page\"]{color:var(--orange);opacity:1}.kl-drawer-nav details[open]>div a{animation:kl-up .4s var(--ease) both}.kl-drawer-nav details[open]>div a:nth-child(2){animation-delay:.03s}.kl-drawer-nav details[open]>div a:nth-child(3){animation-delay:.06s}.kl-drawer-nav details[open]>div a:nth-child(4){animation-delay:.09s}.kl-drawer-nav details[open]>div a:nth-child(5){animation-delay:.12s}.kl-drawer-nav details[open]>div a:nth-child(6){animation-delay:.15s}.drawer.open .kl-drawer-nav>*{animation:kl-side .5s var(--ease) both}.drawer.open .kl-drawer-nav>*:nth-child(2){animation-delay:.04s}.drawer.open .kl-drawer-nav>*:nth-child(3){animation-delay:.08s}.drawer.open .kl-drawer-nav>*:nth-child(4){animation-delay:.12s}.drawer.open .kl-drawer-nav>*:nth-child(5){animation-delay:.16s}.drawer.open .kl-drawer-nav>*:nth-child(6){animation-delay:.2s}.kl-drawer-foot{display:grid;gap:4px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12)}.kl-drawer-foot span{font-size:12px;opacity:.55;margin-bottom:12px}.kl-drawer-foot .btn{justify-content:center}.kl-drawer-phone{font-family:var(--head);font-weight:800;font-size:19px;color:var(--orange)}@keyframes kl-up{from{opacity:0;transform:translateY(12px)}}@keyframes kl-side{from{opacity:0;transform:translateX(24px)}}:host.kl-lock{overflow:hidden}.kl-search{position:fixed;inset:0;z-index:120;background:rgba(33,30,54,.55);backdrop-filter:blur(8px);display:flex;justify-content:center;align-items:flex-start;padding:12vh 16px 16px;opacity:0;transition:opacity .25s}.kl-search[hidden]{display:none}.kl-search.show{opacity:1}.kl-search-box{width:min(680px,100%);background:#fff;border-radius:16px;box-shadow:var(--shadow-lg);overflow:hidden;transform:translateY(-12px) scale(.98);transition:transform .4s var(--ease)}.kl-search.show .kl-search-box{transform:none}.kl-search-in{display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--line)}.kl-search-in svg{width:22px;height:22px;fill:none;stroke:var(--muted);stroke-width:2;stroke-linecap:round;flex:none}.kl-search-in input{flex:1;border:0;outline:0;font:inherit;font-size:18px;color:var(--navy);background:none;min-width:0}.kl-search-in kbd{font:inherit;font-size:11px;color:var(--muted);border:1px solid var(--line);border-radius:5px;padding:2px 6px}.kl-search-res{max-height:min(60vh,520px);overflow-y:auto;padding:8px}.kl-search-res h6{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:10px 12px 6px}.kl-search-res a{display:flex;align-items:center;gap:14px;padding:10px 12px;border-radius:10px}.kl-search-res a[aria-selected=\"true\"],.kl-search-res a:hover{background:var(--grey-2)}.kl-search-res a img,.kl-search-res a .ic{width:44px;height:44px;border-radius:8px;object-fit:cover;background:var(--grey-2);flex:none;display:grid;place-items:center;font-weight:800;color:var(--orange-deep)}.kl-search-res a b{display:block;font-size:14px;font-weight:600;line-height:1.3}.kl-search-res a small{display:block;font-size:12px;color:var(--muted)}.kl-search-res mark{background:rgba(224,143,69,.25);color:inherit;border-radius:3px}.kl-search-res .empty{padding:24px 12px;color:var(--muted);font-size:14px;text-align:center}.kl-top{position:fixed;right:20px;bottom:20px;z-index:55;width:48px;height:48px;border-radius:50%;background:var(--navy);display:grid;place-items:center;box-shadow:var(--shadow-md);opacity:0;transform:translateY(20px) scale(.8);pointer-events:none;transition:opacity .3s,transform .45s var(--ease),background .25s}.kl-top.show{opacity:1;transform:none;pointer-events:auto}.kl-top:hover{background:var(--orange)}.kl-top svg{width:20px;height:20px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-top:hover svg{stroke:var(--navy)}.kl-body.kl-has-sticky .kl-top{bottom:96px}.kl-demo{position:fixed;left:16px;bottom:16px;z-index:54;font-size:11px;font-weight:600;letter-spacing:.02em;padding:7px 12px;border-radius:999px;background:rgba(33,30,54,.82);color:#fff;backdrop-filter:blur(6px);pointer-events:none;box-shadow:var(--shadow-md)}.kl-demo::before{content:\"\";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--orange);margin-right:8px;vertical-align:1px}.kl-body.kl-has-sticky .kl-demo{bottom:92px}@media (max-width:760px){.kl-demo{bottom:12px;left:12px;font-size:10px}}.kl-foot-cta{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap;padding-bottom:56px;margin-bottom:56px;border-bottom:1px solid rgba(255,255,255,.12)}.kl-foot-cta .h-section{color:#fff;margin-top:14px}.kl-foot-grid{grid-template-columns:1.6fr 1fr 1fr 1fr 1fr!important}.kl-foot-grid a{transition:color .2s,transform .3s var(--ease),opacity .2s}.kl-foot-grid a:hover{transform:translateX(4px)}.kl-foot-hours{display:block;font-size:13px;opacity:.55;margin-top:6px}.kl-footer .k svg{transition:transform 1.2s var(--ease)}.kl-footer:hover .k svg{transform:rotate(-8deg) scale(1.05)}@media (max-width:1080px){.kl-foot-grid{grid-template-columns:1fr 1fr 1fr!important}}@media (max-width:760px){.kl-foot-grid{grid-template-columns:1fr 1fr!important}.kl-foot-grid>div:first-child{grid-column:1/-1}}.btn-navy{background:var(--navy);color:var(--white)}.btn{position:relative;overflow:hidden;isolation:isolate;transition:transform .3s var(--ease),background .3s,color .3s,border-color .3s,box-shadow .3s}.btn::after{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:inherit;transform:translateX(-102%) skewX(-12deg);transition:transform .55s var(--ease)}.btn:hover::after{transform:translateX(0) skewX(0)}.btn-orange::after{background:var(--orange-deep)}.btn-navy::after{background:var(--navy-2)}.btn:hover{box-shadow:0 14px 30px -14px rgba(33,30,54,.5)}.btn:active{transform:scale(.97)}.btn:hover .arrow{transform:translateX(5px)}.btn .arrow{transition:transform .35s var(--ease)}.kl-magnet{will-change:transform}main p a:not(.btn):not([class]){background:linear-gradient(currentColor,currentColor) 0 100%/0 1.5px no-repeat;transition:background-size .35s var(--ease)}main p a:not(.btn):not([class]):hover{background-size:100% 1.5px}.kl-lift{transition:transform .5s var(--ease),box-shadow .5s var(--ease)}.kl-lift:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-zoom img{transition:transform 1.1s var(--ease)!important}.kl-zoom:hover img,.kl-lift:hover .kl-zoom img{transform:scale(1.06)}img.kl-fade{opacity:0;transition:opacity .7s var(--ease)}img.kl-fade.kl-loaded{opacity:1}:host.kl-js [data-kl-rv]{opacity:0;transform:translateY(32px);transition:opacity .9s var(--ease),transform 1s var(--ease);transition-delay:calc(var(--i,0)*80ms)}:host.kl-js [data-kl-rv=\"left\"]{transform:translateX(-36px)}:host.kl-js [data-kl-rv=\"right\"]{transform:translateX(36px)}:host.kl-js [data-kl-rv=\"scale\"]{transform:scale(.94)}:host.kl-js [data-kl-rv].kl-in{opacity:1;transform:none}:host.kl-js [data-kl-rv=\"img\"]{opacity:1;transform:none;clip-path:inset(0 0 100% 0);transition:clip-path 1.2s var(--ease-io)}:host.kl-js [data-kl-rv=\"img\"] img{transform:scale(1.15);transition:transform 1.6s var(--ease)}:host.kl-js [data-kl-rv=\"img\"].kl-in{clip-path:inset(0)}:host.kl-js [data-kl-rv=\"img\"].kl-in img{transform:none}:host.kl-js [data-kl-rv].kl-done{transition-delay:0s}.kl-split .kl-w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.1em;margin-bottom:-.1em}.kl-split .kl-w>span{display:inline-block;transform:translateY(110%);transition:transform 1s var(--ease);transition-delay:calc(var(--i,0)*55ms + 80ms)}.kl-split.kl-in .kl-w>span{transform:none}:host:not(.kl-js) .kl-split .kl-w>span{transform:none}@media (prefers-reduced-motion:reduce){::view-transition-old(root),::view-transition-new(root){animation:none}:host.kl-js [data-kl-rv],:host.kl-js [data-kl-rv] img,.kl-split .kl-w>span{opacity:1!important;transform:none!important;clip-path:none!important;transition:none!important}.kl-intro,.kl-curtain{display:none!important}.kl-lift:hover,.btn:hover .arrow{transform:none}.btn::after{display:none}}.kl-opt{display:flex;flex-direction:column;gap:10px;margin:18px 0 6px}.kl-opt>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.kl-opt>div{display:flex;flex-wrap:wrap;gap:8px}.kl-opt button{font:600 14px/1 var(--body);padding:11px 16px;border-radius:999px;border:1.5px solid var(--grey);background:#fff;color:var(--navy);cursor:pointer;transition:border-color .2s,background .2s,color .2s,transform .2s var(--ease)}.kl-opt button:hover{border-color:var(--orange);transform:translateY(-1px)}.kl-opt button.on{background:var(--navy);border-color:var(--navy);color:#fff}.kl-share{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 4px}.kl-share>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-right:4px}.kl-share a,.kl-share button{font:600 13px/1 var(--body);padding:9px 13px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);border:0;cursor:pointer;transition:background .2s,color .2s}.kl-share a:hover,.kl-share button:hover{background:var(--navy);color:#fff}.kl-mail{background:var(--white);padding:clamp(56px,7vw,100px) 0}.kl-mail-head{margin-bottom:28px}.kl-mail-head .h-section{margin-top:14px}.kl-mail-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.kl-mail-grid a{display:flex;flex-direction:column;gap:6px;padding:22px;border-radius:18px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .25s,color .25s,transform .3s var(--ease)}.kl-mail-grid a:hover{background:var(--navy);color:#fff;transform:translateY(-3px)}.kl-mail-grid small{font-size:12px;letter-spacing:.1em;text-transform:uppercase;opacity:.65}.kl-mail-grid b{font-size:17px;font-weight:700;overflow-wrap:anywhere}.kl-mail-soc{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}.kl-mail-soc>div{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:18px 22px;border:1.5px solid var(--grey);border-radius:18px}.kl-mail-soc small{flex-basis:100%;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange-deep)}.kl-mail-soc a{font-weight:600;font-size:14px;padding:8px 14px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .2s,color .2s}.kl-mail-soc a:hover{background:var(--orange);color:var(--navy)}@media (max-width:900px){.kl-mail-grid{grid-template-columns:1fr 1fr}.kl-mail-soc{grid-template-columns:1fr}}@media (max-width:520px){.kl-mail-grid{grid-template-columns:1fr}}a.brands{display:block;text-decoration:none}a.brands:hover .track{animation-play-state:paused}.kl-rev{background:var(--grey-2,#F1F0EE);padding:clamp(64px,8vw,120px) 0}.kl-rev-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:8px}.kl-rev figure{margin:0;background:#fff;border-radius:22px;padding:30px 28px;display:flex;flex-direction:column;justify-content:space-between;gap:26px;position:relative;transition:transform .4s var(--ease),box-shadow .4s}.kl-rev figure::before{content:\"“\";position:absolute;top:6px;right:22px;font:800 90px/1 var(--head);color:var(--orange);opacity:.35}.kl-rev figure:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}.kl-rev blockquote{margin:0;font-size:16px;line-height:1.6;color:var(--navy)}.kl-rev figcaption{display:grid;grid-template-columns:auto 1fr;column-gap:12px;align-items:center}.kl-rev .av{grid-row:span 2;width:46px;height:46px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:800;font-size:14px}.kl-rev figcaption b{font-size:15px}.kl-rev figcaption small{font-size:13px;color:var(--muted)}.kl-blogt{background:var(--white);padding:clamp(64px,8vw,120px) 0}.kl-blogt-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.kl-blogt-grid a{display:flex;flex-direction:column;gap:10px;color:var(--navy)}.kl-blogt-grid img{width:100%;aspect-ratio:16/11;object-fit:cover;border-radius:18px;transition:transform .6s var(--ease),filter .4s}.kl-blogt-grid a:hover img{transform:scale(1.03);filter:saturate(1.1)}.kl-blogt-grid small{font-size:12px;color:var(--muted);letter-spacing:.06em}.kl-blogt-grid b{font-size:17px;line-height:1.35;transition:color .2s}.kl-blogt-grid a:hover b{color:var(--orange-deep)}@media (max-width:1000px){.kl-rev-grid{grid-template-columns:1fr}.kl-blogt-grid{grid-template-columns:1fr 1fr}}@media (max-width:560px){.kl-blogt-grid{grid-template-columns:1fr}}.kl-lang{display:flex;align-items:center;gap:2px;padding:3px;border-radius:999px;background:rgba(33,30,54,.06);margin-right:6px}.kl-lang a{font:700 12px/1 var(--body);letter-spacing:.04em;padding:7px 10px;border-radius:999px;color:var(--navy);opacity:.6;transition:background .25s,opacity .25s,color .25s}.kl-lang a:hover{opacity:1}.kl-lang a.on{background:var(--navy);color:#fff;opacity:1}.kl-lang-m{margin:0 0 14px;margin-right:0;align-self:stretch;background:rgba(255,255,255,.08)}.kl-lang-m a{flex:1;text-align:center;color:#fff;font-size:13px;padding:10px 14px}.kl-lang-m a.on{background:var(--orange);color:var(--navy)}@media (max-width:1100px){.nav .kl-lang:not(.kl-lang-m){display:none}}.kl-icon-btn{position:relative}.kl-cart-n{position:absolute;top:-6px;right:-6px;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:var(--orange);color:var(--navy);font:800 10.5px/19px var(--body);text-align:center;box-shadow:0 0 0 2px #fff;pointer-events:none}.kl-cart-n.bump{animation:kl-bump .45s var(--ease)}@keyframes kl-bump{40%{transform:scale(1.35)}}.kl-added{position:fixed;left:50%;bottom:24px;z-index:95;display:flex;gap:16px;align-items:center;background:var(--navy);color:#fff;padding:12px 14px 12px 18px;border-radius:14px;font-size:14px;font-weight:600;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transform:translate(-50%,160%);opacity:0;transition:transform .4s var(--ease),opacity .3s;max-width:calc(100vw - 32px)}.kl-added.show{transform:translate(-50%,0);opacity:1}.kl-added a{background:var(--orange);color:var(--navy);padding:8px 12px;border-radius:10px;white-space:nowrap}.kl-qdel svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle}.kl-qdel:hover{color:#C0392B}","html":{"ru":{"page":"\n\n\n\n<section class=\"s-hero\" id=\"top\"><div class=\"wrap\"><nav class=\"crumbs\"><a href=\"/\">Главная</a> / Шоурумы</nav><div class=\"s-head\"><div><h1>Приглашаем<br>на <span>чашку чая</span></h1><p>Четыре шоурума в Ташкенте. Здесь можно потрогать материалы, проверить напор воды и обсудить проект с консультантом.</p></div><div class=\"status\" id=\"status\"><i></i><div><span id=\"stTxt\">Открыто</span><br><small id=\"stSub\"></small></div></div></div><div class=\"finder\"><div class=\"list\" id=\"list\"></div><div class=\"map\" id=\"map\" aria-label=\"Карта шоурумов\"><div id=\"lmap\"></div><div class=\"zoom\"><a id=\"mY\" href=\"#\" target=\"_blank\" rel=\"noopener\">Яндекс Карты ↗</a><a id=\"mG\" href=\"#\" target=\"_blank\" rel=\"noopener\">Google Maps ↗</a></div></div></div></div></section><!-- Detail --><section class=\"detail\" id=\"detail\"><div class=\"wrap det-grid\"><div class=\"gal\"><div><img fetchpriority=\"high\" id=\"g1\" alt=\"\"></div><div><img loading=\"lazy\" decoding=\"async\" id=\"g2\" alt=\"\"></div><div class=\"tour\" id=\"tour\"><div class=\"pat-line\"></div><b>360°</b><span>Виртуальный тур<br>по шоуруму</span></div></div><div class=\"det-info\"><span class=\"eyebrow\" id=\"dNum\">Шоурум 01</span><h2 id=\"dName\"></h2><p class=\"addr\" id=\"dAddr\"></p><div class=\"det-actions\"><a href=\"#book\" class=\"btn btn-orange\" id=\"dBook\">Записаться на визит <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"#\" class=\"btn btn-grey\" id=\"dRoute\" target=\"_blank\" rel=\"noopener\">Маршрут</a><a href=\"#\" class=\"btn btn-grey\" id=\"dCall\">Позвонить</a></div><div class=\"info-grid\"><div class=\"box\"><h4>Телефоны</h4><div id=\"dTel\"></div></div><div class=\"box\"><h4>Часы работы</h4><ul class=\"hours\" id=\"dHours\"></ul></div><div class=\"box\" style=\"grid-column:1/-1\"><h4>Что представлено*</h4><div class=\"display\" id=\"dShow\"></div></div></div><p class=\"note\">* Ассортимент шоурумов — демо-данные. Уточните его у Kashlux.</p></div></div></section><!-- What to expect --><section class=\"expect\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Что вас ждёт</span><h2 class=\"h-section\">Визит, который<br><em>экономит время</em></h2></div><p class=\"lead\">Запишитесь заранее, и консультант подготовит образцы для вашего проекта.</p></div><div class=\"exp\"><div class=\"tea\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M20 5h8M17 9h14a4 4 0 014 4v24a4 4 0 01-4 4H17a4 4 0 01-4-4V13a4 4 0 014-4z\"/><circle cx=\"24\" cy=\"18\" r=\"2.5\"/><path d=\"M21 30h6M18 41v3M30 41v3\"/></g></svg><b>Чашка чая</b><span>Обсудим проект за чашкой чая, без спешки и без навязывания покупки</span></div><div><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 6v6M14 22a10 10 0 0120 0z\"/><path d=\"M17 28v2M24 28v4M31 28v2M20 35v2M28 35v2M24 39v3\"/></g></svg><b>Реальный напор воды</b><span>Смесители и души подключены к воде. Проверьте их до покупки.</span></div><div><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg><b>3D-проект на месте</b><span>Дизайнер Kashlux Design покажет, как всё будет выглядеть</span></div><div><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"10\" y=\"6\" width=\"28\" height=\"36\" rx=\"1\"/><path d=\"M16 12h16v8H16zM16 27h2M23 27h2M30 27h2M16 34h2M23 34h2M30 34h2\"/></g></svg><b>Расчёт инженера</b><span>Подберём котёл и водоподготовку под ваш дом</span></div></div></div></section><!-- Booking --><section class=\"book\" id=\"book\"><div class=\"wrap book-grid\"><div><span class=\"eyebrow\">Запись на визит</span><h2 class=\"h-section\" style=\"margin-top:18px\">Запишитесь<br><em>на консультацию</em></h2><p class=\"lead\" style=\"margin-top:18px\">Бесплатно и без обязательств. Мы подтвердим запись по телефону или в Telegram.</p><ul><li><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 5l16 6v11c0 10-7 18-16 21C15 40 8 32 8 22V11z\"/><path d=\"M17 24l5 5 9-10\"/></g></svg>Персональный консультант на всё время визита</li><li><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg>Подготовим образцы по вашему списку</li><li><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12h24v20H4zM28 18h9l7 7v7H28z\"/><circle cx=\"12\" cy=\"35\" r=\"4\"/><circle cx=\"36\" cy=\"35\" r=\"4\"/></g></svg>Скидка на доставку при заказе в день визита*</li></ul></div><form id=\"form\" novalidate><div id=\"formBody\" style=\"display:grid;gap:18px\"><div><span class=\"lbl\">Шоурум</span><div class=\"pick\" id=\"pShop\"></div></div><div><span class=\"lbl\">Цель визита</span><div class=\"pick\"><label><input type=\"radio\" name=\"goal\" value=\"Подбор сантехники\" checked><span>Подбор сантехники</span></label><label><input type=\"radio\" name=\"goal\" value=\"Отопление и котлы\"><span>Отопление и котлы</span></label><label><input type=\"radio\" name=\"goal\" value=\"Дизайн-проект\"><span>Дизайн-проект</span></label><label><input type=\"radio\" name=\"goal\" value=\"Объект / B2B\"><span>Объект / B2B</span></label></div></div><div><span class=\"lbl\">Дата</span><div class=\"days\" id=\"days\"></div></div><div><span class=\"lbl\">Время</span><div class=\"pick\" id=\"times\"></div></div><div class=\"two\"><div class=\"field\" id=\"fN\"><label for=\"nm\">Имя *</label><input id=\"nm\" autocomplete=\"name\" placeholder=\"Как к вам обращаться\"></div><div class=\"field\" id=\"fP\"><label for=\"ph\">Телефон *</label><input id=\"ph\" type=\"tel\" autocomplete=\"tel\" placeholder=\"+998 __ ___ __ __\"></div></div><button class=\"btn btn-orange\" type=\"submit\">Записаться <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></button></div><div class=\"done\" id=\"done\"><div class=\"ok\"><svg viewBox=\"0 0 24 24\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"/></svg></div><b>Вы записаны!</b><p>Мы позвоним, чтобы подтвердить визит.</p><div class=\"sum\" id=\"sum\"></div></div></form></div><div class=\"pat-fill\"></div></section><!-- FAQ --><section class=\"faq-sec\"><div class=\"wrap faq-grid\"><div><span class=\"eyebrow\">Вопросы</span><h2 class=\"h-section\" style=\"margin-top:18px\">Перед <em>визитом</em></h2><p class=\"lead\" style=\"margin-top:16px\">Не нашли ответ? Позвоните: <a href=\"tel:+998951461616\" style=\"color:var(--orange-deep);font-weight:600\">+998 95 146 16 16</a></p></div><div class=\"faq\"><details open><summary>Нужно ли записываться заранее?</summary><p>Можно прийти без записи. Если вы запишетесь, консультант заранее подготовит образцы и выделит время только для вас.</p></details><details><summary>Можно ли купить товар прямо в шоуруме?</summary><p>Да. Товары в наличии можно забрать сразу. Остальные доставим или привезём под заказ.</p></details><details><summary>Есть ли парковка?</summary><p>Уточните это у консультанта при записи. Мы подскажем, где удобнее оставить машину у выбранного шоурума.</p></details><details><summary>Работаете ли вы в воскресенье?</summary><p>Шоурумы открыты с понедельника по субботу, 09:00–18:00. Воскресенье — выходной. Визит в воскресенье можно согласовать отдельно.</p></details></div></div></section><!-- CONTACT CHANNELS (as on kashlux.uz/contact) --><section class=\"kl-mail\" id=\"channels\"><div class=\"wrap\"><div class=\"kl-mail-head\"><span class=\"eyebrow\">Связь с Kashlux</span><h2 class=\"h-section\">Напишите <em>напрямую</em></h2></div><div class=\"kl-mail-grid\"><a href=\"mailto:help@kashlux.uz\"><small>Поддержка клиентов</small><b>help@kashlux.uz</b></a><a href=\"mailto:partners@kashlux.uz\"><small>Сотрудничество и B2B</small><b>partners@kashlux.uz</b></a><a href=\"mailto:service@kashlux.uz\"><small>Сервис и обслуживание</small><b>service@kashlux.uz</b></a><a href=\"mailto:info@kashlux.uz\"><small>Общие вопросы</small><b>info@kashlux.uz</b></a></div><div class=\"kl-mail-soc\"><div><small>Kashlux Comfort</small><a href=\"https://t.me/kashlux_uz\" target=\"_blank\" rel=\"noopener\">Telegram</a><a href=\"https://www.instagram.com/kashlux_comfort/\" target=\"_blank\" rel=\"noopener\">Instagram</a><a href=\"https://www.facebook.com/Kashlux.uz/\" target=\"_blank\" rel=\"noopener\">Facebook</a><a href=\"https://www.youtube.com/channel/UCB3L9dNtRqA25HfuN6JtidQ\" target=\"_blank\" rel=\"noopener\">YouTube</a></div><div><small>Kashlux Design</small><a href=\"https://t.me/kashluxdesign\" target=\"_blank\" rel=\"noopener\">Telegram</a><a href=\"https://www.instagram.com/kashlux_design/\" target=\"_blank\" rel=\"noopener\">Instagram</a><a href=\"https://www.facebook.com/kashluxdesign/\" target=\"_blank\" rel=\"noopener\">Facebook</a></div></div></div></section>\n\n"},"uz":{"page":"\n\n\n\n<section class=\"s-hero\" id=\"top\"><div class=\"wrap\"><nav class=\"crumbs\"><a href=\"/\">Boş sahifa</a> / Şourumlar</nav><div class=\"s-head\"><div><h1>Bir <span>piyola çoyga</span><br>taklif qilamiz</h1><p>Toşkentda törtta şourum. Bu yerda materiallarni uşlab köriş, suv bosimini tekşiriş va loyihani maslahatçi bilan muhokama qiliş mumkin.</p></div><div class=\"status\" id=\"status\"><i></i><div><span id=\"stTxt\">Oçiq</span><br><small id=\"stSub\"></small></div></div></div><div class=\"finder\"><div class=\"list\" id=\"list\"></div><div class=\"map\" id=\"map\" aria-label=\"Şourumlar xaritasi\"><div id=\"lmap\"></div><div class=\"zoom\"><a id=\"mY\" href=\"#\" target=\"_blank\" rel=\"noopener\">Yandex Xaritalar ↗</a><a id=\"mG\" href=\"#\" target=\"_blank\" rel=\"noopener\">Google Maps ↗</a></div></div></div></div></section><!-- Detail --><section class=\"detail\" id=\"detail\"><div class=\"wrap det-grid\"><div class=\"gal\"><div><img fetchpriority=\"high\" id=\"g1\" alt=\"\"></div><div><img loading=\"lazy\" decoding=\"async\" id=\"g2\" alt=\"\"></div><div class=\"tour\" id=\"tour\"><div class=\"pat-line\"></div><b>360°</b><span>Şourum böylab<br>virtual tur</span></div></div><div class=\"det-info\"><span class=\"eyebrow\" id=\"dNum\">Şourum 01</span><h2 id=\"dName\"></h2><p class=\"addr\" id=\"dAddr\"></p><div class=\"det-actions\"><a href=\"#book\" class=\"btn btn-orange\" id=\"dBook\">Taşrifga yoziliş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"#\" class=\"btn btn-grey\" id=\"dRoute\" target=\"_blank\" rel=\"noopener\">Yönaliş</a><a href=\"#\" class=\"btn btn-grey\" id=\"dCall\">Qönğiroq qiliş</a></div><div class=\"info-grid\"><div class=\"box\"><h4>Telefonlar</h4><div id=\"dTel\"></div></div><div class=\"box\"><h4>Iş vaqti</h4><ul class=\"hours\" id=\"dHours\"></ul></div><div class=\"box\" style=\"grid-column:1/-1\"><h4>Nimalar bor*</h4><div class=\"display\" id=\"dShow\"></div></div></div><p class=\"note\">* Şourumlar assortimenti — demo-maʼlumotlar. Uni Kashlux bilan aniqlaştiring.</p></div></div></section><!-- What to expect --><section class=\"expect\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">Sizni nima kutadi</span><h2 class=\"h-section\"><em>Vaqtni tejaydigan</em><br>taşrif</h2></div><p class=\"lead\">Oldindan yoziling, maslahatçi loyihangiz uçun namunalarni tayyorlab qöyadi.</p></div><div class=\"exp\"><div class=\"tea\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M20 5h8M17 9h14a4 4 0 014 4v24a4 4 0 01-4 4H17a4 4 0 01-4-4V13a4 4 0 014-4z\"/><circle cx=\"24\" cy=\"18\" r=\"2.5\"/><path d=\"M21 30h6M18 41v3M30 41v3\"/></g></svg><b>Bir piyola çoy</b><span>Loyihani bir piyola çoy ustida, şoşilmasdan va xaridga undamasdan muhokama qilamiz</span></div><div><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 6v6M14 22a10 10 0 0120 0z\"/><path d=\"M17 28v2M24 28v4M31 28v2M20 35v2M28 35v2M24 39v3\"/></g></svg><b>Haqiqiy suv bosimi</b><span>Aralaştirgiçlar va duşlar suvga ulangan. Ularni xariddan oldin tekşiring.</span></div><div><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg><b>Joyida 3D-loyiha</b><span>Kashlux Design dizayneri hammasi qanday körinişini körsatadi</span></div><div><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"10\" y=\"6\" width=\"28\" height=\"36\" rx=\"1\"/><path d=\"M16 12h16v8H16zM16 27h2M23 27h2M30 27h2M16 34h2M23 34h2M30 34h2\"/></g></svg><b>Muhandis hisobi</b><span>Uyingiz uçun qozon va suv tayyorlaş tizimini tanlab beramiz</span></div></div></div></section><!-- Booking --><section class=\"book\" id=\"book\"><div class=\"wrap book-grid\"><div><span class=\"eyebrow\">Taşrifga yoziliş</span><h2 class=\"h-section\" style=\"margin-top:18px\"><em>Maslahatga</em><br>yoziling</h2><p class=\"lead\" style=\"margin-top:18px\">Bepul va heç qanday majburiyatsiz. Yozilişni telefon yoki Telegram orqali tasdiqlaymiz.</p><ul><li><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 5l16 6v11c0 10-7 18-16 21C15 40 8 32 8 22V11z\"/><path d=\"M17 24l5 5 9-10\"/></g></svg>Taşrif davomida şaxsiy maslahatçi</li><li><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg>Röyxatingiz böyiça namunalarni tayyorlaymiz</li><li><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12h24v20H4zM28 18h9l7 7v7H28z\"/><circle cx=\"12\" cy=\"35\" r=\"4\"/><circle cx=\"36\" cy=\"35\" r=\"4\"/></g></svg>Taşrif kuni buyurtma bersangiz, yetkazib berişga çegirma*</li></ul></div><form id=\"form\" novalidate><div id=\"formBody\" style=\"display:grid;gap:18px\"><div><span class=\"lbl\">Şourum</span><div class=\"pick\" id=\"pShop\"></div></div><div><span class=\"lbl\">Taşrif maqsadi</span><div class=\"pick\"><label><input type=\"radio\" name=\"goal\" value=\"Santexnika tanlaş\" checked><span>Santexnika tanlaş</span></label><label><input type=\"radio\" name=\"goal\" value=\"Isitiş va qozonlar\"><span>Isitiş va qozonlar</span></label><label><input type=\"radio\" name=\"goal\" value=\"Dizayn loyiha\"><span>Dizayn loyiha</span></label><label><input type=\"radio\" name=\"goal\" value=\"Obyekt / B2B\"><span>Obyekt / B2B</span></label></div></div><div><span class=\"lbl\">Sana</span><div class=\"days\" id=\"days\"></div></div><div><span class=\"lbl\">Vaqt</span><div class=\"pick\" id=\"times\"></div></div><div class=\"two\"><div class=\"field\" id=\"fN\"><label for=\"nm\">Ism *</label><input id=\"nm\" autocomplete=\"name\" placeholder=\"Sizga qanday murojaat qilaylik\"></div><div class=\"field\" id=\"fP\"><label for=\"ph\">Telefon *</label><input id=\"ph\" type=\"tel\" autocomplete=\"tel\" placeholder=\"+998 __ ___ __ __\"></div></div><button class=\"btn btn-orange\" type=\"submit\">Yoziliş <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></button></div><div class=\"done\" id=\"done\"><div class=\"ok\"><svg viewBox=\"0 0 24 24\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"/></svg></div><b>Siz yozildingiz!</b><p>Taşrifni tasdiqlaş uçun qönğiroq qilamiz.</p><div class=\"sum\" id=\"sum\"></div></div></form></div><div class=\"pat-fill\"></div></section><!-- FAQ --><section class=\"faq-sec\"><div class=\"wrap faq-grid\"><div><span class=\"eyebrow\">Savollar</span><h2 class=\"h-section\" style=\"margin-top:18px\"><em>Taşrifdan</em> oldin</h2><p class=\"lead\" style=\"margin-top:16px\">Javob topmadingizmi? Qönğiroq qiling: <a href=\"tel:+998951461616\" style=\"color:var(--orange-deep);font-weight:600\">+998 95 146 16 16</a></p></div><div class=\"faq\"><details open><summary>Oldindan yoziliş kerakmi?</summary><p>Oldindan yozilmasdan keliş mumkin. Agar yozilsangiz, maslahatçi namunalarni oldindan tayyorlaydi va vaqtini faqat Sizga ajratadi.</p></details><details><summary>Tovarni töğridan-töğri şourumda sotib oliş mumkinmi?</summary><p>Ha. Mavjud tovarlarni darhol olib ketiş mumkin. Qolganlarini yetkazib beramiz yoki buyurtma asosida olib kelamiz.</p></details><details><summary>Avtoturargoh bormi?</summary><p>Yoziliş paytida buni maslahatçidan sörang. Tanlangan şourum yonida maşinani qayerda qoldiriş qulayligini aytib beramiz.</p></details><details><summary>Yakşanba kuni işlaysizmi?</summary><p>Şourumlar duşanbadan şanbagaça, 09:00–18:00 oçiq. Yakşanba — dam oliş kuni. Yakşanba kuni taşrifni alohida kelişib oliş mumkin.</p></details></div></div></section><!-- CONTACT CHANNELS (as on kashlux.uz/contact) --><section class=\"kl-mail\" id=\"channels\"><div class=\"wrap\"><div class=\"kl-mail-head\"><span class=\"eyebrow\">Kashlux bilan aloqa</span><h2 class=\"h-section\"><em>Bevosita</em> yozing</h2></div><div class=\"kl-mail-grid\"><a href=\"mailto:help@kashlux.uz\"><small>Mijozlarni qöllab-quvvatlaş</small><b>help@kashlux.uz</b></a><a href=\"mailto:partners@kashlux.uz\"><small>Hamkorlik va B2B</small><b>partners@kashlux.uz</b></a><a href=\"mailto:service@kashlux.uz\"><small>Servis va xizmat körsatiş</small><b>service@kashlux.uz</b></a><a href=\"mailto:info@kashlux.uz\"><small>Umumiy savollar</small><b>info@kashlux.uz</b></a></div><div class=\"kl-mail-soc\"><div><small>Kashlux Comfort</small><a href=\"https://t.me/kashlux_uz\" target=\"_blank\" rel=\"noopener\">Telegram</a><a href=\"https://www.instagram.com/kashlux_comfort/\" target=\"_blank\" rel=\"noopener\">Instagram</a><a href=\"https://www.facebook.com/Kashlux.uz/\" target=\"_blank\" rel=\"noopener\">Facebook</a><a href=\"https://www.youtube.com/channel/UCB3L9dNtRqA25HfuN6JtidQ\" target=\"_blank\" rel=\"noopener\">YouTube</a></div><div><small>Kashlux Design</small><a href=\"https://t.me/kashluxdesign\" target=\"_blank\" rel=\"noopener\">Telegram</a><a href=\"https://www.instagram.com/kashlux_design/\" target=\"_blank\" rel=\"noopener\">Instagram</a><a href=\"https://www.facebook.com/kashluxdesign/\" target=\"_blank\" rel=\"noopener\">Facebook</a></div></div></div></section>\n\n"},"en":{"page":"\n\n\n\n<section class=\"s-hero\" id=\"top\"><div class=\"wrap\"><nav class=\"crumbs\"><a href=\"/\">Home</a> / Showrooms</nav><div class=\"s-head\"><div><h1>Join us<br>for <span>a cup of tea</span></h1><p>Four showrooms in Tashkent. Here you can touch the materials, test the water pressure and discuss your project with a consultant.</p></div><div class=\"status\" id=\"status\"><i></i><div><span id=\"stTxt\">Open</span><br><small id=\"stSub\"></small></div></div></div><div class=\"finder\"><div class=\"list\" id=\"list\"></div><div class=\"map\" id=\"map\" aria-label=\"Showroom map\"><div id=\"lmap\"></div><div class=\"zoom\"><a id=\"mY\" href=\"#\" target=\"_blank\" rel=\"noopener\">Yandex Maps ↗</a><a id=\"mG\" href=\"#\" target=\"_blank\" rel=\"noopener\">Google Maps ↗</a></div></div></div></div></section><!-- Detail --><section class=\"detail\" id=\"detail\"><div class=\"wrap det-grid\"><div class=\"gal\"><div><img fetchpriority=\"high\" id=\"g1\" alt=\"\"></div><div><img loading=\"lazy\" decoding=\"async\" id=\"g2\" alt=\"\"></div><div class=\"tour\" id=\"tour\"><div class=\"pat-line\"></div><b>360°</b><span>Virtual tour<br>of the showroom</span></div></div><div class=\"det-info\"><span class=\"eyebrow\" id=\"dNum\">Showroom 01</span><h2 id=\"dName\"></h2><p class=\"addr\" id=\"dAddr\"></p><div class=\"det-actions\"><a href=\"#book\" class=\"btn btn-orange\" id=\"dBook\">Book a visit <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></a><a href=\"#\" class=\"btn btn-grey\" id=\"dRoute\" target=\"_blank\" rel=\"noopener\">Directions</a><a href=\"#\" class=\"btn btn-grey\" id=\"dCall\">Call</a></div><div class=\"info-grid\"><div class=\"box\"><h4>Phone numbers</h4><div id=\"dTel\"></div></div><div class=\"box\"><h4>Opening hours</h4><ul class=\"hours\" id=\"dHours\"></ul></div><div class=\"box\" style=\"grid-column:1/-1\"><h4>What’s on display*</h4><div class=\"display\" id=\"dShow\"></div></div></div><p class=\"note\">* The showroom range is demo data. Please check it with Kashlux.</p></div></div></section><!-- What to expect --><section class=\"expect\"><div class=\"wrap\"><div class=\"sec-head\"><div><span class=\"eyebrow\">What to expect</span><h2 class=\"h-section\">A visit that<br><em>saves you time</em></h2></div><p class=\"lead\">Book in advance, and a consultant will prepare samples for your project.</p></div><div class=\"exp\"><div class=\"tea\"><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M20 5h8M17 9h14a4 4 0 014 4v24a4 4 0 01-4 4H17a4 4 0 01-4-4V13a4 4 0 014-4z\"/><circle cx=\"24\" cy=\"18\" r=\"2.5\"/><path d=\"M21 30h6M18 41v3M30 41v3\"/></g></svg><b>A cup of tea</b><span>We discuss your project over a cup of tea, with no rush and no pressure to buy</span></div><div><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 6v6M14 22a10 10 0 0120 0z\"/><path d=\"M17 28v2M24 28v4M31 28v2M20 35v2M28 35v2M24 39v3\"/></g></svg><b>Real water pressure</b><span>Faucets and showers are connected to water. Test them before you buy.</span></div><div><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg><b>3D design on site</b><span>A Kashlux Design designer will show you how everything will look</span></div><div><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"10\" y=\"6\" width=\"28\" height=\"36\" rx=\"1\"/><path d=\"M16 12h16v8H16zM16 27h2M23 27h2M30 27h2M16 34h2M23 34h2M30 34h2\"/></g></svg><b>Engineer’s calculation</b><span>We will select a boiler and water treatment for your home</span></div></div></div></section><!-- Booking --><section class=\"book\" id=\"book\"><div class=\"wrap book-grid\"><div><span class=\"eyebrow\">Visit booking</span><h2 class=\"h-section\" style=\"margin-top:18px\">Book<br><em>a consultation</em></h2><p class=\"lead\" style=\"margin-top:18px\">Free and with no obligation. We will confirm your booking by phone or in Telegram.</p><ul><li><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M24 5l16 6v11c0 10-7 18-16 21C15 40 8 32 8 22V11z\"/><path d=\"M17 24l5 5 9-10\"/></g></svg>A personal consultant for your entire visit</li><li><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 40V8h32v32zM8 28h12V8M20 20h20\"/><path d=\"M28 28l6 6M34 28l-6 6\"/></g></svg>We will prepare samples from your list</li><li><svg viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12h24v20H4zM28 18h9l7 7v7H28z\"/><circle cx=\"12\" cy=\"35\" r=\"4\"/><circle cx=\"36\" cy=\"35\" r=\"4\"/></g></svg>Delivery discount when you order on the day of your visit*</li></ul></div><form id=\"form\" novalidate><div id=\"formBody\" style=\"display:grid;gap:18px\"><div><span class=\"lbl\">Showroom</span><div class=\"pick\" id=\"pShop\"></div></div><div><span class=\"lbl\">Purpose of visit</span><div class=\"pick\"><label><input type=\"radio\" name=\"goal\" value=\"Plumbing selection\" checked><span>Plumbing selection</span></label><label><input type=\"radio\" name=\"goal\" value=\"Heating and boilers\"><span>Heating and boilers</span></label><label><input type=\"radio\" name=\"goal\" value=\"Design project\"><span>Design project</span></label><label><input type=\"radio\" name=\"goal\" value=\"Project / B2B\"><span>Project / B2B</span></label></div></div><div><span class=\"lbl\">Date</span><div class=\"days\" id=\"days\"></div></div><div><span class=\"lbl\">Time</span><div class=\"pick\" id=\"times\"></div></div><div class=\"two\"><div class=\"field\" id=\"fN\"><label for=\"nm\">Name *</label><input id=\"nm\" autocomplete=\"name\" placeholder=\"How should we address you\"></div><div class=\"field\" id=\"fP\"><label for=\"ph\">Phone *</label><input id=\"ph\" type=\"tel\" autocomplete=\"tel\" placeholder=\"+998 __ ___ __ __\"></div></div><button class=\"btn btn-orange\" type=\"submit\">Book <svg class=\"arrow\" viewBox=\"0 0 24 24\"><path d=\"M6 18L18 6M8 6h10v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg></button></div><div class=\"done\" id=\"done\"><div class=\"ok\"><svg viewBox=\"0 0 24 24\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"/></svg></div><b>Your visit is booked!</b><p>We will call you to confirm the visit.</p><div class=\"sum\" id=\"sum\"></div></div></form></div><div class=\"pat-fill\"></div></section><!-- FAQ --><section class=\"faq-sec\"><div class=\"wrap faq-grid\"><div><span class=\"eyebrow\">Questions</span><h2 class=\"h-section\" style=\"margin-top:18px\">Before <em>your visit</em></h2><p class=\"lead\" style=\"margin-top:16px\">Didn’t find an answer? Call us: <a href=\"tel:+998951461616\" style=\"color:var(--orange-deep);font-weight:600\">+998 95 146 16 16</a></p></div><div class=\"faq\"><details open><summary>Do I need to book in advance?</summary><p>You can come without booking. If you book, a consultant will prepare samples in advance and set aside time just for you.</p></details><details><summary>Can I buy products right in the showroom?</summary><p>Yes. You can take products that are in stock right away. We will deliver the rest or order them for you.</p></details><details><summary>Is there parking?</summary><p>Please ask the consultant when you book. We will tell you where it is most convenient to park at the showroom you choose.</p></details><details><summary>Are you open on Sundays?</summary><p>The showrooms are open Monday to Saturday, 09:00–18:00. Sunday is a day off. A Sunday visit can be arranged separately.</p></details></div></div></section><!-- CONTACT CHANNELS (as on kashlux.uz/contact) --><section class=\"kl-mail\" id=\"channels\"><div class=\"wrap\"><div class=\"kl-mail-head\"><span class=\"eyebrow\">Contact Kashlux</span><h2 class=\"h-section\">Write to us <em>directly</em></h2></div><div class=\"kl-mail-grid\"><a href=\"mailto:help@kashlux.uz\"><small>Customer support</small><b>help@kashlux.uz</b></a><a href=\"mailto:partners@kashlux.uz\"><small>Partnership and B2B</small><b>partners@kashlux.uz</b></a><a href=\"mailto:service@kashlux.uz\"><small>Service and maintenance</small><b>service@kashlux.uz</b></a><a href=\"mailto:info@kashlux.uz\"><small>General questions</small><b>info@kashlux.uz</b></a></div><div class=\"kl-mail-soc\"><div><small>Kashlux Comfort</small><a href=\"https://t.me/kashlux_uz\" target=\"_blank\" rel=\"noopener\">Telegram</a><a href=\"https://www.instagram.com/kashlux_comfort/\" target=\"_blank\" rel=\"noopener\">Instagram</a><a href=\"https://www.facebook.com/Kashlux.uz/\" target=\"_blank\" rel=\"noopener\">Facebook</a><a href=\"https://www.youtube.com/channel/UCB3L9dNtRqA25HfuN6JtidQ\" target=\"_blank\" rel=\"noopener\">YouTube</a></div><div><small>Kashlux Design</small><a href=\"https://t.me/kashluxdesign\" target=\"_blank\" rel=\"noopener\">Telegram</a><a href=\"https://www.instagram.com/kashlux_design/\" target=\"_blank\" rel=\"noopener\">Instagram</a><a href=\"https://www.facebook.com/kashluxdesign/\" target=\"_blank\" rel=\"noopener\">Facebook</a></div></div></div></section>\n\n"}},"js":{"ru":{"page":["\n\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\n\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\n\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n\n\n\nconst W=(id,w,h)=>`https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_auto/s.jpg`;\n// addresses and phones from kashlux.uz; coordinates from OpenStreetMap (Minor: the point on the old kashlux.uz map)\nconst SR=[\n  {n:'Минор',a:'пр. Шарафа Рашидова, 16, Юнусабадский р-н, Ташкент',q:'Ташкент, проспект Шарафа Рашидова 16',t:['+998 95 146 16 16','+998 78 147 16 16'],lat:41.31788,lng:69.27145,img:['a8ce0d_536d40efc039475cade0100c76988b72~mv2.jpg','a8ce0d_433252a6d592416e9c50f38a13b26f59~mv2.jpg'],show:['i-tap','i-bath','i-toilet','i-shower','i-boiler']},\n  {n:'Алой',a:'Крытый рынок Алой, дом 58, Ташкент',q:'Ташкент, Алайский рынок',t:['+998 78 147 47 47','+998 71 233 86 52'],lat:41.31878,lng:69.28320,img:['a8ce0d_07678835b2aa441db88f5c78837c5ace~mv2.jpg','a8ce0d_657382d3d8ac459c88a6cb56ea4291ca~mv2.jpg'],show:['i-tap','i-shower','i-pipe','i-pump']},\n  {n:'Фидокор',a:'ул. Фидокор, 38, Ташкент 100015',q:'Ташкент, улица Фидокор 38',t:['+998 71 256 94 94','+998 97 004 94 94'],lat:41.29514,lng:69.27247,img:['a8ce0d_7ba72eb4dcc1496da6d36c9843635105~mv2.jpg','a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg'],show:['i-boiler','i-radiator','i-heater','i-pump','i-pipe']},\n  {n:'Паркент',a:'ул. Паркент, дом 215, Ташкент',q:'Ташкент, улица Паркент 215',t:['+998 95 170 74 74'],lat:41.31281,lng:69.33233,img:['a8ce0d_5b9f5024ffe54738b135844f0e1b39dd~mv2.jpg','a8ce0d_d9648fd4ba834381850f27dc535b57c3~mv2.jpg'],show:['i-bath','i-toilet','i-tap','i-design']}\n];\nconst SHOWN={'i-tap':'Смесители','i-bath':'Ванны','i-toilet':'Унитазы','i-shower':'Душевые','i-boiler':'Котлы','i-pipe':'Трубы','i-pump':'Насосы','i-radiator':'Радиаторы','i-heater':'Водонагреватели','i-design':'Студия дизайна'};\nconst DAYS=['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];\nconst DS=['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],MN=['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'];\nconst $=id=>document.getElementById(id);\nlet cur=0;\n\n// Tashkent time (UTC+5); showrooms open Mon–Sat 09:00–18:00 (kashlux.uz/contact, top.uz)\nfunction tashkentNow(){const d=new Date();return new Date(d.getTime()+d.getTimezoneOffset()*60000+5*3600000)}\nfunction openState(){\n  const t=tashkentNow(),wd=t.getDay(),h=t.getHours()+t.getMinutes()/60;\n  const open=wd>=1&&wd<=6&&h>=9&&h<18;\n  if(open)return{open,txt:'Сейчас открыто',sub:'до 18:00 по Ташкенту'};\n  let nd=new Date(t);do{nd.setDate(nd.getDate()+1)}while(nd.getDay()===0);\n  const today=wd>=1&&wd<=6&&h<9;\n  return{open,txt:'Сейчас закрыто',sub:'Откроется '+(today?'сегодня':nd.getDay()===((wd+1)%7)?'завтра':'в '+(/^en/i.test(document.documentElement.lang)?DAYS[nd.getDay()]:DAYS[nd.getDay()].toLowerCase()))+' в 09:00'};\n}\nconst st=openState();\n$('status').classList.toggle('closed',!st.open);$('stTxt').textContent=st.txt;$('stSub').textContent=st.sub;\n\nfunction render(){\n  $('list').innerHTML=SR.map((s,i)=>`<button class=\"sr${i===cur?' on':''}\" data-i=\"${i}\"><span class=\"num\">0${i+1}</span><div><h3>${s.n}</h3><p>${s.a.split(',').slice(0,2).join(',')}</p><span class=\"open${st.open?'':' c'}\">● ${st.open?'Открыто до 18:00':'Закрыто · '+st.sub.toLowerCase()}</span></div><svg class=\"arr\"><use href=\"#i-arrow\"/></svg></button>`).join('')+\n    `<a class=\"near\" href=\"#\" id=\"near\"><svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v3M12 19v3M2 12h3M19 12h3\"/><circle cx=\"12\" cy=\"12\" r=\"8\"/></svg>${nearMsg||'Найти ближайший шоурум'}</a>`;\n  paintPins();\n  const s=SR[cur];\n  $('dNum').textContent='Шоурум 0'+(cur+1);$('dName').textContent='Kashlux '+s.n;$('dAddr').textContent=s.a;\n  [$('g1'),$('g2')].forEach((g,k)=>{g.style.opacity=0;g.onload=()=>g.style.opacity=1;g.src=W(s.img[k],k?600:1200,k?340:680);if(g.complete)g.style.opacity=1;g.alt='Шоурум '+s.n});\n  $('dTel').innerHTML=s.t.map(t=>`<a href=\"tel:${t.replace(/\\s/g,'')}\">${t}</a>`).join('');\n  $('dCall').href='tel:'+s.t[0].replace(/\\s/g,'');\n  const ll=s.lat+','+s.lng;\n  $('dRoute').href='https://yandex.uz/maps/?rtext=~'+ll+'&rtt=auto';\n  $('mY').href='https://yandex.uz/maps/?pt='+s.lng+','+s.lat+'&z=17&l=map';\n  $('mG').href='https://www.google.com/maps/search/?api=1&query='+ll;\n  const wd=tashkentNow().getDay();\n  $('dHours').innerHTML=[1,2,3,4,5,6,0].map(d=>`<li class=\"${d===wd?'today':''} ${d===0?'off':''}\"><span>${DAYS[d]}</span><span>${d===0?'выходной':'09:00–18:00'}</span></li>`).join('');\n  $('dShow').innerHTML=s.show.map(i=>`<span><svg><use href=\"#${i}\"/></svg>${SHOWN[i]}</span>`).join('');\n  document.querySelectorAll('[name=shop]').forEach((r,i)=>r.checked=i===cur);\n}\n// real map: Leaflet + OpenStreetMap tiles (tinted dark in CSS), loaded when the map comes near the screen\nconst LF='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/';\nlet map=null,marks=[],meMark=null,nearMsg='';\nconst pinHtml=i=>`<span class=\"pin${i===cur?' on':''}\" data-i=\"${i}\"><b>${SR[i].n}</b><i><span>${i+1}</span></i></span>`;\nfunction loadLeaflet(){\n  if(window.L&&window.L.map)return Promise.resolve(window.L);\n  // Wix pages have their own module loader (define): run Leaflet without it so it sets window.L\n  if(!window.klLeaflet)window.klLeaflet=fetch(LF+'leaflet.js').then(r=>r.text()).then(code=>{new Function('define','exports','module',code).call(window);if(!window.L||!window.L.map)throw new Error('leaflet');return window.L});\n  return window.klLeaflet;\n}\nfunction initMap(){\n  const box=$('lmap');if(!box||map)return;\n  Promise.all([loadLeaflet(),fetch(LF+'leaflet.css').then(r=>r.text())]).then(([L,css])=>{\n    if(map)return;\n    const st=window.document.createElement('style');st.textContent=css;box.parentNode.insertBefore(st,box);\n    map=L.map(box,{scrollWheelZoom:false,attributionControl:true}).setView([41.31,69.29],12);\n    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\">OpenStreetMap</a>'}).addTo(map);\n    marks=SR.map((s,i)=>L.marker([s.lat,s.lng],{icon:L.divIcon({className:'kl-mk',html:pinHtml(i),iconSize:[0,0]}),title:s.n}).addTo(map).on('click',()=>{cur=i;render();flyTo(i)}));\n    map.fitBounds(SR.map(s=>[s.lat,s.lng]),{padding:[70,70]});\n    paintPins();\n  }).catch(()=>{box.dataset.msg='Карта не загрузилась. Откройте адрес в Яндекс Картах или Google Maps.';box.classList.add('fail')});\n}\nfunction paintPins(){marks.forEach((m,i)=>{const el=m.getElement();if(el)el.querySelector('.pin').classList.toggle('on',i===cur);m.setZIndexOffset(i===cur?1000:0)})}\nfunction flyTo(i){if(map)map.flyTo([SR[i].lat,SR[i].lng],Math.max(map.getZoom(),14),{duration:.6})}\nif('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){io.disconnect();initMap()}},{rootMargin:'400px'});io.observe($('map'))}else initMap();\n\n// nearest showroom: browser location + straight-line distance to each showroom\nfunction km(a,b){const r=x=>x*Math.PI/180,dl=r(b[0]-a[0]),dn=r(b[1]-a[1]);const h=Math.sin(dl/2)**2+Math.cos(r(a[0]))*Math.cos(r(b[0]))*Math.sin(dn/2)**2;return 12742*Math.asin(Math.sqrt(h))}\nfunction setNear(msg,busy){nearMsg=msg;const n=$('near');if(!n)return;n.lastChild.textContent=msg;n.classList.toggle('busy',!!busy)}\nfunction findNear(){\n  if(!navigator.geolocation){setNear('Ваш браузер не определяет местоположение');return}\n  setNear('Определяем ваше местоположение…',true);\n  navigator.geolocation.getCurrentPosition(p=>{\n    const u=[p.coords.latitude,p.coords.longitude],d=SR.map(s=>km(u,[s.lat,s.lng]));\n    const i=d.indexOf(Math.min(...d)),dist=d[i]<10?d[i].toFixed(1).replace('.',','):Math.round(d[i]);\n    cur=i;nearMsg='Ближайший к вам: '+SR[i].n+' · '+dist+' км';render();\n    initMap();loadLeaflet().then(L=>{if(!map)return;\n      if(meMark)meMark.setLatLng(u);else meMark=L.marker(u,{icon:L.divIcon({className:'',html:'<div class=\"me\"></div>',iconSize:[0,0]}),title:'Вы здесь'}).addTo(map);\n      map.fitBounds([u,[SR[i].lat,SR[i].lng]],{padding:[80,80],maxZoom:15});\n    });\n  },err=>{setNear(err.code===1?'Разрешите доступ к местоположению в браузере':'Не удалось определить местоположение')},{enableHighAccuracy:true,timeout:12000,maximumAge:300000});\n}\ndocument.addEventListener('click',e=>{\n  const b=e.target.closest('.sr');if(b){cur=+b.dataset.i;render();flyTo(cur);if(innerWidth<1080)$('detail').scrollIntoView({behavior:'smooth'})}\n  if(e.target.closest('#near')){e.preventDefault();findNear()}\n  if(e.target.closest('#tour'))alert('Здесь откроется виртуальный 3D-тур по шоуруму.');\n});\n\n// booking\n$('pShop').innerHTML=SR.map((s,i)=>`<label><input type=\"radio\" name=\"shop\" value=\"${s.n}\"${i===cur?' checked':''}><span>${s.n}</span></label>`).join('');\n$('pShop').addEventListener('change',e=>{cur=SR.findIndex(s=>s.n===e.target.value);render()});\n(function days(){const t=tashkentNow();let h='',first=true;for(let i=0;i<10;i++){const d=new Date(t);d.setDate(t.getDate()+i);const off=d.getDay()===0;h+=`<label class=\"day${off?' off':''}\"><input type=\"radio\" name=\"day\" value=\"${d.getDate()} ${MN[d.getMonth()]}\"${!off&&first?' checked':''}><span>${i===0?'Сегодня':i===1?'Завтра':DS[d.getDay()]}</span><b>${d.getDate()}</b><span>${MN[d.getMonth()]}</span></label>`;if(!off&&first)first=false}$('days').innerHTML=h})();\nfunction times(){\n  const t=tashkentNow(),sel=document.querySelector('[name=day]:checked');const isToday=sel&&sel.closest('.day')===$('days').querySelector('.day');\n  const slots=['10:00','11:00','12:00','14:00','15:00','16:00','17:00'];\n  let firstFree=true;\n  $('times').innerHTML=slots.map(s=>{const past=isToday&&+s.slice(0,2)<=t.getHours();const busy=s==='12:00';const dis=past||busy;const chk=!dis&&firstFree;if(chk)firstFree=false;return `<label><input type=\"radio\" name=\"tm\" value=\"${s}\"${dis?' disabled':''}${chk?' checked':''}><span>${s}</span></label>`}).join('');\n}\n$('days').addEventListener('change',times);times();\n$('ph').addEventListener('input',e=>{let d=e.target.value.replace(/\\D/g,'');if(d.startsWith('998'))d=d.slice(3);d=d.slice(0,9);const p=[d.slice(0,2),d.slice(2,5),d.slice(5,7),d.slice(7,9)].filter(Boolean);e.target.value=d?'+998 '+p.join(' '):'';$('fP').classList.remove('err')});\n$('nm').addEventListener('input',()=>$('fN').classList.remove('err'));\n$('form').onsubmit=e=>{\n  e.preventDefault();\n  const badN=$('nm').value.trim().length<2,badP=$('ph').value.replace(/\\D/g,'').length!==12;\n  $('fN').classList.toggle('err',badN);$('fP').classList.toggle('err',badP);\n  const tm=document.querySelector('[name=tm]:checked');\n  if(badN||badP||!tm){(badN?$('nm'):$('ph')).focus();return}\n  const v=n=>document.querySelector(`[name=${n}]:checked`).value;\n  $('sum').innerHTML=`<span>Шоурум: <b>${v('shop')}</b></span><span>Дата: <b>${v('day')}, ${tm.value}</b></span><span>Цель: <b>${v('goal')}</b></span>`;\n  $('formBody').style.display='none';$('done').style.display='block';\n};\nrender();\n"]},"uz":{"page":["\n\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\n\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\n\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n\n\n\nconst W=(id,w,h)=>`https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_auto/s.jpg`;\n// addresses and phones from kashlux.uz; coordinates from OpenStreetMap (Minor: the point on the old kashlux.uz map)\nconst SR=[\n  {n:'Minor',a:'Şarof Raşidov şoh köçasi, 16, Yunusobod tumani, Toşkent',q:'Toşkent, Şarof Raşidov şoh köçasi 16',t:['+998 95 146 16 16','+998 78 147 16 16'],lat:41.31788,lng:69.27145,img:['a8ce0d_536d40efc039475cade0100c76988b72~mv2.jpg','a8ce0d_433252a6d592416e9c50f38a13b26f59~mv2.jpg'],show:['i-tap','i-bath','i-toilet','i-shower','i-boiler']},\n  {n:'Oloy',a:'Oloy yopiq bozori, 58-uy, Toşkent',q:'Toşkent, Oloy bozori',t:['+998 78 147 47 47','+998 71 233 86 52'],lat:41.31878,lng:69.28320,img:['a8ce0d_07678835b2aa441db88f5c78837c5ace~mv2.jpg','a8ce0d_657382d3d8ac459c88a6cb56ea4291ca~mv2.jpg'],show:['i-tap','i-shower','i-pipe','i-pump']},\n  {n:'Fidokor',a:'Fidokor köç., 38, Toşkent 100015',q:'Toşkent, Fidokor köçasi 38',t:['+998 71 256 94 94','+998 97 004 94 94'],lat:41.29514,lng:69.27247,img:['a8ce0d_7ba72eb4dcc1496da6d36c9843635105~mv2.jpg','a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg'],show:['i-boiler','i-radiator','i-heater','i-pump','i-pipe']},\n  {n:'Parkent',a:'Parkent köç., 215-uy, Toşkent',q:'Toşkent, Parkent köçasi 215',t:['+998 95 170 74 74'],lat:41.31281,lng:69.33233,img:['a8ce0d_5b9f5024ffe54738b135844f0e1b39dd~mv2.jpg','a8ce0d_d9648fd4ba834381850f27dc535b57c3~mv2.jpg'],show:['i-bath','i-toilet','i-tap','i-design']}\n];\nconst SHOWN={'i-tap':'Aralaştirgiçlar','i-bath':'Vannalar','i-toilet':'Unitazlar','i-shower':'Duşlar','i-boiler':'Qozonlar','i-pipe':'Quvurlar','i-pump':'Nasoslar','i-radiator':'Radiatorlar','i-heater':'Suv isitgiçlar','i-design':'Dizayn studiyasi'};\nconst DAYS=['Yakşanba','Duşanba','Seşanba','Çorşanba','Payşanba','Juma','Şanba'];\nconst DS=['Ya','Du','Se','Çor','Pa','Ju','Ş'],MN=['yan','fev','mar','apr','may','iyun','iyul','avg','sen','okt','noy','dek'];\nconst $=id=>document.getElementById(id);\nlet cur=0;\n\n// Tashkent time (UTC+5); showrooms open Mon–Sat 09:00–18:00 (kashlux.uz/contact, top.uz)\nfunction tashkentNow(){const d=new Date();return new Date(d.getTime()+d.getTimezoneOffset()*60000+5*3600000)}\nfunction openState(){\n  const t=tashkentNow(),wd=t.getDay(),h=t.getHours()+t.getMinutes()/60;\n  const open=wd>=1&&wd<=6&&h>=9&&h<18;\n  if(open)return{open,txt:'Hozir oçiq',sub:'Toşkent vaqti bilan 18:00 gaça'};\n  let nd=new Date(t);do{nd.setDate(nd.getDate()+1)}while(nd.getDay()===0);\n  const today=wd>=1&&wd<=6&&h<9;\n  return{open,txt:'Hozir yopiq',sub:'Oçiladi '+(today?'bugun':nd.getDay()===((wd+1)%7)?'ertaga':'da '+(/^en/i.test(document.documentElement.lang)?DAYS[nd.getDay()]:DAYS[nd.getDay()].toLowerCase()))+' soat 09:00 da'};\n}\nconst st=openState();\n$('status').classList.toggle('closed',!st.open);$('stTxt').textContent=st.txt;$('stSub').textContent=st.sub;\n\nfunction render(){\n  $('list').innerHTML=SR.map((s,i)=>`<button class=\"sr${i===cur?' on':''}\" data-i=\"${i}\"><span class=\"num\">0${i+1}</span><div><h3>${s.n}</h3><p>${s.a.split(',').slice(0,2).join(',')}</p><span class=\"open${st.open?'':' c'}\">● ${st.open?'18:00 gaça oçiq':'Yopiq · '+st.sub.toLowerCase()}</span></div><svg class=\"arr\"><use href=\"#i-arrow\"/></svg></button>`).join('')+\n    `<a class=\"near\" href=\"#\" id=\"near\"><svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v3M12 19v3M2 12h3M19 12h3\"/><circle cx=\"12\" cy=\"12\" r=\"8\"/></svg>${nearMsg||'Eng yaqin şourumni topiş'}</a>`;\n  paintPins();\n  const s=SR[cur];\n  $('dNum').textContent='Şourum 0'+(cur+1);$('dName').textContent='Kashlux '+s.n;$('dAddr').textContent=s.a;\n  [$('g1'),$('g2')].forEach((g,k)=>{g.style.opacity=0;g.onload=()=>g.style.opacity=1;g.src=W(s.img[k],k?600:1200,k?340:680);if(g.complete)g.style.opacity=1;g.alt='Şourum '+s.n});\n  $('dTel').innerHTML=s.t.map(t=>`<a href=\"tel:${t.replace(/\\s/g,'')}\">${t}</a>`).join('');\n  $('dCall').href='tel:'+s.t[0].replace(/\\s/g,'');\n  const ll=s.lat+','+s.lng;\n  $('dRoute').href='https://yandex.uz/maps/?rtext=~'+ll+'&rtt=auto';\n  $('mY').href='https://yandex.uz/maps/?pt='+s.lng+','+s.lat+'&z=17&l=map';\n  $('mG').href='https://www.google.com/maps/search/?api=1&query='+ll;\n  const wd=tashkentNow().getDay();\n  $('dHours').innerHTML=[1,2,3,4,5,6,0].map(d=>`<li class=\"${d===wd?'today':''} ${d===0?'off':''}\"><span>${DAYS[d]}</span><span>${d===0?'dam oliş kuni':'09:00–18:00'}</span></li>`).join('');\n  $('dShow').innerHTML=s.show.map(i=>`<span><svg><use href=\"#${i}\"/></svg>${SHOWN[i]}</span>`).join('');\n  document.querySelectorAll('[name=shop]').forEach((r,i)=>r.checked=i===cur);\n}\n// real map: Leaflet + OpenStreetMap tiles (tinted dark in CSS), loaded when the map comes near the screen\nconst LF='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/';\nlet map=null,marks=[],meMark=null,nearMsg='';\nconst pinHtml=i=>`<span class=\"pin${i===cur?' on':''}\" data-i=\"${i}\"><b>${SR[i].n}</b><i><span>${i+1}</span></i></span>`;\nfunction loadLeaflet(){\n  if(window.L&&window.L.map)return Promise.resolve(window.L);\n  // Wix pages have their own module loader (define): run Leaflet without it so it sets window.L\n  if(!window.klLeaflet)window.klLeaflet=fetch(LF+'leaflet.js').then(r=>r.text()).then(code=>{new Function('define','exports','module',code).call(window);if(!window.L||!window.L.map)throw new Error('leaflet');return window.L});\n  return window.klLeaflet;\n}\nfunction initMap(){\n  const box=$('lmap');if(!box||map)return;\n  Promise.all([loadLeaflet(),fetch(LF+'leaflet.css').then(r=>r.text())]).then(([L,css])=>{\n    if(map)return;\n    const st=window.document.createElement('style');st.textContent=css;box.parentNode.insertBefore(st,box);\n    map=L.map(box,{scrollWheelZoom:false,attributionControl:true}).setView([41.31,69.29],12);\n    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\">OpenStreetMap</a>'}).addTo(map);\n    marks=SR.map((s,i)=>L.marker([s.lat,s.lng],{icon:L.divIcon({className:'kl-mk',html:pinHtml(i),iconSize:[0,0]}),title:s.n}).addTo(map).on('click',()=>{cur=i;render();flyTo(i)}));\n    map.fitBounds(SR.map(s=>[s.lat,s.lng]),{padding:[70,70]});\n    paintPins();\n  }).catch(()=>{box.dataset.msg='Xarita yuklanmadi. Manzilni Yandex Xaritalar yoki Google Maps orqali oçing.';box.classList.add('fail')});\n}\nfunction paintPins(){marks.forEach((m,i)=>{const el=m.getElement();if(el)el.querySelector('.pin').classList.toggle('on',i===cur);m.setZIndexOffset(i===cur?1000:0)})}\nfunction flyTo(i){if(map)map.flyTo([SR[i].lat,SR[i].lng],Math.max(map.getZoom(),14),{duration:.6})}\nif('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){io.disconnect();initMap()}},{rootMargin:'400px'});io.observe($('map'))}else initMap();\n\n// nearest showroom: browser location + straight-line distance to each showroom\nfunction km(a,b){const r=x=>x*Math.PI/180,dl=r(b[0]-a[0]),dn=r(b[1]-a[1]);const h=Math.sin(dl/2)**2+Math.cos(r(a[0]))*Math.cos(r(b[0]))*Math.sin(dn/2)**2;return 12742*Math.asin(Math.sqrt(h))}\nfunction setNear(msg,busy){nearMsg=msg;const n=$('near');if(!n)return;n.lastChild.textContent=msg;n.classList.toggle('busy',!!busy)}\nfunction findNear(){\n  if(!navigator.geolocation){setNear('Brauzeringiz joylaşuvni aniqlay olmaydi');return}\n  setNear('Joylaşuvingiz aniqlanmoqda…',true);\n  navigator.geolocation.getCurrentPosition(p=>{\n    const u=[p.coords.latitude,p.coords.longitude],d=SR.map(s=>km(u,[s.lat,s.lng]));\n    const i=d.indexOf(Math.min(...d)),dist=d[i]<10?d[i].toFixed(1).replace('.',','):Math.round(d[i]);\n    cur=i;nearMsg='Sizga eng yaqini: '+SR[i].n+' · '+dist+' km';render();\n    initMap();loadLeaflet().then(L=>{if(!map)return;\n      if(meMark)meMark.setLatLng(u);else meMark=L.marker(u,{icon:L.divIcon({className:'',html:'<div class=\"me\"></div>',iconSize:[0,0]}),title:'Siz şu yerdasiz'}).addTo(map);\n      map.fitBounds([u,[SR[i].lat,SR[i].lng]],{padding:[80,80],maxZoom:15});\n    });\n  },err=>{setNear(err.code===1?'Brauzerda joylaşuvga ruxsat bering':'Joylaşuvni aniqlab bölmadi')},{enableHighAccuracy:true,timeout:12000,maximumAge:300000});\n}\ndocument.addEventListener('click',e=>{\n  const b=e.target.closest('.sr');if(b){cur=+b.dataset.i;render();flyTo(cur);if(innerWidth<1080)$('detail').scrollIntoView({behavior:'smooth'})}\n  if(e.target.closest('#near')){e.preventDefault();findNear()}\n  if(e.target.closest('#tour'))alert('Bu yerda şourum böylab virtual 3D-tur oçiladi.');\n});\n\n// booking\n$('pShop').innerHTML=SR.map((s,i)=>`<label><input type=\"radio\" name=\"shop\" value=\"${s.n}\"${i===cur?' checked':''}><span>${s.n}</span></label>`).join('');\n$('pShop').addEventListener('change',e=>{cur=SR.findIndex(s=>s.n===e.target.value);render()});\n(function days(){const t=tashkentNow();let h='',first=true;for(let i=0;i<10;i++){const d=new Date(t);d.setDate(t.getDate()+i);const off=d.getDay()===0;h+=`<label class=\"day${off?' off':''}\"><input type=\"radio\" name=\"day\" value=\"${d.getDate()} ${MN[d.getMonth()]}\"${!off&&first?' checked':''}><span>${i===0?'Bugun':i===1?'Ertaga':DS[d.getDay()]}</span><b>${d.getDate()}</b><span>${MN[d.getMonth()]}</span></label>`;if(!off&&first)first=false}$('days').innerHTML=h})();\nfunction times(){\n  const t=tashkentNow(),sel=document.querySelector('[name=day]:checked');const isToday=sel&&sel.closest('.day')===$('days').querySelector('.day');\n  const slots=['10:00','11:00','12:00','14:00','15:00','16:00','17:00'];\n  let firstFree=true;\n  $('times').innerHTML=slots.map(s=>{const past=isToday&&+s.slice(0,2)<=t.getHours();const busy=s==='12:00';const dis=past||busy;const chk=!dis&&firstFree;if(chk)firstFree=false;return `<label><input type=\"radio\" name=\"tm\" value=\"${s}\"${dis?' disabled':''}${chk?' checked':''}><span>${s}</span></label>`}).join('');\n}\n$('days').addEventListener('change',times);times();\n$('ph').addEventListener('input',e=>{let d=e.target.value.replace(/\\D/g,'');if(d.startsWith('998'))d=d.slice(3);d=d.slice(0,9);const p=[d.slice(0,2),d.slice(2,5),d.slice(5,7),d.slice(7,9)].filter(Boolean);e.target.value=d?'+998 '+p.join(' '):'';$('fP').classList.remove('err')});\n$('nm').addEventListener('input',()=>$('fN').classList.remove('err'));\n$('form').onsubmit=e=>{\n  e.preventDefault();\n  const badN=$('nm').value.trim().length<2,badP=$('ph').value.replace(/\\D/g,'').length!==12;\n  $('fN').classList.toggle('err',badN);$('fP').classList.toggle('err',badP);\n  const tm=document.querySelector('[name=tm]:checked');\n  if(badN||badP||!tm){(badN?$('nm'):$('ph')).focus();return}\n  const v=n=>document.querySelector(`[name=${n}]:checked`).value;\n  $('sum').innerHTML=`<span>Şourum: <b>${v('shop')}</b></span><span>Sana: <b>${v('day')}, ${tm.value}</b></span><span>Maqsad: <b>${v('goal')}</b></span>`;\n  $('formBody').style.display='none';$('done').style.display='block';\n};\nrender();\n"]},"en":{"page":["\n\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\n\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\n\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n\n\n\nconst W=(id,w,h)=>`https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_auto/s.jpg`;\n// addresses and phones from kashlux.uz; coordinates from OpenStreetMap (Minor: the point on the old kashlux.uz map)\nconst SR=[\n  {n:'Minor',a:'16 Sharaf Rashidov Avenue, Yunusabad District, Tashkent',q:'Tashkent, 16 Sharaf Rashidov Avenue',t:['+998 95 146 16 16','+998 78 147 16 16'],lat:41.31788,lng:69.27145,img:['a8ce0d_536d40efc039475cade0100c76988b72~mv2.jpg','a8ce0d_433252a6d592416e9c50f38a13b26f59~mv2.jpg'],show:['i-tap','i-bath','i-toilet','i-shower','i-boiler']},\n  {n:'Oloy',a:'58 Oloy Covered Market, Tashkent',q:'Tashkent, Oloy Market',t:['+998 78 147 47 47','+998 71 233 86 52'],lat:41.31878,lng:69.28320,img:['a8ce0d_07678835b2aa441db88f5c78837c5ace~mv2.jpg','a8ce0d_657382d3d8ac459c88a6cb56ea4291ca~mv2.jpg'],show:['i-tap','i-shower','i-pipe','i-pump']},\n  {n:'Fidokor',a:'38 Fidokor Street, Tashkent 100015',q:'Tashkent, 38 Fidokor Street',t:['+998 71 256 94 94','+998 97 004 94 94'],lat:41.29514,lng:69.27247,img:['a8ce0d_7ba72eb4dcc1496da6d36c9843635105~mv2.jpg','a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg'],show:['i-boiler','i-radiator','i-heater','i-pump','i-pipe']},\n  {n:'Parkent',a:'215 Parkent Street, Tashkent',q:'Tashkent, 215 Parkent Street',t:['+998 95 170 74 74'],lat:41.31281,lng:69.33233,img:['a8ce0d_5b9f5024ffe54738b135844f0e1b39dd~mv2.jpg','a8ce0d_d9648fd4ba834381850f27dc535b57c3~mv2.jpg'],show:['i-bath','i-toilet','i-tap','i-design']}\n];\nconst SHOWN={'i-tap':'Faucets','i-bath':'Bathtubs','i-toilet':'Toilets','i-shower':'Showers','i-boiler':'Boilers','i-pipe':'Pipes','i-pump':'Pumps','i-radiator':'Radiators','i-heater':'Water heaters','i-design':'Design studio'};\nconst DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];\nconst DS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],MN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];\nconst $=id=>document.getElementById(id);\nlet cur=0;\n\n// Tashkent time (UTC+5); showrooms open Mon–Sat 09:00–18:00 (kashlux.uz/contact, top.uz)\nfunction tashkentNow(){const d=new Date();return new Date(d.getTime()+d.getTimezoneOffset()*60000+5*3600000)}\nfunction openState(){\n  const t=tashkentNow(),wd=t.getDay(),h=t.getHours()+t.getMinutes()/60;\n  const open=wd>=1&&wd<=6&&h>=9&&h<18;\n  if(open)return{open,txt:'Open now',sub:'until 18:00 Tashkent time'};\n  let nd=new Date(t);do{nd.setDate(nd.getDate()+1)}while(nd.getDay()===0);\n  const today=wd>=1&&wd<=6&&h<9;\n  return{open,txt:'Closed now',sub:'Opens '+(today?'today':nd.getDay()===((wd+1)%7)?'tomorrow':'on '+(/^en/i.test(document.documentElement.lang)?DAYS[nd.getDay()]:DAYS[nd.getDay()].toLowerCase()))+' at 09:00'};\n}\nconst st=openState();\n$('status').classList.toggle('closed',!st.open);$('stTxt').textContent=st.txt;$('stSub').textContent=st.sub;\n\nfunction render(){\n  $('list').innerHTML=SR.map((s,i)=>`<button class=\"sr${i===cur?' on':''}\" data-i=\"${i}\"><span class=\"num\">0${i+1}</span><div><h3>${s.n}</h3><p>${s.a.split(',').slice(0,2).join(',')}</p><span class=\"open${st.open?'':' c'}\">● ${st.open?'Open until 18:00':'Closed · '+st.sub.toLowerCase()}</span></div><svg class=\"arr\"><use href=\"#i-arrow\"/></svg></button>`).join('')+\n    `<a class=\"near\" href=\"#\" id=\"near\"><svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v3M12 19v3M2 12h3M19 12h3\"/><circle cx=\"12\" cy=\"12\" r=\"8\"/></svg>${nearMsg||'Find the nearest showroom'}</a>`;\n  paintPins();\n  const s=SR[cur];\n  $('dNum').textContent='Showroom 0'+(cur+1);$('dName').textContent='Kashlux '+s.n;$('dAddr').textContent=s.a;\n  [$('g1'),$('g2')].forEach((g,k)=>{g.style.opacity=0;g.onload=()=>g.style.opacity=1;g.src=W(s.img[k],k?600:1200,k?340:680);if(g.complete)g.style.opacity=1;g.alt='Showroom '+s.n});\n  $('dTel').innerHTML=s.t.map(t=>`<a href=\"tel:${t.replace(/\\s/g,'')}\">${t}</a>`).join('');\n  $('dCall').href='tel:'+s.t[0].replace(/\\s/g,'');\n  const ll=s.lat+','+s.lng;\n  $('dRoute').href='https://yandex.uz/maps/?rtext=~'+ll+'&rtt=auto';\n  $('mY').href='https://yandex.uz/maps/?pt='+s.lng+','+s.lat+'&z=17&l=map';\n  $('mG').href='https://www.google.com/maps/search/?api=1&query='+ll;\n  const wd=tashkentNow().getDay();\n  $('dHours').innerHTML=[1,2,3,4,5,6,0].map(d=>`<li class=\"${d===wd?'today':''} ${d===0?'off':''}\"><span>${DAYS[d]}</span><span>${d===0?'closed':'09:00–18:00'}</span></li>`).join('');\n  $('dShow').innerHTML=s.show.map(i=>`<span><svg><use href=\"#${i}\"/></svg>${SHOWN[i]}</span>`).join('');\n  document.querySelectorAll('[name=shop]').forEach((r,i)=>r.checked=i===cur);\n}\n// real map: Leaflet + OpenStreetMap tiles (tinted dark in CSS), loaded when the map comes near the screen\nconst LF='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/';\nlet map=null,marks=[],meMark=null,nearMsg='';\nconst pinHtml=i=>`<span class=\"pin${i===cur?' on':''}\" data-i=\"${i}\"><b>${SR[i].n}</b><i><span>${i+1}</span></i></span>`;\nfunction loadLeaflet(){\n  if(window.L&&window.L.map)return Promise.resolve(window.L);\n  // Wix pages have their own module loader (define): run Leaflet without it so it sets window.L\n  if(!window.klLeaflet)window.klLeaflet=fetch(LF+'leaflet.js').then(r=>r.text()).then(code=>{new Function('define','exports','module',code).call(window);if(!window.L||!window.L.map)throw new Error('leaflet');return window.L});\n  return window.klLeaflet;\n}\nfunction initMap(){\n  const box=$('lmap');if(!box||map)return;\n  Promise.all([loadLeaflet(),fetch(LF+'leaflet.css').then(r=>r.text())]).then(([L,css])=>{\n    if(map)return;\n    const st=window.document.createElement('style');st.textContent=css;box.parentNode.insertBefore(st,box);\n    map=L.map(box,{scrollWheelZoom:false,attributionControl:true}).setView([41.31,69.29],12);\n    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\">OpenStreetMap</a>'}).addTo(map);\n    marks=SR.map((s,i)=>L.marker([s.lat,s.lng],{icon:L.divIcon({className:'kl-mk',html:pinHtml(i),iconSize:[0,0]}),title:s.n}).addTo(map).on('click',()=>{cur=i;render();flyTo(i)}));\n    map.fitBounds(SR.map(s=>[s.lat,s.lng]),{padding:[70,70]});\n    paintPins();\n  }).catch(()=>{box.dataset.msg='The map did not load. Open the address in Yandex Maps or Google Maps.';box.classList.add('fail')});\n}\nfunction paintPins(){marks.forEach((m,i)=>{const el=m.getElement();if(el)el.querySelector('.pin').classList.toggle('on',i===cur);m.setZIndexOffset(i===cur?1000:0)})}\nfunction flyTo(i){if(map)map.flyTo([SR[i].lat,SR[i].lng],Math.max(map.getZoom(),14),{duration:.6})}\nif('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){io.disconnect();initMap()}},{rootMargin:'400px'});io.observe($('map'))}else initMap();\n\n// nearest showroom: browser location + straight-line distance to each showroom\nfunction km(a,b){const r=x=>x*Math.PI/180,dl=r(b[0]-a[0]),dn=r(b[1]-a[1]);const h=Math.sin(dl/2)**2+Math.cos(r(a[0]))*Math.cos(r(b[0]))*Math.sin(dn/2)**2;return 12742*Math.asin(Math.sqrt(h))}\nfunction setNear(msg,busy){nearMsg=msg;const n=$('near');if(!n)return;n.lastChild.textContent=msg;n.classList.toggle('busy',!!busy)}\nfunction findNear(){\n  if(!navigator.geolocation){setNear('Your browser does not support location detection');return}\n  setNear('Detecting your location…',true);\n  navigator.geolocation.getCurrentPosition(p=>{\n    const u=[p.coords.latitude,p.coords.longitude],d=SR.map(s=>km(u,[s.lat,s.lng]));\n    const i=d.indexOf(Math.min(...d)),dist=d[i]<10?d[i].toFixed(1).replace('.',','):Math.round(d[i]);\n    cur=i;nearMsg='Nearest to you: '+SR[i].n+' · '+dist+' km';render();\n    initMap();loadLeaflet().then(L=>{if(!map)return;\n      if(meMark)meMark.setLatLng(u);else meMark=L.marker(u,{icon:L.divIcon({className:'',html:'<div class=\"me\"></div>',iconSize:[0,0]}),title:'You are here'}).addTo(map);\n      map.fitBounds([u,[SR[i].lat,SR[i].lng]],{padding:[80,80],maxZoom:15});\n    });\n  },err=>{setNear(err.code===1?'Allow location access in your browser':'Could not detect your location')},{enableHighAccuracy:true,timeout:12000,maximumAge:300000});\n}\ndocument.addEventListener('click',e=>{\n  const b=e.target.closest('.sr');if(b){cur=+b.dataset.i;render();flyTo(cur);if(innerWidth<1080)$('detail').scrollIntoView({behavior:'smooth'})}\n  if(e.target.closest('#near')){e.preventDefault();findNear()}\n  if(e.target.closest('#tour'))alert('The virtual 3D tour of the showroom will open here.');\n});\n\n// booking\n$('pShop').innerHTML=SR.map((s,i)=>`<label><input type=\"radio\" name=\"shop\" value=\"${s.n}\"${i===cur?' checked':''}><span>${s.n}</span></label>`).join('');\n$('pShop').addEventListener('change',e=>{cur=SR.findIndex(s=>s.n===e.target.value);render()});\n(function days(){const t=tashkentNow();let h='',first=true;for(let i=0;i<10;i++){const d=new Date(t);d.setDate(t.getDate()+i);const off=d.getDay()===0;h+=`<label class=\"day${off?' off':''}\"><input type=\"radio\" name=\"day\" value=\"${d.getDate()} ${MN[d.getMonth()]}\"${!off&&first?' checked':''}><span>${i===0?'Today':i===1?'Tomorrow':DS[d.getDay()]}</span><b>${d.getDate()}</b><span>${MN[d.getMonth()]}</span></label>`;if(!off&&first)first=false}$('days').innerHTML=h})();\nfunction times(){\n  const t=tashkentNow(),sel=document.querySelector('[name=day]:checked');const isToday=sel&&sel.closest('.day')===$('days').querySelector('.day');\n  const slots=['10:00','11:00','12:00','14:00','15:00','16:00','17:00'];\n  let firstFree=true;\n  $('times').innerHTML=slots.map(s=>{const past=isToday&&+s.slice(0,2)<=t.getHours();const busy=s==='12:00';const dis=past||busy;const chk=!dis&&firstFree;if(chk)firstFree=false;return `<label><input type=\"radio\" name=\"tm\" value=\"${s}\"${dis?' disabled':''}${chk?' checked':''}><span>${s}</span></label>`}).join('');\n}\n$('days').addEventListener('change',times);times();\n$('ph').addEventListener('input',e=>{let d=e.target.value.replace(/\\D/g,'');if(d.startsWith('998'))d=d.slice(3);d=d.slice(0,9);const p=[d.slice(0,2),d.slice(2,5),d.slice(5,7),d.slice(7,9)].filter(Boolean);e.target.value=d?'+998 '+p.join(' '):'';$('fP').classList.remove('err')});\n$('nm').addEventListener('input',()=>$('fN').classList.remove('err'));\n$('form').onsubmit=e=>{\n  e.preventDefault();\n  const badN=$('nm').value.trim().length<2,badP=$('ph').value.replace(/\\D/g,'').length!==12;\n  $('fN').classList.toggle('err',badN);$('fP').classList.toggle('err',badP);\n  const tm=document.querySelector('[name=tm]:checked');\n  if(badN||badP||!tm){(badN?$('nm'):$('ph')).focus();return}\n  const v=n=>document.querySelector(`[name=${n}]:checked`).value;\n  $('sum').innerHTML=`<span>Showroom: <b>${v('shop')}</b></span><span>Date: <b>${v('day')}, ${tm.value}</b></span><span>Purpose: <b>${v('goal')}</b></span>`;\n  $('formBody').style.display='none';$('done').style.display='block';\n};\nrender();\n"]}}};

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
  sc.src = BASE_URL + file + '?v=4e4016f4'; // a new build number per release, so browsers don't reuse an old copy
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
const PREFIX = { ru: '', uz: '/uz', en: '/en' };
const LANG_RE = /^\/(uz|en)(?=\/|$|[?#])/;
function localize(root, lang) {
  const pre = PREFIX[lang];
  if (!pre) return;
  root.querySelectorAll('a[href^="/"]').forEach((a) => {
    const h = a.getAttribute('href');
    if (h.startsWith('//') || LANG_RE.test(h)) return;
    a.setAttribute('href', h === '/' ? pre : pre + h);
  });
}
const pageLang = () => {
  const l = (document.documentElement.lang || '').toLowerCase();
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
      a.href = (pre ? (path === '/' ? pre : pre + path) : path) + tail;
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
    const searchUrl = (q) => (PREFIX[lang] || '') + '/search?q=' + encodeURIComponent(q) + (rcParam ? '&rc=' + encodeURIComponent(rcParam) : '');
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
