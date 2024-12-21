import { Container } from "@mui/material";
import { Loading, TaskList, TasksHeader } from "../components";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { getMyTasks } from "../context/actions/tasksActions";
import { getMe } from "../context/actions/authActions";
import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "../utils/constants";

const TasksPage = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const isLoading: boolean = useSelector(
    (state: RootState) => state.general.isLoading
  );

  const dispatch: AppDispatch = useDispatch();

  const isAuthenticatedUser =
    isAuthenticated &&
    Cookies.get(ACCESS_TOKEN) &&
    Cookies.get(ACCESS_TOKEN) !== "";

  useEffect(() => {
    isAuthenticatedUser && dispatch(getMyTasks());
    isAuthenticatedUser && dispatch(getMe());
  }, [isAuthenticatedUser]);

  if (!isAuthenticated) redirect("/");

  if (isLoading) return <Loading />;

  return (
    <Container sx={{ py: 3, pt: 4 }}>
      <TasksHeader />
      {/* <TaskList /> */}
    </Container>
  );
};

export default TasksPage;
