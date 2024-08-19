import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ConfirmModal from "../shared/ConfirmModal";
import { useState } from "react";

export default function MediaCard() {
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

  const onCloseConfirmModal = () => setOpenConfirmModal(false);
  const onOpenConfirmModal = () => setOpenConfirmModal(true);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Contact</Button>
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
        onOk={onCloseConfirmModal}
        onCancel={onCloseConfirmModal}
      />
    </>
  );
}
