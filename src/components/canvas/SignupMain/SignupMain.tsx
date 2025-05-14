'use client';

import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { SignupFormProvider } from '@/context/signupFormContext/SignupFormContext';
import SignupSteps from './SignupSteps';

// import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
// import SignupSteps from './SignupSteps';

// const SignupSteps = dynamic(() => import('./SignupSteps'));

const SignupMain = (props: Props) => {
  return (
    <>
      <h1>Signup Form</h1>
      <SignupSteps {...props} />
    </>
  );
};

export default SignupMain;
