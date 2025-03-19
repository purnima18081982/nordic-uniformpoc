import { FC } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { HelloWorldProps } from '.';

export const HelloWorld: FC<HelloWorldProps> = ({ component, context }) => (
  <div className={classNames('flex flex-col mx-1 md:mx-10')}>
    <UniformText context={context} component={component} parameterId="title" as="h1" />

    <UniformText context={context} component={component} parameterId="description" as="h1" />
  </div>
);
