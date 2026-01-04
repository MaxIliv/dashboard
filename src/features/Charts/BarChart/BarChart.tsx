import { Bar, BarChart, XAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import useChartData from '../hooks/useChartData';
import { chartConfig } from '../config';
import type { ChartProps } from '../LineChart/LineChart';
import { cn } from '@/lib/utils';
import type { Data } from '../types';

export function BarChartComponent({ className }: ChartProps) {
  const { data: chartData } = useChartData();

  return (
    <ChartContainer config={chartConfig} className={cn('min-h-32', className)}>
      <BarChart accessibilityLayer data={chartData}>
        <XAxis dataKey="year" axisLine={false} tickLine={false} />
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
        <Bar
          type="monotone"
          dataKey="users"
          fill="var(--color-users)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}
