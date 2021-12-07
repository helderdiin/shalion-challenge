import { PRICE_CURRENCY } from '~/utils';

export const currencyParse = (
  price: number,
  currency: PriceCurrency = PRICE_CURRENCY.DEFAULT,
): string =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency }).format(price);
