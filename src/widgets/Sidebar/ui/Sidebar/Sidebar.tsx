import React, { memo, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { ThemeSwither } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'

type SidebarTypes = {
  className?: string
}

export const Sidebar = memo((props: SidebarTypes) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(val => !val)
  }
  const sidbarItemsList = useSelector(getSidebarItems)

  const sidebarList = useMemo(() => sidbarItemsList.map(item => (
    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
  )), [collapsed, sidbarItemsList])

  return (
    <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <VStack role="navigation" gap="16" className={cls.items}>
        {sidebarList}
      </VStack>
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
    </aside>
  )
})
