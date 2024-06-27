import { Box, Typography } from "@mui/material";
import { Task } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../context";

const HomePage = () => {
  const {user} = useSelector((state: RootState) => state.auth)
  console.log({user})
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
