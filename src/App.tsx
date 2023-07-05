import React, {useState} from "react"
import Board from "./Board"
import Buttons from "./Buttons";
import Outcome from "./Outcome"
import Confetti from "react-confetti"
import data from "./data"
import Card from "./Card";
type Card = {
    id: number,
    url: string,
    value: number
}
function App(){
    const [cards, setCards] = useState<Card[]>(data)
    const [cardsNumber, setCardsNumber] = useState<number>(52)
    const [cardsValuePlayer, setCardsValuePlayer] = useState<number>(0)
    const [cardsValueCroupier, setCardsValueCroupier] = useState<number>(0)
    const [playerRandomNumber, setPlayerRandomNumber] = useState<number>(Math.floor(Math.random() * cardsNumber))
    const [croupierRandomNumber, setCroupierRandomNumber] = useState<number>(Math.floor(Math.random() * cardsNumber))
    const [endPlayerTurn, setEndPlayerTurn] = useState<boolean>(false)
    const [endCroupierTurn, setEndCroupierTurn] = useState<boolean>(false)
    const [result ,setResult] = useState<string>("")

  return (
      <main>
        {/*{result==="You won!!!" && <Confet<booleanti/>}*/}
        {/*<Buttons draw={drawCard} stand={stand}/>*/}
        {/*<Board*/}
        {/*    drawnPlayerCards={playerCards}*/}
        {/*    drawnCroupierCards={croupierCards}*/}
        {/*    playerValue={cardsValuePlayer}*/}
        {/*    croupierValue={cardsValueCroupier}*/}
        {/*/>*/}
        {/*<Outcome score={result}/>*/}
      </main>
  );
}

export default App;
