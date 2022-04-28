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
    let headers = authHeader();
    const data = {
      categorie_name : name
    }
    return http.post(`/categories/`, data, { headers: headers })
  }
}

export default new categoriesService();