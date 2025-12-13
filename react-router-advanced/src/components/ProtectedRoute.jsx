import { Navigate } from "react-router-dom";
import useAuth from "./useAuth"; // import the hook

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth(); // use the hook

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
