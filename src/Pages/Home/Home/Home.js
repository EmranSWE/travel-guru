import React, { useState } from 'react';
import TourPack from '../tourPack/TourPack';

const Home = () => {
    const [show,setShow]=useState(false);
    const [pack,setPack]=useState();

    const handleButton =() =>{
        setShow(true);
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
            {show ? "": <div className='text-white col-lg-5'>
                <h1 style={{fontSize:'67px'}} className=''>COX's Bazar</h1>
                <p className='fs-4'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className='bg-warning border-0'>Booking</button>
           </div>}
           <div className='col-lg-6'>
            <TourPack show={show}></TourPack>
           </div>
            </div>
            <div className='w-100'>
            <button className=' w-25 mx-auto bg-primary text-white border-0' onClick={handleButton}>Show more</button>
            </div>
        </div>
    );
};

export default Home;