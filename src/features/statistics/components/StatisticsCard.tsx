import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { InfoIcon } from 'lucide-react';
import { type ComponentType, type ReactNode } from 'react';

export type StatisticsCardProps = {
  Icon: ComponentType;
  title: string;
  children: ReactNode;
  value: number | string;
  description: string;
};
export default function StatisticsCard({
  Icon,
  title,
  children,
  value,
  description,
}: StatisticsCardProps) {
  return (
    <Card className="group min-w-48 lg:min-w-64 py-4 relative">
      <HoverCard>
        <HoverCardTrigger className="absolute right-4 top-4 opacity-0 group-hover:opacity-100">
          <InfoIcon />
        </HoverCardTrigger>
        <HoverCardContent>{description}</HoverCardContent>
      </HoverCard>
      <CardHeader className="px-4 gap-0 pr-12">
        <div className="flex gap-2 text-foreground/80">
          <Icon />
          <p className="text-md lg:text-base leading-6">{title}</p>
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex gap-2 items-end">
          <span className="text-2xl lg:text-5xl">
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
