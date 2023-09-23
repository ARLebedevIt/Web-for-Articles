import { Menu } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Fragment, ReactNode } from 'react'
import { DropdownDirection } from 'shared/types/ui'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import cls from './Dropdown.module.scss'
import { AppLink } from '../AppLink/ui/AppLink'

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

const mapDirection: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
}

export const Dropdown = (props: DropdownProps) => {
  const {
    className, items, trigger, direction = 'bottom right',
  } = props

  const menuClasses = [mapDirection[direction], className]

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(cls.item, { [cls.active]: active }, [])}>
              {item.content}
            </button>
          )
          if (item.href) {
            return (
              <Menu.Item as={AppLink} disabled={item.disabled} to={item.href}>
                {content}
              </Menu.Item>
            )
          }
          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
