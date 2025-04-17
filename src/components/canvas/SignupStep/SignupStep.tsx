import { FC } from 'react';
import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { ButtonProps } from '@/components/ui/Button'; // Import ButtonProps from the correct location
import { SignupStepProps } from '.';

export const SignupStep: FC<SignupStepProps & { buttonProps?: ButtonProps }> = ({ component, context, slots }) => {
  return (
    <div className="w-full py-4">
      <UniformText context={context} component={component} parameterId="name" as="h1" className="text-4xl" />
      <UniformText context={context} component={component} parameterId="description1" as="div" className="text-4xl" />
      <UniformText context={context} component={component} parameterId="description2" as="div" className="text-4xl" />
      <br />
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          <UniformText context={context} component={component} parameterId="labelname" as="span" />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-3/4 border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your work email"
        />
      </div>
      {/* Continue button */}
      <UniformSlot data={component} context={context} slot={slots.submitButton} />
    </div>
  );
};
