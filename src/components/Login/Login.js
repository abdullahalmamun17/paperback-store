import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import './Login.css'
import { firebaseIntialize, handleGoogleSignIn } from './loginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => console.log(data);

    firebaseIntialize();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                setLoggedInUser(result)
                history.replace(from);
            });
    }

    return (
        <Container>
            <Header></Header>

            <div className="">
                <h1>{loggedInUser.displayName}</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="login-form px-5 py-3 mt-5 mx-auto w-50 border bg-light rounded">
                    <h3 className="text-center mb-4">Login</h3>
                    <h6>Email</h6>
                    <input name="email" ref={register({ required: true })} className="d-block w-100 mb-3 border-0 p-2 rounded" />
                    <h6>Password</h6>
                    <input name="password" ref={register({ required: true })} className="d-block w-100 mb-3 border-0 p-2 rounded" />
                    {/* {errors.password && <span>This field is required</span>} */}

                    <input type="submit" value="Login" className="btn btn-primary d-block w-25 mx-auto" />
                </form>
                <div className="text-center mt-3">
                    <h5 className="mb-3 py-1 border-bottom w-25 mx-auto">Or Using</h5>
                    <button className="btn btn-outline-primary mx-2 px-5"><FaFacebook style={{ fontSize: '30px', color: 'blue' }} /></button>
                    <button onClick={googleSignIn} className="btn btn-outline-success mx-2 px-5"> <FcGoogle style={{ fontSize: '30px' }} /></button>

                </div>
            </div>
        </Container>
    );
};

export default Login;