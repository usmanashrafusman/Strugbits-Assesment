import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Typography,
  Button as MUIButton,
  Box,
} from "@mui/material";
import Button from "../Button";
import { IoCloseOutline } from "react-icons/io5";
import modelHeader from "@/assets/model_back.png";
import Delete from "@/assets/delete.svg";

const DeleteModel = (props) => {
  const { open, handleClose, onConfirm } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { borderRadius: "20px", maxWidth: "100%", minWidth: "528px" },
      }}
    >
      <DialogTitle
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{ alignSelf: "end", fontSize: "28px" }}
        >
          <IoCloseOutline />
        </IconButton>
        <img
          src={Delete}
          style={{
            width: "85px",
            height: "85px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "44px",
            marginBottom: "30px",
          }}
        />
        <Typography
          sx={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
        >
          Are you sure?
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ paddingX: "36px" }}>
        <Typography sx={{ textAlign: "center", fontSize: "24px" }}>
          <p>Do you really want to delete this customer?</p>
          This process can not be undone.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "55px",
            marginBottom: "67px",
            gap: "34px",
          }}
        >
          <MUIButton
            variant="contained"
            onClick={handleClose}
            sx={{
              borderRadius: "10px",
              width: "100%",
              backgroundColor: "#A5A5AF",
              color: "white",
              paddingY: "12px",
              ":hover": {
                backgroundColor: "#A5A5AF",
              },
            }}
          >
            CANCEL
          </MUIButton>
          <MUIButton
            variant="contained"
            color="error"
            onClick={onConfirm}
            sx={{
              borderRadius: "10px",
              width: "100%",
              backgroundColor: "#D80000",
              color: "white",
            }}
          >
            DELETE
          </MUIButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModel;
