import { Container } from "@mui/material";
import { Loading, TaskList } from "../components";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { getMyTasks } from "../context/actions/tasksActions";
import { getMe } from "../context/actions/authActions";
import { redirect } from "react-router-dom";

const TasksPage = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const isLoading: boolean = useSelector(
    (state: RootState) => state.general.isLoading
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    isAuthenticated && dispatch(getMyTasks());
    isAuthenticated && dispatch(getMe());
  }, [isAuthenticated]);

  if (!isAuthenticated) redirect("/");

  if (isLoading) return <Loading />;

  return (
    <Container sx={{ py: 3 }}>
      <TaskList />
    </Container>
  );
};

export default TasksPage;
