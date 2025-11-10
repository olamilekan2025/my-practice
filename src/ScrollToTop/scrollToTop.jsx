import { FaArrowUp } from "react-icons/fa";
import './ScrollToTop.css'

function ScrollToTop() {
    const ScrollToTop =() => {
        window.scrollTo ({
            top:0,
        behavior: 'smooth'   
         })
    }


    return (
         <div className="top">
             <button onClick={ScrollToTop}><FaArrowUp style={{color:"#fff",fontSize:"15px", borderRadius:"50px"}}/> <h6>Scroll to top</h6></button>
         </div>
    )

}

export default ScrollToTop
