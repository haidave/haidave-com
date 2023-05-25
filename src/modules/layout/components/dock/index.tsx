'use client'

import { useMotionValue } from 'framer-motion'
import { FolderClosedIcon, HomeIcon, PencilIcon, UserIcon, WrenchIcon } from 'lucide-react'

import { ROUTES } from '~/config/routes'
import { cn } from '~/lib/utils'

import { DockItem } from './parts/dock-item'

const Dock = () => {
  const mouseX = useMotionValue(Infinity)
  const iconStyles = 'h-full w-full'

  return (
    <footer className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <ul
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          'relative flex h-16 items-end gap-2 rounded-full border bg-primary-rgba px-3 pb-3',
          'backdrop-blur-[100px] backdrop-brightness-100 backdrop-saturate-[400%]'
        )}
      >
        <div
          aria-hidden="true"
          className="absolute -top-px left-1/2 h-px w-4/5 -translate-x-1/2 bg-linear-gradient opacity-60"
        />
        <DockItem
          href={ROUTES.home}
          icon={<HomeIcon className={iconStyles} />}
          tooltip="home"
          shortcut="1"
          mouseX={mouseX}
        />
        <DockItem
          href={ROUTES.about}
          icon={<UserIcon className={iconStyles} />}
          tooltip="about"
          shortcut="2"
          mouseX={mouseX}
        />
        <DockItem
          href={ROUTES.resources}
          icon={<FolderClosedIcon className={iconStyles} />}
          tooltip="resources"
          shortcut="3"
          mouseX={mouseX}
        />
        <DockItem
          href={ROUTES.tools}
          icon={<WrenchIcon className={iconStyles} />}
          tooltip="tools"
          shortcut="4"
          mouseX={mouseX}
        />
        <DockItem
          href={ROUTES.notes}
          icon={<PencilIcon className={iconStyles} />}
          tooltip="notes"
          shortcut="5"
          mouseX={mouseX}
        />
      </ul>
    </footer>
  )
}

export { Dock }
