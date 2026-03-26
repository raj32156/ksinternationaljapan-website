import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const { authLoading, isAuthenticated } = useAuth();

  if (authLoading) {
    return <LoadingSpinner label="Authorizing access" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute;
