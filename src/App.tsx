import { Route, Routes } from "react-router-dom";
import { AppDispatch, RootState } from "./context";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./context/actions/authActions";
import { User } from "./models/User";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./utils/ProtectedRoute";
import UsersPage from "./pages/UsersPage";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  const user: User = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (
      !user &&
      window.location.pathname !== "/login" &&
      !window.location.pathname.includes("/verify")
    )
      dispatch(getMe());
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/manage/users"
          element={
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
