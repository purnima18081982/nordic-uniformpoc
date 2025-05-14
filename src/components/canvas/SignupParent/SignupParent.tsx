'use client';

import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';

import { BaseSignupParent } from '@/components/ui/SignupParent/SignupParent';
import { SignUpParentProps } from '.';

export const SignupParent: FC<SignUpParentProps> = ({ slots, component, context }) => (
  <BaseSignupParent countOfItems={slots.signupFormInput?.items.length ?? 0}>
    <UniformSlot context={context} slot={slots.signupforminput} data={component} />
  </BaseSignupParent>
);
