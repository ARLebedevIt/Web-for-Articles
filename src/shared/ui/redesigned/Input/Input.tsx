import React, {
  InputHTMLAttributes,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { HStack } from '../Stack'
import { Text } from '../Text'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>

type InputSize = 's' | 'm' | 'l'

interface InputType extends HTMLInputProps {
  className?: string
  value?: string | number
  label?: string
  onChange?: (val: string) => void
  type?: string
  autofocus?: boolean
  readOnly?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
  size?: InputSize
}

export const Input = memo((props: InputType) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readOnly,
    addonLeft,
    label,
    size = 'm',
    addonRight,
    ...otherProps
  } = props
  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readOnly]: readOnly,
    [cls.isFocused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  }

  const input = (
    <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      <input
        ref={ref}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        onChange={onChangeHandler}
        value={value}
        onBlur={onBlur}
        className={cls.input}
        onFocus={onFocus}
        {...otherProps}
      />
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  )

  if (label) {
    return (
      <HStack max gap="8">
        <Text text={label} />
        {input}
      </HStack>
    )
  }

  return input
})
