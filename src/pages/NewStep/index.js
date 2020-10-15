import React from "react";

import {
  Container,
  StepWrapper,
  StepNumber,
  StepDescription,
  Divider,
} from "./styles";

function NewStep({ steps }) {
  // console.log(steps, steps.length);

  const stepsDisplay = steps.map((step, index) => {
    return (
      <StepWrapper key={step}>
        <StepNumber>{index + 1}</StepNumber>
        <StepDescription>{step}</StepDescription>
        {index !== steps.length - 1 && <Divider />}
      </StepWrapper>
    );
  });

  return <Container>{stepsDisplay}</Container>;
}

export default NewStep;
