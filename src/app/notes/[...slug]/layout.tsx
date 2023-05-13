import Link from 'next/link'

import { ROUTES } from '~/config/routes'
import { Section } from '~/modules/layout/components/section'

export default function NoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section.Root>
      <Link href={ROUTES.notes} className="fixed -ml-28">
        Back
      </Link>
      {children}
    </Section.Root>
  )
}
