import http from "../http-common";
import authHeader from "./auth-header";
class reportDataService {
  getMasCategorias(limite) {
    return http.get(`/reporters/categorias/${limite}`);
  }

  getMasSuscripciones (limite){
    return http.get(`/reporters/suscripciones/${limite}`);
  }
  getMasDepartamentos(id){
    return http.get(`reporters/departamentos/${id}`);
  }
}

export default new reportDataService();