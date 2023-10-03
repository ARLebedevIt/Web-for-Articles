import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { getLoginUserPassword } from '../../model/selectors/getLoginUserPassword/getLoginUserPassword'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import cls from './LoginForm.module.scss'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'
import { Input } from '@/shared/ui/redesigned/Input'
import { Text } from '@/shared/ui/redesigned/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'

export interface LoginFormType {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormType) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUserName)
  const password = useSelector(getLoginUserPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)
  const forceUpdate = useForceUpdate()
  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value))
    },
    [dispatch],
  )

  const onChangeUserPassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserPassword(value))
    },
    [dispatch],
  )

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ password, username }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
      forceUpdate()
    }
  }, [dispatch, password, username, onSuccess, forceUpdate])
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
            <VStack gap="24" className={classNames(cls.LoginForm, {}, [className])}>
              <Text title={t('Форма авторизации')} />
              {error && (
                <Text
                  text={t('Вы ввели неверный логин или пароль')}
                  variant="error"
                />
              )}
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
                disabledBtn={isLoading}
                onClick={onLoginClick}
                variant="outline"
                className={cls.loginBtn}>
                {t('Войти')}
              </Button>
            </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t('Форма авторизации')} />
            {error && (
              <TextDeprecated
                text={t('Вы ввели неверный логин или пароль')}
                theme={TextTheme.ERROR}
              />
            )}
            <InputDeprecated
              value={username}
              onChange={onChangeUserName}
              autoFocus
              placeholder={t('Введите логин')}
              className={cls.input}
              type="text"
            />
            <InputDeprecated
              value={password}
              onChange={onChangeUserPassword}
              placeholder={t('Введите пароль')}
              className={cls.input}
              type="text"
            />
            <ButtonDeprecated
              disabledBtn={isLoading}
              onClick={onLoginClick}
              theme={ButtonTheme.OUTLINE}
              className={cls.loginBtn}>
              {t('Войти')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  )
})

export default LoginForm
