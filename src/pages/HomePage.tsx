import { Container } from "@mui/material";
import { TaskList } from "../components";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { getMyTasks } from "../context/actions/tasksActions";

const HomePage = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    isAuthenticated && dispatch(getMyTasks());
  }, [isAuthenticated]);

  return (
    <Container sx={{py: 3}}>
      <TaskList />
    </Container>
  );
};

export default HomePage;
