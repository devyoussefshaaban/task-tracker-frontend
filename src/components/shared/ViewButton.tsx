import { Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  href: string;
}

const ViewButton: FC<IProps> = ({ href }) => {
  return (
    <Button
      sx={{ p: 0, mt: 2, textTransform: "capitalize" }}
      variant="outlined"
    >
      <Link
        to={`/groups/${href}`}
        style={{
          width: "100%",
          height: "100%",
          padding: ".3rem .5rem",
          display: "block",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        View
      </Link>
    </Button>
  );
};

export default ViewButton;
