(function () {
// <kl-section> — Kashlux redesign (kl-page-blog.js) for the Wix editor. GENERATED FILE: don't edit it in Wix.
// Source: design/build/wix/kl-section.template.js + design/build/wix_sections.py (run after build.py).
//
// Editor: Add → Embed Code → Custom Element
//   Source: Velo file → public/custom-elements/kl-page-blog.js
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
REG['page'] = {"css":":host{--navy:#211E36;--navy-2:#2B2745;--orange:#E08F45;--orange-deep:#C9752C;--white:#FFFFFF;--grey:#DFDFDE;--grey-2:#ECECEB;--ink:#211E36;--muted:#6E6B7B;--line:rgba(33,30,54,.12);--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--gutter:clamp(16px,4vw,56px);--max:1320px;--r:8px;}*{box-sizing:border-box;margin:0;padding:0}:host{scroll-behavior:smooth}.kl-body{background:var(--grey-2);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}img{display:block;max-width:100%}a{color:inherit;text-decoration:none}button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}svg{display:block;fill:var(--navy)}.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:var(--orange)}.eyebrow::before{content:\"\";width:22px;height:2px;background:currentColor}h1,h2,h3,h4{font-family:var(--head);font-weight:800;letter-spacing:-.01em;line-height:1.08}.h-section{font-size:clamp(30px,4vw,54px)}.h-section em{font-style:normal;color:var(--orange)}.lead{font-size:clamp(16px,1.2vw,18px);color:var(--muted);max-width:52ch}.btn{display:inline-flex;align-items:center;gap:12px;padding:16px 24px;font-size:14px;font-weight:600;border-radius:var(--r);transition:.25s;white-space:nowrap}.btn-orange{background:var(--orange);color:var(--navy)}.btn-orange:hover{background:var(--orange-deep)}.btn-line{border:1.5px solid currentColor}.btn-line:hover{background:var(--white);color:var(--navy);border-color:var(--white)}.arrow{width:18px;height:18px;transition:transform .25s}.btn:hover .arrow{transform:translate(3px,-3px)}.pat-fill{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='80' viewBox='0 0 1 2'%3E%3Cg%3E%3Cpath d='M0 .5L.5 0H1L.5 .5V1H0Z' fill='%23211E36'/%3E%3Cpath d='M1 .5L1.5 0H2L1.5 .5V1H1Z' fill='%23211E36' transform='translate(-1 0)'/%3E%3Cpath d='M0 1.5L.5 1H1L.5 1.5V2H0Z' fill='%23E08F45'/%3E%3C/g%3E%3C/svg%3E\");background-size:40px 80px}.pat-line{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-width='.018'/%3E%3C/svg%3E\");background-size:120px 120px}header{position:fixed;inset:0 0 auto;z-index:50;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);transition:box-shadow .3s}header.solid{box-shadow:0 1px 0 var(--line)}.nav{display:flex;align-items:center;justify-content:space-between;height:80px;gap:24px}.logo svg{height:20px;width:auto}.menu{display:flex;gap:30px;font-size:14px;font-weight:500}.menu a{position:relative;padding:6px 0}.menu a::after{content:\"\";position:absolute;left:0;bottom:0;height:2px;width:0;background:var(--orange);transition:width .25s}.menu a:hover::after{width:100%}.nav-right{display:flex;align-items:center;gap:16px;font-size:13px}.lang{display:flex;background:var(--grey-2);border-radius:var(--r);padding:3px}.lang button{padding:5px 10px;border-radius:6px;font-size:12px;font-weight:600;color:var(--muted)}.lang button.on{background:var(--navy);color:var(--white)}.phone{font-weight:600;white-space:nowrap}.burger{display:none;width:44px;height:44px;border-radius:var(--r);background:var(--navy);color:#fff;place-items:center}.burger i{display:block;width:16px;height:2px;background:currentColor;box-shadow:0 5px 0 currentColor,0 -5px 0 currentColor}.hero{padding:80px 0 0;background:var(--white)}.hero-grid{display:grid;grid-template-columns:1.05fr 1fr;min-height:calc(100svh - 80px)}.hero-panel{position:relative;background:var(--navy);color:var(--white);padding:clamp(40px,6vw,88px) clamp(24px,5vw,72px);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}.hero-panel .pat-line{position:absolute;right:-40px;top:-20px;width:360px;height:260px;opacity:.9;-webkit-mask-image:linear-gradient(225deg,#000 30%,transparent 80%);mask-image:linear-gradient(225deg,#000 30%,transparent 80%)}.hero h1{font-size:clamp(32px,3.9vw,58px);position:relative;margin-top:28px}.hero h1 span{color:var(--orange)}.hero .sub{font-family:var(--body);font-weight:700;font-size:clamp(18px,1.6vw,22px);margin-top:22px;opacity:.9}.hero p.desc{max-width:46ch;opacity:.7;margin-top:14px}.hero-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px;padding-top:26px;border-top:1px solid rgba(255,255,255,.15)}.stats b{display:block;font-family:var(--head);font-weight:800;font-size:clamp(28px,3vw,44px);line-height:1;color:var(--orange)}.stats span{font-size:13px;opacity:.7;display:block;margin-top:8px}.hero-media{position:relative;overflow:hidden;background:var(--grey)}.hero-media img{width:100%;height:100%;object-fit:cover}.hero-media .chip{position:absolute;left:24px;bottom:24px;background:var(--white);border-radius:var(--r);padding:14px 18px;display:flex;gap:14px;align-items:center;font-size:13px;box-shadow:0 10px 30px rgba(33,30,54,.18)}.hero-media .chip b{font-family:var(--head);font-size:15px;display:block}.hero-media .chip svg{width:38px;height:38px}.brands{background:var(--orange);color:var(--navy);overflow:hidden;padding:18px 0}.track{display:flex;gap:56px;width:max-content;animation:marquee 34s linear infinite;align-items:center}.track span{font-family:var(--head);font-weight:800;font-size:22px;white-space:nowrap;text-transform:uppercase}.track svg{width:18px;height:18px}@keyframes marquee{to{transform:translateX(-50%)}}section{padding:clamp(72px,10vw,130px) 0}.sec-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:clamp(36px,5vw,64px);flex-wrap:wrap}.sec-head .eyebrow{margin-bottom:18px}.catalog{background:var(--grey-2)}.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:250px;gap:14px}.cat{position:relative;background:var(--white);border-radius:var(--r);overflow:hidden;padding:26px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .3s,box-shadow .3s}.cat:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(33,30,54,.12)}.cat .ico{width:46px;height:46px;color:var(--orange)}.cat h3{font-size:20px;position:relative;z-index:2}.cat p{font-size:13px;color:var(--muted);margin-top:6px;position:relative;z-index:2;max-width:28ch}.cat .go{position:absolute;top:22px;right:22px;width:38px;height:38px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:.25s;z-index:3}.cat:hover .go{background:var(--orange);color:#fff}.cat .go svg{width:16px;height:16px}.cat img.prod{position:absolute;right:-4%;bottom:-4%;width:48%;max-height:80%;object-fit:contain;transition:transform .5s}.cat:hover img.prod{transform:scale(1.05)}.cat.big{grid-column:span 2;grid-row:span 2;background:var(--navy);color:var(--white)}.cat.big h3{font-size:clamp(28px,3vw,40px)}.cat.big p{color:rgba(255,255,255,.65);font-size:15px;max-width:36ch}.cat.big .go{background:rgba(255,255,255,.1)}.cat.big .bigimg{position:absolute;inset:0;background:url(https://static.wixstatic.com/media/a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg/v1/fill/w_1200,h_1100,al_c,q_80,enc_auto/c.jpg) center/cover;opacity:.35;transition:opacity .4s,transform .8s}.cat.big:hover .bigimg{opacity:.5;transform:scale(1.04)}.cat.big::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(33,30,54,.2),rgba(33,30,54,.9))}.cat.big>*{position:relative;z-index:2}.cat.big .bigimg{z-index:0}.cat.big .tagrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.cat.big .tagrow span{font-size:12px;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.12)}.cat.wide{grid-column:span 2}.finish{background:var(--white)}.finish-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:center}.finish-stage{aspect-ratio:1/1;background:var(--grey-2);border-radius:var(--r);position:relative;display:grid;place-items:center;overflow:hidden}.finish-stage .pat-line{position:absolute;inset:auto -60px -60px auto;width:300px;height:300px;opacity:.5}.finish-stage svg.tap{width:68%;height:auto;position:relative}.finish-stage .tag{position:absolute;left:24px;top:22px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.finish-stage .tag b{display:block;font-family:var(--head);font-size:20px;letter-spacing:0;text-transform:none;color:var(--navy);margin-top:4px}.swatches{display:flex;gap:10px;margin:30px 0 36px;flex-wrap:wrap}.sw{display:flex;align-items:center;gap:10px;padding:8px 16px 8px 8px;border:1.5px solid var(--line);border-radius:var(--r);font-size:14px;font-weight:600;transition:.2s}.sw i{width:28px;height:28px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}.sw.on{border-color:var(--orange);background:#FDF4EC}.specs{display:grid;grid-template-columns:1fr 1fr;gap:12px}.specs div{padding:16px 18px;background:var(--grey-2);border-radius:var(--r)}.specs dt{font-size:12px;color:var(--muted)}.specs dd{font-family:var(--head);font-weight:700;font-size:17px;margin-top:2px}.projects{background:var(--navy);color:var(--white)}.projects .lead{color:rgba(255,255,255,.65)}.proj-ctrl{display:flex;gap:10px}.proj-ctrl button{width:52px;height:52px;border-radius:var(--r);background:rgba(255,255,255,.08);display:grid;place-items:center;transition:.25s;font-size:18px}.proj-ctrl button:hover{background:var(--orange)}.rail{display:grid;grid-auto-flow:column;grid-auto-columns:min(78vw,440px);gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 var(--gutter) 6px;scrollbar-width:none;margin-left:max(0px,calc((100vw - var(--max))/2))}.rail::-webkit-scrollbar{display:none}.proj{scroll-snap-align:start;background:var(--navy-2);border-radius:var(--r);overflow:hidden}.proj figure{aspect-ratio:4/4.4;overflow:hidden;position:relative}.proj img{width:100%;height:100%;object-fit:cover;transition:transform .8s}.proj:hover img{transform:scale(1.05)}.proj .star{position:absolute;top:16px;left:16px;font-size:12px;font-weight:600;background:var(--orange);padding:6px 12px;border-radius:6px}.proj .meta{padding:20px 22px 24px;display:flex;justify-content:space-between;align-items:end;gap:12px}.proj h3{font-size:22px}.proj p{font-size:14px;color:rgba(255,255,255,.55);margin-top:4px}.proj .meta svg{width:22px;height:22px;color:var(--orange);flex:none}.services{background:var(--grey-2)}.svc{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.svc article{background:var(--white);border-radius:var(--r);padding:30px 26px 32px;display:flex;flex-direction:column;transition:.3s}.svc article:hover{background:var(--navy);color:var(--white)}.svc article:hover p{color:rgba(255,255,255,.65)}.svc .ico{width:44px;height:44px;color:var(--orange)}.svc h3{font-size:20px;margin:34px 0 12px}.svc p{font-size:14px;color:var(--muted);flex:1}.svc a{display:inline-flex;gap:8px;align-items:center;margin-top:22px;font-size:14px;font-weight:600;color:var(--orange)}.svc .sub{font-family:var(--head);font-size:10px;letter-spacing:.3em;color:var(--orange);margin-top:6px;font-weight:700}.story{background:var(--orange);color:var(--navy);position:relative;overflow:hidden}.story .pat-line{position:absolute;right:0;top:0;width:52%;height:62%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 2 2'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23211E36' stroke-width='.012'/%3E%3C/svg%3E\");background-size:160px 160px;-webkit-mask-image:linear-gradient(200deg,#000 20%,transparent 75%);mask-image:linear-gradient(200deg,#000 20%,transparent 75%)}.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:end;position:relative}.story h2{font-size:clamp(40px,6vw,88px);line-height:1}.story blockquote{font-family:var(--body);font-weight:700;font-size:clamp(20px,2vw,26px);line-height:1.3;margin:28px 0 18px;max-width:30ch}.story p{max-width:50ch;color:rgba(33,30,54,.8)}.timeline{display:grid;gap:10px}.timeline div{display:grid;grid-template-columns:120px 1fr;gap:18px;align-items:center;background:var(--white);border-radius:var(--r);padding:18px 22px}.timeline b{font-family:var(--head);font-size:20px;color:var(--orange)}.timeline span{font-size:15px}.timeline div:last-child{background:var(--navy);color:var(--white)}.showrooms{background:var(--white)}.sr-grid{display:grid;grid-template-columns:360px 1fr;gap:20px}.sr-list{display:grid;gap:10px;align-content:start}.sr-list button{text-align:left;padding:20px 22px;border-radius:var(--r);background:var(--grey-2);transition:.25s;display:flex;justify-content:space-between;align-items:center;gap:12px}.sr-list button:hover{background:var(--grey)}.sr-list button.on{background:var(--navy);color:var(--white)}.sr-list h4{font-size:18px}.sr-list p{font-size:13px;margin-top:2px;opacity:.65}.sr-list svg{width:20px;height:20px;color:var(--orange);flex:none}.sr-card{position:relative;min-height:500px;border-radius:var(--r);overflow:hidden;background:var(--navy)}.sr-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .4s}.sr-info{position:absolute;left:20px;right:20px;bottom:20px;z-index:2;background:var(--white);border-radius:var(--r);padding:24px;display:grid;grid-template-columns:1fr 1fr auto;gap:24px;align-items:center}.sr-info dt{font-size:12px;color:var(--muted);margin-bottom:4px}.sr-info dd{font-size:15px;font-weight:500;line-height:1.5}.consult{background:var(--navy);color:var(--white);position:relative;overflow:hidden}.consult .pat-fill{position:absolute;left:0;bottom:0;width:100%;height:80px;opacity:1}.consult-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);position:relative;padding-bottom:60px}.consult .lead{color:rgba(255,255,255,.65)}form{display:grid;grid-template-columns:1fr 1fr;gap:16px;background:var(--white);color:var(--navy);border-radius:var(--r);padding:clamp(22px,3vw,36px)}.field{display:flex;flex-direction:column;gap:6px}.field.full{grid-column:1/-1}.field>label{font-size:13px;font-weight:600}.field input,.field textarea{font:inherit;font-size:16px;background:var(--grey-2);border:1.5px solid transparent;padding:13px 14px;color:var(--navy);outline:none;border-radius:var(--r)}.field textarea{resize:none;height:96px}.field input:focus,.field textarea:focus{border-color:var(--orange);background:#fff}.chips{display:flex;gap:8px;flex-wrap:wrap}.chips label{font-size:14px;cursor:pointer}.chips input{display:none}.chips span{display:inline-block;padding:9px 14px;border:1.5px solid var(--line);border-radius:var(--r);transition:.2s}.chips input:checked+span{background:var(--orange);color:#fff;border-color:var(--orange)}.form-note{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;font-size:12px;color:var(--muted)}.sent{grid-column:1/-1;display:none;padding:14px 16px;background:#FDF4EC;color:var(--orange-deep);font-weight:600;border-radius:var(--r)}.contact-mini{margin-top:40px;display:grid;gap:10px}.contact-mini a{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.06);border-radius:var(--r);padding:16px 20px;font-family:var(--head);font-weight:700;font-size:18px;transition:.25s}.contact-mini a:hover{background:var(--orange)}.contact-mini small{font-family:var(--body);font-size:12px;opacity:.6;font-weight:500}.system{background:var(--grey)}.sys-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.sys-card{background:var(--white);border-radius:var(--r);padding:26px}.sys-card h4{font-family:var(--body);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:18px;font-weight:600}.pal{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.pal div{aspect-ratio:1/1.2;border-radius:6px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;font-size:10px;font-weight:600;line-height:1.3;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06)}.logos{display:grid;grid-template-columns:1fr 1fr;gap:8px}.logos div{border-radius:6px;display:grid;place-items:center;height:84px;padding:14px}.logos svg{max-height:100%;width:auto;max-width:100%}.sub-logo{display:flex;flex-direction:column;align-items:center;gap:4px}.sub-logo svg{height:16px}.sub-logo span{font-family:var(--head);font-size:8px;letter-spacing:.42em;font-weight:700;color:var(--orange)}footer{background:var(--navy);color:var(--white);padding:80px 0 30px}.foot-top{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:56px;flex-wrap:wrap}.foot-top .bigword svg{width:min(680px,80vw);height:auto}.foot-top .k svg{width:90px;height:auto}.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:36px;padding-bottom:44px;border-bottom:1px solid rgba(255,255,255,.12)}.foot-grid h5{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);margin-bottom:16px;font-weight:600}.foot-grid a{display:block;font-size:15px;margin-bottom:9px;opacity:.8}.foot-grid a:hover{opacity:1;color:var(--orange)}.foot-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:13px;opacity:.5;gap:20px;flex-wrap:wrap}.ribbon{position:fixed;left:16px;bottom:16px;z-index:60;background:var(--orange);color:var(--navy);font-size:12px;font-weight:600;padding:10px 16px;border-radius:var(--r);display:flex;gap:10px;align-items:center;box-shadow:0 10px 30px rgba(33,30,54,.25)}.ribbon a{font-weight:800}.rv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}.rv.in{opacity:1;transform:none}.drawer{position:fixed;inset:0;z-index:70;background:var(--navy);color:var(--white);padding:18px var(--gutter);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .45s cubic-bezier(.7,0,.2,1)}.drawer.open{transform:none}.drawer .top{display:flex;justify-content:space-between;align-items:center;height:44px}.drawer .top svg{height:18px;width:auto}.drawer nav{display:flex;flex-direction:column;margin-top:48px}.drawer nav a{font-family:var(--head);font-weight:800;font-size:30px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.1)}.drawer .burger{display:grid;background:var(--orange)}@media (max-width:1080px){.menu,.phone{display:none}.burger{display:grid}.hero-grid{grid-template-columns:1fr}.hero-media{min-height:340px}.bento{grid-template-columns:repeat(2,1fr)}.svc{grid-template-columns:1fr 1fr}.sr-grid{grid-template-columns:1fr}.sr-list{grid-template-columns:repeat(4,1fr)}.sr-list p{display:none}.sys-grid{grid-template-columns:1fr 1fr}.foot-grid{grid-template-columns:1fr 1fr}}@media (max-width:760px){.nav{height:68px}.hero{padding-top:68px}.lang,.nav-cta{display:none!important}.stats span{font-size:11px}.finish-grid,.story-grid,.consult-grid{grid-template-columns:1fr}.bento{grid-auto-rows:190px;gap:10px}.cat{padding:18px}.cat h3{font-size:16px}.cat p{display:none}.cat .ico{width:36px;height:36px}.cat.big p{display:block}.cat.big .tagrow{display:none}.cat .go{width:32px;height:32px;top:14px;right:14px}.svc{grid-template-columns:1fr}.svc h3{margin-top:22px}.sr-list{display:flex;overflow-x:auto;scrollbar-width:none;margin:0 calc(-1 * var(--gutter));padding:0 var(--gutter)}.sr-list button{flex:0 0 auto;padding:12px 16px}.sr-list svg{display:none}.sr-card{min-height:540px}.sr-info{grid-template-columns:1fr;gap:14px;left:12px;right:12px;bottom:12px}form{grid-template-columns:1fr}.sys-grid{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr}.proj-ctrl{display:none}.timeline div{grid-template-columns:90px 1fr}.ribbon{left:12px;right:12px;bottom:12px;justify-content:center;font-size:11px}}@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.rv{opacity:1;transform:none}}.btn-navy{background:var(--navy);color:var(--white)}.btn-navy:hover{background:var(--navy-2)}main{padding-top:80px}.view{display:none}.view.on{display:block}.crumbs{font-size:13px;color:var(--muted);padding:24px 0 0}.crumbs a:hover{color:var(--orange)}.b-head{display:flex;justify-content:space-between;align-items:end;gap:24px;flex-wrap:wrap;padding:16px 0 28px}.b-head h1{font-size:clamp(34px,5vw,72px);line-height:1}.b-head h1 span{color:var(--orange)}.b-head p{color:var(--muted);max-width:46ch;margin-top:14px}.search{position:relative;width:min(360px,100%)}.search input{width:100%;font:inherit;font-size:15px;background:var(--white);border:1.5px solid transparent;border-radius:var(--r);padding:14px 16px 14px 44px;outline:none}.search input:focus{border-color:var(--orange)}.search svg{position:absolute;left:14px;top:50%;transform:translateY(-50%);width:18px;height:18px;fill:none;stroke:var(--muted);stroke-width:2}.cats{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;margin-bottom:22px}.cats button{padding:10px 16px;border-radius:var(--r);background:var(--white);font-size:14px;font-weight:600;color:var(--muted);white-space:nowrap;transition:.2s}.cats button.on{background:var(--navy);color:var(--white)}.cats button em{font-style:normal;opacity:.55;margin-left:4px;font-size:12px}.feat{display:grid;grid-template-columns:1.3fr 1fr;background:var(--white);border-radius:var(--r);overflow:hidden;margin-bottom:14px;cursor:pointer;transition:box-shadow .3s}.feat:hover{box-shadow:0 18px 40px rgba(33,30,54,.1)}.feat .im{position:relative;min-height:420px;overflow:hidden}.feat .im img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .8s}.feat:hover .im img{transform:scale(1.04)}.feat .bd{padding:clamp(24px,3.4vw,48px);display:flex;flex-direction:column;position:relative;overflow:hidden}.feat .bd .pat-line{position:absolute;right:-60px;bottom:-60px;width:260px;height:260px;opacity:.35}.feat h2{font-size:clamp(24px,2.6vw,36px);margin:14px 0}.feat p{color:var(--muted);position:relative}.feat .meta{margin-top:auto;padding-top:22px;position:relative}.tag{display:inline-block;font-size:12px;font-weight:700;padding:5px 10px;border-radius:6px;background:#FDF4EC;color:var(--orange-deep)}.meta{display:flex;gap:14px;align-items:center;font-size:13px;color:var(--muted);flex-wrap:wrap}.meta i{width:4px;height:4px;border-radius:50%;background:currentColor;opacity:.5}.posts{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.post{background:var(--white);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column;cursor:pointer;text-align:left;transition:transform .25s,box-shadow .25s}.post:hover{transform:translateY(-3px);box-shadow:0 16px 36px rgba(33,30,54,.1)}.post .im{aspect-ratio:16/10;position:relative;overflow:hidden;background:var(--grey-2)}.post .im img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s}.post .im img.prod{object-fit:contain;inset:12%;width:76%;height:76%}.post:hover .im img{transform:scale(1.05)}.post .im .tag{position:absolute;left:14px;top:14px;background:var(--white)}.post .bd{padding:20px 22px 22px;display:flex;flex-direction:column;flex:1}.post h3{font-size:18px;line-height:1.25;margin-bottom:10px}.post p{font-size:14px;color:var(--muted);flex:1}.post .meta{margin-top:16px}.promo-tile{background:var(--navy);color:var(--white);border-radius:var(--r);padding:28px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;min-height:360px}.promo-tile .pat-line{position:absolute;inset:0;opacity:.55;-webkit-mask-image:linear-gradient(200deg,#000 20%,transparent 70%);mask-image:linear-gradient(200deg,#000 20%,transparent 70%)}.promo-tile b{font-family:var(--head);font-size:24px;line-height:1.15;position:relative}.promo-tile b span{color:var(--orange)}.promo-tile p{opacity:.7;font-size:14px;margin-top:10px;position:relative}.promo-tile form{display:grid;grid-template-columns:1fr;gap:8px;position:relative;background:none;padding:0;color:inherit;border-radius:0}.promo-tile input{font:inherit;font-size:15px;background:rgba(255,255,255,.1);border:1.5px solid transparent;border-radius:var(--r);padding:12px 14px;color:var(--white);outline:none}.promo-tile input::placeholder{color:rgba(255,255,255,.5)}.promo-tile input:focus{border-color:var(--orange)}.promo-tile .btn{justify-content:center}.promo-tile .ok{display:none;font-weight:600;color:var(--orange);position:relative}.none{grid-column:1/-1;background:var(--white);border-radius:var(--r);padding:50px;text-align:center;color:var(--muted)}.none b{display:block;font-family:var(--head);font-size:20px;color:var(--navy);margin-bottom:6px}.more{display:flex;justify-content:center;margin:28px 0 clamp(60px,8vw,100px)}.progress{position:fixed;left:0;top:80px;height:3px;background:var(--orange);width:0;z-index:49;transition:width .1s}.a-hero{padding-top:8px;padding-bottom:clamp(24px,3vw,36px)}.a-hero .back{display:inline-flex;gap:8px;align-items:center;font-size:14px;font-weight:600;color:var(--muted);margin:18px 0 22px}.a-hero .back:hover{color:var(--orange-deep)}.a-hero h1{font-size:clamp(28px,4vw,54px);line-height:1.08;max-width:22ch;margin:14px 0 18px}.a-hero .lead2{font-size:clamp(17px,1.4vw,20px);color:var(--muted);max-width:60ch}.author{display:flex;gap:12px;align-items:center;margin-top:22px}.author .av{width:42px;height:42px;border-radius:50%;background:var(--navy);display:grid;place-items:center}.author .av svg{width:20px;height:20px;fill:var(--orange)}.author b{font-size:14px;display:block}.author span{font-size:13px;color:var(--muted)}.a-cover{aspect-ratio:21/9;border-radius:var(--r);overflow:hidden;position:relative;background:var(--white)}.a-cover img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.a-cover img.prod{object-fit:contain;inset:10%;width:80%;height:80%}.a-layout{display:grid;grid-template-columns:240px minmax(0,1fr) 260px;gap:clamp(24px,4vw,56px);padding:clamp(32px,4vw,56px) 0 clamp(50px,6vw,80px);align-items:start}.toc{position:sticky;top:110px}.toc h4,.side h4{font-family:var(--body);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:12px;font-weight:600}.toc a{display:block;font-size:14px;padding:8px 0 8px 14px;border-left:2px solid var(--line);color:var(--muted);line-height:1.35;transition:.2s}.toc a.on{border-color:var(--orange);color:var(--navy);font-weight:600}.share{display:flex;gap:6px;margin-top:22px}.share button,.share a{width:40px;height:40px;border-radius:var(--r);background:var(--white);display:grid;place-items:center;font-size:12px;font-weight:700;color:var(--navy)}.share button:hover,.share a:hover{background:var(--orange)}.body{font-size:17px;line-height:1.75;max-width:68ch}.body h2{font-size:clamp(22px,2.2vw,28px);margin:40px 0 14px;scroll-margin-top:110px}.body h2:first-child{margin-top:0}.body p{margin-bottom:16px;color:#3A3650}.body ul{margin:0 0 18px;padding-left:0;list-style:none;display:grid;gap:8px}.body li{display:flex;gap:12px}.body li::before{content:\"\";width:8px;height:8px;border-radius:2px;background:var(--orange);margin-top:11px;flex:none}.callout{background:var(--navy);color:var(--white);border-radius:var(--r);padding:22px 24px;margin:26px 0;position:relative;overflow:hidden}.callout .pat-line{position:absolute;right:-30px;top:-30px;width:160px;height:160px;opacity:.5}.callout b{font-family:var(--head);color:var(--orange);display:block;margin-bottom:6px;position:relative}.callout p{color:rgba(255,255,255,.8)!important;margin:0!important;position:relative}.pcard{display:grid;grid-template-columns:110px 1fr auto;gap:18px;align-items:center;background:var(--white);border-radius:var(--r);padding:16px;margin:26px 0;border:2px solid var(--orange)}.pcard .im{width:110px;height:110px;background:var(--grey-2);border-radius:6px;position:relative}.pcard .im img{position:absolute;inset:10%;width:80%;height:80%;object-fit:contain}.pcard small{font-size:11px;font-weight:700;letter-spacing:.1em;color:var(--muted)}.pcard b{display:block;font-size:16px;line-height:1.3;margin:4px 0}.pcard strong{font-family:var(--head);font-size:16px}.feedback{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;background:var(--white);border-radius:var(--r);padding:18px 22px;margin-top:36px;font-weight:600}.feedback div{display:flex;gap:8px}.feedback button{padding:10px 16px;border-radius:var(--r);background:var(--grey-2);font-weight:600;font-size:14px}.feedback button.on{background:var(--orange)}.side{position:sticky;top:110px;display:grid;gap:14px}.side .cta{background:var(--orange);border-radius:var(--r);padding:22px;position:relative;overflow:hidden}.side .cta b{font-family:var(--head);font-size:18px;line-height:1.2;display:block}.side .cta p{font-size:14px;margin:8px 0 14px;color:rgba(33,30,54,.8)}.side .cta .btn{background:var(--navy);color:var(--white);padding:12px 16px}.side .mini{display:grid;gap:10px}.side .mini button{display:grid;grid-template-columns:64px 1fr;gap:12px;align-items:center;text-align:left;background:var(--white);border-radius:var(--r);padding:8px}.side .mini .im{width:64px;height:64px;border-radius:6px;overflow:hidden;position:relative;background:var(--grey-2)}.side .mini img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.side .mini img.prod{object-fit:contain;inset:10%;width:80%;height:80%}.side .mini b{font-size:13px;line-height:1.3}.related{background:var(--white);padding:clamp(50px,6vw,80px) 0}.related .posts .post{background:var(--grey-2)}.related .posts .post .im .tag{background:var(--white)}.toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,150%);background:var(--navy);color:var(--white);padding:12px 18px;border-radius:var(--r);font-size:14px;font-weight:600;z-index:80;transition:transform .3s}.toast.show{transform:translate(-50%,0)}@media (max-width:1180px){.a-layout{grid-template-columns:200px minmax(0,1fr)}.side{display:none}}@media (max-width:1080px){.feat{grid-template-columns:1fr}.feat .im{min-height:300px}.posts{grid-template-columns:1fr 1fr}}@media (max-width:760px){.nav-right .cart-btn{display:none!important}main{padding-top:68px}.progress{top:68px}.posts{grid-template-columns:1fr}.a-layout{grid-template-columns:1fr}.toc{position:static;background:var(--white);border-radius:var(--r);padding:16px}.share{display:none}.a-cover{aspect-ratio:4/3}.pcard{grid-template-columns:80px 1fr}.pcard .im{width:80px;height:80px}.pcard .btn{grid-column:1/-1;justify-content:center}.body{font-size:16px}}@media (max-width:1320px){.nav-right .phone{display:none}}@media (max-width:1200px){.menu{gap:20px}.nav-right .lang{display:none}}:host{--head:\"Manrope\",system-ui,sans-serif;--body:\"Manrope\",system-ui,sans-serif;--sans:\"Manrope\",system-ui,sans-serif;--ease:cubic-bezier(.2,.7,.2,1);--ease-io:cubic-bezier(.7,0,.2,1);--shadow-lg:0 30px 60px -30px rgba(33,30,54,.45);--shadow-md:0 18px 40px -22px rgba(33,30,54,.4);}:host{scroll-padding-top:100px}::selection{background:var(--orange);color:var(--navy)}:focus-visible{outline:2px solid var(--orange);outline-offset:3px;border-radius:4px}.kl-skip{position:fixed;left:12px;top:-60px;z-index:200;background:var(--navy);color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;transition:top .2s}.kl-skip:focus{top:12px}@view-transition{navigation:auto}::view-transition-old(root){animation:kl-vt-out .32s var(--ease-io) both}::view-transition-new(root){animation:kl-vt-in .6s var(--ease) both}#hdr{view-transition-name:kl-header}::view-transition-group(kl-header){animation-duration:0s}@keyframes kl-vt-out{to{opacity:0;transform:translateY(-14px) scale(.995)}}@keyframes kl-vt-in{from{opacity:0;transform:translateY(22px)}}.kl-curtain{position:fixed;inset:0;z-index:150;pointer-events:none;background:var(--navy);transform:scaleY(0);transform-origin:bottom;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='40' height='40'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45' fill-opacity='.12'/%3E%3C/svg%3E\");background-size:40px}.kl-curtain.cover{transform:scaleY(1);transition:transform .42s var(--ease-io)}.kl-curtain.lift{transform:scaleY(0);transform-origin:top;transition:transform .6s var(--ease-io)}.kl-curtain.instant{transform:scaleY(1);transition:none}.kl-intro{position:fixed;inset:0;z-index:160;background:var(--navy);display:grid;place-items:center;transition:transform .8s var(--ease-io) .05s}.kl-intro.done{transform:translateY(-100%)}.kl-intro .mk{width:84px;height:auto;fill:var(--orange);animation:kl-pop .7s var(--ease) both}.kl-intro .wm{width:200px;height:auto;fill:#fff;margin-top:22px;clip-path:inset(0 100% 0 0);animation:kl-wipe .7s var(--ease) .25s forwards}.kl-intro .bar{position:absolute;left:0;bottom:0;height:3px;background:var(--orange);width:0;animation:kl-bar .9s var(--ease) forwards}@keyframes kl-pop{from{opacity:0;transform:scale(.6) rotate(-12deg)}}@keyframes kl-wipe{to{clip-path:inset(0)}}@keyframes kl-bar{to{width:100%}}.kl-promo{position:relative;z-index:51;background:#F6F4F1;color:var(--navy);font-size:13px;height:34px;overflow:hidden;border-bottom:1px solid rgba(33,30,54,.08)}.kl-promo.gone{display:none}.kl-promo-in{height:100%;display:flex;align-items:center;justify-content:center;gap:16px;position:relative}.kl-promo-rot{position:relative;flex:1;height:100%;max-width:640px}.kl-promo-rot a{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;font-weight:500;color:var(--navy);opacity:0;transform:translateY(100%);transition:opacity .5s var(--ease),transform .6s var(--ease);pointer-events:none}.kl-promo-rot a.on{opacity:1;transform:none;pointer-events:auto}.kl-promo-rot a.out{opacity:0;transform:translateY(-100%)}.kl-promo-rot a:hover{color:var(--orange-deep)}.kl-promo-rot svg{width:16px;height:16px;flex:none;color:var(--orange-deep);fill:none;stroke:currentColor;stroke-width:3}.kl-promo-tel{position:absolute;left:var(--gutter);font-weight:700;font-size:12.5px;color:var(--navy);opacity:.75;transition:opacity .2s}.kl-promo-tel:hover{opacity:1}.kl-promo-x{position:absolute;right:var(--gutter);top:50%;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;color:var(--navy);opacity:.45;font-size:11px;transition:opacity .2s,background .2s}.kl-promo-x:hover{opacity:1;background:rgba(33,30,54,.08)}@media (max-width:900px){.kl-promo-tel{display:none}}@media (max-width:480px){.kl-promo{font-size:12px;height:32px}.kl-promo-rot a{justify-content:flex-start;padding-right:30px}}#hdr{top:var(--kl-bar,0px)}.kl-sticker{position:absolute;right:28px;top:28px;z-index:3;width:132px;height:132px;border-radius:50%;background:var(--orange);color:var(--navy);display:grid;place-items:center;box-shadow:0 20px 40px -18px rgba(0,0,0,.55);transition:transform .5s var(--ease);animation:kl-pop .8s var(--ease) .6s both}.kl-sticker:hover{transform:scale(1.07) rotate(-6deg)}.kl-sticker svg{position:absolute;inset:6px;width:calc(100% - 12px);height:calc(100% - 12px);animation:kl-spin 16s linear infinite}.kl-sticker text{font:700 10.5px var(--body);letter-spacing:.18em;fill:var(--navy);text-transform:uppercase}.kl-sticker b{font-family:var(--head);font-weight:800;font-size:28px;line-height:1;text-align:center}.kl-sticker b small{display:block;font-family:var(--body);font-size:10px;font-weight:700;letter-spacing:.12em;margin-top:4px}@keyframes kl-spin{to{transform:rotate(360deg)}}@media (max-width:760px){.kl-sticker{width:100px;height:100px;right:16px;top:16px}.kl-sticker b{font-size:21px}.kl-sticker text{font-size:9.5px}}.kl-cat-badge{position:absolute;left:22px;top:22px;z-index:3;background:var(--orange);color:var(--navy);font-size:12px;font-weight:800;padding:5px 10px;border-radius:999px;box-shadow:0 8px 18px -10px rgba(0,0,0,.5);animation:kl-pop .6s var(--ease) both}.cat .kl-cat-badge+svg.ico{margin-top:30px}.cat.big>.kl-cat-badge{position:absolute;width:auto;align-self:flex-start;font-size:13px;padding:7px 14px}.kl-deals{background:var(--white);position:relative;overflow:hidden}.kl-deals .sec-head{align-items:flex-end}.kl-deals-meta{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.kl-count{display:flex;gap:6px;font-variant-numeric:tabular-nums}.kl-count span{background:var(--navy);color:#fff;border-radius:8px;padding:8px 10px;min-width:56px;text-align:center;font-family:var(--head);font-weight:800;font-size:20px;line-height:1}.kl-count span small{display:block;font-family:var(--body);font-weight:500;font-size:10px;opacity:.6;margin-top:4px;letter-spacing:.06em}.kl-deals-rail{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(240px,1fr);gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:4px 2px 14px}.kl-deals-rail::-webkit-scrollbar{display:none}.kl-deal{scroll-snap-align:start;background:var(--grey-2);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;position:relative;transition:transform .45s var(--ease),box-shadow .45s var(--ease)}.kl-deal:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-deal .im{aspect-ratio:1;background:#fff;display:grid;place-items:center;overflow:hidden}.kl-deal .im img{width:84%;height:84%;object-fit:contain;transition:transform 1s var(--ease)}.kl-deal:hover .im img{transform:scale(1.07)}.kl-deal .off{position:absolute;left:12px;top:12px;background:var(--orange);color:var(--navy);font-weight:800;font-size:13px;padding:5px 10px;border-radius:999px}.kl-deal .bd{padding:14px 16px 16px;display:flex;flex-direction:column;gap:6px;flex:1}.kl-deal .br{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:600}.kl-deal h3{font-family:var(--body);font-weight:600;font-size:14px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.kl-deal .pr{margin-top:auto;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}.kl-deal .pr b{font-family:var(--head);font-size:18px}.kl-deal .pr s{font-size:13px;color:var(--muted)}.kl-deals-nav{display:flex;gap:8px}.kl-deals-nav button{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s}.kl-deals-nav button:hover{background:var(--navy);color:#fff}.kl-deals-note{font-size:12px;color:var(--muted);margin-top:6px}@media (max-width:760px){.kl-deals-rail{grid-auto-columns:72%}.kl-count span{min-width:46px;font-size:17px;padding:7px 8px}.kl-deals-nav{display:none}}.kl-ab{position:relative;overflow:hidden;background:#8E9097;color:#fff;min-height:min(900px,100svh);display:flex;align-items:center;padding:clamp(80px,9vw,120px) 0}.kl-ab-bg{position:absolute;inset:0}.kl-ab-bg img{width:100%;height:100%;object-fit:cover;object-position:70% center;transform:scale(1.06);transition:transform 2.4s var(--ease)}.kl-ab.kl-seen .kl-ab-bg img{transform:none}.kl-ab::before{content:\"\";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(33,30,54,.82) 0%,rgba(33,30,54,.55) 38%,rgba(33,30,54,0) 64%)}.kl-ab-in{position:relative;z-index:2;width:100%}.kl-ab-in>*{max-width:640px}.kl-ab-q{font-family:var(--head);font-weight:700;font-size:clamp(28px,3.3vw,50px);line-height:1.12;margin:22px 0 26px;letter-spacing:-.01em}.kl-ab-t{font-size:clamp(15px,1.15vw,17px);line-height:1.75;color:rgba(255,255,255,.85);max-width:560px;margin-bottom:34px}.kl-ab .btn-line{color:#fff;border-radius:999px;padding:16px 28px}.kl-ab-line{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:48px;max-width:720px!important;padding-top:24px;border-top:1px solid rgba(255,255,255,.22)}.kl-ab-line b{display:block;font-family:var(--head);font-size:22px;color:var(--orange)}.kl-ab-line span{display:block;font-size:12.5px;line-height:1.45;color:rgba(255,255,255,.75);margin-top:4px}.kl-ab-sign{font-size:12px;color:rgba(255,255,255,.6);margin-top:22px}@media (max-width:760px){.kl-ab{align-items:flex-start;min-height:0;padding:72px 0 360px}.kl-ab::before{background:linear-gradient(180deg,rgba(33,30,54,.85) 0%,rgba(33,30,54,.6) 52%,rgba(33,30,54,0) 78%)}.kl-ab-bg img{object-position:center bottom}.kl-ab-line{grid-template-columns:1fr 1fr}}.kl-how{background:#F6EEE4;position:relative;overflow:hidden}.kl-how::before{content:\"\";position:absolute;inset:0;opacity:.55;pointer-events:none;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='220' height='220'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='none' stroke='%23E08F45' stroke-opacity='.35' stroke-width='.008'/%3E%3C/svg%3E\");background-size:220px}.kl-how .wrap{position:relative}.kl-how-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2vw,28px)}.kl-vid{position:relative;display:block;aspect-ratio:9/14;border-radius:14px;overflow:hidden;background:var(--navy);cursor:pointer;padding:0;text-align:left;box-shadow:0 30px 60px -40px rgba(33,30,54,.6);transition:transform .6s var(--ease),box-shadow .6s var(--ease)}.kl-vid:hover{transform:translateY(-8px);box-shadow:0 40px 70px -36px rgba(33,30,54,.7)}.kl-vid img,.kl-vid video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.2s var(--ease),opacity .5s}.kl-vid:hover img{transform:scale(1.05)}.kl-vid video{opacity:0;pointer-events:none}.kl-vid.previewing video{opacity:1}.kl-vid::after{content:\"\";position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(180deg,transparent,rgba(33,30,54,.85))}.kl-play{position:absolute;left:50%;top:50%;z-index:2;width:76px;height:76px;margin:-38px 0 0 -38px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 12px 30px -10px rgba(0,0,0,.45);transition:transform .45s var(--ease),background .3s}.kl-play::before{content:\"\";margin-left:5px;border-left:18px solid var(--navy);border-top:11px solid transparent;border-bottom:11px solid transparent;transition:border-color .3s}.kl-play::after{content:\"\";position:absolute;inset:-10px;border-radius:50%;border:2px solid rgba(255,255,255,.6);animation:kl-ring 2.4s var(--ease) infinite}@keyframes kl-ring{0%{transform:scale(.85);opacity:1}100%{transform:scale(1.35);opacity:0}}.kl-vid:hover .kl-play{transform:scale(1.1);background:var(--orange)}.kl-vid-cap{position:absolute;left:22px;right:22px;bottom:22px;z-index:2;color:#fff;font-weight:600;font-size:15px;line-height:1.35}.kl-vid-cap small{display:block;font-family:var(--head);font-size:12px;color:var(--orange);letter-spacing:.1em;margin-bottom:6px}@media (max-width:900px){.kl-how-grid{grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:72%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding-bottom:6px}.kl-how-grid::-webkit-scrollbar{display:none}.kl-vid{scroll-snap-align:start}.kl-play{width:62px;height:62px;margin:-31px 0 0 -31px}}.kl-vmodal{position:fixed;inset:0;z-index:130;background:rgba(20,18,34,.82);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px;opacity:0;transition:opacity .3s}.kl-vmodal[hidden]{display:none}.kl-vmodal.show{opacity:1}.kl-vmodal-box{position:relative;height:min(86vh,900px);aspect-ratio:9/16;max-width:100%;border-radius:16px;overflow:hidden;background:#000;transform:scale(.94);transition:transform .45s var(--ease)}.kl-vmodal.show .kl-vmodal-box{transform:none}.kl-vmodal video{width:100%;height:100%;object-fit:cover;display:block}.kl-vmodal-x{position:absolute;right:12px;top:12px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.9);color:var(--navy);font-size:15px;font-weight:700}.kl-chat{position:fixed;right:20px;bottom:20px;z-index:90;font-size:14px;transform:translateY(calc(-1 * var(--kl-lift,0px)));transition:transform .35s var(--ease),opacity .25s,visibility .25s}:host.kl-chat-hide .kl-chat,:host.kl-chat-hide .kl-top{opacity:0!important;visibility:hidden!important;pointer-events:none!important}.kl-chat-btn{display:flex;align-items:center;gap:10px;background:var(--navy);color:#fff;border-radius:999px;padding:8px 18px 8px 8px;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transition:transform .35s var(--ease),background .3s;animation:kl-pop .7s var(--ease) 1.4s both}.kl-chat-btn:hover{transform:translateY(-3px);background:var(--navy-2)}.kl-chat-btn .av{position:relative;width:40px;height:40px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-btn .av svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-btn .av::after{content:\"\";position:absolute;right:0;top:0;width:11px;height:11px;border-radius:50%;background:#2E9E5B;border:2px solid var(--navy)}.kl-chat-btn b{font-weight:600}.kl-chat.open .kl-chat-btn{opacity:0;pointer-events:none;transform:scale(.8)}.kl-chat-panel{position:absolute;right:0;bottom:0;width:min(370px,calc(100vw - 32px));background:#fff;border-radius:18px;overflow:hidden;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);transform-origin:bottom right;transform:scale(.6) translateY(20px);opacity:0;visibility:hidden;transition:transform .45s var(--ease),opacity .25s,visibility 0s .45s;display:flex;flex-direction:column;max-height:min(600px,calc(100svh - 120px))}.kl-chat.open .kl-chat-panel{transform:none;opacity:1;visibility:visible;transition:transform .45s var(--ease),opacity .25s}.kl-chat-head{background:var(--navy);color:#fff;padding:18px 18px 16px;display:flex;gap:12px;align-items:center;position:relative}.kl-chat-head .av{width:42px;height:42px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none}.kl-chat-head .av svg{width:22px;height:22px;fill:var(--navy)}.kl-chat-head b{display:block;font-size:15px}.kl-chat-head small{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.75}.kl-chat-head small::before{content:\"\";width:7px;height:7px;border-radius:50%;background:#2E9E5B}.kl-chat-x{position:absolute;right:12px;top:12px;width:32px;height:32px;border-radius:50%;color:#fff;opacity:.7}.kl-chat-x:hover{opacity:1;background:rgba(255,255,255,.1)}.kl-chat-body{padding:16px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;background:var(--grey-2);flex:1;min-height:200px}.kl-msg{max-width:86%;padding:10px 14px;border-radius:14px;line-height:1.45;animation:kl-up .35s var(--ease) both}.kl-msg.in{background:#fff;border-bottom-left-radius:4px;align-self:flex-start}.kl-msg.out{background:var(--navy);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}.kl-msg small{display:block;font-size:11px;opacity:.55;margin-top:4px}.kl-typing{align-self:flex-start;background:#fff;border-radius:14px;padding:12px 14px;display:flex;gap:4px}.kl-typing i{width:6px;height:6px;border-radius:50%;background:var(--muted);animation:kl-dot 1s infinite}.kl-typing i:nth-child(2){animation-delay:.15s}.kl-typing i:nth-child(3){animation-delay:.3s}@keyframes kl-dot{0%,100%{opacity:.3;transform:none}50%{opacity:1;transform:translateY(-3px)}}.kl-quick{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}.kl-quick button{font-size:13px;font-weight:600;padding:8px 12px;border-radius:999px;background:#fff;border:1.5px solid var(--line);color:var(--navy);transition:border-color .2s,background .2s}.kl-quick button:hover{border-color:var(--orange);background:#FDF4EC}.kl-chat-ch{display:flex;gap:8px;padding:10px 16px 0;background:#fff}.kl-chat-ch a{flex:1;text-align:center;font-size:12px;font-weight:600;padding:8px 6px;border-radius:9px;background:var(--grey-2);transition:background .2s,color .2s}.kl-chat-ch a:hover{background:var(--navy);color:#fff}.kl-chat-form{display:flex;gap:8px;padding:12px 16px 16px;background:#fff}.kl-chat-form input{flex:1;min-width:0;border:1.5px solid var(--line);border-radius:999px;padding:11px 16px;font:inherit;font-size:14px;outline:none;color:var(--navy)}.kl-chat-form input:focus{border-color:var(--orange)}.kl-chat-form button{width:44px;height:44px;border-radius:50%;background:var(--orange);display:grid;place-items:center;flex:none;transition:transform .25s var(--ease)}.kl-chat-form button:hover{transform:scale(1.08)}.kl-chat-form button svg{width:18px;height:18px;fill:none;stroke:var(--navy);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.kl-chat-note{font-size:11px;color:var(--muted);text-align:center;padding:0 16px 12px;background:#fff}.kl-top{bottom:calc(92px + var(--kl-lift,0px))!important}@media (max-width:760px){.kl-chat{right:14px;bottom:14px}.kl-chat-btn{padding:6px}.kl-chat-btn b{display:none}.kl-chat-btn .av{width:46px;height:46px}.kl-top{right:18px}}.kl-progress{position:fixed;left:0;right:0;top:0;height:3px;z-index:60;pointer-events:none}.kl-progress i{display:block;height:100%;background:var(--orange);transform-origin:left;transform:scaleX(var(--p,0))}#hdr{transition:transform .45s var(--ease),box-shadow .3s,background .3s}#hdr.kl-hide{transform:translateY(-100%)}#hdr .logo svg{transition:transform .4s var(--ease)}#hdr .logo:hover svg{transform:translateX(3px)}.kl-menu{align-items:center}.kl-dd{position:relative;display:flex;align-items:center}.kl-dd>a{display:inline-flex;align-items:center;gap:6px}.kl-caret{width:7px;height:7px;border-right:1.6px solid currentColor;border-bottom:1.6px solid currentColor;transform:rotate(45deg) translateY(-2px);transition:transform .3s var(--ease);opacity:.6}.kl-dd:hover .kl-caret,.kl-dd.open .kl-caret{transform:rotate(225deg) translate(-2px,-1px)}.kl-panel{position:absolute;top:100%;left:-18px;min-width:290px;padding:10px;background:#fff;border-radius:14px;box-shadow:var(--shadow-lg),0 0 0 1px var(--line);opacity:0;visibility:hidden;transform:translateY(10px) scale(.98);transform-origin:top left;transition:opacity .25s,transform .35s var(--ease),visibility 0s .35s;margin-top:14px}.kl-panel::before{content:\"\";position:absolute;left:0;right:0;top:-16px;height:16px}.kl-dd:hover .kl-panel,.kl-dd:focus-within .kl-panel,.kl-dd.open .kl-panel{opacity:1;visibility:visible;transform:none;transition:opacity .25s,transform .35s var(--ease),visibility 0s}.kl-dd.closing .kl-panel{opacity:0!important;visibility:hidden!important}.menu .kl-panel a{display:block;padding:11px 14px;border-radius:9px;transition:background .2s,transform .25s var(--ease)}.menu .kl-panel a::after{display:none}.menu .kl-panel a:hover{background:var(--grey-2);transform:translateX(4px)}.kl-panel b{display:block;font-size:14px;font-weight:600}.kl-panel small{display:block;font-size:12px;color:var(--muted);font-weight:400;margin-top:2px}.kl-panel a:hover b{color:var(--orange-deep)}.kl-panel>a{opacity:0;transform:translateY(6px)}.kl-dd:hover .kl-panel>a,.kl-dd:focus-within .kl-panel>a,.kl-dd.open .kl-panel>a{opacity:1;transform:none;transition:opacity .3s,transform .4s var(--ease),background .2s;transition-delay:calc(var(--i,0)*35ms)}.kl-mega{display:grid;grid-template-columns:repeat(3,minmax(150px,1fr)) 230px;gap:6px 18px;min-width:860px;padding:22px}.kl-mega h6{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange-deep);margin:0 0 8px 12px}.menu .kl-mega-col a{padding:7px 12px;font-size:14px}.menu a.kl-mega-promo{background:var(--navy);color:#fff;border-radius:12px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;gap:14px;min-height:220px;position:relative;overflow:hidden}.menu a.kl-mega-promo:hover{background:var(--navy-2);transform:none}.kl-mega-promo b{font-family:var(--head);font-size:20px;line-height:1.15;color:#fff!important}.kl-mega-promo .kl-more{font-size:13px;font-weight:600;color:var(--orange);display:inline-flex;gap:8px;align-items:center}.kl-mega-promo .arrow{fill:var(--orange)}.kl-mega-promo::after{content:\"\";position:absolute;right:-40px;bottom:-40px;width:160px;height:160px;opacity:.25;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2' width='32' height='32'%3E%3Cpath d='M0 1L1 0H2L1 1V2H0Z' fill='%23E08F45'/%3E%3C/svg%3E\");background-size:32px;transition:transform .8s var(--ease)}.kl-mega-promo:hover::after{transform:translate(-14px,-14px)}.menu a[aria-current=\"page\"],.kl-dd.kl-active>a{color:var(--orange-deep)}.menu>a[aria-current=\"page\"]::after,.kl-dd.kl-active>a::after{width:100%}.kl-icon-btn{width:44px;height:44px;border-radius:var(--r);background:var(--grey-2);display:grid;place-items:center;transition:background .25s,transform .25s var(--ease);flex:none}.kl-icon-btn svg{width:20px;height:20px;fill:none;stroke:var(--navy);stroke-width:1.8;stroke-linecap:round;transition:stroke .25s}.kl-icon-btn:hover{background:var(--navy);transform:translateY(-2px)}.kl-icon-btn:hover svg{stroke:#fff}.kl-icon-btn[aria-current=\"page\"]{background:var(--orange)}@media (max-width:1460px){.nav-right .lang{display:none}}@media (max-width:1320px){.kl-menu{gap:22px}}@media (max-width:1200px){.kl-menu{gap:16px;font-size:13.5px}.nav-cta{display:none!important}}.drawer{inset:0 0 0 auto!important;width:min(380px,88vw);padding:16px 24px 24px!important;border-radius:18px 0 0 18px;box-shadow:-30px 0 60px -20px rgba(0,0,0,.45);transition:transform .5s var(--ease-io)!important;overflow:hidden}.drawer .top{height:44px}.drawer .top svg{height:16px}.drawer .burger{width:40px;height:40px;font-size:15px}.kl-backdrop{position:fixed;inset:0;z-index:69;background:rgba(33,30,54,.45);backdrop-filter:blur(3px);opacity:0;visibility:hidden;transition:opacity .4s,visibility 0s .4s}:host.kl-drawer-open .kl-backdrop{opacity:1;visibility:visible;transition:opacity .4s}.drawer{overflow-y:auto!important;overscroll-behavior:contain}.kl-drawer-nav{flex:1 0 auto;margin-top:22px!important;padding-bottom:16px}.kl-drawer-foot{flex:none}.drawer .kl-drawer-nav>a,.kl-drawer-nav summary{font-family:var(--body)!important;font-weight:600!important;font-size:17px!important;padding:14px 0!important;border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details{border-bottom:1px solid rgba(255,255,255,.1)}.kl-drawer-nav details summary{border-bottom:0}.kl-drawer-nav summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center}.kl-drawer-nav summary::-webkit-details-marker{display:none}.kl-drawer-nav summary::after{content:\"\";width:8px;height:8px;border-right:1.8px solid var(--orange);border-bottom:1.8px solid var(--orange);transform:rotate(45deg) translateY(-3px);transition:transform .3s var(--ease)}.kl-drawer-nav details[open] summary::after{transform:rotate(225deg) translate(-2px,-2px)}.kl-drawer-nav details>div{display:grid;padding:0 0 12px 12px;border-left:2px solid rgba(224,143,69,.35);margin:0 0 12px 2px}.drawer .kl-drawer-nav details>div a{font-family:var(--body);font-weight:500;font-size:15px;padding:7px 0;border:0;opacity:.75;transition:opacity .2s,transform .25s var(--ease)}.drawer .kl-drawer-nav details>div a:hover{opacity:1;transform:translateX(4px);color:var(--orange)}.drawer .kl-drawer-nav>a[aria-current=\"page\"],.drawer .kl-drawer-nav a[aria-current=\"page\"]{color:var(--orange);opacity:1}.kl-drawer-nav details[open]>div a{animation:kl-up .4s var(--ease) both}.kl-drawer-nav details[open]>div a:nth-child(2){animation-delay:.03s}.kl-drawer-nav details[open]>div a:nth-child(3){animation-delay:.06s}.kl-drawer-nav details[open]>div a:nth-child(4){animation-delay:.09s}.kl-drawer-nav details[open]>div a:nth-child(5){animation-delay:.12s}.kl-drawer-nav details[open]>div a:nth-child(6){animation-delay:.15s}.drawer.open .kl-drawer-nav>*{animation:kl-side .5s var(--ease) both}.drawer.open .kl-drawer-nav>*:nth-child(2){animation-delay:.04s}.drawer.open .kl-drawer-nav>*:nth-child(3){animation-delay:.08s}.drawer.open .kl-drawer-nav>*:nth-child(4){animation-delay:.12s}.drawer.open .kl-drawer-nav>*:nth-child(5){animation-delay:.16s}.drawer.open .kl-drawer-nav>*:nth-child(6){animation-delay:.2s}.kl-drawer-foot{display:grid;gap:4px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12)}.kl-drawer-foot span{font-size:12px;opacity:.55;margin-bottom:12px}.kl-drawer-foot .btn{justify-content:center}.kl-drawer-phone{font-family:var(--head);font-weight:800;font-size:19px;color:var(--orange)}@keyframes kl-up{from{opacity:0;transform:translateY(12px)}}@keyframes kl-side{from{opacity:0;transform:translateX(24px)}}:host.kl-lock{overflow:hidden}.kl-search{position:fixed;inset:0;z-index:120;background:rgba(33,30,54,.55);backdrop-filter:blur(8px);display:flex;justify-content:center;align-items:flex-start;padding:12vh 16px 16px;opacity:0;transition:opacity .25s}.kl-search[hidden]{display:none}.kl-search.show{opacity:1}.kl-search-box{width:min(680px,100%);background:#fff;border-radius:16px;box-shadow:var(--shadow-lg);overflow:hidden;transform:translateY(-12px) scale(.98);transition:transform .4s var(--ease)}.kl-search.show .kl-search-box{transform:none}.kl-search-in{display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--line)}.kl-search-in svg{width:22px;height:22px;fill:none;stroke:var(--muted);stroke-width:2;stroke-linecap:round;flex:none}.kl-search-in input{flex:1;border:0;outline:0;font:inherit;font-size:18px;color:var(--navy);background:none;min-width:0}.kl-search-in kbd{font:inherit;font-size:11px;color:var(--muted);border:1px solid var(--line);border-radius:5px;padding:2px 6px}.kl-search-res{max-height:min(60vh,520px);overflow-y:auto;padding:8px}.kl-search-res h6{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:10px 12px 6px}.kl-search-res a{display:flex;align-items:center;gap:14px;padding:10px 12px;border-radius:10px}.kl-search-res a[aria-selected=\"true\"],.kl-search-res a:hover{background:var(--grey-2)}.kl-search-res a img,.kl-search-res a .ic{width:44px;height:44px;border-radius:8px;object-fit:cover;background:var(--grey-2);flex:none;display:grid;place-items:center;font-weight:800;color:var(--orange-deep)}.kl-search-res a b{display:block;font-size:14px;font-weight:600;line-height:1.3}.kl-search-res a small{display:block;font-size:12px;color:var(--muted)}.kl-search-res mark{background:rgba(224,143,69,.25);color:inherit;border-radius:3px}.kl-search-res .empty{padding:24px 12px;color:var(--muted);font-size:14px;text-align:center}.kl-top{position:fixed;right:20px;bottom:20px;z-index:55;width:48px;height:48px;border-radius:50%;background:var(--navy);display:grid;place-items:center;box-shadow:var(--shadow-md);opacity:0;transform:translateY(20px) scale(.8);pointer-events:none;transition:opacity .3s,transform .45s var(--ease),background .25s}.kl-top.show{opacity:1;transform:none;pointer-events:auto}.kl-top:hover{background:var(--orange)}.kl-top svg{width:20px;height:20px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.kl-top:hover svg{stroke:var(--navy)}.kl-body.kl-has-sticky .kl-top{bottom:96px}.kl-demo{position:fixed;left:16px;bottom:16px;z-index:54;font-size:11px;font-weight:600;letter-spacing:.02em;padding:7px 12px;border-radius:999px;background:rgba(33,30,54,.82);color:#fff;backdrop-filter:blur(6px);pointer-events:none;box-shadow:var(--shadow-md)}.kl-demo::before{content:\"\";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--orange);margin-right:8px;vertical-align:1px}.kl-body.kl-has-sticky .kl-demo{bottom:92px}@media (max-width:760px){.kl-demo{bottom:12px;left:12px;font-size:10px}}.kl-foot-cta{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap;padding-bottom:56px;margin-bottom:56px;border-bottom:1px solid rgba(255,255,255,.12)}.kl-foot-cta .h-section{color:#fff;margin-top:14px}.kl-foot-grid{grid-template-columns:1.6fr 1fr 1fr 1fr 1fr!important}.kl-foot-grid a{transition:color .2s,transform .3s var(--ease),opacity .2s}.kl-foot-grid a:hover{transform:translateX(4px)}.kl-foot-hours{display:block;font-size:13px;opacity:.55;margin-top:6px}.kl-footer .k svg{transition:transform 1.2s var(--ease)}.kl-footer:hover .k svg{transform:rotate(-8deg) scale(1.05)}@media (max-width:1080px){.kl-foot-grid{grid-template-columns:1fr 1fr 1fr!important}}@media (max-width:760px){.kl-foot-grid{grid-template-columns:1fr 1fr!important}.kl-foot-grid>div:first-child{grid-column:1/-1}}.btn-navy{background:var(--navy);color:var(--white)}.btn{position:relative;overflow:hidden;isolation:isolate;transition:transform .3s var(--ease),background .3s,color .3s,border-color .3s,box-shadow .3s}.btn::after{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:inherit;transform:translateX(-102%) skewX(-12deg);transition:transform .55s var(--ease)}.btn:hover::after{transform:translateX(0) skewX(0)}.btn-orange::after{background:var(--orange-deep)}.btn-navy::after{background:var(--navy-2)}.btn:hover{box-shadow:0 14px 30px -14px rgba(33,30,54,.5)}.btn:active{transform:scale(.97)}.btn:hover .arrow{transform:translateX(5px)}.btn .arrow{transition:transform .35s var(--ease)}.kl-magnet{will-change:transform}main p a:not(.btn):not([class]){background:linear-gradient(currentColor,currentColor) 0 100%/0 1.5px no-repeat;transition:background-size .35s var(--ease)}main p a:not(.btn):not([class]):hover{background-size:100% 1.5px}.kl-lift{transition:transform .5s var(--ease),box-shadow .5s var(--ease)}.kl-lift:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}.kl-zoom img{transition:transform 1.1s var(--ease)!important}.kl-zoom:hover img,.kl-lift:hover .kl-zoom img{transform:scale(1.06)}img.kl-fade{opacity:0;transition:opacity .7s var(--ease)}img.kl-fade.kl-loaded{opacity:1}:host.kl-js [data-kl-rv]{opacity:0;transform:translateY(32px);transition:opacity .9s var(--ease),transform 1s var(--ease);transition-delay:calc(var(--i,0)*80ms)}:host.kl-js [data-kl-rv=\"left\"]{transform:translateX(-36px)}:host.kl-js [data-kl-rv=\"right\"]{transform:translateX(36px)}:host.kl-js [data-kl-rv=\"scale\"]{transform:scale(.94)}:host.kl-js [data-kl-rv].kl-in{opacity:1;transform:none}:host.kl-js [data-kl-rv=\"img\"]{opacity:1;transform:none;clip-path:inset(0 0 100% 0);transition:clip-path 1.2s var(--ease-io)}:host.kl-js [data-kl-rv=\"img\"] img{transform:scale(1.15);transition:transform 1.6s var(--ease)}:host.kl-js [data-kl-rv=\"img\"].kl-in{clip-path:inset(0)}:host.kl-js [data-kl-rv=\"img\"].kl-in img{transform:none}:host.kl-js [data-kl-rv].kl-done{transition-delay:0s}.kl-split .kl-w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.1em;margin-bottom:-.1em}.kl-split .kl-w>span{display:inline-block;transform:translateY(110%);transition:transform 1s var(--ease);transition-delay:calc(var(--i,0)*55ms + 80ms)}.kl-split.kl-in .kl-w>span{transform:none}:host:not(.kl-js) .kl-split .kl-w>span{transform:none}@media (prefers-reduced-motion:reduce){::view-transition-old(root),::view-transition-new(root){animation:none}:host.kl-js [data-kl-rv],:host.kl-js [data-kl-rv] img,.kl-split .kl-w>span{opacity:1!important;transform:none!important;clip-path:none!important;transition:none!important}.kl-intro,.kl-curtain{display:none!important}.kl-lift:hover,.btn:hover .arrow{transform:none}.btn::after{display:none}}.kl-opt{display:flex;flex-direction:column;gap:10px;margin:18px 0 6px}.kl-opt>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.kl-opt>div{display:flex;flex-wrap:wrap;gap:8px}.kl-opt button{font:600 14px/1 var(--body);padding:11px 16px;border-radius:999px;border:1.5px solid var(--grey);background:#fff;color:var(--navy);cursor:pointer;transition:border-color .2s,background .2s,color .2s,transform .2s var(--ease)}.kl-opt button:hover{border-color:var(--orange);transform:translateY(-1px)}.kl-opt button.on{background:var(--navy);border-color:var(--navy);color:#fff}.kl-share{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 4px}.kl-share>span{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-right:4px}.kl-share a,.kl-share button{font:600 13px/1 var(--body);padding:9px 13px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);border:0;cursor:pointer;transition:background .2s,color .2s}.kl-share a:hover,.kl-share button:hover{background:var(--navy);color:#fff}.kl-mail{background:var(--white);padding:clamp(56px,7vw,100px) 0}.kl-mail-head{margin-bottom:28px}.kl-mail-head .h-section{margin-top:14px}.kl-mail-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.kl-mail-grid a{display:flex;flex-direction:column;gap:6px;padding:22px;border-radius:18px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .25s,color .25s,transform .3s var(--ease)}.kl-mail-grid a:hover{background:var(--navy);color:#fff;transform:translateY(-3px)}.kl-mail-grid small{font-size:12px;letter-spacing:.1em;text-transform:uppercase;opacity:.65}.kl-mail-grid b{font-size:17px;font-weight:700;overflow-wrap:anywhere}.kl-mail-soc{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}.kl-mail-soc>div{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:18px 22px;border:1.5px solid var(--grey);border-radius:18px}.kl-mail-soc small{flex-basis:100%;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange-deep)}.kl-mail-soc a{font-weight:600;font-size:14px;padding:8px 14px;border-radius:999px;background:var(--grey-2,#F1F0EE);color:var(--navy);transition:background .2s,color .2s}.kl-mail-soc a:hover{background:var(--orange);color:var(--navy)}@media (max-width:900px){.kl-mail-grid{grid-template-columns:1fr 1fr}.kl-mail-soc{grid-template-columns:1fr}}@media (max-width:520px){.kl-mail-grid{grid-template-columns:1fr}}a.brands{display:block;text-decoration:none}a.brands:hover .track{animation-play-state:paused}.kl-rev{background:var(--grey-2,#F1F0EE);padding:clamp(64px,8vw,120px) 0}.kl-rev-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:8px}.kl-rev figure{margin:0;background:#fff;border-radius:22px;padding:30px 28px;display:flex;flex-direction:column;justify-content:space-between;gap:26px;position:relative;transition:transform .4s var(--ease),box-shadow .4s}.kl-rev figure::before{content:\"“\";position:absolute;top:6px;right:22px;font:800 90px/1 var(--head);color:var(--orange);opacity:.35}.kl-rev figure:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}.kl-rev blockquote{margin:0;font-size:16px;line-height:1.6;color:var(--navy)}.kl-rev figcaption{display:grid;grid-template-columns:auto 1fr;column-gap:12px;align-items:center}.kl-rev .av{grid-row:span 2;width:46px;height:46px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:800;font-size:14px}.kl-rev figcaption b{font-size:15px}.kl-rev figcaption small{font-size:13px;color:var(--muted)}.kl-blogt{background:var(--white);padding:clamp(64px,8vw,120px) 0}.kl-blogt-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.kl-blogt-grid a{display:flex;flex-direction:column;gap:10px;color:var(--navy)}.kl-blogt-grid img{width:100%;aspect-ratio:16/11;object-fit:cover;border-radius:18px;transition:transform .6s var(--ease),filter .4s}.kl-blogt-grid a:hover img{transform:scale(1.03);filter:saturate(1.1)}.kl-blogt-grid small{font-size:12px;color:var(--muted);letter-spacing:.06em}.kl-blogt-grid b{font-size:17px;line-height:1.35;transition:color .2s}.kl-blogt-grid a:hover b{color:var(--orange-deep)}@media (max-width:1000px){.kl-rev-grid{grid-template-columns:1fr}.kl-blogt-grid{grid-template-columns:1fr 1fr}}@media (max-width:560px){.kl-blogt-grid{grid-template-columns:1fr}}.kl-lang{display:flex;align-items:center;gap:2px;padding:3px;border-radius:999px;background:rgba(33,30,54,.06);margin-right:6px}.kl-lang a{font:700 12px/1 var(--body);letter-spacing:.04em;padding:7px 10px;border-radius:999px;color:var(--navy);opacity:.6;transition:background .25s,opacity .25s,color .25s}.kl-lang a:hover{opacity:1}.kl-lang a.on{background:var(--navy);color:#fff;opacity:1}.kl-lang-m{margin:0 0 14px;margin-right:0;align-self:stretch;background:rgba(255,255,255,.08)}.kl-lang-m a{flex:1;text-align:center;color:#fff;font-size:13px;padding:10px 14px}.kl-lang-m a.on{background:var(--orange);color:var(--navy)}@media (max-width:1100px){.nav .kl-lang:not(.kl-lang-m){display:none}}.kl-icon-btn{position:relative}.kl-cart-n{position:absolute;top:-6px;right:-6px;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:var(--orange);color:var(--navy);font:800 10.5px/19px var(--body);text-align:center;box-shadow:0 0 0 2px #fff;pointer-events:none}.kl-cart-n.bump{animation:kl-bump .45s var(--ease)}@keyframes kl-bump{40%{transform:scale(1.35)}}.kl-added{position:fixed;left:50%;bottom:24px;z-index:95;display:flex;gap:16px;align-items:center;background:var(--navy);color:#fff;padding:12px 14px 12px 18px;border-radius:14px;font-size:14px;font-weight:600;box-shadow:0 18px 40px -16px rgba(33,30,54,.7);transform:translate(-50%,160%);opacity:0;transition:transform .4s var(--ease),opacity .3s;max-width:calc(100vw - 32px)}.kl-added.show{transform:translate(-50%,0);opacity:1}.kl-added a{background:var(--orange);color:var(--navy);padding:8px 12px;border-radius:10px;white-space:nowrap}.kl-qdel svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle}.kl-qdel:hover{color:#C0392B}","html":{"ru":{"page":"\n <!-- LISTING --><div class=\"view on\" id=\"vList\"><div class=\"wrap\"><nav class=\"crumbs\"><a href=\"/\">Главная</a> / Блог</nav><div class=\"b-head\"><div><h1>Блог <span>Kashlux</span></h1><p>Советы по выбору сантехники, отопления и водоподготовки — от наших инженеров и дизайнеров.</p></div><label class=\"search\"><svg viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M20 20l-4-4\"/></svg><input id=\"q\" type=\"search\" placeholder=\"Поиск по статьям\" aria-label=\"Поиск по статьям\"></label></div><div class=\"cats\" id=\"cats\"></div><div id=\"featBox\"></div><div class=\"posts\" id=\"posts\"></div><div class=\"more\" id=\"more\"><button class=\"btn btn-navy\" id=\"moreBtn\">Показать ещё</button></div></div></div><!-- ARTICLE --><div class=\"view\" id=\"vPost\"><div class=\"wrap a-hero\"><a href=\"#\" class=\"back\" id=\"back\">← Все статьи</a><div class=\"meta\" id=\"aMeta\"></div><h1 id=\"aTitle\"></h1><p class=\"lead2\" id=\"aLead\"></p><div class=\"author\"><div class=\"av\"><svg viewBox=\"0 0 460 466\"><path d=\"M456.36 462.43L277.61 462.43L141.41 294.13L6.37 455.03L6.37 6.20L111.72 6.20L111.72 204.87L303.46 6.20L427.92 6.08L174.44 269.10L297.91 269.10L456.36 462.43Z\"/></svg></div><div><b id=\"aAuthor\">Редакция Kashlux</b><span id=\"aRole\">Инженеры и дизайнеры Kashlux</span></div></div></div><div class=\"wrap\"><div class=\"a-cover\"><img id=\"aCover\" alt=\"\"></div></div><div class=\"wrap a-layout\"><aside class=\"toc\"><h4>Содержание</h4><nav id=\"toc\"></nav><div class=\"share\"><button id=\"copy\" title=\"Скопировать ссылку\" aria-label=\"Скопировать ссылку\">🔗</button><a href=\"#\" title=\"Telegram\" aria-label=\"Поделиться в Telegram\">TG</a><a href=\"#\" title=\"Facebook\" aria-label=\"Поделиться в Facebook\">FB</a></div></aside><article><div class=\"body\" id=\"aBody\"></div><div class=\"feedback\"><span>Статья была полезной?</span><div><button data-fb=\"1\">👍 Да</button><button data-fb=\"0\">👎 Нет</button></div></div></article><aside class=\"side\"><div class=\"cta\"><b>Нужна консультация?</b><p>Инженер или дизайнер ответит на вопросы по вашему проекту.</p><a href=\"/help-design#request\" class=\"btn\">Задать вопрос</a></div><div><h4>Читайте также</h4><div class=\"mini\" id=\"sideRel\"></div></div></aside></div><section class=\"related\"><div class=\"wrap\"><div class=\"sec-head\" style=\"margin-bottom:28px\"><div><span class=\"eyebrow\">Ещё по теме</span><h2 class=\"h-section\">Похожие <em>статьи</em></h2></div></div><div class=\"posts\" id=\"related\"></div></div></section></div>\n"},"uz":{"page":"\n <!-- LISTING --><div class=\"view on\" id=\"vList\"><div class=\"wrap\"><nav class=\"crumbs\"><a href=\"/\">Boş sahifa</a> / Blog</nav><div class=\"b-head\"><div><h1>Blog <span>Kashlux</span></h1><p>Santexnika, isitiş va suv tayyorlaş uskunalarini tanlaş böyiça maslahatlar — muhandis va dizaynerlarimizdan.</p></div><label class=\"search\"><svg viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M20 20l-4-4\"/></svg><input id=\"q\" type=\"search\" placeholder=\"Maqolalar böyiça qidiruv\" aria-label=\"Maqolalar böyiça qidiruv\"></label></div><div class=\"cats\" id=\"cats\"></div><div id=\"featBox\"></div><div class=\"posts\" id=\"posts\"></div><div class=\"more\" id=\"more\"><button class=\"btn btn-navy\" id=\"moreBtn\">Yana körsatiş</button></div></div></div><!-- ARTICLE --><div class=\"view\" id=\"vPost\"><div class=\"wrap a-hero\"><a href=\"#\" class=\"back\" id=\"back\">← Barça maqolalar</a><div class=\"meta\" id=\"aMeta\"></div><h1 id=\"aTitle\"></h1><p class=\"lead2\" id=\"aLead\"></p><div class=\"author\"><div class=\"av\"><svg viewBox=\"0 0 460 466\"><path d=\"M456.36 462.43L277.61 462.43L141.41 294.13L6.37 455.03L6.37 6.20L111.72 6.20L111.72 204.87L303.46 6.20L427.92 6.08L174.44 269.10L297.91 269.10L456.36 462.43Z\"/></svg></div><div><b id=\"aAuthor\">Kashlux tahririyati</b><span id=\"aRole\">Kashlux muhandislari va dizaynerlari</span></div></div></div><div class=\"wrap\"><div class=\"a-cover\"><img id=\"aCover\" alt=\"\"></div></div><div class=\"wrap a-layout\"><aside class=\"toc\"><h4>Mundarija</h4><nav id=\"toc\"></nav><div class=\"share\"><button id=\"copy\" title=\"Havolani nusxalaş\" aria-label=\"Havolani nusxalaş\">🔗</button><a href=\"#\" title=\"Telegram\" aria-label=\"Telegramda ulaşiş\">TG</a><a href=\"#\" title=\"Facebook\" aria-label=\"Facebookda ulaşiş\">FB</a></div></aside><article><div class=\"body\" id=\"aBody\"></div><div class=\"feedback\"><span>Maqola foydali böldimi?</span><div><button data-fb=\"1\">👍 Ha</button><button data-fb=\"0\">👎 Yöq</button></div></div></article><aside class=\"side\"><div class=\"cta\"><b>Maslahat kerakmi?</b><p>Muhandis yoki dizayner loyihangiz böyiça savollarga javob beradi.</p><a href=\"/help-design#request\" class=\"btn\">Savol beriş</a></div><div><h4>Şuningdek öqing</h4><div class=\"mini\" id=\"sideRel\"></div></div></aside></div><section class=\"related\"><div class=\"wrap\"><div class=\"sec-head\" style=\"margin-bottom:28px\"><div><span class=\"eyebrow\">Mavzu böyiça yana</span><h2 class=\"h-section\">Öxşaş <em>maqolalar</em></h2></div></div><div class=\"posts\" id=\"related\"></div></div></section></div>\n"}},"js":{"ru":{"page":["\n\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\n\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\n\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n\n\n\nconst W=(id,w,h)=>`https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_auto/b.jpg`;\nconst PROD={boiler:'https://static.wixstatic.com/media/a8ce0d_6de37fb3e75645ecbd39456cbc71f466~mv2.webp',soft:'https://static.wixstatic.com/media/a8ce0d_bd508f5df4a64dcea2b71a0044cbd3f1~mv2.png'};\nconst img=(p,w,h)=>p.prod?PROD[p.prod]:W(p.img,w,h);\nconst CATS={tips:'Советы',design:'Дизайн',heat:'Отопление',water:'Водоподготовка'};\n// sample articles for the concept; first four topics come from the current kashlux.uz blog\nconst P=[\n {s:'shower-or-bath',c:'tips',t:'Душевая кабина или ванна: что выбрать',d:'2024-03-30',img:'a8ce0d_536d40efc039475cade0100c76988b72~mv2.jpg',feat:1,views:3200,\n  l:'Разбираем плюсы и минусы обоих вариантов: площадь, расход воды, уход и удобство для всей семьи.',\n  b:[['Сколько места у вас есть','Душевой уголок занимает от 80×80 см, стандартная ванна — около 170×70 см. В санузле до 4 м² душ освобождает место для тумбы с раковиной и системы хранения.'],\n     ['Расход воды и бюджет','Пятиминутный душ расходует в 2–3 раза меньше воды, чем наполненная ванна. Но если в доме есть маленькие дети, ванна часто оказывается удобнее.',['Душ: быстрее и экономнее','Ванна: для отдыха и купания детей','Комбинация: ванна со стеклянной шторкой']],\n     ['Уход и безопасность','Поддон на уровне пола и поручень делают душ безопаснее для пожилых членов семьи. Стекло с защитным покрытием почти не требует ухода.'],\n     ['Итог','Нет универсального ответа: решают площадь, состав семьи и привычки. Приходите в шоурум — у нас можно сравнить оба варианта вживую.','callout']]},\n {s:'shower-cabins',c:'tips',t:'Удобство душевых кабин: на что смотреть при выборе',d:'2024-03-30',img:'a8ce0d_433252a6d592416e9c50f38a13b26f59~mv2.jpg',views:1800,\n  l:'Поддон, стекло, тип дверей и душевая система — короткий чек-лист перед покупкой.',\n  b:[['Поддон или трап','Трап в полу выглядит современно и удобен, но требует подготовки стяжки. Низкий поддон проще в монтаже.'],\n     ['Стекло и двери',  'Выбирайте закалённое стекло от 6 мм. Распашные двери удобны в просторных санузлах, раздвижные — в компактных.',['Прозрачное — визуально расширяет','Матовое — больше приватности','Тонированное — акцент в интерьере']],\n     ['Душевая система','Термостат держит температуру при скачках давления — важно для домов с собственной котельной.']]},\n {s:'grab-bars',c:'tips',t:'Поручни в ванной: плюсы и недостатки',d:'2024-03-30',img:'a8ce0d_657382d3d8ac459c88a6cb56ea4291ca~mv2.jpg',views:900,\n  l:'Когда поручни действительно нужны, где их размещать и как сделать так, чтобы они не портили интерьер.',\n  b:[['Кому они нужны','Поручни снижают риск падения для пожилых людей, детей и всех, кто восстанавливается после травм.'],\n     ['Где размещать','У унитаза, в душевой зоне и у ванны — на высоте 80–90 см от пола. Крепление — только в несущую стену или закладную.'],\n     ['Минусы','Дешёвые модели выглядят «больнично». Решение — поручни в той же отделке, что и смесители: хром, латунь или матовый чёрный.','callout']]},\n {s:'decor',c:'design',t:'Декоративные элементы ванной: как не ошибиться',d:'2024-03-31',img:'a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg',views:1400,\n  l:'Аксессуары, свет и текстиль, которые делают ванную законченной — и ошибки, которых стоит избегать.',\n  b:[['Единый стиль металла','Смесители, держатели и ручки мебели должны быть в одной отделке — это самое простое правило цельного интерьера.'],\n     ['Свет в три слоя','Общий потолочный, функциональный у зеркала и декоративная подсветка ниш.',['Зеркало с подсветкой','Подсветка ниш и полок','Тёплый свет 2700–3000 K']],\n     ['Чего избегать','Слишком много мелких предметов на виду. Закрытое хранение делает пространство спокойнее.']]},\n {s:'boiler-power',c:'heat',t:'Как выбрать мощность газового котла',d:'2026-10-14',prod:'boiler',views:2600,\n  l:'Простая формула, поправки на утепление и горячую воду — и почему «с запасом» не всегда лучше.',\n  b:[['Базовая формула','Ориентир — 1 кВт на 10 м² при высоте потолков до 3 м. Для дома 180 м² это около 18 кВт.'],\n     ['Поправки','Добавьте 15–20% на горячую воду для двухконтурного котла и учтите утепление дома.',['Хорошее утепление: −10–15%','Старый дом без утепления: +20–30%','Тёплые полы: проверьте расчёт контура']],\n     ['Почему не «с большим запасом»','Слишком мощный котёл чаще включается и выключается, быстрее изнашивается и тратит больше газа.','product'],\n     ['Совет инженера','Точную мощность лучше рассчитать по теплопотерям — инженеры Kashlux Comfort делают это бесплатно.','callout']]},\n {s:'hard-water',c:'water',t:'Жёсткая вода: зачем нужна водоподготовка',d:'2026-09-22',prod:'soft',views:2100,\n  l:'Как накипь сокращает срок службы котла и смесителей — и какие фильтры решают проблему.',\n  b:[['Чем опасна жёсткая вода','Соли кальция и магния оседают на теплообменнике котла и в картриджах смесителей. Даже 1 мм накипи заметно снижает эффективность нагрева.'],\n     ['Какие бывают решения',  'Выбор зависит от анализа воды и потребления.',['Механический фильтр — песок и ржавчина','Умягчитель — соли жёсткости','Фильтр питьевой воды — для кухни']],\n     ['С чего начать','Сделайте анализ воды — инженер подберёт систему под ваш дом и подключит её вместе с котлом.','callout']]},\n {s:'trends-2026',c:'design',t:'Тренды ванных комнат 2026',d:'2026-08-05',img:'a8ce0d_d9648fd4ba834381850f27dc535b57c3~mv2.jpg',views:3900,\n  l:'Тёплые металлы, скрытый монтаж и спа-атмосфера дома — что выбирают клиенты Kashlux в этом году.',\n  b:[['Тёплые металлы','Брашированное золото и бронза вытесняют холодный хром в премиальных интерьерах.'],\n     ['Скрытый монтаж','Встроенные смесители и инсталляции освобождают пространство и упрощают уборку.'],\n     ['Спа-атмосфера','Тропический душ, тёплый пол и мягкий свет превращают ванную в место отдыха.',['Тропические души 300+ мм','Тёплые полы в санузлах','Натуральный камень и дерево']]]},\n {s:'winter-boiler',c:'heat',t:'Как подготовить котёл к зиме',d:'2026-10-28',img:'a8ce0d_7ba72eb4dcc1496da6d36c9843635105~mv2.jpg',views:1200,\n  l:'Чек-лист из 6 пунктов, который стоит пройти до начала отопительного сезона.',\n  b:[['Почему это важно','Проблемы с котлом чаще всего проявляются в первые холодные дни — когда мастера максимально заняты.'],\n     ['Чек-лист',  'Пройдите эти шаги в сентябре–октябре.',['Проверить давление в системе','Осмотреть дымоход','Почистить фильтры','Проверить работу насоса','Обновить прошивку и настройки','Заказать плановое ТО']],\n     ['Сервис по подписке','Годовой тариф ТО Kashlux Comfort включает осмотр котла до начала сезона.','callout']]}\n];\nP.forEach(p=>{const words=(p.l+' '+p.b.map(x=>x[1]+' '+(Array.isArray(x[2])?x[2].join(' '):'')).join(' ')).split(/\\s+/).length;p.min=Math.max(3,Math.round(words/40))});\nconst MN=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];\nconst fd=d=>{const x=new Date(d);return `${x.getDate()} ${MN[x.getMonth()]} ${x.getFullYear()}`};\nconst $=id=>document.getElementById(id);\nlet st={cat:'',q:'',limit:6};\n\nfunction card(p){return `<button class=\"post\" data-s=\"${p.s}\"><div class=\"im\"><img class=\"${p.prod?'prod':''}\" src=\"${img(p,800,500)}\" alt=\"\" loading=\"lazy\"><span class=\"tag\">${CATS[p.c]}</span></div><div class=\"bd\"><h3>${p.t}</h3><p>${p.l}</p><div class=\"meta\"><span>${fd(p.d)}</span><i></i><span>${p.min} мин</span></div></div></button>`}\nconst promo=`<div class=\"promo-tile\"><div class=\"pat-line\"></div><div><b>Полезное <span>раз в неделю</span></b><p>Подпишитесь на Telegram-канал Kashlux: советы, новинки и закрытые акции.</p></div><form id=\"sub\"><input type=\"email\" placeholder=\"Email или @username\" aria-label=\"Email или Telegram\" required><button class=\"btn btn-orange\">Подписаться</button></form><span class=\"ok\" id=\"subOk\">Спасибо! Ссылка на канал отправлена.</span></div>`;\n\nfunction list(){\n  // crude Russian matching: compare consonant skeletons from the word start,\n  // so «котёл» finds «котла» but not «которые»\n  const words=s=>s.toLowerCase().replace(/ё/g,'е').split(/[^a-zа-я0-9]+/).filter(Boolean);\n  const skel=w=>w.replace(/[аеиоуыэюяьъй]/g,'');\n  const q=st.q;\n  const qw=words(q).map(w=>({w,k:skel(w)}));\n  const pool=P.filter(p=>{const hw=words(p.t+' '+p.l+' '+CATS[p.c]);return qw.every(({w,k})=>hw.some(h=>h.startsWith(w)||(k.length>=2&&skel(h).startsWith(k))))});\n  $('cats').innerHTML=[['','Все',pool.length],...Object.entries(CATS).map(([k,v])=>[k,v,pool.filter(p=>p.c===k).length])].map(([k,v,n])=>`<button data-c=\"${k}\" class=\"${st.cat===k?'on':''}\">${v}<em>${n}</em></button>`).join('');\n  let items=pool.filter(p=>!st.cat||p.c===st.cat).sort((a,b)=>b.d.localeCompare(a.d));\n  const showFeat=!st.cat&&!q;\n  const f=P.find(p=>p.feat);\n  if(showFeat)items=items.filter(p=>p!==f);\n  $('featBox').innerHTML=showFeat?`<article class=\"feat\" data-s=\"${f.s}\"><div class=\"im\"><img src=\"${img(f,1200,900)}\" alt=\"\"></div><div class=\"bd\"><div class=\"pat-line\"></div><span class=\"tag\" style=\"align-self:flex-start\">Выбор редакции · ${CATS[f.c]}</span><h2>${f.t}</h2><p>${f.l}</p><div class=\"meta\"><span>${fd(f.d)}</span><i></i><span>${f.min} мин чтения</span><i></i><span>${f.views.toLocaleString('ru-RU')} просмотров</span></div></div></article>`:'';\n  const shown=items.slice(0,st.limit).map(card);\n  if(shown.length>=2&&!q)shown.splice(2,0,promo);\n  $('posts').innerHTML=items.length?shown.join(''):`<div class=\"none\"><b>Ничего не нашли</b>Попробуйте другой запрос или категорию.</div>`;\n  $('more').style.display=items.length>st.limit?'flex':'none';\n  const sub=$('sub');if(sub)sub.onsubmit=e=>{e.preventDefault();sub.style.display='none';$('subOk').style.display='block'};\n}\n\nfunction article(p){\n  $('aMeta').innerHTML=`<span class=\"tag\">${CATS[p.c]}</span><span>${fd(p.d)}</span><i></i><span>${p.min} мин чтения</span>`;\n  $('aTitle').textContent=p.t;$('aLead').textContent=p.l;\n  $('aCover').className=p.prod?'prod':'';$('aCover').src=img(p,1600,700);\n  $('aRole').textContent=p.c==='design'?'Дизайнеры Kashlux Design':p.c==='tips'?'Консультанты шоурумов Kashlux':'Инженеры Kashlux Comfort';\n  $('toc').innerHTML=p.b.map((x,i)=>`<a href=\"#sec-${i}\" data-sec=\"${i}\">${x[0]}</a>`).join('');\n  $('aBody').innerHTML=p.b.map((x,i)=>{\n    const list=Array.isArray(x[2])?`<ul>${x[2].map(li=>`<li>${li}</li>`).join('')}</ul>`:'';\n    if(x[2]==='callout')return `<h2 id=\"sec-${i}\">${x[0]}</h2><div class=\"callout\"><div class=\"pat-line\"></div><b>Совет Kashlux</b><p>${x[1]}</p></div>`;\n    const prod=x[2]==='product'?`<div class=\"pcard\"><div class=\"im\"><img src=\"${PROD.boiler}\" alt=\"\"></div><div><small>BUDERUS</small><b>Котёл Logamax plus GB272 · 14–50 кВт</b><strong>от 21 900 000 сум</strong></div><a href=\"/category/all-products\" class=\"btn btn-orange\">Подобрать мощность</a></div>`:'';\n    return `<h2 id=\"sec-${i}\">${x[0]}</h2><p>${x[1]}</p>${list}${prod}`;\n  }).join('');\n  const rel=P.filter(r=>r!==p).sort((a,b)=>(b.c===p.c)-(a.c===p.c)||b.views-a.views).slice(0,3);\n  $('related').innerHTML=rel.map(card).join('');\n  $('sideRel').innerHTML=rel.map(r=>`<button data-s=\"${r.s}\"><div class=\"im\"><img class=\"${r.prod?'prod':''}\" src=\"${img(r,200,200)}\" alt=\"\"></div><b>${r.t}</b></button>`).join('');\n  document.querySelectorAll('[data-fb]').forEach(b=>b.classList.remove('on'));\n  document.title=p.t+' — Блог Kashlux';\n  secObs();\n}\n\n// highlight the last section heading that has scrolled past the header\nfunction secObs(){\n  const hs=[...document.querySelectorAll('#aBody h2')];\n  let cur=0;hs.forEach((h,i)=>{if(h.getBoundingClientRect().top<innerHeight*.35)cur=i});\n  document.querySelectorAll('#toc a').forEach(a=>a.classList.toggle('on',+a.dataset.sec===cur));\n}\n\nfunction route(){\n  const m=location.hash.match(/^#\\/(.+)/);const p=m&&P.find(x=>x.s===m[1]);\n  $('vList').classList.toggle('on',!p);$('vPost').classList.toggle('on',!!p);\n  if(p)article(p);else{document.title='Блог — Kashlux';list()}\n  scrollTo(0,0);progress();\n}\nfunction progress(){\n  if(!$('vPost').classList.contains('on')){$('progress').style.width=0;return}\n  const a=document.querySelector('#vPost article').getBoundingClientRect();\n  const pct=Math.min(1,Math.max(0,(innerHeight*.3-a.top)/(a.height-innerHeight*.4)));\n  $('progress').style.width=pct*100+'%';\n  secObs();\n}\naddEventListener('scroll',progress,{passive:true});\naddEventListener('hashchange',route);\n\ndocument.addEventListener('click',e=>{\n  const s=e.target.closest('[data-s]');if(s){location.hash='/'+s.dataset.s;return}\n  const c=e.target.closest('#cats [data-c]');if(c){st.cat=c.dataset.c;st.limit=6;list()}\n  const t=e.target.closest('#toc a');if(t){e.preventDefault();document.getElementById('sec-'+t.dataset.sec).scrollIntoView({behavior:'smooth'})}\n  const f=e.target.closest('[data-fb]');if(f){document.querySelectorAll('[data-fb]').forEach(b=>b.classList.toggle('on',b===f))}\n});\n$('back').onclick=e=>{e.preventDefault();location.hash=''};\n$('moreBtn').onclick=()=>{st.limit+=6;list()};\nlet qt;$('q').addEventListener('input',e=>{clearTimeout(qt);qt=setTimeout(()=>{st.q=e.target.value.trim();st.limit=6;list()},200)});\n$('copy').onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(location.href).catch(()=>{});const t=$('toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)};\nroute();\n"]},"uz":{"page":["\n\nconst hdr=document.getElementById('hdr');\nconst onScroll=()=>hdr.classList.toggle('solid',scrollY>10);\naddEventListener('scroll',onScroll,{passive:true});onScroll();\n\nconst drawer=document.getElementById('drawer');\ndocument.getElementById('burger').onclick=()=>drawer.classList.add('open');\ndocument.getElementById('close').onclick=()=>drawer.classList.remove('open');\ndrawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));\n\ndocument.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on')});\n\n\n\nconst W=(id,w,h)=>`https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_auto/b.jpg`;\nconst PROD={boiler:'https://static.wixstatic.com/media/a8ce0d_6de37fb3e75645ecbd39456cbc71f466~mv2.webp',soft:'https://static.wixstatic.com/media/a8ce0d_bd508f5df4a64dcea2b71a0044cbd3f1~mv2.png'};\nconst img=(p,w,h)=>p.prod?PROD[p.prod]:W(p.img,w,h);\nconst CATS={tips:'Maslahatlar',design:'Dizayn',heat:'Isitiş',water:'Suv tayyorlaş'};\n// sample articles for the concept; first four topics come from the current kashlux.uz blog\nconst P=[\n {s:'shower-or-bath',c:'tips',t:'Duş kabinasi yoki vanna: qaysi birini tanlaş kerak',d:'2024-03-30',img:'a8ce0d_536d40efc039475cade0100c76988b72~mv2.jpg',feat:1,views:3200,\n  l:'Ikkala variantning afzallik va kamçiliklarini tahlil qilamiz: maydon, suv sarfi, parvariş va butun oila uçun qulaylik.',\n  b:[['Sizda qança joy bor','Duş burçagi kamida 80×80 sm joy egallaydi, standart vanna — taxminan 170×70 sm. 4 m² gaça bölgan sanuzelda duş rakovinali tumba va saqlaş tizimi uçun joy böşatadi.'],\n     ['Suv sarfi va byudjet','Beş daqiqalik duş töldirilgan vannaga qaraganda 2–3 baravar kam suv sarflaydi. Ammo uyda kiçik bolalar bölsa, vanna köpinça qulayroq böladi.',['Duş: tezroq va tejamliroq','Vanna: dam oliş va bolalarni çömiltiriş uçun','Kombinatsiya: şişa pardali vanna']],\n     ['Parvariş va xavfsizlik','Pol sathidagi poddon va tutqiç duşni oiladagi keksalar uçun xavfsizroq qiladi. Himoya qoplamali şişa deyarli parvariş talab qilmaydi.'],\n     ['Natija','Universal javob yöq: maydon, oila tarkibi va odatlar hal qiladi. Şourumga keling — bizda ikkala variantni jonli soliştiriş mumkin.','callout']]},\n {s:'shower-cabins',c:'tips',t:'Duş kabinalarining qulayligi: tanlaşda nimaga eʼtibor beriş kerak',d:'2024-03-30',img:'a8ce0d_433252a6d592416e9c50f38a13b26f59~mv2.jpg',views:1800,\n  l:'Poddon, şişa, eşik turi va duş tizimi — xariddan oldin qisqa nazorat röyxati.',\n  b:[['Poddon yoki trap','Poldagi trap zamonaviy körinadi va qulay, lekin styajkani tayyorlaşni talab qiladi. Past poddonni örnatiş osonroq.'],\n     ['Şişa va eşiklar',  'Qalinligi 6 mm dan boşlanadigan toblangan şişani tanlang. Oçiladigan eşiklar keng sanuzellarda, surma eşiklar esa ixçamlarida qulay.',['Şaffof — vizual kengaytiradi','Mat — köproq maxfiylik','Tonlangan — interyerdagi urğu']],\n     ['Duş tizimi','Termostat bosim özgarganda haroratni uşlab turadi — öz qozonxonasi bor uylar uçun muhim.']]},\n {s:'grab-bars',c:'tips',t:'Vannaxonadagi tutqiçlar: afzalliklari va kamçiliklari',d:'2024-03-30',img:'a8ce0d_657382d3d8ac459c88a6cb56ea4291ca~mv2.jpg',views:900,\n  l:'Tutqiçlar qaçon haqiqatan kerak, ularni qayerga joylaştiriş va interyerni buzmasligi uçun nima qiliş kerak.',\n  b:[['Ular kimga kerak','Tutqiçlar keksalar, bolalar va jarohatdan tiklanayotgan har bir kişi uçun yiqiliş xavfini kamaytiradi.'],\n     ['Qayerga joylaştiriş','Unitaz yonida, duş zonasida va vanna yonida — poldan 80–90 sm balandlikda. Mahkamlaş — faqat yuk kötaruvçi devorga yoki örnatma detalga.'],\n     ['Kamçiliklari','Arzon modellar «kasalxonadek» körinadi. Yeçim — aralaştirgiçlar bilan bir xil pardozdagi tutqiçlar: xrom, latun yoki mat qora.','callout']]},\n {s:'decor',c:'design',t:'Vannaxonaning dekorativ elementlari: qanday qilib xato qilmaslik',d:'2024-03-31',img:'a8ce0d_cc5054ebce66467a995f85ecab68b9af~mv2.jpg',views:1400,\n  l:'Vannaxonani töliq qiladigan aksessuarlar, yoritiş va tekstil — hamda yöl qöymaslik kerak bölgan xatolar.',\n  b:[['Metallning yagona uslubi','Aralaştirgiçlar, tutqiçlar va mebel dastaklari bir xil pardozda bölişi kerak — bu yaxlit interyerning eng oddiy qoidasi.'],\n     ['Uç qatlamli yoruğlik','Umumiy şift yoritgiçi, oyna yonida funksional yoritiş va tokçalarning dekorativ yoritilişi.',['Yoritgiçli oyna','Tokça va javonlarning yoritilişi','Iliq yoruğlik 2700–3000 K']],\n     ['Nimadan qoçiş kerak','Köz oldida mayda buyumlar juda köp. Yopiq saqlaş makonni osoyiştaroq qiladi.']]},\n {s:'boiler-power',c:'heat',t:'Gaz qozonining quvvatini qanday tanlaş kerak',d:'2026-10-14',prod:'boiler',views:2600,\n  l:'Oddiy formula, issiqlik izolyatsiyasi va issiq suv uçun tuzatişlar — hamda nega «zaxira bilan» har doim ham yaxşi emas.',\n  b:[['Asosiy formula','Möljal — şift balandligi 3 m gaça bölganda 10 m² ga 1 kVt. 180 m² li uy uçun bu taxminan 18 kVt.'],\n     ['Tuzatişlar','Ikki konturli qozon uçun issiq suvga 15–20% qöşing va uyning issiqlik izolyatsiyasini hisobga oling.',['Yaxşi issiqlik izolyatsiyasi: −10–15%','Issiqlik izolyatsiyasiz eski uy: +20–30%','Issiq pollar: kontur hisobini tekşiring']],\n     ['Nega «katta zaxira bilan» emas','Haddan taşqari quvvatli qozon tez-tez yonib-öçadi, tezroq yeyiladi va köproq gaz sarflaydi.','product'],\n     ['Muhandis maslahati','Aniq quvvatni issiqlik yöqotişlari böyiça hisoblagan maʼqul — Kashlux Comfort muhandislari buni bepul qiladi.','callout']]},\n {s:'hard-water',c:'water',t:'Qattiq suv: suv tayyorlaş nima uçun kerak',d:'2026-09-22',prod:'soft',views:2100,\n  l:'Qasmoq qozon va aralaştirgiçlarning xizmat muddatini qanday qisqartiradi — va qaysi filtrlar muammoni hal qiladi.',\n  b:[['Qattiq suv nimasi bilan xavfli','Kalsiy va magniy tuzlari qozonning issiqlik almaştirgiçida va aralaştirgiç kartrijlarida çökadi. Hatto 1 mm qasmoq ham isitiş samaradorligini sezilarli pasaytiradi.'],\n     ['Qanday yeçimlar bor',  'Tanlov suv tahlili va isteʼmolga boğliq.',['Mexanik filtr — qum va zang','Yumşatgiç — qattiqlik tuzlariga qarşi','Içimlik suvi filtri — oşxona uçun']],\n     ['Nimadan boşlaş kerak','Suv tahlilini qiling — muhandis uyingizga mos tizimni tanlaydi va uni qozon bilan birga ulaydi.','callout']]},\n {s:'trends-2026',c:'design',t:'2026-yilgi hammom trendlari',d:'2026-08-05',img:'a8ce0d_d9648fd4ba834381850f27dc535b57c3~mv2.jpg',views:3900,\n  l:'Iliq metallar, yaşirin örnatiş va uyda spa muhiti — Kashlux mijozlari bu yil nimani tanlamoqda.',\n  b:[['Iliq metallar','Premium interyerlarda braşlangan oltin va bronza sovuq xromni siqib çiqarmoqda.'],\n     ['Yaşirin örnatiş','Devor içiga örnatiladigan aralaştirgiçlar va installyatsiyalar joyni böşatadi va tozalaşni osonlaştiradi.'],\n     ['Spa muhiti','Tropik duş, issiq pol va yumşoq yoruğlik hammomni dam oliş maskaniga aylantiradi.',['300+ mm tropik duşlar','Sanuzellarda issiq pollar','Tabiiy toş va yoğoç']]]},\n {s:'winter-boiler',c:'heat',t:'Qozonni qişga qanday tayyorlaş kerak',d:'2026-10-28',img:'a8ce0d_7ba72eb4dcc1496da6d36c9843635105~mv2.jpg',views:1200,\n  l:'Isitiş mavsumi boşlanişidan oldin bajariş kerak bölgan 6 banddan iborat çek-list.',\n  b:[['Bu nega muhim','Qozon bilan boğliq muammolar köpinça birinçi sovuq kunlarda — ustalar eng band bölgan paytda yuzaga çiqadi.'],\n     ['Çek-list',  'Uşbu qadamlarni sentyabr–oktyabr oylarida bajaring.',['Tizimdagi bosimni tekşiriş','Mörini közdan keçiriş','Filtrlarni tozalaş','Nasos işlaşini tekşiriş','Proşivka va sozlamalarni yangilaş','Rejali texnik xizmatga buyurtma beriş']],\n     ['Obuna asosidagi servis','Kashlux Comfort yillik texnik xizmat tarifi mavsum boşlanişidan oldin qozonni körikdan ötkazişni öz içiga oladi.','callout']]}\n];\nP.forEach(p=>{const words=(p.l+' '+p.b.map(x=>x[1]+' '+(Array.isArray(x[2])?x[2].join(' '):'')).join(' ')).split(/\\s+/).length;p.min=Math.max(3,Math.round(words/40))});\nconst MN=['yanvar','fevral','mart','aprel','may','iyun','iyul','avgust','sentyabr','oktyabr','noyabr','dekabr'];\nconst fd=d=>{const x=new Date(d);return `${x.getDate()} ${MN[x.getMonth()]} ${x.getFullYear()}`};\nconst $=id=>document.getElementById(id);\nlet st={cat:'',q:'',limit:6};\n\nfunction card(p){return `<button class=\"post\" data-s=\"${p.s}\"><div class=\"im\"><img class=\"${p.prod?'prod':''}\" src=\"${img(p,800,500)}\" alt=\"\" loading=\"lazy\"><span class=\"tag\">${CATS[p.c]}</span></div><div class=\"bd\"><h3>${p.t}</h3><p>${p.l}</p><div class=\"meta\"><span>${fd(p.d)}</span><i></i><span>${p.min} daq</span></div></div></button>`}\nconst promo=`<div class=\"promo-tile\"><div class=\"pat-line\"></div><div><b>Foydali <span>haftada bir marta</span></b><p>Kashlux Telegram-kanaliga obuna böling: maslahatlar, yangiliklar va yopiq aksiyalar.</p></div><form id=\"sub\"><input type=\"email\" placeholder=\"Email yoki @username\" aria-label=\"Email yoki Telegram\" required><button class=\"btn btn-orange\">Obuna böliş</button></form><span class=\"ok\" id=\"subOk\">Rahmat! Kanal havolasi yuborildi.</span></div>`;\n\nfunction list(){\n  // crude Russian matching: compare consonant skeletons from the word start,\n  // so «котёл» finds «котла» but not «которые»\n  const words=s=>s.toLowerCase().replace(/ё/g,'e').split(/[^a-zа-я0-9]+/).filter(Boolean);\n  const skel=w=>w.replace(/[аеиоуыэюяьъй]/g,'');\n  const q=st.q;\n  const qw=words(q).map(w=>({w,k:skel(w)}));\n  const pool=P.filter(p=>{const hw=words(p.t+' '+p.l+' '+CATS[p.c]);return qw.every(({w,k})=>hw.some(h=>h.startsWith(w)||(k.length>=2&&skel(h).startsWith(k))))});\n  $('cats').innerHTML=[['','Barçasi',pool.length],...Object.entries(CATS).map(([k,v])=>[k,v,pool.filter(p=>p.c===k).length])].map(([k,v,n])=>`<button data-c=\"${k}\" class=\"${st.cat===k?'on':''}\">${v}<em>${n}</em></button>`).join('');\n  let items=pool.filter(p=>!st.cat||p.c===st.cat).sort((a,b)=>b.d.localeCompare(a.d));\n  const showFeat=!st.cat&&!q;\n  const f=P.find(p=>p.feat);\n  if(showFeat)items=items.filter(p=>p!==f);\n  $('featBox').innerHTML=showFeat?`<article class=\"feat\" data-s=\"${f.s}\"><div class=\"im\"><img src=\"${img(f,1200,900)}\" alt=\"\"></div><div class=\"bd\"><div class=\"pat-line\"></div><span class=\"tag\" style=\"align-self:flex-start\">Tahririyat tanlovi · ${CATS[f.c]}</span><h2>${f.t}</h2><p>${f.l}</p><div class=\"meta\"><span>${fd(f.d)}</span><i></i><span>${f.min} daqiqa öqiş</span><i></i><span>${f.views.toLocaleString('ru-RU')} körişlar</span></div></div></article>`:'';\n  const shown=items.slice(0,st.limit).map(card);\n  if(shown.length>=2&&!q)shown.splice(2,0,promo);\n  $('posts').innerHTML=items.length?shown.join(''):`<div class=\"none\"><b>Heç narsa topilmadi</b>Boşqa sörov yoki toifani sinab köring.</div>`;\n  $('more').style.display=items.length>st.limit?'flex':'none';\n  const sub=$('sub');if(sub)sub.onsubmit=e=>{e.preventDefault();sub.style.display='none';$('subOk').style.display='block'};\n}\n\nfunction article(p){\n  $('aMeta').innerHTML=`<span class=\"tag\">${CATS[p.c]}</span><span>${fd(p.d)}</span><i></i><span>${p.min} daqiqa öqiş</span>`;\n  $('aTitle').textContent=p.t;$('aLead').textContent=p.l;\n  $('aCover').className=p.prod?'prod':'';$('aCover').src=img(p,1600,700);\n  $('aRole').textContent=p.c==='design'?'Kashlux Design dizaynerlari':p.c==='tips'?'Kashlux şourumlari maslahatçilari':'Kashlux Comfort muhandislari';\n  $('toc').innerHTML=p.b.map((x,i)=>`<a href=\"#sec-${i}\" data-sec=\"${i}\">${x[0]}</a>`).join('');\n  $('aBody').innerHTML=p.b.map((x,i)=>{\n    const list=Array.isArray(x[2])?`<ul>${x[2].map(li=>`<li>${li}</li>`).join('')}</ul>`:'';\n    if(x[2]==='callout')return `<h2 id=\"sec-${i}\">${x[0]}</h2><div class=\"callout\"><div class=\"pat-line\"></div><b>Kashlux maslahati</b><p>${x[1]}</p></div>`;\n    const prod=x[2]==='product'?`<div class=\"pcard\"><div class=\"im\"><img src=\"${PROD.boiler}\" alt=\"\"></div><div><small>BUDERUS</small><b>Logamax plus GB272 qozoni · 14–50 kVt</b><strong>21 900 000 sömdan</strong></div><a href=\"/category/all-products\" class=\"btn btn-orange\">Quvvatni tanlaş</a></div>`:'';\n    return `<h2 id=\"sec-${i}\">${x[0]}</h2><p>${x[1]}</p>${list}${prod}`;\n  }).join('');\n  const rel=P.filter(r=>r!==p).sort((a,b)=>(b.c===p.c)-(a.c===p.c)||b.views-a.views).slice(0,3);\n  $('related').innerHTML=rel.map(card).join('');\n  $('sideRel').innerHTML=rel.map(r=>`<button data-s=\"${r.s}\"><div class=\"im\"><img class=\"${r.prod?'prod':''}\" src=\"${img(r,200,200)}\" alt=\"\"></div><b>${r.t}</b></button>`).join('');\n  document.querySelectorAll('[data-fb]').forEach(b=>b.classList.remove('on'));\n  document.title=p.t+' — Kashlux blogi';\n  secObs();\n}\n\n// highlight the last section heading that has scrolled past the header\nfunction secObs(){\n  const hs=[...document.querySelectorAll('#aBody h2')];\n  let cur=0;hs.forEach((h,i)=>{if(h.getBoundingClientRect().top<innerHeight*.35)cur=i});\n  document.querySelectorAll('#toc a').forEach(a=>a.classList.toggle('on',+a.dataset.sec===cur));\n}\n\nfunction route(){\n  const m=location.hash.match(/^#\\/(.+)/);const p=m&&P.find(x=>x.s===m[1]);\n  $('vList').classList.toggle('on',!p);$('vPost').classList.toggle('on',!!p);\n  if(p)article(p);else{document.title='Blog — Kashlux';list()}\n  scrollTo(0,0);progress();\n}\nfunction progress(){\n  if(!$('vPost').classList.contains('on')){$('progress').style.width=0;return}\n  const a=document.querySelector('#vPost article').getBoundingClientRect();\n  const pct=Math.min(1,Math.max(0,(innerHeight*.3-a.top)/(a.height-innerHeight*.4)));\n  $('progress').style.width=pct*100+'%';\n  secObs();\n}\naddEventListener('scroll',progress,{passive:true});\naddEventListener('hashchange',route);\n\ndocument.addEventListener('click',e=>{\n  const s=e.target.closest('[data-s]');if(s){location.hash='/'+s.dataset.s;return}\n  const c=e.target.closest('#cats [data-c]');if(c){st.cat=c.dataset.c;st.limit=6;list()}\n  const t=e.target.closest('#toc a');if(t){e.preventDefault();document.getElementById('sec-'+t.dataset.sec).scrollIntoView({behavior:'smooth'})}\n  const f=e.target.closest('[data-fb]');if(f){document.querySelectorAll('[data-fb]').forEach(b=>b.classList.toggle('on',b===f))}\n});\n$('back').onclick=e=>{e.preventDefault();location.hash=''};\n$('moreBtn').onclick=()=>{st.limit+=6;list()};\nlet qt;$('q').addEventListener('input',e=>{clearTimeout(qt);qt=setTimeout(()=>{st.q=e.target.value.trim();st.limit=6;list()},200)});\n$('copy').onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(location.href).catch(()=>{});const t=$('toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)};\nroute();\n"]}}};

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
  sc.src = BASE_URL + file + '?v=d17d2bc4'; // a new build number per release, so browsers don't reuse an old copy
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
  '.case:not(.open){display:none}';

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

  reveal(root) {
    const els = root.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window) || reduce()) { els.forEach((el) => el.classList.add('in')); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });
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
