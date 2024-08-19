import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ConfirmModal from "../shared/ConfirmModal";
import { FC, useState } from "react";
import { User } from "../../models/User";
import { AppDispatch } from "../../context";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../context/actions/adminActions";

interface IProps {
  user: User;
}

const UserCard: FC<IProps> = ({ user }) => {
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

  const onCloseConfirmModal = () => setOpenConfirmModal(false);
  const onOpenConfirmModal = () => setOpenConfirmModal(true);

  const dispatch: AppDispatch = useDispatch();

  const deleteUserHandler = () => {
    dispatch(deleteUser(user._id));
    onCloseConfirmModal();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user?.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" disabled>
            Contact
          </Button>
          <Button size="small" onClick={onOpenConfirmModal}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <ConfirmModal
        title="Delete User"
        message="Are you sure you want to delete this user?"
        open={openConfirmModal}
        onClose={onCloseConfirmModal}
        onOk={deleteUserHandler}
        onCancel={onCloseConfirmModal}
      />
    </>
  );
};

export default UserCard;
