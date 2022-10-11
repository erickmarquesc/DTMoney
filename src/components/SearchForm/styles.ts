import styled from "styled-components";

export const SearchFormContainer = styled.form`
  gap: 1rem;
  display: flex;

  input{
    flex: 1;
    border: 0;
    padding: 1rem;
    font-weight: bold;
    border-radius: 6px;
    color: ${(props)=>props.theme["gray-500"]};
    background: ${(props)=>props.theme["gray-900"]};

    &::placeholder{
      color: ${(props)=>props.theme["gray-500"]};
    }
  }

  button{
    border: 0;
    gap: 0.75rem;
    padding: 1rem;
    display: flex;
    cursor: pointer;
    font-weight: bold;
    border-radius: 6px;
    align-items: center;
    background: transparent;
    color: ${(props)=>props.theme["green-300"]};
    border: 1px solid ${(props)=>props.theme["green-300"]};

    transition: border-color 0.2s, color 0.2s, background-color 0.2s;

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:hover{
      color: ${(props)=>props.theme.white};
      background: ${(props)=>props.theme["green-500"]};
      border-color: ${(props)=>props.theme["green-500"]};
    }
  }
`;