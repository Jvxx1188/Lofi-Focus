import React from "react";
import { Settings2,Tv2,Plus,Image } from "lucide-react";
import { bgmanager } from "../BGCaseLayoutComponent";
export default function Style({children}){
    return <div className="w-96 h-96 bg-gradient-to-b from-black to-[#101010] rounded-3xl overflow-hidden">
        <nav className="flex flex-row h-8 justify-between">
        <div onClick={()=>bgmanager.Render(0)} className="w-full h-full flex items-center justify-center duration-150 bg-[#6174DB] hover:bg-black active:bg-white active:duration-0 hover:cursor-pointer"> <Image/></div>
        <div onClick={()=>bgmanager.Render(1)} className="w-full h-full flex items-center justify-center duration-150 bg-[#5191DB] hover:bg-black active:bg-white active:duration-0 hover:cursor-pointer"> <Tv2/></div>
        <div onClick={()=>bgmanager.Render(2)} className="w-full h-full flex items-center justify-center duration-150 bg-[#51BDDB] hover:bg-black active:bg-white active:duration-0 hover:cursor-pointer"> <Plus/></div>
        <div onClick={()=>bgmanager.Render(3)} className="w-full h-full flex items-center justify-center duration-150 bg-[#5451DB] hover:bg-black active:bg-white active:duration-0 hover:cursor-pointer"> <Settings2/></div>
        </nav>
        {children}
    </div>
}