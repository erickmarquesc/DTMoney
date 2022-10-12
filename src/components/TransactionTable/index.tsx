import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";
import { SearchForm } from "../SearchForm";

export function TransactionTable() {

  const transactions = useContextSelector(TransactionsContext, (context)=>{
    return context.transactions
  });
  
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
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighLight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          )
        })}

      </TransactionsTable>
    </TransactionsContainer>
  );
};