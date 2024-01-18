import React from "react";
import bgcontroller from "../Controler/BGController";
import { VideoObj } from "../interface";
//Aqui é o layout componente das wallpapers, aqui vai ter a cartegoria imagem e video,e dentro delas vai ter pré-configurado e custom

//pensar em como vai ser a case para o imagem e video, meio que vai ter imagem e video e dentro do script da imagem e do video vao ter as cases dele de pre-configurado e custom que dependendo deles vao retornar uma aba especifica

function BGLayoutComponent(){
    const video = {url : "https://www.youtube.com/watch?v=GGote-TRZEo" , radio : [4,3] ,author: "um qualquer ai"} as VideoObj
    return <div>
        <button onClick={() =>bgcontroller.Set.Image("https://img.freepik.com/fotos-gratis/paisagem-urbana-e-intercambio_181624-412.jpg?w=740&t=st=1705610442~exp=1705611042~hmac=0dc9e2a78ac93d3df0ad81637a8dc1c28ed87cf921048bfc4c9395d96176570b")}> aaaaa</button>
    </div>
}
export default BGLayoutComponent;
