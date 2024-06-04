import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TimelineEntry } from "./timeline";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface TimelineModalProps {
  item: TimelineEntry | undefined;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export default function TimelineModal({
  item,
  open,
  handleOpen,
  handleClose,
}: TimelineModalProps) {
  if (item === undefined) {
    return <></>;
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
