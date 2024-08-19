import Cookie from "js-cookie";
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import { Task } from "../models/Task";
import { User } from "../models/User";

const baseUrl = "http://localhost:8888/api";
const baseUrlV1 = "http://localhost:8888/api/v1";

export type SignUpRequestBody = {
  username: string | null;
  email: string | null;
  password: string | null;
};

export type UpdateProfileRequestBody = {
  username?: string | null;
  email?: string | null;
  password?: string | null;
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
  message: string;
};

export type DeleteUserResponse = {
  data: {
    success: boolean;
    message: string;
  };
};

export type GetAllUsersResponse = {
  data: {
    success: boolean;
    data: User[];
  };
};

const headers = {
  headers: {
    Authorization: `Bearer ${Cookie.get(ACCESS_TOKEN)}`,
  },
};

export const authApi = {
  signUp: (body: SignUpRequestBody): Promise<SignUpResponse> =>
    axios.post(`${baseUrlV1}/auth/sign-up`, body),
  signIn: (body: SignInRequestBody): Promise<SignInResponse> =>
    axios.post(`${baseUrlV1}/auth/sign-in`, body),
  getMe: (): Promise<SignUpResponse> =>
    axios.get(`${baseUrlV1}/auth/me`, headers),
  updateMyProfile: (body: UpdateProfileRequestBody): Promise<SignUpResponse> =>
    axios.patch(`${baseUrlV1}/auth/me/update-profile`, body, headers),
};

export const tasksApi = {
  getMyTasks: (): Promise<GetMyTasksResponse> =>
    axios.get(`${baseUrlV1}/tasks`, headers),
  createTask: (body: CreateTaskRequestBody): Promise<CreateTaskResponse> =>
    axios.post(`${baseUrlV1}/tasks`, body, headers),
  updateTask: (
    taskId: string,
    body: UpdateTaskRequestBody
  ): Promise<CreateTaskResponse> =>
    axios.patch(`${baseUrlV1}/tasks/${taskId}`, body, headers),
  deleteTask: (taskId: string) =>
    axios.delete(`${baseUrlV1}/tasks/${taskId}`, headers),
};

export const adminApi = {
  deleteUser: (userId: string): Promise<DeleteUserResponse> =>
    axios.delete(`${baseUrlV1}/manage/users/${userId}`, headers),
  getAllUsers: (): Promise<GetAllUsersResponse> =>
    axios.get(`${baseUrlV1}/manage/users`, headers),
};
