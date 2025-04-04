import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { WhatWeOffer } from './WhatWeOffer';

export type WhatWeOfferProps = ComponentProps<{
  id: string;
  source: string;
  title: string;
  description: string;
}>;

export const whatWeOfferMappings = {
  WhatWeOffer: WhatWeOffer,
};

export default WhatWeOffer;
