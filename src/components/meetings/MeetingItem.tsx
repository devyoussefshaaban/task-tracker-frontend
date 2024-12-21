import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FlexBetween from "../shared/FlexBetween";
import { useEffect, useState } from "react";
import muiTheme from "../../utils/theme";

const MeetingItem = ({
  membersNumber,
  isJoinedUser,
  bg,
  color,
  title,
  time,
}: {
  membersNumber: number;
  isJoinedUser?: boolean;
  bg: string;
  color: string;
  title: string;
  time: string;
}) => {
  const [memberList, setMemberList] = useState<JSX.Element[]>([]);

  const membersAvatars = () => {
    let list = [];
    for (var i = 0; i < membersNumber; i++) {
      list.push(
        <Avatar
          sx={{ width: 25, height: 25, ml: 1 }}
          src={`https://avatar.iran.liara.run/public/${Math.floor(
            Math.random() * 100
          )}`}
        />
      );
      setMemberList([...list]);
    }
  };

  useEffect(() => {
    membersAvatars();
  }, []);

  const theme = muiTheme();

  return (
    <Stack
      sx={{
        background: bg,
        py: 2,
        px: 3,
        mb: 3,
        borderRadius: 3,
      }}
    >
      <Box sx={{ color, mb: 0 }}>
        <FlexBetween>
          <Typography variant="caption" color="inherit">
            {time}
          </Typography>
          <IconButton sx={{ color }}>
            <MoreVert fontSize="small" color="inherit" />
          </IconButton>
        </FlexBetween>
      </Box>
      <Box color={color}>
        <Typography
          variant="body2"
          fontWeight={500}
          color="inherit"
          className="roboto-bold-italic"
        >
          {title}
        </Typography>
      </Box>
      <FlexBetween>
        <Box display="flex" alignItems="center" mt={3}>
          {isJoinedUser || membersNumber > 13
            ? memberList.map((MemberAvatar, idx) => idx < 3 && MemberAvatar)
            : memberList.map((MemberAvatar) => MemberAvatar)}
        </Box>
        {isJoinedUser ? (
          <Chip
            label="You Joined"
            variant="filled"
            sx={{
              fontStyle: "italic",
              mt: 4,
              ml: 2,
              color: theme.palette.common.white,
            }}
          />
        ) : null}
        {membersNumber > 13 ? (
          <Chip
            label="+13 Members"
            variant="filled"
            sx={{
              fontStyle: "italic",
              mt: 4,
              ml: 2,
              color: theme.palette.common.white,
            }}
          />
        ) : null}
      </FlexBetween>
    </Stack>
  );
};

export default MeetingItem;
