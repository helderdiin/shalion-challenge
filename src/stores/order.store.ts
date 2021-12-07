import { union } from 'lodash';
import { action, makeObservable, observable } from 'mobx';
import { OrderApi } from '~/api';
import { PRICE_CURRENCY, STOCK_STATUS } from '~/utils';

export default class OrderStore {
  OrderApi: OrderApi;

  @observable
  ordersList: Order[] = [];

  @observable
  productsChartData: OrdersChartData = {};

  @observable
  retailersChartData: OrdersChartData = {};

  constructor() {
    makeObservable(this);
    this.OrderApi = new OrderApi();
  }

  @action
  fetchOrders = async (): Promise<void> => {
    const ordersList = await this.OrderApi.fetchOrders();

    return new Promise((resolve) => {
      /* eslint-disable no-param-reassign */
      this.productsChartData = ordersList.reduce((prev, curr) => {
        if (prev[curr.product_name] === undefined) {
          prev[curr.product_name] = 0;
        } else {
          prev[curr.product_name] += 1;
        }

        return prev;
      }, {});

      /* eslint-disable no-param-reassign */
      this.retailersChartData = ordersList.reduce((prev, curr) => {
        if (prev[curr.retailer_name] === undefined) {
          prev[curr.retailer_name] = 0;
        } else {
          prev[curr.retailer_name] += 1;
        }

        return prev;
      }, {});

      this.ordersList = ordersList.map((order, i) => ({
        ...order,
        price_currency: order.price_currency || PRICE_CURRENCY.DEFAULT,
        stock_info:
          !order.stock_info || order.stock_info === 'Unknown'
            ? STOCK_STATUS.DEFAULT
            : order.stock_info,
      }));

      resolve();
    });
  };
}
