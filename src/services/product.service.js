import http from "../http-common";
import authHeader from "./auth-header";

class productDataService {
  getAllproducts() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`, { headers: authHeader() });
  }

  add(data) {
    return http.post("/products/", data, { headers: authHeader() });
  }

}

export default new productDataService();