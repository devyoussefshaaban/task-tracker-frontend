import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmailVerification = () => {
  const [isValidUrl, setIsValidUrl] = useState<boolean>(true);

  const params = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:8888/api/v1/auth/users/${params.userId}/verify/${params.token}`;
        await axios.get(url);
        setIsValidUrl(true);
      } catch (error) {
        setIsValidUrl(false);
      }
    };

    verifyEmailUrl();
  }, [params]);

  return (
    <>
      {isValidUrl ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/success.png" alt="success" />
          <Typography variant="h3" my={5}>
            Your email is verified successfully!
          </Typography>
          <Link to="/login">
            <Button
              variant="contained"
              onClick={() => (window.location.pathname = "/login")}
              sx={{ textTransform: "capitalize" }}
            >
              Login
            </Button>
          </Link>
        </Box>
      ) : (
        <Typography variant="h3">Not found..</Typography>
      )}
    </>
  );
};

export default EmailVerification;
