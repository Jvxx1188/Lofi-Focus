import { VideoObj } from "../interface";
import { musiccontroller } from "../../Music/Controler/MusicControler";
import ReactDOM from "react-dom/client";
import React from "react";
class BGController {
    private youtube : YT.Player
    constructor(){
    
    }
   Set = {
    wistia : (videoobj : VideoObj) =>{
        console.log("wistia")
        console.log("wistia");

        const div = document.getElementById("bg-layer-container");
        if (!div) return;
        const root = ReactDOM.createRoot(div);


        let proporção;
            
        //horizontal ou lateral
        
        console.log(window.innerWidth / window.innerHeight , videoobj.radio[0] / videoobj.radio[1])
            
        if(window.innerWidth / window.innerHeight < videoobj.radio[0] / videoobj.radio[1]){
            proporção = "h-full";} else{ proporção = "w-full";}

    const radio =' aspect-'+videoobj.radio[0]+"-"+videoobj.radio[1]+' ' ;
    //essa é a caixa do iframe
        
    div.className = proporção+ radio +" flex items-center justify-center";

        root.render(
            <iframe className="w-full h-full aspect-video"
                src={`https://fast.wistia.net/embed/iframe/${videoobj.url}?version=v1&autoPlay=true`}
                frameBorder="0"
                scrolling="no"
                name="wistia_embed"
                allowFullScreen></iframe>
        );

        window._wq = window._wq || [];
        
        _wq.push({ id: videoobj.url, onReady: function(video) {
            console.log("I got a handle to the video!", video);
            video.play();
           
            video.bind('end', function() {
                console.log('play')
                video.play()
                
                // Faça algo após o término do vídeo
              });
          }});
    },
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

            onStateChange(event) {
                if (event.data === YT.PlayerState.ENDED) {
                        event.target.playVideo();
                }

                  
               
            }
            }
        });
        },
                
    Image : (url : string)=>{
        const div = document.getElementById("bg-layer-container"); if(!div) return;

        const root =  ReactDOM.createRoot(div);


        root.render(
        <img className="object-cover w-screen h-screen overflow-hidden" src={url}></img>
        )
    }
   }
}

const bgcontroller = new BGController()
export default bgcontroller;