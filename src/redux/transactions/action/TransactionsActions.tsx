export function addTransaction(payee:string, amount: number, date: string, category: string) {
  return {
    type: 'ADD_TRANSACTION',
    payee,
    amount,
    date,
    category,
  };
}


