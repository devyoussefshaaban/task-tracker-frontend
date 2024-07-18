import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import { logout } from "../../context/actions/authActions";
import { Avatar, Button, Divider, Popover } from "@mui/material";
import { MouseEvent, useState } from "react";
import { ExitToApp, Settings } from "@mui/icons-material";
import { ConfirmModal } from "../../components";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "../../utils/constants";

const MainHeader = () => {
  const user = useSelector((state: RootState) => state.auth.user)

  const dispatch: AppDispatch = useDispatch();

  const isAuth = Cookies.get(ACCESS_TOKEN) ? true : false;

  const logoutHandler = () => {
    dispatch(logout());
    window.location.pathname = "/";
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

  const onOpenConfirmModal = () => {
    handleClose();
    setOpenConfirmModal(true);
  };
  const onCloseConfirmModal = () => setOpenConfirmModal(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Tracker
          </Typography>
          <Box>
            {isAuth ? (
              <IconButton onClick={handleClick}>
                <Avatar />
              </IconButton>
            ) : null}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box display="flex" flexDirection="column">
                <Box py={1} px={2}>
                  <Typography>{user.username}</Typography>
                  <Typography variant="caption">{user.email}</Typography>
                </Box>
                <Divider sx={{mt: 1, mb: 3}} />
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                pl={1}
                mb={3}
                sx={{cursor: "pointer"}}
                onClick={onOpenConfirmModal}
              >
                <ExitToApp fontSize="small" />
                <Typography
                  variant="body1"
                  sx={{
                    ml: 1,
                    textTransform: "capitalize",
                  }}
                >
                  Logout
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                pl={1}
                mb={3}
                sx={{cursor: "pointer"}}
              >
                <Settings fontSize="small" />
                <Typography
                  variant="body1"
                  sx={{
                    ml: 1,
                    textTransform: "capitalize",
                  }}
                >
                  Profile
                </Typography>
              </Box>
              </Box>
            </Popover>
            <ConfirmModal
              open={openConfirmModal}
              title="Logout"
              message="Are you sure you want to logout ?"
              onOk={logoutHandler}
              onCancel={onCloseConfirmModal}
              onClose={onCloseConfirmModal}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainHeader;
