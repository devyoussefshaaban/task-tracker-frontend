import { Task } from "../models/Task";

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
  NOT_STARTED: "Not Started",
  UPCOMING: "Upcoming",
  WAITING_REVIEW: "Waiting Review",
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
  UPCOMING: "UPCOMING",
  NOTES: "NOTES",
  LINKS: "LINKS ",
};

export const taskList: { currentTasks: Task[]; upcommingTasks: Task[] } = {
  currentTasks: [
    {
      _id: "1",
      title: "Take the breakfast.",
      description: "Some task description....",
      status: TASK_STATUS.APPROVED,
      priority: TASK_PRIORITY.URGENT,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
    {
      _id: "2",
      title: "Go to the GYM.",
      description: "Some task description....",
      status: TASK_STATUS.IN_PROGRESS,
      priority: TASK_PRIORITY.URGENT,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
    {
      _id: "3",
      title: "Meet your friends.",
      description: "Some task description....",
      status: TASK_STATUS.IN_PROGRESS,
      priority: TASK_PRIORITY.URGENT,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
    {
      _id: "4",
      title: "Go to the Work.",
      description: "Some task description....",
      status: TASK_STATUS.IN_REVIEW,
      priority: TASK_PRIORITY.LOW,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
    {
      _id: "5",
      title: "Building your side project.",
      description: "Some task description....",
      status: TASK_STATUS.WAITING_REVIEW,
      priority: TASK_PRIORITY.NORMAL,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
  ],
  upcommingTasks: [
    {
      _id: "6",
      title: "Meet your friends.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMING,
      priority: TASK_PRIORITY.URGENT,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
    {
      _id: "7",
      title: "Go to the Work.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMING,
      priority: TASK_PRIORITY.LOW,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
    {
      _id: "8",
      title: "Building your side project.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMING,
      priority: TASK_PRIORITY.URGENT,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
    {
      _id: "9",
      title: "Go to the Work.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMING,
      priority: TASK_PRIORITY.NORMAL,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
    {
      _id: "10",
      title: "Building your side project.",
      description: "Some task description....",
      status: TASK_STATUS.UPCOMING,
      priority: TASK_PRIORITY.NORMAL,
      startDateTime: new Date(),
      assignee: {
        _id: "1",
        username: "Nabil",
        email: "belly@mail.com",
      },
      category: {
        _id: "1",
        categoryName: "Work",
        description: "Some category work description...",
      },
      endDateTime: new Date(),
      project: {
        _id: "",
        projectName: "",
        description: "",
      },
      creator: {
        _id: "",
        username: "",
        email: "",
      },
    },
  ],
};
