import { Button, Container, Typography } from "@mui/material";
import { FlexColumn } from "../components";
import { Link } from "react-router-dom";
import muiTheme from "../utils/theme";

const HomePage = () => {
  const theme = muiTheme();

  return (
    <Container>
      <FlexColumn>
        <Typography variant="h6">Welcome</Typography>
        <Link to="/home">
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              mt: 4,
              background: theme.palette.primary.light,
            }}
          >
            Get Started
          </Button>
        </Link>
      </FlexColumn>
    </Container>
  );
};

export default HomePage;
