import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { SignupStep4 } from './SignupStep4';

export type SignupStep4Props = ComponentProps<{
  description: { root: { children: { value: [] } } };
  icon: { value: [] };
  heading: { value: [] };
  emailtype: { emailtype: { value: [] } };
}>;

export const SignupStep4maping = {
  SignupStep4: SignupStep4,
};

export default SignupStep4;
