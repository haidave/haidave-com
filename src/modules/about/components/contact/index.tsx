'use client'

import { CopyIcon } from 'lucide-react'
import { Toaster, toast } from 'sonner'

import { cn, copyToClipboard } from '~/lib/utils'
import { Link } from '~/modules/design-system/components/link'
import { Section } from '~/modules/design-system/components/section'

const Contact = () => {
  return (
    <div>
      <Section.Subtitle>Contact</Section.Subtitle>
      <Section.Block>
        <div className="flex justify-between py-4">
          <span>E-mail</span>
          {/* TODO: Create Button component */}
          <button
            onClick={() => {
              void copyToClipboard('dave@haidave.com')
              toast.success('Copied to clipboard')
            }}
            className={cn(
              '-mx-4 -my-2 flex items-center gap-2 rounded-xl px-4 py-2',
              'transition-background duration-500 ease-in-out',
              'hover:bg-tertiary focus-visible:shadow-focus focus-visible:outline-0'
            )}
          >
            <CopyIcon size={16} /> Copy
          </button>
        </div>
        <div className="flex justify-between gap-4 border-t border-[#232323] py-4">
          <p>Stay in touch</p>
          <div className="grid justify-items-end gap-4 min-[420px]:flex">
            <Link href="https://twitter.com/haidave_" isExternal>
              Twitter
            </Link>
            <Link href="https://www.linkedin.com/in/haidave/" isExternal>
              LinkedIn
            </Link>
            <Link href="https://read.cv/haidave" isExternal>
              CV
            </Link>
          </div>
        </div>
      </Section.Block>
      <Toaster closeButton />
    </div>
  )
}

export { Contact }
