import React from "react"
import Card from "./Card";

type cardProps = {
    id: number,
    url: string,
    value: number
}
type boardProps = {
    drawnPlayerCards:cardProps[],
    drawnCroupierCards: cardProps[],
    playerValue:number,
    croupierValue:number

}
export default function Board(props:boardProps) {
    const playerCards = props.drawnPlayerCards.map(
        card => {
            return <Card value={card.value} cardUrl={card.url}/>
        }
    )
    const croupierCards = props.drawnCroupierCards.map(
        card => {
            return <Card value={card.value} cardUrl={card.url}/>
        }
    )
    return (
        <div className="board">
            <div className="board-cards">
                {croupierCards}
            </div>
            <p className={"board-value"}>{props.croupierValue}</p>
            <div className="board-center">
                <h1 className="board-title">BLACKJACK</h1>
                <img className="card" alt="deck" src="./Cards/deck.png"/>
            </div>
            <div className="board-cards">
                {playerCards}
            </div>
            <p className={"board-value"}>{props.playerValue}</p>
        </div>
    )
}