import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'
import { Text } from '@/shared/ui/redesigned/Text'
import { Card } from '@/shared/ui/redesigned/Card'
import { getProfileData } from '@/entities/Profile'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'

type EditableProfileCardHeaderProps = {}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile')
    const readOnly = useSelector(getProfileReadOnly)
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadOnly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSaveEdit = useCallback(() => {
      dispatch(updateProfileData())
    }, [dispatch])

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card max border='partial' paddings='24'>
          <HStack max justify="between">
            <Text title={t('Профиль')} />
            {canEdit && (
              <div>
                {readOnly ? (
                  <Button
                    onClick={onEdit}
                    data-testid="EditableProfileCardHeader.EditBtn">
                    {t('Редактировать')}
                  </Button>
                ) : (
                  <HStack gap="8">
                    <Button
                      data-testid="EditableProfileCardHeader.CancelBtn"
                      onClick={onCancelEdit}
                      color='error'>
                      {t('Отменить')}
                    </Button>
                    <Button
                      onClick={onSaveEdit}
                      color='success'
                      data-testid="EditableProfileCardHeader.SaveBtn">
                      {t('Сохранить')}
                    </Button>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
          </Card>
        }
        off={
          <HStack max justify="between">
            <TextDeprecated title={t('Профиль')} />
            {canEdit && (
              <div>
                {readOnly ? (
                  <ButtonDeprecated
                    onClick={onEdit}
                    data-testid="EditableProfileCardHeader.EditBtn"
                    theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                  </ButtonDeprecated>
                ) : (
                  <HStack gap="8">
                    <ButtonDeprecated
                      data-testid="EditableProfileCardHeader.CancelBtn"
                      onClick={onCancelEdit}
                      theme={ButtonTheme.OUTLINE_RED}>
                      {t('Отменить')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      onClick={onSaveEdit}
                      theme={ButtonTheme.OUTLINE}
                      data-testid="EditableProfileCardHeader.SaveBtn">
                      {t('Сохранить')}
                    </ButtonDeprecated>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        }
      />
    )
  },
)
