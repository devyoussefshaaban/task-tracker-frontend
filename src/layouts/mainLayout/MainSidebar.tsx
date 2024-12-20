import {
  Add,
  CalendarMonthOutlined,
  CalendarViewDayOutlined,
  CircleOutlined,
  DeleteOutlineTwoTone,
  Inbox,
  MoreHoriz,
  StarOutline,
  UpcomingOutlined,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { FlexBetween } from "../../components";
import { Link } from "react-router-dom";

const MacDot = ({ color }: { color: string }) => {
  return (
    <span
      style={{
        display: "block",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: color,
        marginRight: "4px",
        cursor: "pointer",
      }}
    />
  );
};

const TopSection = () => {
  return (
    <FlexBetween>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <MacDot color="rgba(255, 99, 72,1.0)" />
        <MacDot color="rgba(255, 165, 2,1.0)" />
        <MacDot color="rgba(46, 213, 115,1.0)" />
      </Box>
      <MoreHoriz
        sx={{
          fontSize: "1.4rem",
          color: "rgba(206, 214, 224,1.0)",
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
  return (
    <Link
      to={href}
      style={{
        color: "rgba(47, 53, 66,1.0)",
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
  return (
    <Link
      to={href}
      style={{
        color: "rgba(116, 125, 140,.8)",
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
  titleColor: string;
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
        color={titleColor}
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
  return (
    <Box mt={4} pl={2}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "0 10px 10px",
          background: "rgba(55, 66, 250,1.0)",
          boxShadow: "0 2px 20px rgba(83, 82, 237,1.0)",
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
  return (
    <Stack
      sx={{
        py: 1,
        px: 1.6,
        flex: 0.2,
        background: "rgba(241, 242, 246,.5)",
        borderRight: "1px solid rgba(223, 228, 234,1.0)",
      }}
    >
      <TopSection />
      <MidSection />
      <GeneralSection
        title="Family"
        titleColor="rgba(255, 99, 72,1.0)"
        generalLinkSet={[
          { name: "Vacation Planning", href: "/family/vacation-planning" },
          { name: "Buy A New Car", href: "/family/buy-a-new-car" },
          { name: "Festival Ideas", href: "/family/festival-ideas" },
        ]}
      />
      <GeneralSection
        title="Work"
        titleColor="rgba(46, 213, 115,1.0)"
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
