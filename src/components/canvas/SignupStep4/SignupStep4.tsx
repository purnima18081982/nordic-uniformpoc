'use client';
import { FC } from 'react';
import { UniformRichText, UniformText } from '@uniformdev/canvas-next-rsc/component';
import BaseImage from '@/components/ui/Image';
import { SignupStep4Props } from '.';

export const SignupStep4: FC<SignupStep4Props> = ({ component, context }) => {
  // Access the emails array from the emailData object
  const icon = (component?.parameters?.icon?.value as { fields: { url: { value: string } } }[] | undefined)?.[0]?.fields
    ?.url?.value;
  console.info(component?.parameters?.emailtype?.value, 'DES');
  //   const emailTypes =
  //     (component?.parameters?.emailtype?.value as
  //       | { id: number; title: string; shortdescription: string }[]
  //       | undefined) || [];
  const emailTypes =
    (
      component?.parameters?.emailtype?.value as
        | {
            emailtype: {
              id: number;
              title: string;
              shortdescription: string;
              icon: string;
              subtype: Array<{ id: number; title: string; shortdescription: string }>;
            }[];
          }
        | undefined
    )?.emailtype || [];
  console.info(emailTypes[0]?.title, 'Email Types');
  return (
    <>
      <div className="w-full py-10">
        <UniformText
          className="font-sans text-5xl font-light text-[#000000]"
          context={context}
          component={component}
          parameterId="heading"
          as="p"
        />
      </div>
      <div className="w-full py-10">
        <UniformText
          className="font-sans text-2xl font-bold text-[#000000]"
          context={context}
          component={component}
          parameterId="title"
          as="p"
        />
        <br />
        <div className="border-2 border-[#7DD6E6] bg-[#E2F6F9]">
          <div className="flex flex-row items-center pl-10">
            <div className="p-1">
              <BaseImage src={icon || '/default-icon.png'} alt={'title'} width={40} height={40} />
            </div>
            <div className="p-11 pl-2">
              <UniformRichText
                className="font-sans text-xl font-light text-[#000000]"
                context={context}
                component={component}
                parameterId="description"
                as="p"
              />
            </div>
          </div>
        </div>
        <br />
        <UniformText
          className="font-sans text-2xl font-bold text-[#000000]"
          context={context}
          component={component}
          parameterId="title1"
          as="p"
        />
        <br />
        <UniformRichText
          className="font-sans text-xl font-light text-[#000000]"
          context={context}
          component={component}
          parameterId="description1"
          as="p"
        />
        {emailTypes.map(data => (
          <ul key={data?.id} className="mb-5 border border-[#D9E1E2] p-10">
            <label htmlFor="item1" className="flex items-center text-gray-500">
              <input
                type="checkbox"
                id="item1"
                className="mr-2 size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="px-1 pt-0">
                <BaseImage src={data?.icon || '/default-icon.png'} alt={'title'} width={40} height={40} />
              </div>
              {data?.title}
            </label>
            <p className="pl-7 text-gray-300"> {data?.shortdescription}</p>
            {data?.subtype?.map((subtype, index) => (
              <li key={index} className="items-center pl-10">
                <input
                  type="checkbox"
                  id="item1"
                  className="mr-2 size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                {subtype?.title}
                <p className="pl-7 text-gray-300"> {subtype?.shortdescription}</p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};
