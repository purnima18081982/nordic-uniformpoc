import React from 'react';
import classNames from 'classnames';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';

type ContainerFlexProps = {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  flexGap: string;
};

type ContainerSlot = 'containerItem';

type ContainerProps = ComponentProps<ContainerFlexProps, ContainerSlot>;

export const Container = (props: ContainerProps) => {
  const customState = 'Mehul';

  return (
    <div className="mx-auto w-full max-w-7xl px-4 xl:px-0">
      <div
        className={classNames(
          'flex',
          'w-full',
          'flex-col',
          `md:${props.flexDirection}`,
          props.justifyContent,
          props.alignItems,
          `gap-${props.flexGap}`
        )}
      >
        <UniformSlot
          data={props.component}
          context={{ ...props.context, parentData: customState }}
          slot={props.slots.containerItem}
        />
      </div>
    </div>
  );
};

export default Container;
