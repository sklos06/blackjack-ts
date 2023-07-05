import React from "react"
import Board from "./Board"
import Buttons from "./Buttons";
import Outcome from "./Outcome"
import Confetti from "react-confetti"
import data from "./data"

function App(){
  return (
      <main>
        {/*{result==="You won!!!" && <Confetti/>}*/}
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
