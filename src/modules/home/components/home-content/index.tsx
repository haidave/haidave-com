'use client'

import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LightbulbIcon, XIcon } from 'lucide-react'

import { ROUTES } from '~/config/routes'
import { cn } from '~/lib/utils'
import { Link } from '~/modules/design-system/components/link'
import { Section } from '~/modules/design-system/components/section'
import { arcLogo, raycastLogo, vsCodeLogo } from '~/modules/tools/assets'
import { ToolListItem } from '~/modules/tools/components/tools-list/parts/tools-list-item'

import { HomeLatestResources } from '../home-latest-resources'

const homePageTools = [
  {
    name: 'Arc',
    description: 'Innovative browser.',
    link: 'https://arc.net/',
    logo: arcLogo,
  },
  {
    name: 'VS Code',
    description: 'Code editor of choice.',
    link: 'https://code.visualstudio.com/',
    logo: vsCodeLogo,
  },
  {
    name: 'Raycast',
    description: 'Spotlight on steroids powered by AI.',
    link: 'https://www.raycast.com/',
    logo: raycastLogo,
  },
]

const HomePageContent = () => {
  const [isTipHidden, setIsTipHidden] = useState(false)

  const handleHideTip = useCallback(() => {
    setIsTipHidden(true)
  }, [])

  return (
    <AnimatePresence initial={false}>
      <div className="mt-10 grid gap-10 sm:mt-14 sm:gap-14">
        <div className="grid gap-4">
          <p>
            Crafting polished web experiences with React & Next.js and simultaneously expanding into mobile development
            using React Native & Expo.
          </p>
        </div>

        {isTipHidden ? null : (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ opacity: { duration: 0.2 } }}
            className="relative hidden items-center gap-4 rounded-xl border p-4 pr-6 font-mono text-xs text-secondary lg:flex"
          >
            <LightbulbIcon />
            <div>
              <p>Btw, you can use keyboard shortcuts 1 → 5 for quick page navigation.</p>
              <p>Try pressing 2, 3, 4, 5 and then 1 to return here. Cool, right?</p>
            </div>
            <button
              aria-label="Hide tip"
              onClick={handleHideTip}
              className="group ml-auto self-start hover:text-primary focus-visible:shadow-focus focus-visible:outline-0"
            >
              <XIcon
                size={20}
                className={cn(
                  'text-tertiary',
                  'transition-colors duration-300 ease-in-out',
                  'group-hover:text-primary'
                )}
              />
            </button>
          </motion.div>
        )}

        {/* Latest Inspirations */}
        <motion.div layout className="grid">
          <Section.Subtitle>Latest Inspirations</Section.Subtitle>
          <Section.Block>
            <p>Check out recently added gems in my curated collection.</p>
          </Section.Block>

          <HomeLatestResources />

          <Link href={ROUTES.resources} className="mt-4 justify-self-end text-sm">
            View All
          </Link>
        </motion.div>

        {/* Everyday Essentials */}
        <motion.div layout className="grid">
          <Section.Subtitle>Everyday Essentials</Section.Subtitle>
          <Section.Block>
            <p>Tools I use on daily basis.</p>
          </Section.Block>

          <ul className="mt-2">
            {homePageTools.map((tool, index) => (
              <ToolListItem key={tool.name} tool={tool} index={index} />
            ))}
          </ul>

          <Link href={ROUTES.tools} className="mt-4 justify-self-end text-sm">
            View All
          </Link>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export { HomePageContent }
