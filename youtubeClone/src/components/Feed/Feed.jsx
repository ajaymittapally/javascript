
import { Link } from "react-router-dom"
import "./Feed.css"
import {useEffect, useState} from 'react'
import { API_KEY, value_converter } from '../../data'
export default function Feed({category}){
    const [data,setData] = useState([]);
   
    
    async function fetchData(){
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}` 
        const response = await fetch(videoList_url);
        const data = await response.json();
        setData(data.items) ;
    
    }
    useEffect(()=>{
        fetchData();
    },[category])

  
    return(
        <div className="feed ">
            {data && data.length > 0 ? data.map((item,index)=>{
                return(
                    <Link key={item.id}to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_converter(item.statistics.viewCount)} views &bull;{item.snippet.publishedAt.substring(0, 10)}</p>
                </Link>
                ) 
            }): (
                <p>Loading...</p> // Show loading message if data is still being fetched
              )}
            
       
   
           
        </div>
    )
}