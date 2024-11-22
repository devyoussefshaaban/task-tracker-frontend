import { Box, Button, Divider, FormControl, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import {
  CreateGroupFormValues,
  CreateGroupFormResolver,
} from "../../validations/groupingValidation";
import { CreateGroupRequestBody } from "../../utils/api";
import { AppDispatch } from "../../context";
import { useDispatch } from "react-redux";
import {
  createGroup,
  getMyGroups,
} from "../../context/actions/groupingActions";
import { FC } from "react";

interface IProps {
  closeForm: () => void;
}

const CreateGroupForm: FC<IProps> = ({ closeForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGroupFormValues>({ resolver: CreateGroupFormResolver });

  const dispatch: AppDispatch = useDispatch();

  const submitHandler = handleSubmit((data: CreateGroupRequestBody) => {
    dispatch(createGroup(data));
    closeForm();

    setTimeout(() => {
      dispatch(getMyGroups());
    }, 500);
  });

  return (
    <Stack spacing={2} width="30ch" margin="2rem auto 2rem">
      <Box>
        <Typography variant="h6" textAlign="center">
          Create Group
        </Typography>
        <Divider sx={{ mb: 1, mt: 1 }} />
      </Box>
      <form onSubmit={submitHandler}>
        <Box
          margin="auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <FormControl sx={{ mb: 2 }}>
            <TextField
              label="Group Name"
              id="groupName"
              placeholder="Enter your groupName"
              variant="outlined"
              {...register("groupName")}
            />
            {errors?.groupName && (
              <Typography variant="caption" color="red">
                {errors.groupName.message as string}
              </Typography>
            )}
          </FormControl>

          <FormControl sx={{ mb: 2 }}>
            <TextField
              label="Group Description"
              type="description"
              id="description"
              placeholder="Enter your description"
              variant="outlined"
              {...register("description")}
            />
            {errors?.description && (
              <Typography variant="caption" color="red">
                {errors.description.message as string}
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
          Submit
        </Button>
      </form>
    </Stack>
  );
};

export default CreateGroupForm;
