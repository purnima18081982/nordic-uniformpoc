'use client';

import React, { useState } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

type FormField = {
  id: string;
  name: string;
  type: string;
  label: string;
  width: string;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
};

type SignupStepTwoFormProps = {
  label: string;
  locationLabel: string;
  placeholder: string;
  locationOptionsJson: {
    options: Array<{
      value: string;
      label: string;
    }>;
  };
  peopleWorkAtYourCompanyLabel: string;
  peopleWorkAtYourCompanyOptions: {
    options: Array<{
      value: string;
      label: string;
    }>;
  };
  steptwoinputs: {
    form: {
      rows: Array<Array<FormField>>;
    };
  };
};

type SignupStepTwoFormComponentProps = ComponentProps<SignupStepTwoFormProps>;

const SignupStepTwoForm = (props: SignupStepTwoFormComponentProps) => {
  const {
    // steptwoinputs,
    label,
    locationLabel,
    locationOptionsJson,
    placeholder,
    peopleWorkAtYourCompanyLabel,
    peopleWorkAtYourCompanyOptions,
  } = props;

  const [formData, setFormData] = useState({});

  const handleInputChange = (key: string, value: string) => {
    setFormData(prevState => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.info('Form submitted:', formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-8 py-4 lg:gap-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
          <div className="flex w-full flex-col gap-1 lg:w-1/2">
            <label className="text-sm">{label}</label>
            <input
              id={'whatCompanyDoYouWorkFor'}
              placeholder={placeholder}
              className="border border-gray-300 px-4 py-2"
              onChange={e => handleInputChange('whatCompanyDoYouWorkFor', e.target.value)}
            />
          </div>
          <div className="hidden w-full gap-1 lg:block lg:w-1/2"></div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
          <div className="flex w-full flex-col gap-1 lg:w-1/2">
            <label className="text-sm">{locationLabel}</label>
            <select
              className="border border-gray-300 px-4 py-2"
              onChange={e => handleInputChange('location', e.target.value)}
            >
              {locationOptionsJson?.options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full flex-col gap-1 lg:w-1/2">
            <label className="text-sm">{peopleWorkAtYourCompanyLabel}</label>
            <select
              className="border border-gray-300 px-4 py-2"
              onChange={e => handleInputChange('numberOfPeopleWorkAtYourCompany', e.target.value)}
            >
              {peopleWorkAtYourCompanyOptions?.options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-2">
          <button className="w-1/12 bg-blue-400 px-4 py-2 text-white" type="button">
            Cancel
          </button>
          <button className="w-1/12 bg-blue-400 px-4 py-2 text-white" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupStepTwoForm;

// {
//   "form": {
//     "rows": [
//       [
//         {
//           "id": "whatCompanyDoYouWorkFor",
//           "name": "whatCompanyDoYouWorkFor",
//           "type": "text",
//           "label": "What Company Do You Work For",
//           "width": "w-full lg:w-1/2",
//           "placeholder": "Please Enter Your Company Name"
//         },
//         {
//           "id": "whatCompanyDoYouWorkFor",
//           "name": "whatCompanyDoYouWorkFor",
//           "type": "text",
//           "label": "What Company Do You Work For",
//           "width": "w-full lg:w-1/2",
//           "placeholder": "Please Enter Your Company Name"
//         }
//       ],
//       [
//         {
//           "id": "location",
//           "name": "location",
//           "type": "select",
//           "label": "Location",
//           "width": "w-full lg:w-1/2",
//           "options": [
//             {
//               "label": "Select Location",
//               "value": ""
//             },
//             {
//               "label": "Option 1",
//               "value": "option_1"
//             }
//           ],
//           "placeholder": "Please Select your location"
//         }
//       ]
//     ]
//   }
// }

// {steptwoinputs?.form.rows.map((row, rowIndex) => {
//   return (
//     <div className="flex gap-2" key={rowIndex}>
//       {row.map(input => {
//         return (
//           <div className={`${input.width} flex  flex-col gap-2 `} key={input.id}>
//             <label className="text-sm">{input.label}</label>
//             {input.type === 'text' && (
//               <input
//                 id={input.id}
//                 placeholder={input.placeholder}
//                 className="border border-gray-300 px-4 py-2"
//                 onChange={e => handleInputChange(input.id, e.target.value)}
//               />
//             )}
//             {input.type === 'select' && (
//               <select
//                 id={input.id}
//                 className="border border-gray-300 px-4 py-2"
//                 onChange={e => handleInputChange(input.id, e.target.value)}
//               >
//                 {input.options?.map(option => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             )}
//             {input.type === 'checkbox' && <input type="checkbox" />}
//           </div>
//         );
//       })}
//     </div>
//   );
// })}
