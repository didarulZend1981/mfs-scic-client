
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';

function App() {
 

  return (
    <>
  
    <BrowserRouter>
   <Routes>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/SignIn' element={<SignIn/>}></Route>
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
   
   </Routes>
   </BrowserRouter>
    </>
   
  )
}

export default App
