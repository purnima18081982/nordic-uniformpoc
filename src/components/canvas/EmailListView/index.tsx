import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { EmailListView } from './EmailListView';

export type EmailListViewProps = ComponentProps<{
  emaildata: { value: [] };
}>;

export const EmailListViewnmaping = {
  EmailListView: EmailListView,
};

export default EmailListView;
