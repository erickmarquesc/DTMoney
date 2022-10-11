import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  gap: 2rem;
  width: 100%;
  display: grid;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin-top: -5rem;
  grid-template-columns: repeat(3, 1fr);
`;

interface SummaryCardProps {
  variant?: "green" | "red"
  type?: "income" | "outcome"
};

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme["gray-600"]};

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};

    ${(props) => props.type === 'income' ? css`
      svg{
        color: ${props.theme["green-300"]};
      }  
    `: props.type === 'outcome' && css`
      svg{
        color: ${props.theme["red-300"]};
      }  
    `}
  }

  strong{
    display: block;
    font-size: 2rem;
    margin-top: 1rem;
  }

  ${(props) => props.variant === 'green' ? css`
    color: ${props.theme.white};
    background: ${props.theme["green-700"]};
  `: props.variant === 'red' && css`
    color: ${props.theme.white};
    background: ${props.theme["red-500"]};
  `}
`;