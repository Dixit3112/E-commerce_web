import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: "black", fontWeight: 700 }}>
        Sign in
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col text-base">
            <input
              type="text"
              placeholder="UserName"
              className="border-0 rounded-xl my-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-0 rounded-xl my-2"
            />
            <Button
              variant="contained"
              style={{
                background: "var(--primary-bg-color)",
                color: "var(--font-light-color)",
                marginLeft: "20px",
                padding: "5px 10px",
              }}
              className="mb-3"
            >
              Sign In
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
