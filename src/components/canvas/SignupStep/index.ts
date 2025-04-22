import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { ButtonParameters } from '@/components/canvas/Button';
import { SignupStep } from './SignupStep';

export type SignupStepProps = ComponentProps<{
  name: string;
  description1: string;
  description2: string;
  labelname: string;
  buttontext: string;
}> & {
  buttonProps?: ButtonParameters;
};

export type PasswordFieldProps = {
  onSubmit: () => void;
  context: any; // Accept the full context
  component: any; // Accept the full component
};

export const signupStepMappings = {
  signupstep: SignupStep,
};
