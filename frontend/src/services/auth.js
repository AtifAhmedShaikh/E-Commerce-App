import api from "../utils/apiConfiguration"

export const createAccount=async (userData)=>{
    try{
        const response=await api.post("/api/auth/register",userData);
        return {data:response.data.user,error:null}
    }catch(error){
        return {data:null ,error}
    }
}

export const login=async(userData)=>{
    try {
        const response=await api.post("/api/auth/login",userData);
        return {data:response.data.user,error:null}
    } catch (error) {
        console.log(error)
        return {data:null,error}
    }
}

