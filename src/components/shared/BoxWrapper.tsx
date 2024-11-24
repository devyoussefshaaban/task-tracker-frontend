import { Box } from "@mui/material";

const BoxWrapper = ({ children }: { children: any }) => {
  return <Box my={1}>{children}</Box>;
};

export default BoxWrapper;
