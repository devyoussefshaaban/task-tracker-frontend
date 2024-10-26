export interface Group {
  _id: string;
  groupData: {
    groupName: string;
    description: string;
  };
  userData: {
    creatorId: string;
    username: string;
    email: string;
  };
  description: string;
}
