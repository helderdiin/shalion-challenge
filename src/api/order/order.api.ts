import { ResponseError } from '~/utils';
// import data from './data.json'; // Used a local data to avoid aways wait the request
import request from '../request';

export default class OrderApi {
  fetchOrders = async (): Promise<Order[]> => {
    try {
      const { data } = await request.get(`/orders`);
      return data.data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}
