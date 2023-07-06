import React, {useState, useEffect} from "react"
import Board from "./Board"
import Buttons from "./Buttons";
import Outcome from "./Outcome"
import Confetti from "react-confetti"
import data from "./data"
import Card from "./Card";

type cardProps = {
    id: number,
    url: string,
    value: number
}

function App() {
    const [cards, setCards] = useState<cardProps[]>(data)
    const [cardsNumber, setCardsNumber] = useState<number>(52)
    const [cardsValuePlayer, setCardsValuePlayer] = useState<number>(0)
    const [cardsValueCroupier, setCardsValueCroupier] = useState<number>(0)
    const [playerRandomNumber, setPlayerRandomNumber] = useState<number>(Math.floor(Math.random() * cardsNumber))
    const [croupierRandomNumber, setCroupierRandomNumber] = useState<number>(Math.floor(Math.random() * cardsNumber))
    const [endPlayerTurn, setEndPlayerTurn] = useState<boolean>(false)
    const [endCroupierTurn, setEndCroupierTurn] = useState<boolean>(false)
    const [result, setResult] = useState<string>("")


    const hitButton = document.getElementById("hit")
    const standButton = document.getElementById("stand")
    const style = "filter: blur(1.5px)"

    const [playerCards, setPlayerCards] = useState<cardProps[]>([{
        url: cards[playerRandomNumber].url,
        value: cards[playerRandomNumber].value,
        id: cards[playerRandomNumber].id
    }])

    const [croupierCards, setCroupierCards] = useState<cardProps[]>([{
        url: cards[croupierRandomNumber].url,
        value: cards[croupierRandomNumber].value,
        id: cards[croupierRandomNumber].id
    }, {
        id: 53,
        url: "./Cards/deck.png",
        value: 0
    }])

    function drawCard(): void {
        setPlayerCards(oldCards => {
            return [
                ...oldCards,
                {
                    url: cards[playerRandomNumber].url,
                    value: cards[playerRandomNumber].value,
                    id: cards[playerRandomNumber].id
                }
            ]
        })

    }

    function drawCardCroupier(): void {
        setCroupierCards(oldCards => {
            return [
                ...oldCards,
                {
                    url: cards[croupierRandomNumber].url,
                    value: cards[croupierRandomNumber].value,
                    id: cards[croupierRandomNumber].id
                }
            ]
        })
    }

    function stand(): void {
        if(hitButton){
            hitButton.style.cssText = style
            hitButton.setAttribute("disabled", "true")
        }
        if(standButton){
            standButton.style.cssText = style
            standButton.setAttribute("disabled", "true")
        }

        setEndPlayerTurn(true)
        if (cardsValuePlayer < cardsValueCroupier) {
            setResult("You lost!!!")
        } else {
            setCroupierCards(prevCards => {
                const temporaryArray = prevCards.filter(prev => prev.value !== 0);
                return temporaryArray
            })
        }
    }

    useEffect(() => {
        setCardsValuePlayer(() => {
            let value = 0;
            playerCards.forEach(card => value += card.value)
            return value
        })
        setCards(prevCards => {
            const temporaryArray = prevCards.filter(prev => prev.id !== (playerRandomNumber + 1));
            setCardsNumber(prevCardsNumber => {
                return --prevCardsNumber
            })
            return temporaryArray
        })
        setPlayerRandomNumber(Math.floor(Math.random() * cardsNumber))

    }, [playerCards])

    useEffect(() => {
        if (cardsValuePlayer > 21) {
            if(hitButton){
                hitButton.style.cssText = style
                hitButton.setAttribute("disabled", "true")
            }
            if(standButton){
                standButton.style.cssText = style
                standButton.setAttribute("disabled", "true")
            }

            setResult("You lost!!!")
        }
    }, [playerRandomNumber])
    React.useEffect(() => {
        setCardsValueCroupier(() => {
            let value: number = 0;
            croupierCards.forEach(card => value += card.value)
            return value
        })

        setCards(prevCards => {
            const temporaryArray = prevCards.filter(prev => prev.id !== (playerRandomNumber + 1));
            setCardsNumber(prevCardsNumber => {
                return --prevCardsNumber
            })
            return temporaryArray
        })

        setCroupierRandomNumber(() => {
            if (cardsValuePlayer > cardsValueCroupier) {
                setEndCroupierTurn(true)
            }
            return Math.floor(Math.random() * cardsNumber)
        })


    }, [croupierCards])
    useEffect(() => {
        if (endCroupierTurn) {
            if ((cardsValuePlayer > cardsValueCroupier) || cardsValueCroupier > 21) {
                setResult("You won!!!")
            } else if (cardsValuePlayer === 21 && cardsValueCroupier === 21) {
                setResult("Draw!!!")
            } else {
                setResult("You lost!!!")
            }
        }
    }, [cardsValueCroupier])

    useEffect(() => {
        if ((cardsValueCroupier!==21) && (cardsValueCroupier <= cardsValuePlayer) && (cardsValuePlayer !== 0) && endPlayerTurn) {
            setTimeout(() => {
                drawCardCroupier()
            },200)
        }
    }, [croupierRandomNumber])


    return (
        <main>
            {result === "You won!!!" && <Confetti/>}
            <Buttons draw={drawCard} stand={stand}/>
            <Board
                drawnPlayerCards={playerCards}
                drawnCroupierCards={croupierCards}
                playerValue={cardsValuePlayer}
                croupierValue={cardsValueCroupier}
            />
            <Outcome score={result}/>
        </main>
    );
}

export default App;
