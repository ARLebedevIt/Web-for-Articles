import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import AppSvg from '../../../assets/icons/deprecated/app-logo.svg'
import cls from './AppLogo.module.scss'
import { HStack } from '../../redesigned/Stack'

type AppLogoProps = {
  className?: string
  size?: number
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size } = props
  return (
    <HStack max justify='center' className={classNames(cls.AppLogoWrapper, {}, [className])}>
      <AppSvg width={size} height={size} className={cls.appLogo}/>
      <div className={cls.gradientBig}/>
      <div className={cls.gradientSmall}/>
    </HStack>
  )
})
