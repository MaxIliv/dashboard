import { Activity } from 'react';
import Snowfall from 'react-snowfall';
import { useSnowfall } from '../Sidebar/SidebarProvider';

export default function SnowfallView() {
  const { isSnowfallEnabled } = useSnowfall();
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
