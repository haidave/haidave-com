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
    >
      <Link
        href={resource.url}
        target="_blank"
        className={cn(
          'relative flex h-full flex-col justify-between rounded-xl border ',
          'transition-colors duration-300 ease-in-out',
          'hover:bg-tertiary focus-visible:shadow-focus focus-visible:outline-0'
        )}
      >
        {/* <div className="h-24 w-full rounded-t-xl bg-black" /> */}

        <div className="px-4 pb-4 pt-3">
          <p>{resource.name}</p>
          <p className="line-clamp-2 text-xs text-secondary">{resource.description}</p>
        </div>

        <div className="mt-auto flex items-center justify-between px-4 pb-4 pt-2">
          <div className="grid h-6 place-items-center rounded-full bg-secondary px-3 text-xs text-tertiary">
            {resource.subcategory}
          </div>
          <ExternalLinkIcon size={18} className="text-tertiary transition-colors duration-300 ease-in-out" />
        </div>
      </Link>
    </motion.li>
  )
}

export { ResourceCard }
