import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { HelloWorld } from './HelloWorld';

export type HelloWorldProps = ComponentProps<{
  title: string;
  description: string;
}>;

export const helloWorldMappings = {
  helloworld: HelloWorld,
};

export default HelloWorld;
