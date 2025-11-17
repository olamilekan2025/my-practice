// // layouts/DashboardLayout.jsx
// import { Outlet } from "react-router-dom";
// import UserNav from "../UserNav/userNav";
// import "./Dashboard.css"
// import Notivication from "./Notivication_page/notivication";
// import Setting from "./Setting_page/setting";



// export default function DashboardLayout() {
//   return (
//     <>

//     <div className="dashboard-layout" >
//        <UserNav />
//        <div className="header">
//        </div>
//        <div className="dashboard">
//         <Notivication/>
//         <Setting/>
        
//        </div>
//     </div>
    
    
//     </>
//   );
// }



import { Outlet } from "react-router-dom";
import UserNav from "../UserNav/userNav";
import "./Dashboard.css";
import { useAuth } from "../../Context/authcontext";

export default function DashboardLayout() {
  const {user} = useAuth()

  return (
    <div className="dashboard-layout">
      <UserNav />
      <div className="header">
        
        <h2>{user ? `You are welcome : ${user.name || "User"}` : "User Menu"}</h2>
      </div>
      <div className="dashboard-content">
        <Outlet />
        
      </div>
    </div>
  );
}

