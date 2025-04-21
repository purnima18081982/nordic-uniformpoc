/* eslint-disable */
import React, { useState } from 'react';
import { UniformText, UniformRichText, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { ButtonProps } from '@/components/ui/Button'; // Import ButtonProps from the correct location
import { PasswordFieldProps } from '.';
import Button from '@/components/ui/Button';

const PasswordField: React.FC<PasswordFieldProps> = ({ onSubmit, context, component }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
          <img
            src="/images/double-tick.png" // Path to the double tick image
            alt="Double Tick"
            className="h-5 w-5"
          />
        ) : (
          <img
            src="/images/dot.png" // Path to the dot image
            alt="Dot"
            className="h-5 w-5"
          />
        )}
      </span>
    );
  };

  return (
    <div className="mt-6">
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          <UniformText context={context} component={component} parameterId="passwordlabel" as="span" />
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <img src="/images/eye-icon.png" alt="Toggle Password Visibility" className="h-5 w-5" />
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

      {/* Button with disabled state */}
      <Button
        {...myButtonStyles}
        className={`px-3 py-1 ml-4 ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={isValid ? onSubmit : undefined} // Prevent onClick if not valid
      >
        <UniformText context={context} component={component} parameterId="buttontext" />
      </Button>
      {/* <UniformSlot
        data={{
          ...component,
          isDisabled: !isValid,
          onClick: isValid ? onSubmit : undefined, // Pass onClick only if valid
        }}
        context={context}
        slot={{ id: 'submitButton', type: 'button' }} // Replace with a valid SlotDefinition object
      /> */}
    </div>
  );
};

export default PasswordField;
