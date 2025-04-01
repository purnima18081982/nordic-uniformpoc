'use client';
import React, { FC, useEffect, useState } from 'react';
import { UniformRichText, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { MicrosoftAuthenticatorProps } from '.';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const MicrosoftAuthenticator: FC<MicrosoftAuthenticatorProps> = ({ component, context }) => {
  const [microsoftAuthenticator, setMicrosoftAuthenticator] = useState<{
    type: string;
    parameters?: { [key: string]: any };
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
    <div className="mx-auto py-20 px-6 flex flex-col gap-10 lg:gap-20 w-full max-w-7xl">
      <UniformText
        context={context}
        component={component}
        parameterId="title"
        as="h2"
        className="text-5xl lg:text-6xl font-light"
      />
      <div className="flex gap-12">
        <div className="px-4 lg:px-8 hidden md:block">
          <Image
            src={typeof microsoftAuthenticatorUrl === 'string' ? microsoftAuthenticatorUrl : ''}
            alt="test"
            decoding="async"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col gap-6 w-[100%] lg:w-[50%]">
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
            className="font-semibold leading-[2.1] richtext"
          />

          <div className="flex justify-end gap-4">
            <button className="border border-blue-400 px-6 py-2">Skip</button>
            <button className="outline-none bg-gradient-to-b to-blue-500 from-blue-400 text-white px-6 py-2">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftAuthenticator;
