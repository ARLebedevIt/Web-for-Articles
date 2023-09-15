import { profileReducer } from 'entities/Profile'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

type Props = {}

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = memo((props: Props) => {
  const { t } = useTranslation()
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>123</div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
