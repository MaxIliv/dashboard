import { Bar, BarChart, XAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import useChartData from '../hooks/useChartData';
import { chartConfig } from '../config';

export function BarChartComponent() {
  const { data: chartData } = useChartData();

  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <XAxis dataKey="year" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar type="monotone" dataKey="users" fill="#2563eb" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
