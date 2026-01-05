import { useAppContext } from '@/app/providers/AppProvider';
import Logo from '@/assets/logo-dark';
import { Link } from 'react-router';

export default function NavBrand() {
  const { isSidebarCollapsed } = useAppContext();

  return (
    <Link to="/">
      <div className="flex p-4 h-16">
        <Logo size={32} />
        {!isSidebarCollapsed && (
          <>
            <p className="ml-2 text-2xl">Reface</p>
            <sup className="text-gray-400 text-sm -translate-x-full leading-[1.4]">
              data
            </sup>
          </>
        )}
      </div>
    </Link>
  );
}
