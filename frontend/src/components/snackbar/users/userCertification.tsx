"use client"

import { Alert, Snackbar } from "@mui/material";
import { UserStore } from "../../../stores/user/userStore";

// ユーザーログイン失敗時に表示するスナックバー
export const UserCertificationSnackBar = () => {
  // ストアから取得
  const errorMessage = UserStore((state) => state.errorMessage);
  const setErrorMessage = UserStore((state) => state.setErrorMessage);
  const errorMessageTrigger = UserStore((state) => state.errorMessageTrigger);
  const setErrorMessageTrigger = UserStore((state) => state.setErrorMessageTrigger);

  return (
    <Snackbar
      open={errorMessageTrigger}
      autoHideDuration={5000}
      onClose={
        () => {
          setErrorMessageTrigger(false);
          setErrorMessage(null);
        }
      }
      anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert severity="warning">
        {errorMessage}
      </Alert>
    </Snackbar>
  )
};