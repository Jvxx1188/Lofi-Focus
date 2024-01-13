import Mix from "./pages/Mix"
import MusicsLayout from "./pages/MusicsLayout"
import React, { useCallback } from "react"
export default function MusicCaseLayout(){
    const [casevalue,SetCase] = React.useState(0)

const ChangeValue ={
   change : useCallback((value)=>{
        SetCase(value)
    },[casevalue])
    
} 
    switch (casevalue){
        case 0:
        return  MusicsLayout(ChangeValue)
        break;
        case 1:
            return Mix(ChangeValue) 
            break;
    }
}

    //de qualquer forma a função teria que fazer um push em cada um para pegar as variaveis 

/*
    getmusic(array) return getmusic

    push((id) =>{
        
    })*/
