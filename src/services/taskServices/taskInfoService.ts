import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import { useState } from "react";
import { deleteTask, getMyTasks } from "../../context/actions/tasksActions";
import { Task } from "../../models/Task";

export const taskInfoService = (
  task: Task,
  onSelect: (task: Task) => void
  // onOpenForm: () => void
) => {
  const dispatch: AppDispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.tasks?.tasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const onSelectTask = (task: Task) => setSelectedTask(task);
  const onUpdateTask = () => setSelectedTask(null);

  const [openForm, setOpenForm] = useState<boolean>(false);

  const onOpenForm = () => setOpenForm(true);
  const onCloseForm = () => setOpenForm(false);

  const deleteTaskHandler = () => {
    dispatch(deleteTask(task._id));
    setTimeout(() => {
      dispatch(getMyTasks());
    }, 500);
    onCloseConfirmModal();
  };

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

  const onClickDeleteIcon = () => setOpenConfirmModal(true);

  const onCloseConfirmModal = () => setOpenConfirmModal(false);

  const onClickEditIcon = () => {
    onSelect(task);
    onOpenForm();
  };

  return {
    tasks,
    selectedTask,
    onSelectTask,
    onUpdateTask,
    openForm,
    onCloseForm,
    deleteTaskHandler,
    onClickDeleteIcon,
    onCloseConfirmModal,
    onClickEditIcon,
    openConfirmModal,
  };
};
