import { Box, Typography } from "@mui/material";
import "./letter.css";

export default function Letter() {
  return (
    <div id="letter">
      <Box className="container">
        <Box className="wrapper">
          <Box className="lid one"></Box>
          <Box className="lid two"></Box>
          <Box className="envelope"></Box>
          <Box className="letter">
            <Typography fontWeight={800}>To my dear, Ailin</Typography>
            <Typography variant="body2" sx={{ textAlign: "left" }}>
              Looking through our memories, I'm always impressed by how much
              we've overcome, experienced, and continue to learn. I'm most
              thankful that I can do life with someone who is as optimistic,
              empathetic, and fun as you. I never knew the effect that a single
              person could have on me until I met you. You've really encouraged
              me to prioritize my family more, process things healthily, give
              myself grace, and show unconditional love to those around me.
              Thanks for teaching me what unconditional love means by
              demonstrating it daily. I hope that we can continue to love each
              other more each day as we encounter the challenges and life
              experiences of the future. You're truly a special person and I
              can't wait for us to make more memories, deepen our relationship,
              and experience every single life milestone together. Happy two
              years' anniversary bub!
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
