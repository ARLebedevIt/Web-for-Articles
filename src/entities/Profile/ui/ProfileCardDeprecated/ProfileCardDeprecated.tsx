import { useTranslation } from "react-i18next"
import { ProfileCardType } from "../ProfileCard/ProfileCard"
import { Mods, classNames } from "@/shared/lib/classNames/classNames"
import { HStack, VStack } from "@/shared/ui/redesigned/Stack"
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { CurrencySelect } from "@/entities/Currency"
import cls from './ProfileCardDeprecated.module.scss'
import { CountrySelect } from "@/entities/Country"
import { Loader } from "@/shared/ui/deprecated/Loader"
import {Text as TextDeprecated, TextAlign, TextTheme } from "@/shared/ui/deprecated/Text"

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation()
  return (
    <HStack
      justify="center"
      className={classNames(cls.ProfileCard, {}, [cls.error])}>
      <TextDeprecated
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке профиля')}
        theme={TextTheme.ERROR}
        text={t('Обновите страницу')}
      />
    </HStack>
  )
}

export const ProfileCardDeprecatedSkeleton = () => {
  return (
    <HStack
    justify="center"
    className={classNames(cls.ProfileCard, { [cls.loading]: true }, [])}>
    <Loader />
  </HStack>
  )
}

export const DeprecatedProfileCard = (props: ProfileCardType) => {
  const {
    className,
    data,
    onChangeFirstName,
    onChangeLastName,
    readOnly,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUserName,
    onChangeCountry,
    onChangeCurrency,
  } = props
  const { t } = useTranslation()

  const mods: Mods = {
    [cls.editing]: !readOnly,
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify="center" max className={cls.avararWrapper}>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}
      <InputDeprecated
        data-testid="ProfileCard.FirstName"
        onChange={onChangeFirstName}
        readOnly={readOnly}
        value={data?.first}
        placeholder={t('Ваше имя')}
      />
      <InputDeprecated
        data-testid="ProfileCard.LastName"
        onChange={onChangeLastName}
        readOnly={readOnly}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
      />
      <InputDeprecated
        onChange={onChangeAge}
        readOnly={readOnly}
        value={data?.age}
        placeholder={t('Ваш возраст')}
      />
      <InputDeprecated
        onChange={onChangeCity}
        readOnly={readOnly}
        value={data?.city}
        placeholder={t('Город')}
      />
      <InputDeprecated
        onChange={onChangeAvatar}
        readOnly={readOnly}
        value={data?.avatar}
        placeholder={t('Аватар')}
      />
      <InputDeprecated
        onChange={onChangeUserName}
        readOnly={readOnly}
        value={data?.username}
        placeholder={t('Имя пользователя')}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readOnly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readOnly}
      />
    </VStack>
  )
}
