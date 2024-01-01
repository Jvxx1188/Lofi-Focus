 import React from "react"
 import * as clockpages from "./pages/clockpages"
 import {ScrollArea} from "../../../../../components/ui/scroll-area"
 
export default function ClockCaseLayout(){
    return <div className="w-80  h-[80%] bg-black flex">

        <ScrollArea className="w-full flex flex-col gap-6 p-6 text-center">
        <h1 className="text-3xl font-semibold font-sans ">Clock</h1>
        <clockpages.color/>
        <clockpages.size/>
        <clockpages.position/>
        <clockpages.font/>  
        <clockpages.weight/>
        </ScrollArea>
        
    </div>
}