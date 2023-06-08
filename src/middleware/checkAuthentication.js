import { API_REQUEST } from "../config/Constants";

export const fetchUserInfoData = async (token)=>{
    try {
        const response = await fetch(API_REQUEST + '/user/auth', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-auth-token': token
            }
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
};

export const checkAuthentication = async (userInfo) => {
    let token = null

    if(userInfo.token){
        token = userInfo.token
    }else {
        token = localStorage.getItem("token")
    }
    
    if(token){
        let resnponse = await fetchUserInfoData(token);
        if(resnponse.success){}
    }else{
        localStorage.removeItem("token");
    }
}