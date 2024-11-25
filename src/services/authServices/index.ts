import { useSelector } from "react-redux";
import { User } from "../../models/User";
import { RootState } from "../../context";

export const authServices = () => {
  const user: User = useSelector((state: RootState) => state.auth.user);

  return {
    user,
  };
};
