import { Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function PublicRoute({ children }) {
  const isAuthenticated = localStorage.getItem("auth") === "true"

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return children;
}