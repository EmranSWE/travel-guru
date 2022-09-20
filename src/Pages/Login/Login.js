import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const emailChange=useRef('');
    const passwordChange=useRef('');
    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
     
      if(loading){
        return <Loading></Loading>
      }
      const login=(event)=>{
            event.preventDefault();
            const email=emailChange.current.value;
            const password=passwordChange.current.value;
            signInWithEmailAndPassword(email, password)
            console.log(error)
      }
      if(user){
        navigate(from, { replace: true });
      }
    return (
        <div>
            <div  className=' border border-primary bg-white w-25 mx-auto container '>

                <form onSubmit={login} className='container' action="">
                <h1>Login account</h1>
          
            <span>Username Or Email</span>
            <input ref={emailChange} className='border-2 w-100 border-top-0 border-start-0 border-end-0' type="email" name="" id="" />
            <span>Password</span>
            <input ref={passwordChange} className='border-2 w-100 border-top-0 border-start-0 border-end-0' type="password" name="" id="" />
            
            <br />
            <input className=' mt-3 w-100 bg-warning border-0 rounded' type="submit" value="Login" />
            <p className='text-danger'>{error?.message}</p> 
                </form>
                <p>New to Travel Guru? <Link to='/register'>Register</Link></p>
           <SocialLogin></SocialLogin>
            </div>
            
        </div>
    );
};

export default Login;