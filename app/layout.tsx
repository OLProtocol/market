'use client';
import '@/styles/globals.css';
import '@/styles/index.css';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import clsx from 'clsx';
import '@/locales';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';
import { Avatar, Image, Link } from '@nextui-org/react';

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
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <title>Ordx Market</title>
      </head>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased dark:text-white text-black',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          {/* <AntdRegistry>
            <ConfigProvider
              theme={{
                // 1. 单独使用暗色算法
                algorithm: theme.darkAlgorithm,

                // 2. 组合使用暗色算法与紧凑算法
                // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
              }}
            > */}
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="mx-auto w-screen px-2 md:px-4 flex-grow">
              {children}
            </main>
            <footer id="footer">
              <ul className="icons flex justify-center gap-4">
                <li>
                <Link href='https://twitter.com/sat20market/' target='_blank'>
                  <Avatar showFallback fallback={
                    <Image src='/twitter.png'/>
                  } />
                  </Link>
                </li>

              </ul>
              <ul className="copyright">
                <li>Copyrights&copy;2024</li>
              </ul>
            </footer>
          </div>
          {/* </ConfigProvider>
          </AntdRegistry> */}
        </Providers>
      </body>
    </html>
  );
}
