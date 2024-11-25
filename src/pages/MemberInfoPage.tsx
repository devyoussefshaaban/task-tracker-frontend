import { BackToHomeBtn, WrapContainer } from "../components";
import { Group_Info } from "../models/Group";
import { groupServices } from "../services/groupServices";

const MemberInfoPage = () => {
  const { currentGroupInfo }: { currentGroupInfo: Group_Info | null } =
    groupServices().groupInfoService();

  return (
    <WrapContainer>
      <BackToHomeBtn
        path={`/groups/${currentGroupInfo?.group?._id}`}
        text="Back To The Group Projects"
      />
    </WrapContainer>
  );
};

export default MemberInfoPage;
