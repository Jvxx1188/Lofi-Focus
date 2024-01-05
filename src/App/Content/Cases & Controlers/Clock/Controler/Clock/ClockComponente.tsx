import React from "react"

interface ClockProps{
    time : DateConstructor
    color : string
    font : string
    size : string
    position : string
    weight : string
}

export default function Clock(props : ClockProps){  
//get element by id,and add yellow prop

//aqui é o relogio, não a case
console.log(props)
   return <h1 className={" w-full "+props.color+ props.size + props.position + props.font}>12:00</h1>
}