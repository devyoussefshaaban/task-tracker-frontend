import { Box, Button, Divider, FormControl, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { CreateNewProjectRequestBody } from "../../utils/api";
import { AppDispatch, RootState } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { Group } from "../../models/Group";
import { FC } from "react";
import {
  createProjectFormResolver,
  CreateProjectFormValues,
} from "../../validations/createProjectValidation";
import { createNewProject } from "../../context/actions/projectsActions";
import { Project } from "../../models/Project";
import { getGroupInfo } from "../../context/actions/groupingActions";

interface IProps {
  closeForm: () => void;
}

const CreateProjectForm: FC<IProps> = ({ closeForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectFormValues>({
    resolver: createProjectFormResolver,
  });

  const dispatch: AppDispatch = useDispatch();

  const groupInfo: { group: Group; projects: Project[] } = useSelector(
    (state: RootState) => state.groups?.currentGroup
  );

  const submitHandler = handleSubmit((data: CreateNewProjectRequestBody) => {
    dispatch(createNewProject(groupInfo?.group._id, data));
    dispatch(getGroupInfo(groupInfo?.group._id));
    closeForm();
  });

  return (
    <Stack spacing={2} width="30ch" margin="2rem auto 2rem">
      <Box>
        <Typography variant="h6" textAlign="center">
          Create New Project
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
              label="Project Name"
              type="text"
              id="projectName"
              placeholder="Enter your projectName"
              variant="outlined"
              {...register("projectName")}
            />
            {errors?.projectName && (
              <Typography variant="caption" color="red">
                {errors.projectName.message as string}
              </Typography>
            )}
          </FormControl>

          <FormControl sx={{ mb: 2 }}>
            <TextField
              label="Description"
              type="text"
              id="description"
              placeholder="Enter the invitation description"
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

export default CreateProjectForm;
