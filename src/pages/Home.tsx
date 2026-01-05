import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import CardLoader from '@/features/statistics/components/CardLoader';
import MainStatistics from '@/features/statistics/MainStatistics';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router';

const DynamicChart = lazy(
  () => import('@/features/charts/components/DynamicChart')
);
const RecentUsers = lazy(
  () => import('@/features/users/components/RecentUsers')
);

export default function Home() {
  return (
    <section className="grid gap-12">
      <section>
        <h2 className="text-xl mb-4">Users Statistics</h2>

        <Suspense fallback={<CardLoader />}>
          <MainStatistics />
        </Suspense>
      </section>

      <section>
        <Suspense fallback={<Skeleton className="h-64" />}>
          <DynamicChart />
        </Suspense>
      </section>

      <section>
        <div className="flex justify-between">
          <h2 className="text-xl mb-4">Recent Users</h2>

          <Button asChild variant="link">
            <Link to="/users">View all</Link>
          </Button>
        </div>

        <Suspense fallback={<CardLoader />}>
          <RecentUsers />
        </Suspense>
      </section>
    </section>
  );
}
