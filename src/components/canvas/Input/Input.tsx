'use client';

import React from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  name: string;
  defaultValue: unknown;
  required: boolean;
  disabled: boolean;
};

type InputComponentProps = ComponentProps<InputProps>;

const Input = (props: InputComponentProps) => {
  const { label, placeholder, type, name, required, id } = props;

  function handleInputChange(e: { target: { value: unknown } }) {
    const value = e.target.value;
    console.info('the value is', value);
    // props.setValue(name, value);
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="rounded-md border-2 border-gray-300 p-2"
      />
    </div>
  );
};

export default Input;
