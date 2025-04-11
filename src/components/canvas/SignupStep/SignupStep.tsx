import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { ButtonProps } from '@/components/ui/Button'; // Import ButtonProps from the correct location
import Button from '@/components/ui/Button';
import { SignupStepProps } from '.';
import NordicButton from '../NordicButton';

export const SignupStep: FC<SignupStepProps & { buttonProps?: ButtonProps }> = ({
  component,
  context,
  buttonProps,
  slots,
  slotIndex,
  slotName,
}) => {
  const myButtonStyles: ButtonProps = {
    buttonColor: 'blue-500',
    textColor: 'black',
    textSize: 'sm',
    hoverButtonColor: 'blue-700',
    hoverTextColor: 'gray-100',
    size: '3',
    textWeight: 'normal',
    border: 'border-1 border-blue-700',
  };

  return (
    <div className="w-full py-10">
      <UniformText
        context={context}
        component={component}
        parameterId="name"
        as="h1"
        className="text-5xl font-medium leading-[3.5rem]"
      />
      <UniformText
        context={context}
        component={component}
        parameterId="description1"
        as="div"
        className="text-5xl font-medium leading-[3.5rem]"
      />
      <UniformText
        context={context}
        component={component}
        parameterId="description2"
        as="div"
        className="text-5xl font-medium leading-[3.5rem]"
      />
      <br />
      <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 ">
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
      <Button
        {...(buttonProps || myButtonStyles)}
        className="bg-blue-500 px-4 py-2 text-base text-white transition-all duration-300 ease-in-out hover:bg-blue-600"
      >
        <UniformText context={context} component={component} parameterId="buttontext" />
      </Button>
      <NordicButton component={component} context={context} slots={slots} slotName={slotName} slotIndex={slotIndex} />
    </div>
  );
};
