import React from 'react'
import Home from './Home/Home'
import { Routes,Route, Navigate } from 'react-router-dom'
import BookEvent from './components/BookEvent'
import SignUp from './components/SignUp'
import Findeves from './findeve/Findeves'
import EventCreation from './components/EventCreation'
import { useAuth } from './context/AuthProvider'

function App() {
const [authUser,setAuthUser]=useAuth();
console.log(authUser);

  return (
   <>
  
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/findeve" element={authUser?<Findeves />:<Navigate to="/signup"/>}/>
    <Route path="/bookevent" element={<BookEvent />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/eventcreation" element={<EventCreation />}/>
    
   </Routes>
   </>
  )
}

export default App