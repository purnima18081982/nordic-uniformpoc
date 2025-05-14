'use client';

import { useState } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';

const SignupSteps = props => {
  const [formStep, setFormState] = useState(1);

  function handleNextStep() {
    // Validations

    setFormState(prev => prev + 1);
  }

  function handleBackStep() {
    // Validations

    setFormState(prev => prev - 1);
  }

  const newContext = { ...props.context, parentData: 'Mehul' };

  return (
    <>
      {formStep === 1 && (
        <UniformSlot data={props.component} context={newContext} slot={props.slots.step1FormComponent} />
      )}

      {formStep === 2 && (
        <UniformSlot data={props.componnet} context={props.context} slot={props.slots.step2FormComponent} />
      )}

      <div>
        <button onClick={handleNextStep}>Next</button>
        <button onClick={handleBackStep}>Back</button>
      </div>
    </>
  );
};

export default SignupSteps;
