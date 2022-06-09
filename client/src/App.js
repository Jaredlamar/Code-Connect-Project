import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from './Signup';
import Main from './Main';
import BookContainer from './BookContainer';
import Booklist from './Booklist';
import SchoolContainer from './SchoolContainer';
import Events from './Events';
import styled from "styled-components"




function App() {
    const [currentUser, setCurrentUser] = useState(null)
    
  return (
    
    <div className='main'>
        <Router>
            <Routes>
                <Route path="/" element={
                    <Signup setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                } />
                <Route path="/main" element= {
                    <Main setCurrentUser={setCurrentUser} currentUser={currentUser} />
                } />
                <Route path="/bookcontainer" element={<BookContainer  setCurrentUser={setCurrentUser}  currentUser={currentUser}/>} />
                <Route path="/schoolcontainer" element={<SchoolContainer setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
                <Route path="/events" element={<Events setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
                {/* <Route path="/booklist" element={<Booklist setCurrentUser={setCurrentUser}  currentUser={currentUser}/>}  /> */}
            </Routes>
        </Router>
    </div>
    
);
}

export default App;
