import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export type TextVariant = 'primary' | 'error' | 'accent'

export type TextAlign = 'right' | 'left' | 'center'

export type TextSize = 'm' | 'l' | 's'

export type TextGap = '0' | '8' | '16' | '24'

interface TextType {
  className?: string
  title?: string
  text?: string
  variant?: TextVariant
  align?: TextAlign
  size?: TextSize,
  bold?: boolean
  gap?: TextGap
  'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToClass: Record<TextSize, string> = {
  s: cls.size_s,
  m: cls.size_m,
  l: cls.size_l,
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
}

const mapGapToClass: Record<TextGap, string> = {
  "0": cls.gap_0,
  "8": cls.gap_8,
  "16": cls.gap_16,
  "24": cls.gap_24,
}

export const Text = memo((props: TextType) => {
  const {
    className,
    text,
    gap = '8',
    bold = false,
    variant = 'primary',
    title,
    align = 'left',
    size = 'm',
    'data-testid': dataTestId = '',
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]
  const sizeClass = mapSizeToClass[size]
  const gapClass = mapGapToClass[gap]

  return (
    <div className={classNames(cls.Text, {[cls.bold]: bold}, [className, cls[variant], cls[align], sizeClass, gapClass])}>
      {title && (
        <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
          {text}
        </p>
      )}
    </div>
  )
})
