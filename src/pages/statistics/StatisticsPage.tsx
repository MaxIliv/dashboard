import CardLoader from '@/features/Statistics/components/CardLoader';
import Statistics from '@/features/Statistics/StatisticsFull';
import { Suspense } from 'react';

export default function StatisticsPage() {
  return (
    <section className="grid gap-2">
      <h2 className="text-2xl">Users Stats</h2>
      <Suspense fallback={<CardLoader />}>
        <Statistics />
      </Suspense>
    </section>
  );
}
