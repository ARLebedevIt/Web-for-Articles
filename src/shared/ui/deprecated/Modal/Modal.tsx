import { ReactNode } from 'react'
import { Portal } from '@headlessui/react'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import cls from './Modal.module.scss'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { Overlay } from '../../redesigned/Overlay'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ModalType {
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  className?: string
  lazy?: boolean
}

const ANIMATION_DELAY = 200

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const Modal = (props: ModalType) => {
  const {
    children, isOpen, onClose, className, lazy,
  } = props
  const { theme } = useTheme()

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
      <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
}
