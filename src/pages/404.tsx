import { Box, Typography } from "@mui/material";
import { BackToHomeBtn } from "../components";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={8}
    >
      <img src="/404.png" alt="404 - not-found" />
      <Box mt={3} mb={5} textAlign="center">
        <Typography variant="h6" mb={2}>
          This page is not found.
        </Typography>
        <Typography variant="body2">
          This page is not working at this time, <br /> please, try to get back
          later.
        </Typography>
      </Box>
      <BackToHomeBtn variant="contained" />
    </Box>
  );
};

export default NotFoundPage;
