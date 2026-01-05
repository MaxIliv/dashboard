import { Line, LineChart, XAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import useChartData from '../../hooks/useChartData';
import { chartConfig } from '../../config';
import { cn } from '@/lib/utils';
import type { Data } from '../../types';

export type ChartProps = {
  className?: string;
};

export default function LineChartComponent({ className }: ChartProps) {
  const { data: chartData } = useChartData();

  return (
    <ChartContainer config={chartConfig} className={cn('min-h-32', className)}>
      <LineChart accessibilityLayer data={chartData}>
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelFormatter={(value, payload) => {
                const data = payload[0].payload as Data;
                return String(data.year || value);
              }}
            />
          }
        />
        <XAxis dataKey="year" axisLine={false} tickLine={false} />
        <Line type="monotone" dataKey="users" />
      </LineChart>
    </ChartContainer>
  );
}
