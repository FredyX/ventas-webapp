import http from "../http-common";
class AuthService{
    login(data){
        return http.post(`/auth/login`, data )
        .then(response=>{
            console.log(response);	
            if(response.data.data.token){

                localStorage.setItem("user", JSON.stringify(response.data.data));
            }
            return response.data.data;
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
