import http from "../http-common";
import authHeader from "./auth-header";
class reportDataService {
  getMasCategorias() {
    return http.get("/reporters/categorias");
  }

  getMasSuscripciones (){
    return http.get("/reporters/suscripciones");
  }
  getMasDepartamentos(){
    return http.get("reporters/departamentos");
  }
}

export default new reportDataService();