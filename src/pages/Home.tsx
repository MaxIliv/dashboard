import { useAuthContext } from '@/app/providers/AuthProvider';

export default function Home() {
  const { me } = useAuthContext();

  return (
    <section className="p-4 rounded-md border border-zinc-200 shadow-md">
      <h1 className="text-3xl font-bold underline">Hello {me?.firstName}!</h1>
    </section>
  );
}
