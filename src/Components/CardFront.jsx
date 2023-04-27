import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
function CardFront() {
  return (
    <Box className={"card_front"}>
      <FormControl className={"form-style"}>
        <TextField label="Username" />
        <TextField label="Email" />
        <TextField label="Password" />
        <TextField label="Re-Password" />
        <Button variant="contained" color="secondary">
          SUBMIT
        </Button>
      </FormControl>
    </Box>
  );
}
export default CardFront;
