import { Box } from "@mui/material";
import { ReactNode } from "react";

const FlexBetween = ({ children }: { children: ReactNode[] }) => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {children}
    </Box>
  );
};

export default FlexBetween;
