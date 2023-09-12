import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { FC, Suspense } from 'react'
import { AppRouter } from './providers/Router'

const App: FC = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('app', { hovered: true }, [theme])}>
      <Suspense fallback={null}>
        <Navbar />
        <div className="content_page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
