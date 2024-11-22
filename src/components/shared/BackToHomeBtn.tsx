import { ArrowBack } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const BackToHomeBtn = (
  { path, text }: { path: string; text: string },
  rest: any
) => {
  return (
    <Box mb={3}>
      <Link to={path}>
        <Button
          {...rest}
          startIcon={<ArrowBack />}
          sx={{ textTransform: "capitalize" }}
        >
          {text}
        </Button>
      </Link>
    </Box>
  );
};

export default BackToHomeBtn;
