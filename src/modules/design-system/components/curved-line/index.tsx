'use client'

import { useCallback, useEffect, useRef } from 'react'

import { cn } from '~/lib/utils'

type CurvedLineProps = {
  className?: string
}

const CurvedLine = ({ className }: CurvedLineProps) => {
  const path = useRef<SVGPathElement>(null)
  const progress = useRef(0)
  const x = useRef(0.5)
  const time = useRef(Math.PI / 2)
  const reqId = useRef(0)

  const setPath = useCallback(
    (progress: number) => {
      const { innerWidth } = window
      const width = innerWidth

      path.current?.setAttribute('d', `M0 50 Q${width * x.current} ${50 + progress}, ${width} 50`)
    },
    [x]
  )

  useEffect(() => {
    if (path.current) {
      setPath(progress.current)
    }
  }, [progress, setPath])

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a

  const handleMouseEnter = () => {
    if (reqId.current) {
      window.cancelAnimationFrame(reqId.current)
      resetAnimation()
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { movementY, clientX } = e
    const pathBound = path.current?.getBoundingClientRect()
    if (pathBound) {
      x.current = (clientX - pathBound.left) / pathBound.width
    }

    progress.current += movementY
    setPath(progress.current)
  }

  const handleMouseLeave = () => {
    animateOut()
  }

  const animateOut = () => {
    const newProgress = progress.current * Math.sin(time.current)
    progress.current = lerp(progress.current, 0, 0.05)
    time.current += 0.2
    setPath(newProgress)

    if (Math.abs(progress.current) > 0.75) {
      reqId.current = window.requestAnimationFrame(animateOut)
    } else {
      resetAnimation()
    }
  }

  const resetAnimation = () => {
    progress.current = 0
    time.current = Math.PI / 2
  }

  return (
    <div className={cn('relative h-px w-full', className)}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative top-[-20px] z-10 h-[40px] hover:top-[-75px] hover:h-[150px]"
      />
      <svg className="absolute top-[-50px] h-[100px] w-full">
        <path className="stroke-white stroke-1" ref={path} />
      </svg>
    </div>
  )
}

export { CurvedLine }
