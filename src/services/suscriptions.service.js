import http from "../http-common";
import authHeader from "./auth-header";
class suscriptionsDataService {

    getSubId(id){
        return http.get(`/suscriptions/suscriptions/${id}`);
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
    updateSuscripCategories(data)  {
        let headers = authHeader();
        return http.put("/suscription/categories/",data, {headers})
    }
    updateSuscrip(data) {
       let headers = authHeader();
        //headers["Content-Type"] = "multipart/form-data"
        return http.put("/suscriptions/suscriptions/", data, { headers: headers}); 
    }
    deleteSuscrip(id){
        let headers = authHeader();
        //headers["Content-Type"] = "multipart/form-data"
        return http.delete(`/suscriptions/suscriptions/${id}`, { headers: headers});    
    }
}

export default new suscriptionsDataService();