/* eslint-disable */
// @ts-nocheck
'use client';

import { FC } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import BaseLink from '@/components/ui/Link';
import { getTextClass } from './style-utils';
import { WhatWeOfferProps } from '.';
import styles from './WhatWeOffer.module.css';

export const WhatWeOffer: FC<WhatWeOfferProps> = ({ component, context }) => {
  return (
    // <section className="flex flex-col md:flex-row gap-[1rem] p-[1rem] bg-[var(--bg-color)]">
    // <div className="flex-1 p-6 flex items-center justify-center">
    <div className={styles.container}>
      {/* Title */}
      <UniformText
        context={context}
        component={component}
        parameterId="title"
        as="h5"
        className="text-xl lg:text-3xl font-bold mb-4"
      />

      {/* List Items */}
      <ul>
        <li className="flex items-start gap-4 mb-3">
          <img src="/images/tick-icon.svg" alt="tick-icon" className="w-6" />
          <UniformText context={context} component={component} parameterId="listitem1" as="span" />
        </li>
        <li className="flex items-start gap-4 mb-3">
          <img src="/images/tick-icon.svg" alt="tick-icon" className="w-6" />
          <UniformText context={context} component={component} parameterId="listitem2" as="span" />
        </li>
        <li className="flex items-start gap-3 mb-3">
          <img src="/images/tick-icon.svg" alt="tick-icon" className="w-6" />
          <UniformText context={context} component={component} parameterId="listitem3" as="span" />
        </li>
      </ul>

      <hr className="font-semibold my-6" />

      {/* Subheading */}
      <UniformText
        context={context}
        component={component}
        parameterId="subheading"
        as="h6"
        className="text-lg lg:text-2xl font-light mb-4"
      />

      {/* Button Link */}
      <BaseLink className="btn btn-white-outline" link={component?.parameters?.buttonLink?.value?.path || '#'}>
        <UniformText context={context} component={component} parameterId="buttontext" as="span" />
      </BaseLink>
    </div>
    // </div>
    // </section>
  );
};
