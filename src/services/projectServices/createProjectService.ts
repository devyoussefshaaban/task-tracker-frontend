import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import {
  createProjectFormResolver,
  CreateProjectFormValues,
} from "../../validations/createProjectValidation";
import { Group } from "../../models/Group";
import { Project } from "../../models/Project";
import { CreateNewProjectRequestBody } from "../../utils/api";
import { createNewProject } from "../../context/actions/projectsActions";
import { getGroupInfo } from "../../context/actions/groupingActions";
import { useForm } from "react-hook-form";

export const createProjectService = (closeForm: () => void) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectFormValues>({
    resolver: createProjectFormResolver,
  });

  const dispatch: AppDispatch = useDispatch();

  const groupInfo: { group: Group; projects: Project[] } = useSelector(
    (state: RootState) => state.groups?.currentGroupInfo
  );

  const submitHandler = handleSubmit((data: CreateNewProjectRequestBody) => {
    dispatch(createNewProject(groupInfo?.group._id, data));
    dispatch(getGroupInfo(groupInfo?.group._id));
    closeForm();
  });

  return {
    register,
    errors,
    submitHandler,
  };
};
