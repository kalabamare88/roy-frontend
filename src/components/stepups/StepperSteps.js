import React from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export const StepperSteps = function ({ children }) {
  const { currentStep } = useSelector((state) => state.appControllers);
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
    <div>
      {children &&
        React.Children.map(children, (child) => {
          if (steps.length) {
            return child.props.id === steps[currentStep].id ? child : null;
          }
        })}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const StepperStep = function ({ children }) {
  return <>{children}</>;
};
