 import React from "react"
 import * as clockpages from "./pages/clockpages"
 import {ScrollArea} from "../../../../../components/ui/scroll-area"
 
export default function ClockCaseLayout(){
    return <div className="w-80  h-[80%] bg-[#231010] rounded-3xl flex flex-col overflow-hidden font-sans font-bold">
            <div className="bg-[#bf7878] w-full flex justify-center">
            <h1 className="text-3xl">Clock</h1>
            </div>
        <ScrollArea >
        <div className="w-full flex flex-col p-4 gap-2 text-center">
        
        <clockpages.color/>
        <clockpages.size/>
        <clockpages.position/>
        <clockpages.font/>  
        </div>
        </ScrollArea>
        
    </div>
}