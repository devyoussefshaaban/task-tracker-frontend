import { useState } from "react";
import { Loading, SignInForm, SignUpForm } from "../components";
import { SIGN_UP_FORM_TYPE } from "../components/auth/SignUpForm";
import { useSelector } from "react-redux";
import { RootState } from "../context";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const isLoading: boolean = useSelector(
    (state: RootState) => state.general.isLoading
  );

  const switchForm = () => setIsLoginForm((ps) => !ps);

  if (isLoading) return <Loading />;

  if (isLoginForm) return <SignInForm switchForm={switchForm} />;

  return (
    <SignUpForm
      switchForm={switchForm}
      formType={SIGN_UP_FORM_TYPE.REGISTER_USER}
    />
  );
};

export default AuthPage;
