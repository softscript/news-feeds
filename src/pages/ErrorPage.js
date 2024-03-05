import React from "react";
import { ErrorPageWrapper } from "../appStyles";
import Typography from "@mui/material/Typography";

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <div className="err-title__div">
        <Typography variant="h2">Look like you're lost</Typography>
        <Typography variant="h4">
          the page you are looking for not avaible!
        </Typography>
        <div className="route-to_home_page">
        <a href="/home" class="link_to_home">
          Go to Home
        </a>
        </div>
      </div>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
