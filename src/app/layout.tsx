import { ReactNode } from 'react';
import classNames from 'classnames';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { UniformContext } from '@uniformdev/canvas-next-rsc';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/dimensions.css';
import '@/styles/fonts.css';
import '@/styles/borders.css';
import '@/styles/index.scss';
import { customFontVariables } from '@/fonts';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={customFontVariables}>
        <div className={classNames('flex flex-col mx-1 md:mx-5')}>
          <NextThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <UniformContext>{children}</UniformContext>
          </NextThemeProvider>
        </div>
      </body>
    </html>
  );
}
