import { UsersTable } from '@/features/Users/UsersTable';

export default function UsersPage() {
  return (
    <section className="grid gap-4">
      <h2>Users</h2>

      <UsersTable />
    </section>
  );
}
