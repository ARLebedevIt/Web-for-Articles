import React, { ChangeEvent, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOptions<T extends string> {
  value: T
  content: string
}

type SelectType<T extends string> = {
  className?: string
  label?: string
  options?: SelectOptions<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string> (props: SelectType<T>) => {
  const {
    className, label, options, value, onChange, readonly,
  } = props

  const opitionList = useMemo(() => {
    return options?.map((opt) => {
      return (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )
    })
  }, [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }
  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && (
      <span className={cls.label}>{`${label}>`}</span>
      )}
      <select disabled={readonly} value={value} onChange={onChangeHandler} className={cls.select}>
        {opitionList}
      </select>
    </div>
  )
}
