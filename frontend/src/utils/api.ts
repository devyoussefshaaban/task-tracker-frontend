import axios from "axios";

const baseUrl = "http://localhost:8888/api";

export type SignUpRequestBody = {
  username: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  success: boolean;
  message: string;
  data?: {
    username: string;
    email: string;
  };
};

export type SignInRequestBody = {
  email: string;
  password: string;
};

export type SignInResponse = {
  success: boolean;
  message: string;
  data?: {
    username: string;
    email: string;
    token: string;
  };
};

export const authApi = {
  signUp: (body: SignUpRequestBody): Promise<SignUpResponse> =>
    axios.post(`${baseUrl}/auth/sign-up`, body),
  signIn: (body: SignInRequestBody): Promise<SignInResponse> =>
    axios.post(`${baseUrl}/auth/sign-in`, body),
};
