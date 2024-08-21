import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmailVerification = () => {
  const [isValidUrl, setIsValidUrl] = useState<boolean>(false);

  const params = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:8888/api/v1/auth/users/${params.userId}/verify/${params.token}`;
        console.log({ url });
        const response = await axios.get(url);
        const { data } = response;
        console.log({ data });
        setIsValidUrl(true);
      } catch (error) {
        console.log(`EMAIL VERIFICATION ERROR: ${error}`);
      }
    };

    verifyEmailUrl();
  }, [params]);

  return (
    <>
      {!isValidUrl ? (
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
          <Button
            variant="contained"
            onClick={() => (window.location.pathname = "/")}
            sx={{ textTransform: "capitalize" }}
          >
            Login
          </Button>
        </Box>
      ) : (
        <Typography variant="h3">Not found..</Typography>
      )}
    </>
  );
};

export default EmailVerification;
