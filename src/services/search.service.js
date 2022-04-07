import http from "../http-common";
import authHeader from "./auth-header";

class searchDataService {
    getSearchProduct(url) {
      return http.get(`/search${url}`);
    }
  }
  
  export default new searchDataService();