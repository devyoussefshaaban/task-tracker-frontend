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
import { AppDispatch } from "../../context";
import { useDispatch } from "react-redux";
import {
  createTask,
  getMyTasks,
  updateTask,
} from "../../context/actions/tasksActions";
import { CREATE_TASK_FORM_TYPE, TASK_PRIORITY } from "../../utils/constants";
import { Close } from "@mui/icons-material";
import { Task } from "../../models/Task";

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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskFormValues>({ resolver: CreateTaskFormResolver });

  const [priority, setPriority] = useState<any>(TASK_PRIORITY.NORMAL);

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  const dispatch: AppDispatch = useDispatch();

  const submitHandler = handleSubmit((data: CreateTaskRequestBody) => {
    formType === CREATE_TASK_FORM_TYPE.CREATE_TASK
      ? dispatch(createTask({ ...data, priority }))
      : selectedTask && dispatch(updateTask(selectedTask._id, data));

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
            label="Task name"
            id="name"
            defaultValue={selectedTask ? selectedTask.name : ""}
            placeholder="Enter the task name"
            variant="outlined"
            {...register("name")}
          />
          {errors?.name && (
            <Typography variant="caption" color="red">
              {errors.name.message as string}
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

        <FormControl sx={{ mb: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={priority}
            label="Priority"
            defaultValue={TASK_PRIORITY.NORMAL}
            onChange={handleChange}
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
          {formType === CREATE_TASK_FORM_TYPE.CREATE_TASK ? "Create" : "Save"}
        </Button>
      </form>
    </Stack>
  );
};

export default CreateTaskForm;
