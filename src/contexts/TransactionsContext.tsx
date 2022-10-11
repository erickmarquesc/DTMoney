import { ICreatedTransaction, ITransaction, ITransactionContextType, ITransactionsProviderProps } from "./interface";
import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export const TransactionsContext = createContext({} as ITransactionContextType);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {

  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function fetchTransactions(query?: string) {

    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      }
    });

    setTransactions(response.data);
  };

  async function createTransaction(data: ICreatedTransaction) {

    const { category, description, price, type } = data;

    const response = await api.post('transactions', {
      type,
      price,
      category,
      description,
      createdAt: new Date(), // somente válido em ambiente de desenvolvimento
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  );
};