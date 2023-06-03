import NextLink from 'next/link'

import { cn } from '~/lib/utils'

type LinkProps = {
  href: string
  isExternal?: boolean
  children: React.ReactNode
}

export const Link = ({ href, isExternal, children }: LinkProps) => {
  const target = isExternal ? '_blank' : undefined
  const rel = isExternal ? 'noopener noreferrer' : undefined

  return (
    <NextLink
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'border-b-[1.5px] border-[#7e7e7e]',
        'transition-colors duration-500 ease-in-out',
        'hover:border-[#ededed] focus-visible:shadow-focus focus-visible:outline-0',
        isExternal ? 'pr-3' : null
      )}
    >
      {children}
      {isExternal ? <span className="absolute mt-[0.3125rem] text-xs font-bold">↗</span> : null}
    </NextLink>
  )
}
