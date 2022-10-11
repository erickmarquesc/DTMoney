import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  inset: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0,0,0,0.75);
`;

export const Content = styled(Dialog.Content)`
  top: 50%;
  left: 50%;
  position: fixed;
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme['gray-800']};


  form{
    gap: 1rem;
    display: flex;
    margin-top: 2rem;
    flex-direction: column;

    input{
      border: 0;
      padding: 1rem;
      border-radius: 6px;
      color: ${(props) => props.theme['gray-300']};
      background: ${(props) => props.theme['gray-900']};

      &::placeholder{
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type="submit"]{
      border: 0;
      height: 58px;
      cursor: pointer;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['green-500']};

      transition: background-color 0.2s;

      &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover{
        background: ${(props) => props.theme['green-700']};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  position: absolute;
  background: transparent;
  color: ${(props) => props.theme['gray-500']};
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
};

export const TransactionType = styled(RadioGroup.Root)`
  gap: 1rem;
  display: grid;
  margin-top: 0.5rem;
  grid-template-columns: repeat(2,1fr);
`;

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
  border: 0;
  gap: 0.5rem;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-300']};
  background: ${(props) => props.theme['gray-700']};

  transition: background-color 0.2s;

  svg{
    color: ${(props) => props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']
    };
  }

  &[data-state='checked']{
    color: ${(props) => props.theme.white};
    background: ${(props) => props.variant === 'income'
      ? props.theme["green-500"]
      : props.theme['red-500']
    };
    
    svg{
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state='unchecked']:hover{
    background: ${(props) => props.theme['gray-600']};
  }

`;