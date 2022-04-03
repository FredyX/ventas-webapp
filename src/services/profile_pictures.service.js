import http from "../http-common";

class profilePicService {


    get(id) {
        return http.get(`/profile_pictures/${id}`,
        {responseType: 'blob'});
    }


}

export default new profilePicService();