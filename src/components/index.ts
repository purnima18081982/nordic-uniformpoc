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
import { SignupParentMappings } from './canvas/SignupParent';
import { signupStepMappings } from './canvas/SignupStep';
import { SignupStep4maping } from './canvas/SignupStep4';
import { SignupYourselfmaping } from './canvas/SignupYourself';
import { SocialMediaSectionmaping } from './canvas/SocialMediaSection';
import { videoPlayerMappings } from './canvas/VideoPlayer';
import { whatWeOfferMappings } from './canvas/WhatWeOffer';
import { signupMainMappings } from './canvas/SignupMain';

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
  signupstep4: { component: SignupStep4maping.SignupStep4 },
  signupyourself: { component: SignupYourselfmaping.SignupYourself },
  nordicInput: { component: NordicInputComponentMapping.nordicInputComponent },
  signupstep2: { component: signupStepMappings.signupsteptwo },
  signupparent: { component: SignupParentMappings.signupparent },
  signupmain: { component: signupMainMappings.signupMain },
};

export const componentResolver = createComponentResolver(componentsMapping);
