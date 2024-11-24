import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Typography,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CreateTaskFormValues,
  CreateTaskFormResolver,
} from "../../validations/taskValidation";
import { CreateTaskRequestBody } from "../../utils/api";
import { AppDispatch, RootState } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import {
  createTask,
  getMyTasks,
  updateTask,
} from "../../context/actions/tasksActions";
import {
  CREATE_TASK_FORM_TYPE,
  TASK_PRIORITY,
  TASK_STATUS,
} from "../../utils/constants";
import { Close } from "@mui/icons-material";
import { Task } from "../../models/Task";
import { User } from "../../models/User";
import { Project } from "../../models/Project";

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
  const user: User = useSelector((state: RootState) => state.auth.user);
  const currentProject: Project | null = useSelector(
    (state: RootState) => state.projects.currentProject
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskFormValues>({ resolver: CreateTaskFormResolver });

  const [priority, setPriority] = useState<any>(TASK_PRIORITY.NORMAL);
  const [status, setStatus] = useState<any>(selectedTask?.status);
  const [assignedUser, setAssignedUser] = useState<User>(user);

  const handleChangePriority = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleChangeAssignedUser = (event: any) => {
    setAssignedUser(event.target.value);
  };

  const dispatch: AppDispatch = useDispatch();

  const isCreateFormType = formType === CREATE_TASK_FORM_TYPE.CREATE_TASK;

  const submitHandler = handleSubmit((data: CreateTaskRequestBody) => {
    isCreateFormType
      ? dispatch(
          createTask({
            ...data,
            priority,
            status,
            assignedUserId: assignedUser._id,
            projectId: currentProject ? currentProject._id : null,
          })
        )
      : selectedTask &&
        dispatch(
          updateTask(selectedTask._id, {
            ...data,
            priority,
            status,
            assignedUserId: assignedUser._id,
            projectId: currentProject ? currentProject._id : null,
          })
        );

    onUpdateTask();

    setTimeout(() => {
      dispatch(getMyTasks());
    }, 500);

    onClose();
  });

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
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
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
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
