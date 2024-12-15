import {NavLink, Route, Routes, useNavigate} from 'react-router-dom'
import './App.css';
import AddRecord from './pages/AddRecord';
import ViewRecord from './pages/ViewRecord';
import Login from './pages/Login';
import Dummy from './pages/Dummy';
import View from './pages/View';
import Fetch from './pages/Fetch';
import Posts from './pages/Posts';


function App() {
  const navigate =useNavigate()
  const onLoginClick=()=>{
    if(localStorage.getItem('isLogin'))
    {
      localStorage.removeItem('isLogin')
    }
    navigate('/login')
  }
  return (
    <>
    <div className='header'>
      <h2>Admin <span>Panel</span></h2>
      <div className='links'>
        <NavLink to='/add_record'>Add Record</NavLink>
        <NavLink to='/view_record'>View Record</NavLink>
        <NavLink to='/fetch'>Fetch</NavLink>
        <NavLink to='/posts'>Post</NavLink>
        <button className={localStorage.getItem('isLogin')? 'active-button':''}
        onClick={onLoginClick}
        >{
          localStorage.getItem('isLogin')?'Logout' :'Login'
        }</button>
      </div>
    </div>
    <Routes>
      <Route path='/add_record'element={<Dummy Component={AddRecord}/>}/>
       <Route path='/view_record' Component={ViewRecord}></Route>
       <Route path='/view/:rollno' element={<Dummy Component={View}/>}></Route>
       <Route path='/fetch' element={<Dummy Component={Fetch}/>}></Route>
       <Route path='/posts' element={<Dummy Component={Posts}/>}></Route>
      <Route path='/login'Component={Login}></Route>
      
    </Routes>
    </>
  );
}

export default App;
