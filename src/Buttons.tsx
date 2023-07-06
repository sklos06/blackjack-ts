import React from "react"

type buttonProps = {
    draw:()=>void,
    stand:()=>void,
}
export default function Buttons(props:buttonProps){
    return(
        <div className="buttons">
            <button className="buttons-button" id="hit" onClick={props.draw} >HIT</button>
            <button className="buttons-button" id="stand" onClick={props.stand}>STAND</button>
            <button className="buttons-button" id="reset" onClick={() => window.location.reload()}>RESET</button>
        </div>
    )
}