import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Task } from "../../models/Task";
import { FC } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ConfirmModal from "../shared/ConfirmModal";
import { taskServices } from "../../services/taskServices";

interface IProps {
  task: Task;
  onOpenForm: () => void;
  onSelect: (task: Task) => void;
}

const TaskCard: FC<IProps> = ({ task, onSelect }) => {
  const {
    deleteTaskHandler,
    onClickDeleteIcon,
    onCloseConfirmModal,
    onClickEditIcon,
    openConfirmModal,
  } = taskServices().taskInfoService(task, () => onSelect(task));

  return (
    <Box sx={{ minWidth: 275, width: "100%", mb: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" component="div">
              {task.title}
            </Typography>
            <Box>
              <IconButton onClick={onClickDeleteIcon}>
                <Delete />
              </IconButton>
              <IconButton onClick={onClickEditIcon}>
                <Edit />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="body2">
            {task.description.substring(0, 30)}...
          </Typography>
        </CardContent>
      </Card>
      <ConfirmModal
        open={openConfirmModal}
        onClose={onCloseConfirmModal}
        title={"Delete Task Confirmation"}
        message={"Are you sure you want to delete this task permanently ?"}
        onOk={deleteTaskHandler}
        onCancel={onCloseConfirmModal}
      />
    </Box>
  );
};

export default TaskCard;
