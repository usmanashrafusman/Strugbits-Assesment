import React, { useEffect, useState, useRef } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, IconButton, Typography, Button as MUIButton } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import modelHeader from "@/assets/model_back.png";
import Button from "../Button";
import { convertImageToBase64 } from "@/utils";

const DIALOG_TITLES = {
  ADD: {
    title: "Add New Customer",
    btnText: "Add Customer"
  },
  EDIT: {
    title: "Edit Customer",
    btnText: "Edit Customer"
  }
}

const CustomDialog = (props) => {
  const { action, isModelOpen, selectedItem, handleClose, onSubmit } = props;
  const { title = "", btnText = "" } = DIALOG_TITLES[action] || {}

  const avatar = useRef(null)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    isValidName: true,
    isValidEmail: true
  });

  useEffect(() => {
    if (selectedItem) {
      setName(`${selectedItem.first_name} ${selectedItem.last_name}`)
      setEmail(selectedItem.email)
    }
  }, [selectedItem]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePhotoUpload = (event) => {
    if (event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      avatar.current = selectedFile
    }
  };

  const handleSubmit = async () => {
    const errors = validaData({ name, email });
    let image = selectedItem?.avatar;
    if (avatar.current) {
      image = await convertImageToBase64(avatar.current)
    }
    if (errors.isValid) {
      onSubmit({ name, email, avatar: image })
    }
    setErrors(errors)
  }
  return (
    <Dialog
      open={isModelOpen}
      onClose={handleClose}
      PaperProps={{
        sx: { borderRadius: "20px", maxWidth: "100%", minWidth: "528px" },
      }}
    >
      <DialogTitle
        style={{
          background: `url(${modelHeader})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{ alignSelf: "end", color: "white", fontSize: "28px" }}
        >
          <IoCloseOutline />
        </IconButton>
        <Typography
          sx={{ textAlign: "center", color: "white", fontSize: "40px" }}
        >
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ paddingX: "36px" }}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Customer Name"
          value={name}
          onChange={handleChangeName}
          style={{
            marginTop: "57px",
            marginBottom: "30px",
            border: "1px solid #DCDBDD",
            borderRadius: 10,
          }}
          error={!errors.isValidName}
          helperText={!errors.isValidName && "Invalid Name"}
          inputProps={{ style: { padding: "12px" } }}
        />
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Email"
          value={email}
          error={!errors.isValidEmail}
          helperText={!errors.isValidEmail && "Invalid Email"}
          onChange={handleChangeEmail}
          style={{
            marginBottom: "24px",
            border: "1px solid #DCDBDD",
            borderRadius: 10,
          }}
          inputProps={{ style: { padding: "12px" } }}
          type="email"
        />
        <div>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="upload-photo"
            onChange={handlePhotoUpload}
          />
          <label htmlFor="upload-photo">
            <MUIButton
              variant="text"
              component="span"
              sx={{
                color: "#57BC90",
                textDecoration: "underline",
                fontSize: "14px",
              }}
            >
              Upload Photo
            </MUIButton>
          </label>
          {avatar && (
            <span style={{ marginLeft: "8px" }}>{avatar?.name}</span>
          )}
        </div>
        <Button
          onClick={handleSubmit}
          color="primary"
          sx={{
            width: "100%",
            borderRadius: "10px",
            marginTop: "55px",
            marginBottom: "67px",
          }}
        >
          {btnText}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;


const validaData = (data) => {
  const validateEmailRegex = /^\S+@\S+\.\S+$/;
  let isValidName = true;
  const isValidEmail = validateEmailRegex.test(data.email);
  if (data?.name) {
    const [first_name, last_name] = data?.name.split(" ");
    if (!first_name) {
      isValidName = false
    } else if (!last_name) {
      isValidName = false
    }
  } else {
    isValidName = false
  }
  return {
    isValidEmail,
    isValidName,
    isValid: isValidEmail && isValidName
  }
}
