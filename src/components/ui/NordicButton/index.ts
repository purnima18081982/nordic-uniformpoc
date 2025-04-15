import { PropsWithChildren, ReactNode } from 'react';
import { DefaultTheme } from 'tailwindcss/types/generated/default-theme';
import { ViewPort } from '@/types/cskTypes';

export enum ButtonVariant {
  Link = 'link',
  ButtonWithBackground = 'buttonWithBackground',
  ButtonWithoutBackground = 'buttonWithoutBackground',
}

type TextSize = keyof DefaultTheme['fontSize'];

export type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  href?: string;
  border?: string | ViewPort<string>;
  size?: string;
  className?: string;
  textColor?: string;
  textSize?: TextSize | ViewPort<TextSize>;
  textWeight?: keyof DefaultTheme['fontWeight'];
  textFont?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
  textTransform?: string;
  buttonColor?: string;
  isActive?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  hoverButtonColor?: string;
  hoverTextColor?: string;
}>;

export { NordicButton as default } from './nordicButton';
