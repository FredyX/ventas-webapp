import http from "../http-common";
import authHeader from "./auth-header";

class productDataService {
  getAllproducts() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }
  getDetalle(id) {
    return http.get(`/products/detalle/${id}`);
  }

  getProductUser(id){
    return http.get(`/products/user/${id}`);
  }

  add(data) {
    let headers = authHeader()
    headers["Content-Type"] = "multipart/form-data"
    return http.post("/products/", data, { headers: headers});
  }

  getImagen(id) {
    return http.get(`/products/images/${id}`, { headers: authHeader() })
  }

  delete(id) {
    return http.delete(`/products/${id}`, { headers: authHeader() });
  }

}

export default new productDataService();