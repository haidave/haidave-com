'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ROUTES } from '~/config/routes'
import { useCursorContext } from '~/lib/cursor-context-provider'
import { cn } from '~/lib/utils'

import { Corners } from '../corners'

const navigationItems = [
  {
    href: ROUTES.home,
    label: 'home',
    shortcut: '1',
  },
  {
    href: ROUTES.about,
    label: 'about',
    shortcut: '2',
  },
  {
    href: ROUTES.resources,
    label: 'resources',
    shortcut: '3',
  },
  {
    href: ROUTES.tools,
    label: 'tools',
    shortcut: '4',
  },
  {
    href: ROUTES.notes,
    label: 'notes',
    shortcut: '5',
  },
]

const Navigation = () => {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const { setCanHover } = useCursorContext()

  return (
    <footer className="fixed bottom-16 left-1/2 z-50 -translate-x-1/2">
      <Corners>
        <ol className="group relative flex">
          {navigationItems.map((item, index) => (
            <li
              key={item.shortcut}
              className={cn(
                'blur-item flex cursor-pointer font-mono text-lg',
                isActive(item.href) ? 'font-bold' : 'font-light'
              )}
              onMouseEnter={() => setCanHover(true)}
              onMouseLeave={() => setCanHover(false)}
            >
              <Link
                href={item.href}
                className={cn(
                  'px-3 py-4',
                  index === 0 ? 'pl-5' : '',
                  index === navigationItems.length - 1 ? 'pr-5' : ''
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </Corners>
    </footer>
  )
}

export { Navigation }
