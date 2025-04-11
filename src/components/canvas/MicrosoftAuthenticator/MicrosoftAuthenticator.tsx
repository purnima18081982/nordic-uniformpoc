/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { UniformRichText, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { MicrosoftAuthenticatorProps } from '.';

interface PageContent {
  type: string;
  parameters?: {
    descriptionImage?: {
      value: Array<{
        fields: {
          url: {
            value: string;
          };
        };
      }>;
    };
  };
}

const MicrosoftAuthenticator: FC<MicrosoftAuthenticatorProps> = ({ component, context }) => {
  // This is for the image url

  const microsoftAuthenticatorUrl = Array.isArray(component?.parameters?.descriptionImage?.value)
    ? component.parameters.descriptionImage.value[0]?.fields?.url?.value
    : undefined;

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-20 lg:gap-20">
      <UniformText
        context={context}
        component={component}
        parameterId="title"
        as="h2"
        className="text-3xl font-bold lg:text-4xl"
      />
      <div className="flex gap-12">
        <div className="hidden px-4 md:block lg:px-8">
          <Image
            src={typeof microsoftAuthenticatorUrl === 'string' ? microsoftAuthenticatorUrl : ''}
            alt="test"
            decoding="async"
            width={100}
            height={100}
          />
        </div>

        <div className="flex w-[100%] flex-col gap-6 lg:w-[50%]">
          <UniformText
            context={context}
            component={component}
            parameterId="descriptionTitle"
            as="h2"
            className="text-3xl font-bold "
          />

          <UniformRichText
            context={context}
            component={component}
            parameterId="descriptionText"
            as="p"
            className="richtext font-semibold leading-[2.1]"
          />

          <div className="flex justify-end gap-4">
            <button className="border border-blue-400 px-6 py-2">Skip</button>
            <button className="bg-gradient-to-b from-blue-400 to-blue-500 px-6 py-2 text-white outline-none">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftAuthenticator;
