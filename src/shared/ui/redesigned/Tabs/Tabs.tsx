import React, { ReactNode, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '../Card/Card'
import { Flex, FlexDirection } from '../Stack/Flex/Flex'
import cls from './Tabs.module.scss'

export interface TabItem<T extends string> {
  value: T
  content: ReactNode
}

type TabsProps<T extends string> = {
  className?: string
  tabs: TabItem<T>[]
  value: T
  onTabChange: (tab: TabItem<T>) => void
  direction?: FlexDirection
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { tabs, className, onTabChange, direction = 'row', value } = props

  const onClickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        onTabChange(tab)
      }
    },
    [onTabChange],
  )

  return (
    <Flex
      align="start"
      direction={direction}
      gap="8"
      data-testid="Tabs"
      className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => {
        return (
          <Card
            border="round"
            data-testid={`Tabs.${tab.value}`}
            onClick={onClickHandle(tab)}
            variant={tab.value === value ? 'light' : 'normal'}
            key={tab.value}>
            {tab.content}
          </Card>
        )
      })}
    </Flex>
  )
}
