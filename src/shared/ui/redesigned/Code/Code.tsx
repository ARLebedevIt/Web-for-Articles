import React, { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import CopyIconDeprecated from '@/shared/assets/icons/deprecated/copy.svg'
import cls from './Code.module.scss'
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '../../deprecated/Button/index'
import { ToggleFeatures } from '@/shared/lib/features'
import CopyIcon from '@/shared/assets/icons/redesigned/copy.svg'
import { Icon } from '../Icon'

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon
            width={20}
            height={20}
            Svg={CopyIcon}
            clickable
            onClick={onCopy}
            className={cls.copyBtn}
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <ButtonDeprecated
            onClick={onCopy}
            className={cls.copyBtn}
            theme={ButtonTheme.CLEAR}>
            <CopyIconDeprecated className={cls.copyIcon} />
          </ButtonDeprecated>
          <code>{text}</code>
        </pre>
      }
    />
  )
})
