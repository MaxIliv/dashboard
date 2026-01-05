import type { Table } from '@tanstack/react-table';
import { createContext, useContext } from 'react';
import type { User } from '../types';

type TableContextValue = {
  table: Table<User>;
};

const TableContext = createContext<TableContextValue | null>(null);

type TableProviderProps = {
  table: Table<User>;
  children: React.ReactNode;
};

export function TableProvider({ table, children }: TableProviderProps) {
  return (
    <TableContext.Provider value={{ table }}>{children}</TableContext.Provider>
  );
}

export function useTable() {
  const ctx = useContext(TableContext);

  if (!ctx) {
    throw new Error('useTable can be used only within TableProvider');
  }

  const { table } = ctx;

  return table;
}
