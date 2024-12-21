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
import { Box, PaletteColor, Stack, Typography } from "@mui/material";
import { FlexBetween } from "../../components";
import { Link } from "react-router-dom";
import muiTheme from "../../utils/theme";

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
  href,
}: {
  Icon: JSX.Element;
  name: string;
  href: string;
}) => {
  const theme = muiTheme();

  return (
    <Link
      to={href}
      style={{
        color: theme.palette.common.black,
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
        {Icon}
        <Typography variant="h6" ml={1} fontSize="inherit" fontWeight={600}>
          {name}
        </Typography>
      </Box>
    </Link>
  );
};

const MidSection = () => {
  return (
    <Stack mt={2} pl={2}>
      <MidSectionLink
        Icon={<Inbox fontSize="inherit" />}
        name="Inbox"
        href="/inbox"
      />
      <MidSectionLink
        Icon={<StarOutline fontSize="inherit" />}
        name="Today"
        href="/today"
      />
      <MidSectionLink
        Icon={<UpcomingOutlined fontSize="inherit" />}
        name="Upcoming"
        href="/upcoming"
      />
      <MidSectionLink
        Icon={<CalendarMonthOutlined fontSize="inherit" />}
        name="Anytime"
        href="/anytime"
      />
      <MidSectionLink
        Icon={<DeleteOutlineTwoTone fontSize="inherit" />}
        name="Trash"
        href="/trash"
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
        <GeneralSectionLink name={name} href={href} />
      ))}
    </Stack>
  );
};

const BottomSection = () => {
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
      >
        <Add fontSize="small" color="inherit" />
      </Box>
    </Box>
  );
};

const MainSidebar = () => {
  const theme = muiTheme();

  return (
    <Stack
      sx={{
        py: 1,
        px: 1.6,
        flex: 0.2,
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
          { name: "Festival Ideas", href: "/family/festival-ideas" },
        ]}
      />
      <GeneralSection
        title="Work"
        titleColor={theme.palette.success.main}
        generalLinkSet={[
          { name: "Onboarding Plan", href: "/work/onboarding-plan" },
          { name: "Invoice-Review", href: "/work/invoice-review" },
          { name: "Presentation Work", href: "/work/presentation-work" },
        ]}
      />
      <BottomSection />
    </Stack>
  );
};

export default MainSidebar;
