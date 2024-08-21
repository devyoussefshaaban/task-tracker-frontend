import { Box } from "@mui/material";
import { ReactNode } from "react";

const FlexColumn = ({ children }: { children: ReactNode[] }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={8}
    >
      {children}
    </Box>
  );
};

export default FlexColumn;
