import { Route, Routes } from 'react-router-dom'
import { Counter } from './components/Counter'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { Suspense, lazy, useContext, useState } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const MainPage = lazy(() => import('./pages/MainPage/MainPage'))
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'))



const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true}, [theme])}>
      <Counter />
      <button onClick={toggleTheme}>Переключить тему</button>
      <Link to={'/'} >На главную</Link>
      <Link to={'/about'} >О сайте</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App