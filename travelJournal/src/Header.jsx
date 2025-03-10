import globe from '../src/assets/globe.png'
import './header.css'
export default function Header(){
    return (
        <header>
            <img src={globe} alt="header-image" />
            <h1 className='h1-text'>MyTravelJournal</h1>
        </header>
    )
}