import { Navigate } from "react-router-dom";
import { useAuth } from "./authcontext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/signIn" replace />;
  }

  return children;
}



// import { Navigate } from "react-router-dom";
// import { useAuth } from "./authcontext";

// export default function ProtectedRoute({ children }) {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? children : <Navigate to="/signIn" />;
// }
