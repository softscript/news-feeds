import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Notification({ apiError, handleClose }) {
  return (
    <Snackbar
      open={apiError.hasError}
      autoHideDuration={6000}
      onClose={() => handleClose()}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {apiError.errorMessage}
      </Alert>
    </Snackbar>
  );
}
