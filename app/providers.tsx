'use client'

import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { unstableSetRender } from 'antd'
import { createRoot } from 'react-dom/client'

// Antd v5 static notifications use the React 19 client root API.
unstableSetRender((node, container) => {
  const target = container as typeof container & { _reactRoot?: ReturnType<typeof createRoot> }
  const root = target._reactRoot ||= createRoot(container)
  root.render(node)
  return () => new Promise<void>((resolve) => {
    setTimeout(() => {
      root.unmount()
      resolve()
    }, 0)
  })
})

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  )
}
