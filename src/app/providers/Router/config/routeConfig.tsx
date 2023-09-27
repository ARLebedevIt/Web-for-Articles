import { UserRole } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import {
  AppRoutes, getRouteAbout,
  getRouteAdmin, getRouteArticleCreate,
  getRouteArticleEdit, getRouteArticles, getRouteArticlesDetails, getRouteForbidden, getRouteMain, getRouteProfile,
} from '@/shared/const/router'
import { AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: getRouteArticlesDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
