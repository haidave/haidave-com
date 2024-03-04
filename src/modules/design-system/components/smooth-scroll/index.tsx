'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

type SmoothScrollProps = {
  children: React.ReactNode
  isHorizontal?: boolean
}

const SmoothScroll = ({ children, isHorizontal }: SmoothScrollProps) => {
  return (
    <ReactLenis
      root
      options={{
        orientation: isHorizontal ? 'horizontal' : 'vertical',
      }}
    >
      {children}
    </ReactLenis>
  )
}

export { SmoothScroll }
