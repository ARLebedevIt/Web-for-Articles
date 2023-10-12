import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import MainIconDeprecated from '@/shared/assets/icons/deprecated/main.svg'
import AboutIconDeprecated from '@/shared/assets/icons/deprecated/about.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/deprecated/profile.svg'
import ArticlesIconDeprecated from '@/shared/assets/icons/deprecated/article.svg'
import { SidebarItemType } from '../types/sidebar'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router'

import MainIcon from '@/shared/assets/icons/redesigned/home.svg'
import AboutIcon from '@/shared/assets/icons/redesigned/info.svg'
import ProfileIcon from '@/shared/assets/icons/redesigned/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/redesigned/article.svg'
import { toggleFeatures } from '@/shared/lib/features'

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData)
  const sidbarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => MainIcon,
        off: () => MainIconDeprecated,
      }),
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
      text: 'О сайте',
    },
  ]
  if (userData) {
    sidbarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ArticlesIcon,
          off: () => ArticlesIconDeprecated,
        }),
        text: 'Статьи',
        authOnly: true,
      },
    )
  }
  return sidbarItemsList
}
