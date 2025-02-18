import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/tailwind.css"
import 'rsuite/styles/index.less';
import './styles/index.css'

import App from './App.jsx'
import AlertProvider from './providers/AlertProvider.jsx'
import TableProvider from './providers/TableProvider.jsx'
import SettingsProvider from './providers/SettingsProvider.jsx';
import SchemaProvider from './providers/SchemaProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider>
      <TableProvider>
        <SettingsProvider>
          <SchemaProvider>
            <App />
          </SchemaProvider>
        </SettingsProvider>
      </TableProvider>
    </AlertProvider>
  </StrictMode>,
)
