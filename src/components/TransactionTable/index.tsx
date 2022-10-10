import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "../SearchForm";
import { useContext } from "react";

export function TransactionTable() {

  const {transactions} = useContext(TransactionsContext);
  
  return (
    <TransactionsContainer>
      <SearchForm />
      <TransactionsTable>

        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighLight variant={transaction.type}>
                  {transaction.price}
                </PriceHighLight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          )
        })}

      </TransactionsTable>
    </TransactionsContainer>
  );
};