import { Box, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../context";

const AdminSidebar = () => {
  const isExtendedSidebar: boolean = useSelector(
    (state: RootState) => state.general.isExtendedSidebar
  );

  const theme = useTheme();

  const SidebarStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: isExtendedSidebar ? 0 : "-100%",
    minWidth: "100px",
    width: "15vw",
    background: theme.palette.primary.main,
    borderRight: `2px solid ${theme.palette.grey}`,
    transition: "all .6s ease",
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
        <NavItem name="Users" />
        <NavItem name="Tasks" />
      </Box>
    </Box>
  );
};

export default AdminSidebar;
