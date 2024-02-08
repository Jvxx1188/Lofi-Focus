import React, { useEffect } from "react";
import * as Icon from "./Icons/IconsComponent"
import { Expand } from "lucide-react";
import bgcontroller from "../../Cases & Controlers/BG/Controler/BGController";
function NavigationBarLayout(){
  
  useEffect(()=>{
    NavBar();
    bgcontroller.Set.Image("https://res.cloudinary.com/dtochimsz/image/upload/v1706201964/feitos/Design_sem_nome_4__upscayl_4x_realesrgan-x4plus-anime_upscayl_2x_realesrgan-x4plus-anime_sffhqm.jpg")
  },[])
    return (
        
        <div id="nav-layer" className=" w-screen duration-300
         h-screen flex justify-center items-end ">
        <div onClick={()=>FullScreen()} className="absolute top-0 left-0 m-3 w-12 h-12 text-white
         border border-white  flex items-center justify-center
        border-opacity-70 rounded-full bg-[rgba(255, 255, 255, 0.095)] duration-200 hover:p-3 hover:cursor-pointer hover:bg-[#0000003d] active:bg-white active:duration-0">
        <Expand size={30}/>
        </div>
        <nav id="nav-layout" className="h-14 rounded-full px-6 py-1 
        bg-[#0000006b]  m-8 flex items-center justify-between border-2 border-yellow-600 
        border-opacity-80 backdrop-blur-sm gap-2">
         
          <p id="nav-layout-text" className="max-w-96 max-h-12 text-white text-xl select-none flex-1 overflow-hidden line-clamp-2 leading-6">
            nada tocando
         </p>
        <div id="nav-layout-icons" className="flex flex-row items-center gap-2 ">
        
       
        {Icon.Clock}
        {Icon.Music}
        {Icon.Bg}
        </div>

                
         </nav>
       


        </div>
        
    ) 

    
}

function FullScreen(){
  document.body.requestFullscreen();
}
function NavBar(){
  let mouseTimeout: NodeJS.Timeout;
  let mouseTimeout2: NodeJS.Timeout;
 
  const NavBar = document.getElementById("nav-layer");
  if(!NavBar) return

  const EsconderNavBar = () =>{
    clearTimeout(mouseTimeout)
    clearTimeout(mouseTimeout2)
    console.log("aparecendo")
    NavBar.classList.remove("hidden")
setTimeout(() => {
    NavBar.classList.remove("opacity-0")
},10)
   mouseTimeout = setTimeout(() => {
      console.log("escondendo")
      NavBar.classList.add("opacity-0")
     
     mouseTimeout2 = setTimeout(() => {
        console.log("escondendo")
        NavBar.classList.add("hidden")
    
      }, 300);
    }, 2000);
  }



  
document.addEventListener("mouseup",()=>{
  EsconderNavBar()
})
document.addEventListener("mousemove",()=>{
  EsconderNavBar()
 })
}
export default NavigationBarLayout;




















//aqui é o layout navigation bar em sí, a barra de navegação terá os seus efeitos aqui,além do layout,os icones, a estilização, ele tambem tera a verificação desses componentes

//ELA VAI RETORNAR OS MEUS ICONS, </Music>, </Video> tlgd, a estilização deles vai vir dos próprios icones, da base naverdade


//olha, fazer com que meu sub script, ou seja um script que esta numa pasta menor que esta tenha requisições do meu texto é pedir para arrumar problema no codigo, o jeito certinho é o meu codigo mesmo enviar alguma solicitação para esse subscript, ai meu subscript pega e vai passando pra tras tlgd ou pedindo uma requisição que vai ser retornada,mas por padrão devo evitar ao maximo esse lance de importar um script que está mais perto do pai


//esse layout ta na tela junto com o relógio, não é pra ele estar no back? mas naverdade ele gerencia os layouts,bom então sim,doideira

//os layoutComponent vai estar no app né, e o timer tambem, e o background tambem,e a musica tambem, e o som tambem

//o layout componente engloba todos os layouts que eu criei