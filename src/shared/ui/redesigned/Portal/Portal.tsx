import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalType {
  children: ReactNode
  element?: HTMLElement
}

export const Portal = (props: PortalType) => {
  const { children, element = document.body } = props
  return createPortal(children, element)
}
