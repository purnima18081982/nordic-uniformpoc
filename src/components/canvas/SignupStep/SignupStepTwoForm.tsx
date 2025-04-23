import React from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

type SignupStepTwoFormProps = {
  steptwoinputs: {
    inputs: Array<{
      type: string;
      id: string;
      name: string;
      label: string;
      placeholder: string;
      options: Array<{
        value: string;
        label: string;
      }>;
    }>;
  };
};

type SignupStepTwoFormComponentProps = ComponentProps<SignupStepTwoFormProps>;

const SignupStepTwoForm = (props: SignupStepTwoFormComponentProps) => {
  const { steptwoinputs } = props;

  return (
    <>
    <label>{uniformLabel}</label>

        <input type="text" /><input type="text" /><input type="text" />


      {steptwoinputs?.inputs.map(inputs => {
        return (
          <>
            <div className="flex flex-1 p-8" key={inputs.id}>
              {inputs.type === 'text' && (
                <div className="flex w-full flex-col gap-2 lg:w-1/{noOFInputs}">
                  <label>{inputs.label}</label>
                  <input id={inputs.id} placeholder={inputs.placeholder} className="border border-gray-300 px-4 py-2" />
                </div>
              )}

              {inputs.type === 'select' && (
                <div className="flex w-full flex-col gap-2 lg:w-1/2">
                  <label>{inputs.label}</label>
                  <select id={inputs.id} className="border border-gray-300 px-4 py-2">
                    {inputs.options.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default SignupStepTwoForm;


{
    form: {
        row1: {
            noofInputs: 3,
            children: [
                {
                    "type": "text",
                    "id": "whatCompanyDoYouWorkFor",
                    "name": "whatCompanyDoYouWorkFor",
                    "label": "What Company Do You Work For",
                    "placeholder": "Please Enter Your Company Name"
                  },
                  {
                    "type": "text",
                    "id": "whatCompanyDoYouWorkFor",
                    "name": "whatCompanyDoYouWorkFor",
                    "label": "What Company Do You Work For",
                    "placeholder": "Please Enter Your Company Name"
                  },
                  {
                    "type": "text",
                    "id": "whatCompanyDoYouWorkFor",
                    "name": "whatCompanyDoYouWorkFor",
                    "label": "What Company Do You Work For",
                    "placeholder": "Please Enter Your Company Name"
                  },
            ]
        }
    }
}