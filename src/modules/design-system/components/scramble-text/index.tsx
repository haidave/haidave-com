'use client'

import React, { useEffect, useRef, useState } from 'react'

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'

type ScrambleTextProps = {
  originalText: string
  animatedText: string
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ originalText, animatedText }) => {
  const [scrambleState, setScrambleState] = useState(originalText)
  const iterationRef = useRef(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const longestLength = Math.max(originalText.length, animatedText.length)

  const handleMouseEnter = () => {
    iterationRef.current = 0

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      const newState = scrambleState
        .split('')
        .map((char, index) => {
          if (index < Math.floor(iterationRef.current)) {
            return animatedText[index] || '\u00A0'
          }

          return (index === 0 ? uppercaseLetters : lowercaseLetters)[
            Math.floor(Math.random() * (index === 0 ? uppercaseLetters : lowercaseLetters).length)
          ]
        })
        .join('')

      if (newState !== scrambleState) {
        setScrambleState(newState)
      }

      if (iterationRef.current >= longestLength && intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }

      iterationRef.current += 1 / 3
    }, 30)
  }

  const handleMouseLeave = () => {
    iterationRef.current = longestLength

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      const newState = scrambleState
        .split('')
        .map((char, index) => {
          if (index >= Math.floor(iterationRef.current)) {
            return originalText[index] || '\u00A0'
          }
          return (index === 0 ? uppercaseLetters : lowercaseLetters)[
            Math.floor(Math.random() * (index === 0 ? uppercaseLetters : lowercaseLetters).length)
          ]
        })
        .join('')

      if (newState !== scrambleState) {
        setScrambleState(newState)
      }

      if (iterationRef.current <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }

      iterationRef.current -= 1 / 3
    }, 30)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <span
      className={`inline-flex cursor-crosshair overflow-hidden font-mono`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {scrambleState}
    </span>
  )
}

export default ScrambleText
