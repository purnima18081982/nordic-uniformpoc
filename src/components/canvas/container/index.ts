import { ReactNode } from 'react';
import Container from './Container';
import ContainerItem from './ContainerItem';

export type ContainerProps = {
  slots: object;
  component: object;
  context?: object;
  padding: string;
  margin: string;
  backgroundColor: string;
  children: ReactNode;
  backgroundClassName?: string;
  containerVariant?: string;
  className?: string;
  flexDirection?: string;
  flexGap?: string;
  justifyContent?: string;
  alignItems?: string;
};

export type ContainerItemProps = {
  component: object;
  context?: object;
  slots: object;
  flexGrow: string;
  flexShrink: string;
  flexBasics: string;
  children: ReactNode;
};

export const NordicContainerComponentMapping = {
  nordicContainerComponent: Container,
  nordicContainerItemComponent: ContainerItem,
};

export default Container;
