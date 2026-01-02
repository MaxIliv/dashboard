import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function CardLoader() {
  return (
    <Card className="w-64 py-4">
      <CardHeader className="px-4 flex gap-2 text-foreground/80">
        <Skeleton className="h-6 w-6" />
        <Skeleton className="h-6 w-32" />
      </CardHeader>
      <CardContent className="px-4">
        <Skeleton className="h-8 w-24" />
      </CardContent>
    </Card>
  );
}
