import "./PlayVideo.css"
import like from "../../assets/like.png"
import {useState, useEffect} from "react"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"

import { API_KEY, value_converter } from "../../data"
import '../../data'

import { useParams } from "react-router-dom"

export default function PlayVideo(){
    const {videoId} = useParams()


    const [apiData, setApiData] = useState(null);
    const [channelData,setChannelData] = useState(null);
    const [commentData,setCommentData]= useState(null);
    const fetchVideoData = async () => {
        try{
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        const response = await fetch(videoDetails_url)
        const data = await response.json()
        setApiData(data.items[0])
        }catch (error) {
            console.error("Error fetching video data:", error);
          }
      };
      useEffect(()=>{
        fetchVideoData()
      },[videoId])

      async function fetchOtherDate(){
        try{
            const channelData_url =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
            const response = await fetch(channelData_url)
            const data = await response.json()
            setChannelData(data.items[0])

            const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
            const response2 = await fetch(comment_url)
            const data2 = await response2.json()
            setCommentData(data2.items)
        }catch(error){
            console.error("Error fetching the data",error)

        }
      }
      useEffect(()=>{
        fetchOtherDate()
      },[apiData])


    return (
        <div className="play-video ">
            {/* <video src={video} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}  allowFullScreen></iframe>
            <h3 >{apiData?apiData.snippet.title:"Title Here"}</h3>
            <div className="play-video-info">
                <p>435 view &bull;2days ago</p>
                <div className="flex" >
                    <span><img src={like} alt="" />{value_converter(apiData?apiData.statistics.likeCount:155)}</span>
                    <span><img src={dislike} alt="" />{value_converter(apiData?apiData.statistics.dislikeCount:155)}</span>
                    <span><img src={share} alt="" />125</span>
                    <span><img src={save} alt="" />125</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
                <div>
                    <p className="text-[#000] font-medium size-[18px] ">{apiData?apiData.snippet.channelTitle:""}</p>
                    <span className="size-[13px] text-[#5a5a5a] ">{value_converter(channelData?channelData.statistics.subscriberCount:102)}</span>
                </div>
                <button >Subscribe</button>
            </div>
            <div className="description ">
                <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
                <hr />
                <h4>{value_converter(apiData?apiData.statistics.commentCount:102)} </h4>
               {commentData && commentData.map((item,index)=>{
                return (
                    <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName.slice(1)} <span>1 day ago</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay} </p>
                        <div className="comment-action">
                            <img src={like} alt=""  />
                            <span>{value_converter((item.snippet.topLevelComment.snippet.likeCount))}</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                )
               })}
               
                
            </div>
        </div>
    )
}