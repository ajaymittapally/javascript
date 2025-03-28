import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/Recommended/Recommended";
import "./Video.css"
import {useParams} from 'react-router-dom'
export default function  Video(){
    const {videoId,categoryId}= useParams();
    return (
        <div className="play-container">
            <PlayVideo videoId={videoId}/>
            <Recommended categoryId={categoryId}/>
        </div>
    )
}