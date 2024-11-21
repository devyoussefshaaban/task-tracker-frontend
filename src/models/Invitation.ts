export interface Invitation {
  _id: string;
  sender: {
    name: string;
    email: string;
  };
  reciever: {
    name: string;
    email: string;
  };
  groupId: string;
  title: string;
  message: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
}
