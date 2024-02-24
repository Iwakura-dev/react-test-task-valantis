import axios, { type AxiosResponse } from "axios";
import { API_URL } from "../constants/constants";
import { TGetProductsId } from "../types/types";
import { getAuthHeader } from "./getAuthHeader";

export async function fetchProductsIds() {
  try {
    const response: AxiosResponse<TGetProductsId> = await axios.post(
      API_URL,
      {
        action: "get_ids",
        params: { offset: 0, limit: 600 },
      },
      {
        headers: {
          "X-Auth": getAuthHeader(),
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching in get ids", error.message);
    }
  }
}
