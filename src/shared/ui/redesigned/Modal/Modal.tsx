import { ReactNode } from 'react'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import cls from './Modal.module.scss'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { Overlay } from '../Overlay'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Portal } from '../Portal'
import { toggleFeatures } from '@/shared/lib/features'

interface ModalType {
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  className?: string
  lazy?: boolean
}

const ANIMATION_DELAY = 200

export const Modal = (props: ModalType) => {
  const { children, isOpen, onClose, className, lazy } = props
  const { theme } = useTheme()

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(cls.Modal, mods, [
          className,
          theme,
          'app_modal',
          toggleFeatures({ 
            name: 'isAppRedesigned',
            on: () => cls.modalNew,
            off: () => cls.modalOld,
          }),
        ])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
}
