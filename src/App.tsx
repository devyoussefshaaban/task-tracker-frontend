import { Route, Routes } from "react-router-dom";
import { AppDispatch, RootState } from "./context";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./context/actions/authActions";
import { User } from "./models/User";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./utils/ProtectedRoute";
import UsersPage from "./pages/UsersPage";
import ProfilePage from "./pages/ProfilePage";
import { ACCESS_TOKEN } from "./utils/constants";
import Cookies from "js-cookie";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import GeneralSettingsPage from "./pages/GeneralSettingsPage";
import GroupsPage from "./pages/GroupsPage";
import GroupInfoPage from "./pages/GroupInfoPage";
import InvitationsPage from "./pages/InvitationsPage";
import ProjectInfoPage from "./pages/ProjectInfoPage";
import MemberInfoPage from "./pages/MemberInfoPage";
import TasksPage from "./pages/TasksPage";
import { Typography } from "@mui/material";
import { UpcomingTaskList } from "./components";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  const user: User = useSelector((state: RootState) => state.auth.user);

  const isAccessTokenSet = Cookies.get(ACCESS_TOKEN) ? true : false;

  useEffect(() => {
    if (
      !user &&
      window.location.pathname !== "/" &&
      window.location.pathname !== "/auth/login" &&
      !window.location.pathname.includes("/verify") &&
      isAccessTokenSet
    )
      dispatch(getMe());
  }, []);

  const currentSelectedMainSection: string | null = useSelector(
    (state: RootState) => state.general.selectedMainSection
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<AuthPage />} />
        <Route
          path="/auth/users/:userId/verify/:token"
          element={<EmailVerificationPage />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              {currentSelectedMainSection === "Today" ? (
                <TasksPage />
              ) : currentSelectedMainSection === "Upcoming" ? (
                <UpcomingTaskList />
              ) : (
                <Typography variant="h5">Comming Soon ...</Typography>
              )}
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups"
          element={
            <ProtectedRoute>
              <GroupsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups/:groupId"
          element={
            <ProtectedRoute>
              <GroupInfoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups/:groupId/projects/:projectId"
          element={
            <ProtectedRoute>
              <ProjectInfoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups/:groupId/members/:memberId"
          element={
            <ProtectedRoute>
              <MemberInfoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/invitations"
          element={
            <ProtectedRoute>
              <InvitationsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage/users"
          element={
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage/general"
          element={
            <ProtectedRoute>
              <GeneralSettingsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
