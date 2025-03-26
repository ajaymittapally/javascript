import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/ham.jpg'
import "../../index.css"
import {Link} from 'react-router-dom'
export default function NavBar({setSidebar}){
    return (
        <nav className="flex-div" >
            <div className="nav-left flex-div">
                <img
                onClick={()=>setSidebar (prev=>prev===false?true:false)}
                 className="menu-icon "
                 src={menu_icon} alt="menu-icon"/>
                 
                 <Link to='/'>  <img className='logo' src={logo} alt="logo"/></Link>
            </div>
            <div className="nav-middle flex-div ">
                <div className='search-box flex-div'>
                    <input type='text' placeholder='Search'/>
                    <img src={search_icon} alt='search-icon'/>
                </div>
                
            </div>
            <div className="nav-right flex-div" style={{columnGap: "12px", padding: "6px",}}>
                <img src={upload_icon} className='w-[25px]  ' alt="upload-icon" />
                <img src={more_icon} className='w-[25px] ' alt="more-icon" />
                <img src={notification_icon} className='w-[25px]' alt="notification-icon" />
                <img src={profile_icon} className='user-icon h-[32px] w-[32px] rounded-full ' alt="profile-icon" />
            </div>
        </nav>
    )
}