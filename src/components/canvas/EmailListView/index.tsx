import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { EmailListView } from './EmailListView';

export type EmailListViewProps = ComponentProps<{
  emaildata: { emails: { value: [] } };
}>;

export const EmailListViewnmaping = {
  EmailListView: EmailListView,
};

export default EmailListView;
