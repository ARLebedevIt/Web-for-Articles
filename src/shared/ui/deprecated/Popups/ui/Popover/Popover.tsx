import { ReactNode, memo } from 'react'
import { Popover as HPopover } from '@headlessui/react'
import { DropdownDirection } from '@/shared/types/ui'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Popover.module.scss'
import { mapDirection } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

type PopoverProps = {
  className?: string
  trigger?: ReactNode
  direction?: DropdownDirection
  children: ReactNode
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const Popover = memo((props: PopoverProps) => {
  const {
    className, direction = 'bottom right', trigger, children,
  } = props

  const menuClasses = [mapDirection[direction], className]

  return (
    <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
})
