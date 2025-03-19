import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { SignupStepProps } from '.';

export const SignupStep: FC<SignupStepProps> = ({ component, context }) => (
  <div className="w-1/2 text-2xl py-10">
    <UniformText context={context} component={component} parameterId="name" as="h1" />
    <UniformText context={context} component={component} parameterId="description1" as="p" />
    <UniformText context={context} component={component} parameterId="description2" as="p" />
    <br />
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        <UniformText context={context} component={component} parameterId="labelname" as="span" />
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 block w-3/4 text-sm px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter your work email"
      />
    </div>
    <button className="px-4 text-sm w-200 px-30 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
      <UniformText context={context} component={component} parameterId="buttontext" as="div" />
    </button>
  </div>
);
