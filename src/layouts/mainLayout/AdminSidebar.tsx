import { Box, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import { USER_ROLE } from "../../utils/constants";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../../context/actions/generalActions";

const AdminSidebar = () => {
  const isExtendedSidebar: boolean = useSelector(
    (state: RootState) => state.general.isExtendedSidebar
  );

  const theme = useTheme();

  const SidebarStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    zIndex: 1,
    left: isExtendedSidebar ? 0 : "-100%",
    minWidth: "100px",
    width: "15vw",
    background: theme.palette.primary.main,
    borderRight: `2px solid ${theme.palette.grey}`,
    transition: "all .6s ease",
  };

  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch: AppDispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  const NavItem = ({ name }: { name: string }) => {
    return (
      <Box mb={4}>
        <Typography
          color={theme.palette.common.white}
          sx={{
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {name}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={SidebarStyle}>
      <Box sx={{ padding: "8rem 3rem" }}>
        {user?.role === USER_ROLE.OWNER ? (
          <Link
            to="/manage/general"
            style={{ textDecoration: "none" }}
            onClick={toggleSidebarHandler}
          >
            <NavItem name="General" />
          </Link>
        ) : null}
        <Link
          to="/manage/users"
          style={{ textDecoration: "none" }}
          onClick={toggleSidebarHandler}
        >
          <NavItem name="Users" />
        </Link>
      </Box>
    </Box>
  );
};

export default AdminSidebar;
