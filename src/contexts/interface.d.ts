import { ReactNode } from "react";

export interface ITransaction {
  id: number;
  price: number;
  category: string;
  createdAt: string;
  description: string;
  type: 'income' | 'outcome';
};

export interface ICreatedTransaction {
  price: number;
  category: string;
  description: string;
  type: 'income' | 'outcome';
};

export interface ITransactionContextType {
  transactions: ITransaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: ICreatedTransaction)=> Promise<void>;
};

export interface ITransactionsProviderProps {
  children: ReactNode;
}

