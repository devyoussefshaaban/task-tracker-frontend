export interface Task {
  _id: string;
  creator: {
    userId: string;
    username: string;
    email: string;
  };
  title: string;
  description: string;
  status: string;
  userId: string;
  assignee: {
    userId: string;
    username: string;
    email: string;
  };
}
