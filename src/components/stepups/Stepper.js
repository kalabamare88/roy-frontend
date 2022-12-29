import { StyledStepperHeader, StyledStepperHeaderItem } from "./StepperHeader";

import React from "react";
import { useSelector } from "react-redux";

import { StepperStep , StepperSteps, } from "./StepperSteps";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Stepper = ({ children }) => {
  const { currentStep } = useSelector(
    (state) => state.appControllers
  );
  const steps = [
    {
      id: 'first',
      name: 'Step 1'
    },
    {
      id: 'second',
      name: 'Step 2'
    },
    {
      id: 'third',
      name: 'Step 3'
    },
   
  ];

  return (
    <StyledStepperContainer>
      <StyledStepperHeader>
        {steps.length
          ? steps.map((step, index) => (
              <StyledStepperHeaderItem
                key={step.id}
                className={`list-md ${currentStep >= index ? "completed " : ""} ${
                  currentStep === index ? "currentform " : ""
                }`}
              >
                <div className="step-counter">{index + 1}</div>
                <div className="step-name">
                  {step.name === "Step 1" && (
                    <div className="ant-steps-item-content">
                      <div
                        className={`ant-steps-item-title ${
                          currentStep >= index ? "form-up" : ""
                        }`}
                      >
                       Personal Info 
                      </div>
                      <div className="ant-steps-item-description">
                       fill some lists about you
                      </div>
                    </div>
                  )}
                  {step.name === "Step 2" && (
                    <div className="ant-steps-item-content">
                      <div
                        className={`ant-steps-item-title ${
                          currentStep >= index ? "form-up" : ""
                        }`}
                      >
                       About
                      </div>
                      <div className="ant-steps-item-description">
                      fill some lists about you
                      </div>
                    </div>
                  )}
                  {step.name === "Step 3" && (
                    <div className="ant-steps-item-content">
                      <div
                        className={`ant-steps-item-title ${
                          currentStep >= index ? "form-up" : ""
                        }`}
                      >
                      Summary
                      </div>
                      <div className="ant-steps-item-description">
                       please check before you submit
                      </div>
                    </div>
                  )}
                
                </div>
              </StyledStepperHeaderItem>
            ))
          : null}
      </StyledStepperHeader>
      <StyledStepperBody>{children}</StyledStepperBody>
    </StyledStepperContainer>
  );
};

Stepper.Step = StepperStep;
Stepper.Steps = StepperSteps;

const StyledStepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top:31px;
`;

const StyledStepperBody = styled.div`
  padding: 50px 0;
`;

export default Stepper;
