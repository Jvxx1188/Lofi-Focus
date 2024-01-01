import React from "react"
import {Clockorientation} from "./clockorientation/orientation"
import {Button} from "../../../../../../components/ui/button"
import { ScrollArea,ScrollBar } from "../../../../../../components/ui/scroll-area";
import clockcontroller from '../../Controler/ClockController';


export function color(){
return <div className="w-full"> <h1>color</h1></div>
}

export function size(){
    return <div className="w-full flex flex-row items-center justify-between">
    <h1 className="text-lg">
       Size  : 
    </h1>
        <div className="flex flex-row">
        <Button onClick={() =>clockcontroller.Set.size("text-6xl")}>small</Button>
        <Button onClick={() =>clockcontroller.Set.size("text-8xl")}>medium</Button>
        <Button onClick={() =>clockcontroller.Set.size("text-9xl")}>large</Button>
        </div>
        </div> 
}
export function position(){
    
    return <div className="w-full flex flex-col items-start ">
        <h1>position</h1>
        
        <div className="self-center w-60 aspect-video bg-gray-600 p-3 flex flex-col gap-4 text-black">
{/*posso pegar o id dela e inspecionar os elementos sla */}
        <div className="flex justify-between">
            <Clockorientation value="left"/>
            <Clockorientation value="right"/>
        </div>
        <div className="flex justify-center">
             <Clockorientation value="center"/>
        </div>
        
        </div>
        </div>
    
}

export function font(){
    return  <div className="w-full flex flex-col justify-center"> 
    <h1>font</h1>
    <ScrollArea className=" ">
<div className="flex flex-row w-40 gap-4">


    <Button onClick={() =>clockcontroller.Set.font("font-serif")} className="w-36 h-20 text-6xl font-serif">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font("font-thin")} className="w-36 h-20 text-6xl font-thin">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font("font-sans")} className="w-36 h-20 text-6xl font-sans">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font("font-mono")} className="w-48 h-20 text-6xl font-mono">12:00</Button>
    </div>
    <ScrollBar orientation="horizontal"/>
    </ScrollArea>
    </div>
}
export function weight(){
    return  <div className="w-full"> <h1>weight</h1></div>
}