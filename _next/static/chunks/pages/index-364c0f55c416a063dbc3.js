_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},QeBL:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),s=n("q1tI"),r=n("wx14"),o=n("zLVn"),i=(n("ZE9u"),n("iuhU")),c=n("6RIW"),l=n("Vn7y"),d=n("tCRK"),b=n("Gqia"),m=n("2Qr1"),p=n("M7pN"),h=Object(p.a)(Object(a.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),j=n("nLn5");const x=Object(l.a)(j.a)((({theme:e})=>Object(r.a)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(r.a)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":Object(r.a)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:Object(m.c)(e.palette.grey[200],.12)}:{backgroundColor:Object(m.c)(e.palette.grey[600],.12)})}))),u=Object(l.a)(h)({width:24,height:16});var f=function(e){const t=e;return Object(a.jsx)("li",{children:Object(a.jsx)(x,Object(r.a)({focusRipple:!0},e,{ownerState:t,children:Object(a.jsx)(u,{ownerState:t})}))})},g=n("ZGJG"),O=n("TeiJ");function w(e){return Object(g.a)("MuiBreadcrumbs",e)}var v=Object(O.a)("MuiBreadcrumbs",["root","ol","li","separator"]);const N=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],y=Object(l.a)(b.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${v.li}`]:t.li},t.root]})({}),k=Object(l.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),A=Object(l.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function C(e,t,n,s){return e.reduce(((r,o,i)=>(i<e.length-1?r=r.concat(o,Object(a.jsx)(A,{"aria-hidden":!0,className:t,ownerState:s,children:n},`separator-${i}`)):r.push(o),r)),[])}var S=s.forwardRef((function(e,t){const n=Object(d.a)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:b,component:m="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:j=1,maxItems:x=8,separator:u="/"}=n,g=Object(o.a)(n,N),[O,v]=s.useState(!1),A=Object(r.a)({},n,{component:m,expanded:O,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:j,maxItems:x,separator:u}),S=(e=>{const{classes:t}=e;return Object(c.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)})(A),R=s.useRef(null),T=s.Children.toArray(l).filter((e=>s.isValidElement(e))).map(((e,t)=>Object(a.jsx)("li",{className:S.li,children:e},`child-${t}`)));return Object(a.jsx)(y,Object(r.a)({ref:t,component:m,color:"text.secondary",className:Object(i.a)(S.root,b),ownerState:A},g,{children:Object(a.jsx)(k,{className:S.ol,ref:R,ownerState:A,children:C(O||x&&T.length<=x?T:(e=>j+h>=e.length?e:[...e.slice(0,j),Object(a.jsx)(f,{"aria-label":p,onClick:()=>{v(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(T),S.separator,u,A)})}))})),R=n("+y7V"),T=n("xeev"),I=n("UnQg"),M=n("8rms"),B=n("ZfBw");function L(e){return Object(g.a)("MuiLink",e)}var W=Object(O.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);const D=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],V={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},E=Object(l.a)(b.a,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${Object(T.a)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>{const n=Object(R.b)(e,`palette.${(e=>V[e]||e)(t.color)}`)||t.color;return Object(r.a)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==n?Object(m.a)(n,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${W.focusVisible}`]:{outline:"auto"}})}));var $=s.forwardRef((function(e,t){const n=Object(I.a)(),l=Object(d.a)({props:e,name:"MuiLink"}),{className:b,color:m="primary",component:p="a",onBlur:h,onFocus:j,TypographyClasses:x,underline:u="always",variant:f="inherit",sx:g}=l,O=Object(o.a)(l,D),w="function"===typeof g?g(n).color:null==g?void 0:g.color,{isFocusVisibleRef:v,onBlur:N,onFocus:y,ref:k}=Object(M.a)(),[A,C]=s.useState(!1),S=Object(B.a)(t,k),R=Object(r.a)({},l,{color:("function"===typeof w?w(n):w)||m,component:p,focusVisible:A,underline:u,variant:f}),W=(e=>{const{classes:t,component:n,focusVisible:a,underline:s}=e,r={root:["root",`underline${Object(T.a)(s)}`,"button"===n&&"button",a&&"focusVisible"]};return Object(c.a)(r,L,t)})(R);return Object(a.jsx)(E,Object(r.a)({color:m,className:Object(i.a)(W.root,b),classes:x,component:p,onBlur:e=>{N(e),!1===v.current&&C(!1),h&&h(e)},onFocus:e=>{y(e),!0===v.current&&C(!0),j&&j(e)},ref:S,ownerState:R,variant:f,sx:[...e.color?[{color:V[m]||m}]:[],...Array.isArray(g)?g:[g]]},O))}));function F(e){return Object(g.a)("MuiDivider",e)}Object(O.a)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const _=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],G=Object(l.a)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>Object(r.a)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:Object(m.a)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>Object(r.a)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>Object(r.a)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>Object(r.a)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),z=Object(l.a)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>Object(r.a)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var K=s.forwardRef((function(e,t){const n=Object(d.a)({props:e,name:"MuiDivider"}),{absolute:s=!1,children:l,className:b,component:m=(l?"div":"hr"),flexItem:p=!1,light:h=!1,orientation:j="horizontal",role:x=("hr"!==m?"separator":void 0),textAlign:u="center",variant:f="fullWidth"}=n,g=Object(o.a)(n,_),O=Object(r.a)({},n,{absolute:s,component:m,flexItem:p,light:h,orientation:j,role:x,textAlign:u,variant:f}),w=(e=>{const{absolute:t,children:n,classes:a,flexItem:s,light:r,orientation:o,textAlign:i,variant:l}=e,d={root:["root",t&&"absolute",l,r&&"light","vertical"===o&&"vertical",s&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===i&&"vertical"!==o&&"textAlignRight","left"===i&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return Object(c.a)(d,F,a)})(O);return Object(a.jsx)(G,Object(r.a)({as:m,className:Object(i.a)(w.root,b),role:x,ref:t,ownerState:O},g,{children:l?Object(a.jsx)(z,{className:w.wrapper,ownerState:O,children:l}):null}))})),J=n("G43+"),U=[{name:"React",icon:"/assets/frontend/React-icon.png"},{name:"Redux",icon:"/assets/frontend/Redux-icon.png"},{name:"Typescript",icon:"/assets/frontend/Typescript-icon.png"},{name:"Next.js",icon:"/assets/frontend/Next-icon.png"},{name:"GraphQL",icon:"/assets/frontend/Graphql-icon.png"},{name:"Material UI",icon:"/assets/frontend/Mui-icon.png"},{name:"Tailwindcss",icon:"/assets/frontend/Tailwindcss-icon.png"},{name:"Jest",icon:"/assets/frontend/Jest-icon.png"},{name:"Cypress",icon:"/assets/frontend/Cypress-icon.png"},{name:"Storybook.js",icon:"/assets/frontend/Storybook-icon.png"}],H=[{name:"Node.js",icon:"/assets/backend/Node-icon.png"},{name:"Typescript",icon:"/assets/frontend/Typescript-icon.png"},{name:"Express.js",icon:"/assets/backend/Express-icon.png"},{name:"KOA",icon:"/assets/backend/KOA-icon.png"},{name:"Egg.js",icon:"/assets/backend/Egg-icon.svg"},{name:"Midway.js",icon:"/assets/backend/Midway-icon.png"},{name:"Apollo",icon:"/assets/backend/Apollo-icon.png"},{name:"MySQL",icon:"/assets/backend/Mysql-icon.png"},{name:"MongoDB",icon:"/assets/backend/Mongodb-icon.webp"},{name:"Firestore",icon:"/assets/backend/Firestore-icon.jpeg"},{name:"Redis",icon:"/assets/backend/Redis-icon.png"}],Q=[{name:"AWS",icon:"/assets/cloud/AWS-icon.png"},{name:"Digital Ocean",icon:"/assets/cloud/DigitalOcean-icon.png"},{name:"Vercel",icon:"/assets/cloud/Vercel-icon.jpg"},{name:"Firebase Function",icon:"/assets/backend/Firestore-icon.jpeg"}],q=[{name:"Gitlab-CI",icon:"/assets/devops/Gitlab-CI-icon.png"},{name:"Go CD",icon:"/assets/devops/GOcd-icon.png"},{name:"Jenkins",icon:"/assets/devops/Jenkins-icon.png"},{name:"Checkly",icon:"/assets/devops/Checkly-icon.png"},{name:"Terraform",icon:"/assets/devops/Terraform-icon.png"}];t.default=function(){return Object(a.jsxs)("div",{className:"flex flex-col",children:[Object(a.jsxs)("div",{className:"flex flex-col w-screen h-screen items-center justify-between",children:[Object(a.jsx)("p",{className:"text-pink-400 text-base font-bold mt-8",children:"An Engineer & A Photographer & An athlete"}),Object(a.jsx)("img",{className:"w-96 h-84",src:"/assets/icon.png"}),Object(a.jsx)("div",{className:"mb-8",children:Object(a.jsxs)(S,{"aria-label":"breadcrumb",children:[Object(a.jsx)($,{href:"/#about",underline:"hover",className:"text-base text-pink-400",children:"ABOUT"}),Object(a.jsx)($,{href:"/#work",underline:"hover",className:"text-base text-pink-400",children:"WORK"}),Object(a.jsx)($,{href:"/#contact",underline:"hover",className:"text-base text-pink-400",children:"CONTACT"})]})})]}),Object(a.jsxs)("div",{id:"about",className:"flex lg:flex-row flex-col w-screen",children:[Object(a.jsxs)("div",{className:"md:w-1/2 w-full flex flex-col bg-pink-400 items-center justify-between",children:[Object(a.jsx)("span",{}),Object(a.jsx)("img",{className:"w-52 h-52",src:"/assets/about.svg"}),Object(a.jsx)("div",{className:"mb-8 justify-self-end",children:Object(a.jsxs)(S,{className:"text-white","aria-label":"breadcrumb",children:[Object(a.jsx)($,{href:"/#about",underline:"hover",className:"text-base text-white",children:"ABOUT"}),Object(a.jsx)($,{href:"/#work",underline:"hover",className:"text-base text-white",children:"WORK"}),Object(a.jsx)($,{href:"/#contact",underline:"hover",className:"text-base text-white",children:"CONTACT"})]})})]}),Object(a.jsx)("div",{className:"md:w-1/2 w-full flex flex-col bg-white items-center justify-center border",children:Object(a.jsxs)("div",{className:"p-4 m-16 space-y-8",children:[Object(a.jsx)("p",{className:"font-bold leading-loose",children:"I am a Wilson LO, an eningeer from Hong Kong \ud83c\udc04\ufe0e"}),Object(a.jsx)(K,{}),Object(a.jsx)("p",{className:"text-xl font-bold leading-loose",children:"An Engineer \ud83e\uddd1\u200d\ud83d\udd27"}),Object(a.jsx)("p",{className:"leading-loose",children:"I am responsible for Technician Leader of Freehunter. Also, I am a freelancer since I was 18, these projects include full-stack, big data, machine learning, etc. so I am good at fast learning and broad knowledge area in software development with 6 years + of working experience."}),Object(a.jsx)(K,{}),Object(a.jsx)("p",{className:"text-xl font-bold leading-loose",children:"A Photographer \ud83d\udcf7"}),Object(a.jsx)("p",{className:"leading-loose",children:'I am a part-time photographer, focusing on portrait photography and fine-art contemporary landscape, and I especially love creating images with a "Japan" feel. Now I am using Fujifilm XE-4.'}),Object(a.jsx)(K,{}),Object(a.jsx)("p",{className:"text-xl font-bold leading-loose",children:"An athlete \ud83c\udff9"}),Object(a.jsx)("p",{className:"leading-loose",children:"I am an hoilday athlete, I love sport including long run, swimming, and also I am a professional archery with compound bow, currently work hard to being a Asian Games representative of Hong Kong before 2026."})]})})]}),Object(a.jsxs)("div",{id:"work",className:"flex lg:flex-row flex-col",children:[Object(a.jsxs)("div",{className:"md:w-1/2 w-full flex flex-col bg-white items-center border justify-between",children:[Object(a.jsx)("span",{}),Object(a.jsx)("img",{className:"w-52 h-52",src:"/assets/work.svg"}),Object(a.jsx)("div",{className:"mb-8 justify-self-end",children:Object(a.jsxs)(S,{className:"text-black","aria-label":"breadcrumb",children:[Object(a.jsx)($,{href:"/#about",underline:"hover",className:"text-base text-black",children:"ABOUT"}),Object(a.jsx)($,{href:"/#work",underline:"hover",className:"text-base text-black",children:"WORK"}),Object(a.jsx)($,{href:"/#contact",underline:"hover",className:"text-base text-black",children:"CONTACT"})]})})]}),Object(a.jsx)("div",{className:"md:w-1/2 w-full flex flex-col bg-white items-center justify-center border",children:Object(a.jsxs)("div",{className:"p-4 m-16 space-y-8",children:[Object(a.jsx)("p",{className:"text-2xl font-bold leading-loose",children:"Tech Stack"}),Object(a.jsx)("p",{className:"text-xl font-bold leading-loose",children:"Frontend"}),Object(a.jsx)(J.a,{className:"border-none shadow-none",sx:{display:"flex",flexWrap:"wrap",listStyle:"none",p:.5,m:0},component:"ul",children:U.map((function(e){return Object(a.jsxs)("div",{className:"flex border rounded shadow m-2 p-2 items-center justify-center space-x-4",children:[Object(a.jsx)("img",{width:"30",height:"30",src:e.icon}),Object(a.jsx)("span",{children:e.name})]})}))}),Object(a.jsx)(K,{}),Object(a.jsx)("p",{className:"text-xl font-bold leading-loose",children:"Backend"}),Object(a.jsx)(J.a,{className:"border-none shadow-none",sx:{display:"flex",flexWrap:"wrap",listStyle:"none",p:.5,m:0},component:"ul",children:H.map((function(e){return Object(a.jsxs)("div",{className:"flex border rounded shadow m-2 p-2 items-center justify-center space-x-4",children:[Object(a.jsx)("img",{width:"30",height:"30",src:e.icon}),Object(a.jsx)("span",{children:e.name})]})}))}),Object(a.jsx)(K,{}),Object(a.jsx)("p",{className:"text-xl font-bold leading-loose",children:"Cloud Infrastructure"}),Object(a.jsx)(J.a,{className:"border-none shadow-none",sx:{display:"flex",flexWrap:"wrap",listStyle:"none",p:.5,m:0},component:"ul",children:Q.map((function(e){return Object(a.jsxs)("div",{className:"flex border rounded shadow m-2 p-2 items-center justify-center space-x-4",children:[Object(a.jsx)("img",{width:"30",height:"30",src:e.icon}),Object(a.jsx)("span",{children:e.name})]})}))}),Object(a.jsx)(K,{}),Object(a.jsx)("p",{className:"text-xl font-bold leading-loose",children:"DevOps"}),Object(a.jsx)(J.a,{className:"border-none shadow-none",sx:{display:"flex",flexWrap:"wrap",listStyle:"none",p:.5,m:0},component:"ul",children:q.map((function(e){return Object(a.jsxs)("div",{className:"flex border rounded shadow m-2 p-2 items-center justify-center space-x-4",children:[Object(a.jsx)("img",{width:"30",height:"30",src:e.icon}),Object(a.jsx)("span",{children:e.name})]})}))})]})})]}),Object(a.jsxs)("div",{id:"contact",className:"flex lg:flex-row flex-col h-screen",children:[Object(a.jsxs)("div",{className:"md:w-1/2 w-full flex flex-col bg-black items-center justify-between",children:[Object(a.jsx)("span",{}),Object(a.jsx)("img",{className:"w-52 h-52",src:"/assets/contact.svg"}),Object(a.jsx)("div",{className:"mb-8 justify-self-end",children:Object(a.jsxs)(S,{className:"text-black","aria-label":"breadcrumb",children:[Object(a.jsx)($,{href:"/#about",underline:"hover",className:"text-base text-pink-400",children:"ABOUT"}),Object(a.jsx)($,{href:"/#work",underline:"hover",className:"text-base text-pink-400",children:"WORK"}),Object(a.jsx)($,{href:"/#contact",underline:"hover",className:"text-base text-pink-400",children:"CONTACT"})]})})]}),Object(a.jsx)("div",{className:"md:w-1/2 w-full flex flex-col bg-white items-center justify-center border",children:Object(a.jsxs)("div",{className:"p-4 m-16 space-y-8",children:[Object(a.jsx)("p",{className:"font-bold leading-loose",children:"If you want to collaborate on crafting amazing experience for people. you are very welcome to contact me."}),Object(a.jsx)("p",{className:"leading-loose",children:"I am available for freelance projects and full-time employment."}),Object(a.jsx)("p",{className:"text-xl font-bold leading-loose",children:"Wilson Lo"}),Object(a.jsx)("p",{className:"leading-loose",children:"Email: wilsonloltl@gmail.com"}),Object(a.jsxs)("p",{className:"leading-loose",children:["Resume: ",Object(a.jsx)("a",{className:"text-pink-400",href:"/doc/Resume.pdf",children:"Here"})]}),Object(a.jsxs)("p",{className:"leading-loose",children:["More About Me: ",Object(a.jsx)("a",{className:"text-pink-400",href:"/doc/Wilson-Lo.pdf",children:"Here"})]}),Object(a.jsxs)("p",{className:"leading-loose",children:["Linkedin: ",Object(a.jsx)("a",{className:"text-pink-400",href:"https://www.linkedin.com/in/wilson-lo-707120170/",children:"https://www.linkedin.com/in/wilson-lo-707120170/"})]}),Object(a.jsxs)("p",{className:"leading-loose",children:["Cakeresume: ",Object(a.jsx)("a",{className:"text-pink-400",href:"https://www.cakeresume.com/me/wilson-ltl",children:"https://www.cakeresume.com/me/wilson-ltl"})]})]})})]})]})}}},[["/EDR",0,1,2]]]);