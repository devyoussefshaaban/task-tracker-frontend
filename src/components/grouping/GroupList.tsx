import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { Group } from "../../models/Group";

const GroupList = () => {
  const groups: Group[] = useSelector(
    (state: RootState) => state.groups?.groupList
  );

  console.log({ groups });

  return (
    <Grid container>
      {groups?.map((group: Group) => (
        <Grid key={group._id} item xs={12} md={4}>
          <Typography>{group.groupData.groupName}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupList;
