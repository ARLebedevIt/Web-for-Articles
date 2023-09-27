import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import AppRouter from './AppRouter'
import { getRouteAdmin, getRouteMain, getRouteProfile } from '@/shared/const/router'
import { UserRole } from '@/entities/User'

describe('AppRouter tests', () => {
  test('Page should be rendered', async () => {
    componentRender(<AppRouter />, { route: getRouteMain() })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Page not found', async () => {
    componentRender(<AppRouter />, { route: '/no-exist-path' })
    const NotFoundPage = await screen.findByTestId('NotFoundPage')
    expect(NotFoundPage).toBeInTheDocument()
  })

  test('Redirect to registration', async () => {
    componentRender(<AppRouter />, { route: getRouteProfile('1') })
    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Auth user have access to profiles', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    })
    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Access denied for user without Admin/Manager roles', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            roles: [UserRole.USER],
          },
        },
      },
    })
    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Access is allowed for user with Admin/Manager roles', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            roles: [UserRole.ADMIN, UserRole.MANAGER],
          },
        },
      },
    })
    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
