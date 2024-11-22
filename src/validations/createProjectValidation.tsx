import { Resolver } from "react-hook-form";

export type CreateProjectFormValues = {
  projectName: string;
  description: string;
};

export const createProjectFormResolver: Resolver<
  CreateProjectFormValues
> = async (values) => {
  const { projectName, description } = values;

  return {
    values:
      projectName &&
      projectName.length >= 3 &&
      projectName.length <= 30 &&
      description &&
      description.length >= 30 &&
      description.length <= 300
        ? values
        : {},
    errors: !projectName
      ? {
          projectName: {
            type: "required",
            message: "Project name is required and must be valid.",
          },
        }
      : !description
      ? {
          description: {
            type: "required",
            message: "Project description is required.",
          },
        }
      : description.length < 30 || description.length > 300
      ? {
          description: {
            type: "validate",
            message: "description must be in range from 30 to 300 characters.",
          },
        }
      : {},
  };
};
