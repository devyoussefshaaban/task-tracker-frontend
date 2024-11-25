import { Group_Member } from "./Group_Member";
import { Project } from "./Project";

export interface Group {
  _id: string;
  creatorId: string;
  groupName: string;
  description: string;
}

export interface Group_Info {
  group: Group;
  projects: Project[];
  members: Group_Member[];
}
