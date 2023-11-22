import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import StudentMain from './pages/StudentMain';
import Alert_map from './pages/Alert_map';
import SosCall from './pages/SosCall';
const router = createBrowserRouter([
  {
    path: '/alert-map',
    element: <Alert_map />,
  },
  {
    path: '/',
    element: <StudentMain />,
  },
  {
    path: '/sos-call',
    element: <SosCall />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#277875',
          colorInfo: '#277875',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
);
