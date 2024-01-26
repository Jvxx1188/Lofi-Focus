import React from "react";
import Style from "./STYLE";
import { Videos } from "./selecteds/selected";
import bgcontroller from '../../Controler/BGController';
export default function VideoCase(){

    const scrollParaSecao =(event,id)=> {
        event.preventDefault();
        const div = document.getElementById(id);
        if(!div) return;
        div.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }

    return <Style>

        
        <div className="flex flex-row h-full">
        <div className="flex flex-col overflow-y-scroll p-[0px] gap-1">
            {Videos.map((cartegory) =>{
                return <div onClick={(e)=>scrollParaSecao(e,cartegory.tittle)} className="h-20 bg-[#00000067] font-bold px-2 text-sm flex items-center justify-center text-center hover:bg-black duration-150 rounded-md hover:cursor-pointer active:bg-[#ffffff66] active:duration-0">{cartegory.tittle}</div>
            })}
        </div>
            <div className="flex-1 h-full overflow-y-scroll p-3 gap-6 flex flex-col">
            {Videos.map((cartegory) =>{
            return <div id={cartegory.tittle} className="flex flex-col items-center gap-4 bg-[#000000aa] p-3 rounded-3xl">
            <h1 className="my-1 text-3xl font-bold self-center ">{cartegory.tittle}</h1>

            <div className="grid coluna gap-4">
            {
            cartegory.values.map((video)=>{
            return <div className="rounded-xl hover:outline duration-100 hover:cursor-pointer hover:outline-white overflow-hidden active:outline-6 active:outline-black active:duration-0" onClick={()=>{return video.type =="youtube"? bgcontroller.Set.Video(video) : bgcontroller.Set.wistia(video)}}>
                <img className="aspect-video object-cover" src={video.ImageUrl} alt="" />
                </div>
            })
            }
            </div>
            </div>
        })}
            </div>
        
        
        </div></Style> 
}