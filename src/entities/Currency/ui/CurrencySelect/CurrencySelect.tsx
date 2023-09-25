import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from '@/shared/ui/Popups'
import { Currency } from '../../model/types/currency'

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

  return (
    <ListBox
      className={className}
      readonly={readonly}
      onChange={onChangeHandler}
      value={value}
      items={opitionList}
      defaultValue={t('Укажите валюту')}
      direction="top right"
      label={t('Укажите валюту')}
      />
  )
})
