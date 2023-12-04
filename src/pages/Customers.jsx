import { useMemo } from "react";
import { Box, Typography } from "@mui/material";

import Button from "@/components/ui/common/Button";
import Table from "@/components/ui/common/Table";
import CustomerModel from "@/components/ui/common/models/CustomerModel";

import useCustomer from "@/hooks/useCustomer";
import useMedia from "@/hooks/useMedia";

import { placeholderImage } from "@/config";
import DeleteModel from "@/components/ui/common/models/DeleteModel";

const Customers = () => {
  const { entities, status, showModel, action, selectedItem, isModelOpen, handleClose, onSubmit, handleDelete } = useCustomer()
  const { isMobile } = useMedia();
  const columns = useMemo(() => {
    return [
      {
        name: "avatar",
        title: "",
        RenderCell: ({ avatar = null }) => {
          return (
            <Box p={1}>
              <img src={avatar ? avatar : placeholderImage} width="70%" style={{ borderRadius: "10px" }} />
            </Box>
          );
        },
        breakpoints: {
          xs: 2,
        },
      },
      {
        name: "id",
        title: "Customer ID",
        RenderColumn: () => {
          return <Typography>Customer ID</Typography>;
        },
        RenderCell: ({ id = "Not Found" }) => {
          return (
            <Typography sx={{ color: "#5A5F65", fontSize: isMobile ? 10 : 14 }}>
              {id}
            </Typography>
          );
        },
        breakpoints: {
          xs: 3,
          sm: 3,
          md: 3,
          lg: 2,
        },
      },
      {
        name: "name",
        title: "Customer Name",
        RenderCell: ({ first_name = "", last_name = "" }) => {
          let name = "Not Found";
          if (first_name) {
            name = first_name;
          }
          if (last_name) {
            name = `${name} ${last_name}`;
          }
          return (
            <Typography sx={{ color: "#57BC90", fontSize: isMobile ? 10 : 14 }}>
              {name}
            </Typography>
          );
        },
        breakpoints: {
          xs: 3,
          sm: 3,
          md: 3,
          lg: 2,
        },
      },
      {
        name: "email",
        title: "Email",
        RenderCell: ({ email = "Not Found" }) => {
          return (
            <Typography sx={{ color: "#5A5F65", fontSize: isMobile ? 10 : 14 }}>
              {email}
            </Typography>
          );
        },
        breakpoints: {
          xs: 4,
          sm: 4,
          md: 3,
          lg: 3,
        },
      },
      {
        name: "action",
        title: "",
        RenderCell: (row) => {
          return (
            <Box width="100%" display="flex" justifyContent="space-evenly">
              <Button
                sx={stylesheet.actionBtn}
                type="success"
                onClick={() => showModel(row, "EDIT")}
              >
                Edit
              </Button>
              <Button
                sx={stylesheet.actionBtn}
                type="danger"
                onClick={() => showModel(row, "DELETE")}
              >
                Delete
              </Button>
            </Box>
          );
        },
        breakpoints: {
          lg: 3,
          md: 12,
        },
      },
    ]
  }, [showModel]);

  return (
    <Box>
      <Button style={stylesheet.btn} onClick={() => showModel(null, "ADD")}>
        <span style={stylesheet.icon}>+</span> ADD NEW CUSTOMER
      </Button>
      <Table
        loading={status === "pending"}
        columns={columns}
        rows={entities}
      />
      {isModelOpen && action !== "DELETE" ?
        (<CustomerModel
          selectedItem={selectedItem}
          isModelOpen={isModelOpen}
          onSubmit={onSubmit}
          action={action}
          handleClose={handleClose} />)
        : null}
      <DeleteModel
        open={isModelOpen && action === "DELETE"}
        handleClose={handleClose}
        onConfirm={handleDelete}
      />
    </Box>
  );
};

export default Customers;

const stylesheet = {
  btn: {
    borderRadius: "10px",
  },
  icon: {
    fontSize: 18,
    marginRight: 3,
  },
};



// const addHandler = async (name, email, image) => {

//   const avatar = await convertImageToBase64(image);
//   axios
//     .post(`http://freeimage.host/api/1/upload/?key=6d207e02198a847aa98d0a2a901485a5&source=${avatar}&format=json`)
//     .then((res) => {

//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   console.log(name, image, email);
//   console.log(avatar);
//   dispatch(
//     addItem({
//       first_name: name,
//       email,
//       avatar,
//       id: generateRandomId(),
//     })
//   );
//   setOpenAdd(false);
// };

// const editHandler = async (name, email, image) => {
//   const avatar = await convertImageToBase64(image);
//   dispatch(updateItem({ id: editId.id, name, email, avatar }));
//   setOpenEdit(false);
// };
// const deleteHandler = () => {
//   dispatch(deleteItem(editId?.id));
//   setOpenDelete(false);
// };

