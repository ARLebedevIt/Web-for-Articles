import React, { memo } from 'react'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ScrollToTopButton } from '@/features/scrollToTopButton'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ScrollToolbar.module.scss'

type ScrollToolbarProps = {
  className?: string
}

export const ScrollToolbar = memo(({className}: ScrollToolbarProps) => {
  return (
    <VStack className={classNames(cls.ScrollToolbar, {} , [className])} justify='center' align='center' max>
      <ScrollToTopButton />
    </VStack>
  )
})

