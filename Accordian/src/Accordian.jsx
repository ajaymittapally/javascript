import './Accordian.css'
import {useState} from 'react'
import data from'./data.js'
export default function Accordian(){
    const [selected,setSelected] = useState(null)
    function toggel(i){
        if(selected === i){
            setSelected(null)
        }
        else{
            setSelected(i)
        }
    }
    return (
        <div className='wrapper'>
            <div className='Accordian'>
                {data.map((item,i)=>(
                    <div className='item'>
                        <div className='title' onClick={()=>toggel(i)} >
                            <h2>{item.question}</h2>
                            <span>{selected ===i?'-':'+'}</span>
                            </div>
                       {selected ===i && <div className={selected ===i?'content.show':'content'}>{item.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    )
}