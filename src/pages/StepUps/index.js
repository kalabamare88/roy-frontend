import "./index.css";

import StepOne from "../../components/stepups/stepBodies/stepOne";
import StepThree from "../../components/stepups/stepBodies/stepThree";
import StepTwo from "../../components/stepups/stepBodies/stepTwo";
import Stepper from "../../components/stepups/Stepper";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initialData={
  name:"",
  sport:[],
  gender:"",
  dob:"",
  description:"",
  location:"",
  team:""
}


const StepSubComponents = [StepOne, StepTwo, StepThree];

const StepUps = () => {

  
  const { currentStep } = useSelector(
    (state) => state.appControllers
  );

  const dispatch = useDispatch();

  const incrementStep = () => {
    dispatch({
      type: "setstep",
      payload: currentStep + 1,
    });
  };

  const decrementStep = () => {
    dispatch({
      type: "setstep",
      payload: currentStep - 1,
    });
  };
  const steps = [
    {
      id: "first",
      name: "Step 1",
    },
    {
      id: "second",
      name: "Step 2",
    },
    {
      id: "third",
      name: "Step 3",
    },
  ];

  const navigate = useNavigate();
  const routeChange = () => {
    dispatch({
      type: "setstep",
      payload: 0,
    });
    let path = "/lists";
    navigate(path);
  };

  
  return (
    <div className="create-form-container mt-24 md:mt-0 ">
      <Stepper>
        <Stepper.Steps>
          {steps.map((step, index) => {
            return (
              <Stepper.Step id={step.id} key={index} name={step.name}>
                <StepBody>
                  {StepSubComponents[index]()}
                  <div className="btn-pages-container">
                    {index !== 0 && index !== 3 && (
                      <Button
                        className="btn-pages prv-step"
                        onClick={decrementStep}
                      >
                        Previous step
                      </Button>
                    )}
                    {index !== steps.length - 1 && index !== 2 && (
                      <Button
                        className="btn-pages step-btn"
                        onClick={incrementStep}
                      >
                        Next
                      </Button>
                    )}
                    {index === 2 && (
                      <Button
                        className="btn-pages step-btn"
                        onClick={routeChange}
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </StepBody>
              </Stepper.Step>
            );
          })}
        </Stepper.Steps>
      </Stepper>
    </div>
  );
};

const StepBody = styled.div`
  text-align: center;
  margin-top: -20px;
`;

const Button = styled.button`
  margin: 0 20px;
  cursor: pointer;
  outline: none;
  background: #fff;
  border: 1px solid #000;
  padding: 6px 12px;
`;

export default StepUps;
