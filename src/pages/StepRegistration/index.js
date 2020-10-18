import React, { useState } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";

import NewStep from "../components/NewStep";

import Cadastro from "./Cadastro";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DEA22F",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  StepLabel: {
    background: "red",
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
  return ["Dados paciente", "Convenio", "Endereço", "Contato", "Biometria"];
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

export default function StepRegistration() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  // console.log(activeStep, getSteps().length);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((state) => state + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((state) => state - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  function handleAllSteps() {}

  return (
    <div className={classes.root}>
      {/* <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel
                onClick={handleStep(index)}
                // disabled={activeStep > 1}
                // completed={isStepComplete(index)}
                // {...buttonProps}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper> */}
      <NewStep steps={steps} activeStep={1} />
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
