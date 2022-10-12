import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { memo } from "react";
import * as z from 'zod';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

function SearchFormComponent() {
  
  const fetchTransactions = useContextSelector(TransactionsContext, (context)=>{
    return context.fetchTransactions
  });

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInput) {
    await fetchTransactions(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};

export const SearchForm = memo(SearchFormComponent);

/* A utilização do memo em components pequenos como esse não é recomendada.
 * Pois pode ser mais custoso do que o react usar seu próprio fluxo de comparação.
 * Só permaneci utilizando o memo no intuito de aprender a utiliza-lo quando um componente for grande.
 */