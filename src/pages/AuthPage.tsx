import { useState } from "react";
import { Loading, SignInForm, SignUpForm } from "../components";
import { SIGN_UP_FORM_TYPE } from "../components/auth/SignUpForm";
import { useSelector } from "react-redux";
import { RootState } from "../context";
import { Container } from "@mui/material";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const isLoading: boolean = useSelector(
    (state: RootState) => state.general.isLoading
  );

  const switchForm = () => setIsLoginForm((ps) => !ps);

  if (isLoading) return <Loading />;

  if (isLoginForm)
    return (
      <Container
        sx={{ display: "grid", placeItems: "center", height: "100vh" }}
      >
        <SignInForm switchForm={switchForm} />
      </Container>
    );

  return (
    <Container sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <SignUpForm
        switchForm={switchForm}
        formType={SIGN_UP_FORM_TYPE.REGISTER_USER}
      />
    </Container>
  );
};

export default AuthPage;
