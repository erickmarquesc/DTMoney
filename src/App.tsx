import { TransactionsProvider } from "./contexts/TransactionsContext";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from "./pages/Transactions";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    
    </ThemeProvider>
  );

};
