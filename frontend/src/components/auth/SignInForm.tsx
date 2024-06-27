import { Box, Button, Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC } from "react";

interface IProps {
  switchForm: () => void;
}

const SignInForm: FC<IProps> = ({ switchForm }) => {
  return (
    <Stack
      component="form"
      sx={{
        width: "30ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      margin="2rem auto 2rem"
    >
      <Box>
        <Typography variant="h6" textAlign="center">
          Sign In
        </Typography>
        <Divider sx={{ mb: 1, mt: 1 }} />
      </Box>
      <TextField
        label="Email"
        id="email"
        placeholder="Enter your email"
        variant="outlined"
      />
      <TextField
        label="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
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
