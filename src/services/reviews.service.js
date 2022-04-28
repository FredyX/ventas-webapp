import http from "../http-common";
import authHeader from "./auth-header";

class ReviewsService {
    getAll() {
        return http.get("/reviews", {
            headers: authHeader(),
        });
    }

    get(id) {
        return http.get(`/reviews/${id}`, {
            headers: authHeader(),
        });
    }

    create(data) {
        return http.post("/reviews", data, {
            headers: authHeader(),
        });
    }

    update(id, data) {
        return http.put(`/reviews/${id}`, data, {
            headers: authHeader(),
        });
    }

    delete(id) {
        return http.delete(`/reviews/${id}`, {
            headers: authHeader(),
        });
    }

    deleteAll() {
        return http.delete("/reviews", {
            headers: authHeader(),
        });
    }

}