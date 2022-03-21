import http from "../http-common";

class categoriesService {


  get(id) {
    return http.get(`/categories/${id}`);
  }

  getAll() {
    return http.get("/categories/");
  }

}

export default new categoriesService();