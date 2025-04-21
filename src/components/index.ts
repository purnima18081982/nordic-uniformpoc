import createComponentResolver, { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';
import { cskComponentsMapping } from '@/components/canvas';
import { customComponentsMapping } from '@/components/custom-canvas';
import { customBreadcrumbsMapping } from './canvas/Breadcrumbs';
import { NordicContainerComponentMapping } from './canvas/container';
import { EmailListViewnmaping } from './canvas/EmailListView';
import { helloWorldMappings } from './canvas/HelloWorld';
import { NordicInputComponentMapping } from './canvas/Input';
import { MicrosoftAuthenticatorMappings } from './canvas/MicrosoftAuthenticator';
import { nordicButtonMappings } from './canvas/NordicButton';
import { signupStepMappings } from './canvas/SignupStep';
import { SocialMediaSectionmaping } from './canvas/SocialMediaSection';
import { videoPlayerMappings } from './canvas/VideoPlayer';
import { whatWeOfferMappings } from './canvas/WhatWeOffer';

const componentsMapping: ComponentMapping = {
  ...cskComponentsMapping,
  ...customComponentsMapping,
  videoPlayer: { component: videoPlayerMappings.videoPlayer },
  helloworld: { component: helloWorldMappings.helloworld },
  signupstep: { component: signupStepMappings.signupstep },
  customBreadcrumbComponent: { component: customBreadcrumbsMapping.customBreadcrumbs },
  microsoftAuthenticator: { component: MicrosoftAuthenticatorMappings.microsoftAuthenticator },
  socialmediasection: { component: SocialMediaSectionmaping.SocialMediaSection },
  whatweoffer: { component: whatWeOfferMappings.WhatWeOffer },
  nordicbutton: { component: nordicButtonMappings.nordicButton },
  nordicContainer: { component: NordicContainerComponentMapping.nordicContainerComponent },
  nordicFlexItem: { component: NordicContainerComponentMapping.nordicContainerItemComponent },
  emaillistview: { component: EmailListViewnmaping.EmailListView },
  nordicInput: { component: NordicInputComponentMapping.nordicInputComponent },
};

export const componentResolver = createComponentResolver(componentsMapping);
