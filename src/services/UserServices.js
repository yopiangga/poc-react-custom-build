import axios from "axios";
import { REACT_APP_API_URL } from "src/config/Url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import toast from "react-hot-toast";

export class UserServices {
  async getUsers() {
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/users`);
      if (res.status === 200) {
        toast.success("Get Users");
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

  async getUser({ id }) {
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/users/${id}`);
      if (res.status === 200) {
        toast.success("Get User");
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
