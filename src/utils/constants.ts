import { ITask } from "../models/Task";

export const ACCESS_TOKEN = "accessToken";

export const CREATE_TASK_FORM_TYPE = {
  CREATE_TASK: "CREATE TASK",
  UPDATE_TASK: "UPDATE TASK",
};

export const USER_ROLE = {
  USER: "USER",
  ADMIN: "ADMIN",
  OWNER: "OWNER",
};

export const TASK_STATUS = {
  UPCOMMING: "Upcomming",
  WAITING: "Waiting",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
  IN_REVIEW: "In Review",
  APPROVED: "Approved",
};

export const TASK_PRIORITY = {
  URGENT: "URGENT",
  NORMAL: "NORMAL",
  LOW: "LOW",
};

export const TASK_LIST_FILTER = {
  ALL: "ALL",
  UPCOMMING: "UPCOMMING",
  NOTES: "NOTES",
  LINKS: "LINKS ",
};

export const taskList: { currentTasks: ITask[]; upcommingTasks: ITask[] } = {
  currentTasks: [
    {
      _id: "1",
      title: "Take the breakfast.",
      description: "Some task description....",
      status: TASK_STATUS.APPROVED,
    },
    {
      _id: "2",
      title: "Go to the GYM.",
      description: "Some task description....",
      status: TASK_STATUS.IN_PROGRESS,
    },
    {
      _id: "3",
      title: "Meet your friends.",
      description: "Some task description....",
      status: TASK_STATUS.IN_PROGRESS,
    },
    {
      _id: "4",
      title: "Go to the Work.",
      description: "Some task description....",
      status: TASK_STATUS.IN_REVIEW,
    },
    {
      _id: "5",
      title: "Building your side project.",
      description: "Some task description....",
      status: TASK_STATUS.WAITING,
    },
  ],
  upcommingTasks: [
    {
      _id: "6",
      title: "Meet your friends.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMMING,
    },
    {
      _id: "7",
      title: "Go to the Work.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMMING,
    },
    {
      _id: "8",
      title: "Building your side project.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMMING,
    },
    {
      _id: "9",
      title: "Go to the Work.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMMING,
    },
    {
      _id: "10",
      title: "Building your side project.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMMING,
    },
  ],
};
