//aqui é o controlador de musica
// ele que manipular a caixa #music-layer
import ReactDOM from 'react-dom/client';
import React from 'react';
import {cartegories} from "./musics/selected.ts"
import {MixTracksBox,ButtonBox} from "../CaseLayout/pages/Mix.tsx"
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
    trackid : number = 0 
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
            videoId: 'jfKfPfyJRdk',
         playerVars : {
            autoplay : 0,
         }
        })
        this.Youtube.addEventListener('onReady', ()=>{
        this.hastarted = 1;
        this.Mix.GetAndUpdateComponent("loading-mix",Mix)
        })
        this.Youtube.addEventListener('onStateChange', (change)=>{
          if(change.data == YT.PlayerState.PLAYING) {
            this.isplaying = true
            this.Mix.UpdateMixVariables()
          }
          if(change.data == YT.PlayerState.PAUSED) {
            this.isplaying = false
            this.Mix.UpdateMixVariables()
          }
            if(change.data == YT.PlayerState.ENDED){
                
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
VideoEnded = () =>{
    
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
        
        for(let i = 0; i < 10; i++){
            //ele 10 vezes vai adicionar um objeto aleatorio no mix
           
            this.mixtape.push(musicas[Math.floor(Math.random() * musicas.length)] as VideoObject)
            
        }
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
                

            },
            ChangeMusic : (musicobj : VideoObject) =>{
                if(this.trackid <0) this.trackid = 0
                console.log("trocando musica")
                if (!this.Youtube) {
                    console.log("youtube nao gerado, criando-o")
                    this.CreateYoutube()
                    return;
                }
                {
                    //quando eu executo pelo nav o load
                    //mas quando pelo next funciona o load
                    console.log(musicobj)
                    const getid = musicobj.url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\\s]{11})/);
                    
                   if(!getid) return console.log("error id não encontrado")
                   this.Youtube.loadVideoById(getid[1] as string)
                    //renderiza denovo o layoutclock (enviando o mix)
                    //renderiza denovo o nome no nav
                }
                
                console.log("done")
               this.Mix.UpdateMixVariables()
            },
            AddMusicMix : () =>{
                
                //adiciona um obj novo no array da playlist
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

