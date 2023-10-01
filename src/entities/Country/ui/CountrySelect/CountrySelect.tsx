import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { Country } from '../../model/types/country'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'

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

  const props = {
    className,
    readonly,
    onChange: onChangeHandler,
    value,
    items: opitionList,
    defaultValue: t('Страна: '),
    direction: "top right" as const,
    label: t('Страна: '),
  }

  return (
      <ToggleFeatures
      feature='isAppRedesigned'
      on={<ListBox {...props} /> }
      off={<ListBoxDeprecated {...props}/>}
      />
  )
})
