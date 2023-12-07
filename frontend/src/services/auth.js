import api from "../config/apiConfig"

export const registerUser=async(userData)=>{
    try {
        const response=await api.post("/api/auth/register",userData);
        return {data:response.data,error:null}
    } catch (error) {
        console.log(error.response.data.message);
        return {data:null,error}
    }
}

export const loginUser=async(userData)=>{
    try {
        const response=await api.post("/api/auth/login",userData);
        return {data:response.data,error:null}
    } catch (error) {
        console.log(error.response.data.message);
        return {data:null,error}
    }
}
