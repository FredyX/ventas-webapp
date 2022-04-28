
import http from "../http-common";
import authHeader from "./auth-header";

class complaintsService{

    get(id) {
        return http.get(`/complaints/${id}`);
    }

    add(data){
        let headers = authHeader();
        return http.post(`/complaints/`, data, { headers: headers })
    }

    delete(id) {
        let headers = authHeader()
        return http.delete(`/complaints/${id}`, { headers: headers });
    }
}

export default new complaintsService();
