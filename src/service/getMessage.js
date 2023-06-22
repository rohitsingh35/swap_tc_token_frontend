import axios from "axios";
import {  REACT_APP_BACKEND_LOCAL_URL } from "../constant/environment";

export const getMessage = async () => {
  try {
    const res = await axios.get(
      `${REACT_APP_BACKEND_LOCAL_URL}/admin/get/getMessageWithDate`
    );
    if (res.status == 202) {
      return res.data.data;
    }
    console.log(res, "res");
  } catch (err) {
    return err.message;
  }
};