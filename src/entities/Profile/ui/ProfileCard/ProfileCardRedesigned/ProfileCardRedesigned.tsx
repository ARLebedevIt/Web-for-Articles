import { useTranslation } from 'react-i18next'
import { Currency, CurrencySelect } from '@/entities/Currency'
import { Country, CountrySelect } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { Card } from '@/shared/ui/redesigned/Card'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Profile } from '../../../model/type/profile'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile')
  return (
    <Card
      border='partial'
      max
      paddings='16'
      >
      <Text
        align='center'
        title={t('Профиль не найден')}
        variant='error'
        text={t('Попробуйте обновить страницу')}
      />
    </Card>
  )
}

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card max paddings='24'>
      <VStack gap='32'>
          <HStack justify='center' max>
          <Skeleton border='100%' width={128} height={128} />
          </HStack>
          <HStack gap='32' max>
        <VStack gap='16' max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} /> 
            <Skeleton width="100%" height={38} /> 
            <Skeleton width="100%" height={38} /> 
        </VStack>
        <VStack gap='16' max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} /> 
            <Skeleton width="100%" height={38} /> 
            <Skeleton width="100%" height={38} /> 
        </VStack>
      </HStack>
      </VStack>
    </Card>
  )
}

export type ProfileCardType = {
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
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
  readOnly?: boolean
}

export const ProfileCardRedesigned = (props: ProfileCardType) => {
  const {
    className,
    data,
    error,
    isLoading,
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
  const { t } = useTranslation('profile')
  
  return (
    <Card
      border='partial'
      paddings="24"
      max>
      <VStack gap="32">
        {data?.avatar && (
          <HStack justify="center" max>
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap="24" max>
          <VStack gap="16" max>
            <Input
              data-testid="ProfileCard.FirstName"
              onChange={onChangeFirstName}
              readOnly={readOnly}
              value={data?.first}
              label={t('Имя')}
            />
            <Input
              data-testid="ProfileCard.LastName"
              onChange={onChangeLastName}
              readOnly={readOnly}
              value={data?.lastname}
              label={t('Фамилия')}
            />
            <Input
              onChange={onChangeAge}
              readOnly={readOnly}
              value={data?.age}
              label={t('Возраст')}
            />
            <Input
              onChange={onChangeCity}
              readOnly={readOnly}
              value={data?.city}
              label={t('Город')}
            />
          </VStack>
          <VStack gap="16" max>
            <Input
              onChange={onChangeAvatar}
              readOnly={readOnly}
              value={data?.avatar}
              label={t('Аватар')}
            />
            <Input
              onChange={onChangeUserName}
              readOnly={readOnly}
              value={data?.username}
              label={t('Имя пользователя')}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readOnly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readOnly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
}
