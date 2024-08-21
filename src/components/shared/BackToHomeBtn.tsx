import { ArrowBack } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const BackToHomeBtn = (props: any) => {
  return (
    <Box mb={3}>
      <Link to={"/tasks"}>
        <Button
          {...props}
          startIcon={<ArrowBack />}
          sx={{ textTransform: "capitalize" }}
        >
          Back To Home
        </Button>
      </Link>
    </Box>
  );
};

export default BackToHomeBtn;
