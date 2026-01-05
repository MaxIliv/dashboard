import StatisticsCard from './components/StatisticsCard';
import useStats from './hooks/useStats';

export default function MainStatistics() {
  const { mainStats } = useStats();

  return (
    <div className="flex gap-4 flex-wrap">
      {mainStats.map((item) => (
        <StatisticsCard {...item} />
      ))}
    </div>
  );
}
