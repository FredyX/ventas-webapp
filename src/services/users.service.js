import http from "../http-common";
import authHeader from "./auth-header";
class userDataService {
  getAllUsers() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`, { headers: authHeader() });
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
    return http.put(`/users/${id}`, data , { headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/users/${id}`, { headers: authHeader() });
  }

  getProfileModificate(id) {
    return http.get(`/users/personal/${id}`, { headers: authHeader()});
  }

}

export default new userDataService();