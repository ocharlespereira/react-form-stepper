import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

// import { Container } from './styles';

export const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});
