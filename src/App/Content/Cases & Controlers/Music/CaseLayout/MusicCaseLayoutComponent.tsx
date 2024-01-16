import Mix from "./pages/Mix"
import {musiclayout} from "./pages/MusicsLayout"
import React, { useCallback } from "react"

export default function MusicCaseLayout(){
    const [casevalue,SetCase] = React.useState(0)

    const ChangeValue ={
   change : useCallback((value)=>{
    console.log(value)
        SetCase(value)
    },[])
    }
    
    switch (casevalue){
        case 0:
            //do 1 pro 2
            //isso da um tempo para que o componente de renderização do mix saia
            setTimeout(() => {
                ChangeValue.change(2)
            }, 5);
            break;



        case 1:
        
        setTimeout(() => {
            ChangeValue.change(3)
        }, 5)
        break;
            case 2 : 
            return <div id="music-layout-box">
            {musiclayout.Start(ChangeValue)}
        </div>
        case 3 : 
        console.log("mix")
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
