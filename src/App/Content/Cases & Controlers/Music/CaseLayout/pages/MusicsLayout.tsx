import React from "react"

export default function MusicsLayout(props : { callback : (id : number) => void}){
    return <div>
        <button onClick={() => props.callback(1)}>Musics</button>
    </div>
}