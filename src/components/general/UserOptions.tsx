import { ExitToApp, Settings } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import ConfirmModal from "../shared/ConfirmModal";
import { logout } from "../../context/actions/authActions";
import { AppDispatch, RootState } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN } from "../../utils/constants";
import { MouseEvent, useState } from "react";

const UserOptions = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch: AppDispatch = useDispatch();

  const isAuth = Cookies.get(ACCESS_TOKEN) ? true : false;

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
    onCloseConfirmModal();
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
    <Box>
      {isAuth && user ? (
        <IconButton onClick={handleClick}>
          <Avatar
            sx={{ width: 40, height: 40 }}
            src={`https://avatar.iran.liara.run/public/${Math.floor(
              Math.random() * 100
            )}`}
          />
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
            <Typography>{user?.username}</Typography>
            <Typography variant="caption">{user?.email}</Typography>
          </Box>
          <Divider sx={{ mt: 1, mb: 3 }} />
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            pl={1}
            mb={3}
            sx={{ cursor: "pointer" }}
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
          <Link
            to="/profile"
            onClick={handleClose}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              pl={1}
              mb={3}
              sx={{ cursor: "pointer" }}
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
          </Link>
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
  );
};

export default UserOptions;
