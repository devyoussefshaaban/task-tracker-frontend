import { ReactNode } from "react";
import MainHeader from "./mainHeader";
import AdminSidebar from "./AdminSidebar";
import { User } from "../../models/User";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { USER_ROLE } from "../../utils/constants";

const MainLayout = (props: { children: ReactNode }) => {
  const user: User = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      {user?.role === USER_ROLE.ADMIN || user?.role === USER_ROLE.OWNER ? (
        <AdminSidebar />
      ) : null}
      {!window.location.pathname.includes("/verify") ? <MainHeader /> : null}
      <main style={{ marginTop: "4rem" }}>{props.children}</main>
    </>
  );
};

export default MainLayout;
