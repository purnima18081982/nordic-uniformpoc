'use client';
import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { UniformRichText } from '@uniformdev/canvas-next-rsc/component';
// import { BaseImage } from '@uniformdev/canvas-next-rsc/component';
import { NotificationmailProps } from '.';

export const Notificationmail: FC<NotificationmailProps> = ({ component, context }) => {
  console.info('propsValues', component, context);
  return (
    <div>
      <div className="space-y-4">
        <UniformText
          context={context}
          component={component}
          parameterId="name"
          as="h1"
          className="text-2xl font-bold"
        />
        <UniformText
          context={context}
          component={component}
          parameterId="discription"
          as="p"
          className="text-gray-700"
        />

        <div className="mb-4">
          <div className="mx-auto  mb-4 rounded-lg border border-gray-300 p-6 ">
            {/* <img
              content={context}
              component={component}
              parameterId="npmimage"
              alt="NPM Image"
              className="size-40 rounded-lg object-cover"
            /> */}
            <UniformRichText
              context={context}
              component={component}
              parameterId="discription1"
              as="p"
              className="text-gray-700"
            />
          </div>
          <div>
            {/* <Button
              component={component1}
              context={context1}
              link={link1}
              text="Click Me"
              slots={{}}
              slotName={undefined}
              slotIndex={undefined}
            /> */}
          </div>
          <div className="mb-4">
            <UniformRichText
              context={context}
              component={component}
              parameterId="discription2"
              as="p"
              className="text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
