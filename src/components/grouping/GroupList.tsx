import { Button, Card, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { Link } from "react-router-dom";
import { Group_Member } from "../../models/Group_Member";
import ViewButton from "../shared/ViewButton";

const GroupList = () => {
  const groups: Group_Member[] = useSelector(
    (state: RootState) => state.groups?.groupList
  );

  return (
    <Grid container spacing={2}>
      {groups?.map((group) => (
        <Grid key={group.groupData?.groupId} item xs={12} md={4}>
          <Card sx={{ py: 1, px: 2 }}>
            <Typography>{group?.groupData.groupName}</Typography>
            <ViewButton href={group?.groupData.groupId} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupList;
