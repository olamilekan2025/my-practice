// // Auth/Sign_up.jsx
// import { useState } from "react";
// import { useAuth } from "../../Context/authcontext";
// import { useNavigate } from "react-router-dom";
// import { TfiEye } from "react-icons/tfi";
// import { FiEyeOff } from "react-icons/fi";

// export default function SignUp() {
//   const { signUp } = useAuth();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signUp(form, navigate); 
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background:"white-smoke",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "1rem",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
    
      
     

      
//       <div
//         style={{
          
//           background:"#b7b3b3ff",
//           backdropFilter: "blur(16px)",
//           WebkitBackdropFilter: "blur(16px)",
//           borderRadius: "28px",
//           boxShadow: "0 25px 50px rgba(0, 0, 0, 0.18)",
//           padding: "3rem 2.5rem",
//           width: "100%",
//           maxWidth: "420px",
//           textAlign: "center",
//           border: "1px solid rgba(255, 255, 255, 0.3)",
//           position: "relative",
//           zIndex: 10,
//           animation: "fadeInUp 0.6s ease-out",
//         }}
//       >
      

        
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          
//           <input
//             name="name"
//             type="text"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             style={{
//               padding: "1rem 1.2rem",
//               fontSize: "1rem",
//               borderRadius: "14px",
//               border: "2px solid #e0e0e0",
//               outline: "none",
//               transition: "all 0.3s ease",
//               background: "#f8f9fa",
//             }}
//           />

         
//           <input
//             name="email"
//             type="email"
//             placeholder="Email Address"
//             value={form.email}
//             onChange={handleChange}
//             required
//             style={{
//               padding: "1rem 1.2rem",
//               fontSize: "1rem",
//               borderRadius: "14px",
//               border: "2px solid #e0e0e0",
//               outline: "none",
//               transition: "all 0.3s ease",
//               background: "#f8f9fa",
//             }}
//           />

          
//           <div style={{ position: "relative" }}>
//             <input
//               name="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               style={{
//                 width: "100%",
//                 padding: "1rem 1.2rem 1rem 1.2rem",
//                 fontSize: "1rem",
//                 borderRadius: "14px",
//                 border: "2px solid #e0e0e0",
//                 outline: "none",
//                 transition: "all 0.3s ease",
//                 background: "#f8f9fa",
//                 paddingRight: "3.5rem",
//               }}
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               style={{
//                 position: "absolute",
//                 right: "12px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 background: "none",
//                 border: "none",
//                 fontSize: "1.3rem",
//                 color: "#777",
//                 cursor: "pointer",
//                 padding: "0",
//                 display: "flex",
//                 alignItems: "center",
//                 transition: "color 0.2s",
//               }}
//             >
//               {showPassword ? <FiEyeOff /> : <TfiEye />}
//             </button>
//           </div>

          
//           <button
//             type="submit"
//             style={{
//               padding: "1rem",
//               fontSize: "1.1rem",
//               fontWeight: "600",
//               borderRadius: "14px",
//               border: "none",
//               background: "linear-gradient(to right, #0099ff, #f861ff)",
//               color: "white",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               boxShadow: "0 8px 20px rgba(248, 97, 255, 0.3)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//             onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
//             onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
//           >
//             Sign Up
//           </button>
//         </form>

      
//         <p
//           style={{
//             marginTop: "2rem",
//             color: "#040404ff",
//             fontSize: "0.95rem",
//             cursor: "pointer",
//           }}
//           onClick={() => navigate("/signIn")}
       
//         >
//           Already have an account?{" "}
//           <strong
//             style={{
//               color: "#0099ff",
//               fontWeight: "700",
//               textDecoration: "underline",
//               textUnderlineOffset: "3px",
//             }}
//           >
//             Sign In
//           </strong>
//         </p>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           50% { transform: translate(30px, -30px) rotate(5deg); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// }


// src/Auth/Sign_up/SignUp.jsx
import { useState } from "react";
import { useAuth } from "../../Context/authcontext";
import { useNavigate } from "react-router-dom";
import { TfiEye } from "react-icons/tfi";
import { FiEyeOff } from "react-icons/fi";
import "./SignUp.css"; // ← Import CSS

export default function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const togglePasswordVisibility = () => setShowPassword((p) => !p);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(form);
    navigate("/signIn");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="input-field"
          />

          <div className="password-wrapper">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="input-field-password-input"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="eye-toggle"
            >
              {showPassword ? <FiEyeOff /> : <TfiEye />}
            </button>
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <p className="signin-link" onClick={() => navigate("/signIn")}>
          Already have an account? <strong>Sign In</strong>
        </p>
      </div>
    </div>
  );
}