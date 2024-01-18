import { VideoObj } from "../interface";
import { musiccontroller } from "../../Music/Controler/MusicControler";
import ReactDOM from "react-dom/client";
import React from "react";
class BGController {
    
    MonitorRadio = [16,9]
    constructor(){

    }
   Set = {
    Video : (videoobj : VideoObj) =>{
      const videoid =  musiccontroller.extractYouTubeVideoId(videoobj.url);
      
       let extra;
        
       //radio DO VIDEO
            //com window eu consigo saber se meu monitor está na vertical ou horizontal
            //quando uma linha de proporção troca, o foco da horizontal passa a ser a vertical e vice-versa

            let proporção;
            
            //horizontal ou lateral
            console.log(this.MonitorRadio[0]/this.MonitorRadio[1] , videoobj.radio[0] / videoobj.radio[1])
                
            if(window.innerWidth / window.innerHeight < videoobj.radio[0] / videoobj.radio[1]){
                proporção = "h-full";} else{ proporção = "w-full";}

        const div = document.getElementById("bg-layer"); if(!div) return;
        const root =  ReactDOM.createRoot(div);

        const radio =videoobj.radio[0]+"/"+videoobj.radio[1]

        root.render(
            <div className={proporção+" aspect-["+radio+"] flex items-center justify-center"}>
                <iframe className={"w-full h-full"} src={"https://www.youtube.com/embed/"+videoid+"?autoplay=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
            </div>

            
        )
        
        
    },

    Image : (url : string)=>{
        const div = document.getElementById("bg-layer"); if(!div) return;
        const root =  ReactDOM.createRoot(div);


        root.render(
        <img className="object-cover w-full h-full" src={url}></img>
        )
    }
   }
}

const bgcontroller = new BGController()
export default bgcontroller;