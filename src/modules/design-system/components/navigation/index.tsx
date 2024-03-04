'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ROUTES } from '~/config/routes'
import { useCursorContext } from '~/lib/cursor-context-provider'
import { cn } from '~/lib/utils'

const navigationItems = [
  {
    href: ROUTES.craft,
    label: 'Craft',
  },
  {
    href: ROUTES.about,
    label: 'About',
  },
]

const Navigation = () => {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const { setCanHover } = useCursorContext()

  return (
    <ol className="group relative flex gap-10">
      {navigationItems.map((item) => (
        <li
          key={item.href}
          className={cn('blur-item flex cursor-pointer', isActive(item.href) ? 'underline' : '')}
          onMouseEnter={() => setCanHover(true)}
          onMouseLeave={() => setCanHover(false)}
        >
          <Link href={item.href} className={cn('uppercase')}>
            {item.label}
          </Link>
        </li>
      ))}
    </ol>
  )
}

export { Navigation }
