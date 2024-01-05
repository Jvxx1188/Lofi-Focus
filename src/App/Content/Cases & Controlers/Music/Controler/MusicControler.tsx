//aqui é o controlador de musica
// ele que manipular a caixa #music-layer
import {cartegories} from "./musicas/selected.ts"
class MusicController{
    //a primeira coisa que devo fazer é manualmente conseguir gerenciar as musicas
    
    public musicas: Array<object>
    public mix : Array<object>
    public a : string;
    //vao conter o custom e o pre-configurado
    //aqui no musiccontroller eu vou guardar as configurações pras musicas customizadas, esse script vai ficar grande mesmo
    //para as musicas selecionadas, eu vou chamar um objeto por fora, (esse objeto pode vir de uma api mais pra frente)
    //como eu vou juntar elas


    constructor(){
        Object.assign(this.musicas, {...cartegories.jazz,...cartegories.calm})
     this.mix = []
    }
    
    
    public Get :{
        
    Mix : {
    GetMix : {
        //pega o array do mix
    }
    }

    }
    public Set ={
     SetRandomMix : () =>{
        const mix = [] as Array<object>
        for(let i = 0; i < 10; i++){
            //ele 10 vezes vai adicionar um objeto aleatorio no mix0
            mix.push(this.musicas[Math.floor(Math.random() * this.musicas.length)])
        }
        //pegar lengh das musicas
        //criar um for de 0 ao 10 
        //criar um random de 0 ao numero de musicas
        //adicionar as musicas no mix
         //deletar mix
         //enviar objetos de forma aleatoria   
        return
        }
        
    } 





    public Update :{
        Mix : {
            AddMusicMix : () =>{
                
                //adiciona um obj novo no array da playlist
            },
            ResetMix : () =>{
                //limpa o array
            },
            RemoveMusicMix:  () => {
                //Deleta o item do array (onclick)
            }

        }
       }

    }

    
const musiccontroller = new MusicController();
musiccontroller

