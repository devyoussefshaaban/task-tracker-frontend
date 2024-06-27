import { Box, Typography } from "@mui/material";
import { Task } from "../components";

const HomePage = () => {
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
