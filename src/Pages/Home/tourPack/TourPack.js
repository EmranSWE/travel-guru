import React from 'react';
import coxBazar from '../../../images/Rectangle 1.png';
import srimongol from '../../../images/Sreemongol.png';
import sundarban from '../../../images/sundorbon.png';
import sajek from '../../../images/Sajek.png';
import newPlace  from '../../../images/Rectangle 27.png'
import { useNavigate } from 'react-router-dom';

const TourPack = ({show}) => {
   const navigate=useNavigate();
   const handlePackClick =() =>{
    navigate('/booking')
   }
    
    return (
        <div className='d-flex'>
            <div className='mx-2'>
                <img onClick={handlePackClick} style={{width:'270px',height:'416px'}} class="card-img rounded-4" src={coxBazar} alt="" />
                
                <h2>COX'S BAZAR</h2>
            </div>
            <div className='mx-2'>
                <img onClick={handlePackClick} style={{width:'270px',height:'416px'}} class="card-img" src={srimongol} alt="" />
                
                <h2>SREEMANGAL</h2>
            </div>
            {show ? <div className='d-flex'>
                <div className='mx-2'>
                <img onClick={handlePackClick} style={{width:'270px',height:'416px'}} class="card-img" src={sundarban} alt="" />
                <h2>SUNDARBAN</h2>
                </div>
                <div className='mx-2'>
                <img onClick={handlePackClick} style={{width:'270px',height:'416px'}} class="card-img" src={sajek} alt="" />
                
                <h2>SUNDARBAN</h2>
            </div>
            <div className='mx-2'>
                <img style={{width:'270px',height:'416px'}} class="card-img" src={newPlace} alt="" />
                
                <h2>SUNDARBAN</h2>
            </div>
            </div>:""}
        </div>
    );
};

export default TourPack;