import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/article.svg'
import { SidebarItemType } from '../types/sidebar'
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidbarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'Главная',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О сайте',
      },
    ]
    if (userData) {
      sidbarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: ' Статьи',
          authOnly: true,
        },
      )
    }
    return sidbarItemsList
  },
)
