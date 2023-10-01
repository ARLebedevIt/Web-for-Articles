import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import cls from './Dropdown.module.scss'
import { AppLink } from '../../../AppLink/index'
import { mapDirection } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

export interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger?: ReactNode
  direction?: DropdownDirection
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const Dropdown = (props: DropdownProps) => {
  const {
    className, items, trigger, direction = 'bottom right',
  } = props

  const menuClasses = [mapDirection[direction], className]

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, idx) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(cls.item, { [popupCls.active]: active }, [])}>
              {item.content}
            </button>
          )
          if (item.href) {
            return (
              <Menu.Item key={`dropdown-key ${idx}`} as={AppLink} disabled={item.disabled} to={item.href}>
                {content}
              </Menu.Item>
            )
          }
          return (
            <Menu.Item key={`dropdown-key ${idx}`} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
