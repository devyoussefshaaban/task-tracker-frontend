export interface ITask {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dateTime: string;
  assignee: {
    _id: string;
    username: string;
    email: string;
  };
  category: {
    _id: string;
    categoryName: string;
    categoryDescription: string;
  };
}

export interface Task {
  _id: string;
  creator: {
    userId: string;
    username: string;
    email: string;
  };
  title: string;
  description: string;
  priority: string;
  status: string;
  userId: string;
  assignee: {
    userId: string;
    username: string;
    email: string;
  };
}
