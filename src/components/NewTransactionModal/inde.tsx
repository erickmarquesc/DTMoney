import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useContextSelector } from 'use-context-selector';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from 'react-hook-form';
import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod';

const newTransactionFormSchema = z.object({
  price: z.number(),
  category: z.string(),
  description: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionFormaInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const  createTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.createTransaction
  });

  const { register, handleSubmit, formState: { isSubmitting }, control, reset } = useForm<NewTransactionFormaInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  });

  async function handleCreateNewTransaction(data: NewTransactionFormaInputs) {

    const { category, description, price, type } = data;
    await createTransaction({
      type,
      price,
      category,
      description,
    })

    reset();
  };

  return (
    <Dialog.Portal>

      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>

          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant='outcome' value='outcome'>
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>)
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>

        </form>
      </Content>

    </Dialog.Portal>
  );
};