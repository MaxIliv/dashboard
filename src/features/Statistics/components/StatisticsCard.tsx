import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { type ComponentType, type ReactNode } from 'react';

export type StatisticsCardProps = {
  Icon: ComponentType;
  title: string;
  children: ReactNode;
  value: number | string;
};
export default function StatisticsCard({
  Icon,
  title,
  children,
  value,
}: StatisticsCardProps) {
  return (
    <Card className="min-w-64 py-4">
      <CardHeader className="px-4 flex gap-2 text-foreground/80">
        <Icon />
        <p className="leading-6">{title}</p>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex gap-2 items-end">
          <span className="text-5xl">
            {typeof value === 'number' ? (
              <CountingNumber number={value} />
            ) : (
              value
            )}
          </span>
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
