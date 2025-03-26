import '../../index.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import '../../index.css'


export default function SideBar({sidebar,category,setCategory}){
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-links ${category === 0?"active":""}`} onClick={()=>setCategory(0)}>
                    <img src={home} alt='home'/><p> Home </p>
                </div>
                <div className={`side-links ${category === 20?"active":""}`} onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt='Gaming'/><p> game </p>
                </div>
                <div className={`side-links ${category === 2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img src={automobiles} alt='automobiles'/><p> AutoMobiles </p>
                </div>
                <div className={`side-links ${category === 17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={sports} alt='sports'/><p> sports </p>
                </div>
                <div className={`side-links ${category === 24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt='entertainment'/><p> Entertainment </p>
                </div>
                <div className={`side-links ${category === 28?"active":""}`} onClick={()=>setCategory(28)}>
                    <img src={tech} alt='tech'/><p> tech </p>
                </div>
                <div className={`side-links ${category === 10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img src={music} alt='music'/><p> music </p>
                </div>
                <div className={`side-links ${category === 21?"active":""}`} onClick={()=>setCategory(21)}>
                    <img src={blogs} alt='blogs'/><p> blogs </p>
                </div>
                <div className={`side-links ${category === 25?"active":""}`} onClick={()=>setCategory(25)}>
                    <img src={news} alt='news'/><p> news </p>
                </div>
                <hr/>

            </div>
            <div className="subscribed-list ">
                <h3>Subscribed</h3>
                <div className="side-links">
                    <img src={jack} alt="" /><p>PewDiePie</p>
                </div>
                <div className="side-links">
                    <img src={simon} alt="" /><p>Mr.Beast</p>
                </div>
                <div className="side-links">
                    <img src={tom} alt="" /><p>justinBiber</p>
                </div>
                <div className="side-links">
                    <img src={megan} alt="" /><p>5-min Craft</p>
                </div>
                <div className="side-links">
                    <img src={cameron} alt="" /><p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}