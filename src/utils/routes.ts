import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

export interface IRoute {
  path: string;
  Page: () => JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: "/tasks",
    Page: HomePage,
  },
  {
    path: "/profile",
    Page: ProfilePage,
  },
];
