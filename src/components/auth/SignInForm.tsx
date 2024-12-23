import { Box, Button, Divider, FormControl, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import { authServices } from "../../services/authServices";

interface IProps {
  switchForm: () => void;
}

const SignInForm: FC<IProps> = ({ switchForm }) => {
  const { register, errors, submitHandler } = authServices().signInService();

  return (
    <Stack
      spacing={2}
      width="30ch"
      padding="1rem 2rem"
      borderRadius="10px"
      boxShadow={"0 2px 10px rgba(0,0,0,.5)"}
    >
      <Box mb={2}>
        <Typography variant="h6" textAlign="center">
          Sign In
        </Typography>
        <Divider sx={{ mb: 2, mt: 2 }} />
      </Box>
      <form onSubmit={submitHandler}>
        <FormControl sx={{ mb: 2 }} fullWidth>
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

        <FormControl sx={{ mb: 2 }} fullWidth>
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
