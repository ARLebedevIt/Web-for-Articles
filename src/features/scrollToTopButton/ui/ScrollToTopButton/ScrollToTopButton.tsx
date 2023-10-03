import React, { memo } from 'react'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { classNames } from '@/shared/lib/classNames/classNames'
import ArrowUp from '@/shared/assets/icons/redesigned/arrow-up.svg'
import cls from './ScrollToTopButton.module.scss'

type ScrollToTopButtonProps = {
  className?: string
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props

  const onClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <Icon
      Svg={ArrowUp}
      className={classNames(cls.ScrollToTopButton, {}, [className])}
      onClick={onClick}
      width={32}
      height={32}
      clickable
    />
  )
})
