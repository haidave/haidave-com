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
          'fixed -ml-28 text-secondary transition',
          'hover:text-primary focus-visible:shadow-focus focus-visible:outline-0'
        )}
      >
        <div className="flex items-center gap-2 text-sm">
          <CornerUpLeftIcon size={18} />
          Back
        </div>
      </Link>
      {children}
    </Section.Root>
  )
}

export { NoteLayout }
