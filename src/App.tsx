import {  RouterProvider } from "react-router-dom";
import router from "./utils/routes";
import { AppDispatch, RootState } from "./context";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./context/actions/authActions";
import { User } from "./models/User";

const App = () => {
  const dispatch: AppDispatch = useDispatch()

  const user: User = useSelector((state: RootState) => state.auth.user)

  useEffect(() => {
   if(!user && window.location.pathname !== "/") dispatch(getMe())
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
