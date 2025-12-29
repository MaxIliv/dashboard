import { Bar, BarChart, XAxis, YAxis } from 'recharts';

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
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
        <YAxis dataKey="users" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar type="monotone" dataKey="users" fill="#2563eb" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
