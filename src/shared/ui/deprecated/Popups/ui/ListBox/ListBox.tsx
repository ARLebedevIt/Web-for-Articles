import { Fragment, ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '../../../../../types/ui'
import cls from './ListBox.module.scss'
import { HStack } from '../../../../redesigned/Stack'
import { mapDirection } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'
import { Button } from '../../../Button/index'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const ListBox = (props: ListBoxProps) => {
  const {
    className, items, onChange, defaultValue, value, readonly, direction = 'bottom right', label,
  } = props

  const optionsClasses = [mapDirection[direction]]

  const mods: Mods = {
    [cls.readOnly]: readonly,
  }
  return (
    <HStack gap="4">
      {label && <span className={classNames(cls.label, mods, [className])}>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}>
        <HListBox.Button as={Button} 
        // disabled={readonly} 
        className={popupCls.trigger}>
            {value || defaultValue}
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map(item => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li className={classNames(
                  cls.item,
                  {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                  },
                )}
                >
                  {selected && '!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>

  )
}
