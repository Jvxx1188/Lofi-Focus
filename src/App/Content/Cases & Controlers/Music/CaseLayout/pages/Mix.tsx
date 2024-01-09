import React from "react"
import { VideoObject, musiccontroller } from "../../Controler/MusicControler"

export default function Mix(){
    return <div id="mix-layout" className="w-96 h-96 bg-cyan-900">
        <div className="mix-tracks flex flex-col">
            {/*pegar os mix */}
            {
                musiccontroller.mixtape.map((music,i) => {
                      return trackdiv(music,i)
                })
            }
        </div>
        <button onClick={musiccontroller.PauseMusic}>Pause video</button>
        <button  onClick={musiccontroller.Mix.NextTrack}>Resume video</button>
        <button >Musics</button>
        <button >Mix</button>
    </div>
}
function trackdiv(music : VideoObject,i : number){
    let classname = "px-2 py-1]";
    const resto = i % 2;
    if(i == musiccontroller.trackid){
         classname += " bg-cyan-700 "
    }else{
        classname += " bg-cyan-[951] " 
    }
    
    return <div onClick={() =>{ musiccontroller.trackid = i;musiccontroller.Mix.ChangeMusic(musiccontroller.mixtape[musiccontroller.trackid]); }} className={classname}>
    <p>{music.name}</p>
    </div> 
}