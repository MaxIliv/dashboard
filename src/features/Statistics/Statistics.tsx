import StatisticsCard from './components/StatisticsCard';
import useStats from './hooks/useStats';

export default function Statistics() {
  const { stats } = useStats();

  return (
    <div className="max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-wrap">
      {stats.map((item) => (
        <StatisticsCard key={item.title} {...item} />
      ))}
    </div>
  );
}
