import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputType extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (val: string) => void
  type?: string
  autofocus?: boolean;
  readOnly?: boolean
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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>
      )}
      <input
        ref={ref}
        readOnly={readOnly}
        type={type}
        onChange={onChangeHandler}
        value={value}
        className={cls.input}
        onFocus={onFocus}
        {...otherProps}
      />
    </div>
  )
})
