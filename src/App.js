import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

import Home from './pages/Home';
import Header from './component/Header';
import Footer from './component/Footer';

import './App.css'
import Login from './pages/Login';

export const UserContext = createContext()

function App() {
// const user = {userName: 'flawless', accountType: 'admin', _id: '240597'}
const [userState, setUserState] = useState({})
  return (
   <BrowserRouter>
   <UserContext.Provider value={{userState, setUserState}}>
   <Header />

   <Routes >
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
   </Routes>
  
  
   <Footer />
   </UserContext.Provider >
   </BrowserRouter>
  );
}

export default App;
