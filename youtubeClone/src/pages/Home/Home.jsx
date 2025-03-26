import Feed from "../../components/Feed/Feed.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import './Home.css'
import {useState} from 'react'


export default function Home({sidebar}){
    const [category,setCategory] = useState(0)
    return(
        <>
        <SideBar sidebar={sidebar} category ={category} setCategory={setCategory}/>
        <div className={`container ${sidebar?"":"large-container"} `}>
        <Feed category={category}/>
        </div>
        </>
    )
}