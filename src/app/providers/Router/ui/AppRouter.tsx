import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { AppRoutesProps } from '@/shared/types/router'
import { routeConfig } from '../config/routeConfig'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const { element } = route
    return (
      <Route
        key={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{route.element}</RequireAuth> : element}
        path={route.path}
      />
    )
  }, [])

  return (
    <Suspense fallback={null}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
