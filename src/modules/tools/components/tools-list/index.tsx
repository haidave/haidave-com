import Image from 'next/image'
import Link from 'next/link'

import { cn } from '~/lib/utils'

import { tools } from '../../data'

export default function ToolsList() {
  const orderedTools = tools.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="mt-6">
      <ul>
        {orderedTools.map((tool, index) => (
          <li key={index}>
            <Link
              href={tool.link}
              target="_blank"
              className={cn(
                '-mx-4 -mt-px flex items-center gap-4 rounded-xl px-4',
                'hover:bg-tertiary focus-visible:shadow-focus focus-visible:outline-0'
              )}
            >
              {tool.logo ? <Image src={tool.logo} alt={tool.name} width={32} height={32} /> : null}
              <div className={cn('grid w-full items-center py-4', index !== 0 ? 'border-t border-[#232323]' : '')}>
                <p>{tool.name}</p>
                <p className="text-sm text-secondary">{tool.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
