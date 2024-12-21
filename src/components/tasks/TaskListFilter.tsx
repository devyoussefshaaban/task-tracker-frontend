import { FC } from "react";
import muiTheme from "../../utils/theme";
import FlexBetween from "../shared/FlexBetween";
import { Box, Typography } from "@mui/material";
import { TASK_LIST_FILTER } from "../../utils/constants";

const FilterItem = ({
  isActive,
  number,
  name,
  onClick,
}: {
  isActive: boolean;
  number: number;
  name: string;
  onClick: () => void;
}) => {
  const theme = muiTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        cursor: "pointer",
        color: theme.palette.secondary.main,
        opacity: isActive ? 1 : 0.5,
        paddingBottom: 3,
        borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : "",
      }}
      onClick={onClick}
    >
      {number ? (
        <span
          style={{
            width: 28,
            height: 22,
            textAlign: "center",
            lineHeight: 1.9,
            borderRadius: 7,
            fontSize: ".75rem",
            display: "inline-block",
            marginRight: 8,
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
          }}
        >
          {number}
        </span>
      ) : null}
      <Typography
        variant="body2"
        color={theme.palette.common.black}
        fontWeight={600}
        textAlign="center"
      >
        {name}
      </Typography>
    </Box>
  );
};

interface IProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const TaskListFilter: FC<IProps> = ({ activeFilter, setActiveFilter }) => {
  return (
    <>
      <FlexBetween>
        <FilterItem
          number={10}
          name="All"
          isActive={activeFilter === TASK_LIST_FILTER.ALL}
          onClick={() => setActiveFilter(TASK_LIST_FILTER.ALL)}
        />
        <FilterItem
          number={0}
          name="Important"
          isActive={activeFilter === TASK_LIST_FILTER.UPCOMMING}
          onClick={() => setActiveFilter(TASK_LIST_FILTER.UPCOMMING)}
        />
        <FilterItem
          number={80}
          name="Notes"
          isActive={activeFilter === TASK_LIST_FILTER.NOTES}
          onClick={() => setActiveFilter(TASK_LIST_FILTER.NOTES)}
        />
        <FilterItem
          number={0}
          name="Links"
          isActive={activeFilter === TASK_LIST_FILTER.LINKS}
          onClick={() => setActiveFilter(TASK_LIST_FILTER.LINKS)}
        />
      </FlexBetween>
    </>
  );
};

export default TaskListFilter;
