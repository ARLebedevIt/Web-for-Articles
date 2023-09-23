import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Listbox } from 'shared/ui/ListBox/ListBox'
import { Country } from '../../model/types/country'

export default {}

type CountrySelectType = {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const opitionList = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
]

export const CountrySelect = memo(({
  className, value, onChange, readonly,
}: CountrySelectType) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value?: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <Listbox
      readonly={readonly}
      onChange={onChangeHandler}
      className={className}
      value={value}
      defaultValue={t('Укажите страну')}
      items={opitionList}
      direction="top right"
      label={t('Укажите страну')}
      />
  )
  // return (
  //   <Select
  //     label={t('Укажите страну')}
  //     options={opitionList}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readonly={readonly}
  //   />
  // )
})
