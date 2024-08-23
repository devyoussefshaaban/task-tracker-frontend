import { Button, Container, Typography } from "@mui/material";
import { FlexColumn } from "../components";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <FlexColumn>
        <Typography variant="h6">Welcome</Typography>
        <Link to="/tasks">
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", mt: 4 }}
          >
            Get Started
          </Button>
        </Link>
      </FlexColumn>
    </Container>
  );
};

export default HomePage;
