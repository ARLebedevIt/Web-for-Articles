import React, { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import CopyIcon from '@/shared/assets/icons/deprecated/copy.svg'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/index'

type CodeProps = {
  className?: string
  text: string
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
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