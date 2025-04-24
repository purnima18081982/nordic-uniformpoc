import React, { useState } from 'react';
import Image from 'next/image';
import { UniformText, UniformRichText, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { PasswordFieldProps } from '.';

const PasswordField: React.FC<PasswordFieldProps> = ({ onSubmit, context, component, slots }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Access image parameters from Uniform and extract the URL
  const eyeIcon = (component?.parameters?.eyeicon?.value as { fields: { url: { value: string } } }[] | undefined)?.[0]
    ?.fields?.url?.value;

  const doubleTickIcon = (
    component?.parameters?.doubletick?.value as { fields: { url: { value: string } } }[] | undefined
  )?.[0]?.fields?.url?.value;

  const dotIcon = (component?.parameters?.dot?.value as { fields: { url: { value: string } } }[] | undefined)?.[0]
    ?.fields?.url?.value;

  // Password validation rules
  const validations = {
    minLength: password.length >= 8,
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  // Check if all validations are fulfilled
  const isValid =
    validations.minLength &&
    validations.hasLowercase &&
    validations.hasUppercase &&
    validations.hasNumber &&
    validations.hasSpecialChar;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderValidationIcon = (isValid: boolean) => {
    return (
      <span className="mr-2 flex items-center">
        {isValid ? (
          <Image
            src={doubleTickIcon || ''} // Provide a fallback value
            alt="Double Tick"
            width={20} // Set the width of the image
            height={20} // Set the height of the image
          />
        ) : (
          <Image
            src={dotIcon || ''} // Provide a fallback value
            alt="Dot"
            width={20} // Set the width of the image
            height={20} // Set the height of the image
          />
        )}
      </span>
    );
  };

  return (
    <>
      <div className="mt-6">
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            <UniformText context={context} component={component} parameterId="passwordlabel" as="span" />
          </label>
          <div className="relative w-3/4">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Image
                src={eyeIcon || ''} // Provide a fallback value
                alt="Toggle Password Visibility"
                width={20} // Set the width of the image
                height={20} // Set the height of the image
                className="size-5"
              />
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p>Must include:</p>
          <ul className="mt-2 space-y-1">
            <li className={`flex items-center ${validations.minLength ? 'text-green-600' : 'text-gray-600'}`}>
              {renderValidationIcon(validations.minLength)} Minimum 8 characters long
            </li>
            <li className={`flex items-center ${validations.hasLowercase ? 'text-green-600' : 'text-gray-600'}`}>
              {renderValidationIcon(validations.hasLowercase)} One lowercase letter
            </li>
            <li className={`flex items-center ${validations.hasUppercase ? 'text-green-600' : 'text-gray-600'}`}>
              {renderValidationIcon(validations.hasUppercase)} One uppercase letter
            </li>
            <li className={`flex items-center ${validations.hasNumber ? 'text-green-600' : 'text-gray-600'}`}>
              {renderValidationIcon(validations.hasNumber)} One number
            </li>
            <li className={`flex items-center ${validations.hasSpecialChar ? 'text-green-600' : 'text-gray-600'}`}>
              {renderValidationIcon(validations.hasSpecialChar)} One special character
            </li>
          </ul>
        </div>

        {/* Render RichText for the agreement text */}
        <div className="mt-4 text-sm text-gray-600">
          <UniformRichText context={context} component={component} parameterId="agreementtext" />
        </div>
      </div>
      <div onClick={isValid ? onSubmit : undefined} className={` ${!isValid ? 'cursor-not-allowed opacity-50' : ''}`}>
        <UniformSlot
          data={{
            ...component,
            parameters: {
              ...component.parameters,
              className: {
                type: 'text', // Specify the type expected by the parameters
                value: `${!isValid ? 'cursor-not-allowed' : ''}`, // Add the class conditionally
              },
            },
          }}
          context={context}
          slot={slots.submitButton}
        />
      </div>
    </>
  );
};

export default PasswordField;
