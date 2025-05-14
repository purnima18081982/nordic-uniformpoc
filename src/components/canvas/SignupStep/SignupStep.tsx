'use client';

import { FC, useState } from 'react';
import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { SignupStepProps } from '.';
import PasswordField from './PasswordField';
// import Input from '../Input/Input';

export const SignupStep: FC<SignupStepProps> = ({ component, context, slots }) => {
  const [showPasswordField, setShowPasswordField] = useState(false);

  console.log('the context are', context);

  const handleContinueClick = () => {
    setShowPasswordField(true);
  };

  const handleLoginSubmit = () => {
    //console.log('Login submitted');
  };

  return (
    <div className="w-full py-10 text-2xl">
      <UniformText context={context} component={component} parameterId="name" as="h1" />
      <UniformText context={context} component={component} parameterId="description1" as="div" />
      <UniformText context={context} component={component} parameterId="description2" as="div" />
      <br />
      <div className="mb-4">
        {/* <Input
          name="firstName"
          id="firstName"
          label="First Name"
          placeholder="Enter First Name"
          type="text"
          required={true}
          defaultValue={undefined}
          disabled={false}
          component={component}
          context={context}
          slots={slots}
          slotName={undefined}
          slotIndex={undefined}
        /> */}

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

      {showPasswordField && (
        <PasswordField
          onSubmit={handleLoginSubmit}
          context={context}
          component={component}
          slots={slots}
          slotName={undefined}
          slotIndex={undefined}
        />
      )}
      <div onClick={handleContinueClick}>
        {!showPasswordField && <UniformSlot data={component} context={context} slot={slots.submitButton} />}
      </div>
    </div>
  );
};
