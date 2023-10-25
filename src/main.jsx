import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import ContextProvider from './ContextProvider/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </React.StrictMode>
  </div>
)
