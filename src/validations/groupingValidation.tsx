import { Resolver } from "react-hook-form";

export type CreateGroupFormValues = {
  groupName: string;
  description: string;
};

export const CreateGroupFormResolver: Resolver<CreateGroupFormValues> = async (
  values
) => {
  const { groupName, description } = values;

  return {
    values: groupName && description && description.length >= 10 ? values : {},
    errors: !groupName
      ? {
          groupName: {
            type: "required",
            message: "groupName is required.",
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
            message: "description must be in range from 6 to 30 characters.",
          },
        }
      : {},
  };
};
