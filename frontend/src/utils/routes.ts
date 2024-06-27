import AuthPage from "../pages/AuthPage"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/404"

export interface IRoute {
    path: string,
    Page: () => JSX.Element
}

const routes: IRoute[] = [
    {
        path: "/",
        Page: HomePage
    },
    {
        path: "/auth",
        Page: AuthPage
    },
    {
        path: "*",
        Page: NotFoundPage
    }
]

export default routes