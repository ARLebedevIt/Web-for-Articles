import { Fragment, ReactNode, useMemo } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '../../../../../types/ui'
import cls from './ListBox.module.scss'
import { HStack } from '../../../../redesigned/Stack'
import { mapDirection } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'
import { Button } from '../../../Button/index'
import { Icon } from '../../../Icon'
import ArrowIcon from '@/shared/assets/icons/redesigned/arrow.svg'

export interface ListBoxItem<T extends string> {
  value: T
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[]
  className?: string
  value?: T
  defaultValue?: string
  onChange: (value: T) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    items,
    onChange,
    defaultValue,
    value,
    readonly,
    direction = 'bottom right',
    label,
  } = props

  const optionsClasses = [mapDirection[direction], popupCls.menu]

  const mods: Mods = {
    [cls.readOnly]: readonly,
  }

  const selectedItem = useMemo(() => {
    return items?.find(item => item.value === value)
  }, [items, value])

  return (
    <HStack gap="4">
      {label && (
        <span className={classNames(cls.label, mods, [className])}>
          {label}
        </span>
      )}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}>
        <HListBox.Button
          as={Button}
          addonRight={<Icon Svg={ArrowIcon} />}
          variant="filled" 
          // disabled={readonly}
          className={popupCls.trigger}>
          {selectedItem?.content ?? defaultValue}
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map(item => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                    [popupCls.selected]: selected,
                  })}>
                  {selected}
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
