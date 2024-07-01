import { Box, Container, Typography } from "@mui/material";

const CommingSoon = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Box textAlign="center">
        <Typography variant="h5">Comming Soon</Typography>
        <Typography variant="body2">
          The application is currently under construction, will be published soon.
        </Typography>
      </Box>
    </Container>
  );
};

export default CommingSoon;
