import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { type ComponentType, type ReactNode } from 'react';

type StatisticsCardProps = {
  Icon: ComponentType;
  title: string;
  children: ReactNode;
};
export default function StatisticsCard({
  Icon,
  title,
  children,
}: StatisticsCardProps) {
  return (
    <Card className="min-w-64 py-4">
      <CardHeader className="px-4 flex gap-2 text-foreground/80">
        <Icon />
        <p className="leading-6">{title}</p>
      </CardHeader>
      <CardContent className="px-4">{children}</CardContent>
    </Card>
  );
}
