// import "./UserNav.css"
// import { useAuth } from "../../Context/authcontext"
// import { Link } from "react-router-dom";
// import { IoMdPersonAdd } from "react-icons/io";
// import { HiOutlineMail } from "react-icons/hi";
// import { IoMdSettings } from "react-icons/io";
// import { IoNotifications } from "react-icons/io5";
// import { FaArrowRightToBracket } from "react-icons/fa6";

// function UserNav() {
//     const {user,logout} = useAuth();
//     return (
//         <div className="aside">
//             <div className="user-user-header">
//                 <h1 className="app_name">OLA FROSH</h1>
//                 {/* <h2>{user ? `welcome, ${user.name || "user"}` : "user Menu"}</h2> */}
//                 {user && <p><IoMdPersonAdd style={{color:"blue",fontSize:"20px"}}/> {user.name}</p> }
                
//             </div>

//             <nav className="user-nav-links">
//                 <Link to="/setting"> <IoMdSettings style={{color:"blue",fontSize:"20px"}}/> settings </Link>
//                 <Link to="/notivication"><IoNotifications   style={{color:"blue",fontSize:"20px",}}/> Notification</Link>
//             </nav>

//             <nav className="logout">
//                 <button className="logout-btn" onClick={logout}> <FaArrowRightToBracket style={{fontSize:"13px",color:"blue",hoverColor:"white"}} />  logout</button>
//             </nav>
//         </div>
//     )
// }

// export default UserNav




import "./UserNav.css";
import { useAuth } from "../../Context/authcontext";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function UserNav() {
  const { user, logout } = useAuth();

  const navigate = useNavigate ()

  const handleGohome = () => {
    navigate("/")
  }

  return (
    <div className="aside">
      <div className="user-user-header">
        <h1 onClick={handleGohome} className="app_name">OLA FROSH</h1>
        {user && (
          <p>
            <IoMdPersonAdd style={{ color: "blue", fontSize: "20px" }} />{" "}
            {user.name}
          </p>
        )}
      </div>

      <nav className="user-nav-links">
        <Link to="/dashboard/setting">
          <IoMdSettings style={{ color: "blue", fontSize: "20px" }} /> Settings
        </Link>
        <Link to="/dashboard/notivication">
          <IoNotifications style={{ color: "blue", fontSize: "20px" }} /> Notification
        </Link>
      </nav>

      <nav className="logout">
        <button className="logout-btn" onClick={logout}>
          <FaArrowRightToBracket style={{ fontSize: "13px", color: "blue" }} /> Logout
        </button>
      </nav>
    </div>
  );
}

export default UserNav;
