import { Box, Button, Divider, FormControl, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { InviteGroupMemberRequestBody } from "../../utils/api";
import { AppDispatch, RootState } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import {
  inviteGroupMemberFormResolver,
  InviteGroupMemberFormValues,
} from "../../validations/groupingValidation";
import { sendGroupInvitation } from "../../context/actions/invitationsActions";
import { Group } from "../../models/Group";
import { FC } from "react";

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

  const groupInfo: Group = useSelector(
    (state: RootState) => state.groups?.currentGroup
  );

  const submitHandler = handleSubmit((data: InviteGroupMemberRequestBody) => {
    dispatch(sendGroupInvitation(groupInfo?._id, data));
    closeForm();
  });

  return (
    <Stack spacing={2} width="30ch" margin="2rem auto 2rem">
      <Box>
        <Typography variant="h6" textAlign="center">
          Invite Group Member
        </Typography>
        <Divider sx={{ mb: 1, mt: 1 }} />
      </Box>
      <form onSubmit={submitHandler}>
        <FormControl sx={{ mb: 2 }}>
          <TextField
            label="Email"
            id="Email"
            placeholder="Enter the reciever email"
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
            label="Message"
            type="message"
            id="message"
            placeholder="Enter your message"
            variant="outlined"
            {...register("message")}
          />
          {errors?.message && (
            <Typography variant="caption" color="red">
              {errors.message.message as string}
            </Typography>
          )}
        </FormControl>

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
          Send Invitation
        </Button>
      </form>
    </Stack>
  );
};

export default InviteGroupMemberForm;
