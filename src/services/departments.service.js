import http from "../http-common";

class departmentService {


  get(id) {
    return http.get(`/departments/${id}`);
  }

  getAll() {
    return http.get("/departments/");
  }

}

export default new departmentService();