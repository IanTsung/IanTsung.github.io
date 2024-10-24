(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{186:function(e,t,l){Promise.resolve().then(l.bind(l,5569))},7039:function(e,t,l){"use strict";l.d(t,{I:function(){return s}});let a=(0,l(8508).oM)({name:"darkMode",initialState:!1,reducers:{toggleDarkMode:e=>!e}}),{toggleDarkMode:s}=a.actions;t.Z=a.reducer},5569:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return V}});var a=l(3827),s=l(828);l(7398);var i=l(4090),r=l(703),n=l(4292),o=l(9807),c=l(1888),d=()=>{let e=(0,s.v9)(e=>e.darkMode),t=e?"text-white":"text-slate-900";return(0,a.jsx)("section",{className:"lg:py-16",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-12",children:[(0,a.jsxs)(o.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},className:"col-span-7 place-self-center text-center sm:text-left justify-self-start",children:[(0,a.jsxs)("h1",{className:"mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold ".concat(t),children:[(0,a.jsxs)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary-500 to-secondary-500",children:["Hello, I'm"," "]}),(0,a.jsx)("br",{}),(0,a.jsx)(n.e,{sequence:["Ian",1e3,"Web Developer",1e3,"Full-stack Developer",1e3,"Cloud Specialist",1e3],wrapper:"span",speed:20,repeat:1/0})]}),(0,a.jsx)("p",{className:"mb-6 text-base sm:text-lg lg:text-xl ".concat(t),children:"As an experienced full-stack developer, I am dedicated to crafting clean, scalable code that powers business applications."}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/Cong_CV.pdf",children:(0,a.jsx)("button",{className:"px-1 py-1 w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 my-3 ".concat(t," font-semibold"),children:(0,a.jsxs)("span",{className:"flex justify-center rounded-full px-5 py-2 ".concat(e?"bg-[#121212] hover:bg-slate-800":"bg-slate-50 hover:bg-gray-200"),children:["Download CV",(0,a.jsx)(c.Z,{className:"rounded-full ml-1 w-5 h-5"})]})})})})]}),(0,a.jsx)(o.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},className:"col-span-5 place-self-center mt-4 lg:mt-0",children:(0,a.jsx)("div",{className:"rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ".concat(e?"bg-[#181818]":"bg-slate-200"),children:(0,a.jsx)(r.default,{src:"/images/hero-image.png",alt:"hero image",layout:"fill",objectFit:"cover",className:"rounded-full"})})})]})})},x=l(7039),m=l(8792),h=l(403),p=l(5855),u=l(748),g=l(6766),b=e=>{let{href:t,title:l,onClick:i}=e,r=(0,s.v9)(e=>e.darkMode);return(0,a.jsxs)(m.default,{href:t,onClick:i,className:"block mx-1 my-2 sm:text-lg lg:text-xl rounded md:p-0 font-semibold relative group ".concat(r?"text-[#C3CED6] hover:text-white":"text-[#565B5E] hover:text-black"),children:[l,(0,a.jsx)("span",{className:"absolute -bottom-[2px] left-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full bg-purple-600"})]})},f=e=>{let{links:t}=e;return(0,a.jsx)("ul",{className:"flex flex-col py-4 items-center md:gap-y-4",children:t.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(b,{href:e.href,title:e.title})},t))})};let j=[{title:"About",href:"#about"},{title:"Skills",href:"#skills"},{title:"Projects",href:"#projects"},{title:"Contact",href:"#contact"}];var v=()=>{let e=(0,s.v9)(e=>e.darkMode),t=(0,s.I0)(),[l,n]=(0,i.useState)(!1),o=e?"border-slate-200 text-slate-200 hover:text-white hover:border-white":"border-slate-700 text-slate-700 hover:text-black hover:border-black";(0,i.useEffect)(()=>{let e=()=>{window.innerWidth>=768&&l&&n(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[l]);let c=(e,t)=>{e.preventDefault();let l=document.querySelector(t);if(l){let e=l.getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:e,behavior:"smooth"})}};return(0,a.jsxs)("nav",{className:"fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-50 ".concat(e?"bg-[#121212]":"bg-slate-50"),children:[(0,a.jsxs)("div",{className:"grid grid-cols-3 place-items-center w-full mx-auto px-6 py-4 md:px-20 md:py-6",children:[(0,a.jsx)("div",{className:"mobile-menu block xl:hidden",children:l?(0,a.jsx)("button",{onClick:()=>n(!1),className:"flex items-center px-3 py-2 border-2 rounded ".concat(o),children:(0,a.jsx)(p.Z,{className:"w-4 h-4 md:w-6 md:h-6"})}):(0,a.jsx)("button",{onClick:()=>n(!0),className:"flex items-center px-3 py-2 border-2 rounded ".concat(o),children:(0,a.jsx)(h.Z,{className:"w-4 h-4 md:w-6 md:h-6"})})}),(0,a.jsx)("div",{className:"menu hidden xl:block md:w-auto",id:"navbar",children:(0,a.jsx)("ul",{className:"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0",children:j.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(b,{href:e.href,title:e.title,onClick:t=>c(t,e.href)})},t))})}),(0,a.jsx)(m.default,{href:"/",className:"text-4xl lg:text-5xl xl:text-6xl ".concat(e?"text-white":"text-black"," font-semibold font-zolasixx"),children:"IAN"}),(0,a.jsxs)("div",{className:"flex space-x-4 sm:space-x-8 md:space-x-12",children:[(0,a.jsx)(m.default,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/IanTsung",style:{filter:"".concat(e?"invert(100%) brightness(2)":"invert(0%) brightness(0)")},children:(0,a.jsx)(r.default,{src:"github.svg",alt:"github icon",className:"w-full h-full max-w-6 max-h-6",width:25,height:25})}),(0,a.jsx)(m.default,{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/zhaoyancong/",children:(0,a.jsx)(r.default,{src:"linkedin.svg",alt:"linkedin icon",className:"w-full h-full max-w-6 max-h-6",width:25,height:25})}),(0,a.jsxs)("button",{onClick:()=>t((0,x.I)()),className:"relative rounded-full border-2 p-1 transition-colors delay-200 duration-200 ease-in-out ".concat(e?"border-white":"border-slate-700"," flex justify-center items-center w-6 h-6"),children:[(0,a.jsx)("div",{className:"absolute flex transition-opacity ease-in-out delay-200 duration-200",style:{opacity:e?1:0},children:(0,a.jsx)(u.Z,{className:"w-3.5 h-3.5 text-white"})}),(0,a.jsx)("div",{className:"absolute flex transition-opacity ease-in-out delay-200 duration-200",style:{opacity:e?0:1},children:(0,a.jsx)(g.Z,{className:"w-4 h-4 text-slate-800"})})]})]})]}),l?(0,a.jsx)(f,{links:j}):null]})};let w={default:{width:0},active:{width:"calc(100% - 0.75rem)"}};var y=e=>{let{active:t,selectTab:l,children:i}=e,r=(0,s.v9)(e=>e.darkMode);return(0,a.jsxs)("button",{onClick:l,children:[(0,a.jsx)("p",{className:"mr-3 font-semibold ".concat(t?"".concat(r?"text-white":"text-black"):"text-[#ADB7BE]"),children:i}),(0,a.jsx)(o.E.div,{animate:t?"active":"default",variants:w,className:"h-1 bg-primary-500 mt-1 mr-3"})]})};let N=[{title:"Education",id:"education",content:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("h3",{className:"font-semibold col-span-1",children:"Australian National University"}),(0,a.jsx)("h3",{className:"font-semibold col-span-1",children:"Canberra, Australia"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("p",{children:"Master of Computing"}),(0,a.jsx)("p",{children:"2023.2 - 2024.12"})]})]})},{title:"Certifications",id:"certifications",content:(0,a.jsxs)("ul",{className:"list-disc pl-2 font-medium",children:[(0,a.jsx)("li",{children:"AWS Certified Developer - Associate"}),(0,a.jsx)("li",{children:"AWS Solutions Architect - Professional (Expected)"})]})}];var k=()=>{let e=(0,s.v9)(e=>e.darkMode)?"text-white":"text-slate-800",[t,l]=(0,i.useState)("education"),[n,o]=(0,i.useTransition)(),c=e=>{o(()=>{l(e)})};return(0,a.jsx)("section",{id:"about",className:"".concat(e),children:(0,a.jsxs)("div",{className:"md:grid lg:grid-cols-2 gap-8 xl:gap-16 items-start py-8 px-4 sm:py-16 xl:px-0",children:[(0,a.jsx)(r.default,{src:"/images/about-image.png",className:"rounded-2xl",alt:"about image",width:500,height:500}),(0,a.jsxs)("div",{className:"mt-4 md:mt-0 text-left flex flex-col h-full",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold mb-4 ".concat(e),children:"About Me"}),(0,a.jsx)("p",{className:"text-base lg:text-lg ",children:"I am a full-stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, MongoDB, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications."}),(0,a.jsxs)("div",{className:"flex flex-row justify-start mt-8",children:[(0,a.jsxs)(y,{selectTab:()=>c("education"),active:"education"===t,children:[" ","Education"," "]}),(0,a.jsxs)(y,{selectTab:()=>c("certifications"),active:"certifications"===t,children:[" ","Certifications"," "]})]}),(0,a.jsx)("div",{className:"mt-8",children:N.find(e=>e.id===t).content})]})]})})};let C=(0,l(4232).default)(()=>Promise.all([l.e(987),l.e(623)]).then(l.t.bind(l,8925,23)),{loadableGenerated:{webpack:()=>[8925]},ssr:!1}),S=[{metric:"Years of Experience",value:new Date().getFullYear()-2022,postfix:"+"},{metric:"Projects Completed",value:16,postfix:"+"},{metric:"Awards Earned",value:5}],A=async e=>{try{let t=await fetch("https://api.github.com/users/".concat(e));if(!t.ok)throw Error("Network response was not ok");return(await t.json()).public_repos}catch(e){return console.error("There was a problem with the fetch operation:",e),null}};var _=()=>{let e=(0,s.v9)(e=>e.darkMode),t=e?"text-white":"text-slate-800",l=e?"text-[#ADB7BE]":"text-gray-700",[r,n]=(0,i.useState)(S);return(0,i.useEffect)(()=>{(async()=>{let e=await A("IanTsung");null!==e&&n(t=>t.map(t=>"Projects Completed"===t.metric?{...t,value:e}:t))})()},[]),(0,a.jsx)("div",{className:"px-2 py-8 sm:py-4 xl:px-8",children:(0,a.jsx)("div",{className:"flex xl:flex-col items-start justify-between rounded-md py-8 px-2 sm:px-12 md:px-20 xl:px-2 xl:h-full xl:gap-40",children:r.map((s,i)=>(0,a.jsxs)("div",{className:"flex flex-col items-start justify-center sm:mx-4",children:[(0,a.jsxs)("h2",{className:"flex flex-row sm:gap-2 text-4xl sm:text-5xl xl:text-7xl font-bold ".concat(t),children:[(0,a.jsx)(C,{includeComma:!0,animateToNumber:s.value,locale:"en-US",className:"text-4xl sm:text-5xl xl:text-7xl font-bold ".concat(t),transitions:()=>({type:"spring",duration:.75*i+1.5})},e?"dark":"light"),s.postfix]}),(0,a.jsx)("p",{className:"".concat(l," text-sm"),children:s.metric})]},i))})})},E=l(3696);let D="Full Stack Developer  Web Developer  Cloud Specialist  ";var B=()=>{let e=(0,s.v9)(e=>e.darkMode),t=e?"text-white":"text-black",l=(0,i.useRef)(null),r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{r.current&&E.p8.to(r.current,{rotation:360,repeat:-1,duration:20,ease:"linear"})},[]),(0,a.jsx)("div",{className:"fixed bottom-5 right-5 sm:bottom-10 sm:right-10 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"relative flex justify-center items-center",children:[(0,a.jsx)("div",{ref:r,className:"absolute",children:D.split("").map((e,l)=>(0,a.jsx)("span",{style:{transform:"rotate(".concat(-(360*l)/D.length,"deg) translateY(34px)"),transformOrigin:"0% 0%"},className:"absolute text-[8px] font-mono ".concat(t),children:e},l))}),(0,a.jsx)("a",{href:"mailto:zhaoyan.ian.cong@gmail.com",ref:l,className:"rounded-full transition duration-300 ease-in-out flex items-center justify-center w-16 h-16 ".concat(e?"bg-slate-100 text-black hover:bg-gray-200":"bg-black text-white hover:bg-gray-700"),children:(0,a.jsx)("span",{className:"text-lg font-bold font-mono text-center leading-tight",children:"HIRE ME"})})]})})},M=l(9492),I=l(7134),T=e=>{let{imgUrl:t,title:l,description:i,gitUrl:r}=e,n=(0,s.v9)(e=>e.darkMode);return(0,a.jsxs)("div",{className:"relative hover:scale-105 duration-500",children:[(0,a.jsx)("div",{className:"h-48 xs:h-56 sm:h-64 xl:h-72 rounded-t-xl relative group z-10",style:{background:"url(".concat(t,")"),backgroundSize:"cover"}}),(0,a.jsxs)("div",{className:"relative text-white rounded-b-xl sm:h-40 p-6 z-10 ".concat(n?"bg-[#181818]":"bg-slate-950"),children:[(0,a.jsx)("h5",{className:"text-[1rem] sm:text-lg md:text-xl font-semibold mb-2",children:l}),(0,a.jsx)("p",{className:"text-sm sm:text-[1rem] md:text-lg text-[#ADB7BE] mr-11",children:i}),(0,a.jsx)(m.default,{target:"_blank",rel:"noopener noreferrer",href:r,className:"absolute bottom-5 right-5 rounded-full bg-slate-100 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center",children:(0,a.jsx)(I.Z,{className:"w-3 h-3 sm:w-5 sm:h-5 text-[#181818]"})})]}),(0,a.jsx)("div",{className:"absolute bottom-[-10px] right-[-10px] w-[100%] h-[100%] bg-opacity-70 rounded-xl z-0 ".concat(n?"bg-slate-100":"bg-slate-500")})]})},W=e=>{let{tag:t,onClick:l,isSelected:i}=e,r=(0,s.v9)(e=>e.darkMode);return(0,a.jsx)("button",{className:"rounded-full border-2 px-4 py-2 sm:px-6 sm:py-3 text-md sm:text-xl font-semibold cursor-pointer ".concat(i?"".concat(r?"text-white":"text-slate-800"," border-primary-500"):"".concat(r?"text-[#ADB7BE] border-slate-600 hover:border-primary-300 hover:text-slate-200":"text-slate-300 border-slate-300 hover:border-primary-300 hover:text-slate-400")),onClick:()=>l(t),children:t})};let F=[{id:1,title:"Qixin Web App",gitUrl:"https://qixin.com.au/",description:"QiXin Web is a real estate platform for building your dream home or collaborating with experts.",image:"./images/projects/Qixin.png",tag:["All","Web","Mobile"]},{id:2,title:"Qixin Web App",gitUrl:"https://qixin.com.au/",description:"QiXin Web is a real estate platform for building your dream home or collaborating with experts.",image:"./images/projects/Qixin.png",tag:["All","Web","Mobile"]},{id:3,title:"Qixin Web App",gitUrl:"https://qixin.com.au/",description:"QiXin Web is a real estate platform for building your dream home or collaborating with experts.",image:"./images/projects/Qixin.png",tag:["All","Web","Mobile"]},{id:4,title:"React Weather App",gitUrl:"https://github.com/IanTsung1999/weather-app",description:"a weather application using React.js",image:"./images/projects/weather-app.png",tag:["All","Web"]},{id:5,title:"React Weather App",gitUrl:"https://github.com/IanTsung1999/weather-app",description:"a weather application using React.js",image:"./images/projects/weather-app.png",tag:["All","Web"]},{id:6,title:"React Weather App",gitUrl:"https://github.com/IanTsung1999/weather-app",description:"a weather application using React.js",image:"./images/projects/weather-app.png",tag:["All","Web"]}];var z=()=>{let e=(0,s.v9)(e=>e.darkMode),[t,l]=(0,i.useState)("All"),r=(0,i.useRef)(null),n=(0,M.Y)(r,{once:!0}),c=e?"text-white":"text-slate-800",d=e=>{l(e)},x=F.filter(e=>e.tag.includes(t)),m={initial:{y:50,opacity:0},animate:{y:0,opacity:1}};return(0,a.jsxs)("section",{id:"projects",children:[(0,a.jsx)("h2",{className:"text-center text-4xl font-bold mt-4 mb-12 ".concat(c),children:"Projects"}),(0,a.jsxs)("div",{className:"flex flex-row justify-center items-center gap-4 sm:gap-6 py-6 mb-12 ".concat(c),children:[(0,a.jsx)(W,{onClick:d,tag:"All",isSelected:"All"===t}),(0,a.jsx)(W,{onClick:d,tag:"Web",isSelected:"Web"===t}),(0,a.jsx)(W,{onClick:d,tag:"Mobile",isSelected:"Mobile"===t})]}),(0,a.jsx)("ul",{ref:r,className:"grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 lg:gap-12",children:x.map((e,t)=>(0,a.jsx)(o.E.li,{variants:m,initial:"initial",animate:n?"animate":"initial",transition:{duration:.6,delay:.5*t},children:(0,a.jsx)(T,{gitUrl:e.gitUrl,imgUrl:e.image,title:e.title,description:e.description},e.id)},t))})]})},P=l(5851),R=l(6123);l(8062);var O={src:"/_next/static/media/github.86bb145f.svg",height:512,width:512,blurWidth:0,blurHeight:0},U={src:"/_next/static/media/linkedin.24aa6ab3.svg",height:512,width:512,blurWidth:0,blurHeight:0},Q=()=>{let e=(0,s.v9)(e=>e.darkMode),t=(0,i.useRef)(),[l,n]=(0,i.useState)(!1),[o,c]=(0,i.useState)(!1),d=e?"text-white":"text-slate-800",x=e?"bg-[#18191E]":"bg-gray-200",h=e?"placeholder-[#9CA2A9]":"placeholder-gray-400";return(0,a.jsxs)("section",{id:"contact",className:"grid md:grid-cols-2 my-12 py-24 gap-4 relative",children:[(0,a.jsxs)("div",{className:"z-10",children:[(0,a.jsx)("h5",{className:"text-xl font-bold my-2 ".concat(d),children:"Let's Connect"}),(0,a.jsxs)("p",{className:"".concat(e?"text-[#ADB7BE]":"text-gray-700"," mb-4 max-w-md"),children:[" ","I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"]}),(0,a.jsxs)("div",{className:"socials flex flex-row gap-6",children:[(0,a.jsx)(m.default,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/IanTsung",style:{filter:"".concat(e?"invert(100%) brightness(2)":"invert(0%) brightness(0)")},children:(0,a.jsx)(r.default,{src:O,alt:"github icon",width:25,height:25})}),(0,a.jsx)(m.default,{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/zhaoyancong/",children:(0,a.jsx)(r.default,{src:U,alt:"linkedin icon",width:25,height:25})})]})]}),(0,a.jsx)("div",{className:"z-10",children:(0,a.jsxs)("form",{ref:t,onSubmit:e=>{if(e.preventDefault(),l||o){o&&R.Am.warn("You just sent an email, please wait 1 minute before sending another.",{position:"top-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});return}n(!0),P.ZP.sendForm("service_5hapeoq","template_nmdi6xw",t.current,{publicKey:"mSrmyzS-bz3wMP6jP"}).then(e=>{R.Am.success("Thank you for reaching out!",{position:"top-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log("SUCCESS!",e.text)},e=>{R.Am.error("An error occurred sending your message, please try again",{position:"top-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log("FAILED...",e.text)}).finally(()=>{n(!1),c(!0),setTimeout(()=>{c(!1)},6e4)})},className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium ".concat(d),children:"Your Name"}),(0,a.jsx)("input",{type:"text",name:"from_name",id:"name",placeholder:"John Doe",className:"block w-full p-2.5 ".concat(d," text-sm rounded-lg border border-[#33353F] ").concat(h," ").concat(x)})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium ".concat(d),children:"Your Email"}),(0,a.jsx)("input",{type:"email",name:"from_email",id:"email",placeholder:"JohnDoe@abc.com",className:"block w-full p-2.5 ".concat(d," text-sm rounded-lg border border-[#33353F] ").concat(h," ").concat(x)})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"subject",className:"block mb-2 text-sm font-medium ".concat(d),children:"Subject"}),(0,a.jsx)("input",{type:"text",id:"subject",placeholder:"Just to say hi",className:"block w-full p-2.5 ".concat(d," text-sm rounded-lg border border-[#33353F] ").concat(h," ").concat(x)})]}),(0,a.jsxs)("div",{className:"mb-12",children:[(0,a.jsx)("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium ".concat(d),children:"Message"}),(0,a.jsx)("textarea",{name:"message",id:"message",rows:5,className:"block w-full p-2.5 ".concat(d," text-sm rounded-lg border border-[#33353F] ").concat(h," ").concat(x),placeholder:"Hi Ian, I'd like to talk about..."})]}),(0,a.jsx)("button",{type:"submit",className:"bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full sm:w-1/3 ".concat(l?"opacity-50 cursor-not-allowed":""),children:l?"Submitting...":"Submit"})]})}),(0,a.jsx)(R.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})},q=()=>{let e=(0,s.v9)(e=>e.darkMode)?"text-white":"text-slate-950";return(0,a.jsx)("footer",{className:"footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent ".concat(e),children:(0,a.jsxs)("div",{className:"flex justify-center items-center gap-4 md:gap-6 p-12",children:[(0,a.jsx)("span",{className:"font-zolasixx text-xl md:text-2xl",children:"IAN"}),(0,a.jsx)("p",{className:"text-sm md:text-base ".concat(e," font-sans"),children:"2024 \xa9 All rights reserved."})]})})},H=l(2817),L=l.n(H),Y=e=>{let{title:t,color:l,icon:i,link:r}=e,n=(0,s.v9)(e=>e.darkMode);return(0,a.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)("li",{className:"relative grid place-items-center w-48 h-48 ".concat(n?"":L().light),style:{"--color":l},children:[(0,a.jsx)("span",{className:L().base}),(0,a.jsx)("span",{className:L().title,children:t}),(0,a.jsx)("span",{className:L().icon,children:(0,a.jsx)("i",{className:"devicon-".concat(i)})})]})})};let Z={frontend:[{title:"HTML",color:"#E34F26",icon:"html5-plain"},{title:"CSS",color:"#1572B6",icon:"css3-plain"},{title:"TypeScript",color:"#3178C6",icon:"typescript-plain"},{title:"React",color:"#61DAFB",icon:"react-original"},{title:"Redux",color:"#764ABC",icon:"redux-original"},{title:"Tailwind",color:"#06B6D4",icon:"tailwindcss-original"},{title:"SASS",color:"#CC6699",icon:"sass-original"},{title:"Flutter",color:"#02569B",icon:"flutter-plain"}],backend:[{title:"Node.JS",color:"#339933",icon:"nodejs-plain-wordmark"},{title:"Express",color:"#888888",icon:"express-original"},{title:"Django",color:"#44B78B",icon:"django-plain"},{title:"ASP.NET",color:"#512BD4",icon:"dotnetcore-plain"},{title:"GraphQL",color:"#E10098",icon:"graphql-plain"},{title:"Dart",color:"#0175C2",icon:"dart-plain"},{title:"Rust",color:"#F74C00",icon:"rust-original"}],cloud:[{title:"AWS",color:"#FF9900",icon:"amazonwebservices-plain-wordmark"},{title:"Azure",color:"#0089D6",icon:"azure-plain"},{title:"GCP",color:"#4285F4",icon:"googlecloud-plain"}],database:[{title:"MongoDB",color:"#47A248",icon:"mongodb-plain"},{title:"DynamoDB",color:"#4053D6",icon:"dynamodb-plain"},{title:"PostgreSQL",color:"#336791",icon:"postgresql-plain"}],devops:[{title:"Docker",color:"#2496ED",icon:"docker-plain"},{title:"Jenkins",color:"#D24939",icon:"jenkins-plain"},{title:"Kubernetes",color:"#326CE5",icon:"kubernetes-plain"}]};var J=()=>{let e=(0,s.v9)(e=>e.darkMode)?"text-white":"text-slate-800";return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-center text-2xl my-12 font-semibold ".concat(e),children:"Frontend"}),(0,a.jsx)("ul",{className:"flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36",children:Z.frontend.map((e,t)=>(0,a.jsx)(Y,{title:e.title,color:e.color,icon:e.icon,link:e.link},t))}),(0,a.jsx)("h3",{className:"text-center text-2xl my-12 font-semibold ".concat(e),children:"Backend"}),(0,a.jsx)("ul",{className:"flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36",children:Z.backend.map((e,t)=>(0,a.jsx)(Y,{title:e.title,color:e.color,icon:e.icon,link:e.link},t))}),(0,a.jsx)("h3",{className:"text-center text-2xl my-12 font-semibold ".concat(e),children:"Cloud Services"}),(0,a.jsx)("ul",{className:"flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36",children:Z.cloud.map((e,t)=>(0,a.jsx)(Y,{title:e.title,color:e.color,icon:e.icon,link:e.link},t))}),(0,a.jsx)("h3",{className:"text-center text-2xl my-12 font-semibold ".concat(e),children:"Database"}),(0,a.jsx)("ul",{className:"flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36",children:Z.database.map((e,t)=>(0,a.jsx)(Y,{title:e.title,color:e.color,icon:e.icon,link:e.link},t))}),(0,a.jsx)("h3",{className:"text-center text-2xl my-12 font-semibold ".concat(e),children:"DevOps"}),(0,a.jsx)("ul",{className:"flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36",children:Z.devops.map((e,t)=>(0,a.jsx)(Y,{title:e.title,color:e.color,icon:e.icon,link:e.link},t))})]})},G=()=>{let e=(0,s.v9)(e=>e.darkMode),t=(0,i.useRef)(null);return(0,M.Y)(t,{once:!0}),(0,a.jsxs)("section",{id:"skills",children:[(0,a.jsx)("h2",{className:"text-center text-4xl font-bold mt-4 mb-12 ".concat(e?"text-white":"text-slate-800"),children:"Skills"}),(0,a.jsx)(J,{})]})};function V(){let e=(0,s.v9)(e=>e.darkMode);return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col ".concat(e?"bg-[#121212]":"bg-slate-50"),children:[(0,a.jsx)(v,{}),(0,a.jsxs)("div",{className:"container mt-24 mx-auto px-12 py-4",children:[(0,a.jsx)(d,{}),(0,a.jsxs)("div",{className:"flex flex-col xl:flex-row",children:[(0,a.jsx)(k,{}),(0,a.jsx)(_,{})]}),(0,a.jsx)(G,{}),(0,a.jsx)(z,{}),(0,a.jsx)(Q,{})]}),(0,a.jsx)(q,{}),(0,a.jsx)(B,{})]})}},2817:function(e){e.exports={base:"TechStackButton_base__WIF_x",spin:"TechStackButton_spin__pnTbN",title:"TechStackButton_title__18Y2v",icon:"TechStackButton_icon__rZVUa",wave:"TechStackButton_wave__brLoq",light:"TechStackButton_light__xAax9"}}},function(e){e.O(0,[922,59,533,971,69,744],function(){return e(e.s=186)}),_N_E=e.O()}]);