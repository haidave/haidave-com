import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    console.error('Failed to copy to clipboard')
  }
}

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

export { cn, copyToClipboard, isTouchDevice }
