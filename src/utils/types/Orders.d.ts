declare type PriceCurrency = 'EUR';

declare type StockStatus = 'OutOfStock' | 'InStock' | 'Unknown';

declare type Order = {
  is_favorite: boolean;
  product_name: string;
  retailer_name: string;
  fetch_datetime: Date;
  total_price: number;
  price_currency: PriceCurrency;
  stock_info: StockStatus;
};

declare type OrdersChartData = Record<string, number>;
