import React, { useEffect, useState } from "react";
import {LayoutTypeComponent} from "./Manager/LayoutManager";
import {ValidateIconClicks} from "../NavigationBarLayer/Icons/IconsComponent";

function LayoutComponent(){
  const [Layoutname,SetLayoutname] = useState("none")

  useEffect(()=>{
    //instancia vai servir só pra mudar o state
    //addeventlistener vai ser separado da instacia
    ValidateIconClicks(Layoutname,SetLayoutname)
  },[])

    return (
        //aqui é a caixa e aqui é a posição inicial do layout
        <div className="absolute top-0 
        left-0 w-screen h-screen text-white flex justify-end align-top p-9 select-none">
        {/*aqui é a posição inicial do layout*/}

            <div>
            <LayoutTypeComponent id={Layoutname}/>
            </div>
    </div>
    )
}


//aqui eu crio uma variavel chamada state que vai ser igual ao meu state, mas a partir da instancia o meu state passa a ser igual a essa variavel

//sempre que meu nome muda o useefect é rodado denovo,porem minha void ainda esta instanciada isso faz com que seja chamado denovo e cria varias funções de verificação, ao clicar eu tenho que dar um break ou veriicar isso melhor


  // o useeffect atualiza sempre que mudar e cria uma nova instancia
  // o addeventlistener se duplica automaticamente
  //o addeventlistener deveria ser instanciado só uma vez
  //a função precisa ser chamada no componente e mudar o state dela

export default LayoutComponent;