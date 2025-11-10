// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { RiMenuFold2Line } from "react-icons/ri";
// import { FaXmark } from "react-icons/fa6";
// import { BsCart4 } from "react-icons/bs";
// import SearchBar from "../Routes/utils/SearchBar";
// import { useCart } from "../context/cartcontext";
// import "./Navbar.css";
// import MainBgPage from "../Component/MainBgPage";
// import { useAuth } from "../Context/authcontext";

// function Navbar() {
//   const [isMobile, setIsMobile] = useState(false);
//   const navbarRef = useRef(null);
//   const { getCartCount } = useCart();
//   const { isLoggedIn, user, logout } = useAuth();

//   // const word = user.name;
//   // const firstLetter = word.chartAt(0);

//   const handleToggleMenu = () => setIsMobile((prev) => !prev);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (navbarRef.current && !navbarRef.current.contains(e.target)) {
//         setIsMobile(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="main-nav">
//       <MainBgPage />
//       <nav className="navigation" ref={navbarRef}>
//         <NavLink to="/" className="logo" onClick={() => setIsMobile(false)}>
//           OLA FROSH
//         </NavLink>

//         <SearchBar />

//         <div className={`navbar ${isMobile ? "active" : ""}`}>
//           {[
//             { path: "/", label: "Home" },
//             { path: "/about", label: "About" },
//             { path: "/services", label: "Services" },
//             { path: "/contact", label: "Contact" },
//             { path: "/gallery", label: "Gallery" },
//             { path: "/faq", label: "FAQ" },
//             { path: "/menu", label: "Menu" },
//             { path: "/product", label: "Product" },
//           ].map((link) => (
//             <NavLink
//               key={link.path}
//               to={link.path}
//               className="nav-link"
//               onClick={() => setIsMobile(false)}
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </div>

//         <div className="auth-area">
//           {isLoggedIn ? (
//             <>
//               {/* <span>Hello, {firstLetter}</span> */}
//               <button onClick={logout}>Logout</button>
//             </>
//           ) : (
//             <NavLink to="/signIn" className="nav-link">
//               Sign In
//             </NavLink>
//           )}
//         </div>

//         <div className="cart-icon-container">
//           <NavLink
//             to="/cart"
//             className="cart-link"
//             onClick={() => setIsMobile(false)}
//           >
//             <BsCart4 style={{ fontSize: "22px" }} />
//             {getCartCount() > 0 && (
//               <span className="cart-count">{getCartCount()}</span>
//             )}
//           </NavLink>
//         </div>

//         <div className="toggle" onClick={handleToggleMenu}>
//           {isMobile ? <FaXmark /> : <RiMenuFold2Line />}
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;







import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RiMenuFold2Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import SearchBar from "../Routes/utils/SearchBar";
import { useCart } from "../context/cartcontext";
import "./Navbar.css";
import MainBgPage from "../Component/MainBgPage";
import { useAuth } from "../Context/authcontext";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);
  const { getCartCount } = useCart();
  const { isLoggedIn, user, logout } = useAuth();

  const handleToggleMenu = () => setIsMobile((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const names = fullName.trim().split(" ");
    const first = names[0]?.charAt(0).toUpperCase() || "";
    const second = names[1]?.charAt(0).toUpperCase() || "";
    return first + second;
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.classList.contains("user-avatar")
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="main-nav">
      {/* <MainBgPage /> */}
      <nav className="navigation" ref={navbarRef}>

        <NavLink to="/" className="logo" onClick={() => setIsMobile(false)}>
          OLA FROSH
        </NavLink>

        {/* <SearchBar /> */}

        
        <div className={`navbar ${isMobile ? "active" : ""}`}>
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" },
            { path: "/gallery", label: "Gallery" },
            { path: "/faq", label: "FAQ" },
            { path: "/menu", label: "Menu" },
            { path: "/product", label: "Product" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="nav-link"
              onClick={() => setIsMobile(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

         
        {/* Cart */}
        <div className="cart-icon-container">
          <NavLink
            to="/cart"
            className="cart-link"
            onClick={() => setIsMobile(false)}
          >
            <BsCart4 style={{ fontSize: "22px" }} />
            {getCartCount() > 0 && (
              <span className="cart-count">{getCartCount()}</span>
            )}
          </NavLink>
        </div>


        {/* Auth Section  */}
        <div className="auth-area">
          {isLoggedIn && user ? (
            <div className="user-section">
              <div className="user-avatar" onClick={toggleDropdown}>
                {getInitials(user.name)}
              </div>

              {isDropdownOpen && (
                <div className="dropdown-menu" ref={dropdownRef}>
                  <p className="email"><strong>Email:</strong> {user.email}</p>
                  <p>
                    <strong>Password:</strong>{" "}
                    {"*".repeat(user.password?.length || 8)}
                  </p>
                  <button onClick={logout} className="logout-btn">
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/signIn" className="nav-link-signIn">
              Sign In
            </NavLink>
          )}
        </div>


        {/* Toggle (Mobile) */}
        <div className="toggle" onClick={handleToggleMenu}>
          {isMobile ? <FaXmark /> : <RiMenuFold2Line />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
