import React from "react";
import BGLayoutComponent from "../../../Cases & Controlers/BG/CaseLayout/BGCaseLayoutComponent";
import ClockCaseLayout from "../../../Cases & Controlers/Clock/CaseLayout/ClockCaseLayoutComponent";
import MusicCaseLayout from "../../../Cases & Controlers/Music/CaseLayout/MusicCaseLayoutComponent";
    



 export function LayoutTypeComponent(id : {id : string}){
   //aqui eu retorno as cases da outra pasta, mas continua sendo uma layer 
        
        
       //vou criar uma case que vai retornar uma outra função dos layouts
            switch(id.id){
           case "icon-clock":
            return <ClockCaseLayout/>
            break;
        case "icon-music":
            return <MusicCaseLayout/>
            break;
        case "icon-bg":
            return <BGLayoutComponent/>
        break;
            default:
            return <div></div>
            break;
            }
        return <h1>HELlo</h1>
        
        }

//ESSA AQUI É A CASE

//aqui vai ter as chamadas dos meus icones, meus icones chamam isso aqui, e nao o contrario

//aqui tambem vai ser a case e gerenciamento dos layouts na tela, ai isso aqui vai aparecer na tela tlgd,

//é importado no NavigationBarLayout,importado uma instancia do NavigationBarLayout nos IconsComponent 

//tenq aparecer na tela e ter uma case para a troca do layout

//as chamadas do que clicarmos acontece dentro de cada Layout (BG,Music,Sound,Timer), eles que vao ter as chamadas pro back end, aqui nois só retorna o componente layout mesmo


//aqui meio que seria o gerenciador de layouts