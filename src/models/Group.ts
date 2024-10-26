export interface Group {
  _id: string;
  groupData: {
    groupId: string;
    groupName: string;
    description: string;
  };
  userData: {
    userId: string;
    creatorId: string;
    username: string;
    email: string;
  };
  description: string;
}
