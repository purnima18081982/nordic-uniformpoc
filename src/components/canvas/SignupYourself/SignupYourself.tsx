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
      <UniformText
        context={context}
        component={component}
        parameterId="intro"
        as="h1"
        className="w-[1012px] h-[72px] font-gt-eesti text-[48px] leading-[72px] text-black font-light"
      />
      <UniformText
        context={context}
        component={component}
        parameterId="step"
        className="flex-none grow-0 self-stretch text-[20px] font-normal leading-[150%] text-[#00399D] mt-5"
      />
      <form className="flex flex-row space-x-2 mt-6">
        <div className=" flex flex-1 flex-col mb-4">
          <label
            htmlFor="first-name"
            className="w-[494px] h-[23px] font-gt-eesti text-[15px] leading-[22px] text-black flex-none order-0 self-stretch flex-grow-0"
          >
            {String(component?.parameters?.firstname.value)}
          </label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="John"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className=" flex flex-1 flex-col mb-4">
          <label
            htmlFor="last-name"
            className="w-[494px] h-[23px] font-gt-eesti text-[15px] leading-[22px] text-black flex-none order-0 self-stretch flex-grow-0"
          >
            {String(component?.parameters?.lastname.value)}
          </label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Doe"
            className="mt-1 block w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </form>
      <UniformText
        context={context}
        component={component}
        parameterId="describerole"
        as="h1"
        className="w-[1020px] h-[23px] font-gt-eesti text-[15px] leading-[22px] text-black"
      />
      <UniformText
        context={context}
        component={component}
        parameterId="discription"
        className="-sm mb-6w-[1020px] font-gt-eesti h-[18px] text-[12px] leading-[18px] text-gray-500"
      />
      <RolecheckBoxes role={role} />
      <div className="flex justify-between p-3 pl-0 pr-0">
        <UniformSlot data={component} context={context} slot={slots.backButton} />
        <UniformSlot data={component} context={context} slot={slots.continueButton} />
      </div>
    </div>
  );
};
