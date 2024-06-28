import { Resolver } from "react-hook-form";

export type SignUpFormValues = {
  username: string;
  email: string;
  password: string;
};

export const signUpFormResolver: Resolver<SignUpFormValues> = async (
  values
) => {
  const { username, email, password } = values;

  return {
    values:
      username &&
      username.length >= 3 &&
      username.length <= 30 &&
      email &&
      email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) &&
      password &&
      password.length >= 6
        ? values
        : {},
    errors: !username
      ? {
          username: {
            type: "required",
            message: "Username is required",
          },
        }
      : username.length < 3 || username.length > 30
      ? {
          username: {
            type: "validate",
            message: "Username must be in range from 3 to 30 letters.",
          },
        }
      : !email || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
      ? {
          email: {
            type: "required",
            message: "Email is required and must be valid.",
          },
        }
      : !password
      ? {
          password: {
            type: "required",
            message: "Password is required.",
          },
        }
      : password.length < 6 || password.length > 30
      ? {
          password: {
            type: "validate",
            message: "Password must be in range from 6 to 30 characters.",
          },
        }
      : {},
  };
};

export type SignInFormValues = {
  email: string;
  password: string;
};

export const signInFormResolver: Resolver<SignInFormValues> = async (
  values
) => {
  const { email, password } = values;

  return {
    values:
      email &&
      email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) &&
      password &&
      password.length >= 6
        ? values
        : {},
    errors:
      !email || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        ? {
            email: {
              type: "required",
              message: "Email is required and must be valid.",
            },
          }
        : !password
        ? {
            password: {
              type: "required",
              message: "Password is required.",
            },
          }
        : password.length < 6 || password.length > 30
        ? {
            password: {
              type: "validate",
              message: "Password must be in range from 6 to 30 characters.",
            },
          }
        : {},
  };
};
