(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{8512:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/productos",function(){return i(2482)}])},8044:function(e,n,i){"use strict";i.d(n,{Z:function(){return f}});var r=i(5893),s=i(1163),o=i(1664),t=i.n(o),l=i(7294);function a(e){let n={user:{email:""}},[i,s]=(0,l.useState)(n),o=()=>{localStorage.removeItem("usuario"),s(n)};return(0,l.useEffect)(()=>{console.log("recuperando usuario localStorage");let e=localStorage.getItem("usuario");e&&s(JSON.parse(e))},[]),(0,r.jsxs)("header",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("img",{id:"logo",src:"/desarrollo-frontend-banco/img/isotipo2.svg",alt:"logo"}),(0,r.jsxs)("section",{style:{display:"flex",alignItems:"center",gap:"1em",width:"16em"},children:[(0,r.jsxs)("span",{children:["Bienvenido ",i.user.email]}),(0,r.jsx)("img",{className:"user-profile",src:"/desarrollo-frontend-banco/img/user-profile.svg",alt:"usuario"}),(0,r.jsx)(t(),{href:"/admin/login",onClick:o,children:"Salir"})]})]})}let c=e=>{e?e.push("/admin/login"):window.location="/admin/login"},u=e=>{let n=localStorage.getItem("usuario");null==n&&c(e),JSON.parse(n)};function d(e){return(0,r.jsx)("aside",{children:(0,r.jsxs)("nav",{style:{display:"flex",flexDirection:"column",gap:"0.5em"},children:[(0,r.jsx)(t(),{href:"/admin",children:"Inicio"}),(0,r.jsx)(t(),{href:"/admin/consultas",children:"Consultas"}),(0,r.jsx)(t(),{href:"/admin/categoria",children:"Categor\xedas"}),(0,r.jsx)(t(),{href:"/admin/productos",children:"Productos"}),(0,r.jsx)(t(),{href:"/admin/configuracion",children:"Configuraci\xf3n"})]})})}function f(e){let{children:n}=e,i=(0,s.useRouter)(),[o,t]=(0,l.useState)("");return(0,l.useEffect)(()=>{u(i),t("cargado")},[]),(0,r.jsxs)("div",{id:"contenedor",className:o,children:[(0,r.jsx)(a,{}),(0,r.jsx)(d,{}),(0,r.jsx)("main",{style:{padding:"1em 2em"},children:n})]})}},2482:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o}});var r=i(5893),s=i(8044);function o(){return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)("h1",{children:"Productos"}),(0,r.jsx)("p",{children:"TODO"})]})}}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=8512)}),_N_E=e.O()}]);