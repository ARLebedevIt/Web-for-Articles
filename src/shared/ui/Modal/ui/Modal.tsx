import { ReactNode } from 'react'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { Overlay } from '../../Overlay/Overlay'
import { Mods, classNames } from '../../../lib/classNames/classNames'
import { Portal } from '../../Portal/Portal'
import cls from './Modal.module.scss'

interface ModalType {
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  className?: string
  lazy?: boolean
}

const ANIMATION_DELAY = 200

export const Modal = (props: ModalType) => {
  const {
    children, isOpen, onClose, className, lazy,
  } = props

  const { close, isClosing, isMounted } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
}
