import {
  Box,
  Button,
  Divider,
  FormControl,
  Typography,
  useTheme,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { AppDispatch, RootState } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { signUp, updateMyProfile } from "../../context/actions/authActions";
import { SignUpRequestBody } from "../../utils/api";
import {
  SignUpFormValues,
  signUpFormResolver,
} from "../../validations/authValidation";

export enum SIGN_UP_FORM_TYPE {
  REGISTER_USER,
  UPDATE_PROFILE,
}

interface IProps {
  formType: SIGN_UP_FORM_TYPE.UPDATE_PROFILE | SIGN_UP_FORM_TYPE.REGISTER_USER;
  switchForm: () => void;
}

const SignUpForm: FC<IProps> = ({ formType, switchForm }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isRegisterForm = formType === SIGN_UP_FORM_TYPE.REGISTER_USER;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      username: isRegisterForm ? "" : user?.username,
    },
    resolver: signUpFormResolver,
  });

  const dispatch: AppDispatch = useDispatch();

  const signUpHandler = (data: SignUpRequestBody) => {
    dispatch(signUp(data));
    switchForm();
  };

  const submitHandler = handleSubmit((data: SignUpRequestBody) => {
    isRegisterForm ? signUpHandler(data) : dispatch(updateMyProfile(data));
  });

  return (
    <Stack margin="2rem auto 2rem" width="30ch">
      <Box mb={2}>
        <Typography variant="h6" textAlign="center">
          {isRegisterForm ? "Sign Up" : "Update Profile"}
        </Typography>
        <Divider sx={{ mb: 1, mt: 1 }} />
      </Box>
      <form onSubmit={submitHandler} style={{ margin: "auto" }}>
        <FormControl sx={{ mb: 2 }}>
          <TextField
            sx={{ mb: 1 }}
            label="Username"
            hiddenLabel
            id="username"
            variant="outlined"
            size="small"
            {...register("username")}
            defaultValue={isRegisterForm ? "" : user?.username}
          />
          {errors?.username && (
            <Typography variant="body2" color="red">
              {errors.username.message as string}
            </Typography>
          )}
        </FormControl>

        <FormControl sx={{ mb: 2 }}>
          <TextField
            sx={{ mb: 1 }}
            label="Email"
            id="email"
            placeholder="Enter your email"
            variant="outlined"
            {...register("email")}
            defaultValue={isRegisterForm ? "" : user?.email}
          />
          {errors?.email && (
            <Typography variant="caption" color="red">
              {errors.email.message as string}
            </Typography>
          )}
        </FormControl>

        <FormControl sx={{ mb: 2 }}>
          <TextField
            sx={{ mb: 1 }}
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            variant="outlined"
            {...register("password")}
            defaultValue={isRegisterForm ? "" : "123123"}
          />
          {errors?.password && (
            <Typography variant="caption" color="red">
              {errors.password.message as string}
            </Typography>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          sx={{
            textTransform: "capitalize",
            display: "block",
            width: "fit-content",
            margin: "auto",
          }}
        >
          {isRegisterForm ? "Submit" : "Save"}
        </Button>
      </form>
      {isRegisterForm ? (
        <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
          <Typography variant="caption">Already have an account?</Typography>
          <Button
            variant="text"
            sx={{ textTransform: "capitalize" }}
            onClick={switchForm}
          >
            Login
          </Button>
        </Box>
      ) : null}
    </Stack>
  );
};

export default SignUpForm;
