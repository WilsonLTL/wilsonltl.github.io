// React
import React from "react";
import { useSelector, useDispatch,} from "react-redux";
// Mui
import { Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const SnackBar = () => {
  const snackBar = useSelector((state: any) => state.snackBarReducer);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: "CLOSE_SNACK_BAR",
    });
  };

  return (
    <Snackbar
      className="w-96"
      open={snackBar.status}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
      action={snackBar.action != undefined ? snackBar.action : undefined}
    >
      <MuiAlert
        className="w-full"
        elevation={6}
        severity={snackBar.type}
        action={
          snackBar.action != undefined ? (
            <Button color="inherit" size="small" onClick={snackBar.action}>
              馬上前往
            </Button>
          ) : undefined
        }
      >
        {snackBar.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackBar;
