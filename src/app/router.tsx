import { RequireAuth } from '@/features/auth/guards/RequireAuth';
import LoginLayout from '@/layouts/LoginLayout';
import MainLayout from '@/layouts/MainLayout';
import ChartsPage from '@/pages/charts/ChartsPage';
import Home from '@/pages/Home';
import LoginPage from '@/pages/login/LoginPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import StatisticsPage from '@/pages/statistics/StatisticsPage';
import { createBrowserRouter } from 'react-router';

export type RouteHandle = {
  title?: string;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        Component: Home,
        handle: { title: 'Dashboard' } satisfies RouteHandle,
      },
      {
        path: 'statistics',
        handle: { title: 'Statistics' } satisfies RouteHandle,
        Component: StatisticsPage,
      },
      {
        path: 'charts',
        handle: { title: 'Charts' } satisfies RouteHandle,
        Component: ChartsPage,
      },
    ],
  },
  {
    path: '/login',
    Component: LoginLayout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
