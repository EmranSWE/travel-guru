import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const Register = () => {
    const nameChange=useRef('');
    const emailChange=useRef('');
    const confirmPasswordChange=useRef('');
    const passwordChange=useRef('');
    const navigate=useNavigate();
    const [passwordError,setPasswordError]=useState('');
    //Create new user
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      if(user){
        navigate('/home')
      }
      if(loading){
        return <Loading></Loading>
      }

      let errorElement;
      if(error ){
        errorElement= 
            <p className='text-danger'>Error : {error?.message}  </p>
        
         }
      
    const handleRegister =(event) =>{
        event.preventDefault();
        
        const email=emailChange.current.value;
        const password=passwordChange.current.value;
        const confirmPassword=confirmPasswordChange.current.value;
        if(password !== confirmPassword){
            setPasswordError('Password Does not match');
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div>
              <div  className=' border border-primary bg-white w-25 mx-auto container '>
                <form className='container' onSubmit={handleRegister}>
                <h1>Create an account</h1>
            <span>First name</span>
            <input ref={nameChange} className='border-2 w-100 border-top-0 border-start-0 border-end-0' type="text" name="" id="firstName" placeholder='Your First name'/>
            <span>Last Name</span>
            <input className='border-2 w-100 border-top-0 border-start-0 border-end-0' placeholder='Your Last Name' type="text" name="" id="lastName" />
            <span>Username Or Email</span>
            <input ref={emailChange}  className='border-2 w-100 border-top-0 border-start-0 border-end-0' type="email" placeholder='Your Email' name="" id="email" />
            <span>Password</span>
            <input ref={passwordChange}  className='border-2 w-100 border-top-0 border-start-0 border-end-0' placeholder='Password' type="password" name="" id="password" />
            <span>Confirm Password</span>
            <input ref={confirmPasswordChange}  className='border-2 w-100 border-top-0 border-start-0 border-end-0' type="password" placeholder='Confirm Password' name="" id="confirmPassword" />
            <br />
            <input className=' mt-3 w-100 bg-warning border-0 rounded' type="submit" value="Create A New Account " />
        {errorElement}
        {passwordError}
                </form>
                <p>Already Have An Account? <Link to='/login'>Login</Link></p>
                <SocialLogin></SocialLogin>
           
            </div>
        </div>
    );
};

export default Register;