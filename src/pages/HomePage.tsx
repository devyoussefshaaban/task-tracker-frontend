import { Box, Container, Divider, Typography } from "@mui/material";
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
      <Box sx={{textAlign: "center"}}>
      <Typography variant="h5">Your Tasks</Typography>
      <Divider sx={{width: "10rem", margin:".5rem auto 1rem"}} />
      </Box>
      <TaskList />
    </Container>
  );
};

export default HomePage;
