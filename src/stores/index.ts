import OrderStore from './order.store';

class RootStore {
  order: OrderStore;

  constructor() {
    this.order = new OrderStore();
  }
}

const store = new RootStore();

export { OrderStore };
export default store;
