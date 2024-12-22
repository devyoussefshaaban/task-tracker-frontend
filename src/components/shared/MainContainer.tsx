import { Container } from "@mui/material";

const MainContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Container sx={{ pt: 5 }}>
      <Container>{children}</Container>
    </Container>
  );
};

export default MainContainer;
