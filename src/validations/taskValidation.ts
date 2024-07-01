import { Resolver } from "react-hook-form";

export type CreateTaskFormValues = {
    name: string;
    description: string;
  };
  
  export const CreateTaskFormResolver: Resolver<CreateTaskFormValues> = async (
    values
  ) => {
    const { name, description } = values;
  
    return {
      values:
        name &&
        name.length >= 3 &&
        description &&
        description.length >= 10
          ? values
          : {},
      errors:
        !name
          ? {
              name: {
                type: "required",
                message: "Task name is required and must be valid.",
              },
            }
          : name.length < 3 || name.length > 30
          ? {
              name: {
                type: "validate",
                message: "Task name must be in range from 3 to 30 characters.",
              },
            }: !description
          ? {
              description: {
                type: "required",
                message: "description is required.",
              },
            }
          : description.length < 10 || description.length > 300
          ? {
              description: {
                type: "validate",
                message: "description must be in range from 10 to 300 characters.",
              },
            }
          : {},
    };
  };
  