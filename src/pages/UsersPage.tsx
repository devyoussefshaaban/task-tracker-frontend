import { Container, Grid, Typography } from "@mui/material";
import { UserCard } from "../components";

const UsersPage = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h4">Users</Typography>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={3}>
          <UserCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UsersPage;
