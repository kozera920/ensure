import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './router.jsx'
import { ContextProvider } from './contexts/ContextProvider.jsx';
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router = {router}/>
    </ContextProvider>    
  </StrictMode>
)
