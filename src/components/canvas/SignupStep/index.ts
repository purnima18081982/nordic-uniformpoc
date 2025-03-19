import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { SignupStep } from './SignupStep';

export type SignupStepProps = ComponentProps<{
  name: string;
  description1: string;
  description2: string;
  labelname: string;
  buttontext: string;
}>;

export const signupStepMappings = {
  signupstep: SignupStep,
};

export default SignupStep;
