import http from "../http-common";
import authHeader from "./auth-header";
class reportDataService {
  getMasCategorias() {
    return http.get("/reporters/categorias");
  }
}

export default new reportDataService();