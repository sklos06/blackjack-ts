import React from "react"


export default function Card(url:string) {
    return (
        <img className="card" alt="card" src={url}/>
    )
}