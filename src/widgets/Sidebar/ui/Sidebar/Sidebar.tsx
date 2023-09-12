import React, { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwither } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import cls from './Sidebar.module.scss'

type SidebarTypes = {
  className?: string
}

export const Sidebar: FC<SidebarTypes> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(val => !val)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button type="button" onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwither />
        <LangSwitcher />
      </div>
    </div>
  )
}
