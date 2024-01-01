import React from "react"

interface ClockProps{
    time : DateConstructor
    color : string
    font : string
    size : string
    position : string
}

export default function Clock(props : ClockProps){  
//get element by id,and add yellow prop

//aqui é o relogio, não a case
console.log(props)
   return <h1 className={ " w-full "+ props.size+" " + props.color + props.position}>12:00</h1>
}