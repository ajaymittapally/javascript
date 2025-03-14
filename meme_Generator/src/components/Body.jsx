import React,{useEffect}from 'react'
import '../stylesheet/Body.css'
export default function Body(){
    const [meme, setMeme] = React.useState({
        topText:"One does not simply",
        bottomText:"Walk into Mordor",
        imgUrl:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    },[])


    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme((prevMeme)=>({
                ...prevMeme,
                [name]:value
        }))

    }

    function getMemeImg(){
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const getMeme = allMemes[randomNumber].url
        setMeme(prev =>({
            ...prev,
            imgUrl:getMeme
        }))
    }
  
    return (
        <main>
            <div className="text-container">
                <label className="top-text">
                    Top Text
                    <br/>
                    <input type="text" placeholder="enter the top text"
                     name="topText" className="top-text"
                      onChange={handleChange}
                      value={meme.topText}/>   
                </label>
            
            
                <label>
                    Bottom text
                    <br/>
                    <input type="text" placeholder="Enter the bottom text" 
                    name="bottomText" 
                    className="bottom-text"
                    onChange={handleChange}
                    value={meme.bottomText}/>
                </label>
                <button onClick={getMemeImg}className='generate-button'>Generate the meme</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}