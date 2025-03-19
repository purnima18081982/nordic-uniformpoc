import createComponentResolver, { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';
import { cskComponentsMapping } from '@/components/canvas';
import { customComponentsMapping } from '@/components/custom-canvas';
import { helloWorldMappings } from './canvas/HelloWorld';
import { signupStepMappings } from './canvas/SignupStep';
import { videoPlayerMappings } from './canvas/VideoPlayer';

const componentsMapping: ComponentMapping = {
  ...cskComponentsMapping,
  ...customComponentsMapping,
  videoPlayer: { component: videoPlayerMappings.videoPlayer },
  helloworld: { component: helloWorldMappings.helloworld },
  signupstep: { component: signupStepMappings.signupstep },
};

export const componentResolver = createComponentResolver(componentsMapping);
