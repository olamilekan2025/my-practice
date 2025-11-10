import { Link } from "react-router-dom";
import "./Footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="card">
                <h3>Logo</h3>
            </div>
            <div className="card">
                <h3>Quick Link</h3>
            </div>
            <div className="card">
                <h3>Company</h3>
            </div>
            <div className="card">
                <h3>Get In Touch</h3>
                <Link to='/menu'>Menu</Link>
            </div>
        </div>
    )
}

export default Footer