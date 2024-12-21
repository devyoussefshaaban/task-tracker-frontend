import { Stack, Typography } from "@mui/material";
import MeetingItem from "./MeetingItem";
import muiTheme from "../../utils/theme";

const MeetingList = () => {
  const theme = muiTheme();

  return (
    <Stack>
      <Typography
        variant="h6"
        mb={3}
        color={theme.palette.grey[600]}
        sx={{ opacity: 0.4 }}
      >
        Meetings Schedule
      </Typography>
      <Stack
        sx={{
          height: "70vh",
          paddingRight: 1,
          overflowY: "auto",
          "::-webkit-scrollbar": {
            width: "3px",
            borderRadius: "10px",
          },
          "::-webkit-scrollbar-track": {
            background: theme.palette.secondary.light,
          },
          "::-webkit-scrollbar-thumb": {
            background: "#888",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: theme.palette.primary.main,
          },
        }}
      >
        <MeetingItem
          membersNumber={4}
          bg={"rgba(255, 218, 121,.4)"}
          color={"rgba(204, 142, 53,1.0)"}
          title="Meeting outboarding friends"
          time="9:00 AM - 9:30 AM"
        />
        <MeetingItem
          membersNumber={3}
          isJoinedUser={true}
          bg={"rgba(52, 172, 224,.4)"}
          color={"rgba(34, 112, 147,1.0)"}
          title="Product Development Team"
          time="12:30 PM - 2:30 PM"
        />
        <MeetingItem
          membersNumber={5}
          bg={"rgba(255, 82, 82,.4)"}
          color={"rgba(179, 57, 57,1.0)"}
          title="Product Planning"
          time="10:00 AM - 12:30 PM"
        />
        <MeetingItem
          membersNumber={15}
          bg={"rgba(51, 217, 178,.4)"}
          color={"rgba(33, 140, 116,1.0)"}
          title="Social Product Review"
          time="4:10 PM - 5:30 PM"
        />
      </Stack>
    </Stack>
  );
};

export default MeetingList;
