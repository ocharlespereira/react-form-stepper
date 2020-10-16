import React, { useCallback, useEffect, useState } from "react";

import {
  Container,
  StepWrapper,
  StepNumber,
  StepDescription,
  Divider,
} from "./styles";

function NewStep({ steps, activeStep }) {
  const [stepsArray, setStepsArray] = useState([]);
  const [onStep, setOnStep] = useState(0);

  useEffect(() => {
    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.completed = false;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      return stepObj;
    });

    const activeSteps = updateStep(onStep, stepsState); //onStep ou activeStep

    setStepsArray(activeSteps);
  }, [activeStep, steps, onStep]); // eslint-disable-line

  const updateStep = useCallback((stepNumber, steps) => {
    const newSteps = [...steps];
    let stepCounter = 0;

    while (stepCounter < newSteps.length) {
      if (stepCounter === stepNumber) {
        //current step
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      } else if (stepCounter < stepNumber) {
        //past step
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      } else {
        //future step
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }

    return newSteps;
  }, []);

  const handleStep = useCallback(
    (stepNumber) => {
      setOnStep(stepNumber);
      console.log(onStep);
    },
    [onStep]
  );

  const stepsDisplay = stepsArray.map((step, index) => {
    return (
      <StepWrapper key={step}>
        <StepNumber
          active={step.selected ? true : false}
          onClick={() => {
            handleStep(index);
          }}
        >
          {step.completed ? <span>&#10003;</span> : index + 1}{" "}
        </StepNumber>
        <StepDescription active={step.highlighted ? true : false}>
          {step.description}
        </StepDescription>
        {index !== steps.length - 1 && <Divider />}
      </StepWrapper>
    );
  });

  return <Container>{stepsDisplay}</Container>;
}

export default NewStep;
