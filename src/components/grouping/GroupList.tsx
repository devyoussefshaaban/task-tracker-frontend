import { Card, Grid, Typography } from "@mui/material";
import { Group_Member } from "../../models/Group_Member";
import ViewButton from "../shared/ViewButton";
import { groupServices } from "../../services/groupServices";

const GroupList = () => {
  const { groups }: { groups: Group_Member[] } =
    groupServices().groupInfoService();

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
