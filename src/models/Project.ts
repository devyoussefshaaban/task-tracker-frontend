export interface Project {
  _id: string;
  projectName: string;
  description: string;
  team: {
    leaderId: string;
    members: [memberId: string];
  };
}
