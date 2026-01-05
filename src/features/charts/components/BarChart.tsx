import { Bar, BarChart, XAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import useChartData from '@/features/charts/hooks/useChartData';
import { chartConfig } from '@/features/charts/config';
import type { ChartProps } from '@/features/charts/components/LineChart';
import { cn } from '@/lib/utils';
import type { Data } from '@/features/charts/types';

export default function BarChartComponent({ className }: ChartProps) {
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
