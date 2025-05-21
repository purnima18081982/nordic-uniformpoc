'use client';
import { FC, useState } from 'react';
import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { SignupYourselfProps } from '.';
import RolecheckBoxes from './RolecheckBoxes';

export const SignupYourself: FC<SignupYourselfProps> = ({ component, context, slots, role }) => {
  console.info('SignupYourself', component, context, role);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className="w-full">
      <form className="mt-6 flex flex-row space-x-2">
        <div className=" mb-4 flex flex-1 flex-col">
          <label
            htmlFor="first-name"
            className="h-[23px] w-[494px] flex-none grow-0 self-stretch text-[15px] leading-[22px] text-black"
          >
            {String(component?.parameters?.firstname.value)}
          </label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="John"
            className="mt-1 block w-full border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className=" mb-4 flex flex-1 flex-col">
          <label
            htmlFor="last-name"
            className=" h-[23px] w-[494px] flex-none grow-0 self-stretch text-[15px] leading-[22px] text-black"
          >
            {String(component?.parameters?.lastname.value)}
          </label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Doe"
            className="mt-1 block w-full border border-gray-300 px-3 py-2  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </form>
      <UniformText
        context={context}
        component={component}
        parameterId="describerole"
        as="h1"
        className="h-[23px] w-[1020px] text-[15px] leading-[22px] text-black"
      />
      <UniformText
        context={context}
        component={component}
        parameterId="discription"
        className="mb-6 h-[18px] w-[1020px] text-[12px] leading-[18px] text-gray-500"
      />
      <RolecheckBoxes role={role} />
      {/* <div className="flex justify-between p-3 px-0">
        <UniformSlot data={component} context={context} slot={slots.backButton} />
        <UniformSlot data={component} context={context} slot={slots.continueButton} />
      </div> */}
    </div>
  );
};
