import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { FC, Suspense, useEffect } from 'react'
import { getUserInited, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { AppRouter } from './providers/Router'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
  return (
    <div className={classNames('app', { hovered: true }, [])}>
      <Suspense fallback={null}>
        <Navbar />
        <div className="content_page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
