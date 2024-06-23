import { useRef } from "react";
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";

import "./App.css";
import Header from "./components/header";
import BasicTimeline from "./components/timeline";
import Letter from "./components/letter";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Yellowtail", "cursive"].join(","),
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: ["Inter", "Yellowtail", "cursive"].join(","),
        },
      },
    },
  },
});

const temeculaBackground = "/20220930-Temecula-0190.jpg";

function App() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <div id="home"></div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${temeculaBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: `rgba(150,150,100,0.35)`,
            backgroundBlendMode: "multiply",
            height: "100vh",
          }}
        >
          <Header letterRef={letterRef} timelineRef={timelineRef} />
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
            <Typography variant="h1">
              Happy 2 Year Anniversary, Ailin!
            </Typography>
            <Typography color={"white"} variant="h2">
              Cheers to many more memories
            </Typography>
          </Box>
        </Box>
        <Letter letterRef={letterRef} />
        <BasicTimeline timelineRef={timelineRef} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
