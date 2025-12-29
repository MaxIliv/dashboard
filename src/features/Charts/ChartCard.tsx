import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { LoaderIcon, TrendingUp } from 'lucide-react';
import type { ResponsiveContainer } from 'recharts';
import { Suspense } from 'react';
import { cn } from '@/lib/utils';

type ChartCardProps = {
  className?: string;
  children: React.ComponentProps<typeof ResponsiveContainer>['children'];
};

export default function ChartCard({ children, className }: ChartCardProps) {
  return (
    <Card className={cn('min-w-32', className)}>
      <CardHeader>
        <CardTitle>Users distribution by Year of Birth</CardTitle>
        <CardDescription>1989-2002</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<LoaderIcon />}>{children}</Suspense>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 1995 <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing distribution of users by year of birth
        </div>
      </CardFooter>
    </Card>
  );
}
