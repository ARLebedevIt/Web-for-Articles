import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { Currency } from '../../model/types/currency'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'

type CurrencySelectType = {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const opitionList = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
]

export const CurrencySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectType) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value?: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  const props = {
    className,
    readonly,
    onChange: onChangeHandler,
    value,
    items: opitionList,
    defaultValue: t('Валюта: '),
    direction: "top right" as const,
    label: t('Валюта: '),
  }

  return (
    <ToggleFeatures
    feature='isAppRedesigned'
    on={<ListBox {...props} /> }
    off={<ListBoxDeprecated {...props}/>}
    />
  )
})
