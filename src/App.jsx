import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import CardFront from "./Components/CardFront";
import CardBack from "./Components/CardBack";
function App() {
  return (
    <Box>
      <CardFront />
      <CardBack />
    </Box>
  );
}
export default App;
