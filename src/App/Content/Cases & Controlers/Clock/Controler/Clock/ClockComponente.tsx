import React, { useEffect } from "react"

interface ClockProps{
    time : DateConstructor
    color : string
    font : string
    size : string
    position : string
    weight : string
}

export default function Clock(props : ClockProps){  
const [time, setTime] = React.useState("12:00")
useEffect(() => {
    const interval = setInterval(() => {
        const date = new Date()
        let time = date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours() + ":" as string;
        time += date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
       setTime(time)
    }, 1000)
    return () => clearInterval(interval)
}, [])
    //get element by id,and add yellow prop
//aqui é o relogio, não a case

   return <h1 className={"font w-full "+props.color+ props.size + props.position + props.font }>{time}</h1>
}