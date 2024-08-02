import { NavbarOne } from './component/Navbar';

import {Outlet} from 'react-router-dom';
import './App.css'



function App() {


  return (
    <>
      <NavbarOne />
      <Outlet />
    </>
  )
}



export default App
