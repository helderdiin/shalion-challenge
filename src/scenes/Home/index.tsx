import React, { FC, useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
// import { Routes } from '~/routes';
import { OrderStore } from '~/stores';
import { showAlert } from '~/utils';
import Home from './Home';

type Props = {
  order: OrderStore;
};

const HomeContainer: FC<Props> = ({ order }) => {
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);

    try {
      await order.fetchOrders();
    } catch (e) {
      showAlert(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Home
      loading={loading}
      orders={order.ordersList}
      productsChartData={order.productsChartData}
      retailersChartData={order.retailersChartData}
    />
  );
};

export default inject('order')(observer(HomeContainer));
