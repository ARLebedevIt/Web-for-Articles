import React, {
  ReactNode,
  TextareaHTMLAttributes,
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './TextArea.module.scss'
import { VStack } from '../Stack'
import { Text } from '../Text'

type HTMLTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'readOnly'
>

type TextAreaSize = 's' | 'm' | 'l'

interface TextAreaType extends HTMLTextAreaProps {
  className?: string
  value?: string | number
  label?: string
  onChange?: (val: string) => void
  autofocus?: boolean
  readOnly?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
  size?: TextAreaSize
}

export const TextArea = memo((props: TextAreaType) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    autofocus,
    readOnly,
    addonLeft,
    label,
    size = 'm',
    addonRight,
    ...otherProps
  } = props

  const ref = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus()
    }
  }, [autofocus])

  useLayoutEffect(() => {
    ref!.current!.style.height = "inherit"
    ref!.current!.style.height = `${Math.max(
      ref!.current!.scrollHeight,
      24
    )}px`    
  }, [value])


  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readOnly]: readOnly,
    [cls.isFocused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  }

  const textArea = (
    <div className={classNames(cls.TextAreaWrapper, mods, [className, cls[size]])}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      <textarea
        ref={ref}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChangeHandler}
        value={value}
        onBlur={onBlur}
        className={cls.textarea}
        onFocus={onFocus}
        {...otherProps}
      />
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  )

  if (label) {
    return (
      <VStack max gap="16">
        <Text text={label} />
        {textArea}
      </VStack>
    )
  }

  return textArea
})
