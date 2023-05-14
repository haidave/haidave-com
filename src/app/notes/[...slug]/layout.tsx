import Link from 'next/link'
import { CornerUpLeftIcon } from 'lucide-react'

import { ROUTES } from '~/config/routes'
import { Section } from '~/modules/layout/components/section'

export default function NoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section.Root>
      <Link href={ROUTES.notes} className="fixed -ml-28">
        <div className="flex items-center gap-2 text-sm text-secondary">
          <CornerUpLeftIcon size={18} />
          Back
        </div>
      </Link>
      {children}
    </Section.Root>
  )
}
