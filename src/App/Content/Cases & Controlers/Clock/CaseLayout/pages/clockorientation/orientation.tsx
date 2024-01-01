import React from "react"
import clockcontroller from '../../../Controler/ClockController';

interface ClockProps{
    value? : string
}
export function Clockorientation(value :ClockProps){
    //se eu fazer desse jeito vai dar muito trabalho, eu vou fazer um controller do case layout
   const classname = " clock-case flex w-24 h-15 aspect-video bg-white col-span-2 p-1  hover:outline-2 outline-red-500 hover:outline-double hover:cursor-pointer   active:bg-gray-800 active:duration-0 transition duration-300"
    if(value.value == "left"){
        return  <div id="clock-case-left" onClick={()=>{clockcontroller.Set.position(" self-end ")}} className={"items-end" + classname}>
               <p>12:00</p>
                </div>
    }
    if(value.value == "right"){
        return  <div id="clock-case-right" onClick={()=>{clockcontroller.Set.position(" text-end self-end ")}} className={"justify-end items-end" + classname}>
               <p>12:00</p>
                </div>
    }
    if(value.value == "center"){
        return  <div id="clock-case-center" onClick={()=>{clockcontroller.Set.position(" text-center self-center ")}} className={"justify-center items-center" + classname}>
    <p>12:00</p>
    {/*mais pra frente eu configuro melhor toda a estetica*/}
                </div>
    }
}