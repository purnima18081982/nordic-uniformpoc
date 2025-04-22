'use client';
import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { EmailListViewProps } from '.';

export const EmailListView: FC<EmailListViewProps> = ({ component, context }) => {
  // Access the emails array from the emailData object
  const emailData =
    (
      component?.parameters?.emaildata?.value as
        | { emails: { id: number; title: string; shortdescription: string; status: string }[] }
        | undefined
    )?.emails || [];

  console.info(emailData, 'EmailData');
  return (
    <div className="w-full py-10 text-2xl">
      <UniformText context={context} component={component} parameterId="title" as="h1" />
      {emailData.map(data => (
        <ul key={data?.id} className="list-none p-4 shadow-md">
          <li>
            {data?.title}
            <br />
            {data?.shortdescription}
            <br />
            {data?.status}
          </li>
        </ul>
      ))}
    </div>
  );
};
