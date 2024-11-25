import { Box, Button, Divider, FormControl, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import { projectServices } from "../../services/projectServices";

interface IProps {
  closeForm: () => void;
}

const CreateProjectForm: FC<IProps> = ({ closeForm }) => {
  const { register, errors, submitHandler } =
    projectServices().createProjectService(closeForm);

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
