import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // depois você liga isso ao seu auth real

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}