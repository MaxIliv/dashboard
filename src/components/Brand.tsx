import { useAppContext } from '@/app/providers/AppProvider';
import Logo from '@/assets/logo-dark';

export default function Brand() {
  const { isSidebarCollapsed } = useAppContext();

  return (
    <div className="flex gap-2 p-4">
      <Logo size={32} />
      {!isSidebarCollapsed && (
        <>
          <p className="text-2xl">Reface</p>
          <sup className="text-gray-400 dark:text-gray-100 text-sm -ml-8">
            data
          </sup>
        </>
      )}
    </div>
  );
}
