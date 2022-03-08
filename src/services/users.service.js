import http from "../http-common";

class userDataService {
  getAllUsers() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  getToProfile(id) {
    return http.get(`/users/profile/${id}`);
  }

  getByName(first_name) {
    return http.get(`/users/${first_name}`);
  }

  register(data) {
    return http.post("/users/register", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }
  
  login(data) {
    return http.post(`/users/login`, data);
  }
}

export default new userDataService();