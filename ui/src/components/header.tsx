import { Box, Link } from "@mui/material";

export default function Header() {
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
          backgroundColor: "rgba(0,0,0,0.1)",
          borderBottomStyle: "none",
        }}
      >
        <Link
          color={"white"}
          fontSize={28}
          fontWeight={400}
          href="#home"
          underline="none"
        >
          Home
        </Link>
        <Link
          color={"white"}
          fontSize={28}
          fontWeight={400}
          href="#timeline"
          underline="none"
        >
          Timeline
        </Link>
        <Link
          color={"white"}
          fontSize={28}
          fontWeight={400}
          href="#letter"
          underline="none"
        >
          Letter
        </Link>
      </Box>
    </div>
  );
}
