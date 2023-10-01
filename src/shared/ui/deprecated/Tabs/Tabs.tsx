import React, { ReactNode, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card, CardTheme } from '../Card/Card'
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
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { tabs, className, onTabChange, value } = props

  const onClickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        onTabChange(tab)
      }
    },
    [onTabChange],
  )

  return (
    <div data-testid="Tabs" className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card
          data-testid={`Tabs.${tab.value}`}
          onClick={onClickHandle(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          key={tab.value}
          className={cls.tab}>
          {tab.content}
        </Card>
      ))}
    </div>
  )
}
