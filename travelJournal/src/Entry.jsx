import './Entry.css'

export default function Entry(props){
    return (
        <article className="journal-entry" >
            <div className="main-img-container">
                <img
                className="main-img" 
                src={props.e.img.src}
                alt={props.e.img.alt}/>
            </div>
            <div className='info-container'>
                <img 
                className='marker'
                src="../src/assets/marker.png"
                alt="marker-image" />
                <span className='country'>{props.e.country}</span>
                <a href={props.e.location}>view on google maps</a>
                <h2 className='entry-title'>{props.e.title}</h2>
                <p className='trip-dates'>{props.e.date}</p>
                <p className='entry-text'>{props.e.text}</p>
            </div>
            
            
        </article>
    )
}