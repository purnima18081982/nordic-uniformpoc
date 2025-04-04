import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { SocialMediaSection } from './SocialMediaSection';

export type SocialMediaSectionProps = ComponentProps<{
  googletext: string;
  sociallink: { value: [] };
  imageicon: { value: [] };
  microsofttext: string;
  microsoftlogin: { value: [] };
  microsofticon: { value: [] };
  slacktext: string;
  slacklogin: { value: [] };
  slackicon: { value: [] };
}>;

export const SocialMediaSectionmaping = {
  SocialMediaSection: SocialMediaSection,
};

export default SocialMediaSection;
