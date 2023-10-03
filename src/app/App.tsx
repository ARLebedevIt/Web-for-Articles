import { FC, Suspense, memo, useEffect } from 'react'
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
import { AppLoaderLayout } from '@/shared/layout/AppLoaderLayout'
import { useAppToolbar } from './lib/useAppToolbar'
import { withTheme } from './providers/ThemeProvider/ui/withTheme'

const App: FC = memo(() => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)
  const toolbar = useAppToolbar()
  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData())
    }
  }, [dispatch, inited])

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div id="app" className={classNames('app_redesigned', {}, [theme])}>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    )
  }
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div id="app" className={classNames('app', {}, [theme])}>
          <Suspense fallback={null}>
            <Navbar />
            <div className="content_page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div id="app" className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback={null}>
            <MainLayout
              content={<AppRouter />}
              sidebar={<Sidebar />}
              header={<Navbar />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
    />
  )
})

export default withTheme(App)
