import StatisticsPreview from '@/features/Statistics/StatisticsPreview';
import { LoaderIcon } from 'lucide-react';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <section className="grid gap-2">
        <h2 className="text-2xl">Users Statistics</h2>

        <Suspense fallback={<LoaderIcon />}>
          <StatisticsPreview />
        </Suspense>
      </section>
    </>
  );
}
