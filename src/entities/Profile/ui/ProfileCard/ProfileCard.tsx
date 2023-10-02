

import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { Profile } from '../../model/type/profile'
import { ToggleFeatures } from '@/shared/lib/features'
import {
  DeprecatedProfileCard,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedSkeleton,
} from '../ProfileCardDeprecated/ProfileCardDeprecated'
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from './ProfileCardRedesigned/ProfileCardRedesigned'

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

export const ProfileCard = (props: ProfileCardType) => {
  const { className, error, isLoading } = props
  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedSkeleton />}
      />
    )
  }

  if (error) {
    return (
      <ToggleFeatures 
      feature='isAppRedesigned' 
      on={<ProfileCardRedesignedError />} 
      off={<ProfileCardDeprecatedError />} />
    )
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ProfileCardRedesigned {...props} />}
      off={<DeprecatedProfileCard {...props} />}
    />
  )
}
