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
          className="text-#000000 font-300 font-sans text-5xl"
          context={context}
          component={component}
          parameterId="heading"
          as="p"
        />
      </div>
      <div className="w-full py-10">
        <UniformText
          className="text-#000000 font-bold font-sans text-2xl"
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
                className="text-#000000 font-300 font-sans text-xl"
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
          className="text-#000000 font-bold font-sans text-2xl"
          context={context}
          component={component}
          parameterId="title1"
          as="p"
        />
        <br />
        <UniformRichText
          className="text-#000000 font-300 font-sans text-xl"
          context={context}
          component={component}
          parameterId="description1"
          as="p"
        />
        {emailTypes.map(data => (
          <ul key={data?.id} className="border border-[#D9E1E2] mb-5 p-10">
            <label htmlFor="item1" className="text-gray flex items-center">
              <input
                type="checkbox"
                id="item1"
                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div className="pl-1 pr-1 pt-0">
                <BaseImage src={data?.icon || '/default-icon.png'} alt={'title'} width={40} height={40} />
              </div>
              {data?.title}
            </label>
            <p className="text-gray-300 pl-7"> {data?.shortdescription}</p>
            {data?.subtype?.map((subtype, index) => (
              <li key={index} className="items-center pl-10">
                <input
                  type="checkbox"
                  id="item1"
                  className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                {subtype?.title}
                <p className="text-gray-300 pl-7"> {subtype?.shortdescription}</p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};
