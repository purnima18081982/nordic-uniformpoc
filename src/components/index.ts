import createComponentResolver, { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';
import { cskComponentsMapping } from '@/components/canvas';
import { customComponentsMapping } from '@/components/custom-canvas';
import { helloWorldMappings } from './canvas/HelloWorld';
import { signupStepMappings } from './canvas/SignupStep';
import { videoPlayerMappings } from './canvas/VideoPlayer';
import { customBreadcrumbsMapping } from './canvas/Breadcrumbs';
import { MicrosoftAuthenticatorMappings } from './canvas/MicrosoftAuthenticator';

const componentsMapping: ComponentMapping = {
  ...cskComponentsMapping,
  ...customComponentsMapping,
  videoPlayer: { component: videoPlayerMappings.videoPlayer },
  helloworld: { component: helloWorldMappings.helloworld },
  signupstep: { component: signupStepMappings.signupstep },
  customBreadcrumbComponent: { component: customBreadcrumbsMapping.customBreadcrumbs },
  microsoftAuthenticator: { component: MicrosoftAuthenticatorMappings.microsoftAuthenticator },
};

export const componentResolver = createComponentResolver(componentsMapping);
