import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { DataWithProperties } from '@uniformdev/canvas';
import { TextParameters } from '@/components/canvas/Text/parameters';
import CustomBreadcrumbComponent from './CustomBreadcrumbs';

export type CustomBreadcrumbComponentLink = {
  title: string;
  link?: string;
};

export type CustomBreadcrumbComponentParameters = {
  title?: string;
  separator?: 'slash' | 'chevron';
  links?: DataWithProperties[];
};

export type CustomBreadcrumbComponentProps = ComponentProps<
  CustomBreadcrumbComponentParameters & Pick<TextParameters, 'size' | 'color' | 'font' | 'transform'>
>;

export const CustomBreadcrumbComponentMappings = {
  customBreadcrumbComponent: CustomBreadcrumbComponent,
};

export default CustomBreadcrumbComponent;
