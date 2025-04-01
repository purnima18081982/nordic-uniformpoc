/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
'use client';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { UniformRichText, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { MicrosoftAuthenticatorProps } from '.';

const MicrosoftAuthenticator: FC<MicrosoftAuthenticatorProps> = ({ component, context }) => {
  const [microsoftAuthenticator, setMicrosoftAuthenticator] = useState<{
    type: string;
    parameters?: { [key: string]: unknown };
  } | null>(null);

  const [microsoftAuthenticatorUrl, setMicrosoftAuthenticatorUrl] = useState('');

  useEffect(() => {
    const microsoftAuthenticatorContent =
      context?.composition?.slots?.pageContent?.filter(ele => ele.type === 'microsoftAuthenticator') ?? [];
    setMicrosoftAuthenticator(microsoftAuthenticatorContent[0] || null);
  }, [context]);

  useEffect(() => {
    const microsoftAuthenticatorImageUrl =
      microsoftAuthenticator?.parameters?.descriptionImage?.value[0]?.fields['url']?.value;

    setMicrosoftAuthenticatorUrl(microsoftAuthenticatorImageUrl || '');
  }, [microsoftAuthenticator]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-20 lg:gap-20">
      <UniformText
        context={context}
        component={component}
        parameterId="title"
        as="h2"
        className="text-5xl font-light lg:text-6xl"
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
