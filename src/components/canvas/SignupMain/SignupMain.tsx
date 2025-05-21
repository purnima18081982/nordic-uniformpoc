'use client';

import React, { FC } from 'react';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { useSignUpFormStore } from '../../../../stores/sign-up-form';

interface SignupMainProps {
  // Define the props expected by SignupSteps and any additional props here
  [key: string]: unknown;
}

type SignupStepSlots =
  | 'credentialsForm'
  | 'signUpStepOne'
  | 'signUpStepTwo'
  | 'signUpStepThree'
  | 'signUpStepFour'
  | 'whatWeOfferComponent'
  | 'signUpOptions';

type SignUpStepsPropsMain = ComponentProps<SignupMainProps, SignupStepSlots>;

const SignupMain: FC<SignUpStepsPropsMain> = props => {
  const { showPassword, formStepNumber, setFormStepNumberIncrement, setFormStepNumberDecrement } = useSignUpFormStore();

  function handleNextStep(): void {
    // Validations

    setFormStepNumberIncrement();
  }

  function handleBackStep(): void {
    // Validations
    setFormStepNumberDecrement();
  }

  const percentage = (formStepNumber / 4) * 100;

  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 xl:px-0">
        {formStepNumber === 0 && (
          <div className="flex flex-col gap-2 lg:flex-row ">
            <div className="w-3/5">
              <UniformSlot data={props.component} context={props.context} slot={props.slots.credentialsForm} />
              {!showPassword && (
                <UniformSlot data={props.component} context={props.context} slot={props.slots.signUpOptions} />
              )}
            </div>

            <div className="w-2/5">
              <UniformSlot data={props.component} context={props.context} slot={props.slots.whatWeOfferComponent} />
            </div>
          </div>
        )}
        {formStepNumber >= 1 && (
          <div className="flex flex-col gap-4 py-8">
            <h2 className="text-3xl font-thin">Tell Us About Your Work</h2>

            <div>
              <p className="mb-2">Step {formStepNumber} / 4</p>
              <div
                className="h-1 rounded-full bg-blue-500 transition-all duration-300 ease-in-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            {formStepNumber === 1 && (
              <UniformSlot data={props.component} context={props.context} slot={props.slots.signUpStepOne} />
            )}

            {formStepNumber === 2 && (
              <UniformSlot data={props.component} context={props.context} slot={props.slots.signUpStepTwo} />
            )}

            {formStepNumber === 3 && (
              <UniformSlot data={props.component} context={props.context} slot={props.slots.signUpStepThree} />
            )}

            {formStepNumber === 4 && (
              <UniformSlot data={props.component} context={props.context} slot={props.slots.signUpStepFour} />
            )}

            <div className="flex w-full items-center justify-between gap-2">
              <button className="w-1/12 bg-blue-400 px-4 py-2 text-white" type="button" onClick={handleBackStep}>
                Back
              </button>
              <button className="w-1/12 bg-blue-400 px-4 py-2 text-white" type="submit" onClick={handleNextStep}>
                {formStepNumber === 4 ? 'Finish' : 'Continue'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 
      {formStepNumber === 1 && (
        <UniformSlot data={props.component} context={props.context} slot={props.slots.step1FormComponent} />
      )}

      {formStepNumber === 2 && (
        <UniformSlot data={props.component} context={props.context} slot={props.slots.step2FormComponent} />
      )} */}
    </>
  );
};

export default SignupMain;
