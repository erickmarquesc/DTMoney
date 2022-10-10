import { ReactNode } from "react";

export interface ITransaction {
  id: number;
  price: number;
  category: string;
  createdAt: string;
  description: string;
  type: 'income' | 'outcome';
};

export interface ITransactionContextType {
  transactions: ITransaction[];
};

export interface ITransactionsProviderProps{
  children: ReactNode;
}

