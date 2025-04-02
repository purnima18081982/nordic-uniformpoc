import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { SocialMediaSection } from './SocialMediaSection';

export type SocialMediaSectionProps = ComponentProps<{
  googletext: string;
  sociallink: { value: [] };
  imageicon: { value: [] };
  microsoft: string;
  microsoftlogin: { value: [] };
  microsofticon: { value: [] };
  slack: string;
  slacklogin: { value: [] };
  slackicon: { value: [] };
  textcolor: string;
  textsize: string;
  textweight: string;
  texttransform: string;
  buttonborder: string;
  iconposition: string;
}>;

export const SocialMediaSectionmaping = {
  socialmediasection: SocialMediaSection,
};

export default SocialMediaSection;
