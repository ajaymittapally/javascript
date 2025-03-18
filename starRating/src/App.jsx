
import {FaStar} from 'react-icons/fa'
import { useState } from 'react'
import './style.css'
function App() {
  const [rating,setRating] = useState(0)
  const [hover,setHover] = useState(0)
  function handleClick(currentIndex){
    setRating(currentIndex)
  }
  function mouseEnter(currentIndex){
    setHover(currentIndex)
  }
  function mouseLeave(){
    setHover(rating)
  }
  

  return (
    <>
    <div >
      {[Array(5).fill(0).map((_,index)=>{
        index +=1
        return(
          <FaStar
          
          className={index <=(hover|| rating)?'active':'inactive'}
          onClick={()=>handleClick(index)}
          onMouseEnter={()=>mouseEnter(index)}
          onMouseLeave={()=>mouseLeave()}
          />
        )
      })]}
    </div>

    </>
  )
}

export default App
