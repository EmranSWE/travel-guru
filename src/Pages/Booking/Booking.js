import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';

const Booking = () => {
    const navigate=useNavigate();
    const [check,setCheck]=useState(false);
   const origin=useRef('');
    const changeToCheckout=()=>{
        setCheck(true)
    }
    const change=()=>{
        const origin=origin.currnt.value;
    }
    const chekOutBook=(event) =>{
        event.preventDefault()
        const destination=event.target.destination.value;
        const to=event.target.to.value;
        const from=event.target.from.value;    
    }
    
    if(check){
        navigate('/checkout');
    }
   
    
    return (
        <div className='container mt-5'>
            <div className='row'>
             <div className='text-white col-lg-6 col-md-6 col-sm-12'>
                <h1 style={{fontSize:'67px'}} className=''>COX's Bazar</h1>
                <p className='fs-4'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
               
           </div>
           <div className='col-lg-4 col-md-5 col-sm-12 ms-2 mt-5 bg-light rounded'>
            <div className='container'>
            <form onSubmit={chekOutBook}>
                <div className='container mt-2'><p >Origin</p>
                <input name='origin' className='w-100 border-0 bg-success p-1 text-dark bg-opacity-25' type="text"  id="" /></div>
                <div className='container'>
                <p>Destination</p>
                <input className='w-100 bg-success p-1 text-dark bg-opacity-25 border-0' type="text" name="destination" id="" />
                </div>
                <div className='container '>
                    <div className='row'>
                        <div className="col-lg-5 col-sm-12">
                        <p>From</p>
                        <input className='border-0 bg-success  text-dark bg-opacity-25' type="date" name="from" id="" />
                        </div>
                        <div className="col-lg-6 col-sm-12 ">
                        <p>To</p>
                    <input className='border-0 bg-success  text-dark bg-opacity-25' type="date" name="to" id="" />
                        </div>
                    
                    </div>
                </div>
                <div className='container mt-2 '>
                <button  onClick={changeToCheckout} className='w-100 bg-warning border-0 rounded mb-4'>Start Booking</button>
                </div>
                
            </form>
            {check ? <CheckOut change={change}></CheckOut>:''}
            </div>

           </div>
        </div>
        </div>
    );
};

export default Booking;