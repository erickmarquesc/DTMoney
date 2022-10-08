import { SearchForm } from "../SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";

export function TransactionTable() {
  return (
    <TransactionsContainer>
      <SearchForm/>
      <TransactionsTable>
        <tr>
          <td width="50%">Desenvolvivmento de site</td>
          <td>
            <PriceHighLight variant="income">
              R$ 12.000,00
            </PriceHighLight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td width="50%">Burgão</td>
          <td>
            <PriceHighLight variant="outcome">
              - R$ 12,00
            </PriceHighLight>
          </td>
          <td>Alimentação</td>
          <td>10/04/2022</td>
        </tr>
      </TransactionsTable>
    </TransactionsContainer>
  );
};