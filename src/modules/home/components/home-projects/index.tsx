'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HomeProjects = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 0.85], ['0%', '-69.9%'])

  return (
    <>
      <div className="h-px w-full bg-white/50" />
      <div ref={targetRef} className="relative -mx-12 h-[280svh]">
        <div className="sticky top-10 flex h-screen overflow-hidden px-12">
          <motion.div style={{ x }} className="mt-20 flex h-[85%] gap-8">
            <div className="w-[calc(50vw-4.375rem)]">
              <h2 className="text-4xl uppercase">Selected Work</h2>
            </div>
            <div className="w-[calc(95vw-9rem)] rounded-[2.5rem] border p-10">
              <h3>everbase</h3>
              <p>note-taking, personal management</p>
              <p>stack: next 14, server actions, drizzle orm, supabase, tiptap</p>
            </div>

            <div className="w-[calc(95vw-9rem)] rounded-[2.5rem] border p-10">
              <h3>linear clone</h3>
              <p>polished landing page with micro animations</p>
              <p>stack: next 14, tailwind, framer motion</p>
            </div>

            <div className="w-[calc(94vw-9rem)] rounded-[2.5rem] border p-10">
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
