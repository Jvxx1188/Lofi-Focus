import React from "react";
import * as Icon from "./Icons/IconsComponent"


function NavigationBarLayout(){
    
    return (
        <div id="nav-layer" className="w-screen
         h-screen flex justify-end items-end">

        <nav id="nav-layout" className="w-72 h-10 rounded-full px-4 py-1 
        bg-transparent m-8 flex items-center justify-between border-2 border-yellow-600 
     border-opacity-80 backdrop-blur-sm">
         
         <p className="text-white select-none">
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
export default NavigationBarLayout;




















//aqui é o layout navigation bar em sí, a barra de navegação terá os seus efeitos aqui,além do layout,os icones, a estilização, ele tambem tera a verificação desses componentes

//ELA VAI RETORNAR OS MEUS ICONS, </Music>, </Video> tlgd, a estilização deles vai vir dos próprios icones, da base naverdade


//olha, fazer com que meu sub script, ou seja um script que esta numa pasta menor que esta tenha requisições do meu texto é pedir para arrumar problema no codigo, o jeito certinho é o meu codigo mesmo enviar alguma solicitação para esse subscript, ai meu subscript pega e vai passando pra tras tlgd ou pedindo uma requisição que vai ser retornada,mas por padrão devo evitar ao maximo esse lance de importar um script que está mais perto do pai


//esse layout ta na tela junto com o relógio, não é pra ele estar no back? mas naverdade ele gerencia os layouts,bom então sim,doideira

//os layoutComponent vai estar no app né, e o timer tambem, e o background tambem,e a musica tambem, e o som tambem

//o layout componente engloba todos os layouts que eu criei