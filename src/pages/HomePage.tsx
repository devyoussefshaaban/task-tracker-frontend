import { Box, Typography } from "@mui/material";
import { Task } from "../components";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { getMyTasks } from "../context/actions/tasksActions";
const HomePage = () => {
  const {isAuthenticated} = useSelector((state: RootState) => state.auth)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    isAuthenticated &&  dispatch(getMyTasks())
  }, [isAuthenticated])
  
  return (
    <>
      <Typography variant="h3">Welcome ...</Typography>
      <Box>
        <Task />
        <Task />
      </Box>
    </>
  );
};

export default HomePage;
