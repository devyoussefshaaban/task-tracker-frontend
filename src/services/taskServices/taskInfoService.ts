import { useDispatch } from "react-redux";
import { AppDispatch } from "../../context";
import { useState } from "react";
import { deleteTask, getMyTasks } from "../../context/actions/tasksActions";
import { Task } from "../../models/Task";

export const taskInfoService = (
  task: Task,
  onSelect: (task: Task) => void,
  onOpenForm: () => void
) => {
  const dispatch: AppDispatch = useDispatch();

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
    deleteTaskHandler,
    onClickDeleteIcon,
    onCloseConfirmModal,
    onClickEditIcon,
    openConfirmModal,
  };
};
