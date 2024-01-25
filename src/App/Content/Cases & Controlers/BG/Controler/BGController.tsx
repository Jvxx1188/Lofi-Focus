import { VideoObj } from "../interface";
import { musiccontroller } from "../../Music/Controler/MusicControler";
import ReactDOM from "react-dom/client";
import React from "react";
class BGController {
    private youtube : YT.Player
    constructor(){
    
    }
   Set = {
    Video : (videoobj : VideoObj) =>{
      const videoid =  musiccontroller.extractYouTubeVideoId(videoobj.url);
      
        
       //radio DO VIDEO
            //com window eu consigo saber se meu monitor está na vertical ou horizontal
            //quando uma linha de proporção troca, o foco da horizontal passa a ser a vertical e vice-versa

            let proporção;
            
            //horizontal ou lateral
            
            console.log(window.innerWidth / window.innerHeight , videoobj.radio[0] / videoobj.radio[1])
                
            if(window.innerWidth / window.innerHeight < videoobj.radio[0] / videoobj.radio[1]){
                proporção = "h-full";} else{ proporção = "w-full";}

            //aqui vamos criar uma div pois meu iframe precisa de uma box  com o aspect radio nela para ele tomar o tamanho inteiro dela, tambem fazemos uma div abaixo porque se eu passar pra essa caixa a caixa vira o iframe
        const div = document.getElementById("bg-layer-container"); if(!div) return;
        //se ja tinha outro player ele é deletado
        div.innerHTML = "";
        const radio =' aspect-'+videoobj.radio[0]+"-"+videoobj.radio[1]+' ' ;
        //essa é a caixa do iframe
        const DivBoxToYtPlayer = document.createElement("div");
        DivBoxToYtPlayer.id = 'DivBoxToYtPlayer';
        DivBoxToYtPlayer.className = "w-full h-full aspect-video";
        //esta é o container da caixa com aspect radio
        div.className = proporção+ radio +" flex items-center justify-center";
               div.appendChild(DivBoxToYtPlayer);

                this.youtube = new YT.Player('DivBoxToYtPlayer',{
                    videoId: videoid,
                 playerVars : {
                    autoplay : 1,
                    disablekb : 1,
                    showinfo : 0,
                    controls : 0,
                    loop : 0,
                    iv_load_policy : 3,
                    playlist: videoid,
                    
                 }
           ,events: {
            onReady: (event) => {
                event.target.mute();
            },

            onStateChange(event) {
                if (event.data === YT.PlayerState.ENDED) {
                        event.target.playVideo();
                }

                  
               
            }
            }
        });
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