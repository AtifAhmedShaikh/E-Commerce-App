import React, { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useDispatch } from "react-redux";
import { updateAuth } from "../store/actions/productSlice";
import { loginUser } from "../services/auth";

const Login = () => {
  const dispatch=useDispatch();
  const [error,setError]=useState({status:false,message:""});
  const [formData,setFormData]=useState({
    username:"",
    password:""
  });
  const handleInputs=(e)=>{
    const key=e.target.name;
    const value=e.target.value;
    setFormData({...formData,[key]:value});
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    e.target.disabled=true;
    const {data,error}=await loginUser(formData);
    if(!error){
      setError({status:false,message:""});
      dispatch(updateAuth({user:data.user,status:true}));
    }else{
      setError({status:true,message:error.response.data.message});
    }
    e.target.disabled=false;
  }
  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login in your account
          </h2>
        </div>
       <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2"  method="POST" onSubmit={handleSubmit}>
              <FormInput type={"text"} value={formData.username}  handler={handleInputs} label={"UserName"} name={"username"} error={false} errorMessage={"None"} />
            <FormInput type={"password"} value={formData.password}  handler={handleInputs} label={"Password"} name={"password"} error={false} errorMessage={"None"} />
            <div>
              <Button type="submit" className="min-w-fit rounded-md bg-emerald-700 px-3 py-1.5 text-sm font-light leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login
              </Button>
            </div>
          </form>
          {
            error.status&&<p className="text-red-500 text-sm font-bold">{error.message}</p>
          }
          <p className="mt-5 text-start text-sm text-gray-500">
            Don&apos;t have an Account
            <Link
              to="/auth/signUp"
              className="ml-3 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
          <p className="mt-1 text-start text-sm text-gray-500">
            Go Back To 
            <Link
              to="/"
              className="ml-3 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Home
            </Link>
          </p>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
