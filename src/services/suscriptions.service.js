import http from "../http-common";
import authHeader from "./auth-header";
class suscriptionsDataService {

    getAll(){
        return http.get(``);
    }

    addSuscrip(data) {
        let headers = authHeader();
        //headers["Content-Type"] = "multipart/form-data"
        return http.post("/suscriptions/suscriptions/", data, { headers: headers});
      }
    addSuscripCategories(data){
        let headers = authHeader();
        return http.post("/suscription/categories/",data, {headers});
      }
}

export default new suscriptionsDataService();