import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import '@/app/styles/index.scss'
import '@/shared/config/i18n/i18n'
import { StoreProvider } from '@/app/providers/StoreProvider'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
)
