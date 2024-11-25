import { useState } from "react";
import { CREATE_TASK_FORM_TYPE, TASK_PRIORITY } from "../../utils/constants";
import {
  CreateTaskFormResolver,
  CreateTaskFormValues,
} from "../../validations/taskValidation";
import { User } from "../../models/User";
import { useForm } from "react-hook-form";
import { CreateTaskRequestBody } from "../../utils/api";
import { SelectChangeEvent } from "@mui/material";
import {
  createTask,
  getMyTasks,
  updateTask,
} from "../../context/actions/tasksActions";
import { AppDispatch } from "../../context";
import { useDispatch } from "react-redux";
import { authServices } from "../authServices";
import { Project } from "../../models/Project";
import { projectInfoService } from "../projectServices/projectInfoService";
import { Task } from "../../models/Task";

export const createTaskService: any = (
  selectedTask: Task | null,
  formType: string,
  onUpdateTask: () => void,
  onCloseForm: () => void
) => {
  const dispatch: AppDispatch = useDispatch();

  const { user }: { user: User } = authServices();
  const { currentProject }: { currentProject: Project | null } =
    projectInfoService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskFormValues>({ resolver: CreateTaskFormResolver });

  const [priority, setPriority] = useState<any>(selectedTask?.priority);
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

    onCloseForm();
  });

  return {
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
  };
};
