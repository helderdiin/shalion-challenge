import React, { FC } from 'react';
import { SceneWrapper } from '~/components';
import { Chart } from '~/modules';
import {
  STOCK_STATUS,
  STOCK_STATUS_TEXT,
  currencyParse,
  formatToScreenDate,
} from '~/utils';
import { Table, Title, Wrapper } from './styles';

type Props = {
  loading: boolean;
  orders: Order[];
  productsChartData: OrdersChartData;
  retailersChartData: OrdersChartData;
};

const Home: FC<Props> = ({
  loading,
  orders,
  productsChartData,
  retailersChartData,
}) => {
  const columns = [
    {
      title: 'Retailer',
      dataIndex: 'retailer_name',
      key: 'retailer_name',
    },
    {
      title: 'Product',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Price',
      dataIndex: 'display_price',
      key: 'display_price',
      sorter: (a, b) => a.total_price - b.total_price,
    },
    {
      title: 'Status',
      dataIndex: 'display_stock',
      key: 'display_stock',
      filters: [
        {
          text: STOCK_STATUS_TEXT.OutOfStock,
          value: STOCK_STATUS.OUT_OF_STOCK,
        },
        {
          text: STOCK_STATUS_TEXT.InStock,
          value: STOCK_STATUS.IN_STOCK,
        },
      ],
      onFilter: (value, record) => record.stock_info.indexOf(value) === 0,
      sorter: (a, b) => a.stock_info.length - b.stock_info.length,
    },
    {
      title: 'Order date',
      dataIndex: 'fetch_datetime',
      key: 'fetch_datetime',
    },
  ];

  const dataSource = orders.map((order) => ({
    ...order,
    display_stock: STOCK_STATUS_TEXT[order.stock_info],
    display_price: currencyParse(order.total_price || 0), // passar currency type quando voltar a pegar da API
    total_price: order.total_price || 0,
    fetch_datetime: formatToScreenDate(new Date(order.fetch_datetime)),
  }));

  const productsChartOptions = {
    chart: {
      id: 'products-chart',
    },
    xaxis: {
      categories: Object.keys(productsChartData),
    },
  };

  const productsChartSeries = [
    {
      name: 'Amount',
      data: Object.values(productsChartData),
    },
  ];

  const retailersChartOptions = {
    chart: {
      id: 'retailers-chart',
    },
    xaxis: {
      categories: Object.keys(retailersChartData),
    },
  };

  const retailersChartSeries = [
    {
      name: 'Amount',
      data: Object.values(retailersChartData),
    },
  ];

  return (
    <SceneWrapper>
      <Wrapper>
        <Title>Orders List</Title>
        <Table columns={columns} dataSource={dataSource} />
        <Title>Amount of Products</Title>
        <Chart
          options={productsChartOptions}
          series={productsChartSeries}
          type="area"
        />
        <Title>Amount of Products by Retailer</Title>
        <Chart
          options={retailersChartOptions}
          series={retailersChartSeries}
          type="bar"
        />
      </Wrapper>
    </SceneWrapper>
  );
};

export default Home;
