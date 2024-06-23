import { RefObject } from "react";
import { Box, Link } from "@mui/material";

interface HeaderProps {
  letterRef: RefObject<HTMLDivElement>;
  timelineRef: RefObject<HTMLDivElement>;
}

export default function Header({ letterRef, timelineRef }: HeaderProps) {
  console.log(letterRef, timelineRef);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "stretch",
          alignItems: "center",
          height: "70px",
          width: "100%",
          gap: 2,
          px: 2,
          py: 1,
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05))",
          borderBottomStyle: "none",
        }}
      >
        <Link
          color={"white"}
          fontSize={28}
          fontWeight={400}
          href="#"
          underline="none"
          onClick={() => {
            if (letterRef.current) {
              letterRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Letter
        </Link>
        <Link
          color={"white"}
          fontSize={28}
          fontWeight={400}
          href="#"
          underline="none"
          onClick={() => {
            if (timelineRef.current) {
              timelineRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Timeline
        </Link>
      </Box>
    </div>
  );
}
