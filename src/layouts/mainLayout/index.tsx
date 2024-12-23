import { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import { User } from "../../models/User";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { ACCESS_TOKEN, USER_ROLE } from "../../utils/constants";
import MainSidebar from "./MainSidebar";
import Cookies from "js-cookie";

const MainLayout = (props: { children: ReactNode }) => {
  const user: User = useSelector((state: RootState) => state.auth.user);

  const isAdminUser =
    user?.role === USER_ROLE.ADMIN || user?.role === USER_ROLE.OWNER;

  return (
    <>
      {isAdminUser ? <AdminSidebar /> : null}
      <main style={{ display: "flex" }}>
        {!Cookies.get(ACCESS_TOKEN) ||
        window.location.pathname.includes("auth") ? null : (
          <MainSidebar />
        )}
        <div style={{ flex: 1 }}>{props.children}</div>
      </main>
    </>
  );
};

export default MainLayout;
