import { ComponentProps, CompositionContext } from '@uniformdev/canvas-next-rsc/component';
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

export type PasswordFieldProps = ComponentProps<{
  onSubmit: () => void;
}>;

export interface MyCustomContext extends CompositionContext {
  onClick?: () => void;
}

export const signupStepMappings = {
  signupstep: SignupStep,
};
