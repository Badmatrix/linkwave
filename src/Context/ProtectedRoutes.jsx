/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function ProtectedRoutes({ children }) {
  const authUser = useAuth();
  if (authUser === null) return <Navigate replace to="/login" />;
  return children;
}

export default ProtectedRoutes;
