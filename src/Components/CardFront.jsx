import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function CardFront() {
  return (
    <Box className={"card_front"}>
      <Box className={"form-style"}>
        <TextField label="Username" />
        <TextField label="Email" />
        <TextField label="Password" />
        <TextField label="Re-Password" />
        <Button variant="contained" color="secondary">
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
}
export default CardFront;
