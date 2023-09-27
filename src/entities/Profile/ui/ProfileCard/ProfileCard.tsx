import { useTranslation } from 'react-i18next'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text'
import { Input } from '@/shared/ui/Input'
import { Loader } from '@/shared/ui/Loader'
import { Avatar } from '@/shared/ui/Avatar'
import { Currency, CurrencySelect } from '@/entities/Currency'
import { Country, CountrySelect } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Profile } from '../../model/type/profile'
import cls from './ProfileCard.module.scss'

type ProfileCardType = {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  onChangeLastName?: (value?: string) => void
  onChangeFirstName?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUserName?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
  readOnly?: boolean
}

export const ProfileCard = (props: ProfileCardType) => {
  const {
    className, data, error, isLoading, onChangeFirstName, onChangeLastName, readOnly, onChangeAge, onChangeCity,
    onChangeAvatar, onChangeUserName, onChangeCountry, onChangeCurrency,
  } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <HStack justify="center" className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке профиля')}
          theme={TextTheme.ERROR}
          text={t('Обновите страницу')}
        />
      </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readOnly,
  }

  return (
    <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
      <HStack justify="center" max className={cls.avararWrapper}>
        <Avatar src={data?.avatar} />
      </HStack>
      )}
      <Input
        data-testid="ProfileCard.FirstName"
        onChange={onChangeFirstName}
        readOnly={readOnly}
        value={data?.first}
        placeholder={t('Ваше имя')} />
      <Input
        data-testid="ProfileCard.LastName"
        onChange={onChangeLastName}
        readOnly={readOnly}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')} />
      <Input onChange={onChangeAge} readOnly={readOnly} value={data?.age} placeholder={t('Ваш возраст')} />
      <Input onChange={onChangeCity} readOnly={readOnly} value={data?.city} placeholder={t('Город')} />
      <Input onChange={onChangeAvatar} readOnly={readOnly} value={data?.avatar} placeholder={t('Аватар')} />
      <Input
        onChange={onChangeUserName}
        readOnly={readOnly}
        value={data?.username}
        placeholder={t('Имя пользователя')}
        />
      <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readonly={readOnly} />
      <CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readonly={readOnly} />
    </VStack>
  )
}
