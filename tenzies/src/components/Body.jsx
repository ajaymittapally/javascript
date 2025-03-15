import React from 'react'
import '../stylesheets/Body.css'
import Die from './Die'
export default function Body(){
    const [dice,setDice] = React.useState(generateNewNumber())
    function generateNewNumber(){
        return new Array(10).fill(0)
        .map(()=>({value:Math.ceil(Math.random()*6),  isHeld:false}))
    }
    const diceElemets = dice.map((num)=><Die value={num.value} isHeld={num.isHeld}/>)
    function rollDice(){
        setDice(generateNewNumber())
    }
 
    return (
        <main>
            <div className='dice-container'>
                {diceElemets}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
        </main>
    )
}