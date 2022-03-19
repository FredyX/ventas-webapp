import http from "../http-common";
import {useNavigate} from "react-router-dom";
class AuthService{
    login(data){
        return http.post(`/auth/login`, data )
        .then(response=>{
            if(response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout(){
        localStorage.removeItem("user");
    }
    
    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}


export default new AuthService();
