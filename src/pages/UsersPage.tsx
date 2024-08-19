import { Container, Grid, Typography } from "@mui/material";
import { UserCard } from "../components";
import { User } from "../models/User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useEffect } from "react";
import { getAllUsers } from "../context/actions/adminActions";

const UsersPage = () => {
  const users: User[] = useSelector((state: RootState) => state.admin.users);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h4">Users</Typography>
      <Grid container spacing={2} mt={5}>
        {users?.map((user) => (
          <Grid key={user._id} item xs={12} md={3}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UsersPage;
