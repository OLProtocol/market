'use client';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import clsx from 'clsx';
import '@/locales';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';

// export const metadata: Metadata = {
//   title: {
//     default: 'Ordx Market',
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   // themeColor: [
//   //   { media: "(prefers-color-scheme: light)", color: "white" },
//   //   { media: "(prefers-color-scheme: dark)", color: "black" },
//   // ],
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon-16x16.png',
//     apple: '/apple-touch-icon.png',
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const lang = i18nConfig.defaultLocale;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ordx Market</title>
      </head>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                // 1. 单独使用暗色算法
                algorithm: theme.darkAlgorithm,

                // 2. 组合使用暗色算法与紧凑算法
                // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
              }}
            >
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl px-2 md:px-4 flex-grow">
                  {children}
                </main>
              </div>
            </ConfigProvider>
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
