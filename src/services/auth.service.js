import axios from "axios";

const API_URL = "http://localhost:3001/api/auth";

class AuthService{
    login(user_email, user_password){
        return axios.post(`${API_URL}/login`, {
            user_email,
            user_password
        })
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
