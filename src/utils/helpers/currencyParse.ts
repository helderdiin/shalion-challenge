import { PRICE_CURRENCY } from '~/utils';

export const currencyParse = (
  price: number,
  currency: PriceCurrency | string = PRICE_CURRENCY.DEFAULT, // remover o string
): string =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency }).format(price);
