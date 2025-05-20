import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { SignupParent } from './SignupParent';

export enum SignupSlots {
  Items = 'signupFormInput',
}

export type SignUpParentProps = ComponentProps<SignupSlots>;

export const SignupParentMappings = {
  signupparent: SignupParent,
};
