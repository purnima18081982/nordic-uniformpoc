'use client';
import { FC, useState } from 'react';
import { UniformRichText, UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import BaseImage from '@/components/ui/Image';
import { SignupStep4Props } from '.';

export const SignupStep4: FC<SignupStep4Props> = ({ component, context, slots }) => {
  // Access the emails array from the emailData object
  const [checkedItems, setCheckedItems] = useState<{ id: number }[]>([]);
  const [selectedOption, setSelectedOption] = useState('');
  //const [allCheck, setAllCheck] = useState<boolean>();
  const icon = (component?.parameters?.icon?.value as { fields: { url: { value: string } } }[] | undefined)?.[0]?.fields
    ?.url?.value;
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
  const toggleItem = (subtype: { id: number; title?: string; shortdescription?: string }) => {
    if (checkedItems.includes(subtype)) {
      setCheckedItems(checkedItems.filter(i => i !== subtype));
    } else {
      setCheckedItems([...checkedItems, subtype]);
    }
  };
  const toggleAll = (subtype: { id: number }[]) => {
    if (checkedItems.length === subtype.length) {
      setCheckedItems([]);
    } else {
      setCheckedItems([...subtype]);
    }
  };
  const radtiooption =
    (
      component?.parameters?.radio?.value as
        | {
            radiotype: {
              id: number;
              title: string;
              shortdescription: string;
              icon: string;
            }[];
          }
        | undefined
    )?.radiotype || [];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedOption(event.target.value);
  };
  console.info(component, 'com');
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
          className="text-#000000 font-sans text-2xl font-bold"
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
          className="text-#000000 font-sans text-2xl font-bold"
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
        {emailTypes.map(data => {
          return (
            <ul key={data?.id} className="mb-5 border border-[#D9E1E2] p-10">
              <label htmlFor="item1" className="text-gray flex items-center">
                <input
                  type="checkbox"
                  id={data?.id?.toString()}
                  name={data?.id?.toString()}
                  checked={checkedItems.length === data?.subtype?.length ? true : false || true}
                  onChange={() => toggleAll(data?.subtype || [])}
                  className="mr-2 size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="px-1 pt-0">
                  <BaseImage src={data?.icon || '/default-icon.png'} alt={'title'} width={40} height={40} />
                </div>
                {data?.title}
              </label>
              <p className="pl-7 text-gray-300"> {data?.shortdescription}</p>
              {data?.subtype?.map(subtype => {
                return (
                  <li key={subtype?.id} className="items-center pl-10">
                    <input
                      type="checkbox"
                      id={subtype?.id?.toString()}
                      name={subtype?.id?.toString()}
                      checked={checkedItems.includes(subtype)}
                      onChange={() => toggleItem(subtype)}
                      className="mr-2 size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    {subtype?.title}
                  </li>
                );
              })}
            </ul>
          );
        })}
        <br />
        <UniformText
          className="text-#000000 font-sans text-2xl font-bold"
          context={context}
          component={component}
          parameterId="title2"
          as="p"
        />
        <br />
        <div className="flex flex-wrap gap-4 mt-4">
          {radtiooption?.map(data => (
            <label
              key={data?.id}
              className="flex items-center space-x-2 border px-4 py-2 cursor-pointer hover:shadow-sm"
            >
              <input
                type="radio"
                name={data?.title}
                value={data?.title}
                id={data?.id?.toString()}
                checked={selectedOption === data?.title}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-blue-100 border-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-sm font-medium text-gray-800">{data?.title}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-between p-3 pl-0 pr-0">
          <UniformSlot data={component} context={context} slot={slots.backbutton} />
          <UniformSlot data={component} context={context} slot={slots.submitbutton} />
        </div>
      </div>
    </>
  );
};
