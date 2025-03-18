import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { HelloWorldProps } from '.';

export const HelloWorld: FC<HelloWorldProps> = ({ component, context }) => (
  <>
    <UniformText context={context} component={component} parameterId="title" as="h1" />

    <UniformText context={context} component={component} parameterId="description" as="h1" />
  </>
);
