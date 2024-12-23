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

export type InviteGroupMemberFormValues = {
  recieverEmail: string;
  title: string;
  message: string;
};

export const inviteGroupMemberFormResolver: Resolver<
  InviteGroupMemberFormValues
> = async (values) => {
  const { recieverEmail, title, message } = values;

  return {
    values:
      recieverEmail &&
      recieverEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) &&
      message &&
      message.length >= 30
        ? values
        : {},
    errors:
      !recieverEmail ||
      !recieverEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        ? {
            recieverEmail: {
              type: "required",
              message: "Email is required and must be valid.",
            },
          }
        : !title
        ? {
            title: {
              type: "required",
              message: "Title is required.",
            },
          }
        : title.length < 10 || title.length > 30
        ? {
            title: {
              type: "validate",
              message: "Title must be in range from 10 to 30 characters.",
            },
          }
        : !message
        ? {
            message: {
              type: "required",
              message: "Message is required.",
            },
          }
        : message.length < 10 || message.length > 300
        ? {
            message: {
              type: "validate",
              message: "Message must be in range from 6 to 300 characters.",
            },
          }
        : {},
  };
};
