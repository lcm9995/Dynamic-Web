import styles from '../UI.module.css'
import CardPattern from '../assets/moroccan-flower-dark.png'
import Bilbo from '../assets/bilbo-baggins.png'
import Cameron from '../assets/cameron-poe.png'
import Nikki from '../assets/nikki-cage.png'
import Pollux from '../assets/pollux-troy.png'
import React, {useState, useEffect} from 'react'


export default function Grid(props) {
  const cardImages = [
    { src: Bilbo },
    { src: Cameron },
    { src: Nikki },
    { src: Pollux },
  ]
  const [cards, setCards] = useState([])
  const [turns, setTurns]=useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const shuffleCards = () => {
      //spread all of our card inages 2x so we have duplicates to match
      const shuffledCards = [...cardImages, ...cardImages] // each of the ...cardImages = take each key value pair / item in ur array, and copy paste it
      // add sort dunction . case: when a number is negative, leave it where it is, when it's positive, swap with another item 
        .sort(()=> Math.random()-0.5 ) // javascript built in array.sort() function - sorts in place 
      //subtracting .5 so that we have a negative 50% of the time (so values in random range are btwn -.5 and .5 )
      //now we map through each item / card in our "shuffled" and add a unique id using more spreading 
      // when we call .sort() in the line after shuffledCards, that tells js to do it on shuffledCards
        .map((card)=> ({...card, id: Math.round(Math.random()*1000000000)}))
      //how does using math.random ensure we have unique ids 
      setCards(shuffledCards)
  }     
  const handleChoice = (card) => {
    console.log(card)
  }
  //useEffect(()=> {}, []) // only fires once on mount aka component first render 
  useEffect(()=> {
    if (choiceOne && choiceTwo){
      if (choiceOne.src === choiceTwo.src){
        setCards((prevCards)=>{
          return prevCards.map((card)=>{
            if(card.src===choiceOne.src){
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
      } else{
        console.log('these cards dont match')
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo]) 

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns)=> prevTurns+1)
  }
  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns used: {turns}</p>
      <div className={styles.container}>
        <div className={styles.grid}>
          {
            cards.map((card) => (
              <Card card={card}
              key={card.id} 
              img={card.src}
              handleChoice={handleChoice}
            
              />
            )
            )
          }
          {/* <Card img={Bilbo} />
          <Card img={Cameron} />
          <Card img={Nikki} />
          <Card img={Pollux} /> */}
        </div>
      </div>
    </>
  )
}

function Card(props) {

  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
   // setIsActive(!isActive)
   setIsActive((currState)=> !currState)
  }

  return (
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner} onClick={handleClick}>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={props.img} alt="card front" />
        </div>
      </div>
    </div>
  )
}
