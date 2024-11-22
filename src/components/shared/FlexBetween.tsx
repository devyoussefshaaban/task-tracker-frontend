import { Box } from "@mui/material";
import { ReactNode } from "react";

const FlexBetween = ({ children }: { children: ReactNode[] }, rest: any) => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default FlexBetween;
