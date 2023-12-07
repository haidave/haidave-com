'use client'

import { useMotionValue } from 'framer-motion'
import { FolderClosedIcon, HomeIcon, PencilIcon, UserIcon, WrenchIcon } from 'lucide-react'
import { useAppContext } from '~/context/app-context-provider'

import { ROUTES } from '~/config/routes'
import { cn } from '~/lib/utils'

import { DockItem } from './parts/dock-item'

const iconStyles = 'h-full w-full'

const dockItems = [
  {
    href: ROUTES.home,
    icon: <HomeIcon className={iconStyles} />,
    tooltip: 'home',
    shortcut: '1',
  },
  {
    href: ROUTES.about,
    icon: <UserIcon className={iconStyles} />,
    tooltip: 'about',
    shortcut: '2',
  },
  {
    href: ROUTES.resources,
    icon: <FolderClosedIcon className={iconStyles} />,
    tooltip: 'resources',
    shortcut: '3',
  },
  {
    href: ROUTES.tools,
    icon: <WrenchIcon className={iconStyles} />,
    tooltip: 'tools',
    shortcut: '4',
  },
  {
    href: ROUTES.notes,
    icon: <PencilIcon className={iconStyles} />,
    tooltip: 'notes',
    shortcut: '5',
  },
]

const Dock = () => {
  const { isMobile } = useAppContext()
  const mouseX = useMotionValue(Infinity)

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
        {dockItems.map((dockItem) => (
          <DockItem
            key={dockItem.shortcut}
            href={dockItem.href}
            icon={dockItem.icon}
            tooltip={dockItem.tooltip}
            shortcut={dockItem.shortcut}
            mouseX={mouseX}
            isMobile={isMobile}
          />
        ))}
      </ul>
    </footer>
  )
}

export { Dock }
