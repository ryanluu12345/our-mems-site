import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Carousel from "react-material-ui-carousel";
import { TimelineEntry, formatDateToMonthYear } from "./timeline";

const s3Root = "https://ailin-mems.s3.amazonaws.com";

const getImageLinks = (entry: TimelineEntry): string[] => {
  let links: string[] = [];
  for (let i = entry.startIdx; i <= entry.endIdx; i++) {
    let paddedIndex = i.toString().padStart(4, "0");
    links.push(`${s3Root}/${entry.contentRelPath}/${paddedIndex}.png`);
  }
  return links;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "50%",
  maxHeight: "80%",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  overflow: "auto",
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
  handleClose,
}: TimelineModalProps) {
  if (item === undefined) {
    return <></>;
  }

  const imageLinks = getImageLinks(item);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              alignSelf: "center",
              fontWeight: 800,
              textAlign: "center",
              fontSize: 32,
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {item.title} ({formatDateToMonthYear(item.datetime)})
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Carousel
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: 300,
                height: "100%",
                width: "80%",
              }}
            >
              {imageLinks.map((image, idx) => {
                return (
                  <Box
                    component="img"
                    sx={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                    alt="Header image."
                    src={image}
                  />
                );
              })}
            </Carousel>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, height: "80%", width: "80%", overflow: "auto" }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
