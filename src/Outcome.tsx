import React from "react"

type outcomeProps = {
    score:string
}
export default function Outcome(props:outcomeProps){
    return (
        <h1 className="result">{props.score}</h1>
    )
}