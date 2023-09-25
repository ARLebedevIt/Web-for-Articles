import React, { ReactNode, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import CopyIcon from '@/shared/assets/icons/copy.svg'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/ui/Button'
import { Icon } from '../Icon/Icon'

type CodeProps = {
  className?: string
  text: string
}

export const Code = memo((props: CodeProps) => {
  const { text, className } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
})
