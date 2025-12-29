import { Line, LineChart, XAxis, YAxis } from 'recharts';

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import useChartData from '../hooks/useChartData';
import { chartConfig } from '../config';

export function LineChartComponent() {
  const { data: chartData } = useChartData();

  return (
    <ChartContainer config={chartConfig} className="min-h-50 w-full">
      <LineChart accessibilityLayer data={chartData}>
        <XAxis dataKey="year" />
        <YAxis dataKey="users" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="users" fill="#2563eb" radius={4} />
      </LineChart>
    </ChartContainer>
  );
}
