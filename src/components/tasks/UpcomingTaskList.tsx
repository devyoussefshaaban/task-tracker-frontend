import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { TASK_PRIORITY } from "../../utils/constants";
import muiTheme from "../../utils/theme";
import MainContainer from "../shared/MainContainer";
import FlexBetween from "../shared/FlexBetween";
import { Add, MoreVert } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { Task } from "../../models/Task";

const UpcomingTaskList = () => {
  const taskList = useSelector((state: RootState) => state.tasks?.tasks);

  const theme = muiTheme();

  return (
    <MainContainer>
      <Stack>
        <Box mb={4}>
          <FlexBetween>
            <Typography variant="h5" fontWeight={600}>
              Upcoming Tasks
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                textTransform: "capitalize",
                background: theme.palette.primary.light,
              }}
              startIcon={<Add />}
            >
              Add Task
            </Button>
          </FlexBetween>
        </Box>
        <Grid container spacing={2}>
          {taskList.upcomingTasks?.map((task: Task) => (
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
                <Box mt={3} textTransform="capitalize">
                  <Chip
                    variant="filled"
                    label={task.status}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      fontSize: ".7rem",
                      background: theme.palette.grey[900],
                      color: theme.palette.common.white,
                    }}
                  />
                  <Chip
                    variant="filled"
                    label={task.priority.toLocaleLowerCase()}
                    size="small"
                    sx={{
                      ml: 1,
                      fontWeight: 600,
                      fontSize: ".7rem",
                      color: theme.palette.common.white,
                      background: `${
                        task.priority === TASK_PRIORITY.URGENT
                          ? theme.palette.warning.light
                          : task.priority === TASK_PRIORITY.LOW
                          ? theme.palette.success.dark
                          : theme.palette.secondary.dark
                      }`,
                    }}
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
