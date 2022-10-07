import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${(props)=>props.theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  border: 0;
  height: 50px;
  cursor: pointer;
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  color: ${(props)=>props.theme.white};
  background: ${(props)=> props.theme["green-500"]};

  transition: background-color 1s;
  
  &:hover{
    background: ${(props)=> props.theme["green-700"]};
  }
`;