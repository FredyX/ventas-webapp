import http from "../http-common";
import authHeader from "./auth-header";

class categoriesService {


  get(id) {
    return http.get(`/categories/${id}`);
  }

  getAll() {
    return http.get("/categories/");
  }

  delete(id) {
    let headers = authHeader()
    return http.delete(`/categories/${id}`, { headers: headers });
  }

  add(name){
    let headers = authHeader()
    return http.post(`/categories/`, name, { headers: headers })
  }
}

export default new categoriesService();