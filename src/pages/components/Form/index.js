import React from "react";

// import { Container } from './styles';

function Form({ children, ...props }) {
  return (
    <form noValidate {...props}>
      {children}
    </form>
  );
}

export default Form;
