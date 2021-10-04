import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";

interface Props {
  text: string;
  closeModal: () => void;
  title: string;
  open: boolean;
  onSubmit: () => void;
}

export const ConfirmDialog: React.FC<Props> = ({
  text,
  closeModal,
  title,
  open,
  onSubmit,
}) => {
  return (
    <Dialog
      open={open}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title} </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button onClick={closeModal}>No</button>
        <button
          onClick={() => {
            onSubmit();
            closeModal();
          }}
        >
          Yes
        </button>
      </DialogActions>
    </Dialog>
  );
};
