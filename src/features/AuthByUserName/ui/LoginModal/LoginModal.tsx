import React, { FC, Suspense } from 'react'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { classNames } from '@/shared/lib/classNames/classNames'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModalType {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalType> = (props) => {
  const { className, isOpen, onClose } = props
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
      <Suspense fallback={null}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
