import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styled";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard type='CircleUp'>

        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>R$ 17.400,00</strong>

      </SummaryCard>

      <SummaryCard type="CircleDown">

        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>R$ 17.400,00</strong>

      </SummaryCard>

      <SummaryCard variant="green">

        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>R$ 17.400,00</strong>

      </SummaryCard>


    </SummaryContainer>
  );
};