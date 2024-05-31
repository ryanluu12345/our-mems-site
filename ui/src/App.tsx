import { Box, Typography } from "@mui/material";

import "./App.css";
import Header from "./components/header";
import BasicTimeline from "./components/timeline";

const temeculaBackground = "/20220930-Temecula-0190.jpg";

function App() {
  // TODO: play around with tint color.
  return (
    <Box className="App">
      <Box
        sx={{
          display: "flex",
          backgroundImage: `url(${temeculaBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: `rgba(150,150,100,0.3)`,
          backgroundBlendMode: "multiply",
          height: "100vh",
        }}
      >
        <Header />
        <Box
          sx={{
            alignSelf: "center",
          }}
        >
          <Typography variant="h1">Happy 2 Year Anniversary</Typography>
          <Typography
            color={"white"}
            variant="h2"
            sx={{
              alignSelf: "center",
            }}
          >
            Cheers to many more memories
          </Typography>
        </Box>
      </Box>
      <BasicTimeline />
    </Box>
  );
}

export default App;
