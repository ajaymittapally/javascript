import "./Recommended.css"

import { useState,useEffect } from "react"
import { API_KEY, value_converter } from "../../data"
import { Link } from "react-router-dom"

export default function Recommended({categoryId}){
    const [apiData,setApiData] = useState([]);

    async function fetchData(){
        try{
            const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
            const response = await fetch(video_url)
            const data = await response.json()
            setApiData(data.items)
        }catch(error){
            console.error("Error fetching the data",error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="recommended">
        { apiData.map((item,index)=>{
            return(
               
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)}</p>
                    </div>
                </Link>
            
            )
        })}
      
      </div>    
            

    )
}