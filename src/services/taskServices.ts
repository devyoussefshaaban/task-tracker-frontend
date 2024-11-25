import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useState } from "react";
import { deleteTask, getMyTasks } from "../context/actions/tasksActions";
import { Task } from "../models/Task";

import { CREATE_TASK_FORM_TYPE } from "../utils/constants";
import {
  CreateTaskFormResolver,
  CreateTaskFormValues,
} from "../validations/taskValidation";
import { User } from "../models/User";
import { useForm } from "react-hook-form";
import { CreateTaskRequestBody } from "../utils/api";
import { SelectChangeEvent } from "@mui/material";
import { createTask, updateTask } from "../context/actions/tasksActions";
import { authServices } from "./authServices";
import { projectServices } from "./projectServices";
import { Project_Info } from "../models/Project";

export const taskServices = () => {
  const taskInfoService = (task?: Task, onSelect?: (task: Task) => void) => {
    const dispatch: AppDispatch = useDispatch();

    const tasks = useSelector((state: RootState) => state.tasks?.tasks);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const onSelectTask = (task: Task) => setSelectedTask(task);
    const onUpdateTask = () => setSelectedTask(null);

    const [openForm, setOpenForm] = useState<boolean>(false);

    const onOpenForm = () => setOpenForm(true);
    const onCloseForm = () => setOpenForm(false);

    const deleteTaskHandler = () => {
      task && dispatch(deleteTask(task._id));
      setTimeout(() => {
        dispatch(getMyTasks());
      }, 500);
      onCloseConfirmModal();
    };

    const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

    const onClickDeleteIcon = () => setOpenConfirmModal(true);

    const onCloseConfirmModal = () => setOpenConfirmModal(false);

    const onClickEditIcon = () => {
      onSelect && task && onSelect(task);
      onOpenForm();
    };

    return {
      tasks,
      selectedTask,
      onSelectTask,
      onUpdateTask,
      openForm,
      onOpenForm,
      onCloseForm,
      onCloseConfirmModal,
      deleteTaskHandler,
      openConfirmModal,
      onClickDeleteIcon,
      onClickEditIcon,
    };
  };

  const createTaskService = (formType?: string) => {
    const tasks = useSelector((state: RootState) => state.tasks?.tasks);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const onSelectTask = (task: Task) => setSelectedTask(task);
    const onUpdateTask = () => setSelectedTask(null);

    const [openForm, setOpenForm] = useState<boolean>(false);

    const onOpenForm = () => setOpenForm(true);
    const onCloseForm = () => setOpenForm(false);

    const dispatch: AppDispatch = useDispatch();

    const { user }: { user: User } = authServices();
    const { currentProjectInfo }: { currentProjectInfo: Project_Info | null } =
      projectServices().projectInfoService();

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
              projectId: currentProjectInfo
                ? currentProjectInfo.project._id
                : null,
            })
          )
        : selectedTask &&
          dispatch(
            updateTask(selectedTask._id, {
              ...data,
              priority,
              status,
              assignedUserId: assignedUser._id,
              projectId: currentProjectInfo
                ? currentProjectInfo.project._id
                : null,
            })
          );

      onUpdateTask();

      setTimeout(() => {
        dispatch(getMyTasks());
      }, 500);

      onCloseForm();
    });

    return {
      selectedTask,
      onUpdateTask,
      tasks,
      onSelectTask,
      openForm,
      onOpenForm,
      onCloseForm,
      submitHandler,
      register,
      errors,
      isCreateFormType,
      currentProjectInfo,
      assignedUser,
      handleChangeAssignedUser,
      user,
      priority,
      handleChangePriority,
      status,
      handleChangeStatus,
    };
  };

  return {
    taskInfoService,
    createTaskService,
  };
};
