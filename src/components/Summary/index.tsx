import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styled";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {

  const { income, outcome, total } = useSummary();
  return (
    <SummaryContainer>
      <SummaryCard type='income'>

        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{priceFormatter.format(income)}</strong>

      </SummaryCard>

      <SummaryCard type='outcome'>

        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{priceFormatter.format(outcome)}</strong>

      </SummaryCard>

      <SummaryCard variant={income ? "green" : "red"} >

        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>{priceFormatter.format(total)}</strong>

      </SummaryCard>


    </SummaryContainer>
  );

};