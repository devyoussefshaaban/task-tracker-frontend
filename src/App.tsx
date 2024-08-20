import { Route, Routes } from "react-router-dom";
import { IRoute, routes } from "./utils/routes";
import { AppDispatch, RootState } from "./context";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./context/actions/authActions";
import { User } from "./models/User";
import AuthPage from "./pages/AuthPage";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  const user: User = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user && window.location.pathname !== "/") dispatch(getMe());
  }, []);
  return (
    <>
      <Routes>
        {routes.map((route: IRoute) => {
          const { path, Page } = route;
          if (user) return <Route key={path} path={path} element={<Page />} />;
          return <Route path="/" element={<AuthPage />} />;
        })}
      </Routes>
    </>
  );
};

export default App;
