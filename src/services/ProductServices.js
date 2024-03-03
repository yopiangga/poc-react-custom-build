import axios from "axios";
import { REACT_APP_API_URL } from "src/config/Url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import toast from "react-hot-toast";

export class ProductServices {
  async getProducts() {
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/products`);
      if (res.status === 200) {
        toast.success("Get Products");
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

  async getProduct({ id }) {
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/products/${id}`);
      if (res.status === 200) {
        toast.success("Get Product");
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
