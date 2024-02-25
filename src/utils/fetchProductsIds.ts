import { API_URL } from "../constants/constants";
import { getAuthHeader } from "./getAuthHeader";
// declare function for the call to API and the get id from the API

export async function fetchProductsIds() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "X-Auth": getAuthHeader(),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        action: "get_ids",
        params: { offset: 0, limit: 600 },
      }),
    });
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching in get ids", error.message);
    }
  }
}
