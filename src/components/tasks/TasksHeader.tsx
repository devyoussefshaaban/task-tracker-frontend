import { PeopleAltOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import muiTheme from "../../utils/theme";
import FlexBetween from "../shared/FlexBetween";

const TasksHeader = () => {
  const theme = muiTheme();

  return (
    <FlexBetween>
      <Typography variant="h5" fontWeight={600}>
        Today Task
      </Typography>
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <IconButton>
          <PeopleAltOutlined fontSize="small" />
        </IconButton>
        <Box
          sx={{
            background: theme.palette.success.light,
            color: theme.palette.common.white,
            width: "35px",
            height: "35px",
            lineHeight: "33px",
            textAlign: "center",
            padding: "2px",
            fontSize: "1.2rem",
            fontWeight: 600,
            ml: 4,
            borderRadius: 3,
            boxShadow: `0 1px 4px ${theme.palette.success.main}`,
          }}
        >
          5
        </Box>
      </Stack>
    </FlexBetween>
  );
};

export default TasksHeader;
