'use client';
import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { EmailListViewProps } from '.';
export const EmailListView: FC<EmailListViewProps> = ({ component, context }) => {
  console.info(component?.parameters?.emaildata?.value, 'EmailData');
  return (
    <div className="w-full py-10 text-2xl">
      <UniformText context={context} component={component} parameterId="title" as="h1" />
      <div className="flex w-full flex-wrap items-center gap-4 py-5 text-2xl"></div>
    </div>
  );
};
