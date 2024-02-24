import axios from "axios";
import { API_URL } from "../constants/constants";
import { getAuthHeader } from "./getAuthHeader";

export async function fetchProductsWithFilter(filter: string) {
  try {
    const response = await axios.post(
      API_URL,
      {
        action: "get_fields",
        params: { field: filter },
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
      console.error("Error fetching in filter!", error.message);
    }
  }
}
