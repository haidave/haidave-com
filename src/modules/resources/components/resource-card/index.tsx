import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLinkIcon } from 'lucide-react'

import { cn } from '~/lib/utils'

import { type Resource } from '../../utils/types'

type ResourceCardProps = {
  resource: Resource
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <motion.li
      layout
      key={resource.name}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ opacity: { duration: 0.2 } }}
      className={cn(
        'group max-w-[320px] rounded-xl border',
        'transition-colors duration-300 ease-in-out',
        'hover:border-[#7e7e7e]'
      )}
    >
      <Link href={resource.url} target="_blank" className="relative flex h-full flex-col justify-between">
        <div className="h-44 w-full rounded-t-xl bg-black" />

        <div className="p-4">
          <p>{resource.name}</p>
          <p className="line-clamp-2 text-sm text-secondary">{resource.description}</p>
        </div>

        <div className="mt-auto flex items-center justify-between px-4 pb-4 pt-2">
          <div className="flex gap-2">
            <div className="grid h-6 place-items-center rounded-full bg-secondary px-3 text-xs text-tertiary">
              {resource.category}
            </div>
            <div className="grid h-6 place-items-center rounded-full bg-secondary px-3 text-xs text-tertiary">
              {resource.subcategory}
            </div>
          </div>
          <ExternalLinkIcon
            size={18}
            className="text-tertiary transition-colors duration-300 ease-in-out group-hover:text-primary"
          />
        </div>

        <div className="absolute"></div>
      </Link>
    </motion.li>
  )
}

export { ResourceCard }
