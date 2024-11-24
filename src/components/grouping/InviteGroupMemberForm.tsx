import { Box, Button, Divider, FormControl, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { InviteGroupMemberRequestBody } from "../../utils/api";
import { AppDispatch, RootState } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { Group } from "../../models/Group";
import { FC } from "react";
import { Project } from "../../models/Project";
import {
  inviteGroupMemberFormResolver,
  InviteGroupMemberFormValues,
} from "../../validations/groupingValidation";
import { sendGroupInvitation } from "../../context/actions/invitationsActions";

interface IProps {
  closeForm: () => void;
}

const InviteGroupMemberForm: FC<IProps> = ({ closeForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InviteGroupMemberFormValues>({
    resolver: inviteGroupMemberFormResolver,
  });

  const dispatch: AppDispatch = useDispatch();

  const groupInfo: { group: Group; projects: Project[] } = useSelector(
    (state: RootState) => state.groups?.currentGroup
  );

  // TODO: FIX ISSUE OF THE FORM BODY, SOMETIMES IT'S EMPTY!!!!
  const submitHandler = handleSubmit((data: InviteGroupMemberRequestBody) => {
    dispatch(sendGroupInvitation(groupInfo?.group._id, data));
    closeForm();
  });

  return (
    <Stack spacing={2} width="30ch" margin="2rem auto 2rem">
      <Box>
        <Typography variant="h6" textAlign="center">
          Send Join Invitation
        </Typography>
        <Divider sx={{ mb: 1, mt: 1 }} />
      </Box>
      <form onSubmit={submitHandler}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <FormControl sx={{ mb: 2 }}>
            <TextField
              label="Reciever Email"
              type="text"
              id="recieverEmail"
              placeholder="Enter the user email"
              variant="outlined"
              {...register("recieverEmail")}
            />
            {errors?.recieverEmail && (
              <Typography variant="caption" color="red">
                {errors.recieverEmail.message as string}
              </Typography>
            )}
          </FormControl>

          <FormControl sx={{ mb: 2 }}>
            <TextField
              label="Title"
              type="text"
              id="title"
              placeholder="Enter the invitation title"
              variant="outlined"
              {...register("title")}
            />
            {errors?.title && (
              <Typography variant="caption" color="red">
                {errors.title.message as string}
              </Typography>
            )}
          </FormControl>

          <FormControl sx={{ mb: 2 }}>
            <TextField
              label="Message"
              type="text"
              id="message"
              placeholder="Enter the invitation message"
              variant="outlined"
              {...register("message")}
            />
            {errors?.message && (
              <Typography variant="caption" color="red">
                {errors.message.message as string}
              </Typography>
            )}
          </FormControl>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            textTransform: "capitalize",
            display: "block",
            width: "fit-content",
            margin: "auto",
          }}
        >
          Send
        </Button>
      </form>
    </Stack>
  );
};

export default InviteGroupMemberForm;
