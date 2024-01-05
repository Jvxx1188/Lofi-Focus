import React from "react"
import {Clockorientation} from "./clockorientation/orientation"
import {Button} from "../../../../../../components/ui/button"
import { ScrollArea,ScrollBar } from "../../../../../../components/ui/scroll-area";
import clockcontroller from '../../Controler/ClockController';


export function color(){

const classname = "inline-flex w-10 h-10 border border-white gap-2";
return <div className="w-full"> 
<h1 className="text-[#8F4141] text-xl">color</h1>
<ScrollArea>
<div className="space-x-2 mt-2">
<div onClick={() =>clockcontroller.Set.color("red")} className={classname+" bg-red-500"}/>
<div onClick={() =>clockcontroller.Set.color("green")} className={classname+" bg-green-500"}/>
<div onClick={() =>clockcontroller.Set.color("yellow")} className={classname+" bg-yellow-400"}/>
<div onClick={() =>clockcontroller.Set.color("blue")} className={classname+" bg-blue-500"}/>
<div onClick={() =>clockcontroller.Set.color("gray")} className={classname+" bg-gray-500"}/>
<div onClick={() =>clockcontroller.Set.color("black")} className={classname+" bg-black"}/>
<div onClick={() =>clockcontroller.Set.color("white")} className={classname+" bg-white"}/>
<div onClick={() =>clockcontroller.Set.color("cyan")} className={classname+" bg-cyan-400"}/>
<div onClick={() =>clockcontroller.Set.color("purple")} className={classname+" bg-purple-700"}/>
</div>
</ScrollArea>
</div>
}

export function size(){
    return <div className="w-full flex flex-col items-center justify-between gap-2">
    <h1 className="text-xl text-[#8F4141] text-xl">
       size
    </h1>
        <div className="flex flex-row gap-2">
        <Button className="bg-[#4A2121] rounded-xl" onClick={() =>clockcontroller.Set.size(" text-6xl ")}>small</Button>
        <Button className="bg-[#4A2121] rounded-xl" onClick={() =>clockcontroller.Set.size(" text-8xl ")}>medium</Button>
        <Button className="bg-[#4A2121] rounded-xl" onClick={() =>clockcontroller.Set.size(" text-9xl ")}>large</Button>
        </div>
        </div> 
}
export function position(){
    
    return <div className="w-full flex gap-2 flex-col ">
        <h1 className="text-[#8F4141] text-xl">position</h1>
        
        <div className="self-center w-60 aspect-video bg-orange-800 p-3 flex flex-col gap-4 rounded-md text-black">
{/*posso pegar o id dela e inspecionar os elementos sla */}
        
        <div className="flex justify-center">
             <Clockorientation value="center"/>
        </div>

        <div className="flex justify-between">
            <Clockorientation value="left"/>
            <Clockorientation value="right"/>
        </div>
       
        
        </div>
        </div>
    
}

export function font(){
    return  <div className="w-full flex flex-col justify-center gap-2"> 
    <h1 className="text-[#8F4141] text-xl">font</h1>
    <ScrollArea>
<div className="flex flex-row gap-2 w-40">
    <Button onClick={() =>clockcontroller.Set.font(" font-sans ")} className="w-36 h-24 text-6xl font-sans bg-[#4A2121] rounded-xl hover:bg-[#331212]">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font(" font-serif ")} className="w-36 h-24 text-6xl font-serif bg-[#4A2121] rounded-xl hover:bg-[#331212]">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font(" font-thin ")} className="w-36 h-24 text-6xl font-thin bg-[#4A2121] rounded-xl hover:bg-[#331212]">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font(" font-rubikscribble ")} className="w-48 h-24 text-6xl font-rubikscribble bg-[#4A2121] rounded-xl hover:bg-[#331212]">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font(" font-mono ")} className="w-48 h-24 text-6xl font-mono bg-[#4A2121] rounded-xl hover:bg-[#331212]">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font(" font-rubikdoodle ")} className="w-48 h-24 text-6xl font-rubikdoodle bg-[#4A2121] rounded-xl hover:bg-[#331212]">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font(" font-oswald-300 ")} className="w-48 h-24 text-6xl font-oswald-300 bg-[#4A2121] rounded-xl hover:bg-[#331212]">12:00</Button>
    <Button onClick={() =>clockcontroller.Set.font(" font-oswald-700 ")} className="w-48 h-24 text-6xl font-oswald-700 bg-[#4A2121] rounded-xl hover:bg-[#331212]">12:00</Button>
</div>

    
    <ScrollBar orientation="horizontal"/>
    </ScrollArea>
    </div>
}
//não tem weight pois esta tendo problemas de weight entre as fontes