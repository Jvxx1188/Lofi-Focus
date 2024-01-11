import React, { useEffect, useRef, useState } from "react"
import { VideoObject, musiccontroller } from "../../Controler/MusicControler"
import {Button} from "../../../../../../components/ui/button"
import { Play,Pause,MoveUp,MoveDown,SkipForward,SkipBack, LucideIcon, ChevronUp, ChevronDown } from "lucide-react"
import {ScrollArea} from "../../../../../../components/ui/scroll-area"
import {Separator} from "../../../../../../components/ui/separator"
export default function Mix(){
    
    if(!musiccontroller.Youtube || musiccontroller.hastarted == 0){
return <h1 id="loading-mix">Carregando</h1>
        }

  return  <div className="w-96 h-[80%] bg-yellow-600 flex flex-col rounded-3xl overflow-hidden">
       
       <ButtonBox/>
       <ScrollArea>
        <div className="p-1 py-3">
       <MixTracksBox/>
        </div>
       </ScrollArea>
</div>
}

export function MixTracksBox(){
    return <div id="tracks" className="w-full flex-1 flex flex-col ">
    {
        musiccontroller.mixtape.map((music,i) => {
            return trackdiv(music,i)
        })
    }
</div>
}
function trackdiv(music : VideoObject,i : number){
  let classname = "";
    if(i == musiccontroller.trackid){
        classname += " bg-[#e67009] "
   }else{
       classname += " bg-[#D88843] " 
   }

    return <div className={'flex flex-row px-1 py-4  h-8 rounded-lg text-white text-sm font-medium items-center justify-between border border-yellow-400 hover:bg-[#F7852F]'+ classname}>
    <div id='mix-tittle' className='flex-1 flex flex-col p-1' onClick={() =>{ musiccontroller.trackid = i;musiccontroller.Mix.ChangeMusic(musiccontroller.mixtape[musiccontroller.trackid]); }}>
    <p >{music.name}</p>
    <p className='text-xs text-slate-100'>{music.authorname}</p>
    </div>
    <div className='w-4 flex flex-col gap-[1px] rounded-full bg-white bg-opacity-10 border-[0.1px] ' id='track-roll'>
  
  <div id='mix-roll-up' className=' h-3 flex items-center justify-center rounded-t-full duration-100 hover:bg-black hover:bg-opacity-20 active:bg-yellow-950 active:duration-0'>
  <ChevronUp size={15}/>
  </div>
  <Separator/>
  <div id='mix-roll-down' className=' h-3 flex items-center justify-center rounded-b-full duration-100 hover:bg-black hover:bg-opacity-20 active:bg-yellow-950 active:duration-0'>
  <ChevronDown size={15}/>
  </div>
    </div>
    </div>
    
    /*<div >
   
    
   </div> */
}

export function ButtonBox(){
return <div id="button-box" className=" bg-black flex flex-row justify-center items-center gap-6 ">
   {/*ButtonMix(MoveUp,musiccontroller.Mix.MoveUp)*/}
        {/*ButtonMix(MoveDown,musiccontroller.Mix.MoveDown)*/}
        
        {ButtonMix(SkipBack,()=>{musiccontroller.Mix.NextOrBackTrack(-1)} )}
     {PlayOrPause()}
        {ButtonMix(SkipForward,()=>{musiccontroller.Mix.NextOrBackTrack(1)} )}
        </div>  
   
}
function ButtonMix(Icon : LucideIcon,call : () => void)
{
return <div className="w-10 h-10 flex justify-center items-center" onClick={call}>
    <Icon className=""/>
</div>
}

function PlayOrPause()
{

    const Icon = musiccontroller.isplaying ==false ?Play: Pause 
    
    console.log(musiccontroller.isplaying)
    const left = musiccontroller.Youtube.getPlayerState() === YT.PlayerState.PLAYING ? "left-[50%]" : "left-[53%]"

return <div className="w-8 h-8 rounded-full bg-white relative" onClick={musiccontroller.PlayOrPauseMusic}>
    <Icon color="black" className={"absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2 " + left}/>
</div>
}
export function avisos(){

    //aqui eu verifico as coisas la do player, mas o controller que me renderiza denovo, ele vai achar minha tag e vai me renderizar no proprio elemento dnv
}