import { API_URL } from "../constants/constants";
import { getAuthHeader } from "./getAuthHeader";

export async function fetchProducts(productIds: any) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "X-Auth": getAuthHeader(),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        action: "get_items",
        params: { ids: productIds.result },
      }),
    });
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching in get products list", error.message);
    }
  }
}
