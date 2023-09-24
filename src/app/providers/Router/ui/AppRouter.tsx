import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

type Props = {}

const AppRouter = (props: Props) => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <div>{route.element}</div>
    return (
      <Route
        key={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{route.element}</RequireAuth> : element}
        path={route.path}
      />
    )
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
