import React from "react"
import { VideoObject, musiccontroller } from "../../Controler/MusicControler"
import { Slider } from "../../../../../../components/ui/slider"
import { Play, Pause, SkipForward, SkipBack, LucideIcon, ChevronUp, ChevronDown, ListRestart, X, YoutubeIcon } from "lucide-react"
import { Separator } from "../../../../../../components/ui/separator"
export default function Mix(Case) {
  if (!musiccontroller.Youtube || musiccontroller.hastarted == 0) {
    return <h1 id="loading-mix">Carregando</h1>
  }

  return <div className="min-w-80 max-w-[500px] bg-yellow-600 rounded-3xl overflow-hidden flex flex-col">

    <div className="w-full h-12 flex flex-row items-center justify-between rounded-t-3xl overflow-hidden italic font-bold">
      {/*//caixa que guarda os botoes de mix e voltar*/}
      <div className="w-full h-full item flex justify-center items-center bg-[#3089DB]  duration-100 text-white text-center text-2xl hover:text-3xl hover:cursor-pointer hover:bg-black active:bg-white" onClick={() => Case.change(0)
      }>Layout</div>

    </div>



    <div id="button-box"><ButtonBox /></div>

    <div id="tracks" className=" overflow-y-scroll h-full flex-1"><MixTracksBox /></div>


    <div id="mix-avisos">
      <Avisos />
    </div>
  </div>
}
export function Avisos() {
  if (musiccontroller.Youtube.getPlayerState() === YT.PlayerState.BUFFERING) {
    return <h1 className="mix-avisos-bg text-center">Player esta carregando</h1>
  }

}

export function MixTracksBox() {
  return <div className="w-full flex flex-col px-2 py-2 gap-1">
    {
      musiccontroller.mixtape.map((music, i) => {
        return trackdiv(music, i)
      })
    }
  </div>
}
function trackdiv(music: VideoObject, i: number) {
  let classname = "";
  if (i == musiccontroller.trackid) {
    classname += " bg-[#e67009] "
  } else {
    classname += " bg-[#D88843] "
  }

  return <div className={'flex flex-row gap-4 px-1 py-4  h-12 rounded-lg text-white text-sm font-medium items-center justify-between border border-yellow-400 hover:bg-[#F7852F]' + classname}>
    <div id='mix-tittle' className='flex-1 flex flex-col p-1 text-nowrap overflow-ellipsis overflow-hidden' onClick={() => { musiccontroller.trackid = i; musiccontroller.Mix.ChangeMusic(musiccontroller.mixtape[musiccontroller.trackid]); }}>
      <p className="text-lg" >{music.name}</p>
      <p className='text-xs text-slate-100'>{music.authorname}</p>
    </div>

    <div className="flex flex-row items-center gap-3">
      <a href={music.url} target="_blank" className="text-red-600 hover:text-black">
        <YoutubeIcon />
      </a>
      {/*Live*/}
      <p className={" text-lg font-semibold " + (music.type === "live" ? "text-red-600" : "")}>{music.type}</p>
      {/*Arrows*/}
      <div className='w-5 flex flex-col gap-[1px] rounded-full bg-white bg-opacity-10 border-[0.1px] ' id='track-roll'>
        <div onClick={() => ChangeMusicIndex(1, musiccontroller.mixtape[i], i)} id='mix-roll-up' className=' h-[18px] flex items-center justify-center rounded-t-full duration-100 hover:bg-black hover:bg-opacity-20 active:bg-yellow-950 active:duration-0'>
          <ChevronUp size={15} />
        </div>
        <Separator />
        <div onClick={() => ChangeMusicIndex(2, musiccontroller.mixtape[i], i)} id='mix-roll-down' className=' h-[18px] flex items-center justify-center rounded-b-full duration-100 hover:bg-black hover:bg-opacity-20 active:bg-yellow-950 active:duration-0'>
          <ChevronDown size={15} />
        </div>
      </div>
    </div>

  </div>

  /*<div >
 
  
 </div> */
}
function ChangeMusicIndex(value: 1 | 2, music: VideoObject, i: number) {
  if (value == 1) {
    if (i == 0) {
      return;
    }
    if (i == musiccontroller.trackid) {
      musiccontroller.trackid--;
    } else if (i == musiccontroller.trackid + 1) {
      musiccontroller.trackid++;

    }
    musiccontroller.mixtape.splice(i, 1);
    musiccontroller.mixtape.splice(i - 1, 0, music);



  } else if (value == 2) {
    if (i > musiccontroller.mixtape.length - 1) {
      return;
    }
    if (i == musiccontroller.trackid) {
      musiccontroller.trackid++;
    } else if (i == musiccontroller.trackid - 1) {
      musiccontroller.trackid--;

      console.log("TA ACIMA")
    }
    musiccontroller.mixtape.splice(i, 1);
    musiccontroller.mixtape.splice(i + 1, 0, music);



  }

  console.log(i, musiccontroller.trackid)
  musiccontroller.Mix.UpdateMixVariables()
}
export function ButtonBox() {


  const defaultvolvalue = musiccontroller.Youtube.getVolume()

  return <div className=" bg-black flex flex-row justify-between items-center gap-3 px-3 ">
    {/*ButtonMix(MoveUp,musiccontroller.Mix.MoveUp)*/}
    <RandomMix />
    <SlideTime />
    <div className="flex flex-row items-center">
      {ButtonMix(SkipBack, () => { musiccontroller.Mix.NextOrBackTrack(-1) })}
      {PlayOrPause()}
      {ButtonMix(SkipForward, () => { musiccontroller.Mix.NextOrBackTrack(1) })}
    </div>
    <Slider className="w-24" defaultValue={[defaultvolvalue]} max={100} step={1} onValueChange={(value) => { musiccontroller.Set.Volume(value[0]) }} />

    <ClearMix />

  </div>
}

function RandomMix() {
  return <div onClick={() => {
    musiccontroller.Set.GlobalRandomMix()
    musiccontroller.Mix.UpdateMixVariables()
  }}>
    <ListRestart />
  </div>
}
function ClearMix() {
  return <div onClick={() => {
    musiccontroller.ClearMix()
  }}>
    <X />
  </div>
}
function SlideTime() {
  const currenttime = musiccontroller.Youtube.getCurrentTime()
  const maxduration = musiccontroller.Youtube.getDuration()

  return <div className="flex flex-row gap-2 w-24">
    <p>{musiccontroller.Get.VideoDuration()}</p>
    <Slider defaultValue={[currenttime]} max={maxduration} step={1} onValueCommit={(value) => { musiccontroller.Youtube.seekTo(value[0], true) }} />
  </div>
}
function ButtonMix(Icon: LucideIcon, call: () => void) {
  return <div className="w-10 h-10 flex justify-center items-center" onClick={call}>
    <Icon className="" />
  </div>
}

function PlayOrPause() {

  const Icon = musiccontroller.isplaying == false ? Play : Pause

  console.log(musiccontroller.isplaying)
  const left = musiccontroller.Youtube.getPlayerState() === YT.PlayerState.PLAYING ? "left-[50%]" : "left-[53%]"

  return <div className="w-8 h-8 rounded-full bg-white relative" onClick={musiccontroller.PlayOrPauseMusic}>
    <Icon color="black" className={"absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2 " + left} />
  </div>
}
