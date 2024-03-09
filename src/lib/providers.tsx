'use client'

import { RealViewportProvider } from 'next-real-viewport'

import { CursorContextProvider } from '~/lib/cursor-context-provider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RealViewportProvider>
      <CursorContextProvider>{children}</CursorContextProvider>
    </RealViewportProvider>
  )
}

export { Providers }
