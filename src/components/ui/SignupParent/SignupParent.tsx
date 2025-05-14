'use client';

import { FC, useRef } from 'react';
import { SignupParentProps } from '.';

export const BaseSignupParent: FC<SignupParentProps> = ({ children }) => {
  const container = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <div ref={container} className="flex flex-row items-center overflow-x-hidden scroll-smooth">
        {children}
      </div>
    </div>
  );
};
