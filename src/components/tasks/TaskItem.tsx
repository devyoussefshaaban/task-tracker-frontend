import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Task } from "../../models/Task";
import { FC } from "react";
import { Checkbox, Chip } from "@mui/material";
import FlexBetween from "../shared/FlexBetween";
import muiTheme from "../../utils/theme";
import { TASK_STATUS } from "../../utils/constants";

interface IProps {
  task: Task;
  onOpenForm: () => void;
  onSelect: (task: Task) => void;
}

const TaskItem: FC<IProps> = ({ task, onSelect }) => {
  // const { deleteTaskHandler, onCloseConfirmModal, openConfirmModal } =
  //   taskServices().taskInfoService(task, () => onSelect(task));

  const theme = muiTheme();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box sx={{ minWidth: 275, width: "100%", mb: 1, cursor: "pointer" }}>
      <FlexBetween>
        <Box display="flex" alignItems="center">
          <Checkbox
            {...label}
            sx={{ opacity: 0.8 }}
            defaultChecked={task.status === "COMPLETED"}
          />
          <Typography
            variant="body2"
            fontSize=".75rem"
            fontWeight={600}
            color={theme.palette.common.black}
          >
            {task.title}
          </Typography>
        </Box>
        <Box>
          <Chip
            size="small"
            label={
              <Typography fontSize=".75rem" textTransform="capitalize">
                {task.status.toLocaleLowerCase()}
              </Typography>
            }
            variant="filled"
            sx={{
              opacity: 0.75,
              background:
                task?.status.toLocaleLowerCase() ===
                TASK_STATUS.APPROVED.toLowerCase()
                  ? theme.palette.warning.light
                  : task?.status.toLocaleLowerCase() ===
                    TASK_STATUS.COMPLETED.toLowerCase()
                  ? theme.palette.success.light
                  : task?.status.toLocaleLowerCase() ===
                    TASK_STATUS.WAITING_REVIEW.toLowerCase()
                  ? theme.palette.grey[300]
                  : task?.status.toLocaleLowerCase() ===
                    TASK_STATUS.IN_REVIEW.toLowerCase()
                  ? theme.palette.primary.light
                  : theme.palette.secondary.light,
              color: theme.palette.common.white,
            }}
          />
        </Box>
      </FlexBetween>
      {/* <ConfirmModal
        open={openConfirmModal}
        onClose={onCloseConfirmModal}
        title={"Delete Task Confirmation"}
        message={"Are you sure you want to delete this task permanently ?"}
        onOk={deleteTaskHandler}
        onCancel={onCloseConfirmModal}
      /> */}
    </Box>
  );
};

export default TaskItem;
