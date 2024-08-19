import AuthPage from "../pages/AuthPage";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Cookies from "js-cookie";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/404";
import { ACCESS_TOKEN } from "./constants";
import ProfilePage from "../pages/ProfilePage";
import UsersPage from "../pages/UsersPage";

const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN);
};

const isAuthenticated = () => {
  return !!getAccessToken();
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    index: true,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/tasks",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/manage/users",
        element: <UsersPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
