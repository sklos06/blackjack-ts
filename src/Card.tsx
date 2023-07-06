import React from "react"

type cardProps = {
    cardUrl:string,
    value:number
}
export default function Card(props:cardProps) {
    return (
        <img className="card" alt="card" src={props.cardUrl}/>
    )
}