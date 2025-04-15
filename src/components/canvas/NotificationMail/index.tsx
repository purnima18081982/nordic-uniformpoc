import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Notificationmail } from './Notificationmail';

export type NotificationmailProps = ComponentProps<{
  Name: string;
  Discription: string;
  NPMimage: { value: [] };
  Discription1: string;
  Acknowlidgebutton: string;
  Viewbutton: string;
  Discription2: string;
}>;

export const Notificationmailmaping = {
  Notificationmail: Notificationmail,
};

export default Notificationmail;
