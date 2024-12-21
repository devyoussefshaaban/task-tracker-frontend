import { MoreVert } from "@mui/icons-material";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import FlexBetween from "../shared/FlexBetween";
import { useEffect, useState } from "react";

const MeetingItem = ({
  membersNumber,
  bg,
  color,
  title,
  time,
}: {
  membersNumber: number;
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
      <Box display="flex" alignItems="center" mt={3}>
        {memberList.map((MemberAvatar) => MemberAvatar)}
      </Box>
    </Stack>
  );
};

export default MeetingItem;
