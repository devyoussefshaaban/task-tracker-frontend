import { Group_Member } from "./Group_Member";
import { Task } from "./Task";

export interface Project {
  _id: string;
  projectName: string;
  description: string;
  team: {
    leaderId: string;
    members: [memberId: string];
  };
}

export interface Project_Info {
  project: Project;
  members: Group_Member[];
  tasks: Task[];
}
