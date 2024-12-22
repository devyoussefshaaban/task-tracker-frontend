import {
  Box,
  Card,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { taskList } from "../../utils/constants";
import muiTheme from "../../utils/theme";
import MainContainer from "../shared/MainContainer";
import FlexBetween from "../shared/FlexBetween";
import { MoreVert } from "@mui/icons-material";

const UpcomingTaskList = () => {
  const theme = muiTheme();

  return (
    <MainContainer>
      <Stack>
        <Typography variant="h5" fontWeight={600} mb={4}>
          Upcoming Tasks
        </Typography>
        <Grid container spacing={2}>
          {taskList.upcommingTasks.map((task) => (
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  background: theme.palette.primary.light,
                  color: theme.palette.common.white,
                  px: 2,
                  py: 1,
                }}
              >
                <Stack>
                  <FlexBetween>
                    <Typography variant="body2" className="roboto-bold-italic">
                      {task.title}
                    </Typography>
                    <IconButton color="inherit">
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </FlexBetween>
                  <Typography variant="caption" mt={1}>
                    {task.description}
                  </Typography>
                </Stack>
                <Box mt={3}>
                  <Chip
                    variant="filled"
                    label={task.status}
                    size="small"
                    color="info"
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </MainContainer>
  );
};

export default UpcomingTaskList;
