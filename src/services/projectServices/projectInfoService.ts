import { useSelector } from "react-redux";
import { Project } from "../../models/Project";
import { RootState } from "../../context";

export const projectInfoService = () => {
  const currentProject: Project | null = useSelector(
    (state: RootState) => state.projects.currentProject
  );

  return {
    currentProject,
  };
};
