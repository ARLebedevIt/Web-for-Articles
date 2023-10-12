import React, { memo, useMemo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { VStack } from '@/shared/ui/redesigned/Stack'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { ThemeSwither } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ArrowIcon from '@/shared/assets/icons/redesigned/arrow.svg'
import { useSidebarItems } from '../../model/selectors/getSidebarItems'
import { useMediaQueries } from '@/shared/lib/hooks/useMediaQuery/useMediaQuery'

type SidebarTypes = {
  className?: string
}

export const Sidebar = memo((props: SidebarTypes) => {
  const { className } = props

  const { md } = useMediaQueries()
  const [collapsed, setCollapsed] = useState(md)

  const onToggle = () => {
    setCollapsed(val => !val)
  }

  const sidbarItemsList = useSidebarItems()

  const sidebarList = useMemo(
    () =>
      sidbarItemsList.map(item => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidbarItemsList],
  )

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className],
          )}>
          <AppLogo size={collapsed ? 30 : 70} className={cls.appLogo} />
          <VStack role="navigation" gap="16" className={cls.itemRedesigned}>
            {sidebarList}
          </VStack>
          <Icon
            className={cls.collapseBtn}
            data-testid="sidebar_toggle"
            onClick={onToggle}
            Svg={ArrowIcon}
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwither />
            <LangSwitcher />
          </div>
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}>
          <VStack role="navigation" gap="16" className={cls.items}>
            {sidebarList}
          </VStack>
          <ButtonDeprecated
            className={cls.collapseBtn}
            data-testid="sidebar_toggle"
            type="button"
            onClick={onToggle}
            square
            size={ButtonSize.L}
            theme={ButtonTheme.BACKGROUND_INVERTED}>
            {collapsed ? '>' : '<'}
          </ButtonDeprecated>
          <div className={cls.switchers}>
            <ThemeSwither />
            <LangSwitcher />
          </div>
        </aside>
      }
    />
  )
})
