import { ThemeProvider } from '@material-tailwind/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App/index.css'
import App from './App/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
