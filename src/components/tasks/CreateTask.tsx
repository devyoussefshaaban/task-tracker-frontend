import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Typography,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import { TASK_PRIORITY, TASK_STATUS } from "../../utils/constants";
import { Close } from "@mui/icons-material";
import { Task } from "../../models/Task";
import { createTaskService } from "../../services/taskServices/createTaskService";

interface IProps {
  formType: string;
  selectedTask: Task | null;
  onUpdateTask: () => void;
  onClose: () => void;
}

const CreateTaskForm: FC<IProps> = ({
  formType,
  selectedTask,
  onUpdateTask,
  onClose,
}) => {
  const {
    submitHandler,
    register,
    errors,
    isCreateFormType,
    currentProject,
    assignedUser,
    handleChangeAssignedUser,
    user,
    priority,
    handleChangePriority,
    status,
    handleChangeStatus,
  } = createTaskService(selectedTask, formType, onUpdateTask, onClose);

  return (
    <Stack spacing={2} width="30ch" margin="2rem 1rem 2rem">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            textAlign="center"
            textTransform="capitalize"
          >
            {formType.toLocaleLowerCase()}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1, mt: 1 }} />
      </Box>
      <form onSubmit={submitHandler}>
        <FormControl sx={{ mb: 2 }} fullWidth>
          <TextField
            label="Task Title"
            id="title"
            defaultValue={selectedTask ? selectedTask.title : ""}
            placeholder="Enter the task title"
            variant="outlined"
            {...register("title")}
          />
          {errors?.title && (
            <Typography variant="caption" color="red">
              {errors.title.message as string}
            </Typography>
          )}
        </FormControl>

        <FormControl sx={{ mb: 2 }} fullWidth>
          <TextField
            label="Description"
            type="description"
            id="description"
            defaultValue={selectedTask ? selectedTask.description : ""}
            placeholder="Enter the task description"
            variant="outlined"
            {...register("description")}
          />
          {errors?.description && (
            <Typography variant="caption" color="red">
              {errors.description.message as string}
            </Typography>
          )}
        </FormControl>

        {!isCreateFormType ? (
          <FormControl sx={{ mb: 2 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              defaultValue={TASK_STATUS.NOT_STARTED}
              onChange={handleChangeStatus}
            >
              <MenuItem value={TASK_STATUS.NOT_STARTED}>
                {TASK_STATUS.NOT_STARTED}
              </MenuItem>
              <MenuItem value={TASK_STATUS.IN_PROGRESS}>
                {TASK_STATUS.IN_PROGRESS}
              </MenuItem>
              <MenuItem value={TASK_STATUS.COMPLETED}>
                {TASK_STATUS.COMPLETED}
              </MenuItem>
            </Select>
          </FormControl>
        ) : null}

        {currentProject ? (
          <FormControl sx={{ mb: 2 }} fullWidth>
            <InputLabel id="assignee-select-label">Assignee</InputLabel>
            <Select
              labelId="assignee-select-label"
              id="assignee-select"
              value={assignedUser?.username}
              label="Assignee"
              defaultValue={user?.username}
              onChange={handleChangeAssignedUser}
            >
              <MenuItem value={user?.username}>{user?.username}</MenuItem>
            </Select>
          </FormControl>
        ) : null}

        <FormControl sx={{ mb: 2 }} fullWidth>
          <InputLabel id="task-priority-select-label">Priority</InputLabel>
          <Select
            labelId="task-priority-select-label"
            id="task-priority-select"
            value={priority}
            label="Priority"
            defaultValue={TASK_PRIORITY.NORMAL}
            onChange={handleChangePriority}
          >
            <MenuItem value={TASK_PRIORITY.URGENT}>
              {TASK_PRIORITY.URGENT}
            </MenuItem>
            <MenuItem value={TASK_PRIORITY.NORMAL}>
              {TASK_PRIORITY.NORMAL}
            </MenuItem>
            <MenuItem value={TASK_PRIORITY.LOW}>{TASK_PRIORITY.LOW}</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{
            textTransform: "capitalize",
            display: "block",
            width: "fit-content",
            margin: "auto",
          }}
        >
          {isCreateFormType ? "Create" : "Save"}
        </Button>
      </form>
    </Stack>
  );
};

export default CreateTaskForm;
