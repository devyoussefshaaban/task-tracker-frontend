import { useDispatch, useSelector } from "react-redux";
import { Project } from "../models/Project";
import { AppDispatch, RootState } from "../context";
import { useForm } from "react-hook-form";
import {
  createProjectFormResolver,
  CreateProjectFormValues,
} from "../validations/createProjectValidation";
import { CreateNewProjectRequestBody } from "../utils/api";
import { createNewProject } from "../context/actions/projectsActions";
import { getGroupInfo } from "../context/actions/groupingActions";
import { Group } from "../models/Group";

export const projectServices = () => {
  const projectInfoService = () => {
    const currentProject: Project | null = useSelector(
      (state: RootState) => state.projects.currentProject
    );

    return {
      currentProject,
    };
  };

  const createProjectService = (closeForm: () => void) => {
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

  return {
    projectInfoService,
    createProjectService,
  };
};
