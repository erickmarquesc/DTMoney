import { ArrowCircleDown, ArrowCircleUp, ArrowCounterClockwise, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styled";

export function Summary() {

  const {income,outcome,total} = useSummary();


  return (
    <SummaryContainer>
      <SummaryCard type='CircleUp'>

        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{priceFormatter.format(income)}</strong>

      </SummaryCard>

      <SummaryCard type="CircleDown">

        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{priceFormatter.format(outcome)}</strong>

      </SummaryCard>

      <SummaryCard variant="green">

        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>{priceFormatter.format(total)}</strong>

      </SummaryCard>


    </SummaryContainer>
  );
};