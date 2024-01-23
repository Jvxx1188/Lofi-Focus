//aqui é o controlador de musica
// ele que manipular a caixa #music-layer
import ReactDOM from 'react-dom/client';
import React from 'react';
import {cartegories} from "./musics/selected.ts"
import {MixTracksBox,ButtonBox,Avisos} from "../CaseLayout/pages/Mix.tsx"
import Mix from "../CaseLayout/MusicCaseLayoutComponent.tsx"
export interface VideoObject{
    name : string,
    url : string,
    type : string,
    authorname : string,
    authorurl : string
}
class MusicController{
    //a primeira coisa que devo fazer é manualmente conseguir gerenciar as musicas
    
    public mixtape : Array<VideoObject> = []
    trackid : number = -1 
    public msc ;
    public Youtube : YT.Player;
    public hastarted = 0;
    public isplaying = false;
    constructor(){
    }
    
    

    CreateYoutube = () =>{
        console.log("criando youtube player, aguarde...")
        this.Youtube = new YT.Player('music-layer',{
            height: '0',
            width: '0',
            videoId: '',
         playerVars : {
            autoplay : 0,
         }
        })
        this.Youtube.addEventListener('onReady', ()=>{
        this.hastarted = 1;
        this.Mix.GetAndUpdateComponent("loading-mix",Mix)
        })
        this.Youtube.addEventListener('onStateChange', (change: YT.PlayerEvent)=>{
          if(change["data"] == YT.PlayerState.PLAYING) {
            this.isplaying = true
            this.Mix.UpdateMixVariables()
            this.Mix.GetAndUpdateComponent("mix-avisos",Avisos);
          }
          if(change["data"] == YT.PlayerState.BUFFERING){
            this.Mix.UpdateMixVariables()
            this.Mix.GetAndUpdateComponent("mix-avisos",Avisos);
          }
          if(change["data"] == YT.PlayerState.PAUSED) {
            this.isplaying = false
            this.Mix.UpdateMixVariables()
          }
            if(change["data"] == YT.PlayerState.ENDED){
                
            console.log( "Terminou")
            this.Mix.NextOrBackTrack(1)
            }
        })
}
PlayOrPauseMusic = () =>{
    if(this.Youtube.getPlayerState() === YT.PlayerState.PLAYING){
        this.Youtube.pauseVideo()
    }else{
        this.Youtube.playVideo()
    }
}

    extractYouTubeVideoId =(url : string)=> {
    let videoId = "";
  
    if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1];
      } 
      // Verifica os formatos youtube.com
      else if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('youtube.com/watch?v=')[1];
      } else if (url.includes('youtube.com/v/')) {
        videoId = url.split('youtube.com/v/')[1];
      } 
      // Verifica o formato youtube.com com parâmetros adicionais
      else if (url.includes('youtube.com/') && url.includes('?v=')) {
        videoId = url.split('youtube.com/')[1].split('?v=')[1];
      }
      // Verifica o formato youtu.be com parâmetros adicionais
     
    
      // Limita o ID do vídeo a 11 caracteres
      if (videoId && videoId.length > 11) {
        videoId = videoId.substring(0, 11);
      }
      console.log(videoId)
      return videoId;
    }

 
  ClearMix = () =>{
    const MscAtual = this.mixtape[this.trackid]


    this.mixtape = []
    if(MscAtual){
        this.mixtape.push(MscAtual)
    }

    this.Mix.UpdateMixVariables()
    this.trackid = 0;
  }

//função que automaticamente vai pegar todas as cartegorias
        public Set ={
            GlobalRandomMix : () =>{
                
                //Pega todas as musicas de TODAS as cartegorias
                const musicas = [] as Array<VideoObject>
                
                for (let index = 0; index < cartegories.length; index++) {
                    
                    const element = cartegories[index];
                    //esse for pega cada musica da cartegoria
                    
                    for (let index = 0; index < element.length; index++) {
                        const musica = element[index];
                        musicas.push(musica as VideoObject)
                    }
        }
        this.Set.RandomMix(musicas)
            },

            RandomMix : (musicas : Array<VideoObject>) =>{
        //pega 
        const allmusics = musicas.filter(obj => obj.type == "music")
        const allplaylists = musicas.filter(obj => obj.type == "playlist")


        //ele 10 vezes vai adicionar um objeto aleatorio no mix
        if(allmusics.length > 0){
            for(let i = 0; i < 10; i++){
                this.mixtape.push(allmusics[Math.floor(Math.random() * allmusics.length)] as VideoObject)
            }
        }
        

        //PLAYLIST EXTRA Acontece só uma vez
        if(allplaylists.length == 0) return;
        this.mixtape.push(allplaylists[Math.floor(Math.random() * allplaylists.length)] as VideoObject)
        },

        Volume : (vol : number)=>{
this.Youtube.setVolume(vol)
        }

    } 
    Get = {
        VideoDuration : () =>{
            const duration = this.Youtube.getDuration()
            const minutes = Math.floor(duration / 60)
            const seconds = Math.round(duration % 60)

            if(Number.isNaN(minutes)){
return "0:00"
            }
            if(seconds < 10){
                return `${minutes}:0${seconds}`
            }
            return `${minutes}:${seconds}`
        }
    }
        Mix = {
             GetAndUpdateComponent : (id : string,Element) =>{
                const component = document.getElementById(id);
                if(!component){
                    return console.log("nao achou " + id);
                }
                console.log("renderizou")
                const root = ReactDOM.createRoot(component);
                root.render(
                    <Element/>
                )
            },
            UpdateMixVariables : () =>{
                
                    
                this.Mix.GetAndUpdateComponent("tracks",MixTracksBox)
                this.Mix.GetAndUpdateComponent("button-box",ButtonBox)
                
                const navtext = document.getElementById("nav-layout-text")
                if(!navtext) return
                navtext.innerHTML = this.mixtape[this.trackid].name;
            },
            ChangeMusic :async (musicobj : VideoObject) =>{
                if(this.trackid <0) this.trackid = 0
                console.log(this.trackid)
                if (!this.Youtube) {
                    console.log("youtube nao gerado, criando-o")
                    this.CreateYoutube()
                    return;
                }
                
                    //quando eu executo pelo nav o load
                    //mas quando pelo next funciona o load
                    
                    

                      
                    this.Youtube.loadVideoById(this.extractYouTubeVideoId(musicobj.url))
                   //renderiza denovo o layoutclock (enviando o mix)
                    //renderiza denovo o nome no nav
                
                
                console.log("done")
               this.Mix.UpdateMixVariables()
            },
            AddMusicMix : (MusicObject : VideoObject) =>{
                //verificações se esta tudo ok
                //mix esta funcionando
                this.mixtape.push(MusicObject)
                this.Mix.UpdateMixVariables()
            },
            ResetMix : () =>{
                //limpa o array
            },
            RemoveMusicMix:  () => {
                //Deleta o item do array (onclick)
            },
            NextOrBackTrack : (value : number)=>{

                 if(value== 1 )  {
                    this.trackid++
                 }else if(value ==-1){
                    this.trackid--;
                 }

           if(this.trackid > this.mixtape.length - 1){
            //aumenta,da erro pq não tem musica angela faixa, e dps entra nesta tag aqui
               this.Set.GlobalRandomMix()
               this.Mix.UpdateMixVariables()
               console.log("trackid maior que o mix")
           }
                //se player nao foi criado aqui ele cria
            this.Mix.ChangeMusic(this.mixtape[this.trackid]);
                ////se não change music
             
        },
        
    }
}

    
export const musiccontroller = new MusicController();

