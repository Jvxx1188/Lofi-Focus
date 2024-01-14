import React from "react"
import { cartegories} from '../../Controler/musics/selected';
import ReactDOM from "react-dom/client";



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




    BarPageSelection = ()=>{
        return <div className="w-full h-20 items-center  flex flex-row justify-between rounded-t-3xl overflow-hidden">
            
            <div className="w-full bg-yellow-60 text-center" onClick={()=>this.Case.change(1) 
        }>Mix</div>


        <div className="w-full bg-white text-center" onClick={()=>this.Render("custom")
        }>Custom</div>

        </div> 
    }




    
    
   private MusicsLayout = () =>{
    //aqui é a caixa do layout de musica
        return <div className="w-96 h-96 bg-gradient-to-tr from-black to-[#000F82] flex flex-col gap-5 rounded-3xl overflow-hidden ">
        
        {this.BarPageSelection()}

        <div id="music-layout-cartegories" className="bg-[#7676FF] bg-opacity-20 rounded-3xl" >
       <div className="">
       {this.CartegoryBox()}

        </div> 
        </div>
    </div>
}






CartegoryBox = () =>{

    //aqui faz o map de todas as cartegorias
    return <div className=" p-3 grid grid-cols-2 gap-6 justify-items-center">

 {cartegories.map((cartegorie,i ) =>{
//eu vou trocar meu id pro id do meu componente que consequentemente vai chamar a minha função de listar os componentes

//aqui é o nome de cada um dos index de cartegoria
const cartegory = (()=>{
    switch(i){
        case 0: return {id: "cartegory-lofi",name :"Lofi"}
    case 1:return {id: "cartegory-lofi-jazz",name :"lofi Jazz"}
    case 2 : return {id: "cartegory-lofi-sleep",name :"Lofi Sleep"}
    case 3 : return {id: "cartegory-lofi-vibes",name :"lofi Vibes"}
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



 CartegoriesLayout = (Obj) =>{
    //aqui é a seção de cartegoria, é a outra pagina
    console.log(Obj);
    return<div className="w-96 h-[80%] flex-1 flex flex-col px-2 bg-black">
        <h1 onClick={this.Case.change(0)}>Back</h1>
        <h1 onClick={this.Case.change(1)}>Mix</h1>
    {
        Obj.map((music) => {
            return <div className={'flex flex-row px-1 py-4  h-8 rounded-lg text-white text-sm font-medium items-center justify-between border border-yellow-400 hover:bg-[#F7852F]'}>
    <div id='mix-tittle' className='flex-1 flex flex-col p-1'>
    <p >{music.name}</p>
    <p className='text-xs text-slate-100'>{music.authorname}</p>
    </div>
    </div>
   
        })
    }
</div>
}



//CustomLayout/////


    CustomLayout = () =>{
        return <div onClick={()=>this.Render("layout")}>
            custom
        </div>
    }







}







export const musiclayout = new MusicLayout();






///SELEÇÃO DAS MUSICAS


