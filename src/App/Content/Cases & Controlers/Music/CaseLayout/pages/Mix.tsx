import React from "react"

export default function Mix(props : {callback : (id : number) => void}){
    return <div>
        <button onClick={() => props.callback(0)}>Mix</button>
    </div>
}