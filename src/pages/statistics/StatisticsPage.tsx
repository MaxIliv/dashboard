import CardLoader from '@/features/Statistics/components/CardLoader';
import Statistics from '@/features/Statistics/Statistics';
import { Suspense } from 'react';

export default function StatisticsPage() {
  return (
    <section className="grid gap-4">
      <h2 className="text-xl">Statistics</h2>
      <Suspense fallback={<CardLoader />}>
        <Statistics />
      </Suspense>
    </section>
  );
}
