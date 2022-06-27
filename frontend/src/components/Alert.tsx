import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { RootState } from "store/models/redux.model";
import { RESET_GLOBAL } from "store/actions/global.actions";

export default function AlertDialog() {
  const {message, type} = useSelector((state:RootState)=> state.global.alert)
  const dispatch = useDispatch()

  const handleClose = ()=>{
    dispatch({
      type: RESET_GLOBAL
    })
  }

  return (
    <div>
      <Dialog
        open={Boolean(message) && Boolean(type)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Robot types limit"}</DialogTitle>
        <DialogContent>
            <Alert severity={type}> {message}</Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
