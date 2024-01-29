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
                this.Start(this.Case)
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
        return <div className=" max-h-[440px] bg-gradient-to-tr from-black to-[#000F82] rounded-3xl overflow-hidden justify-between pb-2 flex flex-col">
        
        <div className="w-full h-12 flex flex-row items-center justify-between rounded-t-3xl overflow-hidden italic font-bold">
            
            <div className="w-full h-12 item flex justify-center items-center bg-[#C98B25] duration-100 text-white text-center text-2xl hover:text-3xl hover:cursor-pointer hover:bg-black active:bg-white" onClick={()=>this.Case.change(1) 
        }>Mix</div>


        <div className="w-full h-12 bg-[#3089DB] flex justify-center items-center duration-100 text-white text-2xl hover:text-3xl hover:cursor-pointer hover:bg-black active:bg-white" onClick={()=>this.Render("custom")
        }>Custom</div>

        </div> 
         
            <div id="music-layout-cartegories" className="w-full p-2  overflow-hidden flex-1" >
     <div className=" h-full bg-[#7676FF] bg-opacity-20 pt-2 rounded-3xl px-2 overflow-y-scroll overflow-x-hidden">
     {this.CartegoryBox()}
     </div>
            </div>
           
 

       <p className="text-muted-foreground px-4 text-center">Videos are indexed with Youtube ID video and transmitted via an iframe, any copyright issues contact : jvxx1188@gmail.com</p>
    </div>
}






CartegoryBox = () =>{

    //aqui faz o map de todas as cartegorias
    return <div className="w-full h-full grid music-layout-cartegory-grid gap-4 justify-items-center rounded-3xl">

 {cartegories.map((cartegorie,i ) =>{
//eu vou trocar meu id pro id do meu componente que consequentemente vai chamar a minha função de listar os componentes

//aqui é o nome de cada um dos index de cartegoria
const cartegory = (()=>{
    switch(i){
    case 0:return {id: "cartegory-lofi",name :"Lofi"}
    case 1 : return {id: "cartegory-undertale",name :""}
    case 2 : return {id: "cartegory-minecraft",name :""}
    case 3 : return {id: "cartegory-omori",name :""}
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
    return <div className="w-full flex flex-col">
        {/*caixamaior*/}
    <div className="max-w-[800px] relative bg-gradient-to-tl from-[#0097FF] to-[#194FBD] rounded-3xl">
    <div className="w-full h-12 flex flex-row items-center justify-between rounded-t-3xl overflow-hidden italic font-bold">
          {/*//caixa que guarda os botoes de mix e voltar*/}  
            <div className="w-full h-full item flex justify-center items-center bg-[#C98B25] duration-100 text-white text-center text-2xl hover:text-3xl hover:cursor-pointer hover:bg-black active:bg-white" onClick={()=>this.Case.change(1) 
        }>Mix</div>


        <div className="w-full h-full bg-[#3089DB] flex justify-center items-center duration-100 text-white text-2xl hover:text-3xl hover:cursor-pointer hover:bg-black active:bg-white" onClick={()=>this.Render("layout")
        }>Back</div>

        </div> 





 
{/*Musicas*/}
<div className=" w-full flex flex-col max-h-[440px] gap-3 overflow-scroll pt-2 mb-2">
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
        return <button className="max-h-20 p-3 bg-[#00000067] rounded-lg flex items-center flex-center" onClick={()=>this.Render("layout")}>
            Working | Click to back
        </button>
    }







}







export const musiclayout = new MusicLayout();






///SELEÇÃO DAS MUSICAS


