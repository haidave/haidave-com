'use client'

import { createContext, useContext, type PropsWithChildren } from 'react'

type StateType = {
  isMobile: boolean
}

const AppContext = createContext<StateType>({} as StateType)

export const AppContextProvider = ({ children, initialState }: PropsWithChildren<{ initialState: StateType }>) => {
  return <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
