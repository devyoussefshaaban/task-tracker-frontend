import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import { useForm } from "react-hook-form";
import {
  CreateTaskFormValues,
  CreateTaskFormResolver,
} from "../../validations/taskValidation";
import { CreateTaskRequestBody } from "../../utils/api";
import { AppDispatch } from "../../context";
import { useDispatch } from "react-redux";
import { createTask, getMyTasks } from "../../context/actions/tasksActions";
import { CREATE_TASK_FORM_TYPE } from "../../utils/constants";
import { Close } from "@mui/icons-material";

interface IProps {
  formType: string;
  onClose: () => void;
}

const CreateTaskForm: FC<IProps> = ({ formType, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskFormValues>({ resolver: CreateTaskFormResolver });

  const dispatch: AppDispatch = useDispatch();

  const submitHandler = handleSubmit((data: CreateTaskRequestBody) => {
    dispatch(createTask(data));
    dispatch(getMyTasks())
    onClose()
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
            {formType}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1, mt: 1 }} />
      </Box>
      <form onSubmit={submitHandler}>
        <FormControl sx={{ mb: 2 }}>
          <TextField
            label="Task name"
            id="name"
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

        <FormControl sx={{ mb: 2 }}>
          <TextField
            label="Description"
            type="description"
            id="description"
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
