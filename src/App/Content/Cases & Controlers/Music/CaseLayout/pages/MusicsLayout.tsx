import React from "react"
import { cartegories} from '../../Controler/musics/selected';
import ReactDOM from "react-dom/client";
import { musiccontroller } from "../../Controler/MusicControler";
import { YoutubeIcon,ListRestart } from "lucide-react";


class MusicLayout{
    private page = "layout"
    private Obj;
    private Case;
    constructor(){
    }





public Start = (Case)=>{
    if(this.page == "layout"){
    this.Case = Case;
    console.log(Case)
         return this.MusicsLayout() 
         }else if (this.page == "cartegories"){
             return this.CartegoriesLayout(this.Obj)
         }else if(this.page == "custom"){
             return this.CustomLayout()
         }
}




    Render(newpage : string){
//aqui faz a troca das paginas entre cartegoria e seleçao
        this.page = newpage;
        const musiclayoutbox = document.getElementById("music-layout-box")
        if(!musiclayoutbox){
            return
        }
        const root = ReactDOM.createRoot(musiclayoutbox);
        root.render(
            <div>
                {this.Start(this.Case)}
            </div>
        )
    }



        
    CartegorySelect(Obj ){
        //aqui é enviado o objeto com a cartegoria para o obj
        this.Obj = Obj;
        //aqui é trocado a pagina para a cartegoria que renderiza sempre o objeto
        this.Render("cartegories")
    }







    
    
   private MusicsLayout = () =>{
    //aqui é a caixa do layout de musica
        return <div className="w-96 h-96 bg-gradient-to-tr from-black to-[#000F82]  flex flex-col rounded-3xl overflow-hidden justify-between pb-2">
        
        <div className="w-full h-10 flex flex-row items-center justify-between rounded-t-3xl overflow-hidden italic font-bold">
            
            <div className="w-full h-full item flex justify-center items-center bg-[#C98B25] duration-100 text-white text-center text-xl hover:text-3xl hover:cursor-pointer hover:bg-black active:bg-white" onClick={()=>this.Case.change(1) 
        }>Mix</div>


        <div className="w-full h-full bg-[#3089DB] flex justify-center items-center duration-100 text-white text-xl hover:text-3xl hover:cursor-pointer hover:bg-black active:bg-white" onClick={()=>this.Render("custom")
        }>Custom</div>

        </div> 

        <div id="music-layout-cartegories" className="bg-[#7676FF] bg-opacity-20 rounded-3xl mt-4 pt-2  mx-3 overflow-hidden flex-1" >
     
       {this.CartegoryBox()}

       
        </div>
    </div>
}






CartegoryBox = () =>{

    //aqui faz o map de todas as cartegorias
    return <div className="h-full grid grid-cols-2 gap-4 justify-items-center rounded-3xl overflow-scroll  px-3">

 {cartegories.map((cartegorie,i ) =>{
//eu vou trocar meu id pro id do meu componente que consequentemente vai chamar a minha função de listar os componentes

//aqui é o nome de cada um dos index de cartegoria
const cartegory = (()=>{
    switch(i){
        case 0: return {id: "cartegory-lofi",name :"Lofi"}
    case 1:return {id: "cartegory-lofi-chill",name :"lofi Chill"}
    case 2:return {id: "cartegory-lofi-jazz",name :"lofi Jazz"}
    case 3 : return {id: "cartegory-lofi-sleep",name :"Lofi Sleep"}
    case 4 : return {id: "cartegory-lofi-vibes",name :"lofi Vibes"}
    case 5 : return {id: "cartegory-undertale",name :""}
    case 6 : return {id: "cartegory-minecraft",name :""}
    case 7 : return {id: "cartegory-omori",name :""}
        }
}
)
const cartegoryvalue = cartegory();

if(!cartegoryvalue) return;
//aqui é o botão para seleção da cartegoria 
return <div className="">
<div id={cartegoryvalue.id} className="w-36 h-36  rounded-full flex items-center justify-center text-center duration-200 hover:border-8 hover:cursor-pointer active:border-2" onClick={()=>  this.CartegorySelect(cartegorie)}>
    <h1 className="w-28 h-36 font-cartegory text-5xl whitespace-pre-wrap flex items-center justify-center">{cartegoryvalue.name}</h1>
</div>
</div>
 
}
)}

    </div>

}



//Cartegoria////



 CartegoriesLayout = (Obj ) =>{
    //aqui é a seção de cartegoria, é a outra pagina
    console.log(Obj);
    return <div className="relative">
        {/*caixamaior*/}
    <div className="w-96 h-96 flex flex-col gap-4 bg-gradient-to-tl from-[#0097FF] to-[#194FBD] rounded-3xl">
    <div className="w-full h-10 flex flex-row items-center justify-between rounded-t-3xl overflow-hidden italic font-bold">
          {/*//caixa que guarda os botoes de mix e voltar*/}  
            <div className="w-full h-full item flex justify-center items-center bg-[#C98B25] duration-100 text-white text-center text-xl hover:text-3xl hover:cursor-pointer hover:bg-black active:bg-white" onClick={()=>this.Case.change(1) 
        }>Mix</div>


        <div className="w-full h-full bg-[#3089DB] flex justify-center items-center duration-100 text-white text-xl hover:text-3xl hover:cursor-pointer hover:bg-black active:bg-white" onClick={()=>this.Render("layout")
        }>Back</div>

        </div> 





 
{/*Musicas*/}
<div className="flex-1 flex flex-col gap-2 overflow-scroll">
{Obj.map((obj)=>{
return <div className='px-4 '> 
<div className={'flex flex-row justify-between   h-12 rounded-3xl bg-[#7676FF] bg-opacity-30 text-white text-md font-medium items-center justify-between border-[2px] border-[#bbbbbb3f] gap-8'}>

<div id='mix-tittle' className='flex-1 whitespace-nowrap text-ellipsis overflow-hidden flex flex-col p-1  pl-5'>
<p className="">{obj.name}</p>
<p className='text-xs text-slate-100'>{obj.authorname}</p>
</div>

    <div className="flex justify-between items-center gap-2  ">
   
   
    {/*tipo do som*/}

    <p className="italic text-[#ffffffcb]">{obj.type}</p>
    {/*Icone do youtube*/}
    <a href={obj.url} target="_blank" className="text-red-600 hover:text-black">
    <YoutubeIcon />
    </a>
    {/*Botao de adicionar*/}
    <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center text-black italic font-extrabold duration-100 border-white hover:bg-black hover:border-4  hover:cursor-pointer hover:text-white active:border-[24px] active:duration-0 ' onClick={()=>{musiccontroller.Mix.AddMusicMix(obj)}}>
    <h1>Add</h1>
    </div>

    </div>


</div>

</div>
})}
</div>

    <div className="absolute top-[100%] left-[0%] translate-y-[-100%] flex flex-row items-end gap-1">

    <div onClick={()=>musiccontroller.Set.RandomMix(Obj)} className="rounded-full bg-white text-black duration-200 hover:bg-black hover:text-white hover:cursor-pointer p-2 active:bg-white active:duration-0">
    <ListRestart size={20}/>  
    </div> 
    <p className="text-xs from-accent-foreground">Random Mix of the Cartegory</p>
    </div>
</div>
    </div>
   

}



//CustomLayout/////


    CustomLayout = () =>{
        return <button onClick={()=>this.Render("layout")}>
            Working | Click to back
        </button>
    }







}







export const musiclayout = new MusicLayout();






///SELEÇÃO DAS MUSICAS


