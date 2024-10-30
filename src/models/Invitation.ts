export interface Invitation {
  _id: string;
  senderId: string;
  recieverId: string;
  message: string;
  statue: "PENDING" | "ACCEPTED" | "REJECTED";
}
