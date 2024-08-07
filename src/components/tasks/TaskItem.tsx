import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Task } from "../../models/Task";
import { FC, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AppDispatch } from "../../context";
import { useDispatch } from "react-redux";
import { deleteTask, getMyTasks } from "../../context/actions/tasksActions";
import ConfirmModal from "../shared/ConfirmModal";

interface IProps {
  task: Task;
  onOpenForm: () => void;
  onSelect: (task: Task) => void;
}

const TaskItem: FC<IProps> = ({ task, onSelect, onOpenForm }) => {
  const dispatch: AppDispatch = useDispatch();

  const deleteTaskHandler = () => {
    dispatch(deleteTask(task._id));
    setTimeout(() => {
      dispatch(getMyTasks());
    }, 500)
    onCloseConfirmModal();
  };

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false)

  const onClickDeleteIcon = () => setOpenConfirmModal(true)

  const onCloseConfirmModal = () => setOpenConfirmModal(false)
  
  const onClickEditIcon = () => {
    onSelect(task);
    onOpenForm();
  };

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
              {task.name}
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
          <Typography variant="body2">{task.description}</Typography>
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

export default TaskItem;
