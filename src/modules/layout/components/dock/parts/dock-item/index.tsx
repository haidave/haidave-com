'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { cn } from '~/lib/utils'

type DockItemProps = {
  href: string
  shortcut: string
}

const DockItem: React.FC<DockItemProps> = ({ href, shortcut }) => {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = pathname === href

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === shortcut) {
        router.push(href)
      }
    }

    window.addEventListener('keypress', handleKeyPress)
  }, [router, href, shortcut])

  return (
    <li
      className={cn(
        'flex aspect-square w-10 justify-center rounded-full',
        'hover:bg-tertiary',
        isActive ? 'bg-tertiary font-bold text-primary' : ''
      )}
    >
      <Link href={href} className="grid h-full w-full place-items-center">
        {shortcut}
      </Link>
    </li>
  )
}

export { DockItem }
