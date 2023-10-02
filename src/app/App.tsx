import { FC, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { getUserInited, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AppRouter } from './providers/Router'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { PageLoader } from '@/widgets/PageLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layout/MainLayout'

const App: FC = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  if (!inited) {
    return <PageLoader />
  }
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div id='app' className={classNames('app', {}, [theme])}>
          <Suspense fallback={<PageLoader />}>
            <Navbar />
            <div className="content_page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div id='app' className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback={<PageLoader />}>
           <MainLayout
              content={<AppRouter />}
              sidebar={<Sidebar />}
              header={<Navbar />}
              toolbar={<div>test</div>}
            />
          </Suspense>
        </div>
      }
    />
  )
}

export default App
