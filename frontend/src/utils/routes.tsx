import AuthPage from "../pages/AuthPage"
import { createBrowserRouter } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import Cookies from 'js-cookie'
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/404"

const getAccessToken = () => {
    return Cookies.get('accessToken');
  }
  
const isAuthenticated = () => {
    return !!getAccessToken();
  }

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AuthPage />,
        index: true
    },
    {
        element: <ProtectedRoute isAuthenticated={isAuthenticated()}/>,
        children:[
            {
                path: "/tasks",
                element: <HomePage />
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])

export default routes