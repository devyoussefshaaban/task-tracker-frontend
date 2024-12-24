import {
  Add,
  CalendarMonthOutlined,
  CircleOutlined,
  DeleteOutlineTwoTone,
  Inbox,
  MoreHoriz,
  StarOutline,
  UpcomingOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  PaletteColor,
  Stack,
  Typography,
} from "@mui/material";
import { CreateTask, FlexBetween } from "../../components";
import { Link } from "react-router-dom";
import muiTheme from "../../utils/theme";
import { AppDispatch, RootState } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { setSelectMainSection } from "../../context/actions/generalActions";
import { CREATE_TASK_FORM_TYPE } from "../../utils/constants";
import { taskServices } from "../../services/taskServices";

const MacDot = ({ color }: { color: string | PaletteColor }) => {
  return (
    <span
      style={{
        display: "block",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: color as string,
        marginRight: "4px",
        cursor: "pointer",
      }}
    />
  );
};

const TopSection = () => {
  const theme = muiTheme();

  return (
    <FlexBetween>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <MacDot color={theme.palette.error.main} />
        <MacDot color={theme.palette.warning.main} />
        <MacDot color={theme.palette.success.main} />
      </Box>
      <MoreHoriz
        sx={{
          fontSize: "1.4rem",
          color: theme.palette.secondary.main,
          opacity: 0.5,
          marginLeft: "auto",
          display: "block",
          cursor: "pointer",
        }}
      />
    </FlexBetween>
  );
};

const MidSectionLink = ({
  Icon,
  name,
}: {
  Icon: JSX.Element;
  name: string;
}) => {
  const theme = muiTheme();

  const dispatch: AppDispatch = useDispatch();

  const selectMainSection = (sectionName: string) => {
    dispatch(setSelectMainSection(sectionName));
  };

  const currentSelectedMainSection: string | null = useSelector(
    (state: RootState) => state.general.selectedMainSection
  );

  const isSelectedSection = name === currentSelectedMainSection;

  return (
    <Button
      startIcon={Icon}
      style={{
        color: isSelectedSection
          ? theme.palette.common.white
          : theme.palette.common.black,
        textDecoration: "none",
        marginBottom: "0.7rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textTransform: "capitalize",
        background: isSelectedSection ? theme.palette.primary.light : "",
      }}
      variant={`${isSelectedSection ? "contained" : "text"}`}
      onClick={() => selectMainSection(name)}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        fontSize=".7rem"
      >
        <Typography variant="h6" fontSize="inherit" fontWeight={600}>
          {name}
        </Typography>
      </Box>
    </Button>
  );
};

const MidSection = () => {
  return (
    <Stack mt={2} pl={2}>
      <MidSectionLink Icon={<Inbox fontSize="inherit" />} name="Inbox" />
      <MidSectionLink Icon={<StarOutline fontSize="inherit" />} name="Today" />
      <MidSectionLink
        Icon={<UpcomingOutlined fontSize="small" />}
        name="Upcoming"
      />
      <MidSectionLink
        Icon={<CalendarMonthOutlined fontSize="small" />}
        name="Anytime"
      />
      <MidSectionLink
        Icon={<DeleteOutlineTwoTone fontSize="small" />}
        name="Trash"
      />
    </Stack>
  );
};

const GeneralSectionLink = ({ name, href }: { name: string; href: string }) => {
  const theme = muiTheme();

  return (
    <Link
      to={href}
      style={{
        color: theme.palette.secondary.main,
        textDecoration: "none",
        marginBottom: "1rem",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        fontSize=".7rem"
      >
        <CircleOutlined fontSize="inherit" />
        <Typography variant="h6" ml={1} fontSize="inherit" fontWeight={600}>
          {name}
        </Typography>
      </Box>
    </Link>
  );
};
const GeneralSection = ({
  title,
  titleColor,
  generalLinkSet,
}: {
  title: string;
  titleColor: string | PaletteColor;
  generalLinkSet: { name: string; href: string }[];
}) => {
  return (
    <Stack mt={2} pl={2}>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        marginRight="auto"
        mb={2}
        fontSize=".7rem"
        color={titleColor as string}
      >
        <CircleOutlined fontSize="inherit" />
        <Typography variant="h6" fontSize="inherit" ml={1} fontWeight={600}>
          {title}
        </Typography>
      </Box>
      {generalLinkSet.map(({ name, href }: { name: string; href: string }) => (
        <GeneralSectionLink key={name} name={name} href={href} />
      ))}
    </Stack>
  );
};

const BottomSection = () => {
  const { onOpenForm } = taskServices().taskInfoService();

  const theme = muiTheme();

  return (
    <Box mt={4} pl={2}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "0 10px 10px",
          background: theme.palette.primary.main,
          boxShadow: `0 2px 20px ${theme.palette.primary.main}`,
          color: "#fff",
          cursor: "pointer",
          textAlign: "center",
          lineHeight: "50px",
        }}
        onClick={onOpenForm}
      >
        <Add fontSize="small" color="inherit" />
      </Box>
    </Box>
  );
};

const MainSidebar = () => {
  const { selectedTask, onCloseForm, onUpdateTask } =
    taskServices().createTaskService();

  const { isCreateTaskFormOpen } = taskServices().taskInfoService();

  const theme = muiTheme();

  return (
    <>
      <Stack
        sx={{
          py: 1,
          px: 1.6,
          flex: 0.2,
          height: "100vh",
          background: "rgba(241, 242, 246,.5)",
          boxShadow: `0 4px 2px ${theme.palette.secondary.main}`,
          borderRight: "1px solid rgba(223, 228, 234,1.0)",
        }}
      >
        <TopSection />
        <MidSection />
        <GeneralSection
          title="Family"
          titleColor={theme.palette.error.main}
          generalLinkSet={[
            { name: "Vacation Planning", href: "/family/vacation-planning" },
            { name: "Buy A New Car", href: "/family/buy-a-new-car" },
          ]}
        />
        <GeneralSection
          title="Work"
          titleColor={theme.palette.success.main}
          generalLinkSet={[
            { name: "Onboarding Plan", href: "/work/onboarding-plan" },
            { name: "Presentation Work", href: "/work/presentation-work" },
          ]}
        />
        <BottomSection />
      </Stack>
      <Dialog open={isCreateTaskFormOpen}>
        <CreateTask
          formType={
            selectedTask
              ? CREATE_TASK_FORM_TYPE.UPDATE_TASK
              : CREATE_TASK_FORM_TYPE.CREATE_TASK
          }
          selectedTask={selectedTask ? selectedTask : null}
          onUpdateTask={onUpdateTask}
          onClose={onCloseForm}
        />
      </Dialog>
    </>
  );
};

export default MainSidebar;
