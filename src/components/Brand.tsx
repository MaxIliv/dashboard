import { useAppContext } from '@/app/providers/AppProvider';
import Logo from '@/assets/logo-dark';

export default function Brand() {
  const { isSidebarCollapsed } = useAppContext();

  return (
    <div className="flex p-4 h-16">
      <Logo size={32} />
      {!isSidebarCollapsed && (
        <>
          <p className="ml-2 text-2xl">Reface</p>
          <sup className="text-gray-400 text-sm -translate-x-full leading-[1.4]">data</sup>
        </>
      )}
    </div>
  );
}
