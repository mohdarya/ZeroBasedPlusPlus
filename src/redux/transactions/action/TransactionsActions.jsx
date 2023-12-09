export function addTransaction(payee, amount, date, category) {
  return {
    type: 'ADD_TRANSACTION',
    payee,
    amount,
    date,
    category,
  };
}
