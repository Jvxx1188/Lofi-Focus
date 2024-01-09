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
const [time, setTime] = React.useState(new Date())
useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date())
    }, 5000)
    return () => clearInterval(interval)
}, [])
    //get element by id,and add yellow prop
//aqui é o relogio, não a case

   return <h1 className={" w-full "+props.color+ props.size + props.position + props.font}>{time.getHours() + ":" +time.getMinutes()}</h1>
}