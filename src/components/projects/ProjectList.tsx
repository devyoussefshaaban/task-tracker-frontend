import { Box, Card, Grid, Typography } from "@mui/material";
import { Group } from "../../models/Group";
import { Project } from "../../models/Project";
import { FC } from "react";
import ViewButton from "../shared/ViewButton";

interface IProps {
  groupInfo: {
    group: Group;
    projects: Project[];
  };
}

const ProjectList: FC<IProps> = ({ groupInfo }) => {
  return (
    <Box>
      <Typography variant="h6">Projects</Typography>
      <Grid container spacing={1} mt={2}>
        {groupInfo?.projects.map((project) => (
          <Grid key={project._id} item xs={12} md={4}>
            <Card sx={{ py: 1, px: 2, background: "whitesmoke" }}>
              <Typography variant="h6" mb={2}>
                {project.projectName}
              </Typography>
              <Typography variant="body1">
                {project.description.slice(0, 30)}...
              </Typography>
              <ViewButton
                href={`${groupInfo?.group._id}/projects/${project?._id}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectList;
