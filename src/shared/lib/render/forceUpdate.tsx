import { ReactNode, createContext, useContext, useMemo, useState } from "react"

const ForceUpdate = createContext({
  value: true,
  forceUpdate: () => {}
})

export const useForceUpdate = () => {
  const { forceUpdate } = useContext(ForceUpdate)

  return forceUpdate
}

export function ForceUpdateProvider ({children}: {children: ReactNode}) {
  const [value, setValue] = useState(true)

  const forceUpdate = () => {
    setValue(prev => !prev)
    setTimeout(() => {
      setValue(prev => !prev)
    }, 0)
  }
  
  const valueContext = useMemo(() => {
    return {
      value,
      forceUpdate
    }
  }, [value])

  if (!value) {
    return null
  }
 
  return (
    <ForceUpdate.Provider value={valueContext}>
      {children}
    </ForceUpdate.Provider>
  )
}
