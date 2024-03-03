import axios from "axios";
import { REACT_APP_API_URL } from "src/config/Url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import toast from "react-hot-toast";

export class OrderServices {
  async getOrders() {
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/orders`);
      if (res.status === 200) {
        toast.success("Get Orders");
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }

  async getOrder({ id }) {
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/orders/${id}`);
      if (res.status === 200) {
        toast.success("Get Order");
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }

  async createOrder({ userId, orderDate, items, payment }) {
    try {
      const res = await axios.post(`${REACT_APP_API_URL}/orders`, {
        userId,
        orderDate,
        items,
        payment,
      });
      if (res.status === 200) {
        toast.success("Create Order");
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }
}
