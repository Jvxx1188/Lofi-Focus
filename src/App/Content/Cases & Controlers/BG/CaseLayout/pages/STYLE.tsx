import React from "react";
import { /*Settings2,*/Tv2/*,Plus*/,Image } from "lucide-react";
import { bgmanager } from "../BGCaseLayoutComponent";
export default function Style({children}){
    return <div className="flex-1 max-w-[768px] bg-gradient-to-b from-[#05062c] to-[#0e0f55] rounded-3xl flex flex-col">
       <nav className=" h-8 flex flex-row flex-shrink-0 h-8 justify-between ">
        <div onClick={()=>bgmanager.Render(0)} className="w-full h-full flex items-center justify-center duration-150 bg-[#0011FF] hover:bg-black active:bg-white active:duration-0 hover:cursor-pointer"> <Image/></div>
        <div onClick={()=>bgmanager.Render(1)} className="w-full h-full flex items-center justify-center duration-150 bg-[#0011FF] hover:bg-black active:bg-white active:duration-0 hover:cursor-pointer"> <Tv2/></div>
       {/* <div onClick={()=>bgmanager.Render(2)} className="w-full h-full flex items-center justify-center duration-150 bg-[#0011FF] hover:bg-black active:bg-white active:duration-0 hover:cursor-pointer"> <Plus/></div>
        <div onClick={()=>bgmanager.Render(3)} className="w-full h-full flex items-center justify-center duration-150 bg-[#0011FF] hover:bg-black active:bg-white active:duration-0 hover:cursor-pointer"> <Settings2/></div>
       */} </nav> 
        <div className="overflow-y-scroll">
        {children}
        </div>
        </div>
        
        
}