"use strict";(self.webpackChunkjourney=self.webpackChunkjourney||[]).push([[431],{431:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var l=a(43),t=a(216),d=a(367),r=a(132),i=a(475),n=a(550),c=a(579);const m=function(e){let{index:s}=e;const a=new Array(15).fill(0);return(0,c.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-12 p-2 md:px-24 md:py-12",children:[(0,c.jsx)("div",{className:"container order-last md:order-first",children:(0,c.jsxs)("section",{className:"border-2 border-blue-600/[0.2] shadow-md rounded-xl p-2 text-center bg-white",children:[(0,c.jsx)("div",{className:"h-8 w-full bg-slate-200 animate-pulse rounded my-8"}),(0,c.jsx)("hr",{}),(0,c.jsxs)("ul",{className:"text-center space-y-4 p-4 ",children:[(0,c.jsxs)("li",{className:"flex items-center gap-4",children:[(0,c.jsx)("div",{className:"h-3 w-1/6 bg-slate-200 animate-pulse rounded"}),(0,c.jsx)("div",{className:"h-3 w-1/3 bg-slate-200 animate-pulse rounded"}),(0,c.jsx)("div",{className:"h-3 w-full bg-slate-200 animate-pulse rounded"})]}),(0,c.jsxs)("li",{className:"flex items-center gap-4",children:[(0,c.jsx)("div",{className:"h-3 w-1/6 bg-slate-200 animate-pulse rounded"}),(0,c.jsx)("div",{className:"h-3 w-1/3 bg-slate-200 animate-pulse rounded"}),(0,c.jsx)("div",{className:"h-3 w-full bg-slate-200 animate-pulse rounded"})]}),(0,c.jsxs)("li",{className:"flex items-center gap-4",children:[(0,c.jsx)("div",{className:"h-3 w-1/6 bg-slate-200 animate-pulse rounded"}),(0,c.jsx)("div",{className:"h-3 w-1/3 bg-slate-200 animate-pulse rounded"}),(0,c.jsx)("div",{className:"h-3 w-full bg-slate-200 animate-pulse rounded"})]})]})]})}),(0,c.jsx)("div",{className:"container col-span-3",children:(0,c.jsxs)("section",{className:"border-2 rounded-xl p-6 flex flex-wrap flex-row gap-4 md:gap-12",children:[(0,c.jsx)("div",{className:"container md:basis-3/6",children:(0,c.jsx)("div",{className:"bg-slate-200 animate-pulse w-full h-96 max-h-56 md:max-h-96 rounded-xl"})}),(0,c.jsxs)("div",{className:"container md:basis-2/5 p-6 space-y-8",children:[(0,c.jsx)("div",{className:"h-8 w-4/5 bg-slate-200 animate-pulse rounded"}),(0,c.jsxs)("div",{className:"space-y-3",children:[(0,c.jsx)("div",{className:"h-3 w-3/5 bg-slate-200 animate-pulse rounded"}),(0,c.jsx)("div",{className:"h-3 w-1/4 bg-slate-200 animate-pulse rounded"})]})]}),(0,c.jsx)("div",{className:"container space-y-3",children:a.map(((e,s)=>(0,c.jsx)("div",{className:"h-3 w-full bg-slate-200 animate-pulse rounded"},s)))})]})})]})};const x=function(e){let{image:s,images:a}=e;return(0,c.jsx)("img",{src:a[s],alt:"blog",className:"h-60 md:h-[32rem] w-full object-contain object-center top-0 shadow-md"})};const o=function(e){let{images:s}=e,[a,t]=(0,l.useState)(0);const d=e=>{t("next"===e?e=>(e+1)%s.length:e=>0===e?s.length+(e-1):e-1)};return(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"p-0 m-0 relative overflow-hidden",children:[(0,c.jsx)(x,{image:a,images:s}),(0,c.jsx)("div",{className:"absolute p-4 md:p-8 top-1/4 md:top-1/3 right-full translate-x-3/4 translate-y-1/4 flex justify-center items-center rounded-2xl bg-sky-500/[.1] border-2 cursor-pointer",onClick:()=>d("prev"),children:(0,c.jsx)("i",{className:"fa-solid fa-arrow-left text-3xl md:text-5xl text-sky-300"})}),(0,c.jsx)("div",{className:"absolute p-4 md:p-8 top-1/4 md:top-1/3 right-0 translate-x-1/4 translate-y-1/4 flex justify-center items-center rounded-2xl bg-sky-500/[.1] border-2 cursor-pointer",onClick:()=>d("next"),children:(0,c.jsx)("i",{className:"fa-solid fa-arrow-right text-3xl md:text-5xl text-sky-300"})})]})})};var h=a(962);const u=function(e){let{posts:s}=e;const a=(0,t.Zp)(),{id:x}=(0,t.g)();let u=s.find((e=>e.id===parseInt(x))),p=0,g=0,j=h.mS;if(s&&s.length>0?([p,g]=[s[s.length-1].id,s[0].id],j=function(e,s){e.image1&&s.unshift(e.image1);e.image2&&s.unshift(e.image2);e.image3&&s.unshift(e.image3);e.image4&&s.unshift(e.image4);return s.slice(0,4)}(u,[...h.mS])):a("/"),u){const e=new Date(u.date);u.dateString=e.toLocaleString("default",{month:"long"})+" "+e.getDate()+", "+e.getFullYear()}return(0,l.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,c.jsxs)("div",{className:"w-full mx-auto md:p-0 md:m-0",children:[(0,c.jsx)(o,{images:j}),u?(0,c.jsxs)(l.Fragment,{children:[(0,c.jsxs)(d.mg,{children:[(0,c.jsx)("title",{children:u.title}),(0,c.jsx)("meta",{name:"description",content:`Read ${u.title}.`})]}),(0,c.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-12 p-2 md:px-24 md:py-12",children:[(0,c.jsx)("div",{className:"order-last md:order-first",children:(0,c.jsxs)("section",{className:"border-2 border-blue-600/[0.2] dark:border-slate-600 shadow-md rounded-xl p-2 text-center bg-white dark:bg-slate-600",children:[(0,c.jsx)("h1",{className:"text-2xl text-black dark:text-white",children:"Article Information"}),(0,c.jsx)("hr",{}),(0,c.jsxs)("ul",{className:"text-center space-y-2 p-4 text-black dark:text-white",children:[(0,c.jsxs)("li",{className:"flex items-center gap-2",children:[(0,c.jsx)("i",{className:"fa fa-tag","aria-hidden":"true"}),(0,c.jsx)("span",{className:"font-bold",children:"Category:"}),(0,c.jsx)("span",{children:"Inspiration"})]}),(0,c.jsxs)("li",{className:"flex items-center gap-2",children:[(0,c.jsx)("i",{className:"fa-regular fa-clock"}),(0,c.jsx)("span",{className:"font-bold",children:"Updated:"}),(0,c.jsx)("span",{children:u.dateString})]}),(0,c.jsxs)("li",{className:"flex items-center gap-2",children:[(0,c.jsx)("i",{className:"fa-regular fa-user"}),(0,c.jsx)("span",{className:"font-bold",children:"Author:"}),(0,c.jsx)("span",{children:u.author})]})]})]})}),(0,c.jsxs)("section",{className:"col-span-3 border-2 border-blue-600/[0.2] dark:border-slate-600 shadow-md rounded-xl p-6 flex flex-wrap flex-row gap-4 md:gap-12 bg-white dark:bg-slate-600 dark:text-white",children:[(0,c.jsx)("div",{className:"md:basis-3/6 w-full",children:(0,c.jsx)("img",{src:u.cover,alt:"cover",className:"border-2 border-blue-600/[0.2] dark:border-slate-600 shadow-md rounded-xl w-full h-full max-h-56 md:max-h-96 "})}),(0,c.jsxs)("div",{className:"md:basis-2/5",children:[(0,c.jsx)("h3",{className:"text-3xl text-black dark:text-white",children:u.title}),(0,c.jsxs)("li",{className:"flex items-center gap-2",children:[(0,c.jsx)("i",{className:"fa-solid fa-calendar-days"}),(0,c.jsx)("span",{className:"font-bold text-md",children:"Updated:"}),(0,c.jsx)("time",{children:u.dateString})]}),n.v.isAuthenticated&&(0,c.jsx)(i.N_,{to:`/edit-post/${u.id}`,className:"text-slate-700 dark:text-slate-200","aria-label":`Click to Edit:${u.title}`,children:(0,c.jsxs)("p",{className:"mt-2",children:[(0,c.jsx)("i",{className:"fa fa-pencil text-md mr-1"}),(0,c.jsx)("i",{children:"edit"})]})})]}),(0,c.jsx)(r.A,{html:u.content}),(0,c.jsxs)("div",{className:"flex gap-6 md:gap-12 w-full "+(+x-1<p?"justify-end":"justify-between"),children:[+x-1>=p&&(0,c.jsxs)(i.N_,{to:"/post/"+(+x-1),className:"flex gap-1 md:gap-2 w-fit border-2 border-blue-600/[0.2] dark:border-slate-900 rounded-xl p-2 pl-0 md:p-4 md:pl-0 bg-white dark:bg-slate-600 hover:bg-gray-800 hover:text-white text-md md:text-xl","aria-label":`Read more about ${u.title}`,children:[(0,c.jsx)("button",{className:"bg-slate-600 dark:bg-slate-400 px-1 md:px-4 pl-8 rounded-tr-3xl rounded-br-3xl",children:(0,c.jsx)("i",{className:"fa-solid fa-arrow-left text-xl md:text-3xl"})}),(0,c.jsx)("h1",{className:"text-inherit",children:"Previous article"})]}),+x+1<=g&&(0,c.jsxs)(i.N_,{to:"/post/"+(+x+1),className:"flex gap-1 md:gap-2 w-fit border-2 border-blue-600/[0.2] dark:border-slate-900 rounded-xl p-2 pr-0 md:p-4 md:pr-0 bg-white dark:bg-slate-600 hover:bg-gray-800 hover:text-white text-md md:text-xl","aria-label":`Read more about ${u.title}`,children:[(0,c.jsx)("h1",{className:"text-inherit",children:"Next article"}),(0,c.jsx)("button",{className:"bg-slate-600 dark:bg-slate-400 px-1 md:px-4 pl-8 rounded-tl-3xl rounded-bl-3xl",children:(0,c.jsx)("i",{className:"fa-solid fa-arrow-right text-xl md:text-3xl"})})]})]})]})]})]}):(0,c.jsx)(l.Fragment,{children:(0,c.jsx)(m,{})})]})}}}]);
//# sourceMappingURL=431.63e2bda0.chunk.js.map