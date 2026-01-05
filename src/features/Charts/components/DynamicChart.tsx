import { Activity, lazy, useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const LineChartComponent = lazy(() => import('./LineChart/LineChart'));
const BarChartComponent = lazy(() => import('./BarChart/BarChart'));

export default function DynamicChart() {
  const [checked, setChecked] = useState(false);
  const isLineChart = !checked;

  return (
    <>
      <div className="flex items-center flex-wrap gap-4">
        <h2 className="text-xl">Users distribution by Year of Birth</h2>
        <div className="flex items-center space-x-2">
          <Label
            className={isLineChart ? '' : 'text-gray-400'}
            htmlFor="airplane-mode"
          >
            Line
          </Label>
          <Switch
            id="airplane-mode"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label
            htmlFor="airplane-mode"
            className={isLineChart ? 'text-gray-400' : ''}
          >
            Bar
          </Label>
        </div>
      </div>

      <Activity mode={isLineChart ? 'visible' : 'hidden'}>
        <LineChartComponent className="w-full max-h-64" />
      </Activity>
      <Activity mode={!isLineChart ? 'visible' : 'hidden'}>
        <BarChartComponent className="w-full max-h-64" />
      </Activity>
    </>
  );
}
