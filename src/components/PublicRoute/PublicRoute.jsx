import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";
import { ROUTES } from "../../routes/routes";
import { Outlet } from "react-router-dom";


export default function PublicRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet/>;
}