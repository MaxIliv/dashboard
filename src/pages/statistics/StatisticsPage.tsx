import CardLoader from '@/features/statistics/components/CardLoader';
import Statistics from '@/features/statistics/Statistics';
import { Suspense } from 'react';

const loaderFallback = (
  <div className="flex gap-4 flex-wrap">
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
  </div>
);

export default function StatisticsPage() {
  return (
    <section className="grid gap-4">
      <h2 className="text-xl">Statistics</h2>
      <Suspense fallback={loaderFallback}>
        <Statistics />
      </Suspense>
    </section>
  );
}
