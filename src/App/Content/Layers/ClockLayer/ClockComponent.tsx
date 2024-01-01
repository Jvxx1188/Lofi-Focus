import React, { useEffect } from "react"
import clockcontroller from "../../Cases & Controlers/Clock/Controler/ClockController"
import ReactDOM from 'react-dom/client'
//essas funções anexadas por enquanto nao fazem nada

export default function ClockComponent(){
    const id = "clock-layer";
    useEffect(()=>{
        console.log()
        clockcontroller.ClockRender = ReactDOM.createRoot(document.getElementById(id)!)
        clockcontroller.UpdateClock();
    },[])
    
    return <div id={id} className="w-screen h-screen absolute top-0 left-0 flex overflow-hidden p-20 select-none ">
 {/*essa layer aqui é uma caixa para render*/}
 {/*o import acima é o controller dessa layer*/}

     </div>
}
