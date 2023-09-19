import { getUserAuthData } from 'entities/User'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

type RequireAuthType = {
  children: ReactNode
}

export const RequireAuth = ({ children }: RequireAuthType) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }
  return children
}
