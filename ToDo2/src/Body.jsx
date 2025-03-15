import {useState }from 'react'
import './Body.css'
export default function Body(){
    const [entry, setEntry] = useState([])
    const entryEle = entry.map(ele=>(
        <li key = {ele}>{ele}<button onClick={()=>delTask(ele.el)}>delete</button></li>
    ))
    function delTask(el){
        const newList  = entry.filter((task)=>task.el !== el);
        setEntry(newList)
        
    }
    function handleClick(formData){
        const newTask = formData.get("tasks")
        setEntry(prev =>[...prev,newTask])
    }
    return (
        <main>
            <form action={handleClick}>
                <div className='input-container'>
                    <label htmlFor='task'>Enter your tasks:
                        <input type="text" name="tasks"/>
                    </label>
                </div>
                <button >Add your task</button>
            </form>
            <h2>List</h2>
            
                <ul>
                {entryEle}
                
                </ul>
            
        </main>
        
    )
}