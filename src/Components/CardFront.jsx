import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
function CardFront() {
  return (
    <Box className={"card_front"}>
      <Typography
        sx={{
          color: "cadetblue",
          fontWeight: "900",
          fontFamily: "Dosis, sans-serif !important",
          fontSize: "x-large",
        }}
      >
        Join to My World!
      </Typography>
      <FormControl className={"form-style"}>
        <TextField label="Username" />
        <TextField label="Email" />
        <TextField label="Password" />
        <TextField label="Re-Password" />
        <Button variant="contained" color="secondary">
          SUBMIT
        </Button>
      </FormControl>
      <Link href="#" underline="none" sx={{ color: "cadetblue" }}>
        You Have Account ?
      </Link>
    </Box>
  );
}
export default CardFront;
