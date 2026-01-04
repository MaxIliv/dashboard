import CardLoader from '@/features/Statistics/components/CardLoader';
import StatisticsFull from '@/features/Statistics/StatisticsFull';
import { Suspense } from 'react';

export default function StatisticsPage() {
  return (
    <section className="grid gap-4">
      <h2 className="text-xl">Statistics</h2>
      <Suspense fallback={<CardLoader />}>
        <StatisticsFull />
      </Suspense>
    </section>
  );
}
