import React, { useCallback } from "react"
import { musiccontroller } from "../../Controler/MusicControler"
import { cartegories } from '../../Controler/musics/selected';
export default function MusicsLayout(Case){
    const [CartegoryIndex,setCartegoryIndex] = React.useState(-1)

    const SetCartegoryIndexCallBack = {
      callback :  useCallback((value)=>{
            setCartegoryIndex(value)

console.log(CartegoryIndex)
        },[CartegoryIndex])
    } 

    if(CartegoryIndex== -1){
        return <div className="w-96 h-96 bg-blue-700 flex flex-col rounded-3xl overflow-hidden">
        <div id="music-layout-cartegories" >
       <div className="bg-black">
        //componente que manda essa cartegoria pro outro componente
       {CartegoryBox(0,SetCartegoryIndexCallBack)}

        </div> 
           <div className="w-10 h-10 bg-black" onClick={() => {Case.change(1)}}></div>
        </div>
        <button className=" w-10 h-10 bg-black" onClick={() => Case.change(1)}></button>
    </div>
    }else {
        return CartegoryMusicHub(CartegoryIndex)
    }
}

///SELEÇÃO DAS MUSICAS


function CartegoryBox(index : number,callback){
    return <div className="bg-slate-500 w-10 h-10" onClick={callback.callback(index)}>
    
    </div>
}

function CartegoryMusicHub(CartegoryIndex : number){
    return <div className="w-full flex-1 flex flex-col px-2">
    {
        cartegories[CartegoryIndex].map((music,i) => {
            return <div className={'flex flex-row px-1 py-4  h-8 rounded-lg text-white text-sm font-medium items-center justify-between border border-yellow-400 hover:bg-[#F7852F]'}>
    <div id='mix-tittle' className='flex-1 flex flex-col p-1' onClick={() =>{ musiccontroller.trackid = i;musiccontroller.Mix.ChangeMusic(musiccontroller.mixtape[musiccontroller.trackid]); }}>
    <p >{music.name}</p>
    <p className='text-xs text-slate-100'>{music.authorname}</p>
    </div>
    </div>
   
        })
    }
</div>
}