import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useEffect } from "react";
import { getMe } from "../context/actions/authActions";
import { BackToHomeBtn, Loading, SignUpForm } from "../components";
import { SIGN_UP_FORM_TYPE } from "../components/auth/SignUpForm";

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  if (!user) return <Loading />;

  return (
    <Container sx={{ py: 3 }}>
      <BackToHomeBtn />
      <Typography variant="h5">Hi, {user?.username}</Typography>
      <Typography variant="body1">
        Here you can easily update and manage your profile.
      </Typography>
      <SignUpForm
        switchForm={() => null}
        formType={SIGN_UP_FORM_TYPE.UPDATE_PROFILE}
      />
    </Container>
  );
};

export default ProfilePage;
