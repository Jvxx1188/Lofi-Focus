 import React from "react"
 import * as clockpages from "./pages/clockpages"

export default function ClockCaseLayout(){
    return <div className="h-full flex">


    <div className="max-w-[400px] max-h-[620px] bg-[#231010] rounded-3xl flex flex-col overflow-hidden font-sans font-bold">
    
    <div className="bg-[#bf7878] w-full flex justify-center">
            <h1 className="text-3xl">Clock</h1>
            </div>
            <div className="w-full flex flex-col p-4 gap-2 text-center overflow-y-scroll">
       
        <clockpages.color/>
        <clockpages.size/>
        <clockpages.position/>
        <clockpages.font/>  
            </div>
    </div>
        
      
   
        

           
        
        
  
    </div> 
}