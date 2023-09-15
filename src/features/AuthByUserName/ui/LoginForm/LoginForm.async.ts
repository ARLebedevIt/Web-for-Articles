import { FC, lazy } from 'react'
import { LoginFormType } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFormType>>(() => import('./LoginForm'))
