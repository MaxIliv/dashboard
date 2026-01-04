import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import DynamicChart from '@/features/Charts/components/DynamicChart';
import CardLoader from '@/features/Statistics/components/CardLoader';
import MainStatistics from '@/features/Statistics/MainStatistics';
import RecentUsers from '@/features/Users/components/RecentUsers';
import { Suspense } from 'react';
import { Link } from 'react-router';

export default function Home() {
  return (
    <section className="grid gap-8">
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
