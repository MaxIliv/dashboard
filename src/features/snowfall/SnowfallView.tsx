import { useAppContext } from '@/app/providers/AppProvider';
import { Activity } from 'react';
import Snowfall from 'react-snowfall';

export default function SnowfallView() {
  const { isSnowfallEnabled } = useAppContext();
  return (
    <Activity mode={isSnowfallEnabled ? 'visible' : 'hidden'}>
      <Snowfall
        snowflakeCount={20}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
        }}
      />
    </Activity>
  );
}
