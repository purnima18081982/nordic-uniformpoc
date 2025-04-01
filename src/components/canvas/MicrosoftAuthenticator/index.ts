import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import MicrosoftAuthenticator from './MicrosoftAuthenticator';
import { ReactNode } from 'react';

export type MicrosoftAuthenticatorProps = ComponentProps<{
  title: { value: string };
  descriptionTitle: { value: string };
}>;

export const MicrosoftAuthenticatorMappings = {
  microsoftAuthenticator: MicrosoftAuthenticator,
};

export default MicrosoftAuthenticator;
