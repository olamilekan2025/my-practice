import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const isLoggedIn = !!user;

  const signUp = (userData) => {
    // Save user details (don’t log in yet)
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const signIn = (email, password) => {
    const saved = JSON.parse(localStorage.getItem("user"));
    if (saved && saved.email === email && saved.password === password) {
      setUser(saved);
      navigate("/");
      return { success: true };
    }
    return { success: false, message: "Invalid email or password" };
  };

  const logout = () => {
    // localStorage.removeItem("user");
    setUser(null);
    navigate("/signIn");
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, signUp, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
