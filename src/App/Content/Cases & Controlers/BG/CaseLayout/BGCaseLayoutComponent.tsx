
//Aqui é o layout componente das wallpapers, aqui vai ter a cartegoria imagem e video,e dentro delas vai ter pré-configurado e custom

import React from "react";
import ImageCase from "./pages/ImageCase";
import VideoCase from "./pages/VideoCase";
import CustomCase from "./pages/CustomCase";
import SettingsCase from "./pages/SettingsCase";
import ReactDOM from "react-dom/client";
//pensar em como vai ser a case para o imagem e video, meio que vai ter imagem e video e dentro do script da imagem e do video vao ter as cases dele de pre-configurado e custom que dependendo deles vao retornar uma aba especifica

function BGLayoutComponent(){
   
    return <div id="bg-layout-container" className="w-full h-full flex justify-end">
        {bgmanager.BGLayoutManager(bgmanager.id)}
    </div>
}


class BGManager{
    public id = 1;
    constructor (){

    }
    Render = (newid : number)=>{
    this.id = newid;
        //encontra a box e renderiza o item do id
        
        const root = document.getElementById("bg-layout-container");
        if(!root) return;
        const root2 = ReactDOM.createRoot(root);
        root2.render(
            this.BGLayoutManager(this.id)
        )


        
    }

    BGLayoutManager =(id)=>{
        switch(id){
            case 0 : return <ImageCase/>
            case 1 : return <VideoCase/>
            case 2 : return <CustomCase/>
            case 3 : return <SettingsCase/>
        }
    }
}
export const bgmanager = new BGManager();
export default BGLayoutComponent;
