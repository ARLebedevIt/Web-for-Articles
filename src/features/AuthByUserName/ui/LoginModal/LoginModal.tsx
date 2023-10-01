import React, { FC, Suspense } from 'react'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/deprecated/Loader'
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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
