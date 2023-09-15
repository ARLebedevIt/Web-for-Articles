import React, { FC, memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwither } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { useTranslation } from 'react-i18next'
import { SidbarItemsList } from 'widgets/Sidebar/model/items'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'

type SidebarTypes = {
  className?: string
}

export const Sidebar = memo((props: SidebarTypes) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(val => !val)
  }
  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <div className={cls.items}>

        {SidbarItemsList.map(item => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}

      </div>
      <Button
        className={cls.collapseBtn}
        data-testid="sidebar_toggle"
        type="button"
        onClick={onToggle}
        square
        size={ButtonSize.L}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwither />
        <LangSwitcher />
      </div>
    </div>
  )
})
