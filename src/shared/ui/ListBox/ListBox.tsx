import { Fragment, ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { DropdownDirection } from '../../types/ui'
import cls from './ListBox.module.scss'
import { Button } from '../Button/ui/Button'
import { HStack } from '../Stack'

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

const mapDirection: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
}

export const Listbox = (props: ListBoxProps) => {
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
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}>
        <HListBox.Button className={cls.trigger}>
          <Button disabled={readonly}>
            {value || defaultValue}
          </Button>
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
                    [cls.active]: active,
                    [cls.disabled]: item.disabled,
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
