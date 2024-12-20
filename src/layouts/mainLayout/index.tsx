import { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import { User } from "../../models/User";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { USER_ROLE } from "../../utils/constants";
import MainSidebar from "./MainSidebar";

const MainLayout = (props: { children: ReactNode }) => {
  const user: User = useSelector((state: RootState) => state.auth.user);

  const isAdminUser =
    user?.role === USER_ROLE.ADMIN || user?.role === USER_ROLE.OWNER;

  return (
    <>
      {isAdminUser ? <AdminSidebar /> : null}
      <main style={{ display: "flex" }}>
        {window.location.pathname.includes("auth") ? null : <MainSidebar />}
        <div style={{ flex: 1 }}>{props.children}</div>
      </main>
    </>
  );
};

export default MainLayout;
