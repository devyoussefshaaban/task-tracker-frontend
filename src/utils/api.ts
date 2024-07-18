import Cookie from "js-cookie";
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import { Task } from "../models/Task";

const baseUrl = "http://localhost:8888/api";

export type SignUpRequestBody = {
  username: string | null;
  email: string | null;
  password: string | null;
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
  email: string | null;
  password: string | null;
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

export type GetMyTasksResponse = {
  success: boolean;
  data: Task[];
};

export type CreateTaskRequestBody = {
  name: string;
  description: string;
  status?: string;
};

export type UpdateTaskRequestBody = {
  name?: string;
  description?: string;
  status?: string;
};

export type CreateTaskResponse = {
  success: boolean;
  message: string;
  data: Task;
};

export type DeleteTaskResponse = {
  success: boolean;
  message: string
}

const headers = {
  headers: {
    Authorization: `Bearer ${Cookie.get(ACCESS_TOKEN)}`,
  },
};

export const authApi = {
  signUp: (body: SignUpRequestBody): Promise<SignUpResponse> =>
    axios.post(`${baseUrl}/auth/sign-up`, body),
  signIn: (body: SignInRequestBody): Promise<SignInResponse> =>
    axios.post(`${baseUrl}/auth/sign-in`, body),
  getMe: (): Promise<SignUpResponse> =>
    axios.get(`${baseUrl}/auth/me`, headers),
};

export const tasksApi = {
  getMyTasks: (): Promise<GetMyTasksResponse> =>
    axios.get(`${baseUrl}/tasks`, headers),
  createTask: (body: CreateTaskRequestBody): Promise<CreateTaskResponse> =>
    axios.post(`${baseUrl}/tasks`, body, headers),
  updateTask: (taskId: string, body: UpdateTaskRequestBody): Promise<CreateTaskResponse> =>
    axios.patch(`${baseUrl}/tasks/${taskId}`, body, headers),
  deleteTask: (taskId: string) => axios.delete(`${baseUrl}/tasks/${taskId}`, headers),
};
