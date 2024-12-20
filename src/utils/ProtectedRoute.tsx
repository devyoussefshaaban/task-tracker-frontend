import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../context";
import { User } from "../models/User";
import { USER_ROLE } from "./constants";
import NotFoundPage from "../pages/404";

const ProtectedRoute = ({ children }: { children: any }) => {
  const { isAuthenticated, user }: { isAuthenticated: boolean; user: User } =
    useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (!isAuthenticated)
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  else if (
    isAuthenticated &&
    user?.role !== USER_ROLE.ADMIN &&
    user?.role !== USER_ROLE.OWNER &&
    location.pathname.includes("manage")
  )
    return <NotFoundPage />;

  return children;
};

export default ProtectedRoute;
