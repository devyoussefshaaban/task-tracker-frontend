import { Button } from "@mui/material";

const BasicButton = (rest: any) => {
  return <Button {...rest} sx={{ textTransform: "capitalize" }} />;
};

export default BasicButton;
