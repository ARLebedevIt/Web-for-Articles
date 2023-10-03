import { useEffect, useState } from "react"
import { matchPath, useLocation } from "react-router-dom"
import { AppRouteByPath, AppRoutes } from "@/shared/const/router"

export function useRouteChange () {
  const location = useLocation()
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN)

  useEffect(() => {
    Object.entries(AppRouteByPath).forEach(([path, route]) => {
      if (matchPath(path, location.pathname)) {
        setAppRoute(route)
      }
    })
  }, [location.pathname])

  return appRoute
}