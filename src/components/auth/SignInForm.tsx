import { Box, Button, Divider, FormControl, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import { useForm } from "react-hook-form";
import {
  SignInFormValues,
  signInFormResolver,
} from "../../validations/authValidation";
import { SignInRequestBody } from "../../utils/api";
import { AppDispatch } from "../../context";
import { useDispatch } from "react-redux";
import { signIn } from "../../context/actions/authActions";
import { useNavigate } from "react-router-dom";

interface IProps {
  switchForm: () => void;
}

const SignInForm: FC<IProps> = ({ switchForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({ resolver: signInFormResolver });

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = handleSubmit((data: SignInRequestBody) => {
    dispatch(signIn(data));

    if (true) {
      navigate("/tasks");
    }
  });

  return (
    <Stack spacing={2} width="30ch" margin="2rem auto 2rem">
      <Box>
        <Typography variant="h6" textAlign="center">
          Sign In
        </Typography>
        <Divider sx={{ mb: 1, mt: 1 }} />
      </Box>
      <form onSubmit={submitHandler}>
        <FormControl sx={{ mb: 2 }}>
          <TextField
            label="Email"
            id="email"
            placeholder="Enter your email"
            variant="outlined"
            {...register("email")}
          />
          {errors?.email && (
            <Typography variant="caption" color="red">
              {errors.email.message as string}
            </Typography>
          )}
        </FormControl>

        <FormControl sx={{ mb: 2 }}>
          <TextField
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            variant="outlined"
            {...register("password")}
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
          Submit
        </Button>
      </form>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="body2">Do not have an account?</Typography>
        <Button
          variant="text"
          sx={{ textTransform: "capitalize" }}
          onClick={switchForm}
        >
          Sign Up
        </Button>
      </Box>
    </Stack>
  );
};

export default SignInForm;
