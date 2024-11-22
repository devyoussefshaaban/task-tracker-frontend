import { Card, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { Group } from "../../models/Group";
import BasicButton from "../shared/BasicButton";
import { Link } from "react-router-dom";

const GroupList = () => {
  const groups: Group[] = useSelector(
    (state: RootState) => state.groups?.groupList
  );

  return (
    <Grid container spacing={1}>
      {groups?.map((group: Group) => (
        <Grid key={group._id} item xs={12} md={4}>
          <Card sx={{ py: 1, px: 2, background: "whitesmoke" }}>
            <Typography>{group.groupData.groupName}</Typography>
            <BasicButton>
              <Link to={`/groups/${group.groupData.groupId}`}>View</Link>
            </BasicButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupList;
