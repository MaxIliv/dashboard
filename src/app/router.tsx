import { Skeleton } from '@/components/ui/skeleton';
import { RequireAuth } from '@/features/auth/guards/RequireAuth';
import LoginLayout from '@/layouts/LoginLayout';
import MainLayout from '@/layouts/MainLayout';
import { createBrowserRouter } from 'react-router';

export type RouteHandle = {
  title?: string;
};
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
    HydrateFallback: () => <Skeleton />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Home } = await import('@/pages/Home');
          return { Component: Home };
        },
        handle: { title: 'Dashboard' } satisfies RouteHandle,
      },
      {
        path: 'statistics',
        handle: { title: 'Statistics' } satisfies RouteHandle,
        lazy: async () => {
          const { default: StatisticsPage } = await import(
            '@/pages/statistics/StatisticsPage'
          );
          return { Component: StatisticsPage };
        },
      },
      {
        path: 'charts',
        handle: { title: 'Charts' } satisfies RouteHandle,
        lazy: async () => {
          const { default: ChartsPage } = await import(
            '@/pages/charts/ChartsPage'
          );
          return { Component: ChartsPage };
        },
      },
      {
        path: 'users',
        handle: { title: 'Users' } satisfies RouteHandle,
        lazy: async () => {
          const { default: UsersPage } = await import(
            '@/pages/users/UsersPage'
          );
          return { Component: UsersPage };
        },
      },
    ],
  },
  {
    path: '/login',
    Component: LoginLayout,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: LoginPage } = await import(
            '@/pages/login/LoginPage'
          );
          return { Component: LoginPage };
        },
      },
    ],
  },
  {
    path: '*',
    lazy: async () => {
      const { default: NotFoundPage } = await import(
        '@/pages/not-found/NotFoundPage'
      );
      return { Component: NotFoundPage };
    },
  },
]);
