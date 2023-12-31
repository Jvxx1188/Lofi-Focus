    //parei no problema que a tipagem de quando eu envio os icones para dentro do state ele da erro dizendo que não consegue atribuir htmlelement | null a never,
    import React,{Dispatch} from "react";
    import { Clock4,Music2 ,WallpaperIcon,   LucideIcon } from "lucide-react"
    import clockcontroller from "../../../Cases & Controlers/Clock/Controler/ClockController";
  //as chamadas estao dentro de layout manager, 

    //pegar o evento listener e saber quando ele foi clicado, e assim chamar a função que rencia ele

//e se eu chamar minha função de add aqui,ter o meu id pré-configurado e uma função de chamada, mas o add event listener é aqui, porém ele só funciona quando estiver na tela mas quando retornar eu chamo uma função que chama ele



//aqui

export function IconBase(Id : string,Icon : LucideIcon){
   const myId = "icon-"+Id;

//ele tenq esperar o embaixo carregar primeiro pra depois chamar,entao eu acho que a melhor solução é um await pra aguardar já que o effect está certinho tlgd

    
    
   return (
        <div id={myId}  className="nav-icon-container w-7 h-7 
         border border-white 
        border-opacity-70 rounded-full bg-white  hover:p-1 hover:cursor-pointer">
            <div className="w-full h-full rounded-full flex items-center justify-center">
            <Icon color="white" className="rounded-full w-[75%]"/>
            </div>
        </div>
    );
    }


    //props só consegue ser definido no html,

    ////////////////////////////////
    export const Clock=IconBase("clock",Clock4) as React.JSX.Element;
    export const Music =IconBase("music",Music2) as React.JSX.Element;
    export const Bg = IconBase("bg",WallpaperIcon) as React.JSX.Element;



    export function ValidateIconClicks(state :string,setstate :Dispatch<React.SetStateAction<string>>){
        const MyIcon = Array.from(document.getElementsByClassName("nav-icon-container"));
            MyIcon.map((icon) =>{
                            icon.classList.add("nav-icon-container-start")
                            icon.addEventListener("click",()=>{
                              console.log(state)
                              const value = state === icon.id ? "none" : icon.id;
                              //retorna true e false
                              //vamos adivinhar o valor da state
clockcontroller.UpdateClock("text-red-500","Arial","50px","center");
                              setstate(value); 
                              state = value;
                            })
                    })
    }



    //o import importa os codigos, eles vao ficar rodando como verificaçoes, mas os componentes deles vão ser outra função dentro desse mesmo script tlgd, que vao ser chamadas.


    //aqui vou criar uma função base e após isso criar meus componentes encima dessa base, essa base vai ter a estilização comum dos icones,(hover e tals), e também a ação do clique, daqui vai ser a chamada,para a minha case, e provavelmente vai ser um case changer com o nome que a case deve trocar tlgd

    //a base vai vir com a estilização e com o parametro da case pra retornar caso clique
  