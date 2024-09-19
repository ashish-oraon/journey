"use strict";(self.webpackChunkjourney=self.webpackChunkjourney||[]).push([[498],{498:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var l=a(43),r=a(216),i=a(367),t=a(985),d=a(132),c=a(475),n=a(550),x=a(613),o=a(579);const m=function(e){let{index:s}=e;return(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-12 p-2 md:px-24 md:py-12",children:[(0,o.jsx)("div",{className:"container order-last md:order-first",children:(0,o.jsxs)("section",{className:"border rounded-xl p-2 text-center",children:[(0,o.jsx)(x.aH,{line:1,gap:10,variant:"secondary"}),(0,o.jsx)("hr",{}),(0,o.jsxs)("ul",{className:"text-center space-y-2 p-4 ",children:[(0,o.jsxs)("li",{className:"flex items-center gap-2",children:[(0,o.jsx)(x.e6,{size:"sm"}),(0,o.jsx)(x.e6,{size:"sm"}),(0,o.jsx)(x.e6,{size:"sm"})]}),(0,o.jsxs)("li",{className:"flex items-center gap-2",children:[(0,o.jsx)(x.e6,{size:"sm"}),(0,o.jsx)(x.e6,{size:"sm"}),(0,o.jsx)(x.e6,{size:"sm"})]}),(0,o.jsxs)("li",{className:"flex items-center gap-2",children:[(0,o.jsx)(x.e6,{size:"sm"}),(0,o.jsx)(x.e6,{size:"sm"}),(0,o.jsx)(x.e6,{size:"sm"})]})]})]})}),(0,o.jsx)("div",{className:"container col-span-3",children:(0,o.jsxs)("section",{className:"border-2 rounded-xl p-6 flex flex-wrap flex-row gap-4 md:gap-12",children:[(0,o.jsx)("div",{className:"container md:basis-3/6",children:(0,o.jsx)(x.ay,{height:250,rounded:!0})}),(0,o.jsxs)("div",{className:"container md:basis-2/5",children:[(0,o.jsx)(x.aH,{line:3,gap:10,variant:"primary"}),(0,o.jsxs)("li",{className:"flex items-center gap-2",children:[(0,o.jsx)(x.e6,{size:"sm"}),(0,o.jsx)(x.e6,{size:"sm"})]}),(0,o.jsx)(x.e6,{size:"sm"})]}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)(x.NZ,{line:30,gap:15,variant:"primary"})})]})})]})};const h=function(e){let{posts:s}=e;const a=(0,r.Zp)(),{id:x}=(0,r.g)(),h=s.find((e=>e.id===parseInt(x)));let j=0,p=0;if(s&&s.length>0?[j,p]=[s[s.length-1].id,s[0].id]:a("/"),h){const e=new Date(h.date);h.dateString=e.toLocaleString("default",{month:"long"})+" "+e.getDate()+", "+e.getFullYear()}return(0,l.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,o.jsxs)("div",{className:"w-full mx-auto md:p-0 md:m-0",children:[(0,o.jsx)(t.A,{image:"https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),h?(0,o.jsxs)(l.Fragment,{children:[(0,o.jsxs)(i.mg,{children:[(0,o.jsx)("title",{children:h.title}),(0,o.jsx)("meta",{name:"description",content:`Read ${h.title}.`})]}),(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-12 p-2 md:px-24 md:py-12",children:[(0,o.jsx)("div",{className:"order-last md:order-first",children:(0,o.jsxs)("section",{className:"border-2 border-blue-600/[0.2] shadow-md rounded-xl p-2 text-center bg-white",children:[(0,o.jsx)("h1",{className:"text-2xl",children:"Article Information"}),(0,o.jsx)("hr",{}),(0,o.jsxs)("ul",{className:"text-center space-y-2 p-4 ",children:[(0,o.jsxs)("li",{className:"flex items-center gap-2",children:[(0,o.jsx)("i",{className:"fa fa-tag","aria-hidden":"true"}),(0,o.jsx)("span",{className:"font-bold",children:"Category:"}),(0,o.jsx)("span",{children:"Inspiration"})]}),(0,o.jsxs)("li",{className:"flex items-center gap-2",children:[(0,o.jsx)("i",{className:"fa-regular fa-clock"}),(0,o.jsx)("span",{className:"font-bold",children:"Updated:"}),(0,o.jsx)("span",{children:h.dateString})]}),(0,o.jsxs)("li",{className:"flex items-center gap-2",children:[(0,o.jsx)("i",{className:"fa-regular fa-user"}),(0,o.jsx)("span",{className:"font-bold",children:"Author:"}),(0,o.jsx)("span",{children:h.author})]})]})]})}),(0,o.jsxs)("section",{className:"col-span-3 border-2 border-blue-600/[0.2] shadow-md rounded-xl p-6 flex flex-wrap flex-row gap-4 md:gap-12 bg-white",children:[(0,o.jsx)("div",{className:"md:basis-3/6",children:(0,o.jsx)("img",{src:h.cover,alt:"cover",className:"border-2 border-blue-600/[0.2] shadow-md rounded-xl w-full h-full md:max-h-96 "})}),(0,o.jsxs)("div",{className:"md:basis-2/5",children:[(0,o.jsx)("h3",{className:"text-3xl",children:h.title}),(0,o.jsxs)("li",{className:"flex items-center gap-2",children:[(0,o.jsx)("i",{className:"fa-solid fa-calendar-days"}),(0,o.jsx)("span",{className:"font-bold text-md",children:"Updated:"}),(0,o.jsx)("time",{children:h.dateString})]}),n.v.isAuthenticated&&(0,o.jsx)(c.N_,{to:`/edit-post/${h.id}`,className:"text-slate-700","aria-label":`Click to Edit:${h.title}`,children:(0,o.jsxs)("p",{className:"mt-2",children:[(0,o.jsx)("i",{className:"fa fa-pencil text-md mr-1"}),(0,o.jsx)("i",{children:"edit"})]})})]}),(0,o.jsx)(d.A,{html:h.content}),(0,o.jsxs)("div",{className:"flex gap-12 w-full "+(+x-1<j?"justify-end":"justify-between"),children:[+x-1>=j&&(0,o.jsxs)(c.N_,{to:"/post/"+(+x-1),className:"flex gap-2 w-fit border-2 border-blue-600/[0.2] rounded-xl p-4 pl-0 bg-white hover:bg-gray-800 hover:text-white","aria-label":`Read more about ${h.title}`,children:[(0,o.jsx)("button",{className:"bg-slate-400 px-4 pl-8 rounded-tr-3xl rounded-br-3xl",children:(0,o.jsx)("i",{className:"fa-solid fa-arrow-left text-3xl"})}),(0,o.jsx)("h1",{className:"text-inherit",children:"Previous article"})]}),+x+1<=p&&(0,o.jsxs)(c.N_,{to:"/post/"+(+x+1),className:"flex gap-2 w-fit border-2 border-blue-600/[0.2] rounded-xl p-4 pr-0 bg-white hover:bg-gray-800 hover:text-white","aria-label":`Read more about ${h.title}`,children:[(0,o.jsx)("h1",{className:"text-inherit",children:"Next article"}),(0,o.jsx)("button",{className:"bg-slate-400 px-4 pl-8 rounded-tl-3xl rounded-bl-3xl",children:(0,o.jsx)("i",{className:"fa-solid fa-arrow-right text-3xl"})})]})]})]})]})]}):(0,o.jsx)(l.Fragment,{children:(0,o.jsx)(m,{})})]})}}}]);
//# sourceMappingURL=498.81afb377.chunk.js.map