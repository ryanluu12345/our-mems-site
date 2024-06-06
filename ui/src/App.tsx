import { Box, Typography } from "@mui/material";

import "./App.css";
import Header from "./components/header";
import BasicTimeline from "./components/timeline";
import Letter from "./components/letter";

const temeculaBackground = "/20220930-Temecula-0190.jpg";

function App() {
  // TODO: play around with tint color.
  return (
    <Box className="App">
      <div id="home"></div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
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
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "flex-start",
            paddingLeft: 8,
          }}
        >
          <Typography variant="h1">Happy 2 Year Anniversary, Ailin!</Typography>
          <Typography color={"white"} variant="h2">
            Cheers to many more memories
          </Typography>
        </Box>
      </Box>
      <BasicTimeline />
      <Letter />
    </Box>
  );
}

export default App;
