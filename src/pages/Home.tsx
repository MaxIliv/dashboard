import useUser from '@/features/user/hooks/useUser';

export default function Home() {
  const { data } = useUser();

  return (
    <section className="p-4 rounded-md border border-zinc-200 shadow-md">
      <h1 className="text-3xl font-bold underline">Hello {data?.firstName}!</h1>
    </section>
  );
}
