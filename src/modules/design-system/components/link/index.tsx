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
        'relative border-b-[1.5px] border-[#7e7e7e] pb-[1px]',
        'transition-colors duration-500 ease-in-out',
        'hover:border-[#ededed] focus-visible:shadow-focus focus-visible:outline-0',
        isExternal ? 'pr-2' : null
      )}
    >
      {children}
      {isExternal ? (
        <>
          &nbsp;
          <span className="absolute top-0 -ml-0.5 translate-y-0.5 text-xs font-bold">↗</span>
        </>
      ) : null}
    </NextLink>
  )
}
