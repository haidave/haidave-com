import Link from 'next/link'
import { CornerUpLeftIcon } from 'lucide-react'

import { ROUTES } from '~/config/routes'
import { cn } from '~/lib/utils'
import { Section } from '~/modules/design-system/components/section'

const NoteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section.Root>
      <Link
        href={ROUTES.notes}
        className={cn(
          'text-secondary transition lg:fixed lg:-ml-28',
          'hover:text-primary focus-visible:shadow-focus focus-visible:outline-0'
        )}
      >
        <div className="mb-8 flex items-center gap-2 text-sm lg:mb-auto">
          <CornerUpLeftIcon size={18} />
          Notes
        </div>
      </Link>
      {children}
    </Section.Root>
  )
}

export { NoteLayout }
