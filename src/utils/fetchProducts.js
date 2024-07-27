import axios from "axios";

async function fetchProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const obj = response.data;
    return obj;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchProducts;
