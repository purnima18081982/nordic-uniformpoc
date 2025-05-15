'use client';

import { FC } from 'react';
import SignupSteps from './SignupSteps';
import { useSignUpFormStore } from '../../../../stores/sign-up-form';

interface SignupMainProps {
  // Define the props expected by SignupSteps and any additional props here
  [key: string]: unknown;
}

const SignupMain: FC<SignupMainProps> = props => {
  const { formData } = useSignUpFormStore();

  return (
    <>
      <SignupSteps {...props} />
    </>
  );
};

export default SignupMain;
