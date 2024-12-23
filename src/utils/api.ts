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
  data: {
    success: boolean;
    message: string;
    data?: {
      username: string;
      email: string;
      token: string;
    };
  };
};

export type InviteGroupMemberRequestBody = {
  recieverEmail: string;
  title: string;
  message: string;
};

export type GetMyTasksResponse = {
  data: { success: boolean; data: Task[] };
};

export type CreateTaskRequestBody = {
  title: string;
  description: string;
  projectId?: string | null;
  status?: string;
  assignedUserId: string;
  priority: "URGENT" | "NORMAL" | "LOW";
};

export type UpdateTaskRequestBody = {
  title?: string;
  description?: string;
  projectId?: string | null;
  status?: string;
  assignedUserId: string;
  priority: "URGENT" | "NORMAL" | "LOW";
};

export type CreateTaskResponse = {
  data: {
    success: boolean;
    message: string;
    data: Task;
  };
};

export type DeleteTaskResponse = {
  data: { success: boolean; message: string };
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

export type CreateGroupRequestBody = {
  groupName: string;
  description: string;
};

export type CreateGroupResponse = {
  data: {
    success: boolean;
    message: string;
    data?: {
      creatorId: string;
      groupName: string;
      description: string;
    };
  };
};

export type CreateNewProjectRequestBody = {
  projectName: string;
  description: string;
  team?: {
    leaderId?: string;
    members?: [memberId: string];
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

export const groupingApi = {
  createGroup: (body: CreateGroupRequestBody): Promise<CreateGroupResponse> =>
    axios.post(`${baseUrlV1}/groups`, body, headers),
  getMyGroups: () => axios.get(`${baseUrlV1}/groups`, headers),
  getGroupInfo: (groupId: string) =>
    axios.get(`${baseUrlV1}/groups/${groupId}`, headers),
};

export const invitationsApi = {
  getMyInvitations: () => axios.get(`${baseUrlV1}/invitations`, headers),
  getInvitationInfo: (invitationId: string) =>
    axios.get(`${baseUrlV1}/invitations/${invitationId}`, headers),
  sendGroupInvitation: (groupId: string, body: InviteGroupMemberRequestBody) =>
    axios.post(
      `${baseUrlV1}/invitations/groups/${groupId}/invite`,
      body,
      headers
    ),
  acceptInvitation: (groupId: string, invitationId: string) =>
    axios.post(
      `${baseUrlV1}/invitations/groups/${groupId}/invitations/${invitationId}/accept`,
      {},
      headers
    ),
  rejectInvitation: (groupId: string, invitationId: string) =>
    axios.post(
      `${baseUrlV1}/invitations/groups/${groupId}/invitations/${invitationId}/reject`,
      {},
      headers
    ),
};

export const projectsApi = {
  createNewProject: (groupId: string, body: CreateNewProjectRequestBody) =>
    axios.post(`${baseUrlV1}/manage/groups/${groupId}/projects`, body, headers),
  getProjectInfo: (groupId: string, projectId: string) =>
    axios.get(
      `${baseUrlV1}/manage/groups/${groupId}/projects/${projectId}`,
      headers
    ),
};

export const adminApi = {
  deleteUser: (userId: string): Promise<DeleteUserResponse> =>
    axios.delete(`${baseUrlV1}/manage/users/${userId}`, headers),
  getAllUsers: (): Promise<GetAllUsersResponse> =>
    axios.get(`${baseUrlV1}/manage/users`, headers),
};

export const ownerApi = {
  clearDB: () => axios.delete(`${baseUrlV1}/manage/general/clear-db`, headers),
};
