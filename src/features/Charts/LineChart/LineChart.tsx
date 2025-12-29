import { Line, LineChart, XAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import useChartData from '../hooks/useChartData';
import { chartConfig } from '../config';

type ChartProps = {
  className?: string;
};

export function LineChartComponent({ className }: ChartProps) {
  const { data: chartData } = useChartData();

  return (
    <ChartContainer config={chartConfig} className={className}>
      <LineChart accessibilityLayer data={chartData}>
        <XAxis dataKey="year" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line type="monotone" dataKey="users" fill="#2563eb" radius={4} />
      </LineChart>
    </ChartContainer>
  );
}
