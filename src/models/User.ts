
export interface User{
    _id: string;
    username: string,
    email: string,
    password: string,
    role: "USER" | "ADMIN";
    token: string
}