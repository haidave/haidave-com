'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { CurvedLine } from '~/modules/design-system/components/curved-line'

const HomeProjects = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 0.9], ['0%', '-69.85%'])

  return (
    <>
      <CurvedLine />
      <div ref={targetRef} className="relative -mx-12 h-[280svh]">
        <div className="sticky top-2 flex h-screen overflow-hidden px-12">
          <motion.div style={{ x }} className="mt-20 flex h-[85%] gap-8">
            <div className="w-[calc(50vw-4.375rem)] max-w-[calc(60rem-3.375rem)]">
              <h2 className="text-4xl uppercase">Selected Work</h2>
            </div>
            <div className="w-[calc(95vw-9rem)] max-w-[calc(114rem-9rem)] rounded-[2.5rem] border p-10">
              <h3>everbase</h3>
              <p>note-taking, personal management</p>
              <p>stack: next 14, server actions, drizzle orm, supabase, tiptap</p>
            </div>

            <div className="w-[calc(95vw-9rem)] max-w-[calc(114rem-9rem)] rounded-[2.5rem] border p-10">
              <h3>linear clone</h3>
              <p>polished landing page with micro animations</p>
              <p>stack: next 14, tailwind, framer motion</p>
            </div>

            <div className="w-[calc(94vw-9rem)] max-w-[calc(112.8rem-9rem)] rounded-[2.5rem] border p-10">
              <h3>photo gallery</h3>
              <p>infinite scroll, cosmos a like, my photos from x100vi!</p>
              <p>stack: next 14, framer motion</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export { HomeProjects }