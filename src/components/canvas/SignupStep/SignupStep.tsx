'use client';

import { FC, useState } from 'react';
import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { SignupStepProps } from '.';
import PasswordField from './PasswordField';
import { useSignUpFormStore } from '../../../../stores/sign-up-form';
// import Input from '../Input/Input';

export const SignupStep: FC<SignupStepProps> = ({ component, context, slots }) => {
  const { setEmail, showPassword, setShowPassword, formData, setFormStepNumberIncrement } = useSignUpFormStore();

  const handleContinueClick = () => {
    setShowPassword(true);
  };

  const handleLoginSubmit = () => {
    if (formData.email !== '' && formData.password !== '') {
      setFormStepNumberIncrement();
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle email change logic here
    console.info('Email changed:', event.target.value);
    setEmail(event.target.value);
  };

  return (
    <div className="w-full py-10 text-2xl">
      <div className="mb-6">
        <UniformText
          context={context}
          component={component}
          parameterId="name"
          as="h1"
          className="mb-2 text-4xl font-normal"
        />
        <UniformText
          context={context}
          component={component}
          parameterId="description1"
          as="p"
          className="mb-2 text-4xl font-normal"
        />
        <UniformText
          context={context}
          component={component}
          parameterId="description2"
          as="p"
          className="mb-2 text-4xl font-normal"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          <UniformText context={context} component={component} parameterId="labelname" as="span" />
        </label>

        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your work email"
          onChange={handleEmailChange}
        />
      </div>

      {showPassword && (
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
        {!showPassword && <UniformSlot data={component} context={context} slot={slots.submitButton} />}
      </div>
    </div>
  );
};
