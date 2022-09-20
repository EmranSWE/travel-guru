import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import rect1 from './images/Rectangle 1.png'
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Home/Blog/Blog';
import Booking from './Pages/Booking/Booking';
import Register from './Pages/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
function App() {
  return (
    <div>
       <img className="card-img" src={rect1} ></img>
       <div className="card-img-overlay">
       <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/checkout' element={
        <RequireAuth>
        <CheckOut></CheckOut>
        </RequireAuth>
       }></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
       {/*  
        <Route path='' element={}></Route>
        <Route path='' element={}></Route>
        <Route path='' element={}></Route> */}
      </Routes>
       </div>
    </div>
  );
}

export default App;
