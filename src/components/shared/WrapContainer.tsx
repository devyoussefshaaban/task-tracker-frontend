import { Container } from "@mui/material";
import { ReactNode } from "react";

const WrapContainer = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return <Container sx={{ Py: 3 }}>{children}</Container>;
};

export default WrapContainer;
