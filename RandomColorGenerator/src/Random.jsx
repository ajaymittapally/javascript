import { useState } from "react"
export default function RandomColor(){
    const[rand,setRand] = useState(generate())
    const [rgb,SetRgb] = useState(generateRgb())
    function generateRgb(){
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        return `rgb(${r},${g},${b})`
    }

    function handleRgb(){
        SetRgb(generateRgb())
    }


    function generate(){
       return `#${Math.floor(Math.random()*16777215 /*#FFFFFF*/).toString(16).padStart(6,'0')}`
        }

   
    
    function handleClick(){
        setRand(generate())
    }
    return (
        <main>
            <div style={{
                backgroundColor:rand
            }} >
                <h1>rand color :{rand}</h1>
                <button onClick={handleClick}>Generate Random hex color</button>
            </div>
            <div style={{
                backgroundColor:rgb
            }}>
             <h2>RGB color: {rgb}</h2>   
             <button onClick={handleRgb} >generateRgb</button>
            </div>
        </main>
    )
}