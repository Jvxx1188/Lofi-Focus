//aqui é o controlador de musica
// ele que manipular a caixa #music-layer
import ReactDOM from 'react-dom/client';
import React from 'react';
import {cartegories} from "./musics/selected.ts"
import Mix from '../CaseLayout/pages/Mix.tsx';
export interface VideoObject{
    name : string,
    url : string,
    type : string,
    authorname : string,
    authorurl : string
}

class MusicController{
    //a primeira coisa que devo fazer é manualmente conseguir gerenciar as musicas
    
    public mixtape : Array<VideoObject>
    trackid : number = 0 
    public msc ;
    private Youtube : YT.Player;
    
    constructor(){

    }
    
    

    CreateYoutube = () =>{
        this.Youtube = new YT.Player('music-layer',{
            height: '0',
            width: '0',
            videoId: 'M7lc1UVf-VE',
         playerVars : {
            autoplay : 0,
         }
        } )
        

}
PauseMusic = () =>{
    this.Youtube.pauseVideo()
}

PlayMusic = () =>{
    this.Youtube.playVideo()

}
VideoEnded = () =>{
    
}
        public Set ={
            RandomMix : () =>{

                //adiciona todas os objetos de musicas nessa constante
                const musicas = [] as Array<object>
                for (let index = 0; index < cartegories.length; index++) {
                    const element = cartegories[index];
                    //esse for pega cada musica da cartegoria
                for (let index = 0; index < element.length; index++) {
                        const musica = element[index];
                        musicas.push(musica as VideoObject)
                    }
        }
///////////////

        this.mixtape = [] as Array<VideoObject>
        for(let i = 0; i < 10; i++){
            //ele 10 vezes vai adicionar um objeto aleatorio no mix0
           
            this.mixtape.push(musicas[Math.floor(Math.random() * musicas.length)] as VideoObject)
      
            console.log(this.mixtape)
        }
        //executar musica

        }
    } 
        Mix = {
            ChangeMusic : (musicobj : VideoObject) =>{
                if (!this.Youtube) {
                    this.CreateYoutube()
                    return;
                }
                {
                    console.log(this.trackid)
                    const getid = musicobj.url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\\s]{11})/);
                   if(!getid) return console.log("error id não encontrado")
                    
                   this.Youtube.loadVideoById(getid[1] as string)
                    //renderiza denovo o layoutclock (enviando o mix)
                    //renderiza denovo o nome no nav
                }
                
                const mixlayout = document.getElementById("mix-layout");
                if(!mixlayout){
                    return;
                }
                const root = ReactDOM.createRoot(mixlayout).render(
                    <Mix/>
                )
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

            NextTrack : ()=>{
            this.trackid++;   
            
                //// se trackid for maior que o proprio mix
           if(this.trackid > this.mixtape.length - 1){
            this.trackid = 0;
            this.Set.RandomMix()
            
           } 
            this.Mix.ChangeMusic(this.mixtape[this.trackid]);
                ////se não change music
             
        },
        
    }
}

    
export const musiccontroller = new MusicController();

