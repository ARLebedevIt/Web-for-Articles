export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'article_details',
  ARTICLES_CREATE = 'article_create',
  ARTICLES_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  SETTINGS = 'settings',
}

export const getRouteMain = () => '/'
export const getRouteSettings= () => '/settings'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticlesDetails = (id?: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/new'
export const getRouteArticleEdit = (id?: string) => `/articles/${id}/edit`
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'

export const AppRouteByPath: Record<string, AppRoutes> = {
[getRouteMain()]: AppRoutes.MAIN,
[getRouteSettings()]: AppRoutes.SETTINGS,
[getRouteAbout()]: AppRoutes.ABOUT,
[getRouteProfile(':id')]: AppRoutes.PROFILE,
[getRouteArticles()]: AppRoutes.ARTICLES,
[getRouteArticlesDetails(':id')]: AppRoutes.ARTICLES_DETAILS,
[getRouteArticleCreate()]: AppRoutes.ARTICLES_CREATE,
[getRouteArticleEdit(':id')]: AppRoutes.ARTICLES_EDIT,
[getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
[getRouteForbidden()]: AppRoutes.FORBIDDEN,
}