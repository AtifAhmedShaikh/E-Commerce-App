import React, { useState } from 'react'
import Container from "../layouts/containers/Container";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { createAccount } from '../services/auth';
import { useDispatch  } from "react-redux";
import { updateAuth } from '../store/slice/slice';
function SignUp() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [inputsData, setInputData] = useState({
        username: "",
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    });
    const inputStyle = {
        width: "25vw"
    }
    const handleInputs = (e) => {
        setInputData({ ...inputsData, [e.target.name]: e.target.value })
    }
    // handle from submit for create an account
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data,error}=await createAccount(inputsData);
        if(error)return;
        dispatch(updateAuth({auth:{user:{...data},status:true}}));
        navigate('/');
    }
    return (
        <React.Fragment>
            <Container style={{ height: "100vh" }} className='justify-content-center align-items-center flex-column gap-2'>
                <h4>Create a new Account</h4>
                <form action="" className='d-flex flex-column gap-2' onSubmit={handleSubmit} autoComplete='off'>
                    <Form.Control type="text" value={inputsData.name} name="name" placeholder="Name " onChange={handleInputs} style={inputStyle} />
                    <Form.Control type="text" value={inputsData.username} name="username" placeholder="User Name " onChange={handleInputs} style={inputStyle} />
                    <Form.Control type="text" value={inputsData.email} name="email" placeholder="Email " onChange={handleInputs} style={inputStyle} />
                    <Form.Control type="text" value={inputsData.password} name="password" placeholder="password" onChange={handleInputs} style={inputStyle} />
                    <Form.Control type="text" value={inputsData.confirmPassword} name="confirmPassword" placeholder="confirm password" onChange={handleInputs} style={inputStyle} />
                    <Button type="submit" variant="primary" size="sm" className="rounded-1 mt-3 col-4 px-1">
                        Create Account
                    </Button>
                </form>
                <div className='d-flex justify-content-start flex-column' style={inputStyle}>
                    <p className="mt-2">
                        I  Already have an account
                        <Link to="/auth/login" className="ms-4">
                            Login
                        </Link>
                    </p>
                </div>
            </Container>
        </React.Fragment>

    )
}

export default SignUp
