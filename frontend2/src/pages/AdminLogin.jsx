import { Link } from "react-router-dom";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import Container from "../layouts/containers/Container";
import { useState } from "react";

const AdminLogin = () => {
  const [formData,setFormData]=useState({username:"",password:""});
  const handleInputs=(e)=>{
    const key=e.target.name;
    const value=e.target.name;
    setFormData({...formData,[key]:value});
  }
  return (
    <Container className="w-full flex justify-center items-center h-[100vh] flex-col">
      <h4 className="font-bold text-2xl">Admin Login</h4>
      <p>
        If your not admin of this App please Go back right now{" "}
        <Link to="/" className="underline font-bold pb-1 text-blue-600 ">
          Home
        </Link>{" "}
      </p>
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormInput type={"text"} value={formData.username} handler={handleInputs} label={"UserName"} name={"name"} error={false}  errorMessage={"None"}/>
        <FormInput type={"text"} value={formData.password} handler={handleInputs} label={"Password"} name={"password"} error={false}  errorMessage={"None"}/>
        <div className="flex justify-center">
          <Button className="bg-teal-500 text-gray-100 hover:bg-teal-700 py-1 mt-2 px-2 rounded-md ">
            Login Admin Account
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AdminLogin;
