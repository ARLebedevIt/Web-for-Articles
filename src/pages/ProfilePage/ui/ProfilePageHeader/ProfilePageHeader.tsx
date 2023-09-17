import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Text } from 'shared/ui/Text/ui/Text'
import { useSelector } from 'react-redux'
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './ProfilePageHeader.module.scss'

type Props = {}

export const ProfilePageHeader = (props: Props) => {
  const { t } = useTranslation()
  const readOnly = useSelector(getProfileReadOnly)
  const dispatch = useAppDispatch()

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
    <div>
      <div className={cls.ProfilePageHeader}>
        <Text title={t('Профиль')} />
        {readOnly ? (
          <Button onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</Button>
        ) : (
          <div className={cls.editBtns}>
            <Button
              onClick={onCancelEdit}
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE_RED}
            >
              {t('Отменить')}

            </Button>
            <Button onClick={onSaveEdit} className={cls.saveBtn} theme={ButtonTheme.OUTLINE}>{t('Сохранить')}</Button>
          </div>
        )}
      </div>
    </div>
  )
}
