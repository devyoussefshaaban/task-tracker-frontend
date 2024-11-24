import { Resolver } from "react-hook-form";

export type CreateTaskFormValues = {
  title: string;
  description: string;
  projectId?: string | null;
  status?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  assignedUserId: string;
  priority: "URGENT" | "NORMAL" | "LOW";
};

export const CreateTaskFormResolver: Resolver<CreateTaskFormValues> = async (
  values
) => {
  const { title, description } = values;

  return {
    values:
      title && title.length >= 3 && description && description.length >= 10
        ? values
        : {},
    errors: !title
      ? {
          title: {
            type: "required",
            message: "Task title is required and must be valid.",
          },
        }
      : title.length < 3 || title.length > 30
      ? {
          title: {
            type: "validate",
            message: "Task title must be in range from 3 to 30 characters.",
          },
        }
      : !description
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
