import { Box, Card, Chip, Grid, Typography } from "@mui/material";
import { Group } from "../../models/Group";
import { Group_Member } from "../../models/Group_Member";
import { FC } from "react";
import ViewButton from "../shared/ViewButton";
import { Project } from "../../models/Project";
import { User } from "../../models/User";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import FlexBetween from "../shared/FlexBetween";
import HeadTitle from "../shared/HeadTitle";
import BoxWrapper from "../shared/BoxWrapper";

interface IProps {
  groupInfo: {
    group: Group;
    projects: Project[];
    members: Group_Member[];
  };
}

const MemberList: FC<IProps> = ({ groupInfo }) => {
  const user: User = useSelector((state: RootState) => state.auth.user);

  if (groupInfo?.members.length === 0)
    return (
      <>
        <HeadTitle title="Members" />
        <Typography>There is no members added yet.</Typography>
      </>
    );
  return (
    <BoxWrapper>
      <HeadTitle title="Members" />
      <Grid container spacing={1} mt={2}>
        {groupInfo?.members.map((member) => (
          <Grid key={member._id} item xs={12} md={4}>
            <Card sx={{ py: 1, px: 2, background: "whitesmoke" }}>
              <FlexBetween>
                <Typography variant="h6" mb={2}>
                  {member?.userData.username}
                </Typography>
                <Box>
                  {member?.userData.userId === user?._id ? (
                    <Chip
                      label="Admin"
                      variant="filled"
                      color="success"
                      sx={{ mt: -1.5 }}
                    />
                  ) : null}
                  {member?.userData.userId === user?._id ? (
                    <Chip
                      label="You"
                      variant="filled"
                      color="success"
                      sx={{ mt: -1.5, ml: 0.5 }}
                    />
                  ) : null}
                </Box>
              </FlexBetween>
              <Typography variant="body1">{member?.userData.email}</Typography>
              <ViewButton
                href={`${groupInfo?.group._id}/members/${member?._id}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </BoxWrapper>
  );
};

export default MemberList;
