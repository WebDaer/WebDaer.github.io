import{a as i,j as e}from"./index-c4ac40b6.js";import{u as l}from"./create-visual-element-c256cf8b.js";import{L as n,d as s,m as a}from"./features-animation-d52e0753.js";const o={hidden:{opacity:0,scale:.6},visible:{opacity:1,scale:1,transition:{duration:.5}}},r={hidden:{opacity:0,scale:.7,x:10},visible:{opacity:1,scale:1,x:0,transition:{duration:1}}},d={hidden:{opacity:0,scale:.7,x:-100},visible:{opacity:1,scale:1,x:0,transition:{duration:1}}},h=()=>{const{t}=l();return i(n,{features:s,children:e(a.div,{initial:"hidden",whileInView:"visible",viewport:{amount:.9},variants:o,className:" h-full text-white",children:[i("h2",{className:" font-black   xl:text-6xl lg:text-5xl xl:px-[36%] lg:px-[30%] text-center text-2xl font-rubik py-16 ",children:t("AboutMe")}),e("div",{className:" lg:flex lg:justify-around lg:items-center my-3",children:[window.innerWidth>1023&&i(a.img,{loading:"lazy",initial:"hidden",whileInView:"visible",viewport:{amount:.5},variants:d,className:" hidden lg:block",width:"500",height:"500",src:"/src/assets/img/person.svg",alt:"Картинка к тексту обо мне"}),e(a.h3,{initial:"hidden",whileInView:"visible",viewport:{amount:.9},variants:r,className:" xl:leading-normal xl:w-1/2 xl:text-4xl lg:text-[29px]  md:text-2xl font-rubik  lg:text-left lg:leading-normal sm:leading-loose leading-relaxed px-10  py-[calc(20vh/4)]  text-center   text-xl  font-semibold ",children:[t("TextAboutMe Hi"),i("br",{}),t("Will")]})]})]})})};export{h as default};
