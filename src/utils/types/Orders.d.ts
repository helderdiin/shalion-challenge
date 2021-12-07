declare type PriceCurrency = 'EUR';

declare type StockStatus = 'OutOfStock' | 'InStock';

declare type Order = {
  is_favorite: boolean;
  product_name: string;
  retailer_name: string;
  fetch_datetime: string; // trocar para Date
  total_price: number | null; // remover null
  price_currency: PriceCurrency | string | null; // remover null e string
  stock_info: StockStatus | string; // remover string
};

declare type OrdersChartData = Record<string, number>;
