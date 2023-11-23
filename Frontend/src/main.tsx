import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import StudentMain from './pages/StudentMain';
import Alert_map from './pages/Alert_map';
import SosCall from './pages/SosCall';
import UserReportPage from './pages/UserReportPage';
import SosAdmin from './pages/SosAdmin';
import AlertMapForm from './pages/AlertMapForm';
import MapModal from './components/MapModal/MapModal';
import CoordinateMap from './components/MapModal/CoordinateMap';
const router = createBrowserRouter([
  {


    path: '/',
    element: <StudentMain />,
  },
  {
    path: '/sos-call',
    element: <SosCall />,
  },
  {
    path: "/user-report",
    element: <UserReportPage />
  },
  {
    path: '/alert-map',
    element: <Alert_map />,
  },
  {
    path: '/sos-alert-form',
    element: <AlertMapForm />,
  },
  {
    path: '/sos-admin',
    element: <SosAdmin />,
  },

  {
    path: '/test',
    element: <MapModal />,
  },
  {
    // path: '/test2',
    // element: <CoordinateMap />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#277875',
          colorInfo: '#277875',
          fontFamily: 'Roboto,Prompt, sans-serif',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
);
