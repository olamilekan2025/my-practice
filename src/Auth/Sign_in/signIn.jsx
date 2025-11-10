// Auth/Sign_in.jsx
import { useState } from "react";
import { useAuth } from "../../Context/authcontext";
import { useNavigate } from "react-router-dom";
import { TfiEye } from "react-icons/tfi";
import { FiEyeOff } from "react-icons/fi";
import "./SignIn.css"

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
     setForm({ ...form, [e.target.name]: e.target.value });
  setError("");
  };
   

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signIn(form.email, form.password, navigate);
    if (!result.success) { setError(result.message);
    }
    // else setError("");
  };

  return (
    <div className="signIn-page">
      <div className="signIn-card" >
       
        <form onSubmit={handleSubmit} className="signIn-form" >

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="signin-input-field"
           
          />

          <div className="signin-password-wrapper">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="signin-input-field-password-input"
             
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="signin-eye-toggle"
             
            >
              {showPassword ? <FiEyeOff /> : <TfiEye />}
            </button>
          </div>

          <button
            type="submit" className="submit-btn">
            Sign In
          </button>
        </form>

        
        {error && (
          <p className="error">{error}</p>)}

        
        <p className="signin-signUp-link" onClick={() => navigate("/signUp")}>
          Don't have an account?{" "}<strong>Sign Up</strong>
        </p>
      </div>

     
    </div>
  );
}