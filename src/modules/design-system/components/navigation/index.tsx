'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ROUTES } from '~/config/routes'
import { useCursorContext } from '~/lib/cursor-context-provider'
import { cn } from '~/lib/utils'

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

const NavigationCorner = ({ className }: { className: string }) => (
  <div className={cn('pointer-events-none absolute transition-transform duration-300', className)}>
    <div className="h-px w-2.5 bg-border" />
    <div className="h-2.5 w-px bg-border" />
  </div>
)

const Navigation = () => {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const { setCanHover } = useCursorContext()

  return (
    <footer className="fixed bottom-16 left-1/2 z-50 -translate-x-1/2">
      <ol className="group relative flex">
        {/* Top left corner */}
        <NavigationCorner className="left-0 top-0 group-hover:translate-x-1 group-hover:translate-y-1" />
        {/* Bottom left corner */}
        <NavigationCorner className="bottom-0 left-0 -rotate-90 group-hover:-translate-y-1 group-hover:translate-x-1" />

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
              className={cn('px-3 py-4', index === 0 ? 'pl-5' : '', index === navigationItems.length - 1 ? 'pr-5' : '')}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* Top right corner */}
        <NavigationCorner className="right-0 top-0 rotate-90 group-hover:-translate-x-1 group-hover:translate-y-1" />
        {/* Bottom right corner */}
        <NavigationCorner className="bottom-0 right-0 -rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1" />
      </ol>
    </footer>
  )
}

export { Navigation }
