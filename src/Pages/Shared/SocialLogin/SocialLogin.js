import React from 'react';
import google from '../../../images/icons/google.png';

import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const github='https://cdn-icons-png.flaticon.com/512/25/25231.png'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    const [signInWithGitHub,user1] = useSignInWithGithub(auth);
    
    if(user || user1){
        navigate('/home')
    }
    return (
        <div className='my-4'>
            <div className='d-flex align-items-center'>
                <div className='w-50  border-dark border-start-0 border-end-0 border-top-0 border  border-1 '>
                </div>
                <p>or</p>
                <div className='w-50 border-dark border-start-0 border-end-0 border-top-0 border  border-1  '>
                </div>
            </div>
            <div onClick={() => signInWithGoogle()} className='d-flex p-1 align-items-center justify-content-between w-75 mx-auto border border-1 rounded rounded-pill'>
                <img width='37px' src={google} alt="" />
                <p>Continue with Google</p>
            </div>
            <div onClick={() => signInWithGitHub()} className='d-flex p-1 align-items-center justify-content-between w-75 mx-auto border border-1 rounded-pill mt-2'>
                <img width='37px' src={github} alt="" />
                <p>Continue with Github</p>
            </div>
        </div>
    );
};

export default SocialLogin;