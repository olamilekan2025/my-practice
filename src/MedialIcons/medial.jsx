import { createPortal } from 'react-dom'
import { FaTwitter } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import '../MedialIcons/Medial.css'

function Medial() {
    return  createPortal (
        <div className="medialContainer">
         <a href="https://www.facebook.com/profile.php?id=61564443720660&mibextid=wwXIfr&mibextid=wwXIfr" className='facebook'><SlSocialFacebook style={{color:"blue",  fontSize: "25px"}}/></a>
         <a href="https://www.wa.com" className='whatsapp'><FaWhatsapp style={{color:"#07BC0C",  fontSize: "25px", hover: "green"}} /></a>
         <a href="https://www.twitter.com" className='twitter'><FaTwitter style={{color:"skyblue", fontSize: "25px"}} /></a>
         <a href="https://www.tiktok.com" className='tiktok'><FaTiktok style={{color:"#000",  fontSize: "25px"}}/></a>
         <a href="https://www.instagram.com" className='intagram'><BiLogoInstagramAlt style={{color:"#CF32C4",  fontSize: "25px"}}/></a>
        </div>,
        document.getElementById ("icons")
        
    )
}

export default Medial
