import Mix from "./pages/Mix"
import {musiclayout} from "./pages/MusicsLayout"
import React from "react"
import ReactDOM from 'react-dom/client';

//a minha case vai retornar meu componente,
//acionar a variavel change que vai trocar a case e renderizar denovo na caixa


export default function MusicCaseLayout(){

    return <div id="music-layout-container">
    {MusicLayoutManager(0)}
    </div>
}
 function MusicLayoutManager(value : number){

    const ChangeValue ={
   change : ((newvalue : number)=>{

    console.log("aaa")
    const musiclayoutdiv = document.getElementById("music-layout-container") 

    if(!musiclayoutdiv) return

    const root = ReactDOM.createRoot(musiclayoutdiv);
    root.render(
       MusicLayoutManager(newvalue)
    )


   })
    }
    
    switch (value){
        case 0: return <div id="music-layout-box">
            {musiclayout.Start(ChangeValue)}
        </div>
        case 1:
            return <div>
            {
            Mix(ChangeValue)} 
            </div> 

    }
}

    //de qualquer forma a função teria que fazer um push em cada um para pegar as variaveis 

/*
    getmusic(array) return getmusic

    push((id) =>{
        
    })*/
