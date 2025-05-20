import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'global-nav': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'global-footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
