'use client'

import { ROUTES } from '~/config/routes'
import { DockItem } from './parts/dock-item'
import { useMotionValue } from 'framer-motion'

const Dock = () => {
  const mouseX = useMotionValue(Infinity)

  return (
    <footer className="fixed bottom-8 left-1/2 -translate-x-1/2">
      <ul
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-2 rounded-full border px-4 pb-3"
      >
        <DockItem href={ROUTES.home} shortcut="1" mouseX={mouseX} />
        <DockItem href={ROUTES.about} shortcut="2" mouseX={mouseX} />
        <DockItem href={ROUTES.resources} shortcut="3" mouseX={mouseX} />
        <DockItem href={ROUTES.notes} shortcut="4" mouseX={mouseX} />
      </ul>
    </footer>
  )
}

export { Dock }
