import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

type Props = {}

const AppRouter = (props: Props) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} element={<div className="page_wrapper">{element}</div>} path={path} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
