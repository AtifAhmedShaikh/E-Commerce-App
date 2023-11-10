import React, { useState } from 'react'
import Container from "../layouts/containers/Container";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/auth';
import { useDispatch  } from "react-redux";
import { updateAuth } from '../store/slice/slice';
const Login = () => {
    const [inputs, setInputs] = useState({ username: "", password: "" });
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleInputs = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const {data,error}=await login(inputs);
        console.log(data,error)
        if(error)return;
        dispatch(updateAuth({auth:{user:{...data},status:true}}))
        navigate('/');
    }
    return (
        <React.Fragment>
            <Container style={{ height: "100vh" }} className='justify-content-center align-items-center flex-column gap-2'>
                <h4>LOGIN YOUR ACCOUNT</h4>
                <Form.Control type="text" name="username" placeholder="Username " style={{ width: "25vw" }} value={inputs.email} onChange={handleInputs} />
                <Form.Control type="email" name="password" placeholder="password" style={{ width: "25vw" }} value={inputs.password} onChange={handleInputs} />
                <div className='d-flex justify-content-start flex-column' style={{ width: "25vw" }}>
                    <Button variant="primary" size="sm" className="rounded-1 col-3 px-1" onClick={handleLogin}>
                        LOGIN
                    </Button>
                    <p className="mt-2">
                        Don&apos;t have an account
                        <Link to="/auth/signUp" className="ms-4">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Login
