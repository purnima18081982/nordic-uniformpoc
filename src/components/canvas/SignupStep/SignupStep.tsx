import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { ButtonProps } from '@/components/ui/Button'; // Import ButtonProps from the correct location
import Button from '@/components/ui/Button';
import { SignupStepProps } from '.';

export const SignupStep: FC<SignupStepProps & { buttonProps?: ButtonProps }> = ({
  component,
  context,
  buttonProps,
}) => {
  const myButtonStyles: ButtonProps = {
    buttonColor: 'blue-500',
    textColor: 'white',
    textSize: 'sm',
    hoverButtonColor: 'blue-700',
    hoverTextColor: 'gray-100',
    size: '3',
    textWeight: 'normal',
    border: 'border-1 border-blue-700',
  };

  return (
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
          className="mt-1 block w-3/4 text-sm px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your work email"
        />
      </div>
      <Button {...(buttonProps || myButtonStyles)} className="py-1 px-3">
        <UniformText context={context} component={component} parameterId="buttontext" />
      </Button>
    </div>
  );
};
