import { Typography } from "@mui/material";
import { FC } from "react";

interface IProps {
  title: string;
}

const HeadTitle: FC<IProps> = ({ title }) => {
  return (
    <Typography variant="h6" fontWeight={600} mb={1}>
      {title}
    </Typography>
  );
};

export default HeadTitle;
