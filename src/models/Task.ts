export interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  startDateTime: Date;
  endDateTime: Date;
  project: {
    _id: string;
    projectName: string;
    description: string;
  };
  category: {
    _id: string;
    categoryName: string;
    description: string;
  };
  creator: {
    _id: string;
    username: string;
    email: string;
  };
  assignee: {
    _id: string;
    username: string;
    email: string;
  };
}
