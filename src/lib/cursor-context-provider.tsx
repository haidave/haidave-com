'use client'

import { createContext, useContext, useState, type PropsWithChildren } from 'react'

type StateType = {
  canHover: boolean
  setCanHover: (canHover: boolean) => void
}

const CursorContext = createContext<StateType>({
  canHover: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCanHover: () => {},
})

export const CursorContextProvider = ({ children }: PropsWithChildren<object>) => {
  const [canHover, setCanHover] = useState(false)

  return <CursorContext.Provider value={{ canHover, setCanHover }}>{children}</CursorContext.Provider>
}

export const useCursorContext = () => useContext(CursorContext)
