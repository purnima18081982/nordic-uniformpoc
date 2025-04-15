'use client';
import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { SocialMediaSectionProps } from '.';
import Button from '../Button';

export const SocialMediaSection: FC<SocialMediaSectionProps> = ({ component, context, slots, slotIndex }) => {
  const buttonConfigs = [
    {
      text: 'googletext',
      icon: (component?.parameters?.imageicon?.value as { fields: { url: { value: string } } }[] | undefined)?.[0]
        ?.fields?.url?.value,
      link: (component?.parameters?.sociallink?.value as { path: string })?.path,
    },
    {
      text: 'microsoft',
      icon: (component?.parameters?.microsofticon?.value as { fields: { url: { value: string } } }[] | undefined)?.[0]
        ?.fields?.url?.value,
      link: (component?.parameters?.microsoftlogin?.value as { path: string })?.path,
    },
    {
      text: 'slack',
      icon: (component?.parameters?.slackicon?.value as { fields: { url: { value: string } } }[] | undefined)?.[0]
        ?.fields?.url?.value,
      link: (component?.parameters?.slacklogin?.value as { path: string })?.path,
    },
  ];

  const handleClick = (socialLink: string) => {
    // Ensure the URL is absolute
    const absoluteUrl =
      socialLink.startsWith('http://') || socialLink.startsWith('https://') ? socialLink : `https://${socialLink}`;
    window.open(absoluteUrl, '_self');
  };
  return (
    <div className="w-full py-10 text-2xl">
      <UniformText context={context} component={component} parameterId="title" as="h1" />
      <div className="flex w-full flex-wrap items-center gap-4 py-5 text-2xl">
        {buttonConfigs.map((config, index) => (
          <Button
            key={index}
            className="flex w-fit cursor-pointer items-center px-8 py-1"
            component={component}
            context={context}
            slots={slots}
            slotName={typeof slots?.slotName === 'string' ? slots.slotName : ''}
            slotIndex={slotIndex}
            text={config.text?.toString()}
            textColor={'text-black'}
            size={'text-sm'}
            textWeight={'normal'}
            textTransform={'capitalize'}
            border={'border-2 border-black'}
            icon={[
              {
                _name: 'icon',
                type: 'image',
                _id: `unique-id-${index}`,
                fields: {
                  url: {
                    value: config.icon || '',
                    type: 'text',
                  },
                },
              },
            ]}
            iconPosition={'left'}
            onClick={() => handleClick(config.link)}
          />
        ))}
      </div>
    </div>
  );
};
