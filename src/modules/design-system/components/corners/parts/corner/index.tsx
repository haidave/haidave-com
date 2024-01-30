import React from 'react'

import { cn } from '~/lib/utils'

const Corner = ({ className }: { className: string }) => (
  <div className={cn('pointer-events-none absolute transition-transform duration-300', className)}>
    <div className="h-px w-2.5 bg-border" />
    <div className="h-2.5 w-px bg-border" />
  </div>
)

export { Corner }
