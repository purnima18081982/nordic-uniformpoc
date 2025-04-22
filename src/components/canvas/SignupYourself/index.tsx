import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { SignupYourself } from './SignupYourself';

export type SignupYourselfProps = ComponentProps<{
  intro: string;
  step: undefined;
  firstname: string;
  lastname: string;
  describerole: string;
  discription: string;
  role: { value: [] };
  backButton: string;
  continueButton: string;
}>;

export const SignupYourselfmaping = {
  SignupYourself: SignupYourself,
};

export default SignupYourself;
