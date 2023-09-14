import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'
import { Text, TextTheme } from 'shared/ui/Text/ui/Text'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import cls from './LoginForm.module.scss'

interface LoginFormType {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormType) => {
  const { t } = useTranslation()

  const dispatch: Dispatch = useDispatch()
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState)

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value))
  }, [dispatch])

  const onChangeUserPassword = useCallback((value: string) => {
    dispatch(loginActions.setUserPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUserName({ password, username }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
      <Input
        value={username}
        onChange={onChangeUserName}
        autoFocus
        placeholder={t('Введите логин')}
        className={cls.input}
        type="text"
      />
      <Input
        value={password}
        onChange={onChangeUserPassword}
        placeholder={t('Введите пароль')}
        className={cls.input}
        type="text"
      />
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})
