import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";

import Cadastro from "./pages/Cadastro";
import Endereco from "./pages/Endereco";
import Telefone from "./pages/Telefone";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Cadastro", "Endereço", "Telefone"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Cadastro />;
    case 1:
      return <Endereco />;
    case 2:
      return <Telefone />;
    default:
      return;
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  console.log(activeStep, getSteps().length);

  const totalSteps = () => {
    return getSteps().length;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  function handleAllSteps() {}

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                disabled={activeStep > 1}
                // completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>

      <div>
        <div className={classes.instructions}>{getStepContent(activeStep)}</div>

        <div>
          {activeStep > 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Voltar
            </Button>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            Next
          </Button>

          {activeStep === 1 && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleAllSteps}
              className={classes.button}
            >
              Concluir Cadastro
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
