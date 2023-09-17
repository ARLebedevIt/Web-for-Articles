import React, { ChangeEvent, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOptions {
  value: string
  content: string
}

type SelectType = {
  className?: string
  label?: string
  options?: SelectOptions[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: SelectType) => {
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
    onChange?.(e.target.value)
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
})
