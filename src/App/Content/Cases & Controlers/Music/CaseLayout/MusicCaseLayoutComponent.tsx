import React, { useCallback } from "react"
import Mix from "./pages/Mix"
import MusicsLayout from "./pages/MusicsLayout"

export default function MusicCaseLayout(){
const [page, setPage] = React.useState(1)
    
//AQUI EU POSSO ENVIAR UM CALLBACK DO SETPAGE PRA MUDAR ELE 
const ChangePage= useCallback((id)=>{
setPage(id)
},[])

switch (page) {
    case 0:
       return  <MusicsLayout/>
        break;
    case 1:
        return <Mix/>
        break;
}
    return <div>
        
    </div>


    //de qualquer forma a função teria que fazer um push em cada um para pegar as variaveis 

/*
    getmusic(array) return getmusic

    push((id) =>{
        
    })*/
}