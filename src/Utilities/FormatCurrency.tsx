const currencyFormater = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});
export const formatCurrency = (number: number) => {
  return currencyFormater.format(number);
};
