'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { cn } from '~/lib/utils'

const ThemeItem = ({ selectedTheme }: { selectedTheme: string }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button onClick={() => setTheme(selectedTheme)} className="flex items-center gap-1">
      <div
        className={cn(
          'aspect-square w-[11px] border-[0.5px] border-black dark:border-white',
          theme === selectedTheme && mounted ? 'bg-black dark:bg-white' : 'bg-none'
        )}
      />
      <span className="font-mono font-light uppercase">{selectedTheme}</span>
    </button>
  )
}

const ThemeSwitcher = () => {
  return (
    <ul className="absolute -left-4 bottom-[-13px] flex origin-left -rotate-90 gap-4">
      <li>
        <ThemeItem selectedTheme="light" />
      </li>
      <li>
        <ThemeItem selectedTheme="dark" />
      </li>
    </ul>
  )
}

export { ThemeSwitcher }
