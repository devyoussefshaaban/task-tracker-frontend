import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Task } from "../../models/Task";
import { FC } from "react";
import { Checkbox, Chip } from "@mui/material";
import ConfirmModal from "../shared/ConfirmModal";
import { taskServices } from "../../services/taskServices";
import FlexBetween from "../shared/FlexBetween";
import muiTheme from "../../utils/theme";
import { CheckBox } from "@mui/icons-material";

interface IProps {
  task: Task;
  onOpenForm: () => void;
  onSelect: (task: Task) => void;
}

const TaskCard: FC<IProps> = ({ task, onSelect }) => {
  const { deleteTaskHandler, onCloseConfirmModal, openConfirmModal } =
    taskServices().taskInfoService(task, () => onSelect(task));

  const theme = muiTheme();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box sx={{ minWidth: 275, width: "100%", mb: 2 }}>
      <FlexBetween>
        <Box display="flex" alignItems="center">
          <Checkbox {...label} defaultChecked={task.status === "COMPLETED"} />
          <Typography
            variant="body1"
            className="roboto-bold"
            color={theme.palette.common.black}
          >
            {task.title}
          </Typography>
        </Box>
        <Box>
          <Chip
            label={
              <Typography variant="caption" textTransform="capitalize">
                {task.status.toLocaleLowerCase()}
              </Typography>
            }
            variant="filled"
            sx={{
              background:
                task?.status === "IN_PROGRESS"
                  ? theme.palette.warning.light
                  : task?.status === "COMPLETED"
                  ? theme.palette.success.light
                  : theme.palette.primary.light,
              color: theme.palette.common.white,
            }}
          />
        </Box>
      </FlexBetween>
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
