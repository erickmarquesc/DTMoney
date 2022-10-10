import { TransactionTable } from "../../components/TransactionTable";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/Header";

export function Transactions() {
  
  return (
    <div>

      <Header />
      <Summary />
      <TransactionTable />

    </div>
  );
};