import { Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("auth") === "true"; // depois você liga isso ao seu auth real

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
}