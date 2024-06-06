import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TimelineEntry, formatDateToMonthYear } from "./timeline";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: 2,
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                borderRadius: 2,
                objectFit: "cover",
              }}
              alt="Header image."
              src={item.headerImg}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {item.title} ({formatDateToMonthYear(item.datetime)})
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, height: 250, overflow: "auto" }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
