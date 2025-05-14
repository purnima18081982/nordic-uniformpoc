import React from 'react';
import classNames from 'classnames';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';

type ContaineItemProps = {
  width: string;
};

type containerItemSlot = 'itemData';
type ContainerItemPropsMain = ComponentProps<ContaineItemProps, containerItemSlot>;

const ContainerItem = (props: ContainerItemPropsMain) => {
  console.log('the props are', props.context?.parentData);

  return (
    <div
      className={classNames('flex', {
        'w-full': props.width === 'full', // 100% width
        'w-auto': props.width === 'auto', // Auto width
        'w-full lg:w-1/2': props.width === '1/2', // 50% width
        'w-full lg:w-1/3': props.width === '1/3', // 33.33% width
        'w-full lg:w-2/3': props.width === '2/3', // 66.67% width
        'w-full lg:w-1/4': props.width === '1/4', // 25% width
        'w-full lg:w-3/4': props.width === '3/4', // 75% width
        'w-full lg:w-1/5': props.width === '1/5', // 20% width
        'w-full lg:w-2/5': props.width === '2/5', // 40% width
        'w-full lg:w-3/5': props.width === '3/5', // 60% width
        'w-full lg:w-4/5': props.width === '4/5', // 80% width
        'w-full lg:w-1/6': props.width === '1/6', // 16.67% width
        'w-full lg:w-5/6': props.width === '5/6', // 83.33% width
        'w-full lg:w-1/12': props.width === '1/12', // 8.33% width
        'w-full lg:w-2/12': props.width === '2/12', // 16.67% width
        'w-full lg:w-3/12': props.width === '3/12', // 25% width
        'w-full lg:w-4/12': props.width === '4/12', // 33.33% width
        'w-full lg:w-5/12': props.width === '5/12', // 41.67% width
        'w-full lg:w-6/12': props.width === '6/12', // 50% width
        'w-full lg:w-7/12': props.width === '7/12', // 58.33% width
        'w-full lg:w-8/12': props.width === '8/12', // 66.67% width
        'w-full lg:w-9/12': props.width === '9/12', // 75% width
        'w-full lg:w-10/12': props.width === '10/12', // 83.33% width
        'w-full lg:w-11/12': props.width === '11/12', // 91.67% width
        'w-screen': props.width === 'screen', // 100vw width
        'w-min': props.width === 'min', // Minimum content width
        'w-max': props.width === 'max', // Maximum content width
        'md:w-1/2': props.width === 'half', // 50% width on medium screens and larger
        'lg:w-1/3': props.width === 'third', // 33.33% width on large screens and larger
      })}
    >
      <UniformSlot data={props.component} context={props.context} slot={props.slots.itemData} />
    </div>
  );
};

export default ContainerItem;
