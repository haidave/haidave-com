import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '~/lib/utils'

type ToolListItemProps = {
  tool: {
    name: string
    description: string
    link: string
    logo: StaticImageData
  }
  index?: number
}

const ToolListItem = ({ tool, index }: ToolListItemProps) => {
  return (
    <li>
      <Link
        href={tool.link}
        target="_blank"
        className={cn(
          '-mx-4 -mt-px flex items-center gap-4 rounded-xl px-4',
          'hover:bg-tertiary focus-visible:shadow-focus focus-visible:outline-0'
        )}
      >
        <Image src={tool.logo} alt={tool.name} width={32} height={32} priority placeholder="blur" />
        <div className={cn('grid w-full items-center py-4', index !== 0 ? 'border-t border-[#232323]' : '')}>
          <p>{tool.name}</p>
          <p className="text-sm text-secondary">{tool.description}</p>
        </div>
      </Link>
    </li>
  )
}

export { ToolListItem }
